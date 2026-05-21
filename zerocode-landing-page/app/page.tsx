import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { LogoCarousel } from "@/components/landing/logo-carousel"
import { PainPoints } from "@/components/landing/pain-points"
import { Differentiator } from "@/components/landing/differentiator"
import { Process } from "@/components/landing/process"
import { CaseStudies } from "@/components/landing/case-studies"
import { Trust } from "@/components/landing/trust"
import { Video } from "@/components/landing/video"
import { Testimonials } from "@/components/landing/testimonials"
import { FAQ } from "@/components/landing/faq"
import { FinalCTA } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0d0d1a",
}

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Header />
      <Hero />
      <LogoCarousel />
      <PainPoints />
      <Differentiator />
      <Process />
      <CaseStudies />
      <Trust />
      <Video />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
