"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatedContent } from "@/components/ui/effects/animated-content";
import { Button } from "@/components/ui/button";

type FooterLink = { label: string; href: string };

interface FooterProps {
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  content?: {
    address?: string;
    email?: string;
    phone?: string;
    copyright?: string;
    footerLinks?: FooterLink[];
  };
}

export default function Footer({
  headline = "Ready to launch something unforgettable?",
  subheadline = "Tell us what you’re building—we’ll respond within 1–2 business days.",
  primaryCta = { label: "Start a project", href: "/contact" },
  secondaryCta = { label: "View work", href: "/work" },
  content = {
    address: "Aurora Digital Studio • Arts District, Los Angeles, CA",
    email: "hello@auroradigital.studio",
    phone: "+1 (213) 555-0198",
    copyright: "© 2026 Aurora Digital Studio. All rights reserved.",
    footerLinks: [
      { label: "Services", href: "/services" },
      { label: "Work", href: "/work" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" }
    ]
  }
}: FooterProps) {
  return (
    <footer className="bg-background px-4 pb-8 pt-20 md:px-6 border-t border-border">
      <AnimatedContent>
        <div className="mx-auto max-w-7xl">
          <div className="rounded-xl border border-border bg-card p-6 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="font-['Anton'] text-3xl md:text-4xl text-foreground">{headline}</h3>
              <p className="mt-3 max-w-2xl font-['Bebas_Neue'] text-2xl text-muted-foreground">{subheadline}</p>
            </div>
            <div className="flex flex-col-reverse sm:flex-row gap-3">
              {secondaryCta ? (
                <Button variant="outline" className="border-accent/60 text-foreground hover:bg-accent/10 hover:text-accent" asChild>
                  <Link href={secondaryCta.href}>
                    {secondaryCta.label}
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              ) : null}
              {primaryCta ? (
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                  <Link href={primaryCta.href}>
                    {primaryCta.label}
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              ) : null}
            </div>
          </div>

          <div className="mt-10 grid gap-8 border-t border-border pt-8 md:grid-cols-3">
            <div>
              <h4 className="font-['Anton'] text-xl text-foreground">Aurora Digital Studio</h4>
              {content.address && <p className="mt-2 font-['Bebas_Neue'] text-xl text-muted-foreground">{content.address}</p>}
              {content.email && <p className="font-['Bebas_Neue'] text-xl text-muted-foreground">{content.email}</p>}
              {content.phone && <p className="font-['Bebas_Neue'] text-xl text-muted-foreground">{content.phone}</p>}
            </div>
            <div className="space-y-2">
              {(content.footerLinks ?? []).map(item => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex w-fit items-center gap-2 rounded-md px-1 font-['Bebas_Neue'] text-xl text-muted-foreground hover:text-accent transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {item.label}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
            <p className="self-end font-['Bebas_Neue'] text-xl text-muted-foreground/80">
              {content.copyright ?? `© ${new Date().getFullYear()} Aurora Digital Studio. All rights reserved.`}
            </p>
          </div>
        </div>
      </AnimatedContent>
    </footer>
  );
}
