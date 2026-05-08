import type { MetadataRoute } from "next"

const baseUrl = "https://unostudio.org"
const lastModified = new Date("2026-05-08")

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]
}
