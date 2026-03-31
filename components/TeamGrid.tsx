'use client'

import Image from 'next/image'
import { AnimatedContent } from '@/components/ui/effects/animated-content'
import { Card } from '@/components/ui/card'

interface Member {
  name: string
  role: string
  specialty: string
  location: string
  photo: string
}
interface TeamGridProps {
  members?: Member[]
}

export default function TeamGrid({
  members = [
    {
      name: 'Lena Voss',
      role: 'Creative Director',
      specialty: 'Brand Systems',
      location: 'Berlin',
      photo: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577327/site-images/team-people/12899112.jpg',
    },
    {
      name: 'Jay Moreno',
      role: 'Motion Lead',
      specialty: 'Cinematic Motion',
      location: 'Los Angeles',
      photo: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577335/site-images/team-people/1181734.jpg',
    },
    {
      name: 'Ari Kim',
      role: 'Experience Designer',
      specialty: 'Immersive Web',
      location: 'Seoul',
      photo: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577351/site-images/team-people/12903244.jpg',
    },
  ],
}: Partial<TeamGridProps>) {
  return (
    <section id="about" className="bg-[#09090b] px-4 py-20 md:px-6">
      <AnimatedContent>
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {members.map((m) => (
            <Card key={m.name} className="group overflow-hidden rounded-xl border-[#1a1a1a] bg-[#111111] transition hover:-translate-y-1">
              <Image src={m.photo} alt={m.name} width={900} height={600} unoptimized className="h-56 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-['Anton'] text-2xl text-[#fafafa]">{m.name}</h3>
                <p className="font-['Bebas_Neue'] text-2xl text-[#00F5D4]">{m.role}</p>
                <p className="mt-2 font-['Bebas_Neue'] text-2xl text-[#fafafa]/75">{m.specialty} · {m.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </AnimatedContent>
    </section>
  )
}
