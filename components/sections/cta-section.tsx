"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { LiquidCtaButton } from "@/components/buttons/liquid-cta-button"
import { useI18n } from "@/components/i18n-provider"

export function CtaSection() {
  const { t } = useI18n()

  return (
    <section className="px-6 py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mb-6 text-balance">
          {t.cta.title}
        </h2>
        <p className="text-lg text-zinc-500 mb-10 text-pretty max-w-2xl mx-auto">{t.cta.body}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <LiquidCtaButton href="mailto:hola@unostudio.org?subject=Reservar%20llamada%20con%20unostudio">
            {t.cta.primaryCta}
          </LiquidCtaButton>
          <Link
            href="#pricing"
            className="group flex items-center gap-2 px-6 py-3 text-sm font-medium text-zinc-400 hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 rounded-full transition-colors"
          >
            <span>{t.cta.secondaryCta}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  )
}
