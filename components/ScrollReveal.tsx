'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { AnimatedContent } from '@/components/ui/effects/animated-content'

interface ScrollRevealProps {
  children?: ReactNode
  className?: string
}

export default function ScrollReveal({ children = null, className = '' }: Partial<ScrollRevealProps>) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(media.matches)
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <AnimatedContent>
      <motion.div
        ref={ref}
        className={className}
        initial={{ opacity: 0, y: reduced ? 0 : 30 }}
        animate={{ opacity: visible ? 1 : 0, y: visible || reduced ? 0 : 30 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </AnimatedContent>
  )
}
