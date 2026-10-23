import assert from "node:assert/strict"
import { pages, siteUrl } from "../lib/seo.ts"

const origin = (process.argv[2] || "http://localhost:3007").replace(/\/$/, "")
const get = async path => {
  const response = await fetch(`${origin}${path}`)
  assert.equal(response.status, 200, `${path}: HTTP ${response.status}`)
  return response.text()
}
const tag = (html, name, value) => [...html.matchAll(/<(?:meta|link)\s[^>]*>/g)].map(match => match[0]).find(valueTag => valueTag.includes(`${name}="${value}"`)) || ""
const graphs = html => [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap(match => JSON.parse(match[1])["@graph"])
const results = []

for (const [key, page] of Object.entries(pages)) {
  const html = await get(page.path)
  assert.ok(html.includes(`<title>${page.title} | unostudio</title>`), `${page.path}: title`)
  assert.ok(tag(html, "name", "description").includes(page.description), `${page.path}: description`)
  assert.equal(new URL(tag(html, "rel", "canonical").match(/href="([^"]+)"/)[1]).href, `${siteUrl}${page.path}`, `${page.path}: canonical`)
  assert.ok(tag(html, "property", "og:title").includes(`${page.title} | unostudio`), `${page.path}: social title`)
  assert.equal(new URL(tag(html, "property", "og:url").match(/content="([^"]+)"/)[1]).href, `${siteUrl}${page.path}`, `${page.path}: social URL`)
  assert.ok(tag(html, "name", "twitter:description").includes(page.description), `${page.path}: social description`)
  assert.ok(tag(html, "property", "og:image").includes("/opengraph-image"), `${page.path}: branded image`)
  assert.ok(!tag(html, "name", "robots").includes("noindex"), `${page.path}: indexable`)
  assert.ok(tag(html, "name", "robots").includes("max-image-preview:large"), `${page.path}: large image preview`)
  assert.equal([...html.matchAll(/<h1(?:\s|>)/g)].length, 1, `${page.path}: single heading`)
  const data = graphs(html)
  assert.ok(data.some(item => item["@type"] === "Organization" && item.name === "unostudio"), `${page.path}: organization`)
  assert.ok(data.some(item => item["@type"] === "WebSite" && item.inLanguage === "es-ES"), `${page.path}: website`)
  assert.ok(data.some(item => item["@id"] === `${siteUrl}${page.path}#webpage`), `${page.path}: page entity`)
  assert.ok(!data.some(item => item.aggregateRating || item.review), `${page.path}: no invented ratings`)
  if (key !== "home") assert.ok(data.some(item => item["@type"] === "BreadcrumbList"), `${page.path}: breadcrumbs`)
  if (["web", "software", "ai", "seo"].includes(key)) assert.equal(data.filter(item => item["@type"] === "Service").length, 1, `${page.path}: service`)
  if (key === "services") assert.equal(data.filter(item => item["@type"] === "Service").length, 8)
  if (key === "projects") {
    const list = data.find(item => item["@type"] === "ItemList")
    assert.equal(list.itemListElement.length, 9)
    for (const entry of list.itemListElement) assert.ok(html.includes(`href="${entry.item.url}"`), `Visible project link: ${entry.item.url}`)
  }
  if (key === "seo") assert.ok(html.includes("¿También sirve para ChatGPT y Gemini?"), "FAQ readable without JavaScript")
  results.push({ path: page.path, structuredEntities: data.length })
}

const robots = await get("/robots.txt")
assert.match(robots, /User-Agent: \*\s+Allow: \//i)
assert.doesNotMatch(robots, /^Disallow:\s*\/\s*$/im)
assert.ok(robots.includes(`${siteUrl}/sitemap.xml`))
const sitemap = await get("/sitemap.xml")
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1])
assert.deepEqual(urls.sort(), Object.values(pages).map(page => `${siteUrl}${page.path}`).sort())
for (const path of ["aviso-legal", "privacidad", "cookies", "terminos"]) assert.ok(tag(await get(`/legal/${path}`), "name", "robots").includes("noindex"), `Legal noindex: ${path}`)
assert.equal((await fetch(`${origin}/pagina-que-no-existe`)).status, 404)
for (const agent of ["OAI-SearchBot", "Googlebot", "bingbot"]) {
  const response = await fetch(`${origin}/seo`, { headers: { "User-Agent": agent } })
  assert.equal(response.status, 200, `Crawler access: ${agent}`)
  assert.ok((await response.text()).includes("SEO para que te encuentren."), `Crawler content: ${agent}`)
}
const shareImage = await fetch(`${origin}/opengraph-image`)
assert.equal(shareImage.status, 200)
assert.match(shareImage.headers.get("content-type"), /image\/png/)
assert.deepEqual([...new Uint8Array(await shareImage.arrayBuffer()).slice(0, 8)], [137, 80, 78, 71, 13, 10, 26, 10])
for (const path of ["/logos/brand-icon.png", "/logos/icon-96.png", "/logos/apple-icon-180.png", "/images/mediterranean-cove.webp"]) assert.equal((await fetch(`${origin}${path}`)).status, 200, path)
console.log(JSON.stringify({ origin, pages: results, sitemapUrls: urls.length, crawlerRequests: 3, status: "passed" }, null, 2))
