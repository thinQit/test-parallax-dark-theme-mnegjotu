"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

interface FooterMultiColumnProps {
  brand: string;
  description: string;
  columns: FooterColumn[];
  copyright?: string;
}

export default function FooterMultiColumn({
  brand = "Neon Pulse",
  description = "Neon Pulse creates immersive live electronic performances, cinematic releases, and high-energy global tours.",
  columns = [
    {
      title: "Music",
      links: [
        { label: "Latest Release", href: "#latest-release" },
        { label: "Videos", href: "#videos" },
        { label: "Merch", href: "#merch" },
      ],
    },
    {
      title: "Live",
      links: [
        { label: "Tour Dates", href: "#tour-dates" },
        { label: "Bookings", href: "#bookings" },
        { label: "Press Kit", href: "#press" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "About", href: "#about" },
        { label: "Social", href: "#social" },
        { label: "Newsletter", href: "#newsletter" },
      ],
    },
  ],
  copyright,
}: Partial<FooterMultiColumnProps>) {
  return (
    <footer className="bg-background text-foreground border-t border-border">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16 animate-fade-in-up">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-foreground">{brand}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{description}</p>
          </div>
          {columns.map(function (col) {
            return (
              <div key={col.title}>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map(function (link) {
                    return (
                      <li key={link.href + link.label}>
                        <Link
                          href={link.href}
                          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <Separator className="my-8 bg-border" />
        <p className="text-center text-sm text-muted-foreground">
          {copyright || "© " + new Date().getFullYear() + " " + brand + ". All rights reserved."}
        </p>
      </div>
    </footer>
  );
}
