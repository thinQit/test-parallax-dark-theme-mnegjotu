'use client'

import { AnimatedContent } from '@/components/ui/effects/animated-content'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface Plan {
  name: string
  price: string
  badge: string
  features: string[]
}
interface MerchPricingCardsProps {
  plans?: Plan[]
}

export default function MerchPricingCards({
  plans = [
    { name: 'Starter Drop', price: '$1,500', badge: 'Popular', features: ['3 merch concepts', 'Asset kit', 'Mockups'] },
    { name: 'Campaign Capsule', price: '$3,900', badge: 'Pro', features: ['7 designs', 'Motion promos', 'Store visuals'] },
    { name: 'Global Launch', price: '$7,500', badge: 'Elite', features: ['Full collection', '3D lookbook', 'Launch content'] },
  ],
}: Partial<MerchPricingCardsProps>) {
  return (
    <section id="merch" className="bg-[#09090b] px-4 py-20 md:px-6">
      <AnimatedContent>
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <Card key={i} className="rounded-xl border-[#1a1a1a] bg-[#111111] p-6">
              <p className="w-fit rounded-full border border-[#00F5D4]/40 bg-[#00F5D4]/10 px-3 py-1 font-['Bebas_Neue'] text-xl text-[#00F5D4]">{plan.badge}</p>
              <h3 className="mt-4 font-['Anton'] text-3xl text-[#fafafa]">{plan.name}</h3>
              <p className="mt-1 font-['Bebas_Neue'] text-3xl text-[#fafafa]/85">{plan.price}</p>
              <ul className="mt-4 space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="font-['Bebas_Neue'] text-2xl text-[#fafafa]/75">• {f}</li>
                ))}
              </ul>
              <Button className="mt-6 w-full bg-[#00F5D4] text-[#09090b]">Choose Plan</Button>
            </Card>
          ))}
        </div>
      </AnimatedContent>
    </section>
  )
}
