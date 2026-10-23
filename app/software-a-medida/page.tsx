import { pageMetadata } from "@/lib/seo"
import { PageStructuredData } from "@/components/structured-data"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollProcess } from "@/components/scroll-process"

export const metadata = pageMetadata("software")

export default function SoftwarePage() {
  return <><PageStructuredData pageKey="software" /><a className="skip-link" href="#contenido">Saltar al contenido</a><SiteHeader /><main id="contenido">
    <section className="container page-heading"><h1>Software a medida.<br /><span>A tu forma de trabajar.</span></h1><div className="page-heading-bottom"><p>Aplicaciones pensadas para tu equipo y tus clientes.<br />Nos cuentas cómo trabajas y qué te gustaría hacer más fácil.</p><Link className="button" href="/contacto">Cuéntanos qué necesitas</Link></div></section>
    <section className="container software-possibilities" aria-labelledby="software-options"><div className="section-heading"><h2 id="software-options">Lo cotidiano,<br /><span>un poco más sencillo.</span></h2><p>Algunas cosas que una herramienta<br />a medida puede ayudarte a resolver.</p></div><div className="software-grid"><article><span>01</span><h3>Organizar tu equipo.</h3><p>Tareas, información y documentos en un lugar pensado para vosotros.</p></article><article><span>02</span><h3>Gestionar solicitudes.</h3><p>Una forma clara de recibirlas, revisarlas y seguir su estado.</p></article><article><span>03</span><h3>Atender a tus clientes.</h3><p>Un espacio donde puedan consultar lo que necesitan de tu negocio.</p></article></div></section>
    <section className="container service-benefits"><div><h2>Primero lo entendemos.<br /><span>Después lo construimos.</span></h2><p>No necesitas llegar con una lista técnica. Definimos el alcance contigo antes de empezar.</p></div><ul><li><h3>Una necesidad concreta.</h3><p>Identificamos qué quieres resolver y para quién.</p></li><li><h3>Un diseño que puedes ver.</h3><p>Revisamos las pantallas y los pasos antes de desarrollarlos.</p></li><li><h3>Una herramienta fácil de usar.</h3><p>Cuidamos que cada persona sepa dónde está y qué puede hacer.</p></li><li><h3>Seguridad desde el desarrollo.</h3><p>Revisamos quién puede acceder y cómo se protegen los datos en cada proyecto.</p></li></ul></section>
    <section className="container process-section" aria-labelledby="software-process"><div className="section-heading"><h2 id="software-process">Lo hacemos contigo.</h2><p>Conversación, diseño y desarrollo.<br />Sabes qué está pasando en cada paso.</p></div><ScrollProcess /></section>
  </main><SiteFooter /></>
}
