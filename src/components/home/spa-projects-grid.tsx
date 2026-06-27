// src/components/home/spa-projects-grid.tsx
'use client'

import { useState } from 'react'
import { OtherProjectCard } from '@/components/projects/other-project-card'
import { ProjectDetailDialog } from '@/components/projects/project-detail-dialog'
import { AnimatedSection } from '@/components/shared/animated-section'
import { SectionHeading } from '@/components/shared/section-heading'
import type { OtherProject } from '@/types/project'

interface SpaProjectsGridProps {
  projects: OtherProject[]
}

export function SpaProjectsGrid({ projects }: SpaProjectsGridProps) {
  const [selectedProject, setSelectedProject] = useState<OtherProject | null>(null)

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            label="SPA Projects"
            title="Single-page applications."
            description="Standalone front-end applications with rich interactivity and modern architecture."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {projects.map((project, index) => (
            <OtherProjectCard
              key={project.slug}
              project={project}
              index={index}
              onSelect={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectDetailDialog
          project={selectedProject}
          open={!!selectedProject}
          onOpenChange={(open) => { if (!open) setSelectedProject(null) }}
        />
      )}
    </section>
  )
}
