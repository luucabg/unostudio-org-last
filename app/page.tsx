import { ArrowUpRight, ExternalLink, Mail, MessageCircle, Plus } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProjectShowcase } from "@/components/project-showcase"
import { Services } from "@/components/services"
import { EmailButton } from "@/components/email-button"
import { ProjectGallery } from "@/components/project-gallery"
import { ServiceLinks } from "@/components/service-links"

const steps = [
  { title: "Nos cuentas la idea.", text: "Qué necesitas, para quién y qué te gustaría conseguir." },
  { title: "Le damos forma.", text: "Diseñamos contigo. Ves el avance y nos cuentas qué piensas." },
  { title: "Lo dejamos listo.", text: "Cuidamos los detalles y te acompañamos hasta la entrega." },
]
const faqs = [
  { question: "¿Y si todavía no tengo clara la idea?", answer: "Podemos empezar por ahí. Cuéntanos qué quieres hacer y te ayudamos a decidir qué necesitas diseñar o desarrollar." },
  { question: "¿Podéis mejorar una web que ya tengo?", answer: "Sí. Podemos revisar tu web y trabajar en su diseño, su estructura o una nueva versión. Antes de empezar, definimos juntos el alcance." },
  { question: "¿Cuánto cuesta y cuánto tarda?", answer: "Depende del proyecto. Cuando entendamos lo que necesitas, te plantearemos el alcance, el presupuesto y los tiempos antes de empezar." },
  { question: "¿Necesito saber de diseño o tecnología?", answer: "Solo necesitas contarnos tu idea. Te explicamos cada decisión con claridad y te acompañamos durante el proyecto." },
]

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <SiteHeader />
      <main id="contenido">
        <section className="studio-hero" id="inicio" aria-labelledby="hero-title">
          <div className="container studio-hero-grid">
            <div className="studio-hero-copy">
              <h1 id="hero-title">Buenas ideas.<br /><span>Mejor diseño.</span></h1>
              <p>Tu web, tu marca y tu propio software.<br />Lo diseñamos y desarrollamos contigo.</p>
              <ServiceLinks />
              <div className="hero-actions"><a href="#contacto" className="button button-dark">Cuéntanos tu idea <span className="button-icon"><ArrowUpRight size={17} aria-hidden="true" /></span></a><a href="#proyectos" className="studio-work-link">Ver proyectos <ExternalLink size={15} aria-hidden="true" /></a></div>
            </div>
            <ProjectShowcase />
          </div>
          <div className="container studio-intro-line"><span>De la primera idea</span><span className="studio-line" aria-hidden="true" /><span>a ese «así, sí».</span><span>Diseño y desarrollo, en un mismo estudio.</span></div>
        </section>

        <section id="proyectos" className="section projects-section" aria-labelledby="projects-title"><div className="container">
          <div className="section-heading"><h2 id="projects-title">Las ideas se ven<br /><span>mejor así.</span></h2><p>Negocios distintos.<br />Diseño con personalidad propia.</p></div>
          <ProjectGallery />
        </div></section>

        <section id="servicios" className="section services-section" aria-labelledby="services-title"><div className="container">
          <div className="section-heading"><h2 id="services-title">Tu proyecto.<br /><span>Todas sus piezas.</span></h2><p>Diseño y desarrollo.<br />{" "}Un mismo estudio.</p></div>
          <Services />
        </div></section>

        <section id="proceso" className="section process-section" aria-labelledby="process-title"><div className="container">
          <div className="process-intro"><h2 id="process-title">Buen diseño.<br /><span>Buen entendimiento.</span></h2><p>Tú conoces tu negocio.<br />Nosotros lo escuchamos y le damos forma.</p></div>
          <ol className="process-steps">{steps.map((step, index) => <li key={step.title}><span className="step-number">0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol>
        </div></section>

        <section className="section faq-section" aria-labelledby="faq-title"><div className="container faq-grid"><div><h2 id="faq-title">Antes de<br /><span>dar el paso.</span></h2><p>Algunas respuestas.<br />{" "}El resto, lo hablamos.</p><a className="text-link" href="mailto:hola@unostudio.org">Haznos tu pregunta <Mail size={16} aria-hidden="true" /></a></div><div className="faq-list">{faqs.map(faq => <details name="preguntas" className="faq-item" key={faq.question}><summary>{faq.question}<Plus size={19} aria-hidden="true" /></summary><div className="faq-answer"><p>{faq.answer}</p></div></details>)}</div></div></section>

        <section id="contacto" className="contact-section" aria-labelledby="contact-title"><div className="container"><div className="contact-card">
          <h2 id="contact-title">Lo siguiente,<br />lo hacemos contigo.</h2><p>Una web, una marca o una idea a medio pensar.<br />{" "}Empieza por contárnosla.</p>
          <div className="contact-actions"><a href="mailto:hola@unostudio.org" className="button button-dark">Hablemos de tu idea <Mail size={17} aria-hidden="true" /></a><a href="https://wa.me/34694222191?text=Hola%2C%20quiero%20contaros%20una%20idea%20para%20mi%20proyecto." target="_blank" rel="noopener noreferrer" className="button button-contact">Mejor por WhatsApp <MessageCircle size={17} aria-hidden="true" /></a></div>
          <div className="contact-email"><a href="mailto:hola@unostudio.org">hola@unostudio.org</a><EmailButton /></div>
        </div></div></section>
      </main>
      <SiteFooter />
    </>
  )
}
