import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import HeroSection from "@/components/LandingPage/HeroSection";
import TrustedBySection from "@/components/LandingPage/TrustedBySection";
import FeaturesSection from "@/components/LandingPage/FeaturesSection";
import HowItWorksSection from "@/components/LandingPage/HowItWorksSection";
import TestimonialsSection from "@/components/LandingPage/TestimonialsSection";
import PricingSection from "@/components/LandingPage/PricingSection";
import CTASection from "@/components/LandingPage/CTASection";
import AppDownloadSection from "@/components/LandingPage/AppDownloadSection";
import "../index.css";
import { useTheme } from "@/components/Provider/theme-provider";
import {cn} from "@/lib/utils"

export default function LandingPage() {
    const { theme } = useTheme();
    const isDark = theme === "dark";
  return (
    <div className={cn("flex min-h-screen flex-col items-center",
      isDark ? "bg-bark text-white" : "bg-light-50 text-dark"
    )}>
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
  );
}
