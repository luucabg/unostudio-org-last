import type { Metadata } from "next"
import { Mail, MessageCircle } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { EmailButton } from "@/components/email-button"

export const metadata: Metadata = { title: "Contacto", description: "Cuéntanos tu idea. Habla con unostudio por correo o WhatsApp para tu web, marca o aplicación.", alternates: { canonical: "/contacto" } }

const questions = [{ title: "¿Necesito tenerlo todo claro?", answer: "Puedes venir con una idea a medio pensar. Primero entendemos qué necesitas y qué quieres conseguir." }, { title: "¿Cuánto cuesta y cuánto tarda?", answer: "Depende del proyecto. Cuando conozcamos la idea, te propondremos un alcance, un presupuesto y unos tiempos antes de empezar." }, { title: "¿Podéis mejorar lo que ya tengo?", answer: "Sí. Podemos revisar tu web, tu marca o tu aplicación y definir contigo qué merece la pena mejorar." }]

export default function ContactPage() {
  return <><a className="skip-link" href="#contenido">Saltar al contenido</a><SiteHeader /><main id="contenido"><section className="container page-heading contact-heading"><h1>Todo empieza<br /><span>con un hola.</span></h1><p>Una web, una marca o una idea a medio pensar.<br />Cuéntanos qué tienes en mente.</p></section><section className="container contact-options" aria-label="Cómo contactar"><div className="contact-main"><Mail size={27} strokeWidth={1.5} aria-hidden="true" /><h2>Escríbenos.</h2><a className="contact-address" href="mailto:hola@unostudio.org">hola@unostudio.org</a><p>Cuéntanos un poco sobre tu idea y lo que necesitas.</p><EmailButton /></div><div className="contact-whatsapp"><MessageCircle size={27} strokeWidth={1.5} aria-hidden="true" /><h2>¿Mejor por WhatsApp?</h2><p>También podemos empezar la conversación por aquí.</p><a className="button button-outline" href="https://wa.me/34694222191?text=Hola%2C%20quiero%20contaros%20una%20idea%20para%20mi%20proyecto." target="_blank" rel="noopener noreferrer">Abrir WhatsApp</a></div></section><section className="container contact-faq" aria-labelledby="faq-title"><h2 id="faq-title">Por si te lo preguntas.</h2><div>{questions.map(q=><details className="faq-item" name="preguntas" key={q.title}><summary>{q.title}<span className="detail-label"><span className="when-closed">Ver respuesta</span><span className="when-open">Cerrar</span></span></summary><p>{q.answer}</p></details>)}</div></section></main><SiteFooter /></>
}
