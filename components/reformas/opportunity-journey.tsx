"use client"

import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Check } from "lucide-react"

type OpportunityJourneyProps = {
  label: string
  demo: string
  status: string
  metaLabels: readonly [string, string, string]
  activeLabel: string
  items: readonly (readonly [string, string])[]
  activity: readonly string[]
  footer: string
}

const STEP_DURATION_MS = 2200
const FINAL_STEP_DURATION_MS = 3200

export function OpportunityJourney({
  label,
  demo,
  status,
  metaLabels,
  activeLabel,
  items,
  activity,
  footer,
}: OpportunityJourneyProps) {
  const reduceMotion = useReducedMotion()
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    if (reduceMotion || items.length < 2) return

    const delay = activeStep === items.length - 1 ? FINAL_STEP_DURATION_MS : STEP_DURATION_MS
    const timeout = window.setTimeout(() => {
      setActiveStep((current) => (current + 1) % items.length)
    }, delay)

    return () => window.clearTimeout(timeout)
  }, [activeStep, items.length, reduceMotion])

  const progress = items.length > 1 ? ((activeStep + 1) / items.length) * 100 : 100
  const metadata = [items[0]?.[1] ?? "—", items[1]?.[1] ?? "—", items[activeStep]?.[0] ?? "—"]

  return (
    <div className="relative min-w-0 w-full" data-active-step={activeStep}>
      <div className="absolute -bottom-3 left-5 right-5 top-5 rounded-[14px] border border-white/6 bg-[#08131e]" aria-hidden="true" />

      <article className="relative min-w-0 overflow-hidden rounded-[14px] border border-white/12 bg-[#08131e] shadow-[0_30px_90px_-52px_rgba(56,182,255,0.58)]">
        <span className="absolute left-0 top-8 h-12 w-1 bg-orange-300" aria-hidden="true" />

        <header className="relative px-6 pb-6 pt-7 md:px-8 md:pb-7 md:pt-8">
          <div className="flex items-center justify-between gap-5">
            <p className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-orange-200">
              <span className="h-px w-5 bg-orange-300" aria-hidden="true" />
              {status}
            </p>
            <div className="flex items-center gap-3 text-[10px] tabular-nums text-zinc-500" aria-hidden="true">
              <span>{String(activeStep + 1).padStart(2, "0")}</span>
              <span className="relative h-px w-16 overflow-hidden bg-white/10">
                <motion.span
                  className="absolute inset-y-0 left-0 bg-sky-300"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: reduceMotion ? 0 : 0.65, ease: [0.16, 1, 0.3, 1] }}
                />
              </span>
              <span>{String(items.length).padStart(2, "0")}</span>
            </div>
          </div>
          <h2 className="mt-6 max-w-md font-heading text-2xl font-semibold leading-tight tracking-[-0.025em] text-zinc-50 md:text-[1.75rem]">
            {label}
          </h2>
          <p className="mt-2 max-w-md text-sm leading-6 text-zinc-400">{demo}</p>
        </header>

        <dl className="relative grid grid-cols-2 border-y border-white/8 bg-black/15 sm:grid-cols-3">
          {metaLabels.map((metaLabel, index) => (
            <div
              key={metaLabel}
              className={`min-w-0 px-5 py-4 ${index > 0 ? "border-l border-white/8" : ""} ${index === 2 ? "col-span-2 border-l-0 border-t border-white/8 sm:col-span-1 sm:border-l sm:border-t-0" : ""}`}
            >
              <dt className="text-[10px] font-medium uppercase tracking-[0.14em] text-zinc-600">{metaLabel}</dt>
              <dd className={`mt-1.5 text-xs font-medium leading-5 sm:truncate ${index === 2 ? "text-sky-200" : "text-zinc-300"}`}>{metadata[index]}</dd>
            </div>
          ))}
        </dl>

        <ol className="relative px-6 py-2 md:px-8" aria-label={label}>
          {items.map(([title, detail], index) => {
            const isActive = index === activeStep
            const isComplete = index < activeStep

            return (
              <li
                key={title}
                aria-current={isActive ? "step" : undefined}
                className="relative grid min-h-[76px] grid-cols-[36px_minmax(0,1fr)_auto] items-center gap-3 border-b border-white/8 last:border-b-0"
              >
                {isActive ? (
                  <motion.span
                    layoutId="journey-active-row"
                    className="pointer-events-none absolute -inset-x-3 inset-y-1 rounded-md border-l-2 border-sky-300 bg-white/[0.035]"
                    transition={{ duration: reduceMotion ? 0 : 0.48, ease: [0.16, 1, 0.3, 1] }}
                    aria-hidden="true"
                  />
                ) : null}

                <span className={`relative z-10 font-mono text-[11px] tabular-nums ${isActive ? "text-sky-200" : isComplete ? "text-emerald-300" : "text-zinc-600"}`}>
                  {isComplete ? <Check className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" /> : String(index + 1).padStart(2, "0")}
                </span>
                <span className="relative z-10 min-w-0 py-3">
                  <span className={`block text-sm font-semibold transition-colors ${isActive ? "text-zinc-50" : "text-zinc-300"}`}>{title}</span>
                  <span className="mt-1 block truncate text-xs text-zinc-500">{detail}</span>
                </span>
                <span className="relative z-10 pl-2 text-[10px] font-semibold uppercase tracking-[0.12em]">
                  {isActive ? <span className="text-sky-300">{activeLabel}</span> : isComplete ? <span className="text-zinc-600">✓</span> : <span className="text-zinc-700">—</span>}
                </span>
              </li>
            )
          })}
        </ol>

        <footer className="relative flex min-h-[78px] items-center gap-4 border-t border-white/8 bg-white/[0.025] px-6 py-4 md:px-8">
          <span className="h-9 w-1 shrink-0 bg-orange-300" aria-hidden="true" />
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-zinc-600">{footer}</p>
            <motion.p
              key={activeStep}
              className="mt-1 truncate text-sm font-medium text-zinc-200"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.28 }}
            >
              {activity[activeStep]}
            </motion.p>
          </div>
        </footer>
      </article>
    </div>
  )
}
