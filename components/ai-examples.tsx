"use client"

import { useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { Check, MessageCircle, FileText, FolderOpen } from "lucide-react"
import { Button } from "@/components/arc/button/button"

const examples = [
  { title: "Responder preguntas", icon: MessageCircle, before: "Buscar la misma respuesta entre correos y documentos.", after: "Un asistente que encuentra la información y la explica con claridad.", note: "Para preguntas habituales de tu equipo o tus clientes." },
  { title: "Ordenar información", icon: FolderOpen, before: "Revisar y clasificar información a mano, una y otra vez.", after: "Una herramienta que ayuda a organizarla para encontrar lo que necesitas.", note: "Para documentos, consultas o información de tu negocio." },
  { title: "Preparar textos", icon: FileText, before: "Empezar cada borrador desde una página en blanco.", after: "Una primera propuesta que puedes revisar, ajustar y hacer tuya.", note: "Para respuestas, resúmenes y textos del día a día." },
]

export function AiExamples() {
  const [selected, setSelected] = useState(0)
  const reduce = useReducedMotion()
  const example = examples[selected]
  return <div className="ai-examples"><div className="example-tabs" role="group" aria-label="Ejemplos de uso de IA">{examples.map((item, i) => { const Icon = item.icon; return <Button key={item.title} type="button" variant={selected === i ? "primary" : "secondary"} size="lg" aria-pressed={selected === i} onClick={() => setSelected(i)}><Icon size={17} aria-hidden="true" />{item.title}</Button> })}</div><div className="example-panel" aria-live="polite" aria-atomic="true"><AnimatePresence mode="wait" initial={false}><motion.div key={selected} initial={{ opacity: 0, y: reduce ? 0 : 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: reduce ? 0 : .2 }}><div className="example-comparison"><div><span className="example-label">Hoy</span><p>{example.before}</p></div><div><span className="example-label"><Check size={15} aria-hidden="true" />Con una herramienta a medida</span><p>{example.after}</p></div></div><p className="example-note">{example.note}</p></motion.div></AnimatePresence></div><p className="example-disclaimer">Son ejemplos de lo que podemos construir. Cada proyecto se define contigo.</p></div>
}
