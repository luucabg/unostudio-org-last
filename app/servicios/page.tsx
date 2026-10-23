import { pageMetadata } from "@/lib/seo"
import { PageStructuredData } from "@/components/structured-data"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { services } from "@/lib/services"

export const metadata = pageMetadata("services")

export default function ServicesPage() {
  return <><PageStructuredData pageKey="services" /><a className="skip-link" href="#contenido">Saltar al contenido</a><SiteHeader /><main id="contenido">
    <section className="container page-heading"><h1>Diseño, desarrollo y SEO.<br /><span>Para dar forma a tu idea.</span></h1><p>Webs, marcas, aplicaciones e inteligencia artificial.<br />Elige por dónde empezar. El resto, lo hablamos.</p></section>
    <section className="container services-catalog" aria-label="Nuestros servicios">{services.map(service => <details className="service-detail" key={service.id} id={service.id} name="servicios"><summary><span><span className="service-name">{service.title}</span>{service.name !== service.title ? <small>{service.name}</small> : null}</span><span className="service-summary">{service.description}</span><span className="detail-label"><span className="when-closed">Ver detalles</span><span className="when-open">Cerrar</span></span></summary><div className="service-content"><p>{service.detail}</p><Link href={service.href.startsWith("/servicios#") ? "/contacto" : service.href}>{service.href.startsWith("/servicios#") ? "Hablemos de lo que necesitas" : "Conoce el servicio"}</Link></div></details>)}</section>
    <section className="container service-help"><h2>¿No sabes qué necesitas?</h2><p>Empieza por contarnos qué quieres conseguir. Te ayudamos a decidir el siguiente paso.</p><Link href="/contacto" className="text-link">Cuéntanos tu idea</Link></section>
  </main><SiteFooter /></>
}
