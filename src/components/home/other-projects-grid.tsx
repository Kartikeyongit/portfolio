// src/components/home/other-projects-grid.tsx
import { OtherProjectCard } from '@/components/projects/other-project-card'
import { AnimatedSection } from '@/components/shared/animated-section'
import { SectionHeading } from '@/components/shared/section-heading'
import type { OtherProject } from '@/types/project'

interface OtherProjectsGridProps {
  projects: OtherProject[]
}

export function OtherProjectsGrid({ projects }: OtherProjectsGridProps) {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            label="More Projects"
            title="Other things I've built."
            description="A collection of additional projects showcasing breadth across different domains and technologies."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
          {projects.map((project, index) => (
            <OtherProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}