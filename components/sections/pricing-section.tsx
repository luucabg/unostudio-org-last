"use client"

import { ArrowRight, Check } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"

export function PricingSection() {
  const { t } = useI18n()

  return (
    <section id="pricing" className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-9 max-w-2xl text-center">
          <p className="mb-3 text-xs font-medium uppercase text-sky-300">{t.pricing.eyebrow}</p>
          <h2 className="mb-3 font-display text-3xl font-bold leading-tight text-zinc-100 md:text-4xl">
            {t.pricing.title}
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-zinc-500 md:text-base">{t.pricing.body}</p>
        </div>

        <div className="mb-6 flex justify-center">
          <div className="inline-flex rounded-full border border-white/10 bg-zinc-900/80 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <span className="rounded-full bg-zinc-100 px-4 py-1.5 text-xs font-semibold text-zinc-950">
              {t.pricing.billingPrimary}
            </span>
            <span className="px-4 py-1.5 text-xs font-medium text-zinc-500">{t.pricing.billingSecondary}</span>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.94fr_1.04fr_0.96fr]">
          {t.pricing.plans.map((plan, index) => {
            const [setupPrice, monthlyPrice] = plan.price.split(" + ")
            const setupParts = setupPrice.match(/^(Desde|From)\s(.+)$/)

            return (
              <div
                key={plan.name}
                className={`group relative flex h-full flex-col overflow-hidden rounded-lg border p-5 transition duration-300 hover:-translate-y-1 ${
                  plan.highlighted
                    ? "border-sky-200/50 bg-[linear-gradient(180deg,rgba(56,64,83,0.88),rgba(32,36,46,0.96))] shadow-[0_22px_70px_-36px_rgba(125,211,252,0.55),inset_0_1px_0_rgba(255,255,255,0.16)]"
                    : "border-zinc-800/80 bg-zinc-950/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                }`}
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-200/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="mb-4 flex min-h-9 items-start justify-between gap-3">
                  <h3 className="font-heading text-lg font-semibold text-zinc-100">{plan.name}</h3>
                  {plan.badge ? (
                    <span
                      className={`shrink-0 rounded-md px-2.5 py-0.5 text-[11px] font-semibold ${
                        plan.highlighted ? "bg-sky-300 text-zinc-950" : "bg-zinc-800 text-zinc-200"
                      }`}
                    >
                      {plan.badge}
                    </span>
                  ) : null}
                </div>

                <div className="mb-4">
                  <div className="font-display font-bold leading-tight text-zinc-50">
                    <p className="text-2xl md:text-3xl">
                      {setupParts ? (
                        <>
                          <span className="mr-2">{setupParts[1]}</span>
                          <span>{setupParts[2]}</span>
                        </>
                      ) : (
                        setupPrice
                      )}
                    </p>
                    {monthlyPrice ? <p className="mt-1 text-xl md:text-2xl">+ {monthlyPrice}</p> : null}
                  </div>
                  <p className="mt-3 min-h-12 text-xs leading-6 text-zinc-400">{plan.description}</p>
                </div>

                <a
                  href={plan.href}
                  className={`mb-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-center text-xs font-semibold transition duration-300 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 ${
                    plan.highlighted
                      ? "bg-zinc-100 text-zinc-950 hover:bg-white"
                      : "bg-zinc-800 text-zinc-100 hover:bg-zinc-700"
                  }`}
                  aria-label={`${plan.cta}: ${plan.name}`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.8} />
                </a>

                <ul className="flex flex-1 flex-col gap-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky-300" strokeWidth={1.9} />
                      <span className="text-xs leading-6 text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
