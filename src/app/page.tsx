// src/app/page.tsx
import { Hero } from '@/components/home/hero'
import { ProjectsSection } from '@/components/home/projects-section'
import { SkillsSection } from '@/components/home/skills-section'
import { AchievementsSection } from '@/components/home/achievements-section'
import { ContactSection } from '@/components/home/contact-section'
import { featuredProjects, otherProjects, spaProjects } from '@/lib/projects'

export const revalidate = 86400 // ISR: revalidate every 24 hours

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectsSection
        featured={featuredProjects}
        other={otherProjects}
        spa={spaProjects}
      />
      <SkillsSection />
      <AchievementsSection />
      <ContactSection />
    </>
  )
}
