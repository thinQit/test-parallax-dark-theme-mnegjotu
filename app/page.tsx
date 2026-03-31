export const dynamic = 'force-dynamic';

import { AnimatedContent } from "@/components/ui/effects/animated-content";
import StarfieldHero from "@/components/StarfieldHero";
import SectionHeader from "@/components/SectionHeader";
import LatestReleasePlayer from "@/components/LatestReleasePlayer";
import TourDatesList from "@/components/TourDatesList";
import VideoGrid from "@/components/VideoGrid";
import MerchPricingCards from "@/components/MerchPricingCards";
import TeamGrid from "@/components/TeamGrid";
import SocialLinksRow from "@/components/SocialLinksRow";
import NewsletterForm from "@/components/NewsletterForm";
import HorizontalScrollGallery from "@/components/HorizontalScrollGallery";
import ParallaxFeatureSection from "@/components/ParallaxFeatureSection";
import CinematicQuoteSection from "@/components/CinematicQuoteSection";
import TestimonialsAnimated from "@/components/TestimonialsAnimated";

export default function HomePage() {
  return (
    <div className="bg-background text-foreground">
      <AnimatedContent className="animate-fade-in-up">
        <StarfieldHero
          headline="Build a brand that moves people."
          subheadline="Aurora Digital Studio crafts brand identity, motion design, and immersive digital experiences—cinematic visuals engineered for modern screens and real-world moments."
          primaryCta={{ label: "Book a discovery call", href: "/contact" }}
          secondaryCta={{ label: "Watch our reel", href: "/work#reel" }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,g_auto,q_auto:best,f_auto/v1771576912/site-images/corporate/10384120.jpg"
        />
      </AnimatedContent>

      <AnimatedContent className="animate-fade-in-up bg-muted py-20 md:py-28 border-b border-border">
        <LatestReleasePlayer />
      </AnimatedContent>

      <AnimatedContent className="animate-fade-in-up py-20 md:py-28 border-b border-border">
        <TourDatesList />
      </AnimatedContent>

      <AnimatedContent className="animate-fade-in-up bg-muted py-20 md:py-28 border-b border-border">
        <VideoGrid />
      </AnimatedContent>

      <AnimatedContent className="animate-fade-in-up py-20 md:py-28 border-b border-border">
        <MerchPricingCards />
      </AnimatedContent>

      <AnimatedContent className="animate-fade-in-up bg-muted py-20 md:py-28 border-b border-border">
        <ParallaxFeatureSection />
      </AnimatedContent>

      <AnimatedContent className="animate-fade-in-up py-20 md:py-28 border-b border-border">
        <HorizontalScrollGallery />
      </AnimatedContent>

      <AnimatedContent className="animate-fade-in-up bg-muted py-20 md:py-28 border-b border-border">
        <TeamGrid />
      </AnimatedContent>

      <AnimatedContent className="animate-fade-in-up py-20 md:py-28 border-b border-border">
        <SocialLinksRow />
      </AnimatedContent>

      <AnimatedContent className="animate-fade-in-up bg-muted py-20 md:py-28 border-b border-border">
        <TestimonialsAnimated
          title="Trusted by founders, labels, and product teams"
          subtitle="Visual narratives built for bold launches."
          testimonials={[
            {
              quote:
                "Aurora translated our strategy into a visual world that finally felt alive across every channel.",
              name: "Nia R.",
              designation: "CMO, Neon Arc Records",
              src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_400,h_400,g_face,q_auto:best,f_auto/v1771577327/site-images/team-people/12899112.jpg",
            },
            {
              quote:
                "The motion system cut production time in half while raising quality across social and product.",
              name: "Evan M.",
              designation: "Head of Brand, Lumen Athletics",
              src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_400,h_400,g_face,q_auto:best,f_auto/v1771577335/site-images/team-people/1181734.jpg",
            },
          ]}
          autoplay
        />
      </AnimatedContent>

      <AnimatedContent className="animate-fade-in-up py-20 md:py-28">
        <NewsletterForm />
      </AnimatedContent>
    </div>
  );
}
