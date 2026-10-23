import { pageMetadata } from "@/lib/seo"
import { PageStructuredData } from "@/components/structured-data"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProjectCarousel } from "@/components/project-showcase"

export const metadata = pageMetadata("web")

export default function WebDesignPage() {
  return <><PageStructuredData pageKey="web" /><a className="skip-link" href="#contenido">Saltar al contenido</a><SiteHeader /><main id="contenido">
    <section className="container page-heading"><h1>Diseño web que habla<br /><span>bien de tu negocio.</span></h1><div className="page-heading-bottom"><p>Webs y landing pages que explican lo que haces con claridad.<br />Un diseño que te representa y funciona bien en el móvil.</p><Link className="button" href="/contacto">Hablemos de tu web</Link></div></section>
    <div className="container projects-page-gallery"><ProjectCarousel /></div>
    <section className="container service-benefits" aria-label="Qué cuidamos en tu web"><div><h2>Bonita de ver.<br /><span>Fácil de usar.</span></h2><p>Nos ocupamos del diseño y el desarrollo. Tú participas en las decisiones y ves cómo toma forma.</p></div><ul><li><h3>Se entiende a la primera.</h3><p>Ordenamos la información para que tus visitantes encuentren lo que buscan.</p></li><li><h3>Pensada para el móvil.</h3><p>Textos legibles, botones cómodos y una navegación sencilla.</p></li><li><h3>Con tu personalidad.</h3><p>Adaptamos cada detalle a tu marca. También podemos crear su identidad.</p></li><li><h3>Con la seguridad en mente.</h3><p>Cuidamos accesos, datos y dependencias según las necesidades de tu web.</p></li><li><h3>Con una buena base de SEO.</h3><p>Cuidamos la velocidad, los títulos y la estructura desde el desarrollo. Para trabajar más a fondo la visibilidad, conoce nuestro <Link className="inline-link" href="/seo">servicio de SEO</Link>.</p></li></ul></section>
  </main><SiteFooter /></>
}
