import { services } from "@/lib/services"
import { projects } from "@/lib/projects"
import { pages, siteUrl, type PageKey } from "@/lib/seo"

function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />
}

export function SiteStructuredData() {
  return <JsonLd data={{
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "unostudio", url: siteUrl, description: pages.home.description, logo: { "@type": "ImageObject", url: `${siteUrl}/logos/brand-icon.png`, width: 512, height: 512 }, email: "hola@unostudio.org", contactPoint: { "@type": "ContactPoint", contactType: "Consultas sobre proyectos", email: "hola@unostudio.org", url: `${siteUrl}/contacto`, availableLanguage: "Spanish" } },
      { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: "unostudio", inLanguage: "es-ES", publisher: { "@id": `${siteUrl}/#organization` } },
    ],
  }} />
}

export function PageStructuredData({ pageKey }: { pageKey: PageKey }) {
  const page = pages[pageKey]
  const url = `${siteUrl}${page.path}`
  const pageServices = services.filter(service => pageKey === "services" || service.href === page.path)
  const serviceData = pageServices.map(service => ({ "@type": "Service", "@id": `${siteUrl}/servicios#${service.id}`, name: service.title, serviceType: service.title, description: `${service.description} ${service.detail}`, url: `${siteUrl}${service.href}`, provider: { "@id": `${siteUrl}/#organization` } }))
  const projectList = { "@type": "ItemList", "@id": `${url}#proyectos`, name: "Proyectos de unostudio", itemListElement: projects.filter(project => project.url).map((project, index) => ({ "@type": "ListItem", position: index + 1, item: { "@type": "WebSite", name: project.name, url: project.url, image: `${siteUrl}${project.image}`, description: project.category, creator: { "@id": `${siteUrl}/#organization` } } })) }

  return <JsonLd data={{
    "@context": "https://schema.org",
    "@graph": [
      { "@type": pageKey === "contact" ? "ContactPage" : pageKey === "projects" || pageKey === "services" ? "CollectionPage" : "WebPage", "@id": `${url}#webpage`, url, name: page.title, description: page.description, inLanguage: "es-ES", isPartOf: { "@id": `${siteUrl}/#website` }, about: { "@id": `${siteUrl}/#organization` }, ...(pageKey !== "home" ? { breadcrumb: { "@id": `${url}#breadcrumb` } } : {}), ...(serviceData.length ? { mainEntity: serviceData.map(service => ({ "@id": service["@id"] })) } : pageKey === "projects" ? { mainEntity: { "@id": projectList["@id"] } } : {}) },
      ...(pageKey !== "home" ? [{ "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl }, { "@type": "ListItem", position: 2, name: page.label, item: url }] }] : []),
      ...serviceData,
      ...(pageKey === "projects" ? [projectList] : []),
    ],
  }} />
}
