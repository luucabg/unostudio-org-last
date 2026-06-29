import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

export type UserRole = "admin" | "client"

export type Profile = {
  id: string
  full_name: string | null
  role: UserRole
}

export function safeNextPath(value: FormDataEntryValue | string | null | undefined, fallback = "/dashboard") {
  if (typeof value !== "string") return fallback
  if (!value.startsWith("/") || value.startsWith("//")) return fallback
  return value
}

export async function getAuthContext() {
  const supabase = await createClient()
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()

  if (userError || !user) {
    return { supabase, user: null, profile: null }
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("id, full_name, role")
    .eq("id", user.id)
    .maybeSingle<Profile>()

  return { supabase, user, profile }
}

export async function requireUser(next = "/dashboard") {
  const context = await getAuthContext()

  if (!context.user) {
    redirect(`/login?next=${encodeURIComponent(next)}`)
  }

  if (!context.profile) {
    redirect("/login?error=perfil")
  }

  return context as Awaited<ReturnType<typeof getAuthContext>> & {
    user: NonNullable<Awaited<ReturnType<typeof getAuthContext>>["user"]>
    profile: Profile
  }
}

export async function requireAdmin(next = "/admin/prospects") {
  const context = await requireUser(next)

  if (context.profile.role !== "admin") {
    redirect("/dashboard")
  }

  return context
}
