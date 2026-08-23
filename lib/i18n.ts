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
        "Diseñamos webs y sistemas comerciales para que las oportunidades entren con contexto, queden organizadas y tengan un siguiente paso claro.",
      primaryCta: "Solicitar diagnóstico",
      secondaryCta: "Ver proyectos",
      proofPoints: [
        "Web de conversión desde 1.800 € · pago único",
        "Mantenimiento web opcional",
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
      title: "Empieza por lo que necesitas ahora.",
      body:
        "La web es un proyecto de pago único. El sistema tiene una implantación inicial y un servicio mensual. Antes de empezar sabrás el alcance, los costes y qué queda a tu nombre.",
      reservationNote:
        "Precios sin IVA. No empezamos ningún trabajo hasta que hayas aprobado una propuesta con alcance, precio, plazos y condiciones.",
      minimumNote:
        "Dominio, licencias, APIs, mensajería, telefonía y otros servicios de terceros no incluidos expresamente no se cargan sin tu aprobación. Siempre que sea posible, se contratan a nombre del cliente.",
      monthlyNote:
        "La web no tiene mensualidad obligatoria. Las mensualidades del sistema cubren alojamiento, monitorización, mantenimiento, soporte y evolución básica dentro del alcance.",
      plans: [
        {
          name: "Web de conversión",
          description:
            "Para empresas que necesitan explicar mejor su servicio, generar confianza y convertir visitas en solicitudes.",
          pricePrefix: "Desde",
          setupPrice: "1.800 €",
          monthlyPrice: "",
          billingLabel: "Proyecto · pago único",
          badge: "Mejor punto de partida",
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
          paymentNote: "50 % al empezar · 50 % antes de publicar.",
          secondaryNote: "Mantenimiento opcional desde 79 €/mes.",
          href: "/#booking",
          highlighted: true,
        },
        {
          name: "Sistema comercial",
          description:
            "Para empresas que quieren organizar oportunidades, saber en qué estado están y qué debe ocurrir después.",
          pricePrefix: "Desde",
          setupPrice: "1.500 €",
          monthlyPrice: "249 €/mes",
          billingLabel: "Implantación + servicio mensual",
          badge: "",
          features: [
            "Solicitudes organizadas por estado",
            "Siguiente acción visible",
            "Reuniones y propuestas",
            "Seguimiento de oportunidades",
            "Formularios conectados",
            "Panel comercial básico",
            "Alojamiento y monitorización",
            "Mantenimiento y soporte",
            "Datos del cliente exportables",
          ],
          cta: "Solicitar diagnóstico",
          paymentNote: "Primero revisamos el proceso; después configuramos solo lo necesario.",
          secondaryNote: "Servicio mensual sin permanencia larga; cancelable con 30 días de preaviso.",
          href: "/#booking",
          highlighted: false,
        },
        {
          name: "Web + sistema",
          description: "Para conectar la primera visita con el proceso comercial hasta la contratación.",
          pricePrefix: "Desde",
          setupPrice: "3.000 €",
          monthlyPrice: "299 €/mes",
          billingLabel: "Implantación + servicio mensual",
          badge: "",
          features: [
            "Web de conversión",
            "Sistema comercial conectado",
            "Captación con contexto",
            "Estados y siguiente acción",
            "Reuniones, propuestas y seguimiento",
            "Alojamiento y monitorización",
            "Mantenimiento y soporte",
            "Datos del cliente exportables",
          ],
          cta: "Solicitar diagnóstico",
          paymentNote: "La implantación aprovecha trabajo compartido entre web y sistema.",
          secondaryNote: "Servicio mensual sin permanencia larga; cancelable con 30 días de preaviso.",
          href: "/#booking",
          highlighted: false,
        },
      ],
      customProject: {
        title: "¿Necesitas algo fuera de este alcance?",
        body:
          "Ecommerce, integraciones especiales, plataformas internas o proyectos con requisitos específicos se estudian y presupuestan aparte antes de empezar.",
        cta: "Hablar del proyecto",
        href: "/#booking",
      },
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
      title: "Cuéntanos dónde se atascan hoy tus oportunidades.",
      body:
        "La primera revisión no tiene coste ni compromiso. Miramos cómo llegan las solicitudes y qué ocurre después; si vemos encaje, te enviamos una propuesta clara antes de hacer nada.",
      bullets: ["Revisamos el proceso", "Te decimos qué priorizar", "Primera revisión sin coste"],
      cta: "Solicitar diagnóstico",
      whatsappCta: "Prefiero hablar por WhatsApp",
      success: "Solicitud recibida. Revisaremos el contexto y te responderemos con el siguiente paso.",
      error: "No se ha podido enviar desde la web. Puedes escribirnos a hola@unostudio.org o por WhatsApp.",
      form: {
        name: "Nombre",
        business: "Negocio",
        website: "Web o Instagram",
        email: "Email",
        phone: "WhatsApp (opcional)",
        need: "Qué quieres mejorar",
        submit: "Solicitar diagnóstico",
      },
    },
    faq: {
      eyebrow: "Dudas",
      title: "Lo importante antes de contratar.",
      items: [
        {
          question: "¿La web tiene una mensualidad obligatoria?",
          answer:
            "No. La web desde 1.800 € es un proyecto de pago único. El mantenimiento es opcional desde 79 €/mes. Si el proyecto necesita dominio, alojamiento, email, licencias u otros servicios de terceros, sus costes se explican antes de aprobar la propuesta.",
        },
        {
          question: "¿Qué significa que los precios sean “desde”?",
          answer:
            "Que existe un alcance base, pero no todas las empresas necesitan lo mismo. Después de la primera revisión recibes una propuesta con precio cerrado para el alcance acordado. No empezamos ni añadimos trabajo de pago sin tu aprobación.",
        },
        {
          question: "¿Hay costes aparte o gastos que puedan aparecer después?",
          answer:
            "No añadimos costes ocultos. Dominio, hosting, licencias, APIs, SMS, WhatsApp, telefonía, email u otros servicios externos pueden tener su propio coste salvo que aparezcan expresamente incluidos. Siempre se indican antes y, cuando es posible, se contratan directamente a nombre del cliente.",
        },
        {
          question: "¿De quién son el dominio, las cuentas y la web?",
          answer:
            "Siempre que sea posible, el dominio y las cuentas principales se crean o mantienen a nombre del cliente. Tras el pago completo, la web final se entrega según lo definido en la propuesta. Licencias de terceros, herramientas previas y componentes reutilizables mantienen sus propias condiciones.",
        },
        {
          question: "¿Qué pasa si no contrato mantenimiento web?",
          answer:
            "Nada obliga a contratarlo. La web no desaparece por dejar de pagar a unostudio. Te dejamos preparada la entrega y las cuentas acordadas; desde ese momento tu empresa asume la gestión técnica y los costes de los proveedores que utilice.",
        },
        {
          question: "¿Qué incluye el mantenimiento web desde 79 €/mes?",
          answer:
            "Gestión técnica del alojamiento, monitorización, mantenimiento, soporte y pequeños ajustes dentro del alcance acordado. Rediseños, nuevas funcionalidades, campañas, licencias o consumos extraordinarios se presupuestan aparte.",
        },
        {
          question: "¿Cómo se paga un proyecto web?",
          answer:
            "Como referencia, 50 % para empezar y 50 % antes de publicar. Si un proyecto necesita hitos distintos, quedan escritos en la propuesta antes de comenzar.",
        },
        {
          question: "¿La primera revisión o diagnóstico tiene coste?",
          answer:
            "La primera revisión para entender el problema y comprobar si hay encaje no tiene coste ni compromiso. Si necesitas una auditoría extensa, documentación o trabajo de consultoría independiente, se presupuestará antes de realizarlo.",
        },
        {
          question: "¿Cuánto tarda una web?",
          answer:
            "Depende del alcance, los materiales, las integraciones y la velocidad de feedback. No prometemos un plazo genérico que después no podamos cumplir: la estimación se fija en la propuesta antes de empezar.",
        },
        {
          question: "¿Qué tengo que aportar yo?",
          answer:
            "Información real sobre el negocio, servicios, clientes, materiales disponibles y los accesos que sean necesarios. También necesitamos feedback y aprobaciones a tiempo. Si falta algún material importante, te diremos qué hace falta antes de bloquear el proyecto.",
        },
        {
          question: "¿Incluye textos, fotografías y SEO?",
          answer:
            "La web incluye estructura, copy orientado a claridad y una base SEO técnica bien configurada dentro del alcance. Producción fotográfica, branding completo, redacción extensa, campañas o SEO continuado son servicios distintos y se presupuestan si hacen falta.",
        },
        {
          question: "¿Podéis mejorar una web que ya tengo?",
          answer:
            "Sí. No proponemos rehacer una web por defecto. Primero revisamos si conviene mejorar la estructura, el diseño, la captación o partes concretas; solo recomendamos una reconstrucción completa cuando tiene sentido.",
        },
        {
          question: "¿Podré editar la web yo mismo?",
          answer:
            "Si necesitas cambiar contenido con frecuencia, lo definimos antes y podemos incluir una forma de edición adecuada. No añadimos un CMS o panel por defecto si solo va a complicar el proyecto; la capacidad de edición queda especificada en la propuesta.",
        },
        {
          question: "¿Garantizáis más ventas o más leads?",
          answer:
            "No garantizamos una cifra concreta de ventas, leads o facturación. Podemos mejorar claridad, confianza, medición y conversión, pero el resultado también depende de la oferta, el tráfico, el mercado, el precio y el seguimiento comercial de la empresa.",
        },
        {
          question: "¿Tengo que contratar la web y el sistema juntos?",
          answer:
            "No. De hecho, si el sistema no resuelve un problema real, no te lo recomendaremos. Puedes empezar solo por la web, solo por el sistema o conectar ambos cuando el proceso lo justifique.",
        },
        {
          question: "¿Qué incluye la mensualidad del sistema?",
          answer:
            "Alojamiento, monitorización, mantenimiento técnico, soporte y evolución básica dentro del alcance contratado. Consumos extraordinarios, telefonía, mensajería, APIs, licencias o integraciones especiales se indican y cobran aparte cuando correspondan.",
        },
        {
          question: "¿Hay permanencia en el sistema? ¿Qué pasa si cancelo?",
          answer:
            "No hay permanencia anual por defecto. Tras la implantación, el servicio continúa mes a mes y puede cancelarse con 30 días de preaviso. Al finalizar, los datos del cliente se pueden exportar; el software base o componentes propios de unostudio pueden seguir formando parte del servicio y no se transfieren salvo acuerdo expreso.",
        },
        {
          question: "¿Tengo que cambiar las herramientas que ya utilizamos?",
          answer:
            "No necesariamente. Primero revisamos lo que ya funciona. Formularios, agenda, email, CRM u otras herramientas se mantienen, conectan o sustituyen solo cuando existe una razón clara y el alcance técnico está aprobado.",
        },
        {
          question: "¿Y si quiero cambios después de publicar?",
          answer:
            "Puedes contratar mantenimiento o pedir mejoras puntuales. Los pequeños ajustes incluidos en mantenimiento se resuelven dentro de ese alcance; nuevas páginas, rediseños o funcionalidades relevantes se presupuestan antes de hacerlas.",
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
      agencyTitle: "Estudio",
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
        "We design websites and commercial systems so opportunities arrive with context, stay organized, and have a clear next step.",
      primaryCta: "Request diagnosis",
      secondaryCta: "View projects",
      proofPoints: [
        "Conversion website from €1,800 · one-off project",
        "Website maintenance is optional",
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
      title: "Start with what you need now.",
      body:
        "The website is a one-off project. The system has an initial implementation fee and a monthly service. Before work starts, you will know the scope, costs, and what stays under your ownership.",
      reservationNote:
        "Prices exclude VAT. We do not start work until you have approved a proposal covering scope, price, timing, and terms.",
      minimumNote:
        "Domain, licences, APIs, messaging, telephony, and other third-party services not expressly included are never charged without approval. Whenever possible, they are contracted in the client's name.",
      monthlyNote:
        "The website has no mandatory monthly fee. System subscriptions cover hosting, monitoring, maintenance, support, and basic evolution within scope.",
      plans: [
        {
          name: "Conversion website",
          description:
            "For businesses that need to explain their service better, build trust, and turn visits into enquiries.",
          pricePrefix: "From",
          setupPrice: "€1,800",
          monthlyPrice: "",
          billingLabel: "Project · one-off payment",
          badge: "Best starting point",
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
          paymentNote: "50% to start · 50% before launch.",
          secondaryNote: "Optional maintenance from €79/mo.",
          href: "/#booking",
          highlighted: true,
        },
        {
          name: "Commercial system",
          description:
            "For businesses that want to organize opportunities, know their status, and see what should happen next.",
          pricePrefix: "From",
          setupPrice: "€1,500",
          monthlyPrice: "€249/mo",
          billingLabel: "Implementation + monthly service",
          badge: "",
          features: [
            "Enquiries organized by status",
            "Visible next action",
            "Meetings and proposals",
            "Opportunity follow-up",
            "Connected forms",
            "Basic commercial dashboard",
            "Hosting and monitoring",
            "Maintenance and support",
            "Client data can be exported",
          ],
          cta: "Request diagnosis",
          paymentNote: "We review the process first, then configure only what is needed.",
          secondaryNote: "Monthly service with no long-term lock-in; cancellable with 30 days' notice.",
          href: "/#booking",
          highlighted: false,
        },
        {
          name: "Website + system",
          description: "For connecting the first visit with the commercial process through to signed work.",
          pricePrefix: "From",
          setupPrice: "€3,000",
          monthlyPrice: "€299/mo",
          billingLabel: "Implementation + monthly service",
          badge: "",
          features: [
            "Conversion website",
            "Connected commercial system",
            "Context-rich acquisition",
            "Statuses and next action",
            "Meetings, proposals, and follow-up",
            "Hosting and monitoring",
            "Maintenance and support",
            "Client data can be exported",
          ],
          cta: "Request diagnosis",
          paymentNote: "Implementation reuses shared work between the website and system.",
          secondaryNote: "Monthly service with no long-term lock-in; cancellable with 30 days' notice.",
          href: "/#booking",
          highlighted: false,
        },
      ],
      customProject: {
        title: "Need something outside this scope?",
        body:
          "Ecommerce, special integrations, internal platforms, or projects with specific requirements are reviewed and quoted separately before work begins.",
        cta: "Discuss the project",
        href: "/#booking",
      },
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
      title: "Tell us where opportunities get stuck today.",
      body:
        "The first review is free and carries no commitment. We look at how enquiries arrive and what happens next; if there is a good fit, you receive a clear proposal before any work starts.",
      bullets: ["We review the process", "We tell you what to prioritize", "First review is free"],
      cta: "Request diagnosis",
      whatsappCta: "I prefer WhatsApp",
      success: "Enquiry received. We will review the context and reply with the next step.",
      error: "The website could not send your enquiry. You can email hola@unostudio.org or use WhatsApp.",
      form: {
        name: "Name",
        business: "Business",
        website: "Website or Instagram",
        email: "Email",
        phone: "WhatsApp (optional)",
        need: "What do you want to improve?",
        submit: "Request diagnosis",
      },
    },
    faq: {
      eyebrow: "Questions",
      title: "What matters before you hire us.",
      items: [
        {
          question: "Does the website have a mandatory monthly fee?",
          answer:
            "No. The website from €1,800 is a one-off project. Maintenance is optional from €79/mo. If the project needs a domain, hosting, email, licences, or other third-party services, those costs are explained before you approve the proposal.",
        },
        {
          question: "What does “from” mean in the pricing?",
          answer:
            "There is a base scope, but not every business needs the same thing. After the first review, you receive a proposal with a fixed price for the agreed scope. We do not start or add paid work without your approval.",
        },
        {
          question: "Can extra costs appear later?",
          answer:
            "We do not add hidden fees. Domain, hosting, licences, APIs, SMS, WhatsApp, telephony, email, or other external services may have their own costs unless they are expressly included. These are disclosed in advance and, whenever possible, contracted directly in the client's name.",
        },
        {
          question: "Who owns the domain, accounts, and website?",
          answer:
            "Whenever possible, the domain and main accounts are created or kept in the client's name. After full payment, the final website is delivered as defined in the proposal. Third-party licences, pre-existing tools, and reusable components keep their own terms.",
        },
        {
          question: "What if I do not buy website maintenance?",
          answer:
            "There is no obligation to buy it. Your website does not disappear because you stop paying unostudio. We hand over the agreed website and accounts; from then on, your company manages the technical side and any provider costs it uses.",
        },
        {
          question: "What is included in website maintenance from €79/mo?",
          answer:
            "Technical hosting management, monitoring, maintenance, support, and small adjustments within the agreed scope. Redesigns, new functionality, campaigns, licences, or unusually high usage are quoted separately.",
        },
        {
          question: "How is a website project paid?",
          answer:
            "As a reference, 50% to start and 50% before launch. If a project needs different milestones, they are written into the proposal before work begins.",
        },
        {
          question: "Does the first review or diagnosis cost anything?",
          answer:
            "The first review to understand the problem and check fit is free and carries no commitment. If you need a substantial audit, documentation, or standalone consulting work, it is quoted before being carried out.",
        },
        {
          question: "How long does a website take?",
          answer:
            "It depends on scope, materials, integrations, and feedback speed. We do not publish a generic deadline we may not be able to keep: the estimate is set in the proposal before work starts.",
        },
        {
          question: "What do I need to provide?",
          answer:
            "Accurate information about the business, services, customers, available materials, and any access needed. We also need timely feedback and approvals. If an important asset is missing, we will tell you before it blocks the project.",
        },
        {
          question: "Are copy, photography, and SEO included?",
          answer:
            "The website includes structure, clarity-focused copy, and a well-configured technical SEO foundation within scope. Professional photography, full branding, long-form copywriting, campaigns, or ongoing SEO are separate services and are quoted if needed.",
        },
        {
          question: "Can you improve a website I already have?",
          answer:
            "Yes. We do not propose rebuilding a website by default. We first review whether structure, design, acquisition, or specific parts should improve; a full rebuild is recommended only when it makes sense.",
        },
        {
          question: "Will I be able to edit the website myself?",
          answer:
            "If you need to change content frequently, we define that before work starts and can include an appropriate editing setup. We do not add a CMS or dashboard by default if it only makes the project more complex; editing capability is specified in the proposal.",
        },
        {
          question: "Do you guarantee more sales or leads?",
          answer:
            "We do not guarantee a specific number of sales, leads, or revenue. We can improve clarity, trust, measurement, and conversion, but results also depend on the offer, traffic, market, pricing, and the company's commercial follow-up.",
        },
        {
          question: "Do I have to buy the website and system together?",
          answer:
            "No. In fact, if the system does not solve a real problem, we will not recommend it. You can start with the website, the system, or connect both when the process justifies it.",
        },
        {
          question: "What does the system subscription include?",
          answer:
            "Hosting, monitoring, technical maintenance, support, and basic evolution within the agreed scope. Unusually high usage, telephony, messaging, APIs, licences, or special integrations are disclosed and charged separately when applicable.",
        },
        {
          question: "Is there a system commitment? What happens if I cancel?",
          answer:
            "There is no annual lock-in by default. After implementation, the service runs month to month and can be cancelled with 30 days' notice. When it ends, client data can be exported; unostudio's base software or proprietary components may remain part of the service and are not transferred unless explicitly agreed.",
        },
        {
          question: "Do we have to replace the tools we already use?",
          answer:
            "Not necessarily. We first review what already works. Forms, scheduling, email, CRM, or other tools are kept, connected, or replaced only when there is a clear reason and the technical scope has been approved.",
        },
        {
          question: "What if I want changes after launch?",
          answer:
            "You can use the maintenance plan or request one-off improvements. Small changes covered by maintenance stay within that scope; new pages, redesigns, or significant functionality are quoted before work begins.",
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
      agencyTitle: "Studio",
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
