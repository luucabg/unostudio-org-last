"use client"

import { Analytics } from "@vercel/analytics/react"
import { useEffect, useState } from "react"
import { useI18n } from "@/components/i18n-provider"

type CookieConsent = {
  analytics: boolean
  updatedAt: string
}

const storageKey = "unostudio_cookie_consent"
const openSettingsEvent = "unostudio:open-cookie-settings"

function readConsent(): CookieConsent | null {
  try {
    const stored = window.localStorage.getItem(storageKey)
    if (!stored) return null

    const parsed = JSON.parse(stored) as Partial<CookieConsent>
    if (typeof parsed.analytics !== "boolean") return null

    return {
      analytics: parsed.analytics,
      updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : new Date(0).toISOString(),
    }
  } catch {
    return null
  }
}

function writeConsent(analytics: boolean) {
  const value: CookieConsent = { analytics, updatedAt: new Date().toISOString() }
  window.localStorage.setItem(storageKey, JSON.stringify(value))
  document.cookie = `${storageKey}=1; Max-Age=63072000; Path=/; SameSite=Lax`
  return value
}

const copy = {
  es: {
    title: "Cookies en unostudio",
    body: "Usamos almacenamiento técnico para guardar tus preferencias. La analítica solo se carga si das consentimiento.",
    accept: "Aceptar analítica",
    necessary: "Solo necesarias",
    configure: "Configurar",
    technicalTitle: "Técnicas",
    technicalBody: "Necesarias para guardar preferencias y hacer funcionar la web.",
    analyticsTitle: "Analíticas",
    analyticsBody: "Medición agregada de visitas y eventos con Vercel Analytics. Desactivada por defecto.",
    save: "Guardar configuración",
  },
  en: {
    title: "Cookies at unostudio",
    body: "We use technical storage to remember your preferences. Analytics only loads if you consent.",
    accept: "Accept analytics",
    necessary: "Necessary only",
    configure: "Configure",
    technicalTitle: "Technical",
    technicalBody: "Required to remember preferences and keep the website working.",
    analyticsTitle: "Analytics",
    analyticsBody: "Aggregated visits and events measured with Vercel Analytics. Disabled by default.",
    save: "Save settings",
  },
} as const

export function CookieConsentManager() {
  const { locale } = useI18n()
  const t = copy[locale]
  const [consent, setConsent] = useState<CookieConsent | null>(null)
  const [loaded, setLoaded] = useState(false)
  const [visible, setVisible] = useState(false)
  const [panelOpen, setPanelOpen] = useState(false)
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false)

  useEffect(() => {
    const stored = readConsent()
    setConsent(stored)
    setAnalyticsEnabled(stored?.analytics ?? false)
    setVisible(!stored)
    setLoaded(true)

    const openSettings = () => {
      const latest = readConsent()
      setAnalyticsEnabled(latest?.analytics ?? false)
      setPanelOpen(true)
      setVisible(true)
    }

    window.addEventListener(openSettingsEvent, openSettings)
    return () => window.removeEventListener(openSettingsEvent, openSettings)
  }, [])

  const save = (analytics: boolean) => {
    const saved = writeConsent(analytics)
    setConsent(saved)
    setAnalyticsEnabled(saved.analytics)
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
                <p className="text-sm font-semibold text-zinc-100">{t.title}</p>
                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  {t.body}
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row md:justify-end">
                <button
                  type="button"
                  onClick={() => save(true)}
                  className="rounded-full bg-zinc-100 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-sky-200"
                >
                  {t.accept}
                </button>
                <button
                  type="button"
                  onClick={() => save(false)}
                  className="rounded-full border border-zinc-800 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-zinc-600"
                >
                  {t.necessary}
                </button>
                <button
                  type="button"
                  onClick={() => setPanelOpen((open) => !open)}
                  className="rounded-full border border-zinc-800 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-sky-300/60"
                >
                  {t.configure}
                </button>
              </div>
            </div>

            {panelOpen ? (
              <div className="mt-5 grid gap-3 border-t border-zinc-900 pt-5">
                <label className="flex items-start justify-between gap-4 rounded-lg border border-zinc-800 bg-zinc-950 p-4">
                  <span>
                    <span className="block text-sm font-semibold text-zinc-200">{t.technicalTitle}</span>
                    <span className="mt-1 block text-xs leading-5 text-zinc-500">{t.technicalBody}</span>
                  </span>
                  <input type="checkbox" checked disabled className="mt-1 h-4 w-4" />
                </label>
                <label className="flex items-start justify-between gap-4 rounded-lg border border-zinc-800 bg-zinc-950 p-4">
                  <span>
                    <span className="block text-sm font-semibold text-zinc-200">{t.analyticsTitle}</span>
                    <span className="mt-1 block text-xs leading-5 text-zinc-500">{t.analyticsBody}</span>
                  </span>
                  <input
                    type="checkbox"
                    checked={analyticsEnabled}
                    onChange={(event) => setAnalyticsEnabled(event.target.checked)}
                    className="mt-1 h-4 w-4"
                  />
                </label>
                <button
                  type="button"
                  onClick={() => save(analyticsEnabled)}
                  className="mt-2 rounded-full bg-zinc-100 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-sky-200 sm:w-fit"
                >
                  {t.save}
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
