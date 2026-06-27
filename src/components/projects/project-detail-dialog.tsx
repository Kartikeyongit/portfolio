// src/components/projects/project-detail-dialog.tsx
'use client'

import * as DialogPrimitive from '@radix-ui/react-dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { X, ExternalLink } from 'lucide-react'
import { GithubIcon } from '@/components/shared/icons'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
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
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className={cn(
            'fixed inset-0 z-50 bg-black/40 backdrop-blur-sm',
            'data-[state=open]:animate-in data-[state=open]:fade-in-0',
            'data-[state=closed]:animate-out data-[state=closed]:fade-out-0'
          )}
        />
        <DialogPrimitive.Content
          className={cn(
            'fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2',
            'rounded-xl border border-border bg-card shadow-2xl',
            'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-bottom-4',
            'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-bottom-4',
            'max-h-[85vh] overflow-y-auto'
          )}
        >
          <VisuallyHidden asChild>
            <DialogPrimitive.Title>{project.title}</DialogPrimitive.Title>
          </VisuallyHidden>

          {/* Thumbnail */}
          <div className="relative aspect-video overflow-hidden rounded-t-xl bg-muted/30">
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
                      ? 'bg-green-500/15 border-green-500/30 text-green-600 dark:text-green-400'
                      : project.status === 'development'
                        ? 'bg-yellow-500/15 border-yellow-500/30 text-yellow-600 dark:text-yellow-400'
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

          {/* Close button */}
          <DialogPrimitive.Close className="absolute top-3 right-3 rounded-full p-1.5 bg-background/80 backdrop-blur-sm border border-border opacity-70 transition-opacity hover:opacity-100 focus:outline-none">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
