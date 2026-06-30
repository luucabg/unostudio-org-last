import { z } from "zod"

const bigChains = [
  "aldi",
  "audi",
  "bmw",
  "burger king",
  "carrefour",
  "citroen",
  "decathlon",
  "domino",
  "fiat",
  "ford",
  "franquicia",
  "hyundai",
  "ikea",
  "kfc",
  "kia",
  "leroy merlin",
  "lidl",
  "mcdonald",
  "mercadona",
  "mercedes",
  "nissan",
  "oficial",
  "opel",
  "peugeot",
  "primark",
  "renault",
  "seat",
  "skoda",
  "starbucks",
  "suzuki",
  "toyota",
  "vips",
  "volkswagen",
  "volvo",
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
  contact_message: z.string().trim().min(1).max(420),
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
  const isLargeBrand = looksLikeLargeChain(candidate.business_name)

  if (!candidate.website_url) score += 25
  else score += 5
  if (!isLargeBrand && (candidate.review_count ?? 0) >= 30) score += 15
  if (!isLargeBrand && (candidate.review_count ?? 0) >= 100) score += 10
  if ((candidate.rating ?? 0) >= 4.3) score += 10
  if (candidate.public_phone) score += 10
  if (isHighTicketCandidate(candidate.types, candidate.sector)) score += 10
  if (candidate.business_status && candidate.business_status !== "OPERATIONAL") score -= 20
  if (!candidate.public_phone && !candidate.website_url) score -= 15
  if (isLargeBrand) score = Math.min(score - 15, 65)

  return clampScore(score)
}

function hasStrongReviews(candidate: LeadFinderCandidate) {
  return (candidate.rating ?? 0) >= 4.3 && (candidate.review_count ?? 0) >= 20
}

function isBookingSector(candidate: LeadFinderCandidate) {
  const text = `${candidate.sector ?? ""} ${candidate.types.join(" ")}`.toLowerCase()
  return ["bar", "beauty", "clinic", "clinica", "dental", "doctor", "restaurant", "restaurante", "spa"].some((word) =>
    text.includes(word),
  )
}

function buildFallbackDetectedProblem(candidate: LeadFinderCandidate, websiteSnapshot: WebsiteAnalysisSnapshot | null) {
  if (!candidate.website_url) {
    return "No aparece una web vinculada, así que la ficha está haciendo casi todo el trabajo."
  }

  if (websiteSnapshot?.available === false) {
    return "La web aparece vinculada, pero en una revisión rápida no se pudo leer con claridad."
  }

  if (websiteSnapshot?.available && !websiteSnapshot.h1) {
    return "La web existe, pero el primer mensaje podría quedar más claro desde el inicio."
  }

  if (candidate.public_phone) {
    return "La web existe, pero el contacto podría estar más guiado hacia presupuesto o reserva."
  }

  return "Hay buena base, pero la web podría explicar mejor el servicio y el siguiente paso."
}

function buildFallbackOpportunity(candidate: LeadFinderCandidate, websiteSnapshot: WebsiteAnalysisSnapshot | null) {
  const signals = [
    candidate.sector ? `servicio local de ${candidate.sector.toLowerCase()}` : null,
    candidate.city ? `zona ${candidate.city}` : null,
    hasStrongReviews(candidate) ? "buenas reseñas" : null,
    !candidate.website_url ? "la ficha hace casi todo el trabajo" : null,
  ].filter(Boolean)
  const signalText = signals.length > 0 ? signals.join(", ") : "hay señales suficientes para revisarlo"
  const webText = websiteSnapshot?.available
    ? "Preparar demo enfocada en cita, confianza y contacto."
    : "Buen prospect por reseñas, sector local y margen para mejorar contacto."

  return `Merece la pena revisarlo por ${signalText}. ${webText}`
}

function buildFallbackContactMessage(candidate: LeadFinderCandidate) {
  const reviewLine = hasStrongReviews(candidate) ? " y tenéis muy buenas reseñas" : ""

  if (!candidate.website_url) {
    return `Hola, soy Luca, de unostudio. He visto vuestra ficha${reviewLine}. Creo que una web sencilla podría ayudaros a explicar mejor los servicios y recibir consultas con más contexto. ¿Te puedo enseñar una idea rápida?`
  }

  if (isBookingSector(candidate)) {
    return `Hola, soy Luca, de unostudio. He visto vuestra presencia${reviewLine}. Creo que se podría guiar mejor a quien quiere pedir cita o reservar, sin darle tantas vueltas. ¿Te puedo enseñar una idea rápida?`
  }

  return `Hola, soy Luca, de unostudio. He visto vuestra web${reviewLine}. Creo que se podría hacer más clara para que la gente entienda antes qué hacéis y contacte con menos vueltas. ¿Te la puedo enseñar?`
}

function buildFallbackNextAction(candidate: LeadFinderCandidate) {
  if (candidate.public_phone && !candidate.website_url) return "Llamar con guion breve si no hay email ni web."
  return "Preparar demo visual antes de contactar."
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
  return {
    score: candidate.pre_score,
    detected_problem: buildFallbackDetectedProblem(candidate, websiteSnapshot),
    opportunity_notes: buildFallbackOpportunity(candidate, websiteSnapshot),
    next_action: buildFallbackNextAction(candidate),
    contact_message: buildFallbackContactMessage(candidate),
  }
}
