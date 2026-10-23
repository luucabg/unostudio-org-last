import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AiExamples } from "@/components/ai-examples"

export const metadata: Metadata = { title: "IA para tu negocio", description: "Herramientas con inteligencia artificial para necesidades concretas. Descubre posibilidades para tu negocio, explicadas de forma sencilla.", alternates: { canonical: "/ia" } }

export default function AiPage() {
  return <><a className="skip-link" href="#contenido">Saltar al contenido</a><SiteHeader /><main id="contenido"><section className="container page-heading"><h1>Menos tareas repetidas.<br /><span>Más tiempo para tu negocio.</span></h1><div className="page-heading-bottom"><p>Creamos herramientas con inteligencia artificial para necesidades concretas.<br className="desktop-break" /> Partimos de lo que quieres resolver.</p><Link className="button" href="/contacto">Hablemos de tu idea</Link></div></section><section className="container ia-section" aria-labelledby="ia-examples-title"><div className="section-heading"><h2 id="ia-examples-title">La IA, en cosas<br /><span>que sí entiendes.</span></h2><p>Algunas posibilidades.<br />Tú eliges qué tendría sentido para ti.</p></div><AiExamples /></section><section className="container ai-principles"><h2>Primero tu necesidad.<br /><span>Después, la herramienta.</span></h2><div><p>No necesitas saber de tecnología para empezar. Nos cuentas qué te ocupa tiempo, qué te cuesta o qué te gustaría hacer.</p><p>Te ayudamos a definir una solución sencilla, el alcance y los siguientes pasos.</p></div></section></main><SiteFooter /></>
}
