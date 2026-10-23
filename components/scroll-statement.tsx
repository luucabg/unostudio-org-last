"use client"

import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"

export function ScrollStatement() {
  const target = useRef<HTMLHeadingElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target, offset: ["start .85", "end .35"] })
  const first = useTransform(scrollYProgress, [0, .4], ["#858585", "#202020"])
  const second = useTransform(scrollYProgress, [.15, .65], ["#858585", "#202020"])
  const third = useTransform(scrollYProgress, [.4, 1], ["#858585", "#202020"])

  return <section className="statement-section container"><h2 ref={target}><motion.span style={{ color: reduce ? "#202020" : first }}>Una web que te representa.</motion.span><motion.span style={{ color: reduce ? "#202020" : second }}>Una marca que se reconoce.</motion.span><motion.span style={{ color: reduce ? "#202020" : third }}>Herramientas que te lo ponen fácil.</motion.span></h2><p>Diseñamos y desarrollamos para que tu idea funcione.<br />Con un proceso cercano y explicaciones claras.</p></section>
}
