export type Locale = "es" | "en"

export const languages: Array<{ code: Locale; label: string; shortLabel: string }> = [
  { code: "es", label: "Español", shortLabel: "ES" },
  { code: "en", label: "English", shortLabel: "EN" },
]

export const translations = {
  es: {
    nav: {
      services: "Qué incluye",
      process: "Demo",
      plans: "Precios",
      bookCall: "Pedir demo gratis",
    },
    hero: {
      badge: "Webs que convierten visitas en contactos",
      title: "Una web clara para que más clientes te pidan presupuesto o reserva.",
      subtitle:
        "Creamos webs rápidas para negocios locales y profesionales: diseño moderno, textos claros y contacto preparado por WhatsApp, formulario o llamada.",
      primaryCta: "Pedir demo gratis",
      secondaryCta: "Ver ejemplos",
      proofPoints: [
        "Demo visual personalizada",
        "Lista en 7-10 días",
        "Desde 490€ + 99€/mes",
      ],
    },
    projects: {
      eyebrow: "Ejemplos",
      title: "Ejemplos de webs creadas para negocios reales.",
      body:
        "Diseños pensados para que el negocio se entienda rápido, se vea mejor y sea más fácil contactar.",
      cta: "Ver proyectos",
      items: [
        {
          name: "Saduni Reformas",
          type: "Reformas",
          url: "https://sadunireformas.com",
          displayUrl: "sadunireformas.com",
          image: "/projects/saduni-reformas.png",
          points: ["Servicios claros", "CTA a WhatsApp", "Presupuesto fácil"],
        },
        {
          name: "Mocha Studio",
          type: "Interiorismo",
          url: "https://mochastudio.es",
          displayUrl: "mochastudio.es",
          image: "/projects/mocha-studio.png",
          points: ["Imagen premium", "Diseño limpio", "Confianza visual"],
        },
        {
          name: "Bierwinkel Campanar",
          type: "Hostelería",
          url: "https://bierwinkelcampanar.es",
          displayUrl: "bierwinkelcampanar.es",
          image: "/projects/bierwinkel-campanar.png",
          points: ["Carta y reservas", "Ubicación clara", "Móvil optimizado"],
        },
        {
          name: "Kavkasioni Tours",
          type: "Turismo",
          url: "https://kavkasionitours.com",
          displayUrl: "kavkasionitours.com",
          image: "/projects/kavkasioni-tours.png",
          points: ["Imagen inmersiva", "Reserva clara", "Experiencia premium"],
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
      title: "Una web bonita no basta. Tiene que explicar y facilitar el contacto.",
      body:
        "Creamos una web clara, rápida y preparada para que el cliente entienda qué haces y pueda contactar sin perderse.",
      items: [
        {
          title: "Diseño web",
          body: "Web moderna, rápida y adaptada a móvil.",
        },
        {
          title: "Textos claros",
          body: "Explicamos qué haces, para quién y por qué elegirte.",
        },
        {
          title: "Contacto preparado",
          body: "WhatsApp y formulario pensados para recibir solicitudes con contexto.",
        },
        {
          title: "Mantenimiento",
          body: "Alojamiento, soporte técnico y pequeños cambios mensuales.",
        },
      ],
      experienceTitle: "",
      experienceBody: "",
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
      eyebrow: "Precios",
      title: "Precios claros para empezar con una web profesional.",
      body:
        "Pide una demo gratis antes de decidir. Los precios son de partida y pueden variar según páginas, contenido, funciones y nivel de personalización.",
      reservationNote:
        "La reserva se descuenta del precio final. Si tras revisar el negocio no encaja con el servicio, se devuelve.",
      refundNote: "",
      billingPrimary: "Pago inicial + mantenimiento",
      minimumNote: "Mínimo 3 meses. Después puedes seguir mes a mes.",
      monthlyNote:
        "La mensualidad incluye alojamiento, mantenimiento técnico, soporte y pequeños cambios.",
      plans: [
        {
          name: "Web Esencial",
          description: "Para negocios que necesitan una web profesional sin complicarse.",
          price: "Desde 490€ + 99€/mes",
          badge: "Para empezar",
          features: [
            "Landing de hasta 5 secciones",
            "Diseño responsive",
            "Textos comerciales",
            "WhatsApp preparado",
            "Formulario de contacto",
            "Alojamiento incluido",
          ],
          cta: "Reservar por 99€",
          paymentNote: "Reserva descontable del proyecto.",
          href: "/#booking",
          highlighted: false,
        },
        {
          name: "Web Pro",
          description:
            "Para negocios que quieren una web más completa y enfocada a conseguir contactos.",
          price: "Desde 990€ + 149€/mes",
          badge: "Recomendado",
          features: [
            "Hasta 5 páginas o secciones avanzadas",
            "Estructura comercial completa",
            "Formulario de presupuesto",
            "WhatsApp guiado",
            "Analítica básica",
            "Soporte prioritario",
          ],
          cta: "Reservar por 149€",
          paymentNote: "Reserva descontable del proyecto.",
          href: "/#booking",
          highlighted: true,
        },
        {
          name: "Sistema Local",
          description: "Para negocios que quieren web, seguimiento y más control de contactos.",
          price: "Desde 1.490€ + 249€/mes",
          badge: "",
          features: [
            "Todo lo de Web Pro",
            "Panel simple de solicitudes",
            "Seguimiento básico de leads",
            "Sistema para pedir reseñas",
            "2 creativos iniciales",
            "Mejoras mensuales",
          ],
          cta: "Pedir propuesta",
          paymentNote: "Para proyectos más completos.",
          href: "/#booking",
          highlighted: false,
        },
      ],
      customProject: {
        title: "¿Necesitas algo más grande?",
        body:
          "Ecommerce, webs corporativas grandes, integraciones o proyectos para empresas se presupuestan a medida desde 2.900€.",
        cta: "Pedir propuesta",
        href: "/#booking",
      },
      adManagementNote: "Ecommerce, apps, integraciones avanzadas o empresas grandes se presupuestan aparte.",
    },
    addons: {
      eyebrow: "Extras",
      title: "Empieza con la web y añade más cuando tenga sentido.",
      body:
        "Primero dejamos la web clara y funcionando. Después podemos añadir sistemas para ordenar contactos, hacer seguimiento o atraer más tráfico.",
      items: [
        {
          name: "Panel de solicitudes",
          price: "390€ + 49€/mes",
          body: "Contactos ordenados por nombre, servicio, estado y próxima acción.",
        },
        {
          name: "Seguimiento automático",
          price: "490€ + 79€/mes",
          body: "Recordatorios y mensajes preparados para no perder interesados.",
        },
        {
          name: "Sistema de reseñas",
          price: "290€ + 39€/mes",
          body: "Mensajes y enlaces para pedir reseñas después de cada trabajo.",
        },
        {
          name: "Anuncios locales",
          price: "Desde 350€/mes + inversión",
          body:
            "Campañas básicas para atraer contactos cuando la web ya está preparada. Puede añadirse bonus por resultados si hay medición clara.",
        },
      ],
    },
    booking: {
      eyebrow: "Demo gratis",
      title: "Pide una demo para tu negocio.",
      body:
        "Déjame tu web, Instagram o una breve explicación. Te responderé con una idea clara de cómo podría mejorar tu presencia online.",
      bullets: ["Sin compromiso", "Idea visual", "Respuesta clara"],
      cta: "Quiero mi demo gratis",
      whatsappCta: "Prefiero hablar por WhatsApp",
      form: {
        name: "Nombre",
        business: "Negocio",
        website: "Web o Instagram",
        phone: "WhatsApp",
        need: "Qué quieres mejorar",
        submit: "Pedir demo gratis",
      },
    },
    faq: {
      eyebrow: "Dudas",
      title: "Preguntas rápidas.",
      items: [
        {
          question: "¿Cuánto tarda?",
          answer: "Entre 7 y 10 días en webs sencillas.",
        },
        {
          question: "¿Qué incluye la mensualidad?",
          answer:
            "Alojamiento, mantenimiento técnico, soporte y pequeños cambios mensuales.",
        },
        {
          question: "¿Tengo que pagar todo al principio?",
          answer: "No. Puedes pedir una demo gratis o reservar plaza con una señal descontable.",
        },
        {
          question: "¿La demo es gratis?",
          answer: "Sí. Sirve para que veas una dirección visual antes de decidir.",
        },
        {
          question: "¿Puedo hablar por WhatsApp?",
          answer: "Sí. Puedes escribir directamente si prefieres algo más rápido.",
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
        "Webs claras, rápidas y mantenidas para negocios locales que quieren recibir más contactos.",
      servicesTitle: "Servicios",
      agencyTitle: "Agencia",
      contactTitle: "Contacto",
      legalTitle: "Legal",
      services: [
        { label: "Qué incluye", href: "/#features" },
        { label: "Ejemplos", href: "/#projects" },
        { label: "Precios", href: "/#pricing" },
      ],
      agency: [
        { label: "Ejemplos", href: "/#projects" },
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
      process: "Demo",
      plans: "Pricing",
      bookCall: "Request free demo",
    },
    hero: {
      badge: "Websites that turn visits into contacts",
      title: "A clear website so more clients ask for a quote or booking.",
      subtitle:
        "We create fast websites for local businesses and professionals: modern design, clear copy, and contact prepared by WhatsApp, form, or call.",
      primaryCta: "Request free demo",
      secondaryCta: "View examples",
      proofPoints: [
        "Personalized visual demo",
        "Ready in 7-10 days",
        "From €490 + €99/mo",
      ],
    },
    projects: {
      eyebrow: "Examples",
      title: "Examples of websites created for real businesses.",
      body:
        "Designs made so the business is understood quickly, looks better, and is easier to contact.",
      cta: "View projects",
      items: [
        {
          name: "Saduni Reformas",
          type: "Renovations",
          url: "https://sadunireformas.com",
          displayUrl: "sadunireformas.com",
          image: "/projects/saduni-reformas.png",
          points: ["Clear services", "WhatsApp CTA", "Easy quote request"],
        },
        {
          name: "Mocha Studio",
          type: "Interior design",
          url: "https://mochastudio.es",
          displayUrl: "mochastudio.es",
          image: "/projects/mocha-studio.png",
          points: ["Premium image", "Clean design", "Visual trust"],
        },
        {
          name: "Bierwinkel Campanar",
          type: "Hospitality",
          url: "https://bierwinkelcampanar.es",
          displayUrl: "bierwinkelcampanar.es",
          image: "/projects/bierwinkel-campanar.png",
          points: ["Menu and bookings", "Clear location", "Mobile optimized"],
        },
        {
          name: "Kavkasioni Tours",
          type: "Tourism",
          url: "https://kavkasionitours.com",
          displayUrl: "kavkasionitours.com",
          image: "/projects/kavkasioni-tours.png",
          points: ["Immersive image", "Clear booking", "Premium experience"],
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
      title: "A pretty website is not enough. It has to explain and make contact easy.",
      body:
        "We create a clear, fast website prepared so clients understand what you do and can contact you without getting lost.",
      items: [
        {
          title: "Web design",
          body: "Modern, fast, mobile-friendly website.",
        },
        {
          title: "Clear copy",
          body: "We explain what you do, who it is for, and why people should choose you.",
        },
        {
          title: "Prepared contact",
          body: "WhatsApp and form designed to receive requests with context.",
        },
        {
          title: "Maintenance",
          body: "Hosting, technical support, and small monthly changes.",
        },
      ],
      experienceTitle: "",
      experienceBody: "",
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
      eyebrow: "Pricing",
      title: "Clear pricing to start with a professional website.",
      body:
        "Request a free demo before deciding. Prices are starting points and may vary depending on pages, content, features, and level of customization.",
      reservationNote:
        "The reservation is deducted from the final price. If after reviewing the business it is not a fit for the service, it is refunded.",
      refundNote: "",
      billingPrimary: "Initial payment + maintenance",
      minimumNote: "Minimum 3 months. After that, you can continue month to month.",
      monthlyNote:
        "The monthly fee includes hosting, technical maintenance, support, and small changes.",
      plans: [
        {
          name: "Essential Web",
          description: "For businesses that need a professional website without overcomplicating it.",
          price: "From €490 + €99/mo",
          badge: "Starter",
          features: [
            "Landing page up to 5 sections",
            "Responsive design",
            "Commercial texts",
            "Prepared WhatsApp",
            "Contact form",
            "Hosting included",
          ],
          cta: "Reserve for €99",
          paymentNote: "Deductible project reservation.",
          href: "/#booking",
          highlighted: false,
        },
        {
          name: "Web Pro",
          description:
            "For businesses that want a more complete website focused on getting contacts.",
          price: "From €990 + €149/mo",
          badge: "Recommended",
          features: [
            "Up to 5 pages or advanced sections",
            "Complete commercial structure",
            "Quote request form",
            "Guided WhatsApp",
            "Basic analytics",
            "Priority support",
          ],
          cta: "Reserve for €149",
          paymentNote: "Deductible project reservation.",
          href: "/#booking",
          highlighted: true,
        },
        {
          name: "Local System",
          description: "For businesses that want website, follow-up, and more control over contacts.",
          price: "From €1,490 + €249/mo",
          badge: "",
          features: [
            "Everything in Web Pro",
            "Simple request panel",
            "Basic lead follow-up",
            "Review request system",
            "2 initial creatives",
            "Monthly improvements",
          ],
          cta: "Request proposal",
          paymentNote: "For more complete projects.",
          href: "/#booking",
          highlighted: false,
        },
      ],
      customProject: {
        title: "Need something bigger?",
        body:
          "Ecommerce, large corporate websites, integrations, or company projects are quoted custom from €2,900.",
        cta: "Request proposal",
        href: "/#booking",
      },
      adManagementNote: "Ecommerce, apps, advanced integrations, or large company projects are quoted separately.",
    },
    addons: {
      eyebrow: "Extras",
      title: "Start with the website and add more when it makes sense.",
      body:
        "First we make the website clear and functional. Then we can add systems to organize contacts, follow up, or bring more traffic.",
      items: [
        {
          name: "Lead panel",
          price: "€390 + €49/mo",
          body: "Contacts organized by name, service, status and next action.",
        },
        {
          name: "Automated follow-up",
          price: "€490 + €79/mo",
          body: "Reminders and prepared messages so interested people are not lost.",
        },
        {
          name: "Review system",
          price: "€290 + €39/mo",
          body: "Messages and links to request reviews after each job.",
        },
        {
          name: "Local ads",
          price: "From €350/mo + ad spend",
          body:
            "Basic campaigns to attract contacts once the website is ready. A results bonus can be added when tracking is clear.",
        },
      ],
    },
    booking: {
      eyebrow: "Free demo",
      title: "Request a demo for your business.",
      body:
        "Leave your website, Instagram, or a short explanation. I will reply with a clear idea of how your online presence could improve.",
      bullets: ["No commitment", "Visual idea", "Clear answer"],
      cta: "I want my free demo",
      whatsappCta: "I prefer WhatsApp",
      form: {
        name: "Name",
        business: "Business",
        website: "Website or Instagram",
        phone: "WhatsApp",
        need: "What do you want to improve?",
        submit: "Request free demo",
      },
    },
    faq: {
      eyebrow: "Questions",
      title: "Quick questions.",
      items: [
        {
          question: "How long does it take?",
          answer: "Between 7 and 10 days for simple websites.",
        },
        {
          question: "What does the monthly fee include?",
          answer:
            "Hosting, technical maintenance, support, and small monthly changes.",
        },
        {
          question: "Do I have to pay everything upfront?",
          answer: "No. You can request a free demo or reserve your spot with a deductible deposit.",
        },
        {
          question: "Is the demo free?",
          answer: "Yes. It lets you see a visual direction before deciding.",
        },
        {
          question: "Can I talk on WhatsApp?",
          answer: "Yes. You can write directly if you prefer something faster.",
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
        { label: "What's included", href: "/#features" },
        { label: "Examples", href: "/#projects" },
        { label: "Pricing", href: "/#pricing" },
      ],
      agency: [
        { label: "Examples", href: "/#projects" },
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
