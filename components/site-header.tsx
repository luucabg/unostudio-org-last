"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { Button } from "@/components/arc/button/button"
import { Brand } from "@/components/brand"

const links = [{ label: "Diseño web", href: "/diseno-web" }, { label: "Software a medida", href: "/software-a-medida" }, { label: "IA", href: "/ia" }, { label: "SEO", href: "/seo" }, { label: "Servicios", href: "/servicios" }]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const reduce = useReducedMotion()
  const trigger = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1000px)")
    const resize = () => { if (media.matches) setOpen(false) }
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); trigger.current?.focus() } }
    media.addEventListener("change", resize)
    if (open) document.addEventListener("keydown", escape)
    return () => { media.removeEventListener("change", resize); document.removeEventListener("keydown", escape) }
  }, [open])

  return <header className="site-header">
    <div className="container header-inner">
      <Link href="/" className="brand-link" aria-label="unostudio, inicio" onClick={() => setOpen(false)}><Brand /></Link>
      <nav className="desktop-nav" aria-label="Navegación principal">{links.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined}>{link.label}{pathname === link.href ? <motion.span className="nav-current" layoutId="nav-current" transition={{ duration: reduce ? 0 : .25 }} /> : null}</Link>)}</nav>
      <div className="header-actions">
        <Link href="/contacto" className="button button-small" onClick={() => setOpen(false)}>Hablemos</Link>
        <Button ref={trigger} type="button" variant="secondary" size="sm" className="menu-toggle" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}</Button>
      </div>
    </div>
    {open ? <nav id="mobile-menu" className="mobile-nav container" aria-label="Navegación móvil">{links.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined} onClick={() => setOpen(false)}>{link.label}</Link>)}</nav> : null}
  </header>
}
