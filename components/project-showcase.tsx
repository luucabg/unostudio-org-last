"use client"

import { useEffect, useId, useRef, useState } from "react"
import Image from "next/image"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import { Button } from "@/components/arc/button/button"
import { projects } from "@/lib/projects"

export function ProjectCarousel() {
  const root = useRef<HTMLElement>(null)
  const rail = useRef<HTMLDivElement>(null)
  const group = useRef<HTMLDivElement>(null)
  const groupWidth = useRef(0)
  const drag = useRef<{ id: number; x: number; scroll: number } | null>(null)
  const moved = useRef(false)
  const loaded = useRef(new Set<number>())
  const lightbox = useRef<HTMLDialogElement>(null)
  const titleId = useId()
  const [ready, setReady] = useState(false)
  const [dragging, setDragging] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [visible, setVisible] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [expanded, setExpanded] = useState<number | null>(null)
  const [reduce, setReduce] = useState(true)
  const selected = expanded === null ? null : projects[expanded]
  const stopped = !ready || dragging || hovered || focused || !visible || hidden || expanded !== null || reduce

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: .15 })
    if (root.current) observer.observe(root.current)
    const resize = new ResizeObserver(() => { groupWidth.current = group.current?.getBoundingClientRect().width ?? 0 })
    if (group.current) resize.observe(group.current)
    const visibility = () => { setHidden(document.hidden); if (document.hidden) stopDragging() }
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
    const motionPreference = () => setReduce(preference.matches)
    motionPreference()
    preference.addEventListener("change", motionPreference)
    document.addEventListener("visibilitychange", visibility)
    return () => { observer.disconnect(); resize.disconnect(); document.removeEventListener("visibilitychange", visibility); preference.removeEventListener("change", motionPreference) }
  }, [])

  useEffect(() => {
    if (stopped || !rail.current) return
    const viewport = rail.current
    let frame = 0, previous = 0, position = viewport.scrollLeft
    const move = (time: number) => {
      if (previous && groupWidth.current) {
        position = (position + Math.min(time - previous, 64) * .035) % groupWidth.current
        viewport.scrollLeft = position
      }
      previous = time
      frame = requestAnimationFrame(move)
    }
    frame = requestAnimationFrame(move)
    return () => cancelAnimationFrame(frame)
  }, [stopped])

  useEffect(() => {
    if (expanded === null) return
    const dialog = lightbox.current
    dialog?.showModal()
    return () => dialog?.close()
  }, [expanded])

  function stopDragging() {
    const active = drag.current
    if (active && rail.current?.hasPointerCapture(active.id)) rail.current.releasePointerCapture(active.id)
    drag.current = null
    setDragging(false)
  }

  return <section ref={root} className="portfolio-carousel" aria-label="Capturas de las webs de unostudio" onPointerEnter={event => { if (event.pointerType === "mouse") setHovered(true) }} onPointerLeave={event => { if (event.pointerType === "mouse") setHovered(false) }} onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false) }}>
    <div className={`marquee-window${dragging ? " is-dragging" : ""}`} ref={rail} onPointerDown={event => {
      moved.current = false
      if (event.pointerType !== "mouse") { setDragging(true); return }
      if (event.button !== 0) return
      event.preventDefault()
      drag.current = { id: event.pointerId, x: event.clientX, scroll: event.currentTarget.scrollLeft }
    }} onPointerMove={event => {
      const active = drag.current
      if (!active || !groupWidth.current) return
      const distance = event.clientX - active.x
      if (!moved.current && Math.abs(distance) < 5) return
      moved.current = true
      setDragging(true)
      if (!event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.setPointerCapture(event.pointerId)
      let next = active.scroll - distance
      if (next < 0) { next += groupWidth.current; active.scroll += groupWidth.current }
      if (next >= groupWidth.current) { next -= groupWidth.current; active.scroll -= groupWidth.current }
      event.currentTarget.scrollLeft = next
    }} onPointerUp={stopDragging} onPointerCancel={event => { if (event.pointerType === "mouse") stopDragging() }} onLostPointerCapture={event => { if (event.pointerType === "mouse") stopDragging() }} onTouchEnd={stopDragging} onTouchCancel={stopDragging} onClickCapture={event => { if (moved.current) { event.preventDefault(); event.stopPropagation(); moved.current = false } }}>
      <div className="marquee-track">{[false, true].map(duplicate => <div className="marquee-group" key={String(duplicate)} ref={duplicate ? undefined : group} aria-hidden={duplicate || undefined}>{projects.map((item, i) => <button key={item.image} type="button" className="project-card" tabIndex={duplicate ? -1 : 0} onClick={event => { if (!duplicate) event.currentTarget.focus({preventScroll:true}); setExpanded(i) }} aria-label={`Ampliar captura de ${item.domain}`}>
        <Image src={item.image} alt={`Captura ${item.url ? "actual" : "de la versión anterior"} de ${item.name}`} width={1600} height={1000} sizes="(max-width: 580px) 280px, (max-width: 999px) 360px, 460px" preload={!duplicate && i < 3} loading={!duplicate && i >= 3 ? "eager" : undefined} draggable={false} onLoad={!duplicate ? () => { loaded.current.add(i); if (loaded.current.size === projects.length) setReady(true) } : undefined} quality={85} />
        <span>{item.domain}</span>
      </button>)}</div>)}</div>
    </div>
    <dialog ref={lightbox} className="project-lightbox" aria-labelledby={titleId} onClose={() => setExpanded(null)} onClick={event => { if (event.target === event.currentTarget) lightbox.current?.close() }}>
      {selected ? <div className="lightbox-content"><div className="lightbox-header"><div><h2 id={titleId}>{selected.name}</h2><p>{selected.category}</p></div><div>{selected.url ? <a className="button button-outline" href={selected.url} target="_blank" rel="noopener noreferrer">Visitar web</a> : null}<Button autoFocus variant="secondary" size="sm" onClick={() => lightbox.current?.close()}>Cerrar</Button></div></div><div className="lightbox-image"><Image src={selected.image} alt={`Captura ampliada de ${selected.name}`} width={1600} height={1000} sizes="1600px" quality={95} loading="eager" /></div><p className="lightbox-hint">En móvil puedes deslizar la imagen para ver los detalles.</p></div> : null}
    </dialog>
  </section>
}

export function ProjectShowcase() {
  const stage = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: stage, offset: ["start end", "end start"] })
  const landscapeY = useTransform(scrollYProgress, [0, 1], [-25, 35])
  return <div className="project-stage" ref={stage}>
    <motion.div className="landscape" aria-hidden="true" style={{ y: reduce ? 0 : landscapeY }}><Image src="/images/mediterranean-cove.webp" alt="" fill sizes="(max-width: 580px) 160vw, 100vw" loading="eager" fetchPriority="high" /></motion.div>
    <div className="landscape-wash" aria-hidden="true" />
    <div className="project-flow"><ProjectCarousel /></div>
    <div className="project-fade" aria-hidden="true" />
  </div>
}
