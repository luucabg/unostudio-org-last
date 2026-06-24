import { Navbar } from "@/components/ui/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { FaqSection } from "@/components/sections/faq-section"
import { CalBookingSection } from "@/components/sections/cal-booking-section"
import { FooterSection } from "@/components/sections/footer-section"
import { WhatsappFloatingButton } from "@/components/sections/whatsapp-floating-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <FeaturesSection />
      <PricingSection />
      <FaqSection />
      <CalBookingSection />
      <FooterSection />
      <WhatsappFloatingButton />
    </main>
  )
}
