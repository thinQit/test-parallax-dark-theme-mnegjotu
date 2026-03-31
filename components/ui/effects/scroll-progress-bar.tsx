"use client";
import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * ScrollProgressBar renders a fixed neon progress bar at the top of the viewport
 * showing how far the user has scrolled the page. Accepts children for compatibility,
 * but in use, should be used standalone at app root.
 */
export function ScrollProgressBar({
  children,
  className,
}: { children?: React.ReactNode; className?: string }) {
  // If framer-motion's useScroll is available, prefer it on root scroll.
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        aria-hidden
        className={cn(
          "fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-accent pointer-events-none",
          className
        )}
        style={{ scaleX: scrollYProgress }}
        initial={{ scaleX: 0 }}
      />
      {children}
    </>
  );
}
