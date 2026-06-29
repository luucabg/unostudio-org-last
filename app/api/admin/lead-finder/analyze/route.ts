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
  const fallback = buildBasicAnalysis(candidate)
  const apiKey = process.env.DEEPSEEK_API_KEY

  if (!apiKey) {
    return NextResponse.json({
      ok: true,
      used_ai: false,
      message: "DeepSeek no está configurado. Usando análisis básico.",
      analysis: fallback,
    })
  }

  const baseUrl = (process.env.DEEPSEEK_BASE_URL || "https://api.deepseek.com").replace(/\/+$/, "")
  const model = process.env.DEEPSEEK_MODEL || "deepseek-v4-pro"
  const userPrompt = [
    "Analiza este candidato sin inventar datos.",
    query ? `Busqueda original: ${query}` : null,
    `Candidato: ${JSON.stringify(candidate)}`,
    "Devuelve solo JSON valido con score, detected_problem, opportunity_notes, next_action y contact_message.",
    "No uses frases agresivas. No prometas resultados. Marca: unostudio.",
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
              "Eres un analista comercial B2B para unostudio. Evalúas negocios locales para decidir si tiene sentido prepararles una demo de web/sistema de contacto. Responde SOLO JSON válido.",
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
        message: "DeepSeek no está disponible. Usando análisis básico.",
        analysis: fallback,
      })
    }

    const data = (await response.json()) as DeepSeekResponse
    const content = data.choices?.[0]?.message?.content

    if (!content) {
      return NextResponse.json({
        ok: true,
        used_ai: false,
        message: "DeepSeek no devolvió análisis. Usando análisis básico.",
        analysis: fallback,
      })
    }

    const analysis = normalizeAnalysis(JSON.parse(content), fallback)

    return NextResponse.json({ ok: true, used_ai: true, analysis })
  } catch {
    return NextResponse.json({
      ok: true,
      used_ai: false,
      message: "DeepSeek falló. Usando análisis básico.",
      analysis: fallback,
    })
  }
}
