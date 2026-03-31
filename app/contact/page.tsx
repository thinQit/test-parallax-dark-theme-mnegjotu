export const dynamic = 'force-dynamic';

import { AnimatedContent } from "@/components/ui/effects/animated-content";
import StarfieldHero from "@/components/StarfieldHero";
import ContactForm from "@/components/ContactForm";
import CinematicQuoteSection from "@/components/CinematicQuoteSection";

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <AnimatedContent className="animate-fade-in-up">
        <StarfieldHero
          headline="Let’s make something electric."
          subheadline="Share a few details and we’ll reply within 1–2 business days with next steps and a suggested scope."
          primaryCta={{ label: "Email us", href: "mailto:hello@auroradigital.studio" }}
          secondaryCta={{ label: "View work", href: "/work" }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,g_auto,q_auto:best,f_auto/v1771576876/site-images/corporate/1181252.jpg"
        />
      </AnimatedContent>

      <AnimatedContent className="animate-fade-in-up bg-muted py-20 md:py-28 border-b border-border">
        <ContactForm />
      </AnimatedContent>

      <AnimatedContent className="animate-fade-in-up py-20 md:py-28">
        <CinematicQuoteSection />
      </AnimatedContent>
    </div>
  );
}
