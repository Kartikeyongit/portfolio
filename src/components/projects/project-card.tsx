'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import type { Project } from '@/types/project'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { ref, controls } = useScrollReveal()
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
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Link href={project.caseStudyUrl} className="group block h-full">
        <div className="relative h-full rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 flex flex-col">
          {/* Image */}
          <div className="relative aspect-video overflow-hidden bg-muted/30">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Status badge */}
            <div className="absolute top-3 right-3">
              <span
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium backdrop-blur-sm border shadow-sm ${
                  project.status === 'production'
                    ? 'bg-rose-500/15 border-rose-500/30 text-rose-600 dark:text-rose-400'
                    : project.status === 'development'
                      ? 'bg-amber-500/15 border-amber-500/30 text-amber-600 dark:text-amber-400'
                      : 'bg-muted/50 border-border text-muted-foreground'
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                {project.status}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-1">
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
            <span className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-auto pt-3 group-hover:gap-2 transition-all">
              View Case Study
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>

          {/* Metrics strip */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="border-t border-border px-4 py-3 bg-muted/20 grid grid-cols-3 gap-1">
              {project.metrics.slice(0, 3).map((metric) => (
                <div key={metric.label} className="text-center">
                  <div className="text-xs font-semibold text-primary">{metric.value}</div>
                  <div className="text-[10px] text-muted-foreground leading-tight">{metric.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  )
}
