import { NextResponse } from "next/server"
import { requireAdminApi, jsonError, readJson } from "@/lib/admin-api"
import { isRateLimited } from "@/lib/rate-limit"
import {
  buildBasicAnalysis,
  clampScore,
  leadFinderAnalysisSchema,
  leadFinderAnalyzeSchema,
  type LeadFinderAnalysis,
} from "@/lib/lead-finder"
import { fetchWebsiteSnapshot, type WebsiteSnapshot } from "@/lib/lead-finder-website"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

type DeepSeekResponse = {
  choices?: Array<{
    message?: {
      content?: string
    }
  }>
}

function normalizeAnalysis(value: unknown, fallback: LeadFinderAnalysis) {
  const parsed = leadFinderAnalysisSchema.safeParse(value)

  if (!parsed.success) return fallback

  return {
    ...parsed.data,
    score: clampScore(parsed.data.score),
  }
}

function parseJsonObject(content: string) {
  const trimmed = content
    .trim()
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```$/i, "")
    .trim()

  try {
    return JSON.parse(trimmed) as unknown
  } catch {
    const firstBrace = trimmed.indexOf("{")
    const lastBrace = trimmed.lastIndexOf("}")

    if (firstBrace === -1 || lastBrace === -1 || lastBrace <= firstBrace) return null

    try {
      return JSON.parse(trimmed.slice(firstBrace, lastBrace + 1)) as unknown
    } catch {
      return null
    }
  }
}

function websitePrompt(snapshot: WebsiteSnapshot | null) {
  if (!snapshot) return "Web: no hay web vinculada en los datos recibidos."

  return `Web analizada: ${JSON.stringify({
    available: snapshot.available,
    final_url: snapshot.final_url,
    status: snapshot.status,
    title: snapshot.title,
    description: snapshot.description,
    h1: snapshot.h1,
    text_sample: snapshot.text_sample,
    note: snapshot.note,
  })}`
}

export async function POST(request: Request) {
  const admin = await requireAdminApi()
  if (!admin.ok) return admin.response

  if (isRateLimited(`lead-finder:analyze:${admin.user.id}`, 20, 60_000)) {
    return jsonError("Demasiados analisis. Prueba de nuevo en un minuto.", 429)
  }

  const parsed = leadFinderAnalyzeSchema.safeParse(await readJson(request))
  if (!parsed.success) {
    return jsonError(parsed.error.issues[0]?.message ?? "Candidato no valido.")
  }

  const { candidate, query } = parsed.data
  const websiteSnapshot = await fetchWebsiteSnapshot(candidate.website_url)
  const fallback = buildBasicAnalysis(candidate, websiteSnapshot)
  const apiKey = process.env.DEEPSEEK_API_KEY

  if (!apiKey) {
    return NextResponse.json({
      ok: true,
      used_ai: false,
      message: "IA no configurada. Usando análisis básico.",
      analysis: fallback,
    })
  }

  const baseUrl = (process.env.DEEPSEEK_BASE_URL || "https://api.deepseek.com").replace(/\/+$/, "")
  const model = process.env.DEEPSEEK_MODEL || "deepseek-v4-pro"
  const userPrompt = [
    "Analiza este candidato sin inventar datos. Escribe como un vendedor consultivo bueno, no como una agencia genérica.",
    query ? `Búsqueda original: ${query}` : null,
    `Candidato: ${JSON.stringify(candidate)}`,
    websitePrompt(websiteSnapshot),
    "Devuelve SOLO JSON válido con: score, detected_problem, opportunity_notes, next_action, contact_message.",
    "Marca: escribe siempre unostudio, sin espacio y en minúsculas.",
    "Idioma y tono: español natural de España, profesional, cercano, directo, sin sonar desesperado ni spam.",
    "Tratamiento: usa te por defecto. No uses ustedes ni les. No mezcles os y les. Puedes usar vuestra si hablas de la empresa, pero la pregunta final debe ser con te.",
    "No digas que hemos analizado nada. Usa he visto vuestra ficha, he visto vuestra web o he visto vuestra presencia online.",
    "No prometas resultados. No digas que van a conseguir más clientes. No critiques ni avergüences al negocio. Convierte problemas en oportunidades.",
    "En contact_message no uses jerga: captación online, optimizar conversiones, plataforma, CRM, leads, IA, Google Places, demo sin compromiso, expertos líderes.",
    "contact_message: máximo 350 caracteres y 3 frases. Estructura: 1 presentación breve. 2 observación positiva + oportunidad de mejora. 3 pregunta de permiso para enseñar una idea/demo.",
    "contact_message: no vendas precio. Si hay web, habla de mejorar claridad/contacto de la web. Si no hay web, habla de web sencilla o presencia online.",
    "contact_message: si rating >= 4.3 y review_count >= 20, menciona las reseñas de forma positiva.",
    "contact_message: si existe demo_url, di he preparado una idea rápida. Si no existe demo_url, di creo que podría prepararte una idea rápida.",
    "contact_message: ejemplos de cierre buenos: ¿Te lo puedo enseñar? ¿Te la puedo enseñar? ¿Te puedo enseñar una idea rápida?",
    "detected_problem: una sola frase, observación útil, no crítica. No digas problema grave.",
    "opportunity_notes: máximo 2 frases. Explica por qué merece la pena contactar. Prioriza ticket alto, reseñas, ciudad, sector y presencia online. No infles el candidato si faltan señales.",
    "next_action: si no hay demo_url, Preparar una demo visual antes de contactar. Si hay demo_url, Enviar mensaje corto y enseñar la demo si responde. Si hay teléfono pero no email ni web, Contactar por teléfono con guion breve. Si hay email o web, Enviar mensaje corto con permiso para enseñar la idea.",
    "Scoring: sube score por sector de ticket alto, rating alto, muchas reseñas, negocio local, web ausente o claramente mejorable y teléfono público.",
    "Scoring: baja score por cadena grande, bajo ticket, sin teléfono ni web, pocas señales de actividad o rating malo con muchas reseñas.",
  ]
    .filter(Boolean)
    .join("\n")

  try {
    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: "system",
            content:
              "Eres un analista comercial B2B para unostudio. Evalúas negocios locales para decidir si tiene sentido prepararles una demo visual. Escribes como vendedor consultivo: claro, concreto y respetuoso. Responde SOLO JSON válido.",
          },
          {
            role: "user",
            content: userPrompt,
          },
        ],
        response_format: { type: "json_object" },
        temperature: 0.2,
      }),
    })

    if (!response.ok) {
      return NextResponse.json({
        ok: true,
        used_ai: false,
        message: "IA no disponible. Usando análisis básico.",
        analysis: fallback,
      })
    }

    const data = (await response.json()) as DeepSeekResponse
    const content = data.choices?.[0]?.message?.content

    if (!content) {
      return NextResponse.json({
        ok: true,
        used_ai: false,
        message: "IA no devolvió análisis. Usando análisis básico.",
        analysis: fallback,
      })
    }

    const parsedContent = parseJsonObject(content)
    const analysis = parsedContent ? normalizeAnalysis(parsedContent, fallback) : fallback

    return NextResponse.json({ ok: true, used_ai: true, analysis })
  } catch {
    return NextResponse.json({
      ok: true,
      used_ai: false,
      message: "IA falló. Usando análisis básico.",
      analysis: fallback,
    })
  }
}
