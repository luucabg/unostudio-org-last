import { NextResponse } from "next/server"
import { requireAdminApi, jsonError, readJson } from "@/lib/admin-api"
import { isRateLimited } from "@/lib/rate-limit"
import {
  leadFinderSearchSchema,
  normalizeGooglePlace,
  type GooglePlace,
  type LeadFinderCandidate,
} from "@/lib/lead-finder"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const googlePlacesUrl = "https://places.googleapis.com/v1/places:searchText"
const googlePlacesFieldMask =
  "places.id,places.displayName,places.formattedAddress,places.nationalPhoneNumber,places.websiteUri,places.googleMapsUri,places.rating,places.userRatingCount,places.businessStatus,places.types"

type GooglePlacesResponse = {
  places?: GooglePlace[]
  error?: { message?: string }
}

export async function POST(request: Request) {
  const admin = await requireAdminApi()
  if (!admin.ok) return admin.response

  if (isRateLimited(`lead-finder:search:${admin.user.id}`, 8, 60_000)) {
    return jsonError("Demasiadas busquedas. Prueba de nuevo en un minuto.", 429)
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  if (!apiKey) {
    return jsonError("Configura GOOGLE_PLACES_API_KEY para buscar empresas.", 500)
  }

  const parsed = leadFinderSearchSchema.safeParse(await readJson(request))
  if (!parsed.success) {
    return jsonError(parsed.error.issues[0]?.message ?? "Busqueda no valida.")
  }

  const payload = parsed.data
  const textQuery = payload.city ? `${payload.query} en ${payload.city}` : payload.query

  let response: Response

  try {
    response = await fetch(googlePlacesUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": googlePlacesFieldMask,
      },
      body: JSON.stringify({
        textQuery,
        languageCode: "es",
        regionCode: "ES",
        maxResultCount: payload.max_results,
      }),
    })
  } catch {
    return jsonError("No se pudo conectar con Google Places.", 502)
  }

  let data: GooglePlacesResponse

  try {
    data = (await response.json()) as GooglePlacesResponse
  } catch {
    return jsonError("Google Places devolvio una respuesta no valida.", 502)
  }

  if (!response.ok) {
    return jsonError(data.error?.message ?? "No se pudo buscar en Google Places.", response.status)
  }

  const candidates = (data.places ?? [])
    .map((place) => normalizeGooglePlace(place, payload.city))
    .filter((candidate): candidate is LeadFinderCandidate => Boolean(candidate))
    .slice(0, payload.max_results)

  return NextResponse.json({ ok: true, candidates })
}
