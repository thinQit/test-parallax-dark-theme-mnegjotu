'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { AnimatedContent } from '@/components/ui/effects/animated-content'
import { AuroraBackground } from '@/components/ui/backgrounds/aurora-background'
import { Button } from '@/components/ui/button'

interface StarfieldHeroProps {
  title?: string
  subtitle?: string
  imageSrc?: string
}

export default function StarfieldHero({
  title = 'Cinematic Identities For Brands That Lead',
  subtitle = 'We design bold identities, motion systems, and immersive digital experiences that move culture forward.',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577710/site-images/hero-backgrounds/12981879.jpg',
}: Partial<StarfieldHeroProps>) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 160])

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#09090b]">
      <AuroraBackground className="absolute inset-0 opacity-70" />
      <motion.div style={{ y }} className="absolute inset-0">
        <Image src={imageSrc} alt="Hero visual" fill unoptimized className="object-cover opacity-20" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/40 via-[#09090b]/75 to-[#09090b]" />

      <AnimatedContent>
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-start justify-center px-4 md:px-6">
          <p className="font-['Bebas_Neue'] text-2xl tracking-[0.2em] text-[#00F5D4]">AURORA DIGITAL STUDIO</p>
          <h1 className="mt-4 max-w-4xl font-['Anton'] text-5xl leading-[0.95] text-[#fafafa] md:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl font-['Bebas_Neue'] text-2xl text-[#fafafa]/80 md:text-3xl">{subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button className="bg-[#00F5D4] text-[#09090b] hover:bg-[#00F5D4]/90">View Work</Button>
            <Button variant="outline" className="border-[#00F5D4]/60 text-[#fafafa] hover:bg-[#00F5D4]/10">
              Book Discovery
            </Button>
          </div>
        </div>
      </AnimatedContent>
    </section>
  )
}
