"use client"

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react"
import { type Locale, languages, translations } from "@/lib/i18n"

type I18nContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  languages: typeof languages
  t: (typeof translations)[Locale]
}

const I18nContext = createContext<I18nContextValue | null>(null)

function detectLocale(): Locale {
  const savedLocale = window.localStorage.getItem("unostudio-locale")
  if (savedLocale === "es" || savedLocale === "en") {
    return savedLocale
  }

  const browserLocales = navigator.languages?.length ? navigator.languages : [navigator.language]
  const detectedLocale = browserLocales
    .map((language) => language.toLowerCase())
    .find((language) => language.startsWith("es") || language.startsWith("en"))

  return detectedLocale?.startsWith("en") ? "en" : "es"
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es")

  useEffect(() => {
    setLocaleState(detectLocale())
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
    window.localStorage.setItem("unostudio-locale", locale)
  }, [locale])

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale: setLocaleState,
      languages,
      t: translations[locale],
    }),
    [locale],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)

  if (!context) {
    throw new Error("useI18n must be used inside I18nProvider")
  }

  return context
}
