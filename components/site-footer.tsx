import Link from "next/link"
import { Brand } from "@/components/brand"

export function SiteFooter() {
  return (
    <footer className="site-footer"><div className="container">
      <div className="footer-top"><a href="/#inicio" className="brand-link" aria-label="unostudio, volver al inicio"><Brand /></a><p>Ideas claras. Diseño cuidado.</p><a className="footer-email" href="mailto:hola@unostudio.org">hola@unostudio.org</a></div>
      <div className="footer-signature" aria-hidden="true"><Brand large /></div>
      <div className="footer-bottom"><p>© {new Date().getFullYear()} unostudio</p><div><Link href="/legal/aviso-legal">Aviso legal</Link><Link href="/legal/privacidad">Privacidad</Link><Link href="/legal/cookies">Cookies</Link></div></div>
    </div></footer>
  )
}
