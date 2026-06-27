// src/components/home/contact-section.tsx
'use client'

import { Mail, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/shared/icons'
import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/components/shared/animated-section'
import { SectionHeading } from '@/components/shared/section-heading'
import { SITE_CONFIG } from '@/lib/constants'

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <AnimatedSection>
          <SectionHeading
            label="Contact"
            title="Let's build something together."
            description="I'm currently open to full-time opportunities, freelance projects, and interesting collaborations."
            className="mx-auto text-center"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Button size="lg" className="rounded-xl shadow-lg shadow-primary/25 w-full sm:w-auto" asChild>
              <a href={`mailto:${SITE_CONFIG.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-xl w-full sm:w-auto" asChild>
              <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="mr-2 h-4 w-4" />
                LinkedIn
                <ArrowUpRight className="ml-1 h-3 w-3" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-xl w-full sm:w-auto" asChild>
              <a href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="mr-2 h-4 w-4" />
                GitHub
                <ArrowUpRight className="ml-1 h-3 w-3" />
              </a>
            </Button>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="text-sm text-muted-foreground mt-8">
            Prefer a direct message?{' '}
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-primary hover:underline font-medium"
            >
              {SITE_CONFIG.email}
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}