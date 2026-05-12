export type Locale = "es" | "en"

export const languages: Array<{ code: Locale; label: string; shortLabel: string }> = [
  { code: "es", label: "Español", shortLabel: "ES" },
  { code: "en", label: "English", shortLabel: "EN" },
]

export const translations = {
  es: {
    nav: {
      services: "Qué hacemos",
      process: "Diagnóstico",
      plans: "Planes",
      bookCall: "Pedir diagnóstico",
    },
    hero: {
      badge: "Captación local + web + creativos",
      title: "Más solicitudes de presupuesto\ndesde tu web, Instagram\ny anuncios.",
      subtitle:
        "Para negocios locales de ticket alto: reformas, interiorismo, arquitectura e inmobiliaria. Montamos una página clara, captación por WhatsApp/formulario, seguimiento de leads y creativos para convertir visitas en oportunidades reales.",
      primaryCta: "Pedir diagnóstico gratuito",
      secondaryCta: "Ver planes",
      proofPoints: [
        "Landing en 14 días",
        "Leads ordenados en un panel simple",
        "Creativos listos para anuncios",
      ],
    },
    perception: {
      eyebrow: "Punto ciego",
      title: "Tu web puede estar perdiendo presupuestos sin que lo veas.",
      subtitle:
        "Si alguien entra, no entiende rápido qué haces, no confía o no sabe cómo pedir presupuesto, se va. Nosotros ordenamos el mensaje, la página y el seguimiento para que más visitas acaben en conversación.",
      beforeTitle: "Antes",
      afterTitle: "Después",
      beforePoints: ["Web confusa", "WhatsApp poco visible", "Sin seguimiento"],
      afterPoints: ["Oferta clara", "Formulario o WhatsApp medido", "Leads organizados"],
    },
    impact: {
      eyebrow: "Método unostudio",
      title: "Primero entendemos cómo vendes. Luego diseñamos.",
      body:
        "Antes de tocar la web revisamos tu oferta, tus clientes, tus objeciones y cómo te llegan los contactos. Así la página no solo se ve bien: ayuda a conseguir mejores solicitudes.",
      steps: [
        {
          number: "01",
          title: "Diagnóstico",
          body: "Vemos qué vendes, a quién y dónde se pierden oportunidades.",
        },
        {
          number: "02",
          title: "Sistema",
          body: "Creamos landing, formulario/WhatsApp y panel de leads.",
        },
        {
          number: "03",
          title: "Mejora",
          body: "Medimos qué entra y ajustamos mensaje, creativos y seguimiento.",
        },
      ],
    },
    features: {
      eyebrow: "Qué hacemos",
      title: "Qué te dejamos montado",
      body:
        "Un sistema simple para explicar mejor tu oferta, recibir solicitudes y saber qué lead necesita la siguiente acción.",
      items: [
        {
          title: "Página que vende claro",
          body: "Una landing o web simple para explicar tu oferta y llevar al contacto.",
        },
        {
          title: "WhatsApp o formulario medido",
          body: "Cada solicitud entra con nombre, teléfono, servicio y fuente.",
        },
        {
          title: "Panel de leads",
          body: "Un panel simple para saber quién pidió presupuesto, estado y próxima acción.",
        },
        {
          title: "Creativos para captar atención",
          body: "Piezas visuales para probar en Instagram, TikTok o Meta Ads.",
        },
      ],
      experienceTitle: "Experiencia real captando atención online",
      experienceBody:
        "Luca generó más de 1M de visitas en TikTok en un mes y 7.000€ en ingresos en otro proyecto en 3 meses desde 0. En unostudio aplicamos ese aprendizaje a páginas, creativos y sistemas de captación para negocios locales.",
    },
    pricing: {
      eyebrow: "Planes",
      title: "Planes",
      body:
        "Precios orientativos. La inversión final depende del alcance, urgencia y si incluimos creativos, ads o automatizaciones.",
      billingPrimary: "Proyecto + mensualidad",
      minimumNote: "Todos los planes incluyen mantenimiento mensual mínimo de 6 meses.",
      monthlyNote:
        "La mensualidad cubre alojamiento, mantenimiento técnico, soporte, medición y pequeñas mejoras según el plan.",
      addonsNote:
        "También podemos añadir agente IA avanzado, vídeos, creativos, automatizaciones o dashboards según el proyecto.",
      plans: [
        {
          name: "Landing de captación",
          description: "Para validar una oferta concreta o empezar a captar solicitudes.",
          price: "Desde 1.500€ + 150€/mes",
          badge: "",
          features: [
            "1 landing",
            "Copy comercial",
            "WhatsApp o formulario",
            "Medición básica",
            "Publicación",
            "Mantenimiento técnico",
          ],
          cta: "Pedir diagnóstico",
          href: "/#booking",
          highlighted: false,
        },
        {
          name: "Sistema comercial",
          description:
            "Para negocios que quieren una web clara y un sistema simple para recibir y seguir leads.",
          price: "Desde 3.000€ + 350€/mes",
          badge: "Más elegido",
          features: [
            "Hasta 5 páginas",
            "Mensaje y estructura comercial",
            "Formulario o WhatsApp medido",
            "Panel de leads",
            "Automatización de aviso",
            "5 creativos",
            "Revisión mensual",
          ],
          cta: "Reservar sprint",
          href: "/#booking",
          highlighted: true,
        },
        {
          name: "Growth local",
          description: "Para negocios que quieren captar, medir y mejorar cada mes.",
          price: "Desde 5.000€ + 950€/mes",
          badge: "",
          features: [
            "Web o landing",
            "Panel de leads",
            "Automatizaciones",
            "Creativos mensuales",
            "Optimización mensual",
            "Reporting",
            "Soporte prioritario",
          ],
          cta: "Hablar con unostudio",
          href: "/#booking",
          highlighted: false,
        },
      ],
      adManagementNote: "Gestión de anuncios desde 650€/mes. La inversión publicitaria va aparte.",
      upsellsTitle: "También podemos añadir",
      upsells: [
        { name: "Gestión de Meta Ads", price: "Desde 650€/mes + inversión publicitaria" },
        { name: "Pack de vídeos IA", price: "Desde 500€" },
        { name: "Sistema de reseñas", price: "Desde 400€" },
        { name: "Automatización avanzada", price: "Desde 750€" },
      ],
    },
    booking: {
      eyebrow: "Agenda",
      title: "Pide un diagnóstico de tu captación",
      body:
        "En 15 minutos vemos tu web, tu oferta y cómo llegan ahora tus clientes. Te diremos qué cambiaríamos primero para conseguir más solicitudes.",
      bullets: ["Sin compromiso", "Sin lenguaje técnico", "Con próximos pasos claros"],
      cta: "Reservar diagnóstico",
      calendarTitle: "Calendario unostudio",
      calendarMeta: "15 min · videollamada",
    },
    cta: {
      title: "Veamos dónde se pierden tus solicitudes.",
      body:
        "Cuéntanos qué vendes, cómo llegan ahora tus clientes y qué presupuesto quieres captar mejor. Te diremos el primer cambio con más impacto.",
      primaryCta: "Pedir diagnóstico",
      secondaryCta: "Ver planes",
    },
    footer: {
      description:
        "Sistemas de captación para negocios locales de ticket alto. Web, seguimiento de leads, creativos y automatización simple.",
      servicesTitle: "Servicios",
      agencyTitle: "Agencia",
      contactTitle: "Contacto",
      legalTitle: "Legal",
      services: [
        { label: "Página de captación", href: "/#features" },
        { label: "Panel de leads", href: "/#features" },
        { label: "Planes", href: "/#pricing" },
      ],
      agency: [
        { label: "Método", href: "/#impact" },
        { label: "Diagnóstico", href: "/#booking" },
        { label: "Qué hacemos", href: "/#features" },
      ],
      contact: [
        { label: "Contacto", href: "/contacto" },
        { label: "hola@unostudio.org", href: "mailto:hola@unostudio.org" },
        { label: "unostudio.org", href: "https://unostudio.org" },
        { label: "Propuesta", href: "mailto:hola@unostudio.org?subject=Propuesta%20web" },
      ],
      legal: [
        { label: "Aviso legal", href: "/legal/aviso-legal" },
        { label: "Privacidad", href: "/legal/privacidad" },
        { label: "Cookies", href: "/legal/cookies" },
        { label: "Términos", href: "/legal/terminos" },
      ],
      cookieSettings: "Configurar cookies",
      rights: "Todos los derechos reservados.",
    },
  },
  en: {
    nav: {
      services: "What we do",
      process: "Diagnosis",
      plans: "Plans",
      bookCall: "Request diagnosis",
    },
    hero: {
      badge: "Local lead capture + website + creatives",
      title: "More quote requests\nfrom your website,\nInstagram, and ads.",
      subtitle:
        "For high-ticket local businesses: renovations, interior design, architecture, and real estate. We set up a clear page, WhatsApp/form lead capture, lead follow-up, and creatives to turn visits into real opportunities.",
      primaryCta: "Request free diagnosis",
      secondaryCta: "View plans",
      proofPoints: [
        "Landing page in 14 days",
        "Leads organized in a simple panel",
        "Creatives ready for ads",
      ],
    },
    perception: {
      eyebrow: "Blind spot",
      title: "Your website may be losing quote requests without you seeing it.",
      subtitle:
        "If someone lands there, does not quickly understand what you do, does not trust it, or does not know how to ask for a quote, they leave. We organize the message, page, and follow-up so more visits become conversations.",
      beforeTitle: "Before",
      afterTitle: "After",
      beforePoints: ["Confusing website", "WhatsApp hard to find", "No follow-up"],
      afterPoints: ["Clear offer", "Measured form or WhatsApp", "Organized leads"],
    },
    impact: {
      eyebrow: "unostudio method",
      title: "First we understand how you sell. Then we design.",
      body:
        "Before touching the website, we review your offer, your clients, your objections, and how contacts arrive today. This way the page does not only look good: it helps get better requests.",
      steps: [
        {
          number: "01",
          title: "Diagnosis",
          body: "We see what you sell, who you sell to, and where opportunities are lost.",
        },
        {
          number: "02",
          title: "System",
          body: "We create the landing page, form/WhatsApp, and lead panel.",
        },
        {
          number: "03",
          title: "Improvement",
          body: "We measure what comes in and adjust message, creatives, and follow-up.",
        },
      ],
    },
    features: {
      eyebrow: "What we do",
      title: "What we set up for you",
      body:
        "A simple system to explain your offer better, receive requests, and know which lead needs the next action.",
      items: [
        {
          title: "A page that sells clearly",
          body: "A simple landing page or website to explain your offer and guide people to contact.",
        },
        {
          title: "Measured WhatsApp or form",
          body: "Every request comes in with name, phone, service, and source.",
        },
        {
          title: "Lead panel",
          body: "A simple panel to know who asked for a quote, status, and next action.",
        },
        {
          title: "Creatives to capture attention",
          body: "Visual assets to test on Instagram, TikTok, or Meta Ads.",
        },
      ],
      experienceTitle: "Real experience capturing attention online",
      experienceBody:
        "Luca generated more than 1M TikTok views in one month and €7,000 in revenue in another project in 3 months from 0. At unostudio we apply that learning to pages, creatives, and lead capture systems for local businesses.",
    },
    pricing: {
      eyebrow: "Plans",
      title: "Plans",
      body:
        "Guideline pricing. Final investment depends on scope, urgency, and whether we include creatives, ads, or automations.",
      billingPrimary: "Project + monthly",
      minimumNote: "All plans include monthly maintenance with a 6-month minimum.",
      monthlyNote:
        "The monthly fee covers hosting, technical maintenance, support, measurement, and small improvements depending on the plan.",
      addonsNote:
        "We can also add an advanced AI agent, videos, creative assets, automations, or dashboards depending on the project.",
      plans: [
        {
          name: "Lead capture landing",
          description: "For validating one specific offer or starting to capture requests.",
          price: "From €1,500 + €150/mo",
          badge: "",
          features: [
            "1 landing page",
            "Commercial copy",
            "WhatsApp or form",
            "Basic measurement",
            "Publishing",
            "Technical maintenance",
          ],
          cta: "Request diagnosis",
          href: "/#booking",
          highlighted: false,
        },
        {
          name: "Commercial system",
          description:
            "For businesses that want a clear website and a simple system to receive and follow up with leads.",
          price: "From €3,000 + €350/mo",
          badge: "Most chosen",
          features: [
            "Up to 5 pages",
            "Message and commercial structure",
            "Measured form or WhatsApp",
            "Lead panel",
            "Alert automation",
            "5 creatives",
            "Monthly review",
          ],
          cta: "Book sprint",
          href: "/#booking",
          highlighted: true,
        },
        {
          name: "Local growth",
          description: "For businesses that want to capture, measure, and improve every month.",
          price: "From €5,000 + €950/mo",
          badge: "",
          features: [
            "Website or landing page",
            "Lead panel",
            "Automations",
            "Monthly creatives",
            "Monthly optimization",
            "Reporting",
            "Priority support",
          ],
          cta: "Talk to unostudio",
          href: "/#booking",
          highlighted: false,
        },
      ],
      adManagementNote: "Ads management from €650/mo. Ad spend is separate.",
      upsellsTitle: "We can also add",
      upsells: [
        { name: "Meta Ads management", price: "From €650/mo + ad spend" },
        { name: "AI video pack", price: "From €500" },
        { name: "Review system", price: "From €400" },
        { name: "Advanced automation", price: "From €750" },
      ],
    },
    booking: {
      eyebrow: "Booking",
      title: "Request a diagnosis of your lead capture",
      body:
        "In 15 minutes we review your website, your offer, and how clients arrive today. We will tell you what we would change first to get more requests.",
      bullets: ["No commitment", "No technical language", "Clear next steps"],
      cta: "Book diagnosis",
      calendarTitle: "unostudio calendar",
      calendarMeta: "15 min · video call",
    },
    cta: {
      title: "Let's find where your quote requests are being lost.",
      body:
        "Tell us what you sell, how clients arrive today, and which quote requests you want to capture better. We will point to the first change with the most impact.",
      primaryCta: "Request diagnosis",
      secondaryCta: "View plans",
    },
    footer: {
      description:
        "Lead capture systems for high-ticket local businesses. Website, lead follow-up, creatives, and simple automation.",
      servicesTitle: "Services",
      agencyTitle: "Agency",
      contactTitle: "Contact",
      legalTitle: "Legal",
      services: [
        { label: "Lead capture page", href: "/#features" },
        { label: "Lead panel", href: "/#features" },
        { label: "Plans", href: "/#pricing" },
      ],
      agency: [
        { label: "Method", href: "/#impact" },
        { label: "Diagnosis", href: "/#booking" },
        { label: "What we do", href: "/#features" },
      ],
      contact: [
        { label: "Contact", href: "/contacto" },
        { label: "hola@unostudio.org", href: "mailto:hola@unostudio.org" },
        { label: "unostudio.org", href: "https://unostudio.org" },
        { label: "Proposal", href: "mailto:hola@unostudio.org?subject=Website%20proposal" },
      ],
      legal: [
        { label: "Legal notice", href: "/legal/aviso-legal" },
        { label: "Privacy", href: "/legal/privacidad" },
        { label: "Cookies", href: "/legal/cookies" },
        { label: "Terms", href: "/legal/terminos" },
      ],
      cookieSettings: "Cookie settings",
      rights: "All rights reserved.",
    },
  },
} as const
