"use client"

import { useRef, useState, type PointerEvent } from "react"
import Image from "next/image"
import { AnimatePresence, motion, MotionConfig, useReducedMotion, useSpring } from "motion/react"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { projects } from "@/lib/projects"

export function ProjectShowcase() {
  const [current, setCurrent] = useState(0)
  const reduce = useReducedMotion()
  const bounds = useRef<DOMRect | null>(null)
  const tiltX = useSpring(0, { stiffness: 130, damping: 20 })
  const tiltY = useSpring(0, { stiffness: 130, damping: 20 })
  const project = projects[current]
  const next = projects[(current + 1) % projects.length]
  const change = (step: number) => setCurrent(value => (value + step + projects.length) % projects.length)

  function move(event: PointerEvent<HTMLDivElement>) {
    if (reduce || event.pointerType !== "mouse") return
    const rect = bounds.current
    if (!rect) return
    tiltX.set(-((event.clientY - rect.top) / rect.height - 0.5) * 9)
    tiltY.set(((event.clientX - rect.left) / rect.width - 0.5) * 12)
  }

  function reset() { tiltX.set(0); tiltY.set(0) }

  return (
    <MotionConfig reducedMotion="user">
      <div className="studio-showcase" role="region" aria-label="Una muestra de nuestros proyectos" aria-roledescription="carrusel" onKeyDown={event => {
        if (event.key === "ArrowLeft") { event.preventDefault(); change(-1) }
        if (event.key === "ArrowRight") { event.preventDefault(); change(1) }
      }}>
        <div className="workbench" onPointerEnter={event => { bounds.current = event.currentTarget.getBoundingClientRect() }} onPointerMove={move} onPointerLeave={reset} onPointerCancel={reset}>
          <motion.div className="workbench-plane" style={{ rotateX: reduce ? 0 : tiltX, rotateY: reduce ? 0 : tiltY }}>
            <motion.div className="workbench-back" aria-hidden="true" initial={{ opacity: 1, x: reduce ? 0 : -35, rotate: reduce ? 8 : 0 }} animate={{ x: 0, rotate: 8 }} transition={{ duration: reduce ? 0 : 0.85, ease: [0.22, 1, 0.36, 1] }}>
              <Image src={next.image} alt="" width={1424} height={905} sizes="(max-width: 799px) 55vw, 370px" />
            </motion.div>
            <AnimatePresence initial={false} mode="popLayout">
              <motion.a key={project.name} className="workbench-browser" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visitar la web de ${project.name} en una pestaña nueva`} initial={{ opacity: 0, x: reduce ? 0 : 35, rotate: reduce ? 0 : -2, scale: reduce ? 1 : 0.94 }} animate={{ opacity: 1, x: 0, rotate: -7, scale: 1 }} exit={{ opacity: 0, x: reduce ? 0 : -35, rotate: reduce ? 0 : -11 }} transition={{ duration: reduce ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}>
                <div className="workbench-browser-bar" aria-hidden="true"><span className="browser-dots"><i /><i /><i /></span><span>{project.domain}</span><ExternalLink size={11} /></div>
                <Image src={project.image} alt={`Vista del diseño web de ${project.name}`} width={1424} height={905} sizes="(max-width: 580px) 77vw, (max-width: 1000px) 68vw, 470px" preload={current === 0} />
                <span className="workbench-visit">Ver proyecto <ExternalLink size={13} /></span>
              </motion.a>
            </AnimatePresence>
          </motion.div>
        </div>
        <div className="studio-showcase-controls">
          <div className="studio-project-picker" aria-label="Elegir proyecto">{projects.map((item, index) => <button key={item.name} type="button" aria-label={`Mostrar ${item.name}`} aria-pressed={index === current} onClick={() => setCurrent(index)}><span /></button>)}</div>
          <span className="studio-project-name" aria-live="polite" aria-atomic="true">{project.name}<span className="sr-only">, proyecto {current + 1} de {projects.length}</span></span>
          <div className="carousel-actions"><button type="button" className="icon-button" aria-label="Proyecto anterior" onClick={() => change(-1)}><ChevronLeft size={18} /></button><button type="button" className="icon-button" aria-label="Proyecto siguiente" onClick={() => change(1)}><ChevronRight size={18} /></button></div>
        </div>
      </div>
    </MotionConfig>
  )
}
