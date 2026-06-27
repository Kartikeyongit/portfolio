// src/components/home/skills-section.tsx
'use client'

import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/shared/animated-section'
import { SectionHeading } from '@/components/shared/section-heading'
import { Badge } from '@/components/ui/badge'

const skillCategories = [
  {
    title: 'Languages',
    skills: ['C++', 'Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'Go'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Angular', 'HTML/CSS', 'Tailwind CSS', 'Bootstrap', 'shadcn/ui', 'Zustand'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'Spring Boot', 'Django', 'REST APIs', 'GraphQL', 'WebSocket'],
  },
  {
    title: 'Databases & Tools',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Redis', 'Prisma', 'Git', 'Docker', 'AWS EC2'],
  },
  {
    title: 'DevOps & Cloud',
    skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'GitHub Actions', 'Nginx', 'Vercel'],
  },
  {
    title: 'Core Concepts',
    skills: ['Data Structures', 'Algorithms', 'OOP', 'DBMS', 'Computer Networks', 'System Design'],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            label="Skills & Stack"
            title="Technologies I work with."
            description="A broad toolkit spanning low-level systems to modern web frameworks."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="font-semibold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm py-1.5 px-3 font-normal hover:bg-primary/10 hover:scale-105 transition-all duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}