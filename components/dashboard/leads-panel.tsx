"use client"

import { useEffect, useMemo, useState, type FormEvent } from "react"
import { Download, Loader2, Plus, RefreshCw } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { leadSourceLabels, leadSources, leadStatusLabels, leadStatuses, type LeadSource, type LeadStatus } from "@/lib/os-types"

export type DashboardOrganization = {
  id: string
  name: string
  slug: string
  website_url: string | null
}

type Lead = {
  id: string
  organization_id: string
  name: string
  phone: string | null
  email: string | null
  service_requested: string | null
  source: LeadSource
  estimated_budget: string | null
  message: string | null
  status: LeadStatus
  next_action: string | null
  notes: string | null
  created_at: string | null
}

type Filters = {
  status: "all" | LeadStatus
  source: "all" | LeadSource
}

const inputClass =
  "w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs text-zinc-100 outline-none transition placeholder:text-zinc-700 focus:border-[#38b6ff]/70 focus:ring-2 focus:ring-[#38b6ff]/15"
const labelClass = "text-[11px] font-medium uppercase tracking-wide text-zinc-500"
const buttonClass =
  "inline-flex items-center justify-center gap-2 rounded-full px-3 py-2 text-xs font-semibold transition disabled:pointer-events-none disabled:opacity-50"

function field(formData: FormData, key: string, max = 1000) {
  const value = formData.get(key)
  if (typeof value !== "string") return null
  const trimmed = value.trim().slice(0, max)
  return trimmed || null
}

function leadPatch(formData: FormData, organizationId: string) {
  return {
    organization_id: organizationId,
    name: field(formData, "name", 120) ?? "",
    phone: field(formData, "phone", 80),
    email: field(formData, "email", 180),
    service_requested: field(formData, "service_requested", 160),
    source: (field(formData, "source", 40) ?? "manual") as LeadSource,
    estimated_budget: field(formData, "estimated_budget", 120),
    message: field(formData, "message", 2000),
    status: (field(formData, "status", 40) ?? "new") as LeadStatus,
    next_action: field(formData, "next_action", 500),
    notes: field(formData, "notes", 2000),
  }
}

function csvCell(value: string | null | undefined) {
  return `"${String(value ?? "").replaceAll('"', '""')}"`
}

function formatDate(value: string | null) {
  if (!value) return ""
  return new Intl.DateTimeFormat("es", { dateStyle: "short", timeStyle: "short" }).format(new Date(value))
}

function friendlyError(message: string) {
  const lowerMessage = message.toLowerCase()

  if (lowerMessage.includes("row-level security") || lowerMessage.includes("permission denied")) {
    return "No tienes permisos para cambiar esta solicitud. Revisa que el usuario esté asignado a la organización."
  }

  if (lowerMessage.includes("failed to fetch") || lowerMessage.includes("network")) {
    return "No se pudo conectar con Supabase. Revisa conexión y variables de entorno."
  }

  if (lowerMessage.includes("invalid input") || lowerMessage.includes("violates check")) {
    return "Hay un campo con valor no válido. Revisa estado, fuente o email."
  }

  return "No se pudo completar la acción. Revisa permisos o intenta de nuevo."
}

export function LeadsPanel({ organizations }: { organizations: DashboardOrganization[] }) {
  const [organizationId, setOrganizationId] = useState(organizations[0]?.id ?? "")
  const [leads, setLeads] = useState<Lead[]>([])
  const [filters, setFilters] = useState<Filters>({ status: "all", source: "all" })
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

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const statusOk = filters.status === "all" || lead.status === filters.status
      const sourceOk = filters.source === "all" || lead.source === filters.source
      return statusOk && sourceOk
    })
  }, [filters, leads])

  const metrics = useMemo(() => {
    return {
      total: leads.length,
      new: leads.filter((lead) => lead.status === "new").length,
      quoteSent: leads.filter((lead) => lead.status === "quote_sent").length,
      won: leads.filter((lead) => lead.status === "won").length,
      lost: leads.filter((lead) => lead.status === "lost").length,
    }
  }, [leads])

  async function loadLeads(nextOrganizationId = organizationId) {
    if (!supabase || !nextOrganizationId) {
      setLoading(false)
      return
    }

    setLoading(true)
    setError(null)

    const { data, error: queryError } = await supabase
      .from("leads")
      .select("*")
      .eq("organization_id", nextOrganizationId)
      .order("created_at", { ascending: false })
      .returns<Lead[]>()

    if (queryError) {
      setError(friendlyError(queryError.message))
      setLeads([])
    } else {
      setLeads(data ?? [])
    }

    setLoading(false)
  }

  useEffect(() => {
    if (!supabase) {
      setError("Faltan variables de Supabase. Revisa NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY.")
      setLoading(false)
      return
    }

    void loadLeads(organizationId)
  }, [organizationId, supabase])

  async function createLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!supabase || !organizationId) return

    const form = event.currentTarget
    const payload = leadPatch(new FormData(form), organizationId)

    if (!payload.name) {
      setError("El nombre es obligatorio.")
      return
    }

    setSavingId("new")
    setError(null)

    const { error: insertError } = await supabase.from("leads").insert(payload)

    if (insertError) {
      setError(friendlyError(insertError.message))
    } else {
      form.reset()
      setNotice("Solicitud creada.")
      await loadLeads()
    }

    setSavingId(null)
  }

  async function saveLead(id: string, formData: FormData) {
    if (!supabase || !organizationId) return
    const payload = leadPatch(formData, organizationId)

    if (!payload.name) {
      setError("El nombre es obligatorio.")
      return
    }

    setSavingId(id)
    setError(null)

    const { error: updateError } = await supabase.from("leads").update(payload).eq("id", id)

    if (updateError) {
      setError(friendlyError(updateError.message))
    } else {
      setNotice("Solicitud guardada.")
      await loadLeads()
    }

    setSavingId(null)
  }

  async function updateStatus(lead: Lead, status: LeadStatus) {
    if (!supabase) return

    setSavingId(lead.id)
    setError(null)

    const { error: updateError } = await supabase.from("leads").update({ status }).eq("id", lead.id)

    if (updateError) {
      setError(friendlyError(updateError.message))
    } else {
      await loadLeads()
    }

    setSavingId(null)
  }

  function exportCsv() {
    const header = ["Nombre", "Telefono", "Email", "Servicio", "Fuente", "Estado", "Presupuesto", "Proxima accion", "Notas", "Fecha"]
    const rows = filteredLeads.map((lead) => [
      lead.name,
      lead.phone,
      lead.email,
      lead.service_requested,
      leadSourceLabels[lead.source],
      leadStatusLabels[lead.status],
      lead.estimated_budget,
      lead.next_action,
      lead.notes,
      formatDate(lead.created_at),
    ])
    const csv = [header, ...rows].map((row) => row.map(csvCell).join(",")).join("\n")
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "solicitudes.csv"
    link.click()
    window.setTimeout(() => URL.revokeObjectURL(url), 0)
  }

  if (organizations.length === 0) {
    return (
      <div className="min-h-screen bg-zinc-950 px-5 py-8 text-zinc-100">
        <div className="mx-auto max-w-4xl rounded-lg border border-zinc-800 p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#38b6ff]">unostudio OS</p>
          <h1 className="mt-3 font-display text-3xl font-bold">Sin organización asignada</h1>
          <p className="mt-3 text-sm leading-6 text-zinc-500">
            Este usuario existe, pero todavía no está vinculado a una organización.
          </p>
          <a href="/logout" className="mt-6 inline-flex text-sm text-zinc-400 hover:text-zinc-100">
            Salir
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-zinc-950 px-5 py-8 text-zinc-100">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-4 border-b border-zinc-900 pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#38b6ff]">unostudio OS</p>
            <h1 className="mt-3 font-display text-3xl font-bold md:text-5xl">Solicitudes</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
              Un panel simple para no perder interesados. Estado, próxima acción y notas.
            </p>
          </div>
          <div className="flex items-center gap-3">
            {organizations.length > 1 ? (
              <select className={inputClass} value={organizationId} onChange={(event) => setOrganizationId(event.target.value)}>
                {organizations.map((organization) => (
                  <option key={organization.id} value={organization.id}>
                    {organization.name}
                  </option>
                ))}
              </select>
            ) : null}
            <a href="/logout" className="text-sm text-zinc-500 transition hover:text-zinc-200">
              Salir
            </a>
          </div>
        </header>

        <section className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {[
            ["Solicitudes totales", metrics.total],
            ["Nuevos", metrics.new],
            ["Presupuestos enviados", metrics.quoteSent],
            ["Ganados", metrics.won],
            ["Perdidos", metrics.lost],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg border border-zinc-800/80 bg-zinc-950/70 p-4">
              <p className="text-xs text-zinc-500">{label}</p>
              <p className="mt-2 font-display text-3xl font-bold text-zinc-50">{value}</p>
            </div>
          ))}
        </section>

        <section className="mt-6 rounded-lg border border-zinc-800/80 bg-zinc-950/70 p-4">
          <form onSubmit={createLead} className="grid gap-3 lg:grid-cols-12">
            <div className="lg:col-span-2">
              <label className={labelClass}>Nombre</label>
              <input name="name" className={inputClass} required />
            </div>
            <div className="lg:col-span-2">
              <label className={labelClass}>Teléfono</label>
              <input name="phone" className={inputClass} />
            </div>
            <div className="lg:col-span-2">
              <label className={labelClass}>Email</label>
              <input name="email" type="email" className={inputClass} />
            </div>
            <div className="lg:col-span-2">
              <label className={labelClass}>Servicio</label>
              <input name="service_requested" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Fuente</label>
              <select name="source" defaultValue="manual" className={inputClass}>
                {leadSources.map((source) => (
                  <option key={source} value={source}>
                    {leadSourceLabels[source]}
                  </option>
                ))}
              </select>
            </div>
            <input type="hidden" name="status" value="new" />
            <div className="lg:col-span-2">
              <label className={labelClass}>Próxima acción</label>
              <input name="next_action" className={inputClass} />
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                disabled={savingId === "new"}
                className={`${buttonClass} w-full bg-[#38b6ff] text-zinc-950 hover:bg-[#6ac9ff]`}
              >
                {savingId === "new" ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Plus className="h-3.5 w-3.5" />}
                Crear solicitud
              </button>
            </div>
          </form>
        </section>

        <section className="mt-5 grid gap-3 rounded-lg border border-zinc-900 bg-zinc-950/50 p-4 lg:grid-cols-4">
          <div>
            <label className={labelClass}>Estado</label>
            <select
              className={inputClass}
              value={filters.status}
              onChange={(event) => setFilters((current) => ({ ...current, status: event.target.value as Filters["status"] }))}
            >
              <option value="all">Todos</option>
              {leadStatuses.map((status) => (
                <option key={status} value={status}>
                  {leadStatusLabels[status]}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass}>Fuente</label>
            <select
              className={inputClass}
              value={filters.source}
              onChange={(event) => setFilters((current) => ({ ...current, source: event.target.value as Filters["source"] }))}
            >
              <option value="all">Todas</option>
              {leadSources.map((source) => (
                <option key={source} value={source}>
                  {leadSourceLabels[source]}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-end">
            <button
              type="button"
              onClick={() => void loadLeads()}
              className={`${buttonClass} w-full border border-zinc-800 text-zinc-300 hover:border-[#38b6ff]/40 hover:text-zinc-50`}
            >
              <RefreshCw className="h-3.5 w-3.5" />
              Refrescar
            </button>
          </div>
          <div className="flex items-end">
            <button
              type="button"
              onClick={exportCsv}
              className={`${buttonClass} w-full border border-zinc-800 text-zinc-300 hover:border-[#38b6ff]/40 hover:text-zinc-50`}
            >
              <Download className="h-3.5 w-3.5" />
              Exportar CSV
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
            Cargando solicitudes...
          </div>
        ) : filteredLeads.length === 0 ? (
          <div className="mt-8 rounded-lg border border-dashed border-zinc-800 p-10 text-center">
            <p className="font-medium text-zinc-200">
              {leads.length === 0 ? "Aún no hay solicitudes." : "No hay solicitudes con estos filtros."}
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              {leads.length === 0 ? "Crea una manual o espera a que entre un formulario." : "Prueba otra fuente o estado."}
            </p>
          </div>
        ) : (
          <>
            <div className="mt-6 hidden overflow-hidden rounded-lg border border-zinc-800/80 lg:block">
              <div className="grid grid-cols-[1fr_0.85fr_0.9fr_0.9fr_1fr_1.2fr_1.2fr] gap-3 bg-zinc-900/40 px-4 py-3 text-[11px] font-semibold uppercase tracking-wide text-zinc-500">
                <span>Nombre</span>
                <span>Fuente</span>
                <span>Estado</span>
                <span>Servicio</span>
                <span>Contacto</span>
                <span>Próxima acción</span>
                <span>Notas</span>
              </div>
              <div className="divide-y divide-zinc-900">
                {filteredLeads.map((lead) => (
                  <form
                    key={lead.id}
                    onSubmit={(event) => {
                      event.preventDefault()
                      void saveLead(lead.id, new FormData(event.currentTarget))
                    }}
                    className="grid grid-cols-[1fr_0.85fr_0.9fr_0.9fr_1fr_1.2fr_1.2fr] gap-3 px-4 py-4"
                  >
                    <div>
                      <input name="name" defaultValue={lead.name} className={inputClass} />
                      <p className="mt-2 text-[11px] text-zinc-600">{formatDate(lead.created_at)}</p>
                    </div>
                    <select name="source" defaultValue={lead.source} className={inputClass}>
                      {leadSources.map((source) => (
                        <option key={source} value={source}>
                          {leadSourceLabels[source]}
                        </option>
                      ))}
                    </select>
                    <select
                      name="status"
                      defaultValue={lead.status}
                      className={inputClass}
                      onChange={(event) => void updateStatus(lead, event.target.value as LeadStatus)}
                    >
                      {leadStatuses.map((status) => (
                        <option key={status} value={status}>
                          {leadStatusLabels[status]}
                        </option>
                      ))}
                    </select>
                    <input name="service_requested" defaultValue={lead.service_requested ?? ""} className={inputClass} />
                    <div className="space-y-2">
                      <input name="phone" defaultValue={lead.phone ?? ""} className={inputClass} placeholder="Teléfono" />
                      <input name="email" defaultValue={lead.email ?? ""} className={inputClass} placeholder="Email" />
                      <input name="estimated_budget" defaultValue={lead.estimated_budget ?? ""} className={inputClass} placeholder="Presupuesto" />
                    </div>
                    <textarea name="next_action" defaultValue={lead.next_action ?? ""} className={`${inputClass} min-h-24`} />
                    <div className="space-y-2">
                      <textarea name="notes" defaultValue={lead.notes ?? ""} className={`${inputClass} min-h-20`} />
                      <textarea name="message" defaultValue={lead.message ?? ""} className={`${inputClass} min-h-20`} placeholder="Mensaje" />
                      <button type="submit" disabled={savingId === lead.id} className={`${buttonClass} w-full bg-zinc-100 text-zinc-950 hover:bg-sky-200`}>
                        Guardar cambios
                      </button>
                    </div>
                  </form>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-4 lg:hidden">
              {filteredLeads.map((lead) => (
                <form
                  key={lead.id}
                  onSubmit={(event) => {
                    event.preventDefault()
                    void saveLead(lead.id, new FormData(event.currentTarget))
                  }}
                  className="rounded-lg border border-zinc-800/80 bg-zinc-950/70 p-4"
                >
                  <div className="grid gap-3">
                    <label className={labelClass}>
                      Nombre
                      <input name="name" defaultValue={lead.name} className={inputClass} />
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <label className={labelClass}>
                        Fuente
                        <select name="source" defaultValue={lead.source} className={inputClass}>
                          {leadSources.map((source) => (
                            <option key={source} value={source}>
                              {leadSourceLabels[source]}
                            </option>
                          ))}
                        </select>
                      </label>
                      <label className={labelClass}>
                        Estado
                        <select
                          name="status"
                          defaultValue={lead.status}
                          className={inputClass}
                          onChange={(event) => void updateStatus(lead, event.target.value as LeadStatus)}
                        >
                          {leadStatuses.map((status) => (
                            <option key={status} value={status}>
                              {leadStatusLabels[status]}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>
                    <input name="service_requested" defaultValue={lead.service_requested ?? ""} className={inputClass} placeholder="Servicio" />
                    <input name="phone" defaultValue={lead.phone ?? ""} className={inputClass} placeholder="Teléfono" />
                    <input name="email" defaultValue={lead.email ?? ""} className={inputClass} placeholder="Email" />
                    <input name="estimated_budget" defaultValue={lead.estimated_budget ?? ""} className={inputClass} placeholder="Presupuesto" />
                    <textarea name="next_action" defaultValue={lead.next_action ?? ""} className={`${inputClass} min-h-20`} placeholder="Próxima acción" />
                    <textarea name="notes" defaultValue={lead.notes ?? ""} className={`${inputClass} min-h-20`} placeholder="Notas" />
                    <textarea name="message" defaultValue={lead.message ?? ""} className={`${inputClass} min-h-20`} placeholder="Mensaje" />
                    <button type="submit" disabled={savingId === lead.id} className={`${buttonClass} bg-zinc-100 text-zinc-950 hover:bg-sky-200`}>
                      Guardar cambios
                    </button>
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
