import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProjectShowcase } from "@/components/project-showcase"
import { ScrollStatement } from "@/components/scroll-statement"
import { ScrollProcess } from "@/components/scroll-process"
import { SceneEntrance } from "@/components/scene-entrance"

export default function Home() {
  return <><SceneEntrance /><a className="skip-link" href="#contenido">Saltar al contenido</a><SiteHeader /><main id="contenido">
    <section className="home-hero" aria-labelledby="hero-title"><div className="container home-intro"><h1 id="hero-title">Webs, marcas y aplicaciones.<br /><span>Hechas para tu próxima idea.</span></h1><div className="hero-bottom"><p>Tú nos cuentas qué necesitas. Nosotros lo diseñamos,<br className="desktop-break" /> lo construimos y te lo explicamos fácil.</p><Link href="/contacto" className="button">Cuéntanos tu idea</Link></div></div><ProjectShowcase /></section>
    <ScrollStatement />
    <section className="paths-section container" aria-labelledby="paths-title"><div className="section-heading"><h2 id="paths-title">Lo que necesitas.<br /><span>En buenas manos.</span></h2><p>Diseño y desarrollo para tu negocio.<br />Sin complicarte con la tecnología.</p></div><div className="paths-grid">
      <Link href="/diseno-web" className="path-link"><h3>Tu próxima<br />web.</h3><p>Diseño web, landing pages y una identidad que se reconoce.</p><span className="path-action">Diseño web</span></Link>
      <Link href="/software-a-medida" className="path-link path-software"><h3>Tu forma<br />de trabajar.</h3><p>Aplicaciones y herramientas pensadas para lo que necesitas.</p><span className="path-action">Software a medida</span></Link>
      <Link href="/ia" className="path-link path-ai"><h3>Más tiempo<br />para lo tuyo.</h3><p>Inteligencia artificial para tareas concretas del día a día.</p><span className="path-action">IA para tu negocio</span></Link>
    </div><Link className="text-link all-services" href="/servicios">Conoce todos los servicios</Link></section>
    <section className="process-section container" aria-labelledby="process-title"><div className="section-heading"><h2 id="process-title">Así de sencillo.</h2><p>Un proceso que puedes seguir.<br />Un estudio con el que puedes hablar.</p></div><ScrollProcess /></section>
  </main><SiteFooter /></>
}
