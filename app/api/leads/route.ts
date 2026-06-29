import { NextResponse } from "next/server"
import { z } from "zod"
import { createAdminClient } from "@/lib/supabase/admin"
import { isRateLimited } from "@/lib/rate-limit"
import { leadSources } from "@/lib/os-types"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const nullableText = (max: number) =>
  z
    .preprocess((value) => (typeof value === "string" ? value.trim() : ""), z.string().max(max))
    .transform((value) => value || null)

const emailField = z
  .preprocess((value) => (typeof value === "string" ? value.trim().toLowerCase() : ""), z.string().max(180))
  .refine((value) => !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), "Email no válido.")
  .transform((value) => value || null)

const leadPayloadSchema = z
  .object({
    organization_slug: nullableText(120),
    organization_id: nullableText(80),
    name: z.preprocess((value) => (typeof value === "string" ? value.trim() : ""), z.string().min(2).max(120)),
    phone: nullableText(80),
    email: emailField,
    service_requested: nullableText(160),
    source: z.enum(leadSources).default("website"),
    estimated_budget: nullableText(120),
    message: nullableText(3000),
    honeypot: nullableText(200),
  })
  .superRefine((payload, context) => {
    if (!payload.organization_slug && !payload.organization_id) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Falta organization_slug u organization_id.",
        path: ["organization_slug"],
      })
    }

    if (payload.organization_id && !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(payload.organization_id)) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: "organization_id no válido.",
        path: ["organization_id"],
      })
    }

    if (!payload.phone && !payload.email) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Deja un teléfono o email.",
        path: ["phone"],
      })
    }
  })

function clientIp(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  )
}

async function requestBody(request: Request) {
  const contentType = request.headers.get("content-type") ?? ""

  if (contentType.includes("application/json")) {
    return request.json()
  }

  const formData = await request.formData()
  return Object.fromEntries(formData.entries())
}

function looksLikeSpam(payload: { message: string | null; name: string }) {
  const text = `${payload.name} ${payload.message ?? ""}`.toLowerCase()
  const urlCount = text.match(/https?:\/\//g)?.length ?? 0
  const blockedWords = ["viagra", "casino", "crypto", "porn", "loan", "backlink"]

  return urlCount > 3 || blockedWords.some((word) => text.includes(word))
}

function jsonError(error: string, status = 400) {
  return NextResponse.json({ ok: false, error }, { status })
}

export async function POST(request: Request) {
  if (isRateLimited(`api-leads:${clientIp(request)}`, 10, 60_000)) {
    return jsonError("Demasiadas solicitudes. Prueba de nuevo en un minuto.", 429)
  }

  let body: unknown

  try {
    body = await requestBody(request)
  } catch {
    return jsonError("Payload no válido.")
  }

  const parsed = leadPayloadSchema.safeParse(body)

  if (!parsed.success) {
    return jsonError(parsed.error.issues[0]?.message ?? "Datos no válidos.")
  }

  const payload = parsed.data

  if (payload.honeypot) {
    return NextResponse.json({ ok: true })
  }

  if (looksLikeSpam(payload)) {
    return jsonError("Mensaje rechazado por spam.", 400)
  }

  let supabase

  try {
    supabase = createAdminClient()
  } catch {
    return jsonError("Falta configuración de Supabase.", 500)
  }

  let organizationId = payload.organization_id

  if (!organizationId && payload.organization_slug) {
    const { data: organization, error } = await supabase
      .from("organizations")
      .select("id")
      .eq("slug", payload.organization_slug)
      .maybeSingle<{ id: string }>()

    if (error) {
      return jsonError("No se pudo validar la organización.", 500)
    }

    organizationId = organization?.id ?? null
  }

  if (!organizationId) {
    return jsonError("Organización no encontrada.", 404)
  }

  const { error } = await supabase.from("leads").insert({
    organization_id: organizationId,
    name: payload.name,
    phone: payload.phone,
    email: payload.email,
    service_requested: payload.service_requested,
    source: payload.source,
    estimated_budget: payload.estimated_budget,
    message: payload.message,
    status: "new",
  })

  if (error) {
    return jsonError("No se pudo guardar la solicitud.", 500)
  }

  return NextResponse.json({ ok: true })
}
