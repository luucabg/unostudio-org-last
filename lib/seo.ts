import type { Metadata } from "next"

export const siteUrl = "https://unostudio.org"

export const pages = {
  home: { path: "/", label: "Inicio", title: "Diseño web, software a medida y SEO", description: "unostudio es un estudio de diseño y desarrollo. Creamos webs, marcas, aplicaciones y soluciones con IA. Cuidamos la seguridad y el SEO." },
  web: { path: "/diseno-web", label: "Diseño web", title: "Diseño web y landing pages para tu negocio", description: "Diseñamos y desarrollamos webs y landing pages claras, rápidas y adaptadas al móvil. Cuidamos la seguridad y una base preparada para SEO." },
  software: { path: "/software-a-medida", label: "Software a medida", title: "Desarrollo de software a medida y aplicaciones", description: "Aplicaciones y herramientas adaptadas a tu equipo, tus clientes y tus procesos. Cuidamos el diseño y la seguridad desde el desarrollo." },
  services: { path: "/servicios", label: "Servicios", title: "Servicios de diseño, desarrollo, IA y SEO", description: "Diseño de producto, diseño web, landing pages, branding, IA, software a medida, seguridad web y SEO. Descubre cómo puede ayudarte unostudio." },
  ai: { path: "/ia", label: "Inteligencia artificial", title: "Desarrollo de IA para empresas y negocios", description: "Creamos herramientas con inteligencia artificial para tareas concretas de tu negocio. Definimos contigo la necesidad, el diseño y el alcance del proyecto." },
  seo: { path: "/seo", label: "SEO", title: "SEO para Google, ChatGPT y Gemini", description: "SEO técnico, contenidos claros y visibilidad en búsquedas con IA. Preparamos tu web para que Google, ChatGPT y Gemini puedan encontrar y entender tu negocio." },
  projects: { path: "/proyectos", label: "Proyectos", title: "Proyectos de diseño web y desarrollo", description: "Explora webs creadas por unostudio: gymindex, 99vapers, impostor.wtf, aimos.pro, mochastudio y más. Capturas reales y enlaces para visitar cada proyecto." },
  contact: { path: "/contacto", label: "Contacto", title: "Contacta para tu web, aplicación o proyecto de SEO", description: "Habla con unostudio por correo o WhatsApp. Cuéntanos qué necesitas para tu web, marca, aplicación, proyecto con IA o posicionamiento en buscadores." },
} as const

export type PageKey = keyof typeof pages

export function pageMetadata(key: PageKey): Metadata {
  const page = pages[key]
  const title = `${page.title} | unostudio`
  return {
    title: { absolute: title },
    description: page.description,
    alternates: { canonical: page.path },
    openGraph: { title, description: page.description, url: `${siteUrl}${page.path}`, siteName: "unostudio", locale: "es_ES", type: "website", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "unostudio. Diseño web, software a medida y SEO." }] },
    twitter: { card: "summary_large_image", title, description: page.description, images: ["/opengraph-image"] },
  }
}
