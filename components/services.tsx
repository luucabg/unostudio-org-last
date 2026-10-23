"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { Plus, Check, ChevronDown, MousePointer2 } from "lucide-react"
import { services } from "@/lib/services"

export function Services() {
  const [selected, setSelected] = useState<number | null>(0)
  const reduce = useReducedMotion()
  const active = services[selected ?? 0]

  function finishNavigation(id: string) {
    if (window.location.hash !== `#servicio-${id}`) return
    const target = document.getElementById(`servicio-${id}`)
    if (target?.querySelector("button")?.getAttribute("aria-expanded") !== "true") return
    requestAnimationFrame(() => {
      target.querySelector("button")?.focus({ preventScroll: true })
      target.scrollIntoView({ block: "start", behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" })
    })
  }

  useEffect(() => {
    function selectFromHash() {
      const index = services.findIndex(service => `#servicio-${service.id}` === window.location.hash)
      if (index >= 0) setSelected(index)
    }
    selectFromHash()
    window.addEventListener("hashchange", selectFromHash)
    return () => window.removeEventListener("hashchange", selectFromHash)
  }, [])

  return (
    <div className="services-grid studio-services">
      <div className="services-list">
        {services.map((service, index) => (
          <div id={`servicio-${service.id}`} className={`service-row${selected === index ? " is-active" : ""}`} key={service.id}>
            <h3><button type="button" id={`service-${index}`} aria-expanded={selected === index} aria-controls={`service-panel-${index}`} onClick={() => setSelected(selected === index ? null : index)}><span>{service.title}{service.title !== service.tag ? <small aria-hidden="true">{service.tag}</small> : null}</span><span className="service-chevron"><ChevronDown size={18} aria-hidden="true" /></span></button></h3>
            <div id={`service-panel-${index}`} role="region" aria-labelledby={`service-${index}`}>
              <AnimatePresence initial={false}>{selected === index ? <motion.div className="service-description" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reduce ? 0 : 0.24, ease: [0.22, 1, 0.36, 1] }} onAnimationComplete={() => finishNavigation(service.id)}><p>{service.description}</p><a href="#contacto">Hablemos de tu proyecto</a></motion.div> : null}</AnimatePresence>
            </div>
          </div>
        ))}
      </div>
      <div className="service-artwork" aria-hidden="true">
        <div className="artwork-top"><span>unostudio</span><span>Hecho a tu medida.</span></div>
        <AnimatePresence initial={false} mode="wait">
          <motion.div key={active.id} className="artwork-content" initial={{ opacity: 0, y: reduce ? 0 : 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduce ? 0 : -8 }} transition={{ duration: reduce ? 0 : 0.26, ease: [0.22, 1, 0.36, 1] }}>
            <span className="artwork-title">{active.lines.map((line, i) => <span key={line}>{i > 0 ? <br /> : null}{line}</span>)}</span>
            <div className="service-visual">
              {active.kind === "web" ? <div className="service-web-sample"><span className="browser-dots"><i /><i /><i /></span><Image src="/projects/mocha-studio.png" alt="" width={1424} height={905} sizes="(max-width: 580px) 65vw, 330px" /></div> : null}
              {active.kind === "brand" ? <div className="brand-sample"><span>a<span>a</span></span><div className="brand-palette"><i /><i /><i /><i /></div></div> : null}
              {active.kind === "product" ? <div className="product-sample"><div className="product-sample-bar"><span>Tu próximo proyecto</span><Plus size={13} /></div><div className="product-sample-item"><span><Check size={13} /></span>Una buena idea</div><div className="product-sample-item"><span><Check size={13} /></span>Un diseño que encaja</div><div className="product-sample-footer"><i /><i /><i /><span>Todo listo para empezar.</span></div><span className="sample-cursor"><MousePointer2 size={19} /><span>unostudio</span></span></div> : null}
              {active.kind === "software" ? <div className="software-sample"><div className="software-hub">Tu negocio</div><div className="software-branches"><span>Tu equipo</span><span>Tus procesos</span><span>Tu herramienta</span></div><div className="software-caption">Conectado a tu forma de trabajar.</div></div> : null}
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="artwork-bottom"><span>{active.tag}</span><span>De idea a realidad</span></div>
      </div>
    </div>
  )
}
