"use client"

import { Check } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"

export function PricingSection() {
  const { t } = useI18n()

  return (
    <section id="pricing" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-sky-300 uppercase tracking-wider mb-4">{t.pricing.eyebrow}</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mb-4 text-balance">
            {t.pricing.title}
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-pretty text-lg">{t.pricing.body}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.pricing.plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-8 rounded-lg border flex flex-col h-full transition-transform duration-300 hover:-translate-y-1 ${
                plan.highlighted ? "bg-zinc-100 border-zinc-100" : "bg-zinc-900/50 border-zinc-800/60"
              }`}
            >
              <div className="mb-6 min-h-28">
                <h3
                  className={`font-heading text-xl font-semibold mb-2 ${
                    plan.highlighted ? "text-zinc-900" : "text-zinc-100"
                  }`}
                >
                  {plan.name}
                </h3>
                <p className={`text-sm leading-relaxed ${plan.highlighted ? "text-zinc-600" : "text-zinc-500"}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span
                  className={`font-display text-3xl font-bold ${plan.highlighted ? "text-zinc-900" : "text-zinc-100"}`}
                >
                  {plan.price}
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.highlighted ? "text-zinc-900" : "text-sky-300"}`} />
                    <span className={`text-sm ${plan.highlighted ? "text-zinc-700" : "text-zinc-400"}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                className={`block w-full py-3 px-6 text-center rounded-full font-medium text-sm transition-colors mt-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 ${
                  plan.highlighted
                    ? "bg-zinc-900 text-zinc-100 hover:bg-blue-950"
                    : "bg-zinc-800 text-zinc-100 hover:bg-zinc-700"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
