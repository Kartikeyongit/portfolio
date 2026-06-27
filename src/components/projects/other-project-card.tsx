// src/components/projects/other-project-card.tsx
'use client'

import { motion, useAnimationControls } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Info } from 'lucide-react'
import { GithubIcon } from '@/components/shared/icons'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { useRef, useLayoutEffect, useEffect } from 'react'
import type { OtherProject } from '@/types/project'

interface OtherProjectCardProps {
  project: OtherProject
  index: number
  onSelect?: () => void
}

export function OtherProjectCard({ project, index, onSelect }: OtherProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const controls = useAnimationControls()

  useLayoutEffect(() => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    if (rect.top < window.innerHeight + 50) {
      controls.set({ opacity: 1, y: 0 })
    } else {
      controls.set({ opacity: 0, y: 30 })
    }
  }, [controls])

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, y: 0 })
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: '-50px' }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [controls])

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={controls}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="group rounded-xl border border-border bg-card/50 hover:bg-card transition-all duration-300 overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-primary/20"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-muted/30">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category */}
        {project.category && (
          <span className="text-[10px] font-medium text-primary uppercase tracking-wider mb-1.5 block">
            {project.category}
          </span>
        )}

        <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
          {project.title}
        </h4>
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
          {project.tagline}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.stack.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs px-1.5 py-0.5 font-normal">
              {tech}
            </Badge>
          ))}
          {project.stack.length > 3 && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge variant="outline" className="text-xs px-1.5 py-0.5 cursor-help">
                    +{project.stack.length - 3}
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{project.stack.slice(3).join(', ')}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-2 flex-wrap">
          <Button variant="ghost" size="sm" className="h-8 px-2 text-xs" asChild>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              Code
            </a>
          </Button>
          {project.liveUrl && (
            <Button variant="ghost" size="sm" className="h-8 px-2 text-xs" asChild>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Demo
              </a>
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            className="h-8 px-2 text-xs ml-auto"
            onClick={onSelect}
          >
            <Info className="h-3.5 w-3.5" />
            Details
          </Button>
        </div>
      </div>
    </motion.div>
  )
}