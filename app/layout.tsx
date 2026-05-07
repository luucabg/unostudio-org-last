import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://unostudio.org"),
  title: {
    default: "unostudio | Diseño web para convertir",
    template: "%s | unostudio",
  },
  description:
    "Agencia de diseño web orientado a conversión, con automatizaciones de IA para captar, filtrar y seguir leads.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "unostudio | Diseño web para convertir",
    description:
      "Webs enfocadas en conversión y automatizaciones de IA como complemento para captar, filtrar y seguir leads.",
    url: "https://unostudio.org",
    siteName: "unostudio",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "unostudio | Diseño web para convertir",
    description:
      "Webs enfocadas en conversión y automatizaciones de IA como complemento para captar, filtrar y seguir leads.",
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
        {children}
        <Analytics />
      </body>
    </html>
  )
}
