export const dynamic = 'force-dynamic';

import { AnimatedContent } from "@/components/ui/effects/animated-content";
import StarfieldHero from "@/components/StarfieldHero";
import LatestReleasePlayer from "@/components/LatestReleasePlayer";
import HorizontalScrollGallery from "@/components/HorizontalScrollGallery";
import TestimonialsAnimated from "@/components/TestimonialsAnimated";
import CinematicQuoteSection from "@/components/CinematicQuoteSection";

export default function WorkPage() {
  return (
    <div className="bg-background text-foreground">
      <AnimatedContent className="animate-fade-in-up">
        <StarfieldHero
          headline="Work that hits in motion."
          subheadline="Selected identity systems, motion kits, and immersive web experiences—built to convert attention into action."
          primaryCta={{ label: "Watch reel", href: "/work#reel" }}
          secondaryCta={{ label: "Request a quote", href: "/contact" }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,g_auto,q_auto:best,f_auto/v1771576911/site-images/corporate/11408874.jpg"
        />
      </AnimatedContent>

      <AnimatedContent className="animate-fade-in-up bg-muted py-20 md:py-28 border-b border-border">
        <LatestReleasePlayer />
      </AnimatedContent>

      <AnimatedContent className="animate-fade-in-up py-20 md:py-28 border-b border-border">
        <HorizontalScrollGallery />
      </AnimatedContent>

      <AnimatedContent className="animate-fade-in-up bg-muted py-20 md:py-28 border-b border-border">
        <TestimonialsAnimated
          title="Selected Case Studies"
          subtitle="How strategy became visuals that ship."
          testimonials={[
            {
              quote:
                "Our label refresh came with a toolkit the team could actually use on day one.",
              name: "Leah K.",
              designation: "Founder, Neon Arc Records",
              src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_400,h_400,g_face,q_auto:best,f_auto/v1771577351/site-images/team-people/12903244.jpg",
            },
            {
              quote:
                "The immersive launch page held attention and stayed performant under pressure.",
              name: "Jordan C.",
              designation: "Product Marketing, Lumen Athletics",
              src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_400,h_400,g_face,q_auto:best,f_auto/v1771577370/site-images/team-people/1181405.jpg",
            },
            {
              quote:
                "Aurora gave us motion principles that made our product UI feel coherent and premium.",
              name: "Ravi S.",
              designation: "Design Lead, Orbit Fintech",
              src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_400,h_400,g_face,q_auto:best,f_auto/v1771577325/site-images/team-people/10347164.jpg",
            },
          ]}
        />
      </AnimatedContent>

      <AnimatedContent className="animate-fade-in-up py-20 md:py-28">
        <CinematicQuoteSection />
      </AnimatedContent>
    </div>
  );
}
