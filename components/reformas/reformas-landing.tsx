"use client"

import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  CalendarCheck2,
  Check,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  FileCheck2,
  FormInput,
  Gauge,
  ImageIcon,
  LayoutDashboard,
  MessageCircle,
  MessageSquareText,
  ShieldCheck,
  UserCheck,
  X,
} from "lucide-react"
import { FooterSection } from "@/components/sections/footer-section"
import { Navbar } from "@/components/ui/navbar"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { useI18n } from "@/components/i18n-provider"

type ReformasLandingProps = {
  sent: boolean
  failed: boolean
}

const copyByLocale = {
  es: {
    hero: {
      eyebrow: "Captación y seguimiento · Empresas de reformas",
      title: "Convierte solicitudes de reforma en visitas y presupuestos con seguimiento.",
      body:
        "Conectamos una web preparada para cualificar, WhatsApp y un panel comercial para que cada oportunidad tenga respuesta, estado y próxima acción.",
      primary: "Pedir diagnóstico",
      secondary: "Ver cómo funciona",
      founder: "Soy Luca Benidze, fundador de unostudio.",
      proof: ["Sin cambiar una web que ya funciona", "Proceso adaptado a tu equipo", "Decisiones sensibles siempre humanas"],
    },
    flow: {
      label: "Recorrido de una oportunidad",
      demo: "Demo visual · datos ficticios",
      items: [
        ["Nueva solicitud", "Formulario web"],
        ["Cualificada", "Reforma integral · Valencia"],
        ["Visita concertada", "Jueves · 11:30"],
        ["Presupuesto enviado", "Seguimiento programado"],
      ],
      footer: "Ninguna oportunidad sin próxima acción",
    },
    problem: {
      eyebrow: "El problema real",
      title: "La solicitud no se pierde en la web. Se pierde en lo que ocurre después.",
      body:
        "Formularios sin contexto, conversaciones repartidas y presupuestos sin fecha de seguimiento hacen imposible saber qué merece atención hoy.",
      cards: [
        ["Solicitud sin contexto", "Un nombre y un teléfono no dicen si la obra encaja, dónde está o cuándo quiere empezar."],
        ["Información dispersa", "Web, llamadas, WhatsApp y notas viven en sitios distintos. Nadie ve el recorrido completo."],
        ["Presupuesto sin próxima acción", "Se envía el documento, pasan los días y la oportunidad queda dependiendo de la memoria."],
      ],
    },
    system: {
      eyebrow: "Cómo funciona",
      title: "Un recorrido claro desde el primer clic hasta la decisión.",
      body:
        "No instalamos automatizaciones por instalar. Diseñamos un proceso breve, visible y aprobable por tu equipo.",
      steps: [
        ["01", "La web cualifica", "Pregunta tipo de reforma, ubicación, propiedad, plazo e inversión orientativa sin soltar veinte campos de golpe."],
        ["02", "El equipo recibe contexto", "La nueva solicitud entra ordenada, genera un aviso y deja claro quién debe responder."],
        ["03", "Cada oportunidad avanza", "Contacto, visita, presupuesto, seguimiento, ganado, perdido o aplazado: siempre existe un estado real."],
        ["04", "El sistema recuerda", "Crea tareas y recordatorios. La IA puede resumir o redactar; precios, fechas y compromisos los aprueba una persona."],
      ],
    },
    includes: {
      eyebrow: "Qué incluye",
      title: "La entrada y el seguimiento, en un mismo sistema.",
      items: [
        ["Web o landing de captación", "Página enfocada a explicar, generar confianza y abrir una solicitud útil."],
        ["Formulario progresivo", "Preguntas por pasos para cualificar sin convertir el contacto en un interrogatorio."],
        ["WhatsApp conectado", "Conversación preparada mediante integración oficial, sin entregar sesiones de WhatsApp Web."],
        ["Pipeline comercial", "Todos ven qué está nuevo, contactado, visitado, presupuestado o aplazado."],
        ["Visitas y tareas", "Próximas acciones, responsables y recordatorios para que el trabajo avance."],
        ["Seguimiento de presupuestos", "Mensajes aprobados y cadencias razonables para cerrar el bucle comercial."],
        ["Motivos de pérdida", "Registro útil para entender por qué no avanza una obra y qué mejorar."],
        ["Panel e informe semanal", "Vista operativa del equipo y resumen sencillo de lo que necesita atención."],
      ],
    },
    dashboard: {
      eyebrow: "Ejemplo visual del panel",
      title: "La siguiente acción visible, no escondida en una conversación.",
      body:
        "Esta vista es una demostración con datos ficticios. El panel final se configura después de entender cómo trabaja realmente tu empresa.",
      demo: "DEMO · DATOS FICTICIOS",
      columns: [
        { title: "Nuevas", items: [["Marta R.", "Cocina · Valencia", "Responder hoy"], ["Carlos M.", "Baño · Paterna", "Revisar fotos"]] },
        { title: "Visita", items: [["Ana P.", "Integral · Torrent", "Jue · 11:30"]] },
        { title: "Presupuesto", items: [["Javier L.", "Local · Valencia", "Enviado ayer"]] },
        { title: "Seguimiento", items: [["Laura G.", "Vivienda · Alboraya", "Llamar viernes"]] },
      ],
    },
    website: {
      eyebrow: "La web cuando hace falta",
      title: "No rehacemos una buena web para venderte otra.",
      body:
        "Si tu web ya recibe solicitudes, mejoramos formulario, medición y seguimiento. Si frena la confianza o no cualifica, la nueva web entra como pieza necesaria del sistema.",
      exampleLabel: "Ejemplo de trabajo web publicado",
      exampleTitle: "Saduni Reformas",
      exampleBody:
        "Proyecto mostrado como referencia visual de web para reformas. No atribuimos mejoras comerciales ni resultados que no hayan sido medidos.",
      visit: "Visitar proyecto",
      keep: "Conservar la web",
      keepBody: "Cuando explica bien el servicio y ya genera contactos útiles.",
      rebuild: "Rehacer la entrada",
      rebuildBody: "Cuando no transmite confianza, no guía o no recoge el contexto necesario.",
    },
    fit: {
      eyebrow: "Encaje",
      title: "Para empresas que quieren ordenar oportunidades, no coleccionar herramientas.",
      goodTitle: "Tiene sentido si",
      good: ["Vendes reformas de ticket medio o alto", "Ya recibes algunas solicitudes", "Tu equipo puede atender y actualizar oportunidades", "Quieres medir visitas, presupuestos y motivos de pérdida"],
      badTitle: "No tiene sentido si",
      bad: ["Buscas miles de leads sin filtrar", "Quieres que una IA negocie precios o compromisos", "Nadie asumirá el seguimiento", "Esperas resultados inventados antes de medir"],
    },
    approach: {
      eyebrow: "Punto de partida",
      title: "Primero revisamos qué ya funciona. Después proponemos solo lo necesario.",
      options: [
        ["Tu web se conserva", "Instalamos cualificación, medición, pipeline, seguimiento y panel sobre la entrada actual."],
        ["Tu web necesita cambiar", "Diseñamos una web de captación y conectamos el mismo sistema de seguimiento."],
      ],
      note: "La propuesta depende del estado actual, volumen de solicitudes y proceso del equipo. Los precios piloto se presentan personalmente, no como una tarifa pública sin contexto.",
      cta: "Revisar mi caso",
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Lo importante antes de empezar.",
      items: [
        ["¿Tengo que rehacer mi web?", "No. Si ya explica bien el servicio y genera solicitudes útiles, trabajamos sobre ella. Solo recomendamos cambiarla cuando limita el sistema."],
        ["¿La IA responderá sola a mis clientes?", "No al inicio. Puede clasificar, resumir y preparar mensajes. Precios, fechas, condiciones y compromisos requieren aprobación humana."],
        ["¿Necesito entregar acceso a WhatsApp Web?", "No. El enfoque previsto usa la plataforma oficial de WhatsApp Business cuando la integración aporta valor. No guardamos QR, cookies ni sesiones del navegador."],
        ["¿Es un SaaS que configuro yo?", "No. Primero es un servicio configurado contigo. Convertiremos en producto solo las partes que se repitan y estén demostradas con clientes reales."],
        ["¿Qué ocurre con los datos?", "Se separan por empresa, se limita el acceso y se documentan proveedores y tratamiento. El contrato debe cubrir instrucciones, seguridad, subencargados y cierre del servicio."],
      ],
    },
    diagnosis: {
      eyebrow: "Diagnóstico",
      title: "Veamos dónde se están quedando tus oportunidades.",
      body:
        "Cuéntame cómo entran hoy las solicitudes y qué ocurre después. Revisaré si necesitas mejorar la web, el seguimiento o ambos.",
      bullets: ["Revisión del recorrido actual", "Siguiente paso concreto", "Sin automatizaciones innecesarias"],
      whatsapp: "Hablar por WhatsApp",
      success: "Solicitud recibida. Revisaré el contexto y te responderé con el siguiente paso.",
      error: "No se pudo enviar desde la web. Escríbeme por WhatsApp o a hola@unostudio.org.",
      fields: {
        name: "Nombre",
        business: "Empresa",
        phone: "WhatsApp",
        email: "Email opcional",
        website: "Web actual",
        message: "¿Cómo recibís y seguís hoy las solicitudes?",
        messagePlaceholder: "Ej.: llegan por web y WhatsApp, hacemos visita y enviamos presupuesto, pero el seguimiento depende de cada persona.",
        submit: "Pedir diagnóstico",
        privacyBefore: "He leído y acepto la ",
        privacyLink: "Política de Privacidad",
      },
    },
  },
  en: {
    hero: {
      eyebrow: "Lead capture and follow-up · Renovation companies",
      title: "Turn renovation enquiries into visits and quotes with follow-up.",
      body:
        "We connect a qualification-focused website, WhatsApp and a sales dashboard so every opportunity has a response, status and next action.",
      primary: "Request diagnosis",
      secondary: "See how it works",
      founder: "I am Luca Benidze, founder of unostudio.",
      proof: ["Keep a website that already works", "Process adapted to your team", "Sensitive decisions always remain human"],
    },
    flow: {
      label: "Opportunity journey",
      demo: "Visual demo · fictional data",
      items: [["New enquiry", "Website form"], ["Qualified", "Full renovation · Valencia"], ["Visit booked", "Thursday · 11:30"], ["Quote sent", "Follow-up scheduled"]],
      footer: "No opportunity without a next action",
    },
    problem: {
      eyebrow: "The real problem",
      title: "The enquiry is not lost on the website. It is lost in what happens next.",
      body: "Forms without context, scattered conversations and quotes without a follow-up date make it impossible to know what needs attention today.",
      cards: [["Enquiry without context", "A name and phone number do not show whether the job fits, where it is or when it should start."], ["Scattered information", "Website, calls, WhatsApp and notes live in different places. Nobody sees the full journey."], ["Quote without a next action", "The document is sent, days pass and the opportunity depends on memory."]],
    },
    system: {
      eyebrow: "How it works",
      title: "A clear journey from first click to final decision.",
      body: "We do not install automation for its own sake. We design a short, visible process your team can approve.",
      steps: [["01", "The website qualifies", "It asks about job type, location, ownership, timeframe and indicative investment without showing twenty fields at once."], ["02", "The team receives context", "The new enquiry arrives organised, sends an alert and makes ownership clear."], ["03", "Every opportunity moves", "Contact, visit, quote, follow-up, won, lost or postponed: there is always a real status."], ["04", "The system remembers", "It creates tasks and reminders. AI can summarise or draft; a person approves prices, dates and commitments."]],
    },
    includes: {
      eyebrow: "What is included",
      title: "The entry point and follow-up, in one system.",
      items: [["Lead capture website", "A page focused on explaining, building trust and opening a useful enquiry."], ["Progressive form", "Step-by-step questions that qualify without turning contact into an interrogation."], ["Connected WhatsApp", "Prepared conversations through an official integration, without handing over WhatsApp Web sessions."], ["Sales pipeline", "Everyone sees what is new, contacted, visited, quoted or postponed."], ["Visits and tasks", "Next actions, owners and reminders that keep work moving."], ["Quote follow-up", "Approved messages and sensible cadences that close the sales loop."], ["Loss reasons", "Useful records to understand why a job did not move and what to improve."], ["Dashboard and weekly report", "An operational team view and a simple summary of what needs attention."]],
    },
    dashboard: {
      eyebrow: "Dashboard visual example",
      title: "The next action visible, not buried in a conversation.",
      body: "This is a demonstration with fictional data. The final dashboard is configured after understanding how your company actually works.",
      demo: "DEMO · FICTIONAL DATA",
      columns: [{ title: "New", items: [["Marta R.", "Kitchen · Valencia", "Reply today"], ["Carlos M.", "Bathroom · Paterna", "Review photos"]] }, { title: "Visit", items: [["Ana P.", "Full · Torrent", "Thu · 11:30"]] }, { title: "Quote", items: [["Javier L.", "Premises · Valencia", "Sent yesterday"]] }, { title: "Follow-up", items: [["Laura G.", "Home · Alboraya", "Call Friday"]] }],
    },
    website: {
      eyebrow: "The website when needed",
      title: "We do not replace a good website just to sell you another.",
      body: "If your website already generates enquiries, we improve forms, measurement and follow-up. If it slows trust or does not qualify, a new website becomes a necessary part of the system.",
      exampleLabel: "Published website example",
      exampleTitle: "Saduni Reformas",
      exampleBody: "Shown as a visual reference for renovation web work. We do not attribute commercial improvements or results that have not been measured.",
      visit: "Visit project",
      keep: "Keep the website",
      keepBody: "When it explains the service clearly and already generates useful contacts.",
      rebuild: "Rebuild the entry point",
      rebuildBody: "When it lacks trust, guidance or the context needed to qualify.",
    },
    fit: {
      eyebrow: "Fit",
      title: "For companies that want to organise opportunities, not collect tools.",
      goodTitle: "It makes sense if",
      good: ["You sell medium or high-ticket renovations", "You already receive some enquiries", "Your team can attend and update opportunities", "You want to measure visits, quotes and loss reasons"],
      badTitle: "It does not make sense if",
      bad: ["You want thousands of unfiltered leads", "You want AI to negotiate prices or commitments", "Nobody will own follow-up", "You expect invented results before measurement"],
    },
    approach: {
      eyebrow: "Starting point",
      title: "First we review what already works. Then we propose only what is needed.",
      options: [["Keep your website", "We install qualification, measurement, pipeline, follow-up and dashboard on the current entry point."], ["Your website needs change", "We design a lead capture website and connect the same follow-up system."]],
      note: "The proposal depends on your current setup, enquiry volume and team process. Pilot prices are presented personally, not as a public rate without context.",
      cta: "Review my case",
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "What matters before starting.",
      items: [["Do I need to rebuild my website?", "No. If it explains the service clearly and generates useful enquiries, we work with it. We only recommend a change when it limits the system."], ["Will AI reply to clients on its own?", "Not initially. It can classify, summarise and prepare messages. Prices, dates, terms and commitments require human approval."], ["Do I need to hand over WhatsApp Web access?", "No. The intended approach uses the official WhatsApp Business platform when integration adds value. We do not store QR codes, cookies or browser sessions."], ["Is this a SaaS I configure myself?", "No. It starts as a service configured with you. We only turn repeated, proven parts into product."], ["What happens to the data?", "Data is separated by company, access is limited and providers and processing are documented. The contract must cover instructions, security, subprocessors and service closure."]],
    },
    diagnosis: {
      eyebrow: "Diagnosis",
      title: "Let us see where your opportunities are getting stuck.",
      body: "Tell me how enquiries arrive today and what happens next. I will review whether you need to improve the website, follow-up or both.",
      bullets: ["Current journey review", "One concrete next step", "No unnecessary automation"],
      whatsapp: "Talk on WhatsApp",
      success: "Enquiry received. I will review the context and reply with the next step.",
      error: "The website could not send it. Message me on WhatsApp or at hola@unostudio.org.",
      fields: { name: "Name", business: "Company", phone: "WhatsApp", email: "Optional email", website: "Current website", message: "How do you receive and follow up enquiries today?", messagePlaceholder: "Example: they arrive through the website and WhatsApp, we visit and send a quote, but follow-up depends on each person.", submit: "Request diagnosis", privacyBefore: "I have read and accept the ", privacyLink: "Privacy Policy" },
    },
  },
} as const

const problemIcons = [FormInput, MessageSquareText, Clock3]
const includeIcons = [LayoutDashboard, FormInput, MessageCircle, Gauge, CalendarCheck2, FileCheck2, CircleDollarSign, BarChart3]
const whatsappHref = "https://wa.me/34694222191?text=Hola%2C%20quiero%20revisar%20el%20sistema%20de%20captaci%C3%B3n%20para%20mi%20empresa%20de%20reformas"
const inputClass = "mt-2 w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-sky-300/70 focus:ring-2 focus:ring-sky-300/20"
const labelClass = "text-sm font-medium text-zinc-300"

export function ReformasLanding({ sent, failed }: ReformasLandingProps) {
  const { locale } = useI18n()
  const copy = copyByLocale[locale]

  return (
    <main className="min-h-screen overflow-hidden bg-[#05090f] text-zinc-100">
      <Navbar />

      <section className="relative px-6 pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(56,182,255,0.14),transparent_28%),radial-gradient(circle_at_18%_72%,rgba(249,115,22,0.06),transparent_24%)]" />
          <div
            className="absolute inset-0 opacity-70"
            style={{ backgroundImage: "linear-gradient(rgba(56,182,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(56,182,255,0.045) 1px, transparent 1px)", backgroundSize: "44px 44px" }}
          />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.03fr_0.97fr] lg:items-center">
          <div>
            <p className="page-load-rise font-mono text-xs uppercase tracking-[0.2em] text-sky-300" style={{ animationDelay: "120ms" }}>{copy.hero.eyebrow}</p>
            <h1 className="page-load-rise mt-6 max-w-4xl font-display text-[clamp(2.75rem,6.1vw,5.8rem)] font-bold leading-[0.94] tracking-[-0.035em] text-zinc-50 text-balance" style={{ animationDelay: "220ms" }}>{copy.hero.title}</h1>
            <p className="page-load-rise mt-7 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg md:leading-8" style={{ animationDelay: "340ms" }}>{copy.hero.body}</p>
            <p className="page-load-rise mt-5 text-sm font-medium text-zinc-200" style={{ animationDelay: "420ms" }}>{copy.hero.founder}</p>
            <div className="page-load-rise mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "500ms" }}>
              <a href="#diagnostico" className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300">
                {copy.hero.primary}<ArrowRight className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
              </a>
              <a href="#sistema" className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-zinc-200 transition hover:border-sky-300/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300">{copy.hero.secondary}</a>
            </div>
            <ul className="page-load-rise mt-9 grid gap-3 text-sm text-zinc-400 sm:grid-cols-3" style={{ animationDelay: "580ms" }}>
              {copy.hero.proof.map((item) => <li key={item} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" strokeWidth={2} aria-hidden="true" /><span>{item}</span></li>)}
            </ul>
          </div>

          <div className="page-load-rise relative" style={{ animationDelay: "360ms" }}>
            <div className="absolute -inset-8 rounded-full bg-sky-400/10 blur-3xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-xl border border-sky-300/20 bg-[#07111d]/95 p-5 shadow-[0_36px_120px_-44px_rgba(56,182,255,0.65),inset_0_1px_0_rgba(255,255,255,0.07)] md:p-7">
              <div className="flex items-center justify-between gap-4 border-b border-white/8 pb-5">
                <div><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">{copy.flow.label}</p><p className="mt-1 text-xs text-sky-300">{copy.flow.demo}</p></div>
                <span className="flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-300 motion-safe:animate-pulse" />Live flow</span>
              </div>
              <div className="relative mt-6 space-y-3">
                <div className="absolute bottom-5 left-[19px] top-5 w-px bg-gradient-to-b from-sky-300/60 via-sky-300/25 to-orange-400/40" aria-hidden="true" />
                {copy.flow.items.map(([title, detail], index) => (
                  <div key={title} className="relative grid grid-cols-[40px_1fr] items-center gap-3 rounded-lg border border-white/8 bg-white/[0.025] p-3">
                    <span className={`relative z-10 grid h-10 w-10 place-items-center rounded-full border text-xs font-semibold ${index === copy.flow.items.length - 1 ? "border-orange-400/30 bg-orange-400/10 text-orange-300" : "border-sky-300/25 bg-sky-300/10 text-sky-200"}`}>{String(index + 1).padStart(2, "0")}</span>
                    <div><p className="text-sm font-semibold text-zinc-100">{title}</p><p className="mt-1 text-xs text-zinc-500">{detail}</p></div>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3 rounded-lg bg-sky-300 px-4 py-3 text-sm font-semibold text-slate-950"><CheckCircle2 className="h-4 w-4" strokeWidth={2} aria-hidden="true" />{copy.flow.footer}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/7 bg-white/[0.018] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="max-w-4xl"><p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-300">{copy.problem.eyebrow}</p><h2 className="mt-5 font-display text-3xl font-bold leading-tight text-zinc-100 text-balance md:text-5xl">{copy.problem.title}</h2><p className="mt-5 max-w-2xl text-base leading-7 text-zinc-500 md:text-lg">{copy.problem.body}</p></ScrollReveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {copy.problem.cards.map(([title, body], index) => { const Icon = problemIcons[index]; return <ScrollReveal key={title} delay={index * 90}><article className="h-full rounded-xl border border-white/8 bg-[#070c13] p-6"><span className="grid h-10 w-10 place-items-center rounded-lg border border-orange-300/15 bg-orange-300/8 text-orange-300"><Icon className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" /></span><h3 className="mt-6 text-xl font-semibold text-zinc-100">{title}</h3><p className="mt-3 text-sm leading-6 text-zinc-500">{body}</p></article></ScrollReveal> })}
          </div>
        </div>
      </section>

      <section id="sistema" className="scroll-mt-24 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><ScrollReveal><p className="font-mono text-xs uppercase tracking-[0.2em] text-sky-300">{copy.system.eyebrow}</p><h2 className="mt-5 font-display text-3xl font-bold leading-tight text-zinc-100 md:text-5xl">{copy.system.title}</h2></ScrollReveal><ScrollReveal delay={100}><p className="max-w-2xl text-base leading-7 text-zinc-500 lg:ml-auto md:text-lg">{copy.system.body}</p></ScrollReveal></div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-white/8 bg-white/8 md:grid-cols-2">
            {copy.system.steps.map(([number, title, body], index) => <ScrollReveal key={number} delay={index * 70}><article className="h-full bg-[#060b12] p-6 md:p-8"><div className="flex items-center gap-4"><span className="font-mono text-xs text-sky-300">{number}</span><span className="h-px flex-1 bg-white/8" /></div><h3 className="mt-7 font-heading text-2xl font-semibold text-zinc-100">{title}</h3><p className="mt-4 max-w-xl text-sm leading-7 text-zinc-500">{body}</p></article></ScrollReveal>)}
          </div>
        </div>
      </section>

      <section id="incluye" className="scroll-mt-24 border-y border-white/7 bg-[#07101b] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl"><ScrollReveal className="max-w-3xl"><p className="font-mono text-xs uppercase tracking-[0.2em] text-sky-300">{copy.includes.eyebrow}</p><h2 className="mt-5 font-display text-3xl font-bold leading-tight text-zinc-100 md:text-5xl">{copy.includes.title}</h2></ScrollReveal><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{copy.includes.items.map(([title, body], index) => { const Icon = includeIcons[index]; return <ScrollReveal key={title} delay={(index % 4) * 65}><article className="h-full rounded-xl border border-white/8 bg-black/15 p-5 transition hover:border-sky-300/25 hover:bg-sky-300/[0.035]"><Icon className="h-5 w-5 text-sky-300" strokeWidth={1.7} aria-hidden="true" /><h3 className="mt-5 text-base font-semibold text-zinc-100">{title}</h3><p className="mt-3 text-sm leading-6 text-zinc-500">{body}</p></article></ScrollReveal> })}</div></div>
      </section>

      <section id="panel" className="scroll-mt-24 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl"><div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end"><ScrollReveal><p className="font-mono text-xs uppercase tracking-[0.2em] text-sky-300">{copy.dashboard.eyebrow}</p><h2 className="mt-5 font-display text-3xl font-bold leading-tight text-zinc-100 md:text-5xl">{copy.dashboard.title}</h2></ScrollReveal><ScrollReveal delay={100}><p className="max-w-2xl text-base leading-7 text-zinc-500 lg:ml-auto md:text-lg">{copy.dashboard.body}</p></ScrollReveal></div>
          <ScrollReveal delay={120} className="mt-12"><div className="overflow-hidden rounded-xl border border-white/10 bg-[#08101a] shadow-[0_32px_100px_-56px_rgba(56,182,255,0.7)]"><div className="flex flex-col gap-3 border-b border-white/8 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-3"><LayoutDashboard className="h-4 w-4 text-sky-300" strokeWidth={1.8} aria-hidden="true" /><span className="text-sm font-semibold text-zinc-200">Opportunity board</span></div><span className="font-mono text-[10px] tracking-[0.16em] text-orange-300">{copy.dashboard.demo}</span></div><div className="grid gap-px bg-white/8 lg:grid-cols-4">{copy.dashboard.columns.map((column, columnIndex) => <div key={column.title} className="min-h-56 bg-[#070c13] p-4"><div className="mb-4 flex items-center justify-between"><p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">{column.title}</p><span className="grid h-5 min-w-5 place-items-center rounded-full bg-white/6 px-1.5 text-[10px] text-zinc-500">{column.items.length}</span></div><div className="space-y-3">{column.items.map(([name, type, action]) => <article key={name} className="rounded-lg border border-white/8 bg-white/[0.025] p-4"><div className="flex items-center justify-between gap-3"><p className="text-sm font-semibold text-zinc-200">{name}</p><span className={`h-2 w-2 rounded-full ${columnIndex === 0 ? "bg-orange-300" : "bg-sky-300"}`} /></div><p className="mt-2 text-xs text-zinc-500">{type}</p><div className="mt-4 flex items-center gap-2 border-t border-white/7 pt-3 text-[11px] text-sky-300"><Clock3 className="h-3 w-3" aria-hidden="true" />{action}</div></article>)}</div></div>)}</div></div></ScrollReveal>
        </div>
      </section>

      <section className="border-y border-white/7 bg-white/[0.018] px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.96fr_1.04fr] lg:items-center"><ScrollReveal><p className="font-mono text-xs uppercase tracking-[0.2em] text-sky-300">{copy.website.eyebrow}</p><h2 className="mt-5 font-display text-3xl font-bold leading-tight text-zinc-100 md:text-5xl">{copy.website.title}</h2><p className="mt-5 text-base leading-7 text-zinc-500 md:text-lg">{copy.website.body}</p><div className="mt-8 grid gap-3 sm:grid-cols-2"><div className="rounded-lg border border-white/8 bg-black/20 p-5"><CheckCircle2 className="h-5 w-5 text-emerald-300" strokeWidth={1.7} aria-hidden="true" /><h3 className="mt-4 font-semibold text-zinc-100">{copy.website.keep}</h3><p className="mt-2 text-sm leading-6 text-zinc-500">{copy.website.keepBody}</p></div><div className="rounded-lg border border-white/8 bg-black/20 p-5"><ImageIcon className="h-5 w-5 text-orange-300" strokeWidth={1.7} aria-hidden="true" /><h3 className="mt-4 font-semibold text-zinc-100">{copy.website.rebuild}</h3><p className="mt-2 text-sm leading-6 text-zinc-500">{copy.website.rebuildBody}</p></div></div></ScrollReveal>
          <ScrollReveal delay={120}><article className="overflow-hidden rounded-xl border border-white/10 bg-[#070c13]"><a href="https://sadunireformas.com" target="_blank" rel="noreferrer" className="group relative block aspect-[16/10] overflow-hidden border-b border-white/8"><img src="/projects/saduni-reformas.png" alt="Saduni Reformas, ejemplo de página web para una empresa de reformas" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]" /><div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" /><span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/60 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur">{copy.website.exampleLabel}</span></a><div className="p-6"><h3 className="text-xl font-semibold text-zinc-100">{copy.website.exampleTitle}</h3><p className="mt-3 text-sm leading-6 text-zinc-500">{copy.website.exampleBody}</p><a href="https://sadunireformas.com" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 hover:text-sky-200">{copy.website.visit}<ArrowRight className="h-4 w-4" aria-hidden="true" /></a></div></article></ScrollReveal></div>
      </section>

      <section id="encaje" className="scroll-mt-24 px-6 py-20 md:py-28"><div className="mx-auto max-w-7xl"><ScrollReveal className="max-w-3xl"><p className="font-mono text-xs uppercase tracking-[0.2em] text-sky-300">{copy.fit.eyebrow}</p><h2 className="mt-5 font-display text-3xl font-bold leading-tight text-zinc-100 md:text-5xl">{copy.fit.title}</h2></ScrollReveal><div className="mt-12 grid gap-5 md:grid-cols-2"><ScrollReveal><div className="h-full rounded-xl border border-emerald-300/15 bg-emerald-300/[0.035] p-6 md:p-8"><UserCheck className="h-6 w-6 text-emerald-300" strokeWidth={1.7} aria-hidden="true" /><h3 className="mt-6 text-xl font-semibold text-zinc-100">{copy.fit.goodTitle}</h3><ul className="mt-5 space-y-4">{copy.fit.good.map(item => <li key={item} className="flex gap-3 text-sm leading-6 text-zinc-400"><Check className="mt-1 h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />{item}</li>)}</ul></div></ScrollReveal><ScrollReveal delay={100}><div className="h-full rounded-xl border border-orange-300/15 bg-orange-300/[0.025] p-6 md:p-8"><ShieldCheck className="h-6 w-6 text-orange-300" strokeWidth={1.7} aria-hidden="true" /><h3 className="mt-6 text-xl font-semibold text-zinc-100">{copy.fit.badTitle}</h3><ul className="mt-5 space-y-4">{copy.fit.bad.map(item => <li key={item} className="flex gap-3 text-sm leading-6 text-zinc-400"><X className="mt-1 h-4 w-4 shrink-0 text-orange-300" aria-hidden="true" />{item}</li>)}</ul></div></ScrollReveal></div></div></section>

      <section className="border-y border-white/7 bg-[#07101b] px-6 py-20 md:py-28"><div className="mx-auto max-w-7xl"><ScrollReveal className="max-w-4xl"><p className="font-mono text-xs uppercase tracking-[0.2em] text-sky-300">{copy.approach.eyebrow}</p><h2 className="mt-5 font-display text-3xl font-bold leading-tight text-zinc-100 md:text-5xl">{copy.approach.title}</h2></ScrollReveal><div className="mt-10 grid gap-4 md:grid-cols-2">{copy.approach.options.map(([title, body], index) => <ScrollReveal key={title} delay={index * 90}><article className="h-full rounded-xl border border-white/9 bg-black/15 p-6 md:p-8"><span className="font-mono text-xs text-sky-300">0{index + 1}</span><h3 className="mt-5 text-2xl font-semibold text-zinc-100">{title}</h3><p className="mt-3 text-sm leading-7 text-zinc-500">{body}</p></article></ScrollReveal>)}</div><ScrollReveal delay={120} className="mt-6 flex flex-col gap-5 rounded-xl border border-sky-300/15 bg-sky-300/[0.04] p-6 md:flex-row md:items-center md:justify-between"><p className="max-w-3xl text-sm leading-6 text-zinc-400">{copy.approach.note}</p><a href="#diagnostico" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-zinc-100 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-sky-200">{copy.approach.cta}<ArrowRight className="h-4 w-4" aria-hidden="true" /></a></ScrollReveal></div></section>

      <section className="px-6 py-20 md:py-28"><div className="mx-auto max-w-4xl"><ScrollReveal className="text-center"><p className="font-mono text-xs uppercase tracking-[0.2em] text-sky-300">{copy.faq.eyebrow}</p><h2 className="mt-5 font-display text-3xl font-bold leading-tight text-zinc-100 md:text-5xl">{copy.faq.title}</h2></ScrollReveal><div className="mt-10 divide-y divide-white/8 border-y border-white/8">{copy.faq.items.map(([question, answer]) => <details key={question} className="group"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left font-semibold text-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"><span>{question}</span><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/10 text-lg font-light text-sky-300 transition group-open:rotate-45">+</span></summary><p className="max-w-3xl pb-6 text-sm leading-7 text-zinc-500">{answer}</p></details>)}</div></div></section>

      <section id="diagnostico" className="scroll-mt-20 border-t border-white/7 bg-[radial-gradient(circle_at_15%_25%,rgba(56,182,255,0.1),transparent_30%),#07101b] px-6 py-20 md:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start"><ScrollReveal><p className="font-mono text-xs uppercase tracking-[0.2em] text-sky-300">{copy.diagnosis.eyebrow}</p><h2 className="mt-5 font-display text-3xl font-bold leading-tight text-zinc-100 md:text-5xl">{copy.diagnosis.title}</h2><p className="mt-5 max-w-xl text-base leading-7 text-zinc-500 md:text-lg">{copy.diagnosis.body}</p><ul className="mt-8 space-y-4">{copy.diagnosis.bullets.map(item => <li key={item} className="flex gap-3 text-sm text-zinc-300"><CheckCircle2 className="h-5 w-5 shrink-0 text-sky-300" strokeWidth={1.7} aria-hidden="true" />{item}</li>)}</ul><a href={whatsappHref} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/12 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-sky-300/40 hover:text-white"><MessageCircle className="h-4 w-4" aria-hidden="true" />{copy.diagnosis.whatsapp}</a></ScrollReveal>
          <ScrollReveal delay={120}><form action="/api/contact" method="post" className="rounded-xl border border-white/10 bg-black/20 p-5 shadow-[0_32px_100px_-56px_rgba(56,182,255,0.8),inset_0_1px_0_rgba(255,255,255,0.06)] md:p-8">{sent ? <div className="mb-6 rounded-lg border border-emerald-300/20 bg-emerald-300/8 p-4 text-sm leading-6 text-emerald-100">{copy.diagnosis.success}</div> : null}{failed ? <div className="mb-6 rounded-lg border border-orange-300/20 bg-orange-300/8 p-4 text-sm leading-6 text-orange-100">{copy.diagnosis.error}</div> : null}<input type="hidden" name="servicio" value="Sistema Captación Reformas" /><input type="hidden" name="presupuesto" value="No lo sé" /><input type="hidden" name="urgencia" value="1-2 meses" /><input type="hidden" name="page_path" value="/reformas" /><input tabIndex={-1} autoComplete="off" name="confirmacion" className="hidden" aria-hidden="true" /><div className="grid gap-5 md:grid-cols-2"><label className={labelClass}>{copy.diagnosis.fields.name}<input className={inputClass} name="nombre" autoComplete="name" required /></label><label className={labelClass}>{copy.diagnosis.fields.business}<input className={inputClass} name="empresa" autoComplete="organization" required /></label><label className={labelClass}>{copy.diagnosis.fields.phone}<input className={inputClass} name="telefono" type="tel" autoComplete="tel" required /></label><label className={labelClass}>{copy.diagnosis.fields.email}<input className={inputClass} name="email" type="email" autoComplete="email" /></label></div><label className={`${labelClass} mt-5 block`}>{copy.diagnosis.fields.website}<input className={inputClass} name="web_actual" type="url" placeholder="https://" /></label><label className={`${labelClass} mt-5 block`}>{copy.diagnosis.fields.message}<textarea className={`${inputClass} min-h-32 resize-y`} name="mensaje" placeholder={copy.diagnosis.fields.messagePlaceholder} minLength={10} required /></label><label className="mt-6 flex items-start gap-3 text-sm leading-6 text-zinc-400"><input type="checkbox" name="acepta_privacidad" required className="mt-1 h-4 w-4 rounded border-zinc-700 bg-zinc-950 text-sky-300" /><span>{copy.diagnosis.fields.privacyBefore}<Link href="/legal/privacidad" className="text-sky-300 hover:text-sky-200">{copy.diagnosis.fields.privacyLink}</Link>.</span></label><button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-sky-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300">{copy.diagnosis.fields.submit}<ArrowRight className="h-4 w-4" aria-hidden="true" /></button></form></ScrollReveal></div></section>

      <FooterSection />
    </main>
  )
}
