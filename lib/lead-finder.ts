import { z } from "zod"

const bigChains = [
  "aldi",
  "burger king",
  "carrefour",
  "decathlon",
  "domino",
  "ikea",
  "kfc",
  "leroy merlin",
  "lidl",
  "mcdonald",
  "mercadona",
  "primark",
  "starbucks",
  "vips",
  "zara",
]

const highTicketTypes = new Set([
  "architect",
  "beauty_salon",
  "car_dealer",
  "dental_clinic",
  "dentist",
  "doctor",
  "electrician",
  "furniture_store",
  "general_contractor",
  "health",
  "home_goods_store",
  "insurance_agency",
  "lawyer",
  "lodging",
  "moving_company",
  "physiotherapist",
  "plumber",
  "real_estate_agency",
  "roofing_contractor",
  "spa",
  "travel_agency",
])

const sectorLabels: Record<string, string> = {
  architect: "Arquitectura",
  bar: "Hosteleria",
  beauty_salon: "Centro estetico",
  car_dealer: "Automocion",
  dental_clinic: "Clinica dental",
  dentist: "Clinica dental",
  doctor: "Clinica",
  electrician: "Servicios locales",
  furniture_store: "Interiorismo",
  general_contractor: "Reformas",
  gym: "Fitness",
  hair_care: "Peluqueria",
  home_goods_store: "Hogar e interiorismo",
  insurance_agency: "Seguros",
  lawyer: "Legal",
  lodging: "Alojamiento",
  moving_company: "Mudanzas",
  physiotherapist: "Clinica",
  plumber: "Servicios locales",
  real_estate_agency: "Inmobiliaria",
  restaurant: "Restaurante",
  roofing_contractor: "Reformas",
  spa: "Centro estetico",
  travel_agency: "Turismo",
}

const nullableText = (max: number) =>
  z
    .preprocess((value) => (typeof value === "string" ? value.trim() : value ?? ""), z.string().max(max))
    .transform((value) => value || null)

const scoreSchema = z.preprocess((value) => Number(value), z.number().int().min(0).max(100))

export const leadFinderSearchSchema = z.object({
  query: z.preprocess((value) => (typeof value === "string" ? value.trim() : ""), z.string().min(3).max(180)),
  city: nullableText(120).optional().default(null),
  max_results: z.preprocess((value) => Number(value ?? 10), z.number().int().min(1).max(20)).default(10),
})

export const leadFinderCandidateSchema = z.object({
  place_id: z.string().min(1).max(180),
  business_name: z.string().min(1).max(180),
  address: z.string().max(500).default(""),
  public_phone: nullableText(80),
  website_url: nullableText(500),
  google_maps_url: nullableText(500),
  rating: z.number().min(0).max(5).nullable().default(null),
  review_count: z.number().int().min(0).nullable().default(null),
  business_status: nullableText(80),
  types: z.array(z.string().max(120)).default([]),
  city: nullableText(120),
  sector: nullableText(120),
  pre_score: scoreSchema,
})

export const leadFinderAnalysisSchema = z.object({
  score: scoreSchema,
  detected_problem: z.string().trim().min(1).max(700),
  opportunity_notes: z.string().trim().min(1).max(1000),
  next_action: z.string().trim().min(1).max(500),
  contact_message: z.string().trim().min(1).max(900),
})

export const leadFinderAnalyzeSchema = z.object({
  candidate: leadFinderCandidateSchema,
  query: nullableText(200).optional().default(null),
})

export const leadFinderSaveSchema = z.object({
  candidate: leadFinderCandidateSchema,
  analysis: leadFinderAnalysisSchema.optional().nullable(),
})

export type LeadFinderCandidate = z.infer<typeof leadFinderCandidateSchema>
export type LeadFinderAnalysis = z.infer<typeof leadFinderAnalysisSchema>

type WebsiteAnalysisSnapshot = {
  available: boolean
  final_url: string
  status: number | null
  title: string | null
  description: string | null
  h1: string | null
  text_sample: string | null
  note: string | null
}

export type GooglePlace = {
  id?: string
  displayName?: { text?: string }
  formattedAddress?: string
  nationalPhoneNumber?: string
  websiteUri?: string
  googleMapsUri?: string
  rating?: number
  userRatingCount?: number
  businessStatus?: string
  types?: string[]
}

export function clampScore(score: number) {
  return Math.min(100, Math.max(0, Math.round(score)))
}

export function looksLikeLargeChain(name: string) {
  const normalizedName = name.toLowerCase()
  return bigChains.some((chain) => normalizedName.includes(chain))
}

export function inferCityFromAddress(address: string) {
  const parts = address
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean)

  const postalPart = parts.find((part) => /^\d{5}\s+/.test(part))
  if (postalPart) return postalPart.replace(/^\d{5}\s+/, "").trim() || null

  if (parts.length >= 2) {
    return parts[parts.length - 2]?.replace(/^\d{5}\s*/, "").trim() || null
  }

  return null
}

export function inferSector(types: string[], businessName = "") {
  const sectorType = types.find((type) => sectorLabels[type])

  if (sectorType) return sectorLabels[sectorType]

  const name = businessName.toLowerCase()
  if (name.includes("reforma")) return "Reformas"
  if (name.includes("dental") || name.includes("clinica")) return "Clinica"
  if (name.includes("inmobiliaria")) return "Inmobiliaria"
  if (name.includes("arquitect")) return "Arquitectura"
  if (name.includes("restaurante") || name.includes("bar")) return "Hosteleria"

  return types[0]?.replaceAll("_", " ") ?? null
}

export function isHighTicketCandidate(types: string[], sector: string | null) {
  const sectorText = sector?.toLowerCase() ?? ""

  return (
    types.some((type) => highTicketTypes.has(type)) ||
    ["arquitect", "clinica", "dental", "inmobiliaria", "interior", "reforma", "legal"].some((word) =>
      sectorText.includes(word),
    )
  )
}

export function scoreCandidate(candidate: Omit<LeadFinderCandidate, "pre_score">) {
  let score = 0

  if (!candidate.website_url) score += 25
  else score += 5
  if ((candidate.review_count ?? 0) >= 30) score += 15
  if ((candidate.review_count ?? 0) >= 100) score += 10
  if ((candidate.rating ?? 0) >= 4.3) score += 10
  if (candidate.public_phone) score += 10
  if (isHighTicketCandidate(candidate.types, candidate.sector)) score += 10
  if (candidate.business_status && candidate.business_status !== "OPERATIONAL") score -= 20
  if (looksLikeLargeChain(candidate.business_name)) score -= 15

  return clampScore(score)
}

export function normalizeGooglePlace(place: GooglePlace, requestedCity: string | null): LeadFinderCandidate | null {
  const businessName = place.displayName?.text?.trim()
  const placeId = place.id?.trim()

  if (!businessName || !placeId) return null

  const address = place.formattedAddress?.trim() ?? ""
  const types = place.types ?? []
  const city = requestedCity || inferCityFromAddress(address)
  const sector = inferSector(types, businessName)
  const candidate = {
    place_id: placeId,
    business_name: businessName,
    address,
    public_phone: place.nationalPhoneNumber?.trim() || null,
    website_url: place.websiteUri?.trim() || null,
    google_maps_url: place.googleMapsUri?.trim() || null,
    rating: typeof place.rating === "number" ? place.rating : null,
    review_count: typeof place.userRatingCount === "number" ? place.userRatingCount : null,
    business_status: place.businessStatus?.trim() || null,
    types,
    city,
    sector,
  }

  return {
    ...candidate,
    pre_score: scoreCandidate(candidate),
  }
}

export function buildBasicAnalysis(candidate: LeadFinderCandidate, websiteSnapshot: WebsiteAnalysisSnapshot | null = null): LeadFinderAnalysis {
  const hasWebsite = Boolean(candidate.website_url)
  const hasPhone = Boolean(candidate.public_phone)
  const reviewCount = candidate.review_count ?? 0
  const problemParts = [
    !hasWebsite ? "no aparece una web clara en Google" : null,
    websiteSnapshot?.available === false ? "la web no se pudo leer correctamente" : null,
    websiteSnapshot?.available && !websiteSnapshot.h1 ? "la home podria comunicar mejor el mensaje principal" : null,
    !hasPhone ? "el contacto podria estar mas guiado" : null,
    reviewCount < 30 ? "hay margen para reforzar confianza con mas contexto" : null,
  ].filter(Boolean)

  const detectedProblem =
    problemParts.length > 0
      ? `Vi que ${problemParts.join(" y ")}.`
      : "Hay margen para explicar mejor el servicio y guiar la solicitud de presupuesto o reserva."

  return {
    score: candidate.pre_score,
    detected_problem: detectedProblem,
    opportunity_notes:
      websiteSnapshot?.available
        ? `Candidato revisable. Web leida: ${websiteSnapshot.title ?? websiteSnapshot.h1 ?? websiteSnapshot.final_url}. Valorar claridad, confianza y contacto.`
        : "Candidato revisable para una demo visual sencilla. Valorar si la web, el contacto y la confianza se entienden rapido.",
    next_action: "Revisar web y preparar una idea visual si encaja.",
    contact_message: `Hola, soy Luca de unostudio. He visto ${candidate.business_name} y creo que vuestra presencia online podria guiar mejor a quienes quieren pedir presupuesto o reservar. He preparado una idea rapida de mejora. Te la puedo ensenar?`,
  }
}
