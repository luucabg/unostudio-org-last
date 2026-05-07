"use client"

import Link from "next/link"
import { useI18n } from "@/components/i18n-provider"

export function FooterSection() {
  const { t } = useI18n()

  return (
    <footer className="px-6 py-16 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-display text-xl font-semibold text-zinc-100">
              unostudio
            </Link>
            <p className="mt-4 text-sm text-zinc-500 max-w-xs">{t.footer.description}</p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-zinc-100 mb-4">{t.footer.servicesTitle}</h4>
            <ul className="space-y-3">
              {t.footer.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-zinc-100 mb-4">{t.footer.agencyTitle}</h4>
            <ul className="space-y-3">
              {t.footer.agency.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-zinc-100 mb-4">{t.footer.contactTitle}</h4>
            <ul className="space-y-3">
              {t.footer.contact.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-600">© {new Date().getFullYear()} unostudio. {t.footer.rights}</p>
          <p className="text-sm text-zinc-600">unostudio.org</p>
        </div>
      </div>
    </footer>
  )
}
