import type { ReactNode } from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import { pageMetadata, siteUrl } from "@/lib/seo"
import { SiteStructuredData } from "@/components/structured-data"
import "./globals.css"

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" })

export const metadata: Metadata = {
  ...pageMetadata("home"),
  metadataBase: new URL(siteUrl),
  title: { default: "Diseño web, software a medida y SEO | unostudio", template: "%s | unostudio" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  icons: { icon: [{ url: "/logos/icon-96.png", sizes: "96x96", type: "image/png" }], apple: [{ url: "/logos/apple-icon-180.png", sizes: "180x180", type: "image/png" }] },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={manrope.variable}>
      <body><SiteStructuredData />{children}</body>
    </html>
  )
}
