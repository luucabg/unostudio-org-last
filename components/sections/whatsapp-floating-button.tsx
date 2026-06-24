"use client"

import { MessageCircle } from "lucide-react"

const whatsappHref = "https://wa.me/34694222191?text=Hola%2C%20quiero%20una%20demo%20para%20mi%20negocio"

export function WhatsappFloatingButton() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Hablar por WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-sky-200/30 bg-zinc-100 text-zinc-950 shadow-[0_18px_54px_-22px_rgba(125,211,252,0.75)] transition hover:bg-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
    >
      <MessageCircle className="h-5 w-5" strokeWidth={1.9} />
    </a>
  )
}
