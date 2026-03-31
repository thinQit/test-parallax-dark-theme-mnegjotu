"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedContent } from "@/components/ui/effects/animated-content";

interface TestimonialItem {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface TestimonialsAnimatedProps {
  headline: string;
  subheadline?: string;
  testimonials: TestimonialItem[];
  autoplay?: boolean;
}

export default function TestimonialsAnimated({
  headline = "Voices From Collaborators",
  subheadline = "Artists, promoters, and producers on the Neon Pulse experience.",
  testimonials = [
    {
      quote: "Working with Neon Pulse elevated our entire showcase. The crowd response was electric from first beat to encore.",
      name: "Maya Torres",
      designation: "Festival Director",
      src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577335/site-images/team-people/1181734.jpg",
    },
    {
      quote: "The production quality is world-class. Every transition, every visual, every drop was perfectly timed.",
      name: "Jordan Lee",
      designation: "Creative Producer",
      src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577351/site-images/team-people/12903244.jpg",
    },
  ],
  autoplay = true,
}: Partial<TestimonialsAnimatedProps>) {
  var [current, setCurrent] = useState(0);

  useEffect(
    function () {
      if (!autoplay || testimonials.length === 0) return;
      var timer = setInterval(function () {
        setCurrent(function (c) {
          return (c + 1) % testimonials.length;
        });
      }, 5000);
      return function () {
        clearInterval(timer);
      };
    },
    [autoplay, testimonials.length]
  );

  var t = testimonials[current];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <AnimatedContent animation="fadeUp">
          <div className="mx-auto max-w-2xl text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
            {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
          </div>
        </AnimatedContent>
        {t && (
          <div className="mx-auto max-w-3xl card-hover rounded-xl border border-border bg-card p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="mx-auto mb-6 h-16 w-16 overflow-hidden rounded-full">
                  <Image
                    src={t.src}
                    alt={t.name}
                    width={64}
                    height={64}
                    unoptimized
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <blockquote className="text-lg md:text-xl italic text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-4">
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.designation}</p>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="mt-8 flex justify-center gap-2">
              {testimonials.map(function (_, i) {
                return (
                  <button
                    key={i}
                    onClick={function () {
                      setCurrent(i);
                    }}
                    className={"h-2 rounded-full transition-all " + (i === current ? "w-8 bg-primary" : "w-2 bg-muted")}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
