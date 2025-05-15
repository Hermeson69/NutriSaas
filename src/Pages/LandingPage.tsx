import Header from "@/components/LandingPage/Header"
import Footer from "@/components/LandingPage/Footer"
import HeroSection from "@/components/LandingPage/Sections/HeroSection"
import TrustedBySection from "@/components/LandingPage/Sections/TrustedBySection"
import FeaturesSection from "@/components/LandingPage/Sections/FeaturesSection"
import HowItWorksSection from "@/components/LandingPage/Sections/HowItWorksSection"
import TestimonialsSection from "@/components/LandingPage/Sections/TestimonialsSection"
import PricingSection from "@/components/LandingPage/Sections/PricingSection"
import CTASection from "@/components/LandingPage/Sections/CTASection"
import AppDownloadSection from "@/components/LandingPage/Sections/AppDownloadSection"
import "../index.css"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TrustedBySection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
        <AppDownloadSection />
      </main>
      <Footer />
    </div>
  )
}
