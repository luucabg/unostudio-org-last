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
      bookCall: "Pedir demo gratis",
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
        "Desde 490€ + 99€/mes",
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
      eyebrow: "Precios de lanzamiento",
      title: "Elige cuánto quieres mejorar tu presencia online.",
      body:
        "Precios pensados para cerrar rápido los primeros casos reales sin parecer una web barata. La demo va aparte y es gratuita.",
      reservationNote:
        "Puedes pedir una demo gratis antes de decidir. Si ya lo tienes claro, puedes reservar tu plaza con una señal que se descuenta del precio final.",
      refundNote:
        "La reserva no garantiza la aceptación del proyecto si no encaja con el servicio. En ese caso, se devuelve el importe.",
      billingPrimary: "Pago inicial + mantenimiento",
      minimumNote: "Mantenimiento mínimo de 3 meses. Después puedes seguir mes a mes.",
      monthlyNote:
        "La mensualidad incluye alojamiento, mantenimiento técnico, soporte, actualizaciones, medición básica y pequeños cambios mensuales.",
      plans: [
        {
          name: "Web Esencial",
          description: "Para negocios que necesitan una web clara, rápida y lista para recibir contactos.",
          price: "490€ + 99€/mes",
          badge: "Entrada fácil",
          features: [
            "Landing de hasta 5 secciones",
            "Diseño responsive",
            "Textos comerciales",
            "WhatsApp preparado",
            "Formulario de contacto",
            "Alojamiento y mantenimiento",
            "Hasta 2 cambios pequeños al mes",
          ],
          cta: "Reservar por 99€",
          paymentNote: "Señal descontable del proyecto.",
          href: "/#booking",
          highlighted: false,
        },
        {
          name: "Web Pro",
          description:
            "Para negocios que quieren una web más completa, mejor estructurada y orientada a presupuestos.",
          price: "990€ + 149€/mes",
          badge: "Mejor opción",
          features: [
            "Hasta 5 páginas o secciones avanzadas",
            "Estructura comercial completa",
            "Formulario de presupuesto",
            "WhatsApp con mensaje guiado",
            "Analítica básica",
            "Hasta 4 cambios pequeños al mes",
            "Soporte prioritario",
          ],
          cta: "Reservar por 149€",
          paymentNote: "Señal descontable del proyecto.",
          href: "/#booking",
          highlighted: true,
        },
        {
          name: "Sistema Local",
          description: "Para negocios que quieren web, seguimiento y una base simple para no perder oportunidades.",
          price: "1.490€ + 249€/mes",
          badge: "",
          features: [
            "Todo lo de Web Pro",
            "Panel simple de solicitudes",
            "Seguimiento básico de leads",
            "Sistema para pedir reseñas",
            "2 creativos iniciales",
            "Mejoras mensuales",
            "Soporte preferente",
          ],
          cta: "Pedir propuesta",
          paymentNote: "Para proyectos con seguimiento, panel o automatizaciones.",
          href: "/#booking",
          highlighted: false,
        },
      ],
      adManagementNote: "La demo visual es gratuita. Proyectos más complejos, ecommerce o apps se presupuestan aparte.",
    },
    booking: {
      eyebrow: "Demo",
      title: "Pide una demo gratis para tu negocio",
      body:
        "Déjame tu web o Instagram y te enseño cómo podría verse una página más clara, moderna y enfocada a recibir presupuestos.",
      bullets: ["Sin compromiso", "Demo visual", "Próximos pasos claros"],
      cta: "Quiero mi demo gratis",
      whatsappCta: "O hablar por WhatsApp",
      form: {
        name: "Nombre",
        business: "Negocio",
        website: "Web o Instagram",
        phone: "WhatsApp",
        need: "Qué necesitas",
        submit: "Enviar solicitud",
      },
    },
    faq: {
      eyebrow: "FAQ",
      title: "Dudas normales antes de empezar.",
      items: [
        {
          question: "¿Cuánto tardas en hacer la web?",
          answer: "Entre 7 y 10 días en proyectos sencillos.",
        },
        {
          question: "¿Qué incluye la mensualidad?",
          answer:
            "Alojamiento, mantenimiento técnico, soporte, actualizaciones, medición básica y pequeños cambios mensuales según el plan.",
        },
        {
          question: "¿Tengo que pagar todo al principio?",
          answer: "No. Hay un pago inicial y después una mensualidad de mantenimiento. El mínimo inicial es de 3 meses.",
        },
        {
          question: "¿Sirve si ya tengo Instagram o Google Maps?",
          answer:
            "Sí. La web ayuda a que quien te descubre entienda mejor tu servicio y te contacte con más confianza.",
        },
        {
          question: "¿La demo es gratuita?",
          answer: "Sí. La demo sirve para que veas una dirección visual antes de pagar por el proyecto completo.",
        },
        {
          question: "¿Trabajas solo con ciertos sectores?",
          answer:
            "Principalmente con reformas, interiorismo, arquitectura, inmobiliarias y negocios locales.",
        },
      ],
    },
    cta: {
      title: "Veamos si tu web puede vender mejor.",
      body:
        "Si tienes un negocio local y quieres una web más clara, rápida y enfocada a recibir contactos, te preparo una demo visual y te digo qué mejoraría primero.",
      primaryCta: "Pedir demo gratis",
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
      bookCall: "Request free demo",
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
        "From €490 + €99/mo",
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
      eyebrow: "Launch pricing",
      title: "Choose how much you want to improve your online presence.",
      body:
        "Prices designed to close the first real cases quickly without looking like a cheap website. The demo is separate and free.",
      reservationNote:
        "You can request a free demo before deciding. If you already have it clear, you can reserve your spot with a deposit that is deducted from the final price.",
      refundNote:
        "The reservation does not guarantee project acceptance if it is not a fit for the service. In that case, the amount is refunded.",
      billingPrimary: "Initial payment + maintenance",
      minimumNote: "Minimum maintenance term of 3 months. After that, you can continue month to month.",
      monthlyNote:
        "The monthly fee includes hosting, technical maintenance, support, updates, basic measurement, and small monthly changes.",
      plans: [
        {
          name: "Essential Web",
          description: "For businesses that need a clear, fast website ready to receive contacts.",
          price: "€490 + €99/mo",
          badge: "Easy entry",
          features: [
            "Landing page up to 5 sections",
            "Responsive design",
            "Commercial texts",
            "Prepared WhatsApp",
            "Contact form",
            "Hosting and maintenance",
            "Up to 2 small changes per month",
          ],
          cta: "Reserve for €99",
          paymentNote: "Deductible project deposit.",
          href: "/#booking",
          highlighted: false,
        },
        {
          name: "Web Pro",
          description:
            "For businesses that want a more complete, better structured website focused on quotes.",
          price: "€990 + €149/mo",
          badge: "Best option",
          features: [
            "Up to 5 pages or advanced sections",
            "Complete commercial structure",
            "Quote request form",
            "WhatsApp with guided message",
            "Basic analytics",
            "Up to 4 small changes per month",
            "Priority support",
          ],
          cta: "Reserve for €149",
          paymentNote: "Deductible project deposit.",
          href: "/#booking",
          highlighted: true,
        },
        {
          name: "Local System",
          description: "For businesses that want website, follow-up, and a simple base to avoid losing opportunities.",
          price: "€1,490 + €249/mo",
          badge: "",
          features: [
            "Everything in Web Pro",
            "Simple request panel",
            "Basic lead follow-up",
            "Review request system",
            "2 initial creatives",
            "Monthly improvements",
            "Preferred support",
          ],
          cta: "Request proposal",
          paymentNote: "For projects with follow-up, panel, or automations.",
          href: "/#booking",
          highlighted: false,
        },
      ],
      adManagementNote: "The visual demo is free. More complex projects, ecommerce, or apps are quoted separately.",
    },
    booking: {
      eyebrow: "Demo",
      title: "Request a free demo for your business",
      body:
        "Leave your website or Instagram and I will show you how a clearer, more modern page focused on quote requests could look.",
      bullets: ["No commitment", "Visual demo", "Clear next steps"],
      cta: "I want my free demo",
      whatsappCta: "Or talk on WhatsApp",
      form: {
        name: "Name",
        business: "Business",
        website: "Website or Instagram",
        phone: "WhatsApp",
        need: "What do you need?",
        submit: "Send request",
      },
    },
    faq: {
      eyebrow: "FAQ",
      title: "Normal questions before starting.",
      items: [
        {
          question: "How long does the website take?",
          answer: "Between 7 and 10 days for simple projects.",
        },
        {
          question: "What does the monthly fee include?",
          answer:
            "Hosting, technical maintenance, support, updates, basic measurement, and small monthly changes depending on the plan.",
        },
        {
          question: "Do I have to pay everything upfront?",
          answer: "No. There is an initial payment and then a maintenance monthly fee. The initial minimum is 3 months.",
        },
        {
          question: "Does it work if I already have Instagram or Google Maps?",
          answer:
            "Yes. The website helps people who discover you understand your service better and contact you with more trust.",
        },
        {
          question: "Is the demo free?",
          answer: "Yes. The demo lets you see a visual direction before paying for the full project.",
        },
        {
          question: "Do you only work with certain sectors?",
          answer:
            "Mainly renovations, interior design, architecture, real estate, and local businesses.",
        },
      ],
    },
    cta: {
      title: "Let's see if your website can sell better.",
      body:
        "If you have a local business and want a clearer, faster website focused on receiving contacts, I will prepare a visual demo and tell you what I would improve first.",
      primaryCta: "Request free demo",
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
