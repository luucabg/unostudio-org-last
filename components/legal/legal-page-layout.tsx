import type { ReactNode } from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

type LegalPageLayoutProps = { eyebrow: string; title: string; description: string; updatedAt: string; children: ReactNode }

export function LegalPageLayout({ title, description, updatedAt, children }: LegalPageLayoutProps) {
  return <><SiteHeader /><main className="legal-page container"><Link href="/" className="text-link">Volver a unostudio</Link><h1>{title}</h1><p className="legal-description">{description}</p><p className="legal-date">Última actualización: {updatedAt}</p><div className="legal-content">{children}</div></main><SiteFooter /></>
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return <section className="legal-section"><h2>{title}</h2><div>{children}</div></section>
}

export function LegalList({ items }: { items: string[] }) {
  return <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>
}
