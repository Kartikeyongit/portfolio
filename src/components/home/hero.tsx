// src/components/home/hero.tsx
'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Mail, FileText } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/shared/icons'
import { Button } from '@/components/ui/button'
import { GradientText } from '@/components/shared/gradient-text'
import { SITE_CONFIG, scrollToSection } from '@/lib/constants'
import { type Variants } from 'framer-motion'
import { TypewriterText } from '@/components/shared/typewriter-text'

const ROLES = [
  'Software Engineer',
  'Full Stack Developer',
  'DevOps Engineer',
  'Backend Developer',
  'Frontend Developer',
  'System Architect',
]

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export function Hero() {

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-b from-primary/5 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto text-center z-10"
      >
        {/* Status badge */}
        <motion.div variants={item}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/80 backdrop-blur-sm text-sm text-muted-foreground mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400/50" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Open to opportunities
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
          >
          I work as
          <br />
          <GradientText>
              <TypewriterText
              words={ROLES}
              typeSpeed={80}
              deleteSpeed={40}
              pauseDuration={2500}
              />
          </GradientText>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={item}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          GATE CS Qualified &bull; Systems Thinker &bull; Shipping Engineer
        </motion.p>

        <motion.p
          variants={item}
          className="text-base text-muted-foreground/80 max-w-xl mx-auto mb-10"
        >
          I turn complex problems into elegant, scalable solutions with 
          real-time systems, microservices, and production-ready architectures.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <Button size="lg" className="rounded-xl shadow-lg shadow-primary/25" asChild>
            <a href="#featured-work" onClick={(e) => scrollToSection(e, '#featured-work')}>
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-xl" asChild>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
            >
              Get In Touch
            </a>
          </Button>
          <Button size="lg" variant="ghost" className="rounded-xl" asChild>
            <a href="/Kartikey_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={item} className="flex items-center justify-center gap-6">
          {[
            { icon: GithubIcon, href: SITE_CONFIG.github, label: 'GitHub' },
            { icon: LinkedinIcon, href: SITE_CONFIG.linkedin, label: 'LinkedIn' },
            { icon: Mail, href: `mailto:${SITE_CONFIG.email}`, label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110"
              aria-label={label}
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: [0.42, 0, 0.58, 1] }}
          className="flex flex-col items-center gap-2 text-muted-foreground/50"
        >
          <span className="text-xs">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}