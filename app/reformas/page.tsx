import type { Metadata } from "next"
import { ReformasLanding } from "@/components/reformas/reformas-landing"

type SearchParams = Promise<{
  estado?: string
  motivo?: string
}>

export const metadata: Metadata = {
  title: "Captación y seguimiento para empresas de reformas",
  description:
    "Web, formularios, WhatsApp y seguimiento de presupuestos para empresas de reformas. Cada solicitud con contexto, estado y próxima acción.",
  alternates: { canonical: "/reformas" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Sistema de captación para empresas de reformas | unostudio",
    description:
      "Convierte solicitudes de reforma en visitas y presupuestos con seguimiento. Web, cualificación, WhatsApp y panel comercial.",
    url: "https://unostudio.org/reformas",
    siteName: "unostudio",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/projects/saduni-reformas.png",
        width: 1424,
        height: 905,
        alt: "Ejemplo de página web para una empresa de reformas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Captación y seguimiento para empresas de reformas | unostudio",
    description: "Web, formularios, WhatsApp y seguimiento para que ninguna oportunidad quede sin próxima acción.",
    images: ["/projects/saduni-reformas.png"],
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sistema de captación y seguimiento para empresas de reformas",
  description:
    "Diseño e instalación de web de captación, formularios de cualificación, pipeline y seguimiento comercial para empresas de reformas.",
  url: "https://unostudio.org/reformas",
  provider: {
    "@type": "ProfessionalService",
    name: "unostudio",
    url: "https://unostudio.org",
  },
  areaServed: { "@type": "Country", name: "España" },
  audience: { "@type": "BusinessAudience", audienceType: "Empresas de reformas" },
}

export default async function ReformasPage({ searchParams }: { searchParams?: SearchParams }) {
  const params = await searchParams

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ReformasLanding sent={params?.estado === "enviado"} failed={params?.estado === "error"} />
    </>
  )
}
