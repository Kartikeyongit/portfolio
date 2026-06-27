import { describe, it, expect } from 'vitest'
import { getProjectBySlug, getAllProjectSlugs, featuredProjects, otherProjects, spaProjects } from '@/lib/projects'

describe('featuredProjects', () => {
  it('has 3 projects', () => {
    expect(featuredProjects).toHaveLength(3)
  })

  it('each project has required fields', () => {
    for (const project of featuredProjects) {
      expect(project.slug).toBeTruthy()
      expect(project.title).toBeTruthy()
      expect(project.tagline).toBeTruthy()
      expect(project.thumbnail).toBeTruthy()
      expect(project.githubUrl).toBeTruthy()
      expect(project.caseStudyUrl).toBeTruthy()
      expect(project.highlights.length).toBeGreaterThanOrEqual(3)
      expect(project.metrics?.length).toBeGreaterThanOrEqual(3)
      expect(project.stack.frontend.length).toBeGreaterThan(0)
      expect(project.stack.backend.length).toBeGreaterThan(0)
    }
  })
})

describe('otherProjects', () => {
  it('has 3 projects', () => {
    expect(otherProjects).toHaveLength(3)
  })

  it('each project has required fields', () => {
    for (const project of otherProjects) {
      expect(project.slug).toBeTruthy()
      expect(project.title).toBeTruthy()
      expect(project.tagline).toBeTruthy()
      expect(project.thumbnail).toBeTruthy()
      expect(project.githubUrl).toBeTruthy()
      expect(project.stack.length).toBeGreaterThan(0)
    }
  })
})

describe('spaProjects', () => {
  it('has 3 projects', () => {
    expect(spaProjects).toHaveLength(3)
  })

  it('each project has required fields', () => {
    for (const project of spaProjects) {
      expect(project.slug).toBeTruthy()
      expect(project.title).toBeTruthy()
      expect(project.tagline).toBeTruthy()
      expect(project.thumbnail).toBeTruthy()
      expect(project.githubUrl).toBeTruthy()
      expect(project.stack.length).toBeGreaterThan(0)
    }
  })
})

describe('getProjectBySlug', () => {
  it('returns correct project for a valid slug', () => {
    const project = getProjectBySlug('real-time-collaboration-platform')
    expect(project).toBeDefined()
    expect(project?.title).toBe('Real-Time Collaboration Platform')
  })

  it('returns undefined for invalid slug', () => {
    const project = getProjectBySlug('non-existent-project')
    expect(project).toBeUndefined()
  })
})

describe('getAllProjectSlugs', () => {
  it('returns all slugs', () => {
    const slugs = getAllProjectSlugs()
    expect(slugs).toHaveLength(3)
    expect(slugs).toContain('real-time-collaboration-platform')
    expect(slugs).toContain('flash-sales-ecommerce')
    expect(slugs).toContain('dashboard-builder')
  })
})
