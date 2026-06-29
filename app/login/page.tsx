import type { Metadata } from "next"
import Link from "next/link"
import { redirect } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { getAuthContext, safeNextPath } from "@/lib/auth"
import { createClient } from "@/lib/supabase/server"

type SearchParams = Promise<{
  error?: string
  next?: string
}>

export const metadata: Metadata = {
  title: "Acceso clientes",
  description: "Acceso privado para clientes de unostudio.",
  robots: { index: false, follow: false },
}

export const dynamic = "force-dynamic"

function loginErrorMessage(code?: string) {
  if (code === "credenciales") return "Email o contraseña incorrectos."
  if (code === "perfil") return "Tu usuario no tiene perfil asignado todavía."
  if (code === "config") return "Falta configuración de Supabase."
  return null
}

export default async function LoginPage({ searchParams }: { searchParams?: SearchParams }) {
  const params = await searchParams
  const next = safeNextPath(params?.next, "/dashboard")
  const { user, profile } = await getAuthContext()

  if (user && profile) {
    redirect(profile.role === "admin" && next === "/dashboard" ? "/admin/prospects" : next)
  }

  async function signIn(formData: FormData) {
    "use server"

    const email = String(formData.get("email") ?? "").trim().toLowerCase()
    const password = String(formData.get("password") ?? "")
    const requestedNext = safeNextPath(formData.get("next"), "/dashboard")

    if (!email || !password) {
      redirect(`/login?error=credenciales&next=${encodeURIComponent(requestedNext)}`)
    }

    try {
      const supabase = await createClient()
      const {
        data: authData,
        error,
      } = await supabase.auth.signInWithPassword({ email, password })

      if (error || !authData.user) {
        redirect(`/login?error=credenciales&next=${encodeURIComponent(requestedNext)}`)
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", authData.user.id)
        .maybeSingle<{ role: "admin" | "client" }>()

      if (!profile) {
        redirect(`/login?error=perfil&next=${encodeURIComponent(requestedNext)}`)
      }

      redirect(profile.role === "admin" && requestedNext === "/dashboard" ? "/admin/prospects" : requestedNext)
    } catch (error) {
      if (error instanceof Error && error.message.includes("NEXT_PUBLIC_SUPABASE")) {
        redirect(`/login?error=config&next=${encodeURIComponent(requestedNext)}`)
      }
      throw error
    }
  }

  const errorMessage = loginErrorMessage(params?.error)

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-10 text-zinc-100">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-md flex-col justify-center">
        <Link href="/" className="mb-8 font-display text-2xl font-semibold text-zinc-100">
          unostudio
        </Link>

        <section className="rounded-lg border border-zinc-800/80 bg-zinc-950/85 p-6 shadow-[0_24px_90px_-56px_rgba(56,182,255,0.7)]">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#38b6ff]">Acceso clientes</p>
          <h1 className="mt-3 font-display text-3xl font-bold text-zinc-50">Entra a tu panel</h1>
          <p className="mt-3 text-sm leading-6 text-zinc-500">
            Usa el email y contraseña creados en Supabase Auth.
          </p>

          {errorMessage ? (
            <div className="mt-5 rounded-lg border border-red-400/25 bg-red-400/10 p-3 text-sm text-red-100">
              {errorMessage}
            </div>
          ) : null}

          <form action={signIn} className="mt-6 space-y-4">
            <input type="hidden" name="next" value={next} />
            <label className="block text-sm font-medium text-zinc-300">
              Email
              <input
                className="mt-2 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-[#38b6ff]/70 focus:ring-2 focus:ring-[#38b6ff]/20"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </label>
            <label className="block text-sm font-medium text-zinc-300">
              Contraseña
              <input
                className="mt-2 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-[#38b6ff]/70 focus:ring-2 focus:ring-[#38b6ff]/20"
                name="password"
                type="password"
                autoComplete="current-password"
                required
              />
            </label>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#38b6ff] px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-[#6ac9ff]"
            >
              Entrar
              <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
            </button>
          </form>
        </section>
      </div>
    </main>
  )
}
