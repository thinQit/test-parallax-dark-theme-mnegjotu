"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Music, Radio, Sparkles, Mic2, Globe, Star } from "lucide-react";

interface ParallaxFeatureSectionProps {
  headline: string;
  description: string;
  imageUrl: string;
  imageOnRight?: boolean;
  features?: { icon: string; title: string; description: string }[];
  ctaLabel?: string;
  ctaHref?: string;
}

const iconMap: Record<string, React.ElementType> = {
  Music,
  Radio,
  Sparkles,
  Mic2,
  Globe,
  Star,
};

export default function ParallaxFeatureSection({
  headline = "Cinematic Sound. Global Stage.",
  description = "From studio-crafted singles to full-scale live productions, Neon Pulse merges electronic intensity with emotional songwriting.",
  imageUrl = "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771576907/site-images/corporate/10142683.jpg",
  imageOnRight = true,
  features = [
    { icon: "Music", title: "Original Releases", description: "Genre-blending tracks engineered for streaming and live impact." },
    { icon: "Radio", title: "Tour-Ready Sets", description: "High-energy setlists tailored for clubs, festivals, and arenas." },
    { icon: "Sparkles", title: "Visual Identity", description: "Synchronized lighting and visuals that amplify every drop." },
  ],
  ctaLabel = "Explore the Sound",
  ctaHref = "#latest-release",
}: Partial<ParallaxFeatureSectionProps>) {
  var ref = useRef<HTMLDivElement>(null);
  var { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  var imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  var textY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  var imageCol = (
    <motion.div style={{ y: imageY }} className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-card card-hover">
      <Image src={imageUrl} alt={headline} width={900} height={1100} unoptimized className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
    </motion.div>
  );

  var textCol = (
    <motion.div style={{ y: textY }} className="flex flex-col justify-center animate-fade-in-up">
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-foreground">{headline}</h2>
      <p className="mt-4 text-lg text-muted-foreground">{description}</p>
      {features && features.length > 0 && (
        <div className="mt-8 grid gap-4">
          {features.map(function (f, i) {
            const Icon = iconMap[f.icon] || Star;
            return (
              <div key={i} className="flex gap-4">
                <span className="text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {ctaLabel && ctaHref && (
        <div className="mt-8">
          <a
            href={ctaHref}
            className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:scale-105"
          >
            {ctaLabel}
          </a>
        </div>
      )}
    </motion.div>
  );

  return (
    <section ref={ref} className="py-20 md:py-28 overflow-hidden bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className={"grid items-center gap-12 md:gap-16 md:grid-cols-2 " + (imageOnRight ? "" : "md:[direction:rtl] md:[&>*]:[direction:ltr]")}>
          {imageOnRight ? (
            <>
              {textCol}
              {imageCol}
            </>
          ) : (
            <>
              {imageCol}
              {textCol}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
