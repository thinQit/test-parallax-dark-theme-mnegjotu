export const dynamic = 'force-dynamic';

import { AnimatedContent } from "@/components/ui/effects/animated-content";
import StarfieldHero from "@/components/StarfieldHero";
import ParallaxFeatureSection from "@/components/ParallaxFeatureSection";
import TeamGrid from "@/components/TeamGrid";
import CinematicQuoteSection from "@/components/CinematicQuoteSection";

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <AnimatedContent className="animate-fade-in-up">
        <StarfieldHero
          headline="A studio built for the moment before the lights go up."
          subheadline="We design the systems behind the spectacle—so your brand stays consistent while your visuals stay surprising."
          primaryCta={{ label: "See services", href: "/services" }}
          secondaryCta={{ label: "Contact", href: "/contact" }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,g_auto,q_auto:best,f_auto/v1771576893/site-images/corporate/10041276.jpg"
        />
      </AnimatedContent>

      <AnimatedContent className="animate-fade-in-up bg-muted py-20 md:py-28 border-b border-border">
        <ParallaxFeatureSection />
      </AnimatedContent>

      <AnimatedContent className="animate-fade-in-up py-20 md:py-28 border-b border-border">
        <TeamGrid />
      </AnimatedContent>

      <AnimatedContent className="animate-fade-in-up bg-muted py-20 md:py-28">
        <CinematicQuoteSection />
      </AnimatedContent>
    </div>
  );
}
