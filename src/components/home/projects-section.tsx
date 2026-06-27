'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ProjectCard } from '@/components/projects/project-card'
import { OtherProjectCard } from '@/components/projects/other-project-card'
import { ProjectDetailDialog } from '@/components/projects/project-detail-dialog'
import { AnimatedSection } from '@/components/shared/animated-section'
import { SectionHeading } from '@/components/shared/section-heading'
import { cn } from '@/lib/utils'
import type { Project, OtherProject } from '@/types/project'

interface ProjectsSectionProps {
  featured: Project[]
  other: OtherProject[]
  spa: OtherProject[]
}

type TabId = 'all' | 'featured' | 'other' | 'spa'

interface Tab {
  id: TabId
  label: string
  count: number
}

export function ProjectsSection({ featured, other, spa }: ProjectsSectionProps) {
  const [activeTab, setActiveTab] = useState<TabId>('all')
  const [selectedProject, setSelectedProject] = useState<OtherProject | null>(null)

  const tabs: Tab[] = [
    { id: 'all', label: 'All', count: featured.length + other.length + spa.length },
    { id: 'featured', label: 'Featured', count: featured.length },
    { id: 'other', label: 'More', count: other.length },
    { id: 'spa', label: 'SPAs', count: spa.length },
  ]

  const visibleFeatured = activeTab === 'all' || activeTab === 'featured' ? featured : []
  const visibleOther = activeTab === 'all' || activeTab === 'other' ? other : []
  const visibleSpa = activeTab === 'all' || activeTab === 'spa' ? spa : []

  const hasFeatured = visibleFeatured.length > 0
  const hasOther = visibleOther.length > 0
  const hasSpa = visibleSpa.length > 0

  return (
    <section id="featured-work" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            label="Projects"
            title="Things I've built."
            description="Production-grade applications with real architecture, not tutorials. Each project solves a complex problem at scale."
          />
        </AnimatedSection>

        {/* Tabs */}
        <div className="flex items-center gap-1 mt-12 mb-12 border-b border-border" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`projects-panel`}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'relative px-4 py-3 text-sm font-medium transition-colors -mb-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-t-md',
                activeTab === tab.id
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {tab.label}
              <span className="ml-1.5 text-xs text-muted-foreground/60">({tab.count})</span>
              {activeTab === tab.id && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        {/* Project Grids */}
        <div id="projects-panel" role="tabpanel" className="space-y-16">
          {hasFeatured && (
            <div>
              {activeTab === 'all' && (
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
                  Featured Projects
                </span>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleFeatured.map((project, index) => (
                  <ProjectCard key={project.slug} project={project} index={index} />
                ))}
              </div>
            </div>
          )}

          {hasOther && (
            <div>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
                Backend & Fullstack
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleOther.map((project, index) => (
                  <OtherProjectCard
                    key={project.slug}
                    project={project}
                    index={index}
                    onSelect={() => setSelectedProject(project)}
                  />
                ))}
              </div>
            </div>
          )}

          {hasSpa && (
            <div>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
                Single-Page Applications
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleSpa.map((project, index) => (
                  <OtherProjectCard
                    key={project.slug}
                    project={project}
                    index={index}
                    onSelect={() => setSelectedProject(project)}
                  />
                ))}
              </div>
            </div>
          )}

          {!hasFeatured && !hasOther && !hasSpa && (
            <p className="text-center text-muted-foreground py-12">
              No projects in this category yet.
            </p>
          )}
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
