'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { AnimatedContent } from '@/components/ui/effects/animated-content'

interface GlowButtonProps {
  label?: string
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function GlowButton({
  label = 'Explore',
  variant = 'primary',
  className = '',
}: Partial<GlowButtonProps>) {
  return (
    <AnimatedContent>
      <Button
        className={cn(
          'uppercase tracking-[0.18em] rounded-lg px-6 py-3 transition-all focus-visible:ring-2 focus-visible:ring-[#00F5D4]',
          variant === 'primary'
            ? 'bg-[#00F5D4] text-[#09090b] hover:shadow-[0_0_30px_rgba(0,245,212,0.5)]'
            : 'border border-[#00F5D4]/60 bg-transparent text-[#fafafa] hover:bg-[#00F5D4]/10 hover:shadow-[0_0_22px_rgba(0,245,212,0.35)]',
          className
        )}
      >
        {label}
      </Button>
    </AnimatedContent>
  )
}
