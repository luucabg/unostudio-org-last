"use client"

import { useRef } from "react"
import type { MotionStyle } from "motion/react"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"

export function ScrollProcess() {
  const process = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: process, offset: ["start .85", "end .4"] })
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1])
  return <div className="process-track" ref={process}><ol className="process-list">
    <li><span>01</span><h3>Lo hablamos.</h3><p>Nos cuentas tu idea y definimos qué necesitas.</p></li>
    <li><span>02</span><h3>Le damos forma.</h3><p>Ves los avances y decidimos contigo.</p></li>
    <li><span>03</span><h3>Lo ponemos en marcha.</h3><p>Cuidamos los detalles hasta la entrega.</p></li>
  </ol><motion.span className="process-progress" aria-hidden="true" style={{ "--progress": reduce ? 1 : progress } as MotionStyle} /></div>
}
