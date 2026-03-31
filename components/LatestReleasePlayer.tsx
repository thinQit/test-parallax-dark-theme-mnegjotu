'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play, Pause, Video } from 'lucide-react'
import { AnimatedContent } from '@/components/ui/effects/animated-content'
import { Button } from '@/components/ui/button'

interface LatestReleasePlayerProps {
  title?: string
  artist?: string
  coverImageSrc?: string
  audioSrc?: string
  videoEmbedUrl?: string
}

export default function LatestReleasePlayer({
  title = 'Neon Drift',
  artist = 'Aurora Digital Studio',
  coverImageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771578321/site-images/events/12954021.jpg',
  audioSrc = '',
  videoEmbedUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ',
}: Partial<LatestReleasePlayerProps>) {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <section id="latest-release" className="bg-[#09090b] px-4 py-20 md:px-6">
      <AnimatedContent>
        <div className="mx-auto grid max-w-7xl gap-8 rounded-xl border border-[#1a1a1a] bg-[#111111] p-6 md:grid-cols-2 md:p-8">
          <div className="relative overflow-hidden rounded-xl">
            <Image src={coverImageSrc} alt={title} width={1200} height={900} unoptimized className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="font-['Bebas_Neue'] text-2xl text-[#00F5D4]">Latest Release</p>
            <h3 className="mt-2 font-['Anton'] text-4xl text-[#fafafa]">{title}</h3>
            <p className="font-['Bebas_Neue'] text-2xl text-[#fafafa]/70">{artist}</p>
            <audio className="mt-6 w-full accent-[#00F5D4]" controls src={audioSrc} />
            <div className="mt-6 flex gap-3">
              <Button className="bg-[#00F5D4] text-[#09090b]"><Play className="mr-2 h-4 w-4" /> Stream</Button>
              <Button variant="outline" onClick={() => setShowVideo(true)} className="border-[#00F5D4]/60">
                <Video className="mr-2 h-4 w-4" /> Watch Reel
              </Button>
            </div>
          </div>
        </div>
      </AnimatedContent>

      {showVideo && (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-black/80 p-4">
          <div className="w-full max-w-4xl overflow-hidden rounded-xl border border-[#1a1a1a] bg-[#111111]">
            <iframe className="aspect-video w-full" src={videoEmbedUrl} title="Release video" allowFullScreen />
            <div className="p-4">
              <Button variant="outline" onClick={() => setShowVideo(false)}><Pause className="mr-2 h-4 w-4" /> Close</Button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
