// src/components/home/featured-projects.tsx
import { ProjectCard } from '@/components/projects/project-card'
import { AnimatedSection } from '@/components/shared/animated-section'
import { SectionHeading } from '@/components/shared/section-heading'
import type { Project } from '@/types/project'

interface FeaturedProjectsProps {
  projects: Project[]
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section id="featured-work" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            label="Featured Work"
            title="Projects that ship."
            description="Production-grade applications with real architecture, not tutorials. Each project solves a complex problem at scale."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}