// src/types/project.ts
export interface Project {
  slug: string
  title: string
  tagline: string
  description: string
  featured: boolean
  category: 'fullstack' | 'backend' | 'realtime' | 'systems' | 'tools'
  thumbnail: string
  images: string[]
  videoDemo?: string
  stack: {
    frontend: string[]
    backend: string[]
    database: string[]
    devops: string[]
    other: string[]
  }
  liveUrl?: string
  githubUrl: string
  caseStudyUrl: string
  highlights: string[]
  metrics?: {
    label: string
    value: string
  }[]
  status: 'production' | 'development' | 'archived'
  featuredOrder: number
  createdAt: string
  updatedAt: string
}

export interface OtherProject {
  slug: string
  title: string
  tagline: string
  thumbnail: string
  stack: string[]
  githubUrl: string
  liveUrl?: string
}