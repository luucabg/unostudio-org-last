"use client"

import Link from "next/link"
import { useMemo, useState, type FormEvent, type ReactNode } from "react"
import { Copy, ExternalLink, Loader2, Save, Search, Sparkles } from "lucide-react"
import { AdminMiniNav } from "@/components/admin/admin-mini-nav"
import type { LeadFinderAnalysis, LeadFinderCandidate } from "@/lib/lead-finder"

type LeadFinderPanelProps = {
  hasGooglePlacesKey: boolean
  hasDeepSeekKey: boolean
}

type SearchResponse =
  | { ok: true; candidates: LeadFinderCandidate[]; filtered_count?: number; warning?: string | null }
  | { ok: false; error: string }

type AnalyzeResponse =
  | { ok: true; used_ai: boolean; message?: string; analysis: LeadFinderAnalysis }
  | { ok: false; error: string }

type SaveResponse =
  | { ok: true; prospect_id: string }
  | { ok: false; reason?: "duplicate"; message?: string; error?: string }

const inputClass =
  "w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs text-zinc-100 outline-none transition placeholder:text-zinc-700 focus:border-[#38b6ff]/70 focus:ring-2 focus:ring-[#38b6ff]/15"
const labelClass = "text-[11px] font-medium uppercase tracking-wide text-zinc-500"
const buttonClass =
  "inline-flex items-center justify-center gap-2 rounded-full px-3 py-2 text-xs font-semibold transition disabled:pointer-events-none disabled:opacity-50"

function externalUrl(url: string | null) {
  if (!url) return null
  return url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`
}

function candidateKey(candidate: LeadFinderCandidate) {
  return candidate.place_id
}

function Badge({ children }: { children: ReactNode }) {
  return <span className="rounded-full border border-zinc-800 px-2 py-1 text-[11px] text-zinc-400">{children}</span>
}

function ExternalButton({ href, label }: { href: string | null; label: string }) {
  const url = externalUrl(href)

  if (!url) {
    return (
      <span className={`${buttonClass} border border-zinc-900 text-zinc-700`}>
        {label}
        <ExternalLink className="h-3.5 w-3.5" />
      </span>
    )
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={`${buttonClass} border border-zinc-800 text-zinc-300 hover:border-[#38b6ff]/40 hover:text-zinc-50`}
    >
      {label}
      <ExternalLink className="h-3.5 w-3.5" />
    </a>
  )
}

function CopyMessageButton({ message }: { message: string }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    await navigator.clipboard.writeText(message)
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

export function LeadFinderPanel({ hasGooglePlacesKey, hasDeepSeekKey }: LeadFinderPanelProps) {
  const [query, setQuery] = useState("")
  const [city, setCity] = useState("")
  const [maxResults, setMaxResults] = useState(10)
  const [candidates, setCandidates] = useState<LeadFinderCandidate[]>([])
  const [analyses, setAnalyses] = useState<Record<string, LeadFinderAnalysis>>({})
  const [savedProspects, setSavedProspects] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [analyzingId, setAnalyzingId] = useState<string | null>(null)
  const [savingId, setSavingId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [notice, setNotice] = useState<string | null>(null)

  const hasSearched = useMemo(() => loading || candidates.length > 0 || Boolean(error), [loading, candidates.length, error])

  async function searchCandidates(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!hasGooglePlacesKey) {
      setError("Configura GOOGLE_PLACES_API_KEY para buscar empresas.")
      return
    }

    setLoading(true)
    setError(null)
    setNotice(null)
    setCandidates([])
    setAnalyses({})
    setSavedProspects({})

    try {
      const response = await fetch("/api/admin/lead-finder/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query,
          city,
          max_results: maxResults,
        }),
      })
      const data = (await response.json()) as SearchResponse

      if (!response.ok || !data.ok) {
        throw new Error(data.ok ? "No se pudo buscar." : data.error)
      }

      setCandidates(data.candidates)
      setNotice(data.warning ?? (!hasDeepSeekKey ? "IA no configurada. Usando análisis básico." : null))
    } catch (searchError) {
      setError(searchError instanceof Error ? searchError.message : "No se pudo buscar empresas.")
    } finally {
      setLoading(false)
    }
  }

  async function analyzeCandidate(candidate: LeadFinderCandidate) {
    const key = candidateKey(candidate)
    setAnalyzingId(key)
    setError(null)

    try {
      const response = await fetch("/api/admin/lead-finder/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ candidate, query }),
      })
      const data = (await response.json()) as AnalyzeResponse

      if (!response.ok || !data.ok) {
        throw new Error(data.ok ? "No se pudo analizar." : data.error)
      }

      setAnalyses((current) => ({ ...current, [key]: data.analysis }))
      if (data.message) setNotice(data.message)
    } catch (analyzeError) {
      setError(analyzeError instanceof Error ? analyzeError.message : "No se pudo analizar el candidato.")
    } finally {
      setAnalyzingId(null)
    }
  }

  async function saveCandidate(candidate: LeadFinderCandidate) {
    const key = candidateKey(candidate)
    setSavingId(key)
    setError(null)

    try {
      const response = await fetch("/api/admin/lead-finder/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          candidate,
          analysis: analyses[key] ?? null,
        }),
      })
      const data = (await response.json()) as SaveResponse

      if (!response.ok || !data.ok) {
        throw new Error(data.ok ? "No se pudo guardar." : data.message ?? data.error ?? "No se pudo guardar.")
      }

      setSavedProspects((current) => ({ ...current, [key]: data.prospect_id }))
      setNotice("Guardado en prospects.")
    } catch (saveError) {
      setError(saveError instanceof Error ? saveError.message : "No se pudo guardar el prospect.")
    } finally {
      setSavingId(null)
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 px-5 py-8 text-zinc-100">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-4 border-b border-zinc-900 pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#38b6ff]">unostudio OS</p>
            <h1 className="mt-3 font-display text-3xl font-bold md:text-5xl">Lead Finder</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
              Busca empresas con Google Places, analiza encaje y guarda solo las que quieras revisar como prospects.
            </p>
          </div>
          <AdminMiniNav current="lead-finder" />
        </header>

        {!hasGooglePlacesKey ? (
          <div className="mt-6 rounded-lg border border-amber-400/25 bg-amber-400/10 p-4 text-sm text-amber-100">
            Configura GOOGLE_PLACES_API_KEY para buscar empresas.
          </div>
        ) : null}

        {!hasDeepSeekKey ? (
          <div className="mt-4 rounded-lg border border-[#38b6ff]/25 bg-[#38b6ff]/10 p-4 text-sm text-sky-100">
            IA no configurada. Usando análisis básico.
          </div>
        ) : null}

        <section className="mt-6 rounded-lg border border-zinc-800/80 bg-zinc-950/70 p-4">
          <form onSubmit={searchCandidates} className="grid gap-3 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <label className={labelClass}>Búsqueda</label>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className={inputClass}
                placeholder="clínicas dentales en Valencia"
                required
                minLength={3}
              />
            </div>
            <div className="lg:col-span-3">
              <label className={labelClass}>Ciudad</label>
              <input value={city} onChange={(event) => setCity(event.target.value)} className={inputClass} placeholder="Valencia" />
            </div>
            <div className="lg:col-span-2">
              <label className={labelClass}>Máximo resultados</label>
              <input
                value={maxResults}
                onChange={(event) => setMaxResults(Math.min(20, Math.max(1, Number(event.target.value) || 1)))}
                type="number"
                min="1"
                max="20"
                className={inputClass}
              />
            </div>
            <div className="flex items-end lg:col-span-2">
              <button
                type="submit"
                disabled={loading || !hasGooglePlacesKey}
                className={`${buttonClass} w-full bg-[#38b6ff] text-zinc-950 hover:bg-[#6ac9ff]`}
              >
                {loading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Search className="h-3.5 w-3.5" />}
                Buscar empresas
              </button>
            </div>
          </form>
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
            Buscando empresas...
          </div>
        ) : candidates.length === 0 && hasSearched ? (
          <div className="mt-8 rounded-lg border border-dashed border-zinc-800 p-10 text-center">
            <p className="font-medium text-zinc-200">No hay resultados.</p>
            <p className="mt-2 text-sm text-zinc-500">Prueba con otra búsqueda o una ciudad más concreta.</p>
          </div>
        ) : candidates.length === 0 ? (
          <div className="mt-8 rounded-lg border border-dashed border-zinc-800 p-10 text-center">
            <p className="font-medium text-zinc-200">Busca empresas para empezar.</p>
            <p className="mt-2 text-sm text-zinc-500">Nada se guarda automáticamente. Tú eliges qué prospects pasan al panel.</p>
          </div>
        ) : (
          <section className="mt-6 grid gap-4">
            {candidates.map((candidate) => {
              const key = candidateKey(candidate)
              const analysis = analyses[key]
              const savedId = savedProspects[key]

              return (
                <article key={key} className="rounded-lg border border-zinc-800/80 bg-zinc-950/70 p-4">
                  <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
                    <div>
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h2 className="text-lg font-semibold text-zinc-100">{candidate.business_name}</h2>
                          <p className="mt-1 text-sm leading-6 text-zinc-500">{candidate.address || "Sin dirección"}</p>
                        </div>
                        <div className="rounded-full border border-[#38b6ff]/35 bg-[#38b6ff]/10 px-3 py-1 text-xs font-semibold text-sky-100">
                          Pre-score {candidate.pre_score}
                        </div>
                      </div>

                      <div className="mt-4 grid gap-3 text-sm text-zinc-400 sm:grid-cols-2 lg:grid-cols-4">
                        <div>
                          <p className={labelClass}>Teléfono</p>
                          <p className="mt-1">{candidate.public_phone || "No visible"}</p>
                        </div>
                        <div>
                          <p className={labelClass}>Rating</p>
                          <p className="mt-1">
                            {candidate.rating ?? "Sin dato"} / 5 · {candidate.review_count ?? 0} reseñas
                          </p>
                        </div>
                        <div>
                          <p className={labelClass}>Estado</p>
                          <p className="mt-1">{candidate.business_status || "Sin dato"}</p>
                        </div>
                        <div>
                          <p className={labelClass}>Sector</p>
                          <p className="mt-1">{candidate.sector || "Sin dato"}</p>
                        </div>
                      </div>

                      {candidate.types.length > 0 ? (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {candidate.types.slice(0, 8).map((type) => (
                            <Badge key={type}>{type}</Badge>
                          ))}
                        </div>
                      ) : null}
                    </div>

                    <div className="flex flex-col gap-3 rounded-lg border border-zinc-900 bg-zinc-950/80 p-3">
                      <div className="grid grid-cols-2 gap-2">
                        <ExternalButton href={candidate.website_url} label="Abrir web" />
                        <ExternalButton href={candidate.google_maps_url} label="Abrir Maps" />
                      </div>
                      <button
                        type="button"
                        onClick={() => void analyzeCandidate(candidate)}
                        disabled={analyzingId === key}
                        className={`${buttonClass} border border-[#38b6ff]/40 text-sky-100 hover:bg-[#38b6ff]/10`}
                      >
                        {analyzingId === key ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Sparkles className="h-3.5 w-3.5" />}
                        Analizar con IA
                      </button>
                      <button
                        type="button"
                        onClick={() => void saveCandidate(candidate)}
                        disabled={savingId === key || Boolean(savedId)}
                        className={`${buttonClass} bg-zinc-100 text-zinc-950 hover:bg-sky-200`}
                      >
                        {savingId === key ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                        {savedId ? "Guardado en prospects" : "Guardar como prospect"}
                      </button>
                      {savedId ? (
                        <Link href="/admin/prospects" className="text-center text-xs font-medium text-[#38b6ff] hover:text-sky-200">
                          Ver en prospects
                        </Link>
                      ) : null}
                    </div>
                  </div>

                  {analysis ? (
                    <div className="mt-4 rounded-lg border border-[#38b6ff]/20 bg-[#38b6ff]/5 p-4">
                      <div className="grid gap-4 lg:grid-cols-[0.35fr_1fr_1fr]">
                        <div>
                          <p className={labelClass}>Score final</p>
                          <p className="mt-1 text-2xl font-bold text-sky-100">{analysis.score}</p>
                        </div>
                        <div>
                          <p className={labelClass}>Problema detectado</p>
                          <p className="mt-1 text-sm leading-6 text-zinc-300">{analysis.detected_problem}</p>
                        </div>
                        <div>
                          <p className={labelClass}>Próxima acción</p>
                          <p className="mt-1 text-sm leading-6 text-zinc-300">{analysis.next_action}</p>
                        </div>
                      </div>
                      <div className="mt-4 grid gap-4 lg:grid-cols-2">
                        <div>
                          <p className={labelClass}>Oportunidad</p>
                          <p className="mt-1 text-sm leading-6 text-zinc-300">{analysis.opportunity_notes}</p>
                        </div>
                        <div>
                          <p className={labelClass}>Mensaje sugerido</p>
                          <p className="mt-1 text-sm leading-6 text-zinc-300">{analysis.contact_message}</p>
                          <div className="mt-3">
                            <CopyMessageButton message={analysis.contact_message} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </article>
              )
            })}
          </section>
        )}
      </div>
    </div>
  )
}
