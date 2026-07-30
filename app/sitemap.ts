import type { MetadataRoute } from "next"

const baseUrl = "https://unostudio.org"
const currentLastModified = new Date("2026-07-30")
const contactLastModified = new Date("2026-05-08")

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: currentLastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/reformas`,
      lastModified: currentLastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: contactLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]
}
