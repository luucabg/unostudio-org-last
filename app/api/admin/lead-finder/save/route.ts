import { NextResponse } from "next/server"
import { requireAdminApi, jsonError, readJson } from "@/lib/admin-api"
import { isRateLimited } from "@/lib/rate-limit"
import { buildBasicAnalysis, leadFinderSaveSchema } from "@/lib/lead-finder"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

type ProspectId = {
  id: string
}

function duplicateResponse() {
  return NextResponse.json({
    ok: false,
    reason: "duplicate",
    message: "Este prospect ya existe.",
  })
}

export async function POST(request: Request) {
  const admin = await requireAdminApi()
  if (!admin.ok) return admin.response

  if (isRateLimited(`lead-finder:save:${admin.user.id}`, 30, 60_000)) {
    return jsonError("Demasiados guardados. Prueba de nuevo en un minuto.", 429)
  }

  const parsed = leadFinderSaveSchema.safeParse(await readJson(request))
  if (!parsed.success) {
    return jsonError(parsed.error.issues[0]?.message ?? "Datos no validos.")
  }

  const { candidate } = parsed.data
  const analysis = parsed.data.analysis ?? buildBasicAnalysis(candidate)

  if (candidate.google_maps_url) {
    const { data } = await admin.supabase
      .from("prospects")
      .select("id")
      .eq("google_maps_url", candidate.google_maps_url)
      .maybeSingle<ProspectId>()

    if (data) return duplicateResponse()
  }

  if (candidate.website_url) {
    const { data } = await admin.supabase
      .from("prospects")
      .select("id")
      .eq("website_url", candidate.website_url)
      .maybeSingle<ProspectId>()

    if (data) return duplicateResponse()
  }

  if (candidate.city) {
    const { data } = await admin.supabase
      .from("prospects")
      .select("id")
      .eq("business_name", candidate.business_name)
      .eq("city", candidate.city)
      .maybeSingle<ProspectId>()

    if (data) return duplicateResponse()
  }

  const { data, error } = await admin.supabase
    .from("prospects")
    .insert({
      business_name: candidate.business_name,
      sector: candidate.sector,
      city: candidate.city,
      website_url: candidate.website_url,
      google_maps_url: candidate.google_maps_url,
      public_phone: candidate.public_phone,
      source_url: candidate.google_maps_url,
      detected_problem: analysis.detected_problem,
      opportunity_notes: analysis.opportunity_notes,
      score: analysis.score,
      status: "reviewed",
      next_action: analysis.next_action,
    })
    .select("id")
    .single<ProspectId>()

  if (error || !data) {
    return jsonError("No se pudo guardar el prospect.", 500)
  }

  return NextResponse.json({ ok: true, prospect_id: data.id })
}
