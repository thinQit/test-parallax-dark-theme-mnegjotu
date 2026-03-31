'use client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Textarea } from '@/components/ui/textarea'
import { AnimatedContent } from '@/components/ui/effects/animated-content'

interface ContactFormProps {
  heading?: string
}

export default function ContactForm({ heading = 'Start Your Project' }: Partial<ContactFormProps>) {
  return (
    <section id="contact" className="bg-[#09090b] px-4 py-20 md:px-6">
      <AnimatedContent>
        <form className="mx-auto max-w-3xl space-y-5 rounded-xl border border-[#1a1a1a] bg-[#111111] p-6 md:p-8">
          <h3 className="font-['Anton'] text-4xl text-[#fafafa]">{heading}</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@brand.com" />
            </div>
          </div>
          <div>
            <Label htmlFor="service">Service</Label>
            <Select id="service" defaultValue="Brand Identity">
              <option>Brand Identity</option>
              <option>Motion Design</option>
              <option>Immersive Digital Experience</option>
            </Select>
          </div>
          <div>
            <Label htmlFor="message">Project Details</Label>
            <Textarea id="message" placeholder="Tell us about your vision..." />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="nda" />
            <Label htmlFor="nda">I would like to discuss NDA before sharing full scope.</Label>
          </div>
          <Button className="bg-[#00F5D4] text-[#09090b]">Send Inquiry</Button>
        </form>
      </AnimatedContent>
    </section>
  )
}
