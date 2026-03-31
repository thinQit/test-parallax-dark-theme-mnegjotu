'use client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { AnimatedContent } from '@/components/ui/effects/animated-content'

interface NewsletterFormProps {
  title?: string
  privacyText?: string
}

export default function NewsletterForm({
  title = 'Join the Signal',
  privacyText = 'We send occasional studio updates and release drops. No spam. Unsubscribe anytime.',
}: Partial<NewsletterFormProps>) {
  return (
    <section id="newsletter" className="bg-[#09090b] px-4 py-20 md:px-6">
      <AnimatedContent>
        <div className="mx-auto max-w-3xl rounded-xl border border-[#1a1a1a] bg-[#111111] p-6 md:p-8">
          <h3 className="font-['Anton'] text-4xl text-[#fafafa]">{title}</h3>
          <form className="mt-5 flex flex-col gap-3 md:flex-row">
            <Input type="email" placeholder="Enter your email" className="border-[#1a1a1a] bg-[#09090b] text-[#fafafa]" />
            <Button className="bg-[#00F5D4] text-[#09090b]">Subscribe</Button>
          </form>
          <p className="mt-3 font-['Bebas_Neue'] text-xl text-[#fafafa]/60">{privacyText}</p>
        </div>
      </AnimatedContent>
    </section>
  )
}
