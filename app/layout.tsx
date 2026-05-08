import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import { I18nProvider } from "@/components/i18n-provider"
import { CookieConsentManager } from "@/components/cookies/cookie-consent-manager"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://unostudio.org"),
  title: {
    default: "unostudio | Diseño web, conversión e IA en Valencia",
    template: "%s | unostudio",
  },
  description:
    "Estudio de diseño web y conversión con IA en Valencia. Creamos landings, webs, creativos, agentes IA y automatizaciones para captar llamadas, reservas y clientes en España y remoto.",
  keywords: [
    "diseño web Valencia",
    "agencia diseño web Valencia",
    "diseño web España",
    "webs de conversión",
    "landing page conversión",
    "automatizaciones IA",
    "agentes IA",
    "diseño landing pages",
    "WhatsApp para leads",
    "optimización conversión web",
    "unostudio",
  ],
  authors: [{ name: "unostudio", url: "https://unostudio.org" }],
  creator: "unostudio",
  publisher: "unostudio",
  category: "Web design and conversion optimization",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "unostudio | Diseño web, conversión e IA en Valencia",
    description:
      "Landings, webs de conversión, creativos, agentes IA y automatizaciones para negocios en Valencia, España y remoto.",
    url: "https://unostudio.org",
    siteName: "unostudio",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/desktop_hero.png",
        width: 1600,
        height: 900,
        alt: "unostudio diseño web y conversión con IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "unostudio | Diseño web, conversión e IA en Valencia",
    description:
      "Webs, landings, creativos y automatizaciones con IA para convertir visitas en llamadas, reservas y clientes.",
    images: ["/desktop_hero.png"],
  },
  icons: {
    icon: [
      {
        url: "/logos/favicon.png",
        type: "image/png",
      },
    ],
    shortcut: "/logos/favicon.png",
    apple: "/logos/favicon.png",
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "unostudio",
  legalName: "Luca Benidze",
  url: "https://unostudio.org",
  email: "hola@unostudio.org",
  founder: {
    "@type": "Person",
    name: "Luca Benidze",
  },
  image: "https://unostudio.org/desktop_hero.png",
  logo: "https://unostudio.org/logos/logo_nav.png",
  description:
    "Estudio de diseño web y conversión con IA. Creamos landings, webs, creativos, agentes IA, automatizaciones y dashboards.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Valencia",
    addressCountry: "ES",
  },
  areaServed: [
    { "@type": "Country", name: "España" },
    { "@type": "AdministrativeArea", name: "Comunidad Valenciana" },
    { "@type": "Place", name: "Remoto" },
  ],
  knowsAbout: [
    "Diseño web",
    "Conversión web",
    "Landing pages",
    "Automatización con IA",
    "Agentes IA",
    "Creativos digitales",
    "Dashboards",
  ],
  offers: {
    "@type": "OfferCatalog",
    name: "Servicios unostudio",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Landing de Conversión" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web de Conversión" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sistema de Conversión" } },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cal+Sans&family=Instrument+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${manrope.variable} font-sans antialiased bg-zinc-950 text-zinc-100`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <I18nProvider>{children}</I18nProvider>
        <CookieConsentManager />
      </body>
    </html>
  )
}
