"use client"

import { Plus } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function AddonsSection() {
  const { t } = useI18n()

  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="mx-auto mb-8 max-w-2xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-wide text-sky-300">
            {t.addons.eyebrow}
          </p>
          <h2 className="mb-3 font-display text-3xl font-bold leading-tight text-zinc-100 md:text-4xl">
            {t.addons.title}
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-zinc-500 md:text-base">
            {t.addons.body}
          </p>
        </ScrollReveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {t.addons.items.map((item, index) => (
            <ScrollReveal key={item.name} delay={index * 70}>
              <div className="h-full rounded-lg border border-zinc-800/80 bg-zinc-950/70 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 text-sky-300">
                  <Plus className="h-4 w-4" strokeWidth={1.8} />
                </div>

                <h3 className="text-sm font-semibold text-zinc-100">{item.name}</h3>

                <p className="mt-2 text-sm font-semibold text-zinc-300">{item.price}</p>

                <p className="mt-3 text-xs leading-5 text-zinc-500">{item.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
