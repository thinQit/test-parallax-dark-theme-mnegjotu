'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'
import { AnimatedContent } from '@/components/ui/effects/animated-content'

interface VideoItem {
  title: string
  tag: string
  description: string
  thumbnail: string
  embedUrl: string
}
interface VideoGridProps {
  videos?: VideoItem[]
}

export default function VideoGrid({
  videos = [
    {
      title: 'Future Pulse Campaign',
      tag: 'Motion Design',
      description: 'Launch film for a global tech brand.',
      thumbnail: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771578307/site-images/events/11203501.jpg',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      title: 'Brand World Teaser',
      tag: 'Brand Identity',
      description: 'Immersive visual language reveal.',
      thumbnail: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771578294/site-images/events/11433914.jpg',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
  ],
}: Partial<VideoGridProps>) {
  const [active, setActive] = useState<string>('')

  return (
    <section id="videos" className="bg-[#09090b] px-4 py-20 md:px-6">
      <AnimatedContent>
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {videos.map((video, i) => (
            <button
              key={i}
              onClick={() => setActive(video.embedUrl)}
              className="group overflow-hidden rounded-xl border border-[#1a1a1a] bg-[#111111] text-left transition hover:shadow-[0_0_30px_rgba(0,245,212,0.2)]"
            >
              <div className="relative">
                <Image src={video.thumbnail} alt={video.title} width={1200} height={700} unoptimized className="h-56 w-full object-cover opacity-90" />
                <Play className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 text-[#00F5D4]" />
              </div>
              <div className="p-5">
                <p className="font-['Bebas_Neue'] text-xl text-[#00F5D4]">{video.tag}</p>
                <h3 className="font-['Anton'] text-2xl text-[#fafafa]">{video.title}</h3>
                <p className="mt-2 font-['Bebas_Neue'] text-2xl text-[#fafafa]/70">{video.description}</p>
              </div>
            </button>
          ))}
        </div>
      </AnimatedContent>

      {active && (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-black/80 p-4" onClick={() => setActive('')}>
          <div className="w-full max-w-4xl overflow-hidden rounded-xl border border-[#1a1a1a] bg-[#111111]" onClick={(e) => e.stopPropagation()}>
            <iframe className="aspect-video w-full" src={active} title="Video player" allowFullScreen />
          </div>
        </div>
      )}
    </section>
  )
}
