import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { z } from "zod"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const services = [
  "Demo inicial",
  "Web Esencial",
  "Web Pro",
  "Sistema Local",
  "Proyecto a medida",
  "Mantenimiento web",
  "Otro",
] as const

const budgets = ["Demo gratuita", "490-990 €", "990-1.490 €", "1.490 €+", "2.900 €+", "No lo sé"] as const
const urgencies = ["Este mes", "1-2 meses", "Más adelante"] as const

const nullableText = (max: number) =>
  z
    .preprocess((value) => (typeof value === "string" ? value.trim() : ""), z.string().max(max))
    .transform((value) => value || null)

const emailField = z
  .preprocess((value) => (typeof value === "string" ? value.trim().toLowerCase() : ""), z.string().max(180))
  .refine((value) => !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), "Email no válido.")
  .transform((value) => value || null)

const contactSchema = z
  .object({
    nombre: z.preprocess((value) => (typeof value === "string" ? value.trim() : ""), z.string().min(2).max(120)),
    empresa: z.preprocess((value) => (typeof value === "string" ? value.trim() : ""), z.string().min(2).max(160)),
    email: emailField,
    telefono: nullableText(60),
    web_actual: nullableText(300),
    servicio: z.enum(services),
    presupuesto: z.enum(budgets),
    urgencia: z.enum(urgencies),
    mensaje: nullableText(4000),
    acepta_privacidad: z.literal("on"),
    page_path: nullableText(120),
  })
  .superRefine((payload, context) => {
    const hasEmail = Boolean(payload.email)
    const hasPhone = Boolean(payload.telefono && payload.telefono.length >= 6)
    const pagePath = payload.page_path === "/" ? "/" : "/contacto"

    if (!hasEmail && !hasPhone) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Deja un email o teléfono.",
        path: ["email"],
      })
    }

    if (pagePath !== "/" && (!payload.mensaje || payload.mensaje.length < 10)) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: "El mensaje debe tener al menos 10 caracteres.",
        path: ["mensaje"],
      })
    }
  })

function redirectTo(request: Request, estado: "enviado" | "error", motivo?: string) {
  const url = new URL("/contacto", request.url)
  url.searchParams.set("estado", estado)
  if (motivo) url.searchParams.set("motivo", motivo)
  url.hash = "formulario"
  return NextResponse.redirect(url, { status: 303 })
}

function createContactClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Faltan NEXT_PUBLIC_SUPABASE_URL o NEXT_PUBLIC_SUPABASE_ANON_KEY.")
  }

  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}

export async function POST(request: Request) {
  const formData = await request.formData()

  if (typeof formData.get("confirmacion") === "string" && String(formData.get("confirmacion")).trim()) {
    return redirectTo(request, "enviado")
  }

  const parsed = contactSchema.safeParse(Object.fromEntries(formData.entries()))

  if (!parsed.success) {
    return redirectTo(request, "error", "validacion")
  }

  const data = parsed.data
  const pagePath = data.page_path === "/" ? "/" : "/contacto"

  let supabase

  try {
    supabase = createContactClient()
  } catch {
    return redirectTo(request, "error", "config")
  }

  const { error } = await supabase.from("contact_requests").insert({
    name: data.nombre,
    company: data.empresa,
    email: data.email,
    phone: data.telefono,
    current_website: data.web_actual,
    service_interest: data.servicio,
    budget_range: data.presupuesto,
    urgency: data.urgencia,
    message: data.mensaje || (pagePath === "/" ? "Solicitud de demo sin mensaje." : ""),
    privacy_accepted: true,
    page_path: pagePath,
    source: "unostudio.org",
    metadata: {
      hosting: "vercel",
      storage: "supabase",
    },
  })

  if (error) {
    return redirectTo(request, "error", "supabase")
  }

  return redirectTo(request, "enviado")
}
