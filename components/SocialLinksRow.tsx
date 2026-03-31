'use client'

import Link from 'next/link'
import { Instagram, Youtube, Music2, ArrowUpRight } from 'lucide-react'
import { AnimatedContent } from '@/components/ui/effects/animated-content'

interface SocialItem {
  name: string
  handle: string
  href: string
  icon: string
}
interface SocialLinksRowProps {
  links?: SocialItem[]
}

const iconMap = {
  Instagram,
  Youtube,
  Music2,
}

export default function SocialLinksRow({
  links = [
    { name: 'Instagram', handle: '@aurora.studio', href: 'https://instagram.com', icon: 'Instagram' },
    { name: 'YouTube', handle: 'Aurora Studio', href: 'https://youtube.com', icon: 'Youtube' },
    { name: 'Spotify', handle: 'Aurora Sessions', href: 'https://spotify.com', icon: 'Music2' },
  ],
}: Partial<SocialLinksRowProps>) {
  return (
    <section id="social" className="bg-[#09090b] px-4 py-20 md:px-6">
      <AnimatedContent>
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {links.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || Music2
            return (
              <Link
                key={item.name}
                href={item.href}
                target="_blank"
                className="group rounded-xl border border-[#1a1a1a] bg-[#111111] p-5 transition hover:border-[#00F5D4]/40"
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-5 w-5 text-[#00F5D4]" />
                  <ArrowUpRight className="h-4 w-4 text-[#fafafa]/70" />
                </div>
                <p className="mt-4 font-['Anton'] text-2xl text-[#fafafa]">{item.name}</p>
                <p className="font-['Bebas_Neue'] text-2xl text-[#fafafa]/70 group-hover:text-[#00F5D4]">{item.handle}</p>
              </Link>
            )
          })}
        </div>
      </AnimatedContent>
    </section>
  )
}
