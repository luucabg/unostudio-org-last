import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { LiquidCtaButton } from "@/components/buttons/liquid-cta-button"

export function CtaSection() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mb-6 text-balance">
          Hagamos que tu web tenga un trabajo claro: convertir.
        </h2>
        <p className="text-lg text-zinc-500 mb-10 text-pretty max-w-2xl mx-auto">
          Cuéntanos qué vendes, a quién quieres llegar y qué proceso quieres automatizar. Te devolvemos un plan de
          página, mensaje y flujo IA.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <LiquidCtaButton href="mailto:hola@unostudio.org?subject=Reservar%20llamada%20con%20unostudio">
            Escribir a unostudio
          </LiquidCtaButton>
          <Link
            href="#pricing"
            className="group flex items-center gap-2 px-6 py-3 text-sm font-medium text-zinc-400 hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 rounded-full transition-colors"
          >
            <span>Ver planes</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  )
}
