import { Navbar } from "@/components/ui/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { PerceptionSection } from "@/components/sections/perception-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { ImpactSection } from "@/components/sections/impact-section"
import { SectorSystemsSection } from "@/components/sections/sector-systems-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { FaqSection } from "@/components/sections/faq-section"
import { CalBookingSection } from "@/components/sections/cal-booking-section"
import { FooterSection } from "@/components/sections/footer-section"
import { WhatsappFloatingButton } from "@/components/sections/whatsapp-floating-button"

type SearchParams = Promise<{
  estado?: string
  motivo?: string
}>

export default async function Home({ searchParams }: { searchParams?: SearchParams }) {
  const params = await searchParams

  return (
    <main className="min-h-screen bg-zinc-950">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <PerceptionSection />
      <FeaturesSection />
      <ImpactSection />
      <SectorSystemsSection />
      <PricingSection />
      <FaqSection />
      <CalBookingSection sent={params?.estado === "enviado"} failed={params?.estado === "error"} />
      <FooterSection />
      <WhatsappFloatingButton />
    </main>
  )
}
