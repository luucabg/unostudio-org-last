import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const supabaseUrl =
  process.env.SUPABASE_URL ??
  process.env.NEXT_PUBLIC_SUPABASE_URL ??
  "https://tfdmvfsrilikleofozyi.supabase.co"

const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ??
  process.env.SUPABASE_SECRET_KEY ??
  process.env.SUPABASE_PUBLISHABLE_KEY ??
  process.env.SUPABASE_ANON_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

const allowedServices = new Set(["Landing de Conversión", "Web de Conversión", "Sistema de Conversión", "Otro"])
const allowedBudgets = new Set(["1.500-3.000 €", "3.000-5.000 €", "5.000 €+", "No lo sé"])
const allowedUrgencies = new Set(["Este mes", "1-2 meses", "Más adelante"])

function text(formData: FormData, key: string, max = 4000) {
  const value = formData.get(key)
  return typeof value === "string" ? value.trim().slice(0, max) : ""
}

function redirectTo(request: Request, estado: "enviado" | "error", motivo?: string) {
  const url = new URL("/contacto", request.url)
  url.searchParams.set("estado", estado)
  if (motivo) url.searchParams.set("motivo", motivo)
  url.hash = "formulario"
  return NextResponse.redirect(url, { status: 303 })
}

export async function POST(request: Request) {
  const formData = await request.formData()

  if (text(formData, "confirmacion")) {
    return redirectTo(request, "enviado")
  }

  const payload = {
    name: text(formData, "nombre", 120),
    company: text(formData, "empresa", 160),
    email: text(formData, "email", 180).toLowerCase(),
    phone: text(formData, "telefono", 60) || null,
    current_website: text(formData, "web_actual", 300) || null,
    service_interest: text(formData, "servicio", 80),
    budget_range: text(formData, "presupuesto", 80),
    urgency: text(formData, "urgencia", 80),
    message: text(formData, "mensaje", 4000),
    privacy_accepted: formData.get("acepta_privacidad") === "on",
    page_path: "/contacto",
    source: "unostudio.org",
    metadata: {
      hosting: "vercel",
      storage: "supabase",
    },
  }

  const valid =
    payload.name.length >= 2 &&
    payload.company.length >= 2 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email) &&
    allowedServices.has(payload.service_interest) &&
    allowedBudgets.has(payload.budget_range) &&
    allowedUrgencies.has(payload.urgency) &&
    payload.message.length >= 10 &&
    payload.privacy_accepted

  if (!valid) {
    return redirectTo(request, "error", "validacion")
  }

  if (!supabaseKey) {
    console.error("Supabase contact form key missing")
    return redirectTo(request, "error", "config")
  }

  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })

  const { error } = await supabase.from("contact_requests").insert(payload)

  if (error) {
    console.error("Supabase contact insert failed", error)
    return redirectTo(request, "error", "supabase")
  }

  return redirectTo(request, "enviado")
}
