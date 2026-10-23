import type { ReactNode } from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
import "./studio.css"

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" })

const title = "unostudio | Diseño y desarrollo para tu próxima idea"
const description = "Diseño de producto, webs, landing pages, branding, desarrollo con IA y software a medida. Cuéntanos tu idea. Le damos forma contigo."

export const metadata: Metadata = {
  metadataBase: new URL("https://unostudio.org"),
  title: { default: title, template: "%s | unostudio" },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "https://unostudio.org",
    siteName: "unostudio",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/projects/mocha-studio.png", width: 1424, height: 905, alt: "Diseño web de mochastudio, un proyecto de unostudio" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/projects/mocha-studio.png"] },
  icons: { icon: "/logos/favicon.png", apple: "/logos/favicon.png" },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={manrope.variable}>
      <body>{children}</body>
    </html>
  )
}
