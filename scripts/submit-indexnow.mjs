import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import { pages, siteUrl } from "../lib/seo.ts"

// Run manually after a production deployment. The verification key is public.
const key = (await readFile(new URL("../public/indexnow-key.txt", import.meta.url), "utf8")).trim()
assert.match(key, /^[a-f0-9]{32}$/)
const keyLocation = `${siteUrl}/indexnow-key.txt`
const verification = await fetch(keyLocation)
assert.equal(verification.status, 200, "Publish the verification file before submitting.")
assert.equal((await verification.text()).trim(), key, "Production must serve this key.")
const response = await fetch(`${siteUrl}/sitemap.xml`)
assert.equal(response.status, 200)
const sitemap = await response.text()
const urlList = Object.values(pages).map(page => `${siteUrl}${page.path}`)
for (const url of urlList) assert.ok(sitemap.includes(`<loc>${url}</loc>`), `Production sitemap is missing ${url}`)
const result = await fetch("https://api.indexnow.org/indexnow", { method: "POST", headers: { "Content-Type": "application/json; charset=utf-8" }, body: JSON.stringify({ host: new URL(siteUrl).host, key, keyLocation, urlList }) })
assert.ok([200, 202].includes(result.status), `IndexNow HTTP ${result.status}: ${await result.text()}`)
console.log(`IndexNow accepted ${urlList.length} URLs (HTTP ${result.status}). This acknowledges submission, not indexing.`)
