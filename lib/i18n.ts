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
      badge: "Webs para conseguir presupuestos, no solo visitas",
      title: "Una web clara y rápida para que más clientes te pidan presupuesto por WhatsApp.",
      subtitle:
        "Para reformas, interiorismo, arquitectura e inmobiliarias. Diseñamos una web que explica bien lo que haces, transmite confianza y convierte visitas en contactos reales.",
      primaryCta: "Pedir demo gratis",
      secondaryCta: "Ver ejemplos",
      proofPoints: [
        "Demo visual personalizada",
        "Lista en 7-10 días",
        "Desde 500€ + 99€/mes",
      ],
    },
    projects: {
      eyebrow: "Algunos proyectos",
      title: "Ejemplos reales de webs pensadas para explicar mejor y recibir contactos.",
      body:
        "Sin métricas inventadas. Proyectos orientados a mejorar claridad, imagen y contacto.",
      cta: "Ver proyectos",
      items: [
        {
          name: "Saduni Reformas",
          type: "Web pensada para presupuestos",
          points: ["Estructura clara por servicios", "CTA a WhatsApp", "Mensaje directo para pedir presupuesto"],
        },
        {
          name: "Mocha Studio",
          type: "Imagen más premium",
          points: ["Diseño más elegante", "Mejor presentación del servicio", "Página enfocada a confianza"],
        },
        {
          name: "Bierwinkel Campanar",
          type: "Presencia local clara",
          points: ["Carta, reservas y ubicación", "Experiencia móvil más limpia", "Información clave más fácil de encontrar"],
        },
      ],
    },
    perception: {
      eyebrow: "El problema real",
      title: "No necesitas solo una web bonita. Necesitas que la gente te escriba.",
      subtitle:
        "Muchos negocios tienen una web, Instagram o Google Maps, pero cuando alguien entra no entiende rápido qué hacen, no ve suficiente confianza o no sabe cómo pedir presupuesto. Ahí se pierden clientes.",
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
          title: "La publicamos y mejoramos",
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
      experienceTitle: "Web, diseño y contenido en un mismo sitio",
      experienceBody:
        "Uno Studio combina diseño web, copy, edición visual y automatización simple para crear páginas rápidas y enfocadas a captar mejor. No dependemos de plantillas genéricas: adaptamos cada página al negocio.",
    },
    audience: {
      eyebrow: "Para quién es",
      title: "Ideal para negocios que quieren vender mejor, no solo verse mejor.",
      body:
        "Funciona mejor cuando ya tienes un servicio claro y quieres que la web explique mejor, genere confianza y facilite el contacto.",
      goodTitle: "Encaja si eres",
      good: [
        "Empresa de reformas",
        "Estudio de interiorismo",
        "Arquitecto o estudio técnico",
        "Inmobiliaria",
        "Negocio local con ticket medio o alto",
        "Negocio que ya recibe contactos, pero quiere mejorar imagen y conversión",
      ],
      badTitle: "No es para",
      bad: ["Ecommerce complejo", "Proyecto grande totalmente a medida", "Negocio que necesita una app completa"],
    },
    pricing: {
      eyebrow: "Precios piloto",
      title: "Empieza con una web clara, rápida y mantenida.",
      body:
        "Estos precios son para los primeros negocios con los que estamos creando casos reales. Cuando se completen las plazas piloto, subirán.",
      billingPrimary: "Proyecto + mensualidad",
      minimumNote: "La mensualidad mínima es de 6 meses para mantenimiento, soporte y alojamiento.",
      monthlyNote:
        "La mensualidad incluye alojamiento, mantenimiento técnico, soporte, hasta 3 cambios pequeños al mes, actualizaciones, medición básica y ayuda si algo falla.",
      plans: [
        {
          name: "Demo inicial",
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
          name: "Web Express",
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
          cta: "Quiero una Web Express",
          href: "/#booking",
          highlighted: true,
        },
        {
          name: "Web Pro",
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
      adManagementNote: "Proyectos más complejos se presupuestan aparte.",
    },
    booking: {
      eyebrow: "Demo",
      title: "Pide una demo para tu negocio",
      body:
        "Cuéntame tu negocio y te enseño cómo podría verse una web más clara, moderna y enfocada a recibir presupuestos.",
      bullets: ["Sin compromiso", "Demo visual", "Próximos pasos claros"],
      cta: "Quiero mi demo",
      whatsappCta: "O hablar por WhatsApp",
      form: {
        name: "Nombre",
        company: "Negocio",
        website: "Web actual o Instagram",
        phone: "WhatsApp",
        message: "Qué necesitas",
        privacy: "He leído y acepto la Política de Privacidad.",
      },
    },
    faq: {
      eyebrow: "FAQ",
      title: "Dudas normales antes de pedir una demo.",
      items: [
        {
          question: "¿Cuánto tardas en hacer la web?",
          answer: "Entre 7 y 10 días en proyectos sencillos.",
        },
        {
          question: "¿Qué incluye la mensualidad?",
          answer:
            "Alojamiento, mantenimiento técnico, soporte, hasta 3 cambios pequeños al mes, actualizaciones, medición básica y ayuda si algo falla.",
        },
        {
          question: "¿Tengo que pagar todo al principio?",
          answer: "No. Hay un pago inicial y luego una mensualidad.",
        },
        {
          question: "¿Sirve si ya tengo Instagram o Google Maps?",
          answer:
            "Sí. La web ayuda a que quien te descubre entienda mejor tu servicio y te contacte con más confianza.",
        },
        {
          question: "¿La demo es gratuita?",
          answer: "Sí, te enseño una propuesta inicial sin compromiso.",
        },
        {
          question: "¿Trabajas solo con ciertos sectores?",
          answer:
            "Principalmente con reformas, interiorismo, arquitectura, inmobiliarias y negocios locales.",
        },
      ],
    },
    cta: {
      title: "Veamos cómo podría quedar tu web.",
      body:
        "Si tienes un negocio local y quieres una web más clara, rápida y enfocada a recibir contactos, podemos prepararte una demo visual y decirte qué mejoraríamos primero.",
      primaryCta: "Pedir demo",
      secondaryCta: "Ver ejemplos",
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
      badge: "Websites to get quote requests, not only visits",
      title: "A clear, fast website so more clients ask for quotes on WhatsApp.",
      subtitle:
        "For renovations, interior design, architecture, and real estate. We design a website that explains what you do, builds trust, and turns visits into real contacts.",
      primaryCta: "Request free demo",
      secondaryCta: "View examples",
      proofPoints: [
        "Personalized visual demo",
        "Ready in 7-10 days",
        "From €500 + €99/mo",
      ],
    },
    projects: {
      eyebrow: "Some projects",
      title: "Real examples of websites designed to explain better and receive contacts.",
      body:
        "No invented metrics. Projects focused on improving clarity, image, and contact.",
      cta: "View projects",
      items: [
        {
          name: "Saduni Reformas",
          type: "Website designed for quote requests",
          points: ["Clear service structure", "WhatsApp CTA", "Direct message to request a quote"],
        },
        {
          name: "Mocha Studio",
          type: "More premium image",
          points: ["More elegant design", "Better service presentation", "Page focused on trust"],
        },
        {
          name: "Bierwinkel Campanar",
          type: "Clear local presence",
          points: ["Menu, bookings, and location", "Cleaner mobile experience", "Key information easier to find"],
        },
      ],
    },
    perception: {
      eyebrow: "The real problem",
      title: "You do not only need a pretty website. You need people to write to you.",
      subtitle:
        "Many businesses have a website, Instagram, or Google Maps, but when someone lands there they do not quickly understand what the business does, do not see enough trust, or do not know how to ask for a quote. That is where clients are lost.",
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
          title: "We publish and improve it",
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
      experienceTitle: "Web, design, and content in one place",
      experienceBody:
        "Uno Studio combines web design, copy, visual editing, and simple automation to create fast pages focused on better lead capture. We do not depend on generic templates: every page adapts to the business.",
    },
    audience: {
      eyebrow: "Who it is for",
      title: "Ideal for businesses that want to sell better, not only look better.",
      body:
        "It works best when you already have a clear service and want your website to explain it better, build trust, and make contact easier.",
      goodTitle: "Good fit if you are",
      good: [
        "Renovation company",
        "Interior design studio",
        "Architect or technical studio",
        "Real estate business",
        "Local business with a mid or high ticket",
        "Business that already receives contacts but wants better image and conversion",
      ],
      badTitle: "Not for",
      bad: ["Complex ecommerce", "Large fully custom project", "Business that needs a full app"],
    },
    pricing: {
      eyebrow: "Pilot pricing",
      title: "Start with a clear, fast, maintained website.",
      body:
        "These prices are for the first businesses we are building real cases with. When pilot spots are filled, prices will go up.",
      billingPrimary: "Project + monthly",
      minimumNote: "The minimum monthly term is 6 months for maintenance, support, and hosting.",
      monthlyNote:
        "The monthly fee includes hosting, technical maintenance, support, up to 3 small changes per month, updates, basic measurement, and help if something breaks.",
      plans: [
        {
          name: "Initial demo",
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
          name: "Web Express",
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
          cta: "I want Web Express",
          href: "/#booking",
          highlighted: true,
        },
        {
          name: "Web Pro",
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
      adManagementNote: "More complex projects are quoted separately.",
    },
    booking: {
      eyebrow: "Demo",
      title: "Request a demo for your business",
      body:
        "Tell me about your business and I will show you how a clearer, more modern website focused on quote requests could look.",
      bullets: ["No commitment", "Visual demo", "Clear next steps"],
      cta: "I want my demo",
      whatsappCta: "Or talk on WhatsApp",
      form: {
        name: "Name",
        company: "Business",
        website: "Current website or Instagram",
        phone: "WhatsApp",
        message: "What do you need?",
        privacy: "I have read and accept the Privacy Policy.",
      },
    },
    faq: {
      eyebrow: "FAQ",
      title: "Normal questions before asking for a demo.",
      items: [
        {
          question: "How long does the website take?",
          answer: "Between 7 and 10 days for simple projects.",
        },
        {
          question: "What does the monthly fee include?",
          answer:
            "Hosting, technical maintenance, support, up to 3 small changes per month, updates, basic measurement, and help if something breaks.",
        },
        {
          question: "Do I have to pay everything upfront?",
          answer: "No. There is an initial payment and then a monthly fee.",
        },
        {
          question: "Does it work if I already have Instagram or Google Maps?",
          answer:
            "Yes. The website helps people who discover you understand your service better and contact you with more trust.",
        },
        {
          question: "Is the demo free?",
          answer: "Yes, I show you an initial proposal with no commitment.",
        },
        {
          question: "Do you only work with certain sectors?",
          answer:
            "Mainly renovations, interior design, architecture, real estate, and local businesses.",
        },
      ],
    },
    cta: {
      title: "Let's see how your website could look.",
      body:
        "If you have a local business and want a clearer, faster website focused on receiving contacts, we can prepare a visual demo and tell you what we would improve first.",
      primaryCta: "Request demo",
      secondaryCta: "View examples",
    },
    footer: {
      description:
        "Clear websites for local businesses. Website, WhatsApp/form, maintenance, and simple automation.",
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
