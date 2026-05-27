// src/components/projects/other-project-card.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from '@/components/shared/icons'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { OtherProject } from '@/types/project'

interface OtherProjectCardProps {
  project: OtherProject
  index: number
}

export function OtherProjectCard({ project, index }: OtherProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="group rounded-xl border border-border bg-card/50 hover:bg-card transition-all duration-300 overflow-hidden hover:shadow-lg"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="p-4">
        <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
          {project.title}
        </h4>
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
          {project.tagline}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.stack.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-[10px] px-1.5 py-0">
              {tech}
            </Badge>
          ))}
          {project.stack.length > 3 && (
            <Badge variant="outline" className="text-[10px] px-1.5 py-0">
              +{project.stack.length - 3}
            </Badge>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-2">
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
        </div>
      </div>
    </motion.div>
  )
}