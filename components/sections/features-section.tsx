"use client"

import { LayoutTemplate, ListChecks, Megaphone, MessageSquareText, TrendingUp } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const serviceIcons = [LayoutTemplate, MessageSquareText, ListChecks, Megaphone]

export function FeaturesSection() {
  const { t } = useI18n()

  return (
    <section id="features" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-sky-300">{t.features.eyebrow}</p>
          <h2 className="mb-4 font-display text-3xl font-bold leading-tight text-zinc-100 text-balance md:text-5xl">
            {t.features.title}
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-500 text-pretty">{t.features.body}</p>
        </ScrollReveal>

        <div className="grid gap-3 md:grid-cols-2">
          {t.features.items.map((item, index) => {
            const Icon = serviceIcons[index] ?? LayoutTemplate

            return (
              <ScrollReveal key={item.title} delay={index * 90}>
                <div className="rounded-lg border border-zinc-800/70 bg-zinc-950/70 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-300 hover:-translate-y-1 hover:border-sky-300/35">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-zinc-900 text-sky-300">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-zinc-100">{item.title}</h3>
                  <p className="text-sm leading-6 text-zinc-500">{item.body}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal className="mt-12 grid gap-6 rounded-lg border border-sky-300/20 bg-sky-300/[0.05] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] lg:grid-cols-[0.84fr_1.16fr] lg:items-center md:p-8">
          <div>
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-zinc-100 text-zinc-950">
              <TrendingUp className="h-5 w-5" strokeWidth={1.8} />
            </div>
            <h3 className="font-display text-2xl font-bold leading-tight text-zinc-100 md:text-3xl">
              {t.features.experienceTitle}
            </h3>
          </div>
          <p className="text-base leading-relaxed text-zinc-400">{t.features.experienceBody}</p>
        </ScrollReveal>
      </div>
    </section>
  )
}
