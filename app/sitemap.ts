import type { MetadataRoute } from "next"

const baseUrl = "https://unostudio.org"
const currentLastModified = new Date("2026-10-23")

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: currentLastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ]
}
