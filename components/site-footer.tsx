import Image from "next/image"
import Link from "next/link"
import { Brand } from "@/components/brand"

export function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-content">
    <div className="footer-intro"><Link href="/" className="brand-link" aria-label="unostudio, inicio"><Brand /></Link><p>Diseño y tecnología.<br />Buenas ideas, hechas realidad.</p><Link href="/contacto" className="button footer-cta">Cuéntanos tu idea</Link></div>
    <nav className="footer-column" aria-label="Servicios del estudio"><h2>Qué hacemos</h2><Link href="/diseno-web">Diseño web</Link><Link href="/software-a-medida">Software a medida</Link><Link href="/ia">Inteligencia artificial</Link><Link href="/seo">SEO y visibilidad en IA</Link><Link href="/servicios#producto">Diseño de producto</Link><Link href="/servicios#landing">Landing pages</Link><Link href="/servicios#branding">Identidad de marca</Link></nav>
    <nav className="footer-column" aria-label="Explorar unostudio"><h2>unostudio</h2><Link href="/">Inicio</Link><Link href="/servicios">Servicios</Link><Link href="/proyectos">Proyectos</Link><Link href="/contacto">Contacto</Link></nav>
    <div className="footer-column footer-contact"><h2>Hablemos</h2><a href="mailto:hola@unostudio.org">hola@unostudio.org</a><a href="https://wa.me/34694222191?text=Hola%2C%20quiero%20contaros%20una%20idea%20para%20mi%20proyecto." target="_blank" rel="noopener noreferrer">WhatsApp</a><p>Cuéntanos qué tienes en mente.<br />Lo vemos contigo.</p></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} unostudio</span><div><Link href="/legal/aviso-legal">Aviso legal</Link><Link href="/legal/privacidad">Privacidad</Link><Link href="/legal/cookies">Cookies</Link></div></div>
  </div><div className="footer-landscape" aria-hidden="true"><Image src="/images/footer-coast.webp" alt="" fill sizes="100vw" quality={85} /></div></footer>
}
