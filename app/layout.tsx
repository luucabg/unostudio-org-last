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
    default: "unostudio | Webs y sistemas comerciales para empresas de servicios",
    template: "%s | unostudio",
  },
  description:
    "Diseñamos webs de conversión y sistemas comerciales para empresas de servicios. Captación, organización y seguimiento de oportunidades desde Valencia.",
  keywords: [
    "diseño web Valencia",
    "presupuestos por WhatsApp",
    "landing page reformas",
    "web para reformas",
    "web para interiorismo",
    "web para arquitectura",
    "web inmobiliaria Valencia",
    "leads por WhatsApp",
    "mantenimiento web",
    "web de conversión para empresas de servicios",
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
    title: "unostudio | Webs y sistemas comerciales para empresas de servicios",
    description:
      "Webs de conversión y sistemas comerciales para captar, organizar y seguir mejor cada oportunidad.",
    url: "https://unostudio.org",
    siteName: "unostudio",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/desktop_hero.png",
        width: 1600,
        height: 900,
        alt: "unostudio webs y sistemas comerciales para empresas de servicios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "unostudio | Webs y sistemas comerciales",
    description:
      "Webs de conversión y sistemas comerciales para empresas de servicios.",
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
    "Diseñamos webs de conversión y sistemas comerciales que ayudan a empresas de servicios a captar, organizar y seguir mejor sus oportunidades.",
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
    "Sistemas comerciales",
    "Seguimiento de oportunidades",
    "Procesos comerciales",
    "Organización de solicitudes",
    "Integraciones comerciales",
  ],
  offers: {
    "@type": "OfferCatalog",
    name: "Servicios unostudio",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web de conversión" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sistema comercial" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web + sistema comercial" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Proyecto a medida" } },
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
