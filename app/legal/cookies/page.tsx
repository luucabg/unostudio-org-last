import type { Metadata } from "next"
import Link from "next/link"
import { LegalPageLayout, LegalSection } from "@/components/legal/legal-page-layout"

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "Información sobre cookies y almacenamiento en unostudio.org.",
  alternates: { canonical: "/legal/cookies" },
  robots: { index: false, follow: true },
}

export default function CookiesPage() {
  return (
    <LegalPageLayout eyebrow="Cookies" title="Política de cookies" description="Información sobre el funcionamiento de esta versión de unostudio.org." updatedAt="23 de octubre de 2026">
      <LegalSection title="Navegación y almacenamiento"><p>Esta versión permite consultar los proyectos y servicios sin guardar preferencias en cookies ni en el almacenamiento local del navegador. La aplicación no incorpora herramientas de analítica, publicidad ni seguimiento de visitas.</p></LegalSection>
      <LegalSection title="Imágenes y tipografía"><p>Las imágenes y los archivos de tipografía se sirven desde el alojamiento de la web. Las muestras de proyectos son imágenes; sus páginas se abren únicamente cuando decides visitarlas.</p></LegalSection>
      <LegalSection title="Enlaces a otros servicios"><p>Al abrir WhatsApp o visitar una web enlazada, accedes a un servicio externo que aplica su propia política de privacidad y de cookies. El enlace de correo abre la aplicación que tengas configurada para escribir mensajes.</p></LegalSection>
      <LegalSection title="Más información"><p>Puedes consultar la <Link href="/legal/privacidad">política de privacidad</Link> o escribir a <a href="mailto:hola@unostudio.org">hola@unostudio.org</a>.</p></LegalSection>
    </LegalPageLayout>
  )
}
