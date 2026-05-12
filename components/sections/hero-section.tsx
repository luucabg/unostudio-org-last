"use client"

import Image from "next/image"
import Link from "next/link"
import { LiquidCtaButton } from "@/components/buttons/liquid-cta-button"
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"

export function HeroSection() {
  const { t } = useI18n()

  return (
    <section className="relative min-h-[100svh] md:h-[100dvh] overflow-hidden flex items-center px-6 pt-28 pb-14">
      <Image
        src="/desktop_hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden="true"
        className="page-load-bg hidden object-cover object-center opacity-100 md:block"
      />
      <Image
        src="/mobile_hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden="true"
        className="page-load-bg object-cover object-center opacity-90 md:hidden"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_22%,rgba(56,189,248,0.12),transparent_30%),linear-gradient(90deg,rgba(2,6,23,0.88)_0%,rgba(2,6,23,0.68)_38%,rgba(0,0,0,0.18)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/24 via-transparent to-black/42" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-zinc-950/55 to-transparent" />

      <div className="relative z-10 max-w-[1360px] mx-auto w-full">
        <div className="max-w-5xl">
          <div
            className="page-load-rise inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-950/80 border border-zinc-800 mb-8"
            style={{ animationDelay: "120ms" }}
          >
            <Sparkles className="w-4 h-4 text-sky-300" />
            <span className="text-sm text-zinc-300">{t.hero.badge}</span>
          </div>

          <h1
            className="page-load-rise max-w-5xl whitespace-pre-line font-display text-5xl font-bold leading-[0.95] text-zinc-100 text-balance md:text-6xl xl:text-7xl"
            style={{ animationDelay: "240ms" }}
          >
            {t.hero.title}
          </h1>

          <p
            className="page-load-rise mt-6 max-w-[650px] text-base leading-relaxed text-zinc-400 text-pretty md:text-lg"
            style={{ animationDelay: "380ms" }}
          >
            {t.hero.subtitle}
          </p>

          <div
            className="page-load-rise mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            style={{ animationDelay: "520ms" }}
          >
            <LiquidCtaButton href="#booking">
              {t.hero.primaryCta}
            </LiquidCtaButton>
            <Link
              href="#pricing"
              className="group flex items-center gap-2 px-1 sm:px-6 py-3 text-sm font-medium text-zinc-400 hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 rounded-full transition-colors"
            >
              <span>{t.hero.secondaryCta}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          <div className="mt-16 grid sm:grid-cols-3 gap-3 max-w-4xl">
            {t.hero.proofPoints.map((point, index) => (
                <div
                key={point}
                className="page-load-rise flex items-start gap-3 rounded-lg border border-zinc-800/70 bg-zinc-950/55 p-4 backdrop-blur"
                style={{ animationDelay: `${660 + index * 90}ms` }}
              >
                <CheckCircle2 className="w-5 h-5 text-sky-300 shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed text-zinc-300">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
