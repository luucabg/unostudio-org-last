export type Locale = "es" | "en"

export const languages: Array<{ code: Locale; label: string; shortLabel: string }> = [
  { code: "es", label: "Español", shortLabel: "ES" },
  { code: "en", label: "English", shortLabel: "EN" },
]

export const translations = {
  es: {
    nav: {
      services: "Qué incluye",
      process: "Cómo funciona",
      plans: "Precios",
      bookCall: "Pedir demo",
    },
    hero: {
      badge: "Webs rápidas + captación local + IA",
      title: "Te preparo una web de captación\npara que tu negocio reciba\nmás presupuestos.",
      subtitle:
        "Para reformas, interiorismo, arquitectura, inmobiliarias y negocios locales. Creamos una web rápida, moderna y enfocada a WhatsApp/formulario, con textos claros y seguimiento básico para no perder clientes interesados.",
      primaryCta: "Quiero una demo de mi negocio",
      secondaryCta: "Ver precios piloto",
      proofPoints: [
        "Demo visual personalizada",
        "Web publicada en 7-10 días",
        "Desde 500€ + 99€/mes en fase piloto",
      ],
    },
    perception: {
      eyebrow: "El problema real",
      title: "No necesitas solo una web bonita. Necesitas que la gente te escriba.",
      subtitle:
        "Muchos negocios tienen una web, Instagram o Google Maps, pero cuando alguien entra no entiende rápido qué ofrecen, no ve confianza o no sabe cómo pedir presupuesto. Ahí se pierden clientes.",
      beforeTitle: "Antes",
      afterTitle: "Después",
      beforePoints: ["Web que no explica bien", "WhatsApp genérico", "Leads sin seguimiento"],
      afterPoints: ["Mensaje claro", "WhatsApp preparado", "Solicitudes mejor filtradas"],
    },
    impact: {
      eyebrow: "Cómo funciona",
      title: "Te enseñamos algo antes de que tengas que decidir.",
      body:
        "En vez de venderte una web a ciegas, preparamos una demo visual de cómo podría verse tu página y qué cambiaríamos para que reciba mejores solicitudes.",
      steps: [
        {
          number: "01",
          title: "Vemos tu negocio",
          body: "Miramos tu web, Instagram, Google Maps y cómo te contactan ahora.",
        },
        {
          number: "02",
          title: "Preparamos una demo",
          body: "Creamos una primera versión visual enfocada a WhatsApp, confianza y presupuestos.",
        },
        {
          number: "03",
          title: "La convertimos en sistema",
          body: "Si te encaja, la publicamos, medimos contactos y hacemos pequeñas mejoras cada mes.",
        },
      ],
    },
    features: {
      eyebrow: "Qué incluye",
      title: "Una web pensada para convertir visitas en conversaciones.",
      body:
        "No hacemos una web decorativa. Creamos una página rápida, clara y preparada para que el cliente entienda tu servicio y te escriba con contexto.",
      items: [
        {
          title: "Web rápida y moderna",
          body: "Diseño responsive, carga rápida y estructura clara para explicar qué haces y por qué confiar en ti.",
        },
        {
          title: "Textos que venden claro",
          body: "Organizamos tu oferta, servicios, objeciones y llamadas a la acción para que la web no sea solo bonita.",
        },
        {
          title: "WhatsApp preparado",
          body: "El cliente no abre un mensaje vacío: llega con una frase guiada para pedir presupuesto con más contexto.",
        },
        {
          title: "Mantenimiento mensual",
          body: "Alojamiento, cambios pequeños, soporte técnico y mejoras para que no tengas que tocar nada.",
        },
      ],
      experienceTitle: "Web, diseño, vídeo e IA en un mismo sitio",
      experienceBody:
        "Uno Studio combina diseño web, copy, edición visual, automatización e IA para crear páginas rápidas y enfocadas a captar mejor. No dependemos de plantillas genéricas: adaptamos cada página al negocio.",
    },
    pricing: {
      eyebrow: "Precios piloto",
      title: "Empieza con una web clara, rápida y mantenida.",
      body:
        "Estos precios son para los primeros negocios con los que estamos creando casos reales. Cuando se completen las plazas piloto, subirán.",
      billingPrimary: "Proyecto + mensualidad",
      minimumNote: "La mensualidad mínima es de 6 meses para mantenimiento, soporte y alojamiento.",
      monthlyNote:
        "La mensualidad cubre alojamiento, mantenimiento técnico, pequeños cambios, soporte y medición básica.",
      addonsNote:
        "Podemos añadir panel de leads, automatizaciones, vídeos, creativos o campañas según el proyecto.",
      plans: [
        {
          name: "Demo personalizada",
          description: "Para ver cómo podría quedar tu negocio antes de decidir.",
          price: "Gratis",
          badge: "",
          features: [
            "Revisión rápida de tu negocio",
            "Primera propuesta visual",
            "Ideas de mejora",
            "Sin compromiso",
          ],
          cta: "Pedir demo",
          href: "/#booking",
          highlighted: false,
        },
        {
          name: "Web piloto",
          description:
            "Para negocios que quieren una web moderna, rápida y enfocada a recibir contactos.",
          price: "500€ + 99€/mes",
          badge: "Mejor para empezar",
          features: [
            "Web de 1 página",
            "Diseño responsive",
            "Copy comercial",
            "WhatsApp preparado",
            "Formulario básico",
            "Alojamiento y mantenimiento",
            "Pequeños cambios mensuales",
          ],
          cta: "Quiero una web piloto",
          href: "/#booking",
          highlighted: true,
        },
        {
          name: "Sistema de captación",
          description: "Para negocios que quieren algo más completo que una web básica.",
          price: "900€ + 149€/mes",
          badge: "",
          features: [
            "Hasta 5 secciones/páginas",
            "Estructura comercial avanzada",
            "Formulario de presupuesto",
            "WhatsApp medido",
            "Analítica básica",
            "Mejoras mensuales",
            "Soporte prioritario",
          ],
          cta: "Pedir propuesta",
          href: "/#booking",
          highlighted: false,
        },
      ],
      adManagementNote: "Los precios piloto son limitados. Proyectos más complejos se presupuestan aparte.",
      upsellsTitle: "También podemos añadir",
      upsells: [
        { name: "Pack de vídeos", price: "Desde 300€" },
        { name: "Sistema de reseñas", price: "Desde 250€" },
        { name: "Panel de leads", price: "Desde 400€" },
        { name: "Automatizaciones IA", price: "Desde 500€" },
      ],
    },
    booking: {
      eyebrow: "Demo",
      title: "Pide una demo visual para tu negocio",
      body:
        "En vez de explicarte una web en abstracto, revisamos tu negocio y te enseñamos cómo podría verse una página más clara, moderna y enfocada a recibir presupuestos.",
      bullets: ["Sin compromiso", "Demo visual", "Próximos pasos claros"],
      cta: "Pedir demo",
      calendarTitle: "Calendario unostudio",
      calendarMeta: "15 min · videollamada",
    },
    cta: {
      title: "Veamos cómo podría quedar tu web.",
      body:
        "Si tienes un negocio local y quieres una web más clara, rápida y enfocada a recibir contactos, podemos prepararte una demo visual y decirte qué mejoraríamos primero.",
      primaryCta: "Pedir demo",
      secondaryCta: "Ver precios",
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
        { label: "Precios", href: "/#pricing" },
      ],
      agency: [
        { label: "Cómo funciona", href: "/#impact" },
        { label: "Demo", href: "/#booking" },
        { label: "Qué incluye", href: "/#features" },
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
      services: "What's included",
      process: "How it works",
      plans: "Pricing",
      bookCall: "Request demo",
    },
    hero: {
      badge: "Fast websites + local lead capture + AI",
      title: "I build you a lead capture website\nso your business gets\nmore quote requests.",
      subtitle:
        "For renovations, interior design, architecture, real estate, and local businesses. We create a fast, modern website focused on WhatsApp/forms, with clear copy and basic follow-up so interested clients do not get lost.",
      primaryCta: "I want a demo for my business",
      secondaryCta: "View pilot pricing",
      proofPoints: [
        "Personalized visual demo",
        "Website live in 7-10 days",
        "From €500 + €99/mo in pilot phase",
      ],
    },
    perception: {
      eyebrow: "The real problem",
      title: "You do not only need a pretty website. You need people to write to you.",
      subtitle:
        "Many businesses have a website, Instagram, or Google Maps, but when someone lands there they do not quickly understand what is offered, do not see trust, or do not know how to ask for a quote. That is where clients are lost.",
      beforeTitle: "Before",
      afterTitle: "After",
      beforePoints: ["Website does not explain well", "Generic WhatsApp", "Leads without follow-up"],
      afterPoints: ["Clear message", "Prepared WhatsApp", "Better filtered requests"],
    },
    impact: {
      eyebrow: "How it works",
      title: "We show you something before you have to decide.",
      body:
        "Instead of selling you a website blindly, we prepare a visual demo of how your page could look and what we would change so it receives better requests.",
      steps: [
        {
          number: "01",
          title: "We review your business",
          body: "We look at your website, Instagram, Google Maps, and how people contact you now.",
        },
        {
          number: "02",
          title: "We prepare a demo",
          body: "We create a first visual version focused on WhatsApp, trust, and quote requests.",
        },
        {
          number: "03",
          title: "We turn it into a system",
          body: "If it fits, we publish it, measure contacts, and make small improvements every month.",
        },
      ],
    },
    features: {
      eyebrow: "What's included",
      title: "A website designed to turn visits into conversations.",
      body:
        "We do not build a decorative website. We create a fast, clear page prepared so clients understand your service and write to you with context.",
      items: [
        {
          title: "Fast modern website",
          body: "Responsive design, fast loading, and clear structure to explain what you do and why people should trust you.",
        },
        {
          title: "Copy that sells clearly",
          body: "We organize your offer, services, objections, and calls to action so the website is not only pretty.",
        },
        {
          title: "Prepared WhatsApp",
          body: "Clients do not open an empty message: it comes with a guided phrase to request a quote with more context.",
        },
        {
          title: "Monthly maintenance",
          body: "Hosting, small changes, technical support, and improvements so you do not have to touch anything.",
        },
      ],
      experienceTitle: "Web, design, video, and AI in one place",
      experienceBody:
        "Uno Studio combines web design, copy, visual editing, automation, and AI to create fast pages focused on better lead capture. We do not depend on generic templates: every page adapts to the business.",
    },
    pricing: {
      eyebrow: "Pilot pricing",
      title: "Start with a clear, fast, maintained website.",
      body:
        "These prices are for the first businesses we are building real cases with. When pilot spots are filled, prices will go up.",
      billingPrimary: "Project + monthly",
      minimumNote: "The minimum monthly term is 6 months for maintenance, support, and hosting.",
      monthlyNote:
        "The monthly fee covers hosting, technical maintenance, small changes, support, and basic measurement.",
      addonsNote:
        "We can add a lead panel, automations, videos, creatives, or campaigns depending on the project.",
      plans: [
        {
          name: "Personalized demo",
          description: "To see how your business could look before deciding.",
          price: "Free",
          badge: "",
          features: [
            "Quick review of your business",
            "First visual proposal",
            "Improvement ideas",
            "No commitment",
          ],
          cta: "Request demo",
          href: "/#booking",
          highlighted: false,
        },
        {
          name: "Pilot website",
          description:
            "For businesses that want a modern, fast website focused on receiving contacts.",
          price: "€500 + €99/mo",
          badge: "Best to start",
          features: [
            "1-page website",
            "Responsive design",
            "Commercial copy",
            "Prepared WhatsApp",
            "Basic form",
            "Hosting and maintenance",
            "Small monthly changes",
          ],
          cta: "I want a pilot website",
          href: "/#booking",
          highlighted: true,
        },
        {
          name: "Lead capture system",
          description: "For businesses that want something more complete than a basic website.",
          price: "€900 + €149/mo",
          badge: "",
          features: [
            "Up to 5 sections/pages",
            "Advanced commercial structure",
            "Quote request form",
            "Measured WhatsApp",
            "Basic analytics",
            "Monthly improvements",
            "Priority support",
          ],
          cta: "Request proposal",
          href: "/#booking",
          highlighted: false,
        },
      ],
      adManagementNote: "Pilot prices are limited. More complex projects are quoted separately.",
      upsellsTitle: "We can also add",
      upsells: [
        { name: "Video pack", price: "From €300" },
        { name: "Review system", price: "From €250" },
        { name: "Lead panel", price: "From €400" },
        { name: "AI automations", price: "From €500" },
      ],
    },
    booking: {
      eyebrow: "Demo",
      title: "Request a visual demo for your business",
      body:
        "Instead of explaining a website in the abstract, we review your business and show you how a clearer, more modern page focused on receiving quote requests could look.",
      bullets: ["No commitment", "Visual demo", "Clear next steps"],
      cta: "Request demo",
      calendarTitle: "unostudio calendar",
      calendarMeta: "15 min · video call",
    },
    cta: {
      title: "Let's see how your website could look.",
      body:
        "If you have a local business and want a clearer, faster website focused on receiving contacts, we can prepare a visual demo and tell you what we would improve first.",
      primaryCta: "Request demo",
      secondaryCta: "View pricing",
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
        { label: "Pricing", href: "/#pricing" },
      ],
      agency: [
        { label: "How it works", href: "/#impact" },
        { label: "Demo", href: "/#booking" },
        { label: "What's included", href: "/#features" },
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
