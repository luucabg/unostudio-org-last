import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageStructuredData } from "@/components/structured-data"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata("seo")

const questions = [
  { title: "¿Qué es el SEO?", answer: "Es el trabajo de mejorar una web para que los buscadores puedan encontrarla, entenderla y mostrarla cuando resulte útil. Incluye cómo funciona la página y cómo explica lo que ofrece tu negocio." },
  { title: "¿También sirve para ChatGPT y Gemini?", answer: "Cuando estos asistentes consultan la web, necesitan fuentes accesibles y claras. Trabajamos esa base: servicios bien explicados, información coherente sobre tu negocio y páginas que se puedan leer y citar. La selección de fuentes depende de cada plataforma y de la pregunta." },
  { title: "¿Garantizáis una posición o una recomendación?", answer: "No. Google, ChatGPT y Gemini deciden qué muestran. Podemos mejorar tu web y comprobar los cambios, pero no prometer una posición, una recomendación ni un plazo fijo para conseguirlas." },
  { title: "¿Podéis trabajar sobre mi web actual?", answer: "Sí. Primero revisamos cómo está hecha, qué cuenta y qué se puede mejorar. A partir de ahí acordamos contigo las prioridades y el alcance del trabajo." },
]

export default function SeoPage() {
  return <><PageStructuredData pageKey="seo" /><a className="skip-link" href="#contenido">Saltar al contenido</a><SiteHeader /><main id="contenido">
    <section className="container page-heading"><h1>SEO para que te encuentren.<br /><span>Y entiendan lo que haces.</span></h1><div className="page-heading-bottom"><p>En unostudio cuidamos el SEO técnico y los contenidos de tu web.<br className="desktop-break" /> Para Google y para búsquedas con IA como ChatGPT y Gemini.</p><Link href="/contacto" className="button">Hablemos de tu web</Link></div></section>
    <section className="container service-benefits" aria-labelledby="seo-work"><div><h2 id="seo-work">Una buena web.<br /><span>También por dentro.</span></h2><p>Revisamos lo que tienes, detectamos qué dificulta encontrarte y ponemos orden. Con prioridades claras y explicaciones sencillas.</p></div><ul><li><h3>Que se pueda encontrar.</h3><p>Revisamos la velocidad, el móvil, los enlaces y el acceso de los buscadores a tus páginas.</p></li><li><h3>Que responda a tus clientes.</h3><p>Organizamos los servicios, los títulos y las respuestas a las preguntas que importan antes de contactarte.</p></li><li><h3>Que se entienda tu negocio.</h3><p>Conectamos la información de tu marca, tus servicios y tus proyectos. Añadimos datos estructurados que ayudan a los buscadores a interpretarla.</p></li></ul></section>
    <section className="container ai-principles"><h2>Las búsquedas cambian.<br /><span>La claridad sigue contando.</span></h2><div><p>Una persona puede buscar en Google o preguntar a un asistente. En ambos casos, tu web debe explicar quién eres, qué haces y cómo puedes ayudar.</p><p>Preparamos contenidos útiles y accesibles para que puedan encontrarse y citarse. Si también necesitas renovar la web, podemos trabajar el <Link className="inline-link" href="/diseno-web">diseño y el desarrollo</Link> contigo.</p></div></section>
    <section className="container contact-faq" aria-labelledby="seo-questions"><h2 id="seo-questions">SEO, explicado fácil.</h2><div>{questions.map(question => <details className="faq-item" name="seo-preguntas" key={question.title}><summary>{question.title}<span className="detail-label"><span className="when-closed">Ver respuesta</span><span className="when-open">Cerrar</span></span></summary><p>{question.answer}</p></details>)}</div></section>
  </main><SiteFooter /></>
}
