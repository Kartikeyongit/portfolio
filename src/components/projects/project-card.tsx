// src/components/projects/project-card.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import type { Project } from '@/types/project'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const allTech = [
    ...project.stack.frontend.slice(0, 2),
    ...project.stack.backend.slice(0, 2),
    ...project.stack.database.slice(0, 1),
  ]
  const remainingCount =
    project.stack.frontend.length +
    project.stack.backend.length +
    project.stack.database.length -
    allTech.length

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Link href={project.caseStudyUrl} className="group block h-full">
        <div className="relative h-full rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20">
          {/* Image */}
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Category */}
            <span className="text-xs font-medium text-primary uppercase tracking-wider mb-2 block">
              {project.category}
            </span>

            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
              {project.tagline}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {allTech.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs font-normal">
                  {tech}
                </Badge>
              ))}
              {remainingCount > 0 && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge variant="outline" className="text-xs cursor-help">
                        +{remainingCount}
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        {[
                          ...project.stack.frontend,
                          ...project.stack.backend,
                          ...project.stack.database,
                        ]
                          .slice(allTech.length)
                          .join(', ')}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>

            {/* View Case Study Link */}
            <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
              View Case Study
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}