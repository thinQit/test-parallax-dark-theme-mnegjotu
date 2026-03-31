'use client'

import { AnimatedContent } from '@/components/ui/effects/animated-content'
import { Button } from '@/components/ui/button'

interface TourDate {
  date: string
  type: string
  time: string
  status: string
}
interface TourDatesListProps {
  dates?: TourDate[]
}

export default function TourDatesList({
  dates = [
    { date: 'May 14, 2026', type: 'Brand Sprint Session', time: '10:00 AM', status: 'Open' },
    { date: 'May 21, 2026', type: 'Motion Direction Workshop', time: '1:00 PM', status: 'Limited' },
    { date: 'Jun 02, 2026', type: 'Immersive Web Consult', time: '4:30 PM', status: 'Booked' },
  ],
}: Partial<TourDatesListProps>) {
  return (
    <section id="tour-dates" className="bg-[#09090b] px-4 py-20 md:px-6">
      <AnimatedContent>
        <div className="mx-auto max-w-7xl space-y-3">
          {dates.map((d, idx) => (
            <div key={idx} className="grid gap-3 rounded-xl border border-[#1a1a1a] bg-[#111111] p-4 md:grid-cols-5 md:items-center">
              <p className="font-['Bebas_Neue'] text-2xl text-[#fafafa]">{d.date}</p>
              <p className="font-['Bebas_Neue'] text-2xl text-[#fafafa]/80">{d.type}</p>
              <p className="font-['Bebas_Neue'] text-2xl text-[#fafafa]/70">{d.time}</p>
              <span className="w-fit rounded-full border border-[#00F5D4]/40 bg-[#00F5D4]/10 px-3 py-1 font-['Bebas_Neue'] text-xl text-[#00F5D4]">
                {d.status}
              </span>
              <Button className="bg-[#00F5D4] text-[#09090b] md:justify-self-end">Reserve</Button>
            </div>
          ))}
        </div>
      </AnimatedContent>
    </section>
  )
}
