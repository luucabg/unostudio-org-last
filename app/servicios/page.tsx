import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { services } from "@/lib/services"

export const metadata: Metadata = { title: "Servicios", description: "Diseño de producto, webs, landing pages, marcas, inteligencia artificial y software a medida. Te lo ponemos fácil.", alternates: { canonical: "/servicios" } }

export default function ServicesPage() {
  return <><a className="skip-link" href="#contenido">Saltar al contenido</a><SiteHeader /><main id="contenido">
    <section className="container page-heading"><h1>Tu idea necesita forma.<br /><span>Nosotros te ayudamos.</span></h1><p>Diseño y desarrollo en un mismo estudio.<br />Elige por dónde empezar. El resto, lo hablamos.</p></section>
    <section className="container services-catalog" aria-label="Nuestros servicios">{services.map(service => <details className="service-detail" key={service.id} id={service.id} name="servicios"><summary><span><span className="service-name">{service.title}</span>{service.name !== service.title ? <small>{service.name}</small> : null}</span><span className="service-summary">{service.description}</span><span className="detail-label"><span className="when-closed">Ver detalles</span><span className="when-open">Cerrar</span></span></summary><div className="service-content"><p>{service.detail}</p><Link href={service.id === "ia" ? "/ia" : service.id === "software" ? "/software-a-medida" : service.id === "web" ? "/diseno-web" : "/contacto"}>Hablemos de lo que necesitas</Link></div></details>)}</section>
    <section className="container service-help"><h2>¿No sabes qué necesitas?</h2><p>Empieza por contarnos qué quieres conseguir. Te ayudamos a decidir el siguiente paso.</p><Link href="/contacto" className="text-link">Cuéntanos tu idea</Link></section>
  </main><SiteFooter /></>
}
