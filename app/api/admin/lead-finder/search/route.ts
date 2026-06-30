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

type Bounds = {
  low: { latitude: number; longitude: number }
  high: { latitude: number; longitude: number }
}

const spainBounds: Bounds = {
  low: { latitude: 35.75, longitude: -9.5 },
  high: { latitude: 43.95, longitude: 4.4 },
}

const cityBounds: Record<string, Bounds> = {
  valencia: {
    low: { latitude: 39.25, longitude: -0.6 },
    high: { latitude: 39.65, longitude: -0.15 },
  },
  madrid: {
    low: { latitude: 40.2, longitude: -3.95 },
    high: { latitude: 40.65, longitude: -3.45 },
  },
  barcelona: {
    low: { latitude: 41.25, longitude: 1.9 },
    high: { latitude: 41.55, longitude: 2.35 },
  },
  alicante: {
    low: { latitude: 38.2, longitude: -0.65 },
    high: { latitude: 38.5, longitude: -0.3 },
  },
  castellon: {
    low: { latitude: 39.85, longitude: -0.2 },
    high: { latitude: 40.1, longitude: 0.1 },
  },
}

const cityAliases: Record<string, string[]> = {
  valencia: ["valencia", "valència"],
  madrid: ["madrid"],
  barcelona: ["barcelona"],
  alicante: ["alicante", "alacant"],
  castellon: ["castellón", "castelló", "castellon"],
}

const blockedCountries = ["venezuela", "mexico", "méxico", "colombia", "argentina", "chile", "peru", "perú", "united states"]
const spanishPostalCodePattern = /\b(0[1-9]|[1-4]\d|5[0-2])\d{3}\b/

function normalizeCity(value: string | null) {
  if (!value) return null

  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
}

function normalizeAddress(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
}

function addressMatchesSearch(place: GooglePlace, cityKey: string | null) {
  const rawAddress = place.formattedAddress ?? ""
  const address = normalizeAddress(rawAddress)

  if (blockedCountries.some((country) => address.includes(normalizeAddress(country)))) return false

  if (cityKey && cityAliases[cityKey]) {
    return cityAliases[cityKey].some((alias) => address.includes(normalizeAddress(alias)))
  }

  return address.includes("spain") || address.includes("espana") || spanishPostalCodePattern.test(address)
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
  const cityKey = normalizeCity(payload.city)
  const textQuery = payload.city ? `${payload.query} en ${payload.city}, España` : payload.query
  const bounds = cityKey && cityBounds[cityKey] ? cityBounds[cityKey] : spainBounds

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
        locationRestriction: {
          rectangle: {
            low: bounds.low,
            high: bounds.high,
          },
        },
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

  const places = data.places ?? []
  const filteredPlaces = places.filter((place) => addressMatchesSearch(place, cityKey))
  const filteredCount = places.length - filteredPlaces.length
  const candidates = filteredPlaces
    .map((place) => normalizeGooglePlace(place, payload.city))
    .filter((candidate): candidate is LeadFinderCandidate => Boolean(candidate))
    .sort((first, second) => second.pre_score - first.pre_score)
    .slice(0, payload.max_results)

  return NextResponse.json({
    ok: true,
    candidates,
    filtered_count: filteredCount,
    warning:
      filteredCount > 0
        ? "Se han filtrado resultados fuera de España o fuera de la ciudad indicada."
        : null,
  })
}
