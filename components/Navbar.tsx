'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { AnimatedContent } from '@/components/ui/effects/animated-content'
import { cn } from '@/lib/utils'

interface NavItem {
  label: string
  href: string
}

interface NavbarProps {
  items?: NavItem[]
  activePath?: string
  brand?: string
}

export default function Navbar({
  items = [
    { label: 'Home', href: '#home' },
    { label: 'Latest Release', href: '#latest-release' },
    { label: 'Tour Dates', href: '#tour-dates' },
    { label: 'Videos', href: '#videos' },
    { label: 'Merch', href: '#merch' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  activePath = '#home',
  brand = 'Aurora Digital Studio',
}: Partial<NavbarProps>) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatedContent>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          isScrolled ? 'bg-[#09090b]/90 backdrop-blur-xl border-b border-[#1a1a1a]' : 'bg-transparent'
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
          <Link href="#home" className="font-['Anton'] text-xl tracking-wide text-[#fafafa]">
            {brand}
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {items.map((item) => {
              const active = activePath === item.href
              return (
                <Link key={item.href} href={item.href} className="relative font-['Bebas_Neue'] text-lg text-[#fafafa]/90">
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-1 left-0 h-0.5 w-full bg-[#00F5D4]"
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          <Button
            variant="ghost"
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#fafafa] hover:bg-[#111111]"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {open && (
          <div className="border-t border-[#1a1a1a] bg-[#09090b] px-4 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 font-['Bebas_Neue'] text-xl text-[#fafafa] hover:bg-[#111111]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </AnimatedContent>
  )
}
