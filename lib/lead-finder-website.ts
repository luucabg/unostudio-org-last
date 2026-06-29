import { lookup } from "node:dns/promises"
import { isIP } from "node:net"

export type WebsiteSnapshot = {
  available: boolean
  final_url: string
  status: number | null
  title: string | null
  description: string | null
  h1: string | null
  text_sample: string | null
  note: string | null
}

const maxHtmlBytes = 120_000
const fetchTimeoutMs = 4_000
const maxRedirects = 2

function isPrivateIp(address: string) {
  if (address === "::1") return true
  if (address.startsWith("fc") || address.startsWith("fd") || address.startsWith("fe80:")) return true

  const parts = address.split(".").map(Number)
  if (parts.length !== 4 || parts.some((part) => Number.isNaN(part))) return false

  const [first, second] = parts
  return (
    first === 10 ||
    first === 127 ||
    first === 0 ||
    (first === 169 && second === 254) ||
    (first === 172 && second >= 16 && second <= 31) ||
    (first === 192 && second === 168)
  )
}

async function assertPublicHttpUrl(url: URL) {
  if (url.protocol !== "http:" && url.protocol !== "https:") {
    throw new Error("URL no permitida.")
  }

  const hostname = url.hostname.toLowerCase()
  if (hostname === "localhost" || hostname.endsWith(".local")) {
    throw new Error("Host no permitido.")
  }

  if (isIP(hostname) && isPrivateIp(hostname)) {
    throw new Error("IP privada no permitida.")
  }

  const addresses = await lookup(hostname, { all: true })
  if (addresses.some((entry) => isPrivateIp(entry.address))) {
    throw new Error("Host privado no permitido.")
  }
}

function cleanText(value: string | null) {
  if (!value) return null
  return value
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 900)
}

function matchMeta(html: string, name: string) {
  const pattern = new RegExp(
    `<meta[^>]+(?:name|property)=["']${name}["'][^>]+content=["']([^"']+)["'][^>]*>`,
    "i",
  )
  return html.match(pattern)?.[1]?.trim() ?? null
}

function parseHtml(html: string, finalUrl: string, status: number): WebsiteSnapshot {
  const title = cleanText(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? null)
  const description = cleanText(matchMeta(html, "description") ?? matchMeta(html, "og:description"))
  const h1 = cleanText(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? null)
  const body = cleanText(html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? html)

  return {
    available: status >= 200 && status < 400,
    final_url: finalUrl,
    status,
    title,
    description,
    h1,
    text_sample: body,
    note: null,
  }
}

async function readLimitedText(response: Response) {
  if (!response.body) return (await response.text()).slice(0, maxHtmlBytes)

  const reader = response.body.getReader()
  const chunks: Uint8Array[] = []
  let received = 0

  while (received < maxHtmlBytes) {
    const { done, value } = await reader.read()
    if (done || !value) break

    chunks.push(value)
    received += value.byteLength
  }

  await reader.cancel().catch(() => undefined)
  return new TextDecoder().decode(Buffer.concat(chunks).subarray(0, maxHtmlBytes))
}

async function fetchWithTimeout(url: URL) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), fetchTimeoutMs)

  try {
    return await fetch(url, {
      redirect: "manual",
      signal: controller.signal,
      headers: {
        "User-Agent": "unostudio-lead-finder/1.0",
        Accept: "text/html,application/xhtml+xml",
      },
    })
  } finally {
    clearTimeout(timeout)
  }
}

export async function fetchWebsiteSnapshot(rawUrl: string | null): Promise<WebsiteSnapshot | null> {
  if (!rawUrl) return null

  try {
    let currentUrl = new URL(rawUrl)

    for (let redirectCount = 0; redirectCount <= maxRedirects; redirectCount += 1) {
      await assertPublicHttpUrl(currentUrl)

      const response = await fetchWithTimeout(currentUrl)
      const location = response.headers.get("location")

      if (location && response.status >= 300 && response.status < 400) {
        currentUrl = new URL(location, currentUrl)
        continue
      }

      const contentType = response.headers.get("content-type") ?? ""
      if (!contentType.includes("text/html") && !contentType.includes("application/xhtml+xml")) {
        return {
          available: response.ok,
          final_url: currentUrl.toString(),
          status: response.status,
          title: null,
          description: null,
          h1: null,
          text_sample: null,
          note: "La web no devuelve HTML legible.",
        }
      }

      const html = await readLimitedText(response)
      return parseHtml(html, currentUrl.toString(), response.status)
    }

    return {
      available: false,
      final_url: rawUrl,
      status: null,
      title: null,
      description: null,
      h1: null,
      text_sample: null,
      note: "Demasiadas redirecciones.",
    }
  } catch {
    return {
      available: false,
      final_url: rawUrl,
      status: null,
      title: null,
      description: null,
      h1: null,
      text_sample: null,
      note: "No se pudo leer la home de forma segura.",
    }
  }
}
