"use client"

import { useI18n } from "@/components/i18n-provider"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function ImpactSection() {
  const { t } = useI18n()

  return (
    <section id="impact" className="px-6 py-24 bg-zinc-900/20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <ScrollReveal>
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-sky-300">{t.impact.eyebrow}</p>
            <h2 className="font-display text-3xl font-bold leading-tight text-zinc-100 text-balance md:text-5xl">
              {t.impact.title}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={120} className="lg:justify-self-end">
            <p className="max-w-xl text-base leading-relaxed text-zinc-500 text-pretty">{t.impact.body}</p>
          </ScrollReveal>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {t.impact.steps.map((step, index) => (
            <ScrollReveal key={step.title} delay={index * 100}>
              <div className="rounded-lg border border-zinc-800/70 bg-zinc-950/70 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-300 hover:border-sky-300/35">
                <p className="mb-5 font-mono text-sm text-sky-300">{step.number}</p>
                <h3 className="mb-3 text-lg font-semibold text-zinc-100">{step.title}</h3>
                <p className="text-sm leading-6 text-zinc-500">{step.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
