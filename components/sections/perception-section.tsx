"use client"

import { Check } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

function CompactList({ title, points, accent }: { title: string; points: readonly string[]; accent?: boolean }) {
  return (
    <div
      className={[
        "rounded-lg border p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]",
        accent ? "border-sky-300/35 bg-sky-300/[0.07]" : "border-zinc-800/75 bg-zinc-950/70",
      ].join(" ")}
    >
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-200">{title}</h3>
      <ul className="space-y-3">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-3 text-sm leading-6 text-zinc-300">
            <Check className="mt-1 h-4 w-4 shrink-0 text-sky-300" strokeWidth={1.9} />
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function PerceptionSection() {
  const { t } = useI18n()

  return (
    <section id="perception" className="relative overflow-hidden px-6 py-16 md:py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(125,211,252,0.07),transparent_28%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <ScrollReveal>
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-sky-300">{t.perception.eyebrow}</p>
          <h2 className="max-w-3xl font-display text-4xl font-bold leading-tight text-zinc-100 md:text-5xl">
            {t.perception.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-500 md:text-lg">{t.perception.subtitle}</p>
        </ScrollReveal>

        <div className="grid gap-3 md:grid-cols-2">
          <ScrollReveal delay={120}>
            <CompactList title={t.perception.beforeTitle} points={t.perception.beforePoints} />
          </ScrollReveal>
          <ScrollReveal delay={220}>
            <CompactList title={t.perception.afterTitle} points={t.perception.afterPoints} accent />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
