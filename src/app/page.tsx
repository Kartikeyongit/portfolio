// src/app/page.tsx
import { Hero } from '@/components/home/hero'
import { FeaturedProjects } from '@/components/home/featured-projects'
import { OtherProjectsGrid } from '@/components/home/other-projects-grid'
import { SpaProjectsGrid } from '@/components/home/spa-projects-grid'
import { SkillsSection } from '@/components/home/skills-section'
import { AchievementsSection } from '@/components/home/achievements-section'
import { ContactSection } from '@/components/home/contact-section'
import { featuredProjects, otherProjects, spaProjects } from '@/lib/projects'

export const revalidate = 86400 // ISR: revalidate every 24 hours

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects projects={featuredProjects} />
      <OtherProjectsGrid projects={otherProjects} />
      <SpaProjectsGrid projects={spaProjects} />
      <SkillsSection />
      <AchievementsSection />
      <ContactSection />
    </>
  )
}