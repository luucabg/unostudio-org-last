"use client"

import { useI18n } from "@/components/i18n-provider"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function FaqSection() {
  const { t } = useI18n()

  return (
    <section id="faq" className="bg-zinc-900/20 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal className="mb-10 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-sky-300">{t.faq.eyebrow}</p>
          <h2 className="font-display text-3xl font-bold leading-tight text-zinc-100 md:text-5xl">{t.faq.title}</h2>
        </ScrollReveal>

        <div className="space-y-3">
          {t.faq.items.map((item, index) => (
            <ScrollReveal key={item.question} delay={index * 55}>
              <details className="group rounded-lg border border-zinc-800/75 bg-zinc-950/70 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <summary className="cursor-pointer list-none text-base font-semibold text-zinc-100 marker:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {item.question}
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-zinc-800 text-zinc-400 transition group-open:rotate-45 group-open:border-sky-300/40 group-open:text-sky-300">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-500">{item.answer}</p>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
