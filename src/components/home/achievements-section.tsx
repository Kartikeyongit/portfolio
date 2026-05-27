// src/components/home/achievements-section.tsx
'use client'

import { motion } from 'framer-motion'
import { Trophy, Award, Code2, Medal, BookOpen, Users } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/animated-section'
import { SectionHeading } from '@/components/shared/section-heading'
import { Card, CardContent } from '@/components/ui/card'

const achievements = [
  {
    icon: Trophy,
    title: 'GATE 2026 CS Qualified',
    description: 'Qualified Graduate Aptitude Test in Engineering - Computer Science',
    highlight: true,
  },
  {
    icon: Medal,
    title: 'Inter-Branch Volleyball Champion',
    description: '1st Position in College Competition (2023 & 2024)',
  },
  {
    icon: Medal,
    title: 'District Level Cricket',
    description: '3rd Position in District Competition',
  },
  {
    icon: Code2,
    title: '250+ DSA Problems Solved',
    description: 'Active problem solver on LeetCode with consistent streak',
  },
  {
    icon: Users,
    title: 'GeeksForGeeks Hackathon',
    description: 'Participant in HackerRank Competition',
  },
  {
    icon: BookOpen,
    title: 'Multiple Certifications',
    description: 'Infosys Springboard, AWS Educate — Java, React, Cloud, DevOps',
  },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            label="Achievements"
            title="Beyond the code."
            description="Academic excellence, competitive sports, and continuous learning."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className={`h-full transition-all duration-300 hover:shadow-lg ${
                    achievement.highlight
                      ? 'border-primary/30 bg-primary/5'
                      : 'border-border bg-card'
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-2.5 rounded-lg ${
                          achievement.highlight
                            ? 'bg-primary/10 text-primary'
                            : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm leading-tight">
                          {achievement.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}