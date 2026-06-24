"use client"

import { Check, Minus } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function AudienceSection() {
  const { t } = useI18n()

  return (
    <section id="audience" className="px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <ScrollReveal>
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-sky-300">{t.audience.eyebrow}</p>
          <h2 className="font-display text-3xl font-bold leading-tight text-zinc-100 md:text-5xl">
            {t.audience.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-500">{t.audience.body}</p>
        </ScrollReveal>

        <div className="grid gap-3 md:grid-cols-[1.15fr_0.85fr]">
          <ScrollReveal delay={120}>
            <div className="rounded-lg border border-sky-300/25 bg-sky-300/[0.06] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-zinc-100">{t.audience.goodTitle}</h3>
              <ul className="space-y-3">
                {t.audience.good.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-zinc-300">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-sky-300" strokeWidth={1.8} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={220}>
            <div className="rounded-lg border border-zinc-800/75 bg-zinc-950/70 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-zinc-200">{t.audience.badTitle}</h3>
              <ul className="space-y-3">
                {t.audience.bad.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-zinc-500">
                    <Minus className="mt-1 h-4 w-4 shrink-0 text-zinc-600" strokeWidth={1.8} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
