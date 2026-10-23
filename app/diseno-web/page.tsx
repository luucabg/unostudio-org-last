import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProjectCarousel } from "@/components/project-showcase"

export const metadata: Metadata = { title: "Diseño web", description: "Webs y landing pages que explican tu negocio con claridad. Diseño, desarrollo y especial cuidado del móvil.", alternates: { canonical: "/diseno-web" } }

export default function WebDesignPage() {
  return <><a className="skip-link" href="#contenido">Saltar al contenido</a><SiteHeader /><main id="contenido">
    <section className="container page-heading"><h1>Una web que habla<br /><span>bien de tu negocio.</span></h1><div className="page-heading-bottom"><p>Lo que haces, explicado con claridad.<br />Un diseño que te representa y funciona bien en el móvil.</p><Link className="button" href="/contacto">Hablemos de tu web</Link></div></section>
    <div className="container projects-page-gallery"><ProjectCarousel /></div>
    <section className="container service-benefits" aria-label="Qué cuidamos en tu web"><div><h2>Bonita de ver.<br /><span>Fácil de usar.</span></h2><p>Nos ocupamos del diseño y el desarrollo. Tú participas en las decisiones y ves cómo toma forma.</p></div><ul><li><h3>Se entiende a la primera.</h3><p>Ordenamos la información para que tus visitantes encuentren lo que buscan.</p></li><li><h3>Pensada para el móvil.</h3><p>Textos legibles, botones cómodos y una navegación sencilla.</p></li><li><h3>Con tu personalidad.</h3><p>Adaptamos cada detalle a tu marca. También podemos crear su identidad.</p></li></ul></section>
  </main><SiteFooter /></>
}
