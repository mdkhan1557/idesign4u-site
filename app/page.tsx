import { HeroSection } from "@/components/home/hero-section";
import { MarqueeSection } from "@/components/home/marquee-section";
import { ServicesPreview } from "@/components/home/services-preview";
import { PortfolioPreview } from "@/components/home/portfolio-preview";
import { ProcessSection } from "@/components/home/process-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { PricingPreview } from "@/components/home/pricing-preview";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <ServicesPreview />
      <PortfolioPreview />
      <ProcessSection />
      <TestimonialsSection />
      <PricingPreview />
    </>
  );
}
