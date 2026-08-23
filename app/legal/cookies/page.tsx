import type { Metadata } from "next"
import Link from "next/link"
import { LegalList, LegalPageLayout, LegalSection } from "@/components/legal/legal-page-layout"

const updatedAt = "24 de agosto de 2026"

const technologyRows = [
  {
    name: "unostudio_cookie_consent",
    provider: "unostudio",
    purpose: "Guardar la preferencia de consentimiento del usuario.",
    duration: "Hasta 24 meses",
    type: "Técnica",
  },
  {
    name: "Vercel Analytics",
    provider: "Vercel",
    purpose: "Medición agregada del uso del sitio cuando el usuario acepta analítica.",
    duration: "Según la configuración y política del proveedor",
    type: "Analítica",
  },
]

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "Política de cookies y tecnologías similares de unostudio.org.",
  alternates: { canonical: "/legal/cookies" },
  robots: { index: false, follow: true },
}

export default function CookiesPage() {
  return (
    <LegalPageLayout
      eyebrow="Cookies"
      title="Política de cookies"
      description="Información sobre el almacenamiento técnico y la analítica utilizada en unostudio.org."
      updatedAt={updatedAt}
    >
      <LegalSection title="Qué son las cookies y tecnologías similares">
        <p>
          Las cookies son pequeños archivos que un sitio web puede almacenar en tu navegador. También pueden utilizarse
          tecnologías similares, como localStorage, para recordar preferencias o información técnica.
        </p>
      </LegalSection>

      <LegalSection title="Qué utilizamos actualmente">
        <LegalList
          items={[
            "Almacenamiento técnico para recordar tu elección sobre analítica.",
            "Vercel Analytics únicamente cuando das consentimiento.",
            "No cargamos herramientas publicitarias o de remarketing desde este gestor de consentimiento.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Tecnologías técnicas">
        <p>
          Son necesarias para recordar tus preferencias y para funciones básicas del sitio. No se utilizan para crear
          perfiles publicitarios.
        </p>
      </LegalSection>

      <LegalSection title="Analítica">
        <p>
          Vercel Analytics solo se carga después de aceptar la categoría analítica. Se utiliza para entender de forma
          agregada el uso del sitio y mejorar su funcionamiento y contenido.
        </p>
      </LegalSection>

      <LegalSection title="Tabla de tecnologías">
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
              {technologyRows.map((item) => (
                <tr key={item.name} className="border-b border-zinc-900">
                  <td className="py-4 pr-4 text-zinc-300">{item.name}</td>
                  <td className="py-4 pr-4">{item.provider}</td>
                  <td className="py-4 pr-4">{item.purpose}</td>
                  <td className="py-4 pr-4">{item.duration}</td>
                  <td className="py-4">{item.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </LegalSection>

      <LegalSection title="Cómo aceptar o rechazar la analítica">
        <p>
          Al entrar en la web puedes aceptar la analítica o continuar solo con las tecnologías necesarias. La analítica
          está desactivada por defecto hasta que das tu consentimiento.
        </p>
      </LegalSection>

      <LegalSection title="Cómo cambiar tus preferencias">
        <p>
          Puedes volver a abrir el panel desde “Configurar cookies” en el footer y cambiar tu elección cuando quieras.
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
