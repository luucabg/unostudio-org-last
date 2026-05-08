import type { Metadata } from "next"
import type { ReactNode } from "react"
import Link from "next/link"
import { Navbar } from "@/components/ui/navbar"
import { FooterSection } from "@/components/sections/footer-section"
import { ArrowRight, Mail, MessageCircle } from "lucide-react"

type SearchParams = Promise<{
  estado?: string
  motivo?: string
}>

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con unostudio desde Valencia. Diseño web, landings, conversión, creativos, agentes IA y automatizaciones para negocios en España y remoto.",
  alternates: { canonical: "/contacto" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Contacto | unostudio",
    description: "Cuéntanos qué quieres convertir. Trabajamos desde Valencia para España y proyectos remotos.",
    url: "https://unostudio.org/contacto",
    type: "website",
  },
}

const inputClass =
  "mt-2 w-full rounded-lg border border-zinc-800 bg-zinc-950/80 px-4 py-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-700 focus:border-sky-300/70 focus:ring-2 focus:ring-sky-300/20"
const labelClass = "text-sm font-medium text-zinc-300"

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className={labelClass}>
      {label}
      {children}
    </label>
  )
}

export default async function ContactoPage({ searchParams }: { searchParams?: SearchParams }) {
  const params = await searchParams
  const sent = params?.estado === "enviado"
  const failed = params?.estado === "error"

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />
      <section className="px-6 pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 text-sm font-medium uppercase text-sky-300">Contacto</p>
            <h1 className="font-display text-5xl font-bold leading-tight text-zinc-100 md:text-7xl">
              Cuéntanos qué quieres convertir.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-500 md:text-lg">
              Explícanos qué vendes, qué web tienes ahora y qué resultado quieres conseguir. Te responderemos con el
              siguiente paso.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <a
                href="mailto:hola@unostudio.org?subject=Solicitud%20desde%20unostudio.org"
                className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-950/70 p-4 text-sm font-medium text-zinc-200 transition hover:border-sky-300/50"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-zinc-100 text-zinc-950">
                  <Mail className="h-4 w-4" strokeWidth={1.8} />
                </span>
                hola@unostudio.org
              </a>
              {/* TODO: sustituir [NUMERO_WHATSAPP] por número real en formato internacional sin signos. */}
              <a
                href="https://wa.me/[NUMERO_WHATSAPP]"
                className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-950/70 p-4 text-sm font-medium text-zinc-200 transition hover:border-sky-300/50"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-zinc-100 text-zinc-950">
                  <MessageCircle className="h-4 w-4" strokeWidth={1.8} />
                </span>
                WhatsApp
              </a>
            </div>
          </div>

          <form
            id="formulario"
            action="/api/contact"
            method="post"
            className="rounded-lg border border-zinc-800/80 bg-zinc-950/75 p-5 shadow-[0_24px_80px_-48px_rgba(125,211,252,0.45),inset_0_1px_0_rgba(255,255,255,0.05)] md:p-8"
          >
            {sent ? (
              <div className="mb-6 rounded-lg border border-emerald-400/25 bg-emerald-400/10 p-4 text-sm leading-6 text-emerald-100">
                Solicitud enviada. Te responderemos con el siguiente paso en cuanto revisemos el contexto.
              </div>
            ) : null}

            {failed ? (
              <div className="mb-6 rounded-lg border border-sky-300/25 bg-sky-300/10 p-4 text-sm leading-6 text-sky-100">
                No se ha podido enviar desde la web. Escríbenos a hola@unostudio.org y lo revisamos.
              </div>
            ) : null}

            <input
              tabIndex={-1}
              autoComplete="off"
              name="confirmacion"
              className="hidden"
              aria-hidden="true"
            />

            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Nombre">
                <input className={inputClass} name="nombre" autoComplete="name" required />
              </Field>
              <Field label="Empresa">
                <input className={inputClass} name="empresa" autoComplete="organization" required />
              </Field>
              <Field label="Email">
                <input className={inputClass} name="email" type="email" autoComplete="email" required />
              </Field>
              <Field label="Teléfono opcional">
                <input className={inputClass} name="telefono" type="tel" autoComplete="tel" />
              </Field>
              <Field label="Web actual">
                <input className={inputClass} name="web_actual" type="url" placeholder="https://" />
              </Field>
              <Field label="Servicio de interés">
                <select className={inputClass} name="servicio" required defaultValue="">
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  <option>Landing de Conversión</option>
                  <option>Web de Conversión</option>
                  <option>Sistema de Conversión</option>
                  <option>Otro</option>
                </select>
              </Field>
              <Field label="Presupuesto aproximado">
                <select className={inputClass} name="presupuesto" required defaultValue="">
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  <option>1.500-3.000 €</option>
                  <option>3.000-5.000 €</option>
                  <option>5.000 €+</option>
                  <option>No lo sé</option>
                </select>
              </Field>
              <Field label="Urgencia">
                <select className={inputClass} name="urgencia" required defaultValue="">
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  <option>Este mes</option>
                  <option>1-2 meses</option>
                  <option>Más adelante</option>
                </select>
              </Field>
            </div>

            <label className={`${labelClass} mt-5 block`}>
              Mensaje
              <textarea className={`${inputClass} min-h-36 resize-y`} name="mensaje" required />
            </label>

            <label className="mt-6 flex items-start gap-3 text-sm leading-6 text-zinc-400">
              <input
                type="checkbox"
                name="acepta_privacidad"
                required
                className="mt-1 h-4 w-4 rounded border-zinc-700 bg-zinc-950 text-sky-300"
              />
              <span>
                He leído y acepto la{" "}
                <Link href="/legal/privacidad" className="text-sky-300 hover:text-sky-200">
                  Política de Privacidad
                </Link>
                .
              </span>
            </label>

            <p className="mt-5 rounded-lg border border-zinc-800 bg-zinc-950/70 p-4 text-xs leading-6 text-zinc-500">
              Responsable: Luca Benidze. Forma jurídica: Autónomo. Finalidad: responder a tu solicitud y gestionar
              comunicaciones relacionadas con nuestros servicios. Derechos: puedes acceder, rectificar y suprimir tus
              datos escribiendo a hola@unostudio.org. Más información en la{" "}
              <Link href="/legal/privacidad" className="text-sky-300 hover:text-sky-200">
                Política de Privacidad
              </Link>
              .
            </p>
            {/* TODO: configurar en Vercel SUPABASE_SERVICE_ROLE_KEY o NEXT_PUBLIC_SUPABASE_ANON_KEY y aplicar migración Supabase. */}

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-sky-200 active:scale-[0.98] md:w-auto"
            >
              Enviar solicitud
              <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
            </button>
          </form>
        </div>
      </section>
      <FooterSection />
    </main>
  )
}
