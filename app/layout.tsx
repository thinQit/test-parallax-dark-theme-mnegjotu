import type { Metadata } from "next";
import { Anton, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollProgressBar } from "@/components/ui/effects/scroll-progress-bar";
import { SmoothScroll } from "@/components/ui/effects/smooth-scroll";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
  title:
    "Aurora Digital Studio — Brand Identity, Motion Design & Immersive Digital",
  description:
    "Aurora Digital Studio is a cutting-edge creative agency specializing in brand identity, motion design, and immersive digital experiences. Cinematic visuals engineered for modern launches.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${bebasNeue.variable}`}>
      <body className="bg-background text-foreground antialiased">
        <div className="film-grain pointer-events-none fixed inset-0 z-[9999]" />
        <Navbar
          logo="Aurora Digital Studio"
          navItems={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Work", href: "/work" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ]}
          ctaLabel="Start a project"
          ctaHref="/contact"
        />
        <SmoothScroll>
          <ScrollProgressBar />
          <main>{children}</main>
        </SmoothScroll>
        <Footer
          headline="Ready to launch something unforgettable?"
          subheadline="Tell us what you’re building—we’ll respond within 1–2 business days."
          primaryCta={{ label: "Start a project", href: "/contact" }}
          secondaryCta={{ label: "View work", href: "/work" }}
          content={{
            address: "Aurora Digital Studio • Arts District, Los Angeles, CA",
            email: "hello@auroradigital.studio",
            phone: "+1 (213) 555-0198",
            copyright: "© 2026 Aurora Digital Studio. All rights reserved.",
            footerLinks: [
              { label: "Services", href: "/services" },
              { label: "Work", href: "/work" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ],
          }}
        />
      </body>
    </html>
  );
}
