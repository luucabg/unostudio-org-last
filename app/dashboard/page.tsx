import type { Metadata } from "next"
import { requireUser } from "@/lib/auth"
import { LeadsPanel, type DashboardOrganization } from "@/components/dashboard/leads-panel"

export const metadata: Metadata = {
  title: "Solicitudes",
  robots: { index: false, follow: false },
}

export const dynamic = "force-dynamic"

export default async function DashboardPage() {
  const { supabase } = await requireUser("/dashboard")

  const { data } = await supabase
    .from("organizations")
    .select("id, name, slug, website_url")
    .order("name", { ascending: true })
    .returns<DashboardOrganization[]>()

  return <LeadsPanel organizations={data ?? []} />
}
