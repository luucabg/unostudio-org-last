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
      plans: "Precios",
      bookCall: "Solicitar diagnóstico",
    },
    hero: {
      badge: "Webs y sistemas comerciales para empresas de servicios",
      title: "De una solicitud perdida a un trabajo firmado.",
      subtitle:
        "Diseñamos webs y sistemas comerciales que recogen cada oportunidad, organizan la información y muestran a tu equipo qué debe ocurrir después.",
      primaryCta: "Solicitar diagnóstico",
      secondaryCta: "Ver proyectos",
      proofPoints: [
        "Webs de conversión desde 1.800€",
        "Sistemas desde 1.500€ + 249€/mes",
        "Valencia · proyectos en toda España",
      ],
    },
    projects: {
      eyebrow: "Proyectos",
      title: "Trabajo real para negocios que venden cosas distintas.",
      body:
        "Cada proyecto parte del negocio, su cliente y la acción que queremos facilitar. Sin una plantilla visual repetida.",
      cta: "Ver proyectos",
      items: [
        {
          name: "Saduni Reformas",
          type: "Web · Conversión · Servicios",
          url: "https://sadunireformas.com",
          displayUrl: "sadunireformas.com",
          image: "/projects/saduni-reformas.png",
          points: ["Servicios fáciles de entender", "Confianza desde la primera visita", "Solicitud de presupuesto clara"],
        },
        {
          name: "mochastudio",
          type: "Web · Dirección visual · Portfolio",
          url: "https://mochastudio.es",
          displayUrl: "mochastudio.es",
          image: "/projects/mocha-studio.png",
          points: ["Dirección visual editorial", "Portfolio protagonista", "Experiencia responsive"],
        },
        {
          name: "Bierwinkel Campanar",
          type: "Web · Hostelería · Información",
          url: "https://bierwinkelcampanar.es",
          displayUrl: "bierwinkelcampanar.es",
          image: "/projects/bierwinkel-campanar.png",
          points: ["Información fácil de consultar", "Ubicación y contacto visibles", "Experiencia móvil cuidada"],
        },
        {
          name: "Kavkasioni Tours",
          type: "Web · Turismo · Captación",
          url: "https://kavkasionitours.com",
          displayUrl: "kavkasionitours.com",
          image: "/projects/kavkasioni-tours.png",
          points: ["Rutas y experiencias claras", "Consulta fácil", "Experiencia visual inmersiva"],
        },
      ],
    },
    perception: {
      eyebrow: "El problema",
      title: "Una oportunidad puede llegar bien y perderse después.",
      subtitle:
        "Web, WhatsApp, llamadas, formularios y reuniones suelen vivir en sitios distintos. Diseñamos una experiencia clara para captar y un sistema para que cada oportunidad tenga contexto, estado y siguiente acción.",
      beforeTitle: "Disperso",
      afterTitle: "Organizado",
      beforePoints: ["Canales separados", "Seguimientos olvidados", "Sin siguiente acción clara"],
      afterPoints: ["Información reunida", "Estado visible", "Siguiente acción definida"],
    },
    impact: {
      eyebrow: "Cómo trabajamos",
      title: "Primero entendemos dónde se pierde claridad o seguimiento.",
      body:
        "Revisamos cómo llega una oportunidad, qué necesita saber el cliente y qué ocurre después. A partir de ahí decidimos si necesitas mejorar la web, el sistema comercial o ambos.",
      steps: [
        {
          number: "01",
          title: "Entendemos el proceso",
          body: "Revisamos cómo te encuentran, cómo contactan y qué ocurre desde la primera solicitud.",
        },
        {
          number: "02",
          title: "Diseñamos la solución",
          body: "Definimos qué debe mejorar en la web, en el seguimiento o en ambos sin añadir herramientas innecesarias.",
        },
        {
          number: "03",
          title: "Construimos y acompañamos",
          body: "Implementamos el proyecto y mantenemos la parte técnica cuando el servicio incluye continuidad mensual.",
        },
      ],
    },
    features: {
      eyebrow: "Qué hacemos",
      title: "La web capta. El sistema organiza lo que ocurre después.",
      body:
        "Puedes empezar por una web de conversión, por un sistema comercial o conectar ambos cuando el proceso lo necesite.",
      items: [
        {
          title: "Web de conversión",
          body: "Explica mejor tu servicio, genera confianza y facilita que una visita se convierta en una solicitud.",
        },
        {
          title: "Sistema comercial",
          body: "Organiza solicitudes, reuniones, propuestas y seguimientos para que cada oportunidad tenga un estado claro.",
        },
        {
          title: "Siguiente acción clara",
          body: "Tu equipo puede ver qué oportunidad necesita respuesta, reunión, propuesta o seguimiento.",
        },
        {
          title: "Mantenimiento y soporte",
          body: "Mantenemos la parte técnica y acompañamos la evolución del sistema dentro del alcance contratado.",
        },
      ],
      experienceTitle: "",
      experienceBody: "",
    },
    audience: {
      eyebrow: "Para quién es",
      title: "Para empresas de servicios donde cada oportunidad importa.",
      body:
        "Encaja especialmente cuando recibes solicitudes, reuniones, propuestas o presupuestos y quieres que el proceso sea más claro desde la primera visita hasta la contratación.",
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
      title: "Tres formas de trabajar con unostudio.",
      body:
        "Puedes mejorar la captación, ordenar el proceso comercial o conectar ambas partes. El alcance final se confirma antes de empezar.",
      reservationNote:
        "Precios sin IVA. Cada proyecto se confirma con una propuesta según alcance y necesidades reales.",
      refundNote: "",
      billingPrimary: "Precios de partida",
      minimumNote: "Mensajería, telefonía, servicios externos e integraciones especiales se presupuestan aparte.",
      monthlyNote:
        "Las mensualidades del sistema incluyen alojamiento, monitorización, mantenimiento, soporte y evolución básica.",
      plans: [
        {
          name: "Web de conversión",
          description: "Para empresas que necesitan explicar mejor su servicio, generar confianza y convertir visitas en solicitudes.",
          price: "Desde 1.800€",
          badge: "Web premium",
          features: [
            "Estrategia y estructura",
            "Diseño UX/UI",
            "Desarrollo responsive",
            "Copy orientado a claridad",
            "Formularios y contacto",
            "Base SEO bien configurada",
            "Rendimiento y analítica básica",
            "Integraciones sencillas",
          ],
          cta: "Solicitar diagnóstico",
          paymentNote: "Mantenimiento opcional desde 79€/mes.",
          href: "/#booking",
          highlighted: false,
        },
        {
          name: "Sistema comercial",
          description:
            "Para empresas que quieren organizar oportunidades, saber en qué estado están y qué debe ocurrir después.",
          price: "Desde 1.500€ + 249€/mes",
          badge: "Recomendado",
          features: [
            "Solicitudes organizadas por estado",
            "Siguiente acción visible",
            "Reuniones y propuestas",
            "Seguimiento de oportunidades",
            "Formularios conectados",
            "Panel comercial básico",
            "Alojamiento y monitorización",
            "Mantenimiento y soporte",
            "Evolución básica del sistema",
          ],
          cta: "Solicitar diagnóstico",
          paymentNote: "Configurado según el proceso de cada empresa.",
          href: "/#booking",
          highlighted: true,
        },
        {
          name: "Web + sistema",
          description: "Para conectar la primera visita con el proceso comercial hasta la contratación.",
          price: "Desde 3.000€ + 299€/mes",
          badge: "",
          features: [
            "Web de conversión",
            "Sistema comercial conectado",
            "Captación con contexto",
            "Estados y siguiente acción",
            "Reuniones, propuestas y seguimiento",
            "Alojamiento y monitorización",
            "Mantenimiento y soporte",
            "Evolución básica del sistema",
          ],
          cta: "Solicitar diagnóstico",
          paymentNote: "La implantación aprovecha trabajo compartido entre web y sistema.",
          href: "/#booking",
          highlighted: false,
        },
      ],
      customProject: {
        title: "¿Necesitas algo fuera de este alcance?",
        body:
          "Ecommerce, integraciones especiales, plataformas internas o proyectos con requisitos específicos se estudian y presupuestan aparte.",
        cta: "Hablar del proyecto",
        href: "/#booking",
      },
      adManagementNote: "Ecommerce, apps, integraciones avanzadas o empresas grandes se presupuestan aparte.",
    },
    addons: {
      eyebrow: "Dentro del sistema",
      title: "Lo importante no es tener más herramientas. Es saber qué ocurre después.",
      body:
        "El sistema se configura para que las oportunidades tengan contexto, estado y una siguiente acción visible sin obligar al equipo a trabajar de una forma artificial.",
      items: [
        {
          name: "Solicitudes organizadas",
          price: "",
          body: "Los contactos quedan reunidos con la información necesaria para entender cada oportunidad.",
        },
        {
          name: "Estado y siguiente acción",
          price: "",
          body: "Cada oportunidad muestra dónde está y qué debería ocurrir después.",
        },
        {
          name: "Seguimiento",
          price: "",
          body: "Recordatorios y tareas ayudan a que una propuesta o reunión no quede olvidada.",
        },
        {
          name: "Herramientas conectadas",
          price: "",
          body:
            "Cuando aporta valor, conectamos formularios, agenda y otras herramientas que ya forman parte del proceso.",
        },
      ],
    },
    booking: {
      eyebrow: "Diagnóstico",
      title: "Cuéntanos cómo gestionas hoy tus oportunidades.",
      body:
        "Revisamos tu web y tu proceso comercial para decirte qué tendría más sentido mejorar primero: captación, seguimiento o ambas partes.",
      bullets: ["Sin compromiso", "Revisión concreta", "Siguiente paso claro"],
      cta: "Solicitar diagnóstico",
      whatsappCta: "Prefiero hablar por WhatsApp",
      form: {
        name: "Nombre",
        business: "Negocio",
        website: "Web o Instagram",
        phone: "WhatsApp",
        need: "Qué quieres mejorar",
        submit: "Solicitar diagnóstico",
      },
    },
    faq: {
      eyebrow: "Dudas",
      title: "Preguntas rápidas.",
      items: [
        {
          question: "¿Tengo que contratar la web y el sistema juntos?",
          answer: "No. Puedes empezar solo por la web, solo por el sistema comercial o conectar ambos si tiene sentido para tu proceso.",
        },
        {
          question: "¿Qué incluye la mensualidad del sistema?",
          answer:
            "Alojamiento, monitorización, mantenimiento técnico, soporte y evolución básica dentro del alcance contratado.",
        },
        {
          question: "¿Qué incluye el mantenimiento web?",
          answer: "Alojamiento gestionado, monitorización, mantenimiento técnico, soporte y pequeños ajustes dentro del alcance contratado.",
        },
        {
          question: "¿El sistema sustituye a mi equipo?",
          answer: "No. Está pensado para organizar la información y hacer visible la siguiente acción. Las decisiones importantes siguen en manos del equipo.",
        },
        {
          question: "¿Puede adaptarse a cómo trabajamos ahora?",
          answer: "Sí. Primero revisamos vuestro proceso y configuramos el sistema alrededor de las etapas y herramientas que realmente necesitéis.",
        },
      ],
    },
    cta: {
      title: "Veamos dónde se están perdiendo oportunidades.",
      body:
        "Cuéntanos cómo llegan hoy tus solicitudes y qué ocurre después. Te diremos qué tendría más sentido mejorar primero.",
      primaryCta: "Solicitar diagnóstico",
      secondaryCta: "Ver proyectos",
    },
    footer: {
      description:
        "Webs de conversión y sistemas comerciales para empresas de servicios.",
      servicesTitle: "Servicios",
      agencyTitle: "Agencia",
      contactTitle: "Contacto",
      legalTitle: "Legal",
      services: [
        { label: "Web de conversión", href: "/#features" },
        { label: "Sistema comercial", href: "/#sectors" },
        { label: "Proyectos", href: "/#projects" },
        { label: "Precios", href: "/#pricing" },
      ],
      agency: [
        { label: "El sistema", href: "/#sectors" },
        { label: "Diagnóstico", href: "/#booking" },
        { label: "Proyectos", href: "/#projects" },
      ],
      contact: [
        { label: "Contacto", href: "/contacto" },
        { label: "hola@unostudio.org", href: "mailto:hola@unostudio.org" },
        { label: "unostudio.org", href: "https://unostudio.org" },
        { label: "Solicitar diagnóstico", href: "mailto:hola@unostudio.org?subject=Solicitar%20diagnóstico%20unostudio" },
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
      plans: "Pricing",
      bookCall: "Request diagnosis",
    },
    hero: {
      badge: "Conversion websites and commercial systems for service businesses",
      title: "From a lost enquiry to signed work.",
      subtitle:
        "We design websites and commercial systems that capture every opportunity, organize the information, and show your team what should happen next.",
      primaryCta: "Request diagnosis",
      secondaryCta: "View projects",
      proofPoints: [
        "Conversion websites from €1,800",
        "Systems from €1,500 + €249/mo",
        "Valencia · projects across Spain",
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "Real work for businesses that sell different things.",
      body:
        "Each project starts from the business, its customer, and the action we want to make easier. No repeated visual template.",
      cta: "View projects",
      items: [
        {
          name: "Saduni Reformas",
          type: "Web · Conversion · Services",
          url: "https://sadunireformas.com",
          displayUrl: "sadunireformas.com",
          image: "/projects/saduni-reformas.png",
          points: ["Services easy to understand", "Trust from the first visit", "Clear quote request"],
        },
        {
          name: "mochastudio",
          type: "Web · Art direction · Portfolio",
          url: "https://mochastudio.es",
          displayUrl: "mochastudio.es",
          image: "/projects/mocha-studio.png",
          points: ["Editorial art direction", "Portfolio-first experience", "Responsive experience"],
        },
        {
          name: "Bierwinkel Campanar",
          type: "Web · Hospitality · Information",
          url: "https://bierwinkelcampanar.es",
          displayUrl: "bierwinkelcampanar.es",
          image: "/projects/bierwinkel-campanar.png",
          points: ["Easy-to-find information", "Visible location and contact", "Polished mobile experience"],
        },
        {
          name: "Kavkasioni Tours",
          type: "Web · Tourism · Lead generation",
          url: "https://kavkasionitours.com",
          displayUrl: "kavkasionitours.com",
          image: "/projects/kavkasioni-tours.png",
          points: ["Clear routes and experiences", "Easy enquiry", "Immersive visual experience"],
        },
      ],
    },
    perception: {
      eyebrow: "The problem",
      title: "An opportunity can arrive well and still get lost afterwards.",
      subtitle:
        "Website, WhatsApp, calls, forms, and meetings often live in different places. We design a clear experience to capture demand and a system so every opportunity has context, status, and a next action.",
      beforeTitle: "Scattered",
      afterTitle: "Organized",
      beforePoints: ["Separate channels", "Forgotten follow-ups", "No clear next action"],
      afterPoints: ["Information together", "Visible status", "Defined next action"],
    },
    impact: {
      eyebrow: "How we work",
      title: "First we understand where clarity or follow-up is being lost.",
      body:
        "We review how an opportunity arrives, what the customer needs to understand, and what happens afterwards. Then we decide whether the website, the commercial system, or both should improve.",
      steps: [
        {
          number: "01",
          title: "We understand the process",
          body: "We review how customers find you, how they contact you, and what happens from the first enquiry onwards.",
        },
        {
          number: "02",
          title: "We design the solution",
          body: "We define what should improve in the website, follow-up, or both without adding unnecessary tools.",
        },
        {
          number: "03",
          title: "We build and support it",
          body: "We implement the project and maintain the technical side when the service includes ongoing support.",
        },
      ],
    },
    features: {
      eyebrow: "What we do",
      title: "The website captures demand. The system organizes what happens next.",
      body:
        "You can start with a conversion website, a commercial system, or connect both when the process needs it.",
      items: [
        {
          title: "Conversion website",
          body: "Explain your service better, build trust, and make it easier for a visit to become an enquiry.",
        },
        {
          title: "Commercial system",
          body: "Organize enquiries, meetings, proposals, and follow-ups so every opportunity has a clear status.",
        },
        {
          title: "Clear next action",
          body: "Your team can see which opportunity needs a reply, meeting, proposal, or follow-up.",
        },
        {
          title: "Maintenance and support",
          body: "We maintain the technical side and support the system's evolution within the agreed scope.",
        },
      ],
      experienceTitle: "",
      experienceBody: "",
    },
    audience: {
      eyebrow: "Who it is for",
      title: "For service businesses where every opportunity matters.",
      body:
        "It fits especially well when you manage enquiries, meetings, proposals, or quotes and want a clearer process from the first visit to signed work.",
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
      title: "Three ways to work with unostudio.",
      body:
        "You can improve acquisition, organize the commercial process, or connect both. Final scope is confirmed before the project starts.",
      reservationNote:
        "Prices exclude VAT. Each project is confirmed with a proposal based on scope and actual requirements.",
      refundNote: "",
      billingPrimary: "Starting prices",
      minimumNote: "Messaging, telephony, external services, and special integrations are quoted separately.",
      monthlyNote:
        "System subscriptions include hosting, monitoring, maintenance, support, and basic product evolution.",
      plans: [
        {
          name: "Conversion website",
          description: "For businesses that need to explain their service better, build trust, and turn visits into enquiries.",
          price: "From €1,800",
          badge: "Premium website",
          features: [
            "Strategy and structure",
            "UX/UI design",
            "Responsive development",
            "Copy focused on clarity",
            "Forms and contact",
            "Well-configured SEO foundation",
            "Performance and basic analytics",
            "Simple integrations",
          ],
          cta: "Request diagnosis",
          paymentNote: "Optional maintenance from €79/mo.",
          href: "/#booking",
          highlighted: false,
        },
        {
          name: "Commercial system",
          description:
            "For businesses that want to organize opportunities, know their status, and see what should happen next.",
          price: "From €1,500 + €249/mo",
          badge: "Recommended",
          features: [
            "Enquiries organized by status",
            "Visible next action",
            "Meetings and proposals",
            "Opportunity follow-up",
            "Connected forms",
            "Basic commercial dashboard",
            "Hosting and monitoring",
            "Maintenance and support",
            "Basic system evolution",
          ],
          cta: "Request diagnosis",
          paymentNote: "Configured around each company's process.",
          href: "/#booking",
          highlighted: true,
        },
        {
          name: "Website + system",
          description: "For connecting the first visit with the commercial process through to signed work.",
          price: "From €3,000 + €299/mo",
          badge: "",
          features: [
            "Conversion website",
            "Connected commercial system",
            "Context-rich acquisition",
            "Statuses and next action",
            "Meetings, proposals, and follow-up",
            "Hosting and monitoring",
            "Maintenance and support",
            "Basic system evolution",
          ],
          cta: "Request diagnosis",
          paymentNote: "Implementation reuses shared work between the website and system.",
          href: "/#booking",
          highlighted: false,
        },
      ],
      customProject: {
        title: "Need something outside this scope?",
        body:
          "Ecommerce, special integrations, internal platforms, or projects with specific requirements are reviewed and quoted separately.",
        cta: "Discuss the project",
        href: "/#booking",
      },
      adManagementNote: "Ecommerce, apps, advanced integrations, or large company projects are quoted separately.",
    },
    addons: {
      eyebrow: "Inside the system",
      title: "The goal is not more tools. It is knowing what happens next.",
      body:
        "The system is configured so opportunities have context, status, and a visible next action without forcing the team into an artificial workflow.",
      items: [
        {
          name: "Organized enquiries",
          price: "",
          body: "Contacts are kept together with the information needed to understand each opportunity.",
        },
        {
          name: "Status and next action",
          price: "",
          body: "Each opportunity shows where it stands and what should happen next.",
        },
        {
          name: "Follow-up",
          price: "",
          body: "Reminders and tasks help prevent a proposal or meeting from being forgotten.",
        },
        {
          name: "Connected tools",
          price: "",
          body:
            "When useful, we connect forms, scheduling, and other tools already used in the process.",
        },
      ],
    },
    booking: {
      eyebrow: "Diagnosis",
      title: "Tell us how you manage opportunities today.",
      body:
        "We review your website and commercial process to tell you what makes most sense to improve first: acquisition, follow-up, or both.",
      bullets: ["No commitment", "Concrete review", "Clear next step"],
      cta: "Request diagnosis",
      whatsappCta: "I prefer WhatsApp",
      form: {
        name: "Name",
        business: "Business",
        website: "Website or Instagram",
        phone: "WhatsApp",
        need: "What do you want to improve?",
        submit: "Request diagnosis",
      },
    },
    faq: {
      eyebrow: "Questions",
      title: "Quick questions.",
      items: [
        {
          question: "Do I have to hire the website and system together?",
          answer: "No. You can start with the website, the commercial system, or connect both if that makes sense for your process.",
        },
        {
          question: "What does the system subscription include?",
          answer:
            "Hosting, monitoring, technical maintenance, support, and basic evolution within the agreed scope.",
        },
        {
          question: "What does website maintenance include?",
          answer: "Managed hosting, monitoring, technical maintenance, support, and small adjustments within the agreed scope.",
        },
        {
          question: "Does the system replace my team?",
          answer: "No. It is designed to organize information and make the next action visible. Important decisions remain with the team.",
        },
        {
          question: "Can it adapt to how we work today?",
          answer: "Yes. We first review your process and configure the system around the stages and tools you actually need.",
        },
      ],
    },
    cta: {
      title: "Let's see where opportunities are being lost.",
      body:
        "Tell us how enquiries arrive today and what happens afterwards. We will tell you what makes the most sense to improve first.",
      primaryCta: "Request diagnosis",
      secondaryCta: "View projects",
    },
    footer: {
      description:
        "Conversion websites and commercial systems for service businesses.",
      servicesTitle: "Services",
      agencyTitle: "Agency",
      contactTitle: "Contact",
      legalTitle: "Legal",
      services: [
        { label: "Conversion website", href: "/#features" },
        { label: "Commercial system", href: "/#sectors" },
        { label: "Projects", href: "/#projects" },
        { label: "Pricing", href: "/#pricing" },
      ],
      agency: [
        { label: "The system", href: "/#sectors" },
        { label: "Diagnosis", href: "/#booking" },
        { label: "Projects", href: "/#projects" },
      ],
      contact: [
        { label: "Contact", href: "/contacto" },
        { label: "hola@unostudio.org", href: "mailto:hola@unostudio.org" },
        { label: "unostudio.org", href: "https://unostudio.org" },
        { label: "Request diagnosis", href: "mailto:hola@unostudio.org?subject=Request%20unostudio%20diagnosis" },
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
