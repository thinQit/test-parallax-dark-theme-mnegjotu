"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface GalleryItem {
  imageUrl: string;
  title: string;
  description?: string;
  href?: string;
}

interface HorizontalScrollGalleryProps {
  headline?: string;
  items: GalleryItem[];
}

export default function HorizontalScrollGallery({
  headline = "Live Visuals & Stage Moments",
  items = [
    {
      imageUrl:
        "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771578307/site-images/events/11203501.jpg",
      title: "Midnight Lights Tour",
      description: "Arena crowd energy during the opening drop.",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771578321/site-images/events/12954021.jpg",
      title: "Festival Main Stage",
      description: "Neon strobes, synth wave, and full-band crescendo.",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771578324/site-images/events/12432504.jpg",
      title: "Encore Finale",
      description: "Final set visuals synced to crowd chants.",
    },
  ],
}: Partial<HorizontalScrollGalleryProps>) {
  var containerRef = useRef<HTMLDivElement>(null);
  var { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  var x = useTransform(scrollYProgress, [0, 1], ["1%", "-" + (items.length * 25 - 25) + "%"]);

  return (
    <section ref={containerRef} style={{ height: items.length * 60 + "vh" }} className="relative bg-background text-foreground">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="container mx-auto px-4 animate-fade-in-up">
          {headline && <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">{headline}</h2>}
          <motion.div style={{ x: x }} className="flex gap-6">
            {items.map(function (item, i) {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="min-w-[350px] md:min-w-[450px] lg:min-w-[550px] shrink-0"
                >
                  <div className="group card-hover relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={1200}
                      height={900}
                      unoptimized
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6 text-foreground">
                      <h3 className="text-xl font-bold md:text-2xl">{item.title}</h3>
                      {item.description && <p className="mt-2 text-sm text-foreground/80">{item.description}</p>}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
