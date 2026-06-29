"use client"

import { useEffect, useMemo, useState, type FormEvent } from "react"
import { Copy, ExternalLink, Loader2, Plus, RefreshCw, Trash2 } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { prospectStatusLabels, prospectStatuses, type ProspectStatus } from "@/lib/os-types"

type Prospect = {
  id: string
  business_name: string
  sector: string | null
  city: string | null
  website_url: string | null
  instagram_url: string | null
  google_maps_url: string | null
  public_phone: string | null
  public_email: string | null
  contact_person_name: string | null
  contact_person_role: string | null
  source_url: string | null
  detected_problem: string | null
  opportunity_notes: string | null
  score: number | null
  status: ProspectStatus
  next_action: string | null
  demo_url: string | null
  loom_url: string | null
  last_contacted_at: string | null
  created_at: string | null
}

type Filters = {
  status: "all" | ProspectStatus
  sector: string
  city: string
  minScore: string
  sort: "score" | "created_at"
}

const inputClass =
  "w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs text-zinc-100 outline-none transition placeholder:text-zinc-700 focus:border-[#38b6ff]/70 focus:ring-2 focus:ring-[#38b6ff]/15"
const labelClass = "text-[11px] font-medium uppercase tracking-wide text-zinc-500"
const buttonClass =
  "inline-flex items-center justify-center gap-2 rounded-full px-3 py-2 text-xs font-semibold transition disabled:pointer-events-none disabled:opacity-50"

const emptyFilters: Filters = {
  status: "all",
  sector: "",
  city: "",
  minScore: "",
  sort: "score",
}

function field(formData: FormData, key: string, max = 1000) {
  const value = formData.get(key)
  if (typeof value !== "string") return null
  const trimmed = value.trim().slice(0, max)
  return trimmed || null
}

function scoreField(formData: FormData) {
  const raw = field(formData, "score", 3)
  const score = Number(raw ?? 0)
  if (Number.isNaN(score)) return 0
  return Math.min(100, Math.max(0, score))
}

function prospectPatch(formData: FormData) {
  return {
    business_name: field(formData, "business_name", 160) ?? "",
    sector: field(formData, "sector", 120),
    city: field(formData, "city", 120),
    website_url: field(formData, "website_url", 300),
    instagram_url: field(formData, "instagram_url", 300),
    google_maps_url: field(formData, "google_maps_url", 500),
    public_phone: field(formData, "public_phone", 80),
    public_email: field(formData, "public_email", 180),
    contact_person_name: field(formData, "contact_person_name", 120),
    contact_person_role: field(formData, "contact_person_role", 120),
    source_url: field(formData, "source_url", 500),
    detected_problem: field(formData, "detected_problem", 1200),
    opportunity_notes: field(formData, "opportunity_notes", 1600),
    score: scoreField(formData),
    status: field(formData, "status", 40) as ProspectStatus,
    next_action: field(formData, "next_action", 500),
    demo_url: field(formData, "demo_url", 500),
    loom_url: field(formData, "loom_url", 500),
  }
}

function externalUrl(url: string | null) {
  if (!url) return null
  return url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`
}

function friendlyError(message: string) {
  const lowerMessage = message.toLowerCase()

  if (lowerMessage.includes("row-level security") || lowerMessage.includes("permission denied")) {
    return "No tienes permisos para hacer este cambio. Revisa que tu usuario sea admin."
  }

  if (lowerMessage.includes("failed to fetch") || lowerMessage.includes("network")) {
    return "No se pudo conectar con Supabase. Revisa conexión y variables de entorno."
  }

  if (lowerMessage.includes("invalid input") || lowerMessage.includes("violates check")) {
    return "Hay un campo con valor no válido. Revisa estado, score o URLs."
  }

  return "No se pudo completar la acción. Revisa permisos o intenta de nuevo."
}

function buildProspectMessage(prospect: Prospect) {
  const problem = prospect.detected_problem?.trim()
  const softProblem = problem
    ? ` Vi que ${problem.charAt(0).toLowerCase()}${problem.slice(1)} y quizá se podrían recibir solicitudes con más contexto.`
    : ""

  return `Hola, soy Luca de unostudio. He visto ${prospect.business_name} y creo que vuestra web o presencia online podría explicar mejor lo que hacéis y facilitar que os pidan presupuesto o reserva.${softProblem} He preparado una idea rápida de mejora. ¿Te la puedo enseñar?`
}

function LinkPill({ href, label }: { href: string | null; label: string }) {
  const url = externalUrl(href)

  if (!url) {
    return <span className="rounded-full border border-zinc-900 px-2 py-1 text-[11px] text-zinc-700">{label}</span>
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 rounded-full border border-zinc-800 px-2 py-1 text-[11px] text-zinc-400 transition hover:border-[#38b6ff]/40 hover:text-zinc-100"
    >
      {label}
      <ExternalLink className="h-3 w-3" />
    </a>
  )
}

function CopyMessageButton({ prospect }: { prospect: Prospect }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    await navigator.clipboard.writeText(buildProspectMessage(prospect))
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={`${buttonClass} border border-zinc-800 text-zinc-300 hover:border-[#38b6ff]/40 hover:text-zinc-50`}
    >
      <Copy className="h-3.5 w-3.5" />
      {copied ? "Copiado" : "Copiar mensaje"}
    </button>
  )
}

function MoreProspectFields({ prospect }: { prospect: Prospect }) {
  return (
    <details className="rounded-md border border-zinc-900 bg-zinc-950/60 px-3 py-2">
      <summary className="cursor-pointer text-xs font-medium text-zinc-400 transition hover:text-zinc-100">
        Más datos
      </summary>
      <div className="mt-3 grid gap-2">
        <textarea
          name="opportunity_notes"
          defaultValue={prospect.opportunity_notes ?? ""}
          className={`${inputClass} min-h-16`}
          placeholder="Notas internas"
        />
        <input name="website_url" defaultValue={prospect.website_url ?? ""} className={inputClass} placeholder="Website" />
        <input name="instagram_url" defaultValue={prospect.instagram_url ?? ""} className={inputClass} placeholder="Instagram" />
        <input name="google_maps_url" defaultValue={prospect.google_maps_url ?? ""} className={inputClass} placeholder="Google Maps" />
        <input name="public_phone" defaultValue={prospect.public_phone ?? ""} className={inputClass} placeholder="Teléfono público" />
        <input name="public_email" defaultValue={prospect.public_email ?? ""} className={inputClass} placeholder="Email público" />
        <input name="contact_person_name" defaultValue={prospect.contact_person_name ?? ""} className={inputClass} placeholder="Persona de contacto" />
        <input name="contact_person_role" defaultValue={prospect.contact_person_role ?? ""} className={inputClass} placeholder="Rol" />
        <input name="source_url" defaultValue={prospect.source_url ?? ""} className={inputClass} placeholder="Fuente" />
      </div>
    </details>
  )
}

export function ProspectsPanel() {
  const [prospects, setProspects] = useState<Prospect[]>([])
  const [filters, setFilters] = useState<Filters>(emptyFilters)
  const [loading, setLoading] = useState(true)
  const [savingId, setSavingId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [notice, setNotice] = useState<string | null>(null)

  const supabase = useMemo(() => {
    try {
      return createClient()
    } catch {
      return null
    }
  }, [])

  async function loadProspects(nextFilters = filters) {
    if (!supabase) return

    setLoading(true)
    setError(null)

    let query = supabase.from("prospects").select("*")

    if (nextFilters.status !== "all") query = query.eq("status", nextFilters.status)
    if (nextFilters.sector.trim()) query = query.ilike("sector", `%${nextFilters.sector.trim()}%`)
    if (nextFilters.city.trim()) query = query.ilike("city", `%${nextFilters.city.trim()}%`)
    if (nextFilters.minScore.trim()) query = query.gte("score", Number(nextFilters.minScore))

    query =
      nextFilters.sort === "score"
        ? query.order("score", { ascending: false }).order("created_at", { ascending: false })
        : query.order("created_at", { ascending: false })

    const { data, error: queryError } = await query.returns<Prospect[]>()

    if (queryError) {
      setError(friendlyError(queryError.message))
      setProspects([])
    } else {
      setProspects(data ?? [])
    }

    setLoading(false)
  }

  useEffect(() => {
    if (!supabase) {
      setError("Faltan variables de Supabase. Revisa NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY.")
      setLoading(false)
      return
    }

    void loadProspects()
  }, [supabase])

  function updateFilter(key: keyof Filters, value: string) {
    const nextFilters = { ...filters, [key]: value } as Filters
    setFilters(nextFilters)
    void loadProspects(nextFilters)
  }

  async function createProspect(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!supabase) return

    const form = event.currentTarget
    const payload = prospectPatch(new FormData(form))

    if (!payload.business_name) {
      setError("El nombre del negocio es obligatorio.")
      return
    }

    setSavingId("new")
    setError(null)

    const { error: insertError } = await supabase.from("prospects").insert(payload)

    if (insertError) {
      setError(friendlyError(insertError.message))
    } else {
      form.reset()
      setNotice("Prospect creado.")
      await loadProspects()
    }

    setSavingId(null)
  }

  async function saveProspect(id: string, formData: FormData) {
    if (!supabase) return
    const payload = prospectPatch(formData)

    if (!payload.business_name) {
      setError("El nombre del negocio es obligatorio.")
      return
    }

    setSavingId(id)
    setError(null)

    const { error: updateError } = await supabase.from("prospects").update(payload).eq("id", id)

    if (updateError) {
      setError(friendlyError(updateError.message))
    } else {
      setNotice("Prospect guardado.")
      await loadProspects()
    }

    setSavingId(null)
  }

  async function updateStatus(prospect: Prospect, status: ProspectStatus) {
    if (!supabase) return

    setSavingId(prospect.id)
    setError(null)

    const { error: updateError } = await supabase
      .from("prospects")
      .update({
        status,
        last_contacted_at: status === "contacted" ? new Date().toISOString() : prospect.last_contacted_at,
      })
      .eq("id", prospect.id)

    if (updateError) {
      setError(friendlyError(updateError.message))
    } else {
      await loadProspects()
    }

    setSavingId(null)
  }

  async function deleteProspect(id: string) {
    if (!supabase || !window.confirm("¿Borrar prospect?")) return

    setSavingId(id)
    setError(null)

    const { error: deleteError } = await supabase.from("prospects").delete().eq("id", id)

    if (deleteError) {
      setError(friendlyError(deleteError.message))
    } else {
      setNotice("Prospect borrado.")
      await loadProspects()
    }

    setSavingId(null)
  }

  return (
    <div className="min-h-screen bg-zinc-950 px-5 py-8 text-zinc-100">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-4 border-b border-zinc-900 pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#38b6ff]">unostudio OS</p>
            <h1 className="mt-3 font-display text-3xl font-bold md:text-5xl">Prospección</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
              Empresas objetivo introducidas manualmente. Sin scraping, sin envíos automáticos.
            </p>
          </div>
          <a href="/logout" className="text-sm text-zinc-500 transition hover:text-zinc-200">
            Salir
          </a>
        </header>

        <section className="mt-6 rounded-lg border border-zinc-800/80 bg-zinc-950/70 p-4">
          <form onSubmit={createProspect} className="grid gap-3 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <label className={labelClass}>Negocio</label>
              <input name="business_name" className={inputClass} required />
            </div>
            <div className="lg:col-span-2">
              <label className={labelClass}>Sector</label>
              <input name="sector" className={inputClass} />
            </div>
            <div className="lg:col-span-2">
              <label className={labelClass}>Ciudad</label>
              <input name="city" className={inputClass} />
            </div>
            <div className="lg:col-span-2">
              <label className={labelClass}>Web</label>
              <input name="website_url" className={inputClass} placeholder="https://" />
            </div>
            <div>
              <label className={labelClass}>Score</label>
              <input name="score" type="number" min="0" max="100" defaultValue="0" className={inputClass} />
            </div>
            <input type="hidden" name="status" value="new" />
            <div className="flex items-end lg:col-span-2">
              <button
                type="submit"
                disabled={savingId === "new"}
                className={`${buttonClass} w-full bg-[#38b6ff] text-zinc-950 hover:bg-[#6ac9ff]`}
              >
                {savingId === "new" ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Plus className="h-3.5 w-3.5" />}
                Crear prospect
              </button>
            </div>
          </form>
        </section>

        <section className="mt-5 grid gap-3 rounded-lg border border-zinc-900 bg-zinc-950/50 p-4 lg:grid-cols-6">
          <div>
            <label className={labelClass}>Estado</label>
            <select className={inputClass} value={filters.status} onChange={(event) => updateFilter("status", event.target.value)}>
              <option value="all">Todos</option>
              {prospectStatuses.map((status) => (
                <option key={status} value={status}>
                  {prospectStatusLabels[status]}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass}>Sector</label>
            <input className={inputClass} value={filters.sector} onChange={(event) => updateFilter("sector", event.target.value)} />
          </div>
          <div>
            <label className={labelClass}>Ciudad</label>
            <input className={inputClass} value={filters.city} onChange={(event) => updateFilter("city", event.target.value)} />
          </div>
          <div>
            <label className={labelClass}>Score mínimo</label>
            <input
              className={inputClass}
              type="number"
              min="0"
              max="100"
              value={filters.minScore}
              onChange={(event) => updateFilter("minScore", event.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Orden</label>
            <select className={inputClass} value={filters.sort} onChange={(event) => updateFilter("sort", event.target.value)}>
              <option value="score">Score</option>
              <option value="created_at">Fecha</option>
            </select>
          </div>
          <div className="flex items-end">
            <button
              type="button"
              onClick={() => void loadProspects()}
              className={`${buttonClass} w-full border border-zinc-800 text-zinc-300 hover:border-[#38b6ff]/40 hover:text-zinc-50`}
            >
              <RefreshCw className="h-3.5 w-3.5" />
              Refrescar
            </button>
          </div>
        </section>

        {error ? (
          <div className="mt-5 rounded-lg border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100" role="alert">
            {error}
          </div>
        ) : null}
        {notice ? (
          <div className="mt-5 rounded-lg border border-[#38b6ff]/25 bg-[#38b6ff]/10 p-4 text-sm text-sky-100" aria-live="polite">
            {notice}
          </div>
        ) : null}

        {loading ? (
          <div className="mt-12 flex items-center justify-center gap-2 text-sm text-zinc-500">
            <Loader2 className="h-4 w-4 animate-spin" />
            Cargando prospects...
          </div>
        ) : prospects.length === 0 ? (
          <div className="mt-8 rounded-lg border border-dashed border-zinc-800 p-10 text-center">
            <p className="font-medium text-zinc-200">Aún no hay prospects.</p>
            <p className="mt-2 text-sm text-zinc-500">Crea el primero arriba o limpia filtros.</p>
          </div>
        ) : (
          <>
            <div className="mt-6 hidden overflow-hidden rounded-lg border border-zinc-800/80 lg:block">
              <div className="grid grid-cols-[1.15fr_0.8fr_0.8fr_0.75fr_1fr_1.15fr_1.1fr] gap-3 bg-zinc-900/40 px-4 py-3 text-[11px] font-semibold uppercase tracking-wide text-zinc-500">
                <span>Negocio</span>
                <span>Sector</span>
                <span>Ciudad</span>
                <span>Score</span>
                <span>Estado</span>
                <span>Próxima acción</span>
                <span>Acciones</span>
              </div>
              <div className="divide-y divide-zinc-900">
                {prospects.map((prospect) => (
                  <form
                    key={prospect.id}
                    onSubmit={(event) => {
                      event.preventDefault()
                      void saveProspect(prospect.id, new FormData(event.currentTarget))
                    }}
                    className="grid grid-cols-[1.15fr_0.8fr_0.8fr_0.75fr_1fr_1.15fr_1.1fr] gap-3 px-4 py-4"
                  >
                    <div className="space-y-2">
                      <input name="business_name" defaultValue={prospect.business_name} className={inputClass} />
                      <div className="flex flex-wrap gap-1.5">
                        <LinkPill href={prospect.website_url} label="Web" />
                        <LinkPill href={prospect.instagram_url} label="Instagram" />
                        <LinkPill href={prospect.google_maps_url} label="Maps" />
                      </div>
                    </div>
                    <input name="sector" defaultValue={prospect.sector ?? ""} className={inputClass} />
                    <input name="city" defaultValue={prospect.city ?? ""} className={inputClass} />
                    <input name="score" type="number" min="0" max="100" defaultValue={prospect.score ?? 0} className={inputClass} />
                    <select
                      name="status"
                      defaultValue={prospect.status}
                      className={inputClass}
                      onChange={(event) => void updateStatus(prospect, event.target.value as ProspectStatus)}
                    >
                      {prospectStatuses.map((status) => (
                        <option key={status} value={status}>
                          {prospectStatusLabels[status]}
                        </option>
                      ))}
                    </select>
                    <input name="next_action" defaultValue={prospect.next_action ?? ""} className={inputClass} />
                    <div className="flex flex-col gap-2">
                      <input name="demo_url" defaultValue={prospect.demo_url ?? ""} className={inputClass} placeholder="Demo URL" />
                      <input name="loom_url" defaultValue={prospect.loom_url ?? ""} className={inputClass} placeholder="Loom URL" />
                      <textarea name="detected_problem" defaultValue={prospect.detected_problem ?? ""} className={`${inputClass} min-h-16`} placeholder="Problema detectado" />
                      <MoreProspectFields prospect={prospect} />
                      <button type="submit" disabled={savingId === prospect.id} className={`${buttonClass} bg-zinc-100 text-zinc-950 hover:bg-sky-200`}>
                        Guardar cambios
                      </button>
                      <CopyMessageButton prospect={prospect} />
                      <button
                        type="button"
                        onClick={() => void deleteProspect(prospect.id)}
                        className={`${buttonClass} border border-red-400/30 text-red-200 hover:bg-red-400/10`}
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                        Borrar
                      </button>
                    </div>
                  </form>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-4 lg:hidden">
              {prospects.map((prospect) => (
                <form
                  key={prospect.id}
                  onSubmit={(event) => {
                    event.preventDefault()
                    void saveProspect(prospect.id, new FormData(event.currentTarget))
                  }}
                  className="rounded-lg border border-zinc-800/80 bg-zinc-950/70 p-4"
                >
                  <div className="grid gap-3">
                    <label className={labelClass}>
                      Negocio
                      <input name="business_name" defaultValue={prospect.business_name} className={inputClass} />
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <label className={labelClass}>
                        Sector
                        <input name="sector" defaultValue={prospect.sector ?? ""} className={inputClass} />
                      </label>
                      <label className={labelClass}>
                        Ciudad
                        <input name="city" defaultValue={prospect.city ?? ""} className={inputClass} />
                      </label>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <label className={labelClass}>
                        Score
                        <input name="score" type="number" min="0" max="100" defaultValue={prospect.score ?? 0} className={inputClass} />
                      </label>
                      <label className={labelClass}>
                        Estado
                        <select
                          name="status"
                          defaultValue={prospect.status}
                          className={inputClass}
                          onChange={(event) => void updateStatus(prospect, event.target.value as ProspectStatus)}
                        >
                          {prospectStatuses.map((status) => (
                            <option key={status} value={status}>
                              {prospectStatusLabels[status]}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>
                    <label className={labelClass}>
                      Próxima acción
                      <input name="next_action" defaultValue={prospect.next_action ?? ""} className={inputClass} />
                    </label>
                    <label className={labelClass}>
                      Problema detectado
                      <textarea name="detected_problem" defaultValue={prospect.detected_problem ?? ""} className={`${inputClass} min-h-20`} />
                    </label>
                    <label className={labelClass}>
                      Demo y Loom
                      <input name="demo_url" defaultValue={prospect.demo_url ?? ""} className={inputClass} placeholder="Demo URL" />
                      <input name="loom_url" defaultValue={prospect.loom_url ?? ""} className={inputClass} placeholder="Loom URL" />
                    </label>
                    <MoreProspectFields prospect={prospect} />
                    <div className="flex flex-wrap gap-2">
                      <LinkPill href={prospect.website_url} label="Web" />
                      <LinkPill href={prospect.instagram_url} label="Instagram" />
                      <LinkPill href={prospect.google_maps_url} label="Maps" />
                    </div>
                    <div className="grid gap-2 sm:grid-cols-3">
                      <button type="submit" disabled={savingId === prospect.id} className={`${buttonClass} bg-zinc-100 text-zinc-950 hover:bg-sky-200`}>
                        Guardar cambios
                      </button>
                      <CopyMessageButton prospect={prospect} />
                      <button
                        type="button"
                        onClick={() => void deleteProspect(prospect.id)}
                        className={`${buttonClass} border border-red-400/30 text-red-200 hover:bg-red-400/10`}
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                        Borrar
                      </button>
                    </div>
                  </div>
                </form>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
