import { Check } from "lucide-react"

const plans = [
  {
    name: "Landing de conversión",
    description: "Para validar una oferta, captar leads o vender un servicio concreto.",
    price: "Desde 1.200 EUR",
    features: [
      "Estrategia de mensaje y estructura",
      "Diseño responsive de una página",
      "Copy orientado a conversión",
      "Formulario o reserva conectada",
      "Medición básica de eventos",
    ],
    cta: "Pedir propuesta",
    href: "mailto:hola@unostudio.org?subject=Landing%20de%20conversion",
    highlighted: false,
  },
  {
    name: "Web + IA",
    description: "Para negocios que necesitan web completa y seguimiento automático.",
    price: "Desde 2.400 EUR",
    features: [
      "Todo lo incluido en Landing",
      "Hasta 5 páginas clave",
      "Sistema visual de marca aplicado",
      "Automatización IA para leads",
      "Integración con CRM, email o agenda",
      "Panel simple de métricas",
    ],
    cta: "Reservar sprint",
    href: "mailto:hola@unostudio.org?subject=Web%20con%20IA",
    highlighted: true,
  },
  {
    name: "Sistema continuo",
    description: "Para optimizar campañas, páginas y automatizaciones mes a mes.",
    price: "A medida",
    features: [
      "Iteraciones de diseño y copy",
      "Nuevas landing pages por campaña",
      "Tests de conversión",
      "Mejoras de automatización",
      "Soporte técnico prioritario",
      "Reporte mensual accionable",
    ],
    cta: "Hablar con unostudio",
    href: "mailto:hola@unostudio.org?subject=Sistema%20continuo",
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-sky-300 uppercase tracking-wider mb-4">Planes</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mb-4 text-balance">
            Elige punto de partida. Ajustamos alcance contigo.
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-pretty text-lg">
            Precios orientativos para salir de la conversación con una idea clara. Cada propuesta incluye entregables,
            tiempos y próximos pasos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
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
