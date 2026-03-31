"use client";
import React from "react";
import Image from "next/image";
import { ScrollRevealText } from "@/components/ui/text/scroll-reveal-text";

interface CinematicQuoteSectionProps {
  quote: string;
  author: string;
  role?: string;
  imageUrl?: string;
}

export default function CinematicQuoteSection({
  quote = "Every song should feel like the lights just cut out and your heartbeat became the metronome.",
  author = "Neon Pulse",
  role = "Artist & Producer",
  imageUrl = "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577327/site-images/team-people/12899112.jpg",
}: Partial<CinematicQuoteSectionProps>) {
  return (
    <section className="py-32 md:py-48 bg-background">
      <div className="container mx-auto max-w-5xl px-4 animate-fade-in-up">
        <ScrollRevealText
          text={quote}
          className="text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl xl:text-6xl text-foreground"
        />
        <div className="mt-12 flex items-center gap-4">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={author}
              width={56}
              height={56}
              unoptimized
              className="h-14 w-14 rounded-full object-cover transition-transform duration-500 hover:scale-105"
            />
          )}
          <div>
            <p className="font-semibold text-foreground">{author}</p>
            {role && <p className="text-sm text-muted-foreground">{role}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
