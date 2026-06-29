import type { Metadata } from "next"
import { LeadFinderPanel } from "@/components/admin/lead-finder-panel"

export const metadata: Metadata = {
  title: "Lead Finder",
  robots: { index: false, follow: false },
}

export const dynamic = "force-dynamic"

export default function AdminLeadFinderPage() {
  return (
    <LeadFinderPanel
      hasGooglePlacesKey={Boolean(process.env.GOOGLE_PLACES_API_KEY)}
      hasDeepSeekKey={Boolean(process.env.DEEPSEEK_API_KEY)}
    />
  )
}
