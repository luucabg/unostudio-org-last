"use client"

import { Analytics } from "@vercel/analytics/react"
import { useEffect, useState } from "react"

type CookieConsent = {
  analytics: boolean
  marketing: boolean
  updatedAt: string
}

const storageKey = "unostudio_cookie_consent"
const openSettingsEvent = "unostudio:open-cookie-settings"

function readConsent(): CookieConsent | null {
  try {
    const stored = window.localStorage.getItem(storageKey)
    return stored ? (JSON.parse(stored) as CookieConsent) : null
  } catch {
    return null
  }
}

function writeConsent(consent: Omit<CookieConsent, "updatedAt">) {
  const value: CookieConsent = { ...consent, updatedAt: new Date().toISOString() }
  window.localStorage.setItem(storageKey, JSON.stringify(value))
  document.cookie = `${storageKey}=1; Max-Age=63072000; Path=/; SameSite=Lax`
  return value
}

export function CookieConsentManager() {
  const [consent, setConsent] = useState<CookieConsent | null>(null)
  const [loaded, setLoaded] = useState(false)
  const [visible, setVisible] = useState(false)
  const [panelOpen, setPanelOpen] = useState(false)
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false)
  const [marketingEnabled, setMarketingEnabled] = useState(false)

  useEffect(() => {
    const stored = readConsent()
    setConsent(stored)
    setAnalyticsEnabled(stored?.analytics ?? false)
    setMarketingEnabled(stored?.marketing ?? false)
    setVisible(!stored)
    setLoaded(true)

    const openSettings = () => {
      const latest = readConsent()
      setAnalyticsEnabled(latest?.analytics ?? false)
      setMarketingEnabled(latest?.marketing ?? false)
      setPanelOpen(true)
      setVisible(true)
    }

    window.addEventListener(openSettingsEvent, openSettings)
    return () => window.removeEventListener(openSettingsEvent, openSettings)
  }, [])

  const save = (next: Omit<CookieConsent, "updatedAt">) => {
    const saved = writeConsent(next)
    setConsent(saved)
    setAnalyticsEnabled(saved.analytics)
    setMarketingEnabled(saved.marketing)
    setVisible(false)
    setPanelOpen(false)
  }

  if (!loaded) return null

  return (
    <>
      {consent?.analytics ? <Analytics /> : null}

      {visible ? (
        <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6">
          <div className="mx-auto max-w-4xl rounded-lg border border-zinc-800 bg-zinc-950/95 p-5 shadow-[0_28px_90px_-36px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur">
            <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-start">
              <div>
                <p className="text-sm font-semibold text-zinc-100">Cookies en unostudio</p>
                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  Usamos cookies técnicas para que la web funcione. Solo cargamos analítica o publicidad si das
                  consentimiento.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row md:justify-end">
                <button
                  type="button"
                  onClick={() => save({ analytics: true, marketing: true })}
                  className="rounded-full bg-zinc-100 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-sky-200"
                >
                  Aceptar
                </button>
                <button
                  type="button"
                  onClick={() => save({ analytics: false, marketing: false })}
                  className="rounded-full border border-zinc-800 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-zinc-600"
                >
                  Rechazar
                </button>
                <button
                  type="button"
                  onClick={() => setPanelOpen((open) => !open)}
                  className="rounded-full border border-zinc-800 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-sky-300/60"
                >
                  Configurar
                </button>
              </div>
            </div>

            {panelOpen ? (
              <div className="mt-5 grid gap-3 border-t border-zinc-900 pt-5">
                <label className="flex items-start justify-between gap-4 rounded-lg border border-zinc-800 bg-zinc-950 p-4">
                  <span>
                    <span className="block text-sm font-semibold text-zinc-200">Técnicas</span>
                    <span className="mt-1 block text-xs leading-5 text-zinc-500">
                      Necesarias para guardar preferencias y hacer funcionar la web.
                    </span>
                  </span>
                  <input type="checkbox" checked disabled className="mt-1 h-4 w-4" />
                </label>
                <label className="flex items-start justify-between gap-4 rounded-lg border border-zinc-800 bg-zinc-950 p-4">
                  <span>
                    <span className="block text-sm font-semibold text-zinc-200">Analíticas</span>
                    <span className="mt-1 block text-xs leading-5 text-zinc-500">
                      Medición agregada de visitas y eventos. Desactivadas por defecto.
                    </span>
                  </span>
                  <input
                    type="checkbox"
                    checked={analyticsEnabled}
                    onChange={(event) => setAnalyticsEnabled(event.target.checked)}
                    className="mt-1 h-4 w-4"
                  />
                </label>
                <label className="flex items-start justify-between gap-4 rounded-lg border border-zinc-800 bg-zinc-950 p-4">
                  <span>
                    <span className="block text-sm font-semibold text-zinc-200">Publicitarias</span>
                    <span className="mt-1 block text-xs leading-5 text-zinc-500">
                      Medición publicitaria o remarketing si se activan campañas. Desactivadas por defecto.
                    </span>
                  </span>
                  <input
                    type="checkbox"
                    checked={marketingEnabled}
                    onChange={(event) => setMarketingEnabled(event.target.checked)}
                    className="mt-1 h-4 w-4"
                  />
                </label>
                <button
                  type="button"
                  onClick={() => save({ analytics: analyticsEnabled, marketing: marketingEnabled })}
                  className="mt-2 rounded-full bg-zinc-100 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-sky-200 sm:w-fit"
                >
                  Guardar configuración
                </button>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  )
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(openSettingsEvent))
}
