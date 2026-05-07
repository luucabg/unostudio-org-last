"use client"

import { useEffect, useRef, useState } from "react"
import { Check, Globe2 } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"

export function LanguageSwitcher() {
  const { locale, setLocale, languages } = useI18n()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    window.addEventListener("pointerdown", handlePointerDown)
    return () => window.removeEventListener("pointerdown", handlePointerDown)
  }, [])

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-label="Change language"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className="group flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800/80 bg-zinc-950/70 text-zinc-300 transition-all duration-300 hover:border-sky-300/50 hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 sm:h-10 sm:w-10"
      >
        <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(125,211,252,0.85),rgba(59,130,246,0.35)_45%,rgba(24,24,27,0.9)_78%)] shadow-[inset_0_1px_3px_rgba(255,255,255,0.28)]">
          <Globe2 className="h-4 w-4" strokeWidth={1.8} />
        </span>
      </button>

      {open ? (
        <div className="absolute right-0 top-12 min-w-36 overflow-hidden rounded-lg border border-zinc-800/80 bg-zinc-950/95 p-1 shadow-2xl shadow-blue-950/30 backdrop-blur-md">
          {languages.map((language) => {
            const selected = language.code === locale

            return (
              <button
                key={language.code}
                type="button"
                onClick={() => {
                  setLocale(language.code)
                  setOpen(false)
                }}
                className="flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left text-sm text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-zinc-100"
              >
                <span>{language.label}</span>
                <span className="flex items-center gap-2 font-mono text-xs text-sky-300">
                  {language.shortLabel}
                  {selected ? <Check className="h-3.5 w-3.5" /> : null}
                </span>
              </button>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
