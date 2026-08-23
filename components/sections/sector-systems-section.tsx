"use client"

import Link from "next/link"
import { ArrowUpRight, CheckCircle2, MessageSquareText, PanelsTopLeft } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const content = {
  es: {
    eyebrow: "El sistema",
    title: "La web genera la oportunidad. El sistema deja claro qué hacer después.",
    body:
      "Cada solicitud puede pasar por una reunión, una propuesta, un seguimiento o una contratación. El sistema reúne la información y hace visible la siguiente acción sin añadir complejidad innecesaria.",
    cardEyebrow: "Ejemplo aplicado · reformas",
    cardTitle: "De una solicitud de presupuesto a una oportunidad organizada.",
    points: ["Solicitud con contexto", "Estado visible", "Siguiente acción clara"],
    cta: "Ver ejemplo para reformas",
  },
  en: {
    eyebrow: "The system",
    title: "The website creates the opportunity. The system makes the next step clear.",
    body:
      "Each enquiry may lead to a meeting, proposal, follow-up, or signed work. The system keeps the information together and makes the next action visible without adding unnecessary complexity.",
    cardEyebrow: "Applied example · renovations",
    cardTitle: "From a quote request to an organized opportunity.",
    points: ["Context-rich enquiry", "Visible status", "Clear next action"],
    cta: "View renovation example",
  },
} as const

export function SectorSystemsSection() {
  const { locale } = useI18n()
  const copy = content[locale]

  return (
    <section id="sectors" className="relative scroll-mt-24 overflow-hidden px-6 py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,182,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(56,182,255,0.045) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <ScrollReveal>
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-sky-300">{copy.eyebrow}</p>
          <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight text-zinc-100 text-balance md:text-5xl">
            {copy.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-500 md:text-lg">{copy.body}</p>
        </ScrollReveal>

        <ScrollReveal delay={130}>
          <Link
            href="/reformas"
            className="group relative block overflow-hidden rounded-xl border border-sky-300/20 bg-[linear-gradient(145deg,rgba(10,18,31,0.96),rgba(4,8,15,0.98))] p-6 shadow-[0_32px_100px_-52px_rgba(56,182,255,0.9),inset_0_1px_0_rgba(255,255,255,0.06)] transition duration-300 hover:-translate-y-1 hover:border-sky-300/40 md:p-8"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl" />
            <div className="relative flex items-start justify-between gap-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-sky-300">{copy.cardEyebrow}</p>
                <h3 className="mt-4 max-w-xl font-heading text-2xl font-semibold leading-tight text-zinc-100 md:text-3xl">
                  {copy.cardTitle}
                </h3>
              </div>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-zinc-100 transition group-hover:border-sky-300/40 group-hover:bg-sky-300 group-hover:text-zinc-950">
                <ArrowUpRight className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
              </span>
            </div>

            <div className="relative mt-8 grid gap-3 sm:grid-cols-3">
              {copy.points.map((point, index) => {
                const Icon = index === 0 ? MessageSquareText : index === 1 ? PanelsTopLeft : CheckCircle2
                return (
                  <div key={point} className="rounded-lg border border-white/8 bg-white/[0.025] p-4">
                    <Icon className="h-4 w-4 text-sky-300" strokeWidth={1.8} aria-hidden="true" />
                    <p className="mt-3 text-sm leading-6 text-zinc-300">{point}</p>
                  </div>
                )
              })}
            </div>

            <span className="relative mt-7 inline-flex items-center gap-2 text-sm font-semibold text-zinc-100">
              {copy.cta}
              <ArrowUpRight className="h-4 w-4 text-sky-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.8} aria-hidden="true" />
            </span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
