"use client"

import { useEffect, useRef, useState } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/arc/button/button"

export function EmailButton() {
  const [state, setState] = useState<"idle" | "copied" | "error">("idle")
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current) }, [])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("hola@unostudio.org")
      setState("copied")
      if (timer.current) clearTimeout(timer.current)
      timer.current = setTimeout(() => setState("idle"), 2600)
    } catch { setState("error") }
  }

  return (
    <div className="copy-email">
      <Button variant="secondary" size="lg" onClick={copyEmail} aria-label="Copiar hola@unostudio.org">{state === "copied" ? <><Check size={15} aria-hidden="true" /> Correo copiado</> : <><Copy size={15} aria-hidden="true" /> Copiar correo</>}</Button>
      <span className={state === "error" ? "copy-status" : "sr-only"} role="status">{state === "copied" ? "Correo copiado al portapapeles." : state === "error" ? "Puedes seleccionar el correo o pulsarlo para escribirnos." : ""}</span>
    </div>
  )
}
