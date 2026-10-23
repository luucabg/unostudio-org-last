"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Brand } from "@/components/brand"

const links = [
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Cómo trabajamos", href: "/#proceso" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const media = window.matchMedia("(min-width: 800px)")
    const closeOnResize = () => { if (media.matches) setOpen(false) }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); menuButton.current?.focus() }
    }
    media.addEventListener("change", closeOnResize)
    if (open) document.addEventListener("keydown", closeOnEscape)
    return () => {
      media.removeEventListener("change", closeOnResize)
      document.removeEventListener("keydown", closeOnEscape)
    }
  }, [open])

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand-link" aria-label="unostudio, inicio" onClick={() => setOpen(false)}><Brand /></Link>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <div className="header-actions">
          <a href="/#contacto" className="button button-small button-dark" onClick={() => setOpen(false)}>Hablemos <ArrowUpRight size={15} aria-hidden="true" /></a>
          <button ref={menuButton} type="button" className={`menu-toggle${open ? " is-open" : ""}`} aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}><span /><span /></button>
        </div>
      </div>
      {open ? <nav id="mobile-menu" className="mobile-nav" aria-label="Navegación móvil">{links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}<ArrowUpRight size={18} aria-hidden="true" /></a>)}</nav> : null}
    </header>
  )
}
