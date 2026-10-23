import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProjectCarousel } from "@/components/project-showcase"

export const metadata: Metadata = { title: "Proyectos", description: "Webs creadas por unostudio. Explora sus capturas actuales y visita las páginas en directo.", alternates: { canonical: "/proyectos" } }

export default function ProjectsPage() {
  return <><a className="skip-link" href="#contenido">Saltar al contenido</a><SiteHeader /><main id="contenido"><section className="container page-heading"><h1>El trabajo habla.<br /><span>Échale un vistazo.</span></h1><p>Webs para negocios con personalidad propia.</p></section><div className="container projects-page-gallery"><ProjectCarousel /></div></main><SiteFooter /></>
}
