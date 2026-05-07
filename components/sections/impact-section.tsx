"use client"

import { useI18n } from "@/components/i18n-provider"

export function ImpactSection() {
  const { t } = useI18n()

  return (
    <section id="impact" className="px-6 py-24 bg-zinc-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-end mb-12">
          <div>
            <p className="text-sm font-medium text-sky-300 uppercase tracking-wider mb-4">{t.impact.eyebrow}</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-zinc-100 mb-4 text-balance">
              {t.impact.title}
            </h2>
          </div>
          <p className="text-zinc-500 max-w-xl text-pretty lg:justify-self-end">{t.impact.body}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {t.impact.metrics.map((metric) => (
            <div
              key={metric.label}
              className="p-6 rounded-lg bg-zinc-950/70 border border-zinc-800/60 hover:border-sky-300/40 hover:bg-zinc-900/80 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-sky-300/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <p className="font-display text-3xl md:text-4xl font-bold text-zinc-100 mb-1 group-hover:text-white transition-colors">
                  {metric.value}
                </p>
                <p className="text-sm font-medium text-zinc-300 mb-1">{metric.label}</p>
                <p className="text-xs text-zinc-600">{metric.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
