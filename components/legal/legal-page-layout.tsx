import type { ReactNode } from "react"
import Link from "next/link"
import { Navbar } from "@/components/ui/navbar"
import { FooterSection } from "@/components/sections/footer-section"

type LegalPageLayoutProps = {
  eyebrow: string
  title: string
  description: string
  updatedAt: string
  children: ReactNode
}

export function LegalPageLayout({ eyebrow, title, description, updatedAt, children }: LegalPageLayoutProps) {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />
      <section className="px-6 pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-5xl">
          <Link href="/" className="mb-10 inline-flex text-sm font-medium text-zinc-500 transition-colors hover:text-sky-300">
            Volver a unostudio
          </Link>
          <p className="mb-4 text-sm font-medium uppercase text-sky-300">{eyebrow}</p>
          <h1 className="max-w-4xl font-display text-5xl font-bold leading-tight text-zinc-100 md:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-zinc-500 md:text-lg">{description}</p>
          <p className="mt-6 text-sm text-zinc-600">Última actualización: {updatedAt}</p>

          <div className="mt-12 grid gap-5">{children}</div>
        </div>
      </section>
      <FooterSection />
    </main>
  )
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-lg border border-zinc-800/80 bg-zinc-950/70 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] md:p-8">
      <h2 className="font-heading text-xl font-semibold text-zinc-100">{title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-400">{children}</div>
    </section>
  )
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
