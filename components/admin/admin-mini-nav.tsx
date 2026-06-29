"use client"

import Link from "next/link"

type AdminMiniNavProps = {
  current: "prospects" | "lead-finder"
}

const navItems = [
  { href: "/admin/prospects", label: "Prospects", value: "prospects" },
  { href: "/admin/lead-finder", label: "Lead Finder", value: "lead-finder" },
] as const

export function AdminMiniNav({ current }: AdminMiniNavProps) {
  return (
    <nav className="flex flex-wrap items-center gap-2 text-sm" aria-label="Admin">
      {navItems.map((item) => {
        const isActive = item.value === current

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`rounded-full border px-3 py-2 transition ${
              isActive
                ? "border-[#38b6ff]/50 bg-[#38b6ff]/10 text-sky-100"
                : "border-zinc-800 text-zinc-500 hover:border-[#38b6ff]/40 hover:text-zinc-100"
            }`}
          >
            {item.label}
          </Link>
        )
      })}
      <a
        href="/logout"
        className="rounded-full border border-zinc-900 px-3 py-2 text-zinc-600 transition hover:border-zinc-700 hover:text-zinc-200"
      >
        Salir
      </a>
    </nav>
  )
}
