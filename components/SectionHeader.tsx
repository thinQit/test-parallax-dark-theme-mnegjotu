'use client'

import { AnimatedContent } from '@/components/ui/effects/animated-content'
import { Button } from '@/components/ui/button'

interface SectionHeaderProps {
  title?: string
  subtitle?: string
  primaryCta?: string
  secondaryCta?: string
}

export default function SectionHeader({
  title = 'Section Title',
  subtitle = 'Section subtitle content goes here.',
  primaryCta = '',
  secondaryCta = '',
}: Partial<SectionHeaderProps>) {
  return (
    <AnimatedContent>
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="font-['Anton'] text-4xl text-[#fafafa] md:text-5xl">{title}</h2>
          <p className="mt-3 max-w-2xl font-['Bebas_Neue'] text-2xl text-[#fafafa]/75 md:text-3xl">{subtitle}</p>
        </div>
        {(primaryCta || secondaryCta) && (
          <div className="flex gap-3">
            {secondaryCta ? <Button variant="outline">{secondaryCta}</Button> : null}
            {primaryCta ? <Button className="bg-[#00F5D4] text-[#09090b]">{primaryCta}</Button> : null}
          </div>
        )}
      </div>
    </AnimatedContent>
  )
}
