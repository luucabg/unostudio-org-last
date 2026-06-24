"use client"

import Link from "next/link"
import { ArrowRight, CalendarDays, CheckCircle2, MessageCircle, Video } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const inputClass =
  "mt-2 w-full rounded-lg border border-zinc-800 bg-zinc-950/80 px-4 py-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-700 focus:border-sky-300/70 focus:ring-2 focus:ring-sky-300/20"
const labelClass = "text-sm font-medium text-zinc-300"
const whatsappHref = "https://wa.me/34694222191?text=Hola%2C%20quiero%20una%20demo%20para%20mi%20negocio"

export function CalBookingSection() {
  const { locale, t } = useI18n()
  const privacyBefore = locale === "es" ? "He leído y acepto la " : "I have read and accept the "
  const privacyLabel = locale === "es" ? "Política de Privacidad" : "Privacy Policy"
  const privacyAfter = "."
  const messagePlaceholder =
    locale === "es"
      ? "Ej: quiero una web más moderna, recibir más presupuestos o mejorar mi imagen"
      : "Example: I want a more modern website, more quote requests, or a better image"

  return (
    <section id="booking" className="relative overflow-hidden px-6 py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_42%,rgba(56,189,248,0.11),transparent_34%),linear-gradient(180deg,transparent,rgba(2,6,23,0.18))]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <ScrollReveal>
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-sky-300">{t.booking.eyebrow}</p>
          <h2 className="mb-6 max-w-2xl font-display text-4xl font-bold leading-tight text-zinc-100 md:text-6xl">
            {t.booking.title}
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-500 md:text-lg">{t.booking.body}</p>

          <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
            {t.booking.bullets.map((bullet, index) => {
              const Icon = index === 0 ? CheckCircle2 : index === 1 ? Video : CalendarDays

              return (
                <ScrollReveal key={bullet} delay={index * 80}>
                  <div className="flex items-center gap-3 rounded-lg border border-zinc-800/70 bg-zinc-950/70 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-zinc-100 text-zinc-950">
                      <Icon className="h-4 w-4" strokeWidth={1.8} />
                    </span>
                    <span className="text-sm font-medium text-zinc-200">{bullet}</span>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-zinc-800 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-sky-300/45 hover:text-zinc-50"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.8} />
            {t.booking.whatsappCta}
          </a>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <form
            action="/api/contact"
            method="post"
            className="rounded-lg border border-zinc-800/80 bg-zinc-950/80 p-5 shadow-[0_24px_80px_-48px_rgba(125,211,252,0.45),inset_0_1px_0_rgba(255,255,255,0.05)] md:p-8"
          >
            <input type="hidden" name="servicio" value="Demo inicial" />
            <input type="hidden" name="presupuesto" value="Demo gratuita" />
            <input type="hidden" name="urgencia" value="Este mes" />
            <input type="hidden" name="page_path" value="/" />
            <input tabIndex={-1} autoComplete="off" name="confirmacion" className="hidden" aria-hidden="true" />

            <div className="grid gap-5 md:grid-cols-2">
              <label className={labelClass}>
                {t.booking.form.name}
                <input className={inputClass} name="nombre" autoComplete="name" required />
              </label>

              <label className={labelClass}>
                {t.booking.form.business}
                <input className={inputClass} name="empresa" autoComplete="organization" required />
              </label>

              <label className={labelClass}>
                {t.booking.form.website}
                <input className={inputClass} name="web_actual" placeholder="https:// o @instagram" />
              </label>

              <label className={labelClass}>
                {t.booking.form.phone}
                <input className={inputClass} name="telefono" type="tel" autoComplete="tel" required />
              </label>
            </div>

            <label className={`${labelClass} mt-5 block`}>
              {t.booking.form.need}
              <textarea
                className={`${inputClass} min-h-24 resize-y`}
                name="mensaje"
                placeholder={messagePlaceholder}
              />
            </label>

            <label className="mt-6 flex items-start gap-3 text-sm leading-6 text-zinc-400">
              <input
                type="checkbox"
                name="acepta_privacidad"
                required
                className="mt-1 h-4 w-4 rounded border-zinc-700 bg-zinc-950 text-sky-300"
              />
              <span>
                {privacyBefore}
                <Link href="/legal/privacidad" className="text-sky-300 hover:text-sky-200">
                  {privacyLabel}
                </Link>
                {privacyAfter}
              </span>
            </label>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-sky-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
            >
              {t.booking.form.submit}
              <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  )
}
