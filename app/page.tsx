import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProjectShowcase } from "@/components/project-showcase"
import { ScrollStatement } from "@/components/scroll-statement"
import { ScrollProcess } from "@/components/scroll-process"
import { SceneEntrance } from "@/components/scene-entrance"
import { PageStructuredData } from "@/components/structured-data"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata("home")

export default function Home() {
  return <><PageStructuredData pageKey="home" /><SceneEntrance /><a className="skip-link" href="#contenido">Saltar al contenido</a><SiteHeader /><main id="contenido">
    <section className="home-hero" aria-labelledby="hero-title"><div className="container home-intro"><h1 id="hero-title">Diseño web, marcas y aplicaciones.<br /><span>Hechos para tu próxima idea.</span></h1><div className="hero-bottom"><p>En unostudio damos forma a tu negocio con diseño y tecnología.<br className="desktop-break" /> Tú nos cuentas la idea. Nosotros te lo ponemos fácil.</p><Link href="/contacto" className="button">Cuéntanos tu idea</Link></div></div><ProjectShowcase /></section>
    <ScrollStatement />
    <section className="paths-section container" aria-labelledby="paths-title"><div className="section-heading"><h2 id="paths-title">Lo que necesitas.<br /><span>En buenas manos.</span></h2><p>Diseño, desarrollo y seguridad para tu negocio.<br />Sin complicarte con la tecnología.</p></div><div className="paths-grid">
      <Link href="/diseno-web" className="path-link"><h3>Tu próxima<br />web.</h3><p>Diseño web, landing pages y una identidad que se reconoce.</p><span className="path-action">Diseño web</span></Link>
      <Link href="/software-a-medida" className="path-link path-software"><h3>Tu forma<br />de trabajar.</h3><p>Aplicaciones y herramientas pensadas para lo que necesitas.</p><span className="path-action">Software a medida</span></Link>
      <Link href="/ia" className="path-link path-ai"><h3>Más tiempo<br />para lo tuyo.</h3><p>Inteligencia artificial para tareas concretas del día a día.</p><span className="path-action">IA para tu negocio</span></Link>
    </div><Link className="text-link all-services" href="/servicios">Conoce todos los servicios</Link></section>
    <section className="container search-section" aria-labelledby="search-title"><h2 id="search-title">Que te encuentren<br /><span>también cuenta.</span></h2><div><p>SEO para Google y para búsquedas con IA. Cuidamos la estructura, la velocidad y el contenido para que tu negocio sea más fácil de encontrar y entender.</p><Link href="/seo" className="button button-outline">Conoce nuestro SEO</Link></div></section>
    <section className="process-section container" aria-labelledby="process-title"><div className="section-heading"><h2 id="process-title">Así de sencillo.</h2><p>Un proceso que puedes seguir.<br />Un estudio con el que puedes hablar.</p></div><ScrollProcess /></section>
  </main><SiteFooter /></>
}
