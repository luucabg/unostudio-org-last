"use client"

import { useLayoutEffect, useRef, useState } from "react"
import { Brand } from "@/components/brand"

let entrancePlayed = false

export function SceneEntrance() {
  const [visible, setVisible] = useState(true)
  const eligible = useRef<boolean | undefined>(undefined)

  useLayoutEffect(() => {
    if (!visible) return
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (eligible.current === undefined) {
      eligible.current = !entrancePlayed && !preference.matches && window.scrollY < 8 && !window.location.hash
      entrancePlayed = true
    }
    if (!eligible.current) { setVisible(false); return }

    const dismiss = () => setVisible(false)
    const events = ["pointerdown", "keydown", "wheel", "touchstart", "pagehide"] as const
    const options = { capture: true, passive: true }
    events.forEach(event => window.addEventListener(event, dismiss, options))
    preference.addEventListener("change", dismiss)
    const timeout = window.setTimeout(dismiss, 1100)
    return () => {
      events.forEach(event => window.removeEventListener(event, dismiss, options))
      preference.removeEventListener("change", dismiss)
      window.clearTimeout(timeout)
    }
  }, [visible])

  if (!visible) return null
  return <div className="scene-entrance" aria-hidden="true" onAnimationEnd={event => { if (event.target === event.currentTarget) setVisible(false) }}>
    <div className="scene-panel scene-panel-left" />
    <div className="scene-panel scene-panel-right" />
    <div className="scene-wordmark"><Brand /></div>
  </div>
}
