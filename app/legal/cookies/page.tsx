import type { Metadata } from "next"
import Link from "next/link"
import { LegalList, LegalPageLayout, LegalSection } from "@/components/legal/legal-page-layout"

const updatedAt = "8 de mayo de 2026"

const cookieRows = [
  {
    name: "unostudio_cookie_consent",
    provider: "unostudio / Luca Benidze",
    purpose: "Guardar preferencias de consentimiento.",
    duration: "Hasta 24 meses",
    type: "Técnica",
  },
  {
    name: "Vercel Analytics",
    provider: "Vercel",
    purpose: "Medición agregada de visitas y eventos si el usuario acepta analítica. No se carga antes del consentimiento.",
    duration: "Según configuración del proveedor",
    type: "Analítica",
  },
  {
    name: "[cookie_publicitaria]",
    provider: "[proveedor pendiente]",
    purpose: "Medición publicitaria o remarketing si se activa en el futuro.",
    duration: "[duración pendiente]",
    type: "Publicitaria",
  },
]

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "Política de cookies de unostudio.org.",
  alternates: { canonical: "/legal/cookies" },
  robots: { index: false, follow: true },
}

export default function CookiesPage() {
  return (
    <LegalPageLayout
      eyebrow="Cookies"
      title="Política de cookies"
      description="Información sobre cookies técnicas, analíticas y publicitarias, y cómo gestionar tus preferencias."
      updatedAt={updatedAt}
    >
      <LegalSection title="Qué son las cookies">
        <p>
          Las cookies son pequeños archivos que un sitio web puede almacenar en tu navegador para recordar información
          técnica, preferencias o datos de navegación. También pueden existir tecnologías similares, como localStorage.
        </p>
      </LegalSection>

      <LegalSection title="Tipos de cookies">
        <LegalList
          items={[
            "Cookies técnicas: necesarias para que la web funcione y para guardar preferencias básicas.",
            "Cookies analíticas: ayudan a medir visitas, eventos y rendimiento de la web.",
            "Cookies publicitarias: permiten medir campañas, crear audiencias o mostrar publicidad personalizada si se activan.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Cookies técnicas">
        <p>
          Las cookies técnicas son necesarias para prestar el servicio solicitado, recordar tus preferencias de cookies y
          mantener funciones básicas del sitio. Supabase puede intervenir en formularios de contacto sin instalar cookies
          de analítica o publicidad. Estas cookies no requieren consentimiento.
        </p>
      </LegalSection>

      <LegalSection title="Cookies analíticas">
        <p>
          Las cookies analíticas solo se activarán si das tu consentimiento. Sirven para entender el uso de la web,
          detectar errores, medir visitas y mejorar el contenido.
        </p>
      </LegalSection>

      <LegalSection title="Cookies publicitarias">
        <p>
          Las cookies publicitarias no están activas por defecto. Si se añaden en el futuro, se usarán solo con
          consentimiento previo para medición de campañas, remarketing o audiencias.
        </p>
      </LegalSection>

      <LegalSection title="Tabla de cookies">
        {/* TODO: completar tabla con cookies reales cuando se activen proveedores definitivos. */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-300">
                <th className="py-3 pr-4 font-semibold">Nombre</th>
                <th className="py-3 pr-4 font-semibold">Proveedor</th>
                <th className="py-3 pr-4 font-semibold">Finalidad</th>
                <th className="py-3 pr-4 font-semibold">Duración</th>
                <th className="py-3 font-semibold">Tipo</th>
              </tr>
            </thead>
            <tbody>
              {cookieRows.map((cookie) => (
                <tr key={cookie.name} className="border-b border-zinc-900">
                  <td className="py-4 pr-4 text-zinc-300">{cookie.name}</td>
                  <td className="py-4 pr-4">{cookie.provider}</td>
                  <td className="py-4 pr-4">{cookie.purpose}</td>
                  <td className="py-4 pr-4">{cookie.duration}</td>
                  <td className="py-4">{cookie.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </LegalSection>

      <LegalSection title="Cómo aceptar, rechazar o configurar cookies">
        <p>
          Al entrar en la web verás un banner que permite aceptar, rechazar o configurar cookies por categorías. Las
          categorías no técnicas no vienen preactivadas.
        </p>
      </LegalSection>

      <LegalSection title="Cómo cambiar preferencias">
        <p>
          Puedes cambiar tus preferencias desde el enlace permanente “Configurar cookies” del footer. Al cambiar la
          configuración se guardará una nueva preferencia técnica.
        </p>
      </LegalSection>

      <LegalSection title="Más información">
        <p>
          Para saber cómo tratamos datos personales, consulta la{" "}
          <Link href="/legal/privacidad" className="text-sky-300 hover:text-sky-200">
            Política de Privacidad
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPageLayout>
  )
}
