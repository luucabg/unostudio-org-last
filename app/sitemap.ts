import type { MetadataRoute } from "next"

const baseUrl = "https://unostudio.org"
const currentLastModified = new Date("2026-10-23")

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/diseno-web", "/software-a-medida", "/servicios", "/ia", "/proyectos", "/contacto"].map(path => ({
      url: `${baseUrl}${path}`,
      lastModified: currentLastModified,
      changeFrequency: "weekly",
      priority: path ? 0.8 : 1,
    }))
}
