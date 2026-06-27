'use client'

import { ExternalLink } from 'lucide-react'
import { GithubIcon } from '@/components/shared/icons'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import type { OtherProject } from '@/types/project'

interface ProjectDetailDialogProps {
  project: OtherProject
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProjectDetailDialog({
  project,
  open,
  onOpenChange,
}: ProjectDetailDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent title={project.title} className="max-w-lg">
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden rounded-t-xl bg-muted/30 -mx-0">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 512px) 100vw, 512px"
          />
          {project.status && (
            <div className="absolute top-3 right-3">
              <span
                className={cn(
                  'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium backdrop-blur-sm border shadow-sm',
                  project.status === 'production'
                    ? 'bg-rose-500/15 border-rose-500/30 text-rose-600 dark:text-rose-400'
                    : project.status === 'development'
                      ? 'bg-amber-500/15 border-amber-500/30 text-amber-600 dark:text-amber-400'
                      : 'bg-muted/50 border-border text-muted-foreground'
                )}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                {project.status}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          {/* Header */}
          <div>
            {project.category && (
              <span className="text-xs font-medium text-primary uppercase tracking-wider mb-1.5 block">
                {project.category}
              </span>
            )}
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Description */}
          {project.description && (
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          )}

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold mb-2">Key Highlights</h3>
              <ul className="space-y-1.5">
                {project.highlights.map((h) => (
                  <li key={h} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-3 py-3 border-y border-border">
              {project.metrics.map((m) => (
                <div key={m.label} className="text-center">
                  <div className="text-sm font-semibold text-primary">{m.value}</div>
                  <div className="text-[11px] text-muted-foreground leading-tight">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h3 className="text-sm font-semibold mb-2">Tech Stack</h3>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs font-normal">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 pt-1">
            <Button variant="default" size="sm" className="h-9 text-xs" asChild>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5"
              >
                <GithubIcon className="h-4 w-4" />
                View Code
              </a>
            </Button>
            {project.liveUrl && (
              <Button variant="outline" size="sm" className="h-9 text-xs" asChild>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
