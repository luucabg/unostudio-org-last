"use client"

import { ArrowRight, Check } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"

export function PricingSection() {
  const { t } = useI18n()

  return (
    <section id="pricing" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-wide text-sky-300">{t.pricing.eyebrow}</p>
          <h2 className="mb-3 whitespace-pre-line font-display text-3xl font-bold leading-tight text-zinc-100 md:text-4xl">
            {t.pricing.title}
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-zinc-500 md:text-base">{t.pricing.body}</p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.94fr_1.06fr_0.94fr]">
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
                {plan.badge ? (
                  <span
                    className={`absolute right-4 top-4 rounded-md border px-2 py-0.5 text-[10px] font-semibold ${
                      plan.highlighted
                        ? "border-sky-200/35 bg-sky-300/15 text-sky-100"
                        : "border-white/10 bg-white/5 text-zinc-300"
                    }`}
                  >
                    {plan.badge}
                  </span>
                ) : null}

                <div className="mb-4 min-h-9 pr-24">
                  <h3 className="text-lg font-semibold text-zinc-100">{plan.name}</h3>
                </div>

                <div className="mb-4">
                  <div className="font-display leading-tight text-zinc-50">
                    <p className="text-2xl font-bold md:text-3xl">
                      {setupParts ? (
                        <>
                          <span className="mr-2">{setupParts[1]}</span>
                          <span>{setupParts[2]}</span>
                        </>
                      ) : (
                        setupPrice
                      )}
                    </p>
                    {monthlyPrice ? (
                      <p className="mt-1.5 text-xl font-bold text-zinc-200 md:text-2xl">+ {monthlyPrice}</p>
                    ) : null}
                  </div>
                  <p className="mt-3 min-h-16 text-xs leading-6 text-zinc-400">{plan.description}</p>
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

        <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-zinc-500">
          {t.pricing.adManagementNote}
        </p>

        <div className="mt-12">
          <p className="mb-4 text-center text-sm font-medium uppercase tracking-wide text-sky-300">
            {t.pricing.upsellsTitle}
          </p>
          <div className="grid gap-3 md:grid-cols-4">
            {t.pricing.upsells.map((upsell) => (
              <div
                key={upsell.name}
                className="rounded-lg border border-zinc-800/70 bg-zinc-950/70 p-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
              >
                <p className="text-sm font-semibold text-zinc-100">{upsell.name}</p>
                <p className="mt-2 text-xs leading-5 text-zinc-500">{upsell.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
