import { NextResponse } from "next/server"
import { getAuthContext } from "@/lib/auth"

export function jsonError(error: string, status = 400) {
  return NextResponse.json({ ok: false, error }, { status })
}

export async function requireAdminApi() {
  const context = await getAuthContext()

  if (!context.user) {
    return {
      ok: false as const,
      response: jsonError("No autenticado.", 401),
    }
  }

  if (context.profile?.role !== "admin") {
    return {
      ok: false as const,
      response: jsonError("Solo admin.", 403),
    }
  }

  return {
    ok: true as const,
    supabase: context.supabase,
    user: context.user,
    profile: context.profile,
  }
}

export async function readJson(request: Request) {
  try {
    return await request.json()
  } catch {
    return null
  }
}
