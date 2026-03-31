export const dynamic = 'force-dynamic';

import { AnimatedContent } from "@/components/ui/effects/animated-content";
import StarfieldHero from "@/components/StarfieldHero";
import ParallaxFeatureSection from "@/components/ParallaxFeatureSection";
import MerchPricingCards from "@/components/MerchPricingCards";
import CinematicQuoteSection from "@/components/CinematicQuoteSection";
import SectionHeader from "@/components/SectionHeader";

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground">
      <AnimatedContent className="animate-fade-in-up">
        <StarfieldHero
          headline="Services built for modern launches."
          subheadline="Identity, motion, and immersive web—packaged as a cohesive system so every touchpoint feels like the same story."
          primaryCta={{ label: "Get a quote", href: "/contact" }}
          secondaryCta={{ label: "See work", href: "/work" }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,g_auto,q_auto:best,f_auto/v1771576907/site-images/corporate/10142683.jpg"
        />
      </AnimatedContent>

      <AnimatedContent className="animate-fade-in-up bg-muted py-20 md:py-28 border-b border-border">
        <ParallaxFeatureSection />
      </AnimatedContent>

      <AnimatedContent className="animate-fade-in-up py-20 md:py-28 border-b border-border">
        <MerchPricingCards />
      </AnimatedContent>

      <AnimatedContent className="animate-fade-in-up bg-muted py-20 md:py-28">
        <CinematicQuoteSection />
      </AnimatedContent>
    </div>
  );
}
