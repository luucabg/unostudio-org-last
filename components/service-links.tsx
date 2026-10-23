"use client"

import { AppWindow, LayoutTemplate, MousePointer2, PanelsTopLeft, PenTool, Sparkles } from "lucide-react"
import { Button } from "@/components/arc/button/button"
import { services } from "@/lib/services"

const icons = { producto: MousePointer2, web: PanelsTopLeft, landing: LayoutTemplate, branding: PenTool, ia: Sparkles, software: AppWindow }

export function ServiceLinks() {
  function showService(id: string) {
    const target = document.getElementById(`servicio-${id}`)
    const alreadyOpen = target?.querySelector("button")?.getAttribute("aria-expanded") === "true"
    window.location.hash = `servicio-${id}`
    if (!alreadyOpen) return
    requestAnimationFrame(() => {
      target?.querySelector("button")?.focus({ preventScroll: true })
      target?.scrollIntoView({ block: "start", behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" })
    })
  }

  return <div className="hero-services" role="group" aria-label="Lo que hacemos">{services.map(service => {
    const Icon = icons[service.id]
    return <Button key={service.id} type="button" variant="secondary" size="lg" className="service-pill" onClick={() => showService(service.id)}><span className="service-pill-icon"><Icon size={17} strokeWidth={1.5} aria-hidden="true" /></span><span className="service-name">{service.title}</span></Button>
  })}</div>
}
