import type { Metadata } from "next"
import { ProspectsPanel } from "@/components/admin/prospects-panel"

export const metadata: Metadata = {
  title: "Prospección",
  robots: { index: false, follow: false },
}

export const dynamic = "force-dynamic"

export default function AdminProspectsPage() {
  return <ProspectsPanel />
}
