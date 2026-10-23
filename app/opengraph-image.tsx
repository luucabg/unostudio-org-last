import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const alt = "unostudio. Diseño web, software a medida y SEO."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public/logos/logo_nav.png"))
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", padding: "64px 76px", background: "#0f46a3", color: "#fff" }}>
      {/* ImageResponse renders a bitmap, so next/image does not apply here. */}
      <img src={`data:image/png;base64,${logo.toString("base64")}`} width={280} height={52} alt="" />
      <div style={{ display: "flex", flexDirection: "column", marginTop: 86, fontSize: 68, lineHeight: 1.15, letterSpacing: -2 }}><span>Diseño web, software</span><span>a medida y SEO.</span></div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "auto", color: "#d3dff8", fontSize: 25 }}><span>Buenas ideas, hechas realidad.</span><span>unostudio.org</span></div>
    </div>,
    size,
  )
}
