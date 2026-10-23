import type { MetadataRoute } from "next"
import { pages, siteUrl } from "@/lib/seo"
const currentLastModified = new Date("2026-10-23")

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(pages).map(page => ({
      url: `${siteUrl}${page.path}`,
      lastModified: currentLastModified,
    }))
}
