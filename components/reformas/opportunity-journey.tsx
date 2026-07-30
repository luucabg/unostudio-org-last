"use client"

import { useState } from "react"
import { Check, CheckCircle2 } from "lucide-react"

type OpportunityJourneyProps = {
  label: string
  demo: string
  items: readonly (readonly [string, string])[]
  activity: readonly string[]
  footer: string
  selectLabel: string
}

export function OpportunityJourney({
  label,
  demo,
  items,
  activity,
  footer,
  selectLabel,
}: OpportunityJourneyProps) {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <div className="relative min-w-0 w-full">
      <div className="relative overflow-hidden rounded-xl border border-white/12 bg-[#09111b]">
        <div className="border-b border-white/9 px-5 py-5 md:px-6">
          <div>
            <p className="text-sm font-semibold text-zinc-200">{label}</p>
            <p className="mt-1 text-xs text-zinc-500">{demo}</p>
          </div>
        </div>

        <div className="px-3 py-3 md:px-4">
          {items.map(([title, detail], index) => {
            const isActive = index === activeStep
            const isComplete = index < activeStep

            return (
              <button
                key={title}
                type="button"
                onClick={() => setActiveStep(index)}
                aria-pressed={isActive}
                aria-label={`${selectLabel}: ${title}`}
                className={`group relative grid w-full grid-cols-[34px_minmax(0,1fr)_20px] gap-3 border-b border-white/8 px-3 py-4 text-left transition-colors duration-200 last:border-b-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sky-300 ${isActive ? "bg-white/[0.045]" : "hover:bg-white/[0.025]"}`}
              >
                {isActive ? <span className="absolute inset-y-3 left-0 w-px bg-sky-300" aria-hidden="true" /> : null}
                <span className={`pt-0.5 font-mono text-[10px] transition-colors ${isActive ? "text-sky-300" : "text-zinc-600"}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0">
                  <span className={`block text-sm font-semibold transition-colors ${isActive ? "text-zinc-100" : "text-zinc-300"}`}>{title}</span>
                  <span className="mt-1 block text-xs text-zinc-500">{detail}</span>
                  {isActive ? <span className="mt-2 block text-xs text-sky-300">{activity[index]}</span> : null}
                </span>
                <span className="grid h-5 w-5 place-items-center text-sky-300" aria-hidden="true">
                  {isComplete ? <Check className="h-3.5 w-3.5" strokeWidth={1.8} /> : null}
                </span>
              </button>
            )
          })}
        </div>

        <div className="flex items-center gap-3 border-t border-white/9 bg-white/[0.025] px-5 py-4 text-sm font-medium text-zinc-200 md:px-6">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-sky-300" strokeWidth={1.8} aria-hidden="true" />
          {footer}
        </div>
      </div>
    </div>
  )
}
