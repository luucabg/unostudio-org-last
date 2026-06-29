export const prospectStatuses = [
  "new",
  "reviewed",
  "demo_created",
  "contacted",
  "replied",
  "won",
  "lost",
  "ignored",
] as const

export const leadStatuses = [
  "new",
  "contacted",
  "waiting_reply",
  "quote_sent",
  "won",
  "lost",
  "follow_up_later",
  "review_requested",
] as const

export const leadSources = ["website", "whatsapp", "instagram", "ads", "phone", "manual", "other"] as const

export type ProspectStatus = (typeof prospectStatuses)[number]
export type LeadStatus = (typeof leadStatuses)[number]
export type LeadSource = (typeof leadSources)[number]

export const prospectStatusLabels: Record<ProspectStatus, string> = {
  new: "Nuevo",
  reviewed: "Revisado",
  demo_created: "Demo creada",
  contacted: "Contactado",
  replied: "Respondió",
  won: "Ganado",
  lost: "Perdido",
  ignored: "Ignorado",
}

export const leadStatusLabels: Record<LeadStatus, string> = {
  new: "Nuevo",
  contacted: "Contactado",
  waiting_reply: "Esperando respuesta",
  quote_sent: "Presupuesto enviado",
  won: "Ganado",
  lost: "Perdido",
  follow_up_later: "Recontactar más tarde",
  review_requested: "Pedir reseña",
}

export const leadSourceLabels: Record<LeadSource, string> = {
  website: "Web",
  whatsapp: "WhatsApp",
  instagram: "Instagram",
  ads: "Anuncios",
  phone: "Llamada",
  manual: "Manual",
  other: "Otro",
}
