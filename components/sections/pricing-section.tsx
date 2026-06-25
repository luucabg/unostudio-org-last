"use client"

import { ArrowRight, Check } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const stripePaymentLinks: Record<string, string | undefined> = {
  "Web Esencial": process.env.NEXT_PUBLIC_STRIPE_WEB_ESENCIAL_URL,
  "Essential Web": process.env.NEXT_PUBLIC_STRIPE_WEB_ESENCIAL_URL,
  "Web Pro": process.env.NEXT_PUBLIC_STRIPE_WEB_PRO_URL,
}

export function PricingSection() {
  const { t } = useI18n()

  return (
    <section id="pricing" className="relative overflow-hidden px-6 py-20">
      <div className="pointer-events-none absolute inset-x-0 top-8 mx-auto h-64 max-w-4xl rounded-full bg-[#38b6ff]/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,182,255,0.06),transparent_42%)]" />

      <div className="relative mx-auto max-w-6xl">
        <ScrollReveal className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-wide text-[#38b6ff]">{t.pricing.eyebrow}</p>
          <h2 className="mb-3 whitespace-pre-line font-display text-4xl font-bold leading-tight text-zinc-100 md:text-5xl">
            {t.pricing.title}
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-zinc-500 md:text-base">{t.pricing.body}</p>
        </ScrollReveal>

        <div className="grid gap-6 lg:grid-cols-[0.94fr_1.06fr_0.94fr]">
          {t.pricing.plans.map((plan, index) => {
            const [setupPrice, monthlyPrice] = plan.price.split(" + ")
            const setupParts = setupPrice.match(/^(Desde|From)\s(.+)$/)
            const setupLabel = setupParts ? setupParts[1] : null
            const setupAmount = setupParts ? setupParts[2] : setupPrice
            const href = stripePaymentLinks[plan.name] || plan.href
            const isExternal = href.startsWith("http")

            return (
              <ScrollReveal key={plan.name} delay={index * 100} className="h-full">
                <div
                  className={`group relative flex h-full flex-col overflow-hidden rounded-lg border p-6 transition duration-300 hover:-translate-y-1 ${
                    plan.highlighted
                      ? "border-[#38b6ff]/60 bg-[radial-gradient(circle_at_50%_-18%,rgba(56,182,255,0.36),rgba(10,29,38,0.72)_30%,rgba(12,13,17,0.96)_78%)] shadow-[0_0_70px_-28px_rgba(56,182,255,0.9),0_22px_70px_-42px_rgba(56,182,255,0.65),inset_0_1px_0_rgba(255,255,255,0.14)]"
                      : "border-white/10 bg-[radial-gradient(circle_at_50%_-12%,rgba(255,255,255,0.08),rgba(18,18,22,0.82)_28%,rgba(10,10,12,0.94)_76%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                  }`}
                >
                  {plan.highlighted ? (
                    <div className="pointer-events-none absolute inset-x-10 -top-10 h-24 rounded-full bg-[#38b6ff]/45 blur-2xl" />
                  ) : null}

                  {plan.badge ? (
                    <span
                      className={`absolute right-4 top-4 rounded-full border px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wide ${
                        plan.highlighted
                          ? "border-[#38b6ff]/35 bg-[#38b6ff]/15 text-[#d9f3ff]"
                          : "border-white/10 bg-white/5 text-zinc-300"
                      }`}
                    >
                      {plan.badge}
                    </span>
                  ) : null}

                  <div className="relative mb-6 min-h-12 pr-24">
                    <h3 className="text-lg font-semibold text-zinc-100">{plan.name}</h3>
                    <p className="mt-1 text-[11px] text-zinc-500">{t.pricing.billingPrimary}</p>
                  </div>

                  <div className="relative mb-5">
                    <div className="font-display leading-none text-zinc-50">
                      {setupLabel ? (
                        <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-zinc-500">
                          {setupLabel}
                        </p>
                      ) : null}
                      <div className="flex flex-wrap items-end gap-x-2 gap-y-1">
                        <p className="text-4xl font-bold tracking-tight md:text-5xl">{setupAmount}</p>
                        {monthlyPrice ? (
                          <p className="pb-1 text-sm font-semibold text-zinc-400">+ {monthlyPrice}</p>
                        ) : null}
                      </div>
                    </div>
                    <p className="mt-3 min-h-12 text-xs leading-5 text-zinc-400">{plan.description}</p>
                  </div>

                  <ul className="relative flex flex-1 flex-col gap-2 border-t border-white/10 pt-5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full border border-[#38b6ff]/40 bg-[#38b6ff]/10">
                          <Check className="h-2.5 w-2.5 text-[#38b6ff]" strokeWidth={2.2} />
                        </span>
                        <span className="text-xs leading-5 text-zinc-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-center text-xs font-semibold transition duration-300 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38b6ff] ${
                      plan.highlighted
                        ? "bg-[#38b6ff] text-zinc-950 shadow-[0_0_30px_-10px_rgba(56,182,255,0.9)] hover:bg-[#6ac9ff]"
                        : "bg-zinc-800 text-zinc-100 hover:bg-zinc-700"
                    }`}
                    aria-label={`${plan.cta}: ${plan.name}`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.8} />
                  </a>
                  <p className="mt-3 min-h-8 text-center text-[11px] leading-5 text-zinc-500">{plan.paymentNote}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal delay={120}>
          <div className="mx-auto mt-6 flex max-w-3xl flex-col items-center gap-4 rounded-lg border border-[#38b6ff]/25 bg-[radial-gradient(circle_at_50%_-30%,rgba(56,182,255,0.16),rgba(9,9,11,0.84)_52%)] p-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="text-sm font-semibold text-zinc-100">{t.pricing.customProject.title}</p>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">{t.pricing.customProject.body}</p>
            </div>
            <a
              href={t.pricing.customProject.href}
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#38b6ff] px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-[#6ac9ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38b6ff]"
            >
              {t.pricing.customProject.cta}
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="mx-auto mt-6 max-w-3xl rounded-lg border border-zinc-800/70 bg-zinc-950/60 px-5 py-4 text-center">
            <p className="text-xs leading-relaxed text-zinc-300">{t.pricing.reservationNote}</p>
            <p className="mt-2 text-xs leading-relaxed text-zinc-500">
              {t.pricing.monthlyNote} {t.pricing.minimumNote}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
