"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useI18n } from "@/components/i18n-provider"
import { LanguageSwitcher } from "@/components/ui/language-switcher"

export function Navbar() {
  const { t } = useI18n()
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)

  const navLinks = [
    { href: "#features", label: t.nav.services },
    { href: "#impact", label: t.nav.process },
    { href: "#pricing", label: t.nav.plans },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const goingDown = currentScrollY > lastScrollY.current + 8
      const goingUp = currentScrollY < lastScrollY.current - 8

      if (currentScrollY < 48) {
        setHidden(false)
      } else if (goingDown) {
        setHidden(true)
      } else if (goingUp) {
        setHidden(false)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 p-3 transition-transform duration-300 ease-out ${
        hidden ? "-translate-y-24" : "translate-y-0"
      }`}
    >
      <nav className="page-load-nav max-w-4xl mx-auto flex items-center justify-between h-14 px-3 sm:px-7 rounded-full bg-zinc-950/82 border border-zinc-800/70 shadow-2xl shadow-blue-950/20 backdrop-blur-md">
        <Link href="/" className="flex items-center">
          <Image
            src="/logos/logo_nav.png"
            alt="unostudio"
            width={194}
            height={36}
            priority
            unoptimized
            className="h-5 w-auto sm:h-6"
          />
        </Link>
        <div className="hidden sm:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-[15px] rounded-full transition-colors text-zinc-400 hover:text-zinc-100"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <a
            href="mailto:hola@unostudio.org?subject=Reservar%20llamada%20con%20unostudio"
            className="whitespace-nowrap px-3 py-2 text-[13px] rounded-full bg-zinc-100 text-zinc-900 font-medium hover:bg-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 transition-colors sm:px-5 sm:text-[15px]"
          >
            {t.nav.bookCall}
          </a>
        </div>
      </nav>
    </header>
  )
}
