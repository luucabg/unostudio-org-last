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

  return `Muestra de web: ${JSON.stringify({
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
    "Analiza este candidato sin inventar datos. Escribe como Luca, de unostudio: vendedor consultivo, natural, breve y nada genérico.",
    query ? `Búsqueda original: ${query}` : null,
    `Candidato: ${JSON.stringify(candidate)}`,
    websitePrompt(websiteSnapshot),
    "Devuelve SOLO JSON válido con: score, detected_problem, opportunity_notes, next_action, contact_message.",
    "Marca: escribe siempre unostudio, sin espacio y en minúsculas.",
    "contact_message debe empezar exactamente así: Hola, soy Luca, de unostudio.",
    "Idioma y tono: español natural de España, profesional, cercano, directo, sin sonar a agencia, desesperado ni spam.",
    "Tratamiento: usa te. Puedes usar vuestra si hablas del negocio. No uses les ni ustedes. No mezcles tratamientos.",
    "No digas que has analizado nada. Usa he visto vuestra ficha, he visto vuestra web o he visto vuestra presencia.",
    "No prometas resultados. No digas que van a conseguir más clientes. No critiques ni avergüences al negocio. Convierte problemas en oportunidades.",
    "En contact_message no uses jerga de marketing ni herramientas internas. No menciones precio, IA ni fuente de datos.",
    "contact_message: ideal entre 220 y 330 caracteres, máximo absoluto 420, máximo 3 frases. Debe ser humano, fácil de responder y no sonar a auditoría.",
    "contact_message: objetivo único: conseguir permiso para enseñar una idea rápida, no vender la web.",
    "contact_message estructura: 1 saludo exacto. 2 observación positiva real. 3 mejora concreta + pregunta de permiso.",
    "contact_message: si hay web, habla de claridad o contacto de la web. Si no hay web, habla de web sencilla o presencia.",
    "contact_message: si rating >= 4.3 y review_count >= 20, menciona reseñas positivas con naturalidad.",
    "contact_message: si hay demo_url, di Tengo una idea rápida de mejora. Si no hay demo_url, usa Creo que... y pregunta si puedes enseñarle una idea rápida.",
    "contact_message: cierres buenos: ¿Te la puedo enseñar? ¿Te puedo enseñar una idea rápida? ¿Te lo puedo enseñar?",
    "contact_message ejemplos de tono: clínica con muchas reseñas: He visto que tenéis muchísimas reseñas positivas y eso ya da mucha confianza. Restaurante: He visto que tenéis buena presencia y creo que una web más clara podría facilitar reservas, carta y contacto.",
    "contact_message evita jerga de marketing, auditoría, herramientas internas y frases que suenen a crítica visual.",
    "detected_problem: trátalo como observación, una sola frase, útil y nada crítica. Evita lenguaje duro o grandilocuente.",
    "detected_problem ejemplos de tono: La web tiene buena base, pero el contacto podría estar más guiado hacia cita o presupuesto. Hay buenas reseñas, pero la web podría explicar mejor el siguiente paso para contactar. No aparece una web vinculada, así que la ficha está haciendo casi todo el trabajo.",
    "opportunity_notes: máximo 2 frases, interno y claro. Explica por qué merece la pena contactar sin humo. No digas ticket alto si no está claro.",
    "opportunity_notes puede decir: Buen prospect por reseñas, servicio local y posibilidad de mejorar contacto. Interesante si es negocio independiente; menos prioritario si depende de marca o cadena.",
    "next_action permitido: Preparar demo visual antes de contactar. Contactar con mensaje corto y enseñar la demo solo si responde. Llamar con guion breve si no hay email ni web.",
    "Scoring: sube por sector valioso, rating alto, muchas reseñas si parece independiente, negocio local, web ausente o claramente mejorable y teléfono público.",
    "Scoring: baja por cadena grande, marca oficial, bajo ticket, sin teléfono ni web, pocas señales de actividad o rating malo con muchas reseñas.",
    "Scoring: si el nombre contiene oficial, concesionario oficial, marca grande, franquicia o cadena reconocible, máximo 65 salvo señales claras de negocio independiente.",
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
              "Eres Luca, de unostudio. Evalúas negocios locales para decidir si tiene sentido prepararles una demo visual. Escribes como vendedor consultivo: claro, natural, breve y respetuoso. Responde SOLO JSON válido.",
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
