import { pageMetadata } from "@/lib/seo"
import { PageStructuredData } from "@/components/structured-data"
import { projects } from "@/lib/projects"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProjectCarousel } from "@/components/project-showcase"

export const metadata = pageMetadata("projects")

export default function ProjectsPage() {
  return <><PageStructuredData pageKey="projects" /><a className="skip-link" href="#contenido">Saltar al contenido</a><SiteHeader /><main id="contenido"><section className="container page-heading"><h1>Proyectos con personalidad.<br /><span>Échales un vistazo.</span></h1><p>Webs creadas por unostudio para negocios, productos e ideas propias.</p></section><div className="container projects-page-gallery"><ProjectCarousel /></div><section className="container project-directory" aria-labelledby="project-links"><h2 id="project-links">Visita los proyectos.</h2><ul>{projects.filter(project => project.url).map(project => <li key={project.domain}><a href={project.url!} target="_blank" rel="noopener noreferrer"><span>{project.domain}</span><span>{project.category}</span></a></li>)}</ul></section></main><SiteFooter /></>
}
