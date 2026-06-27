// src/components/shared/animated-section.tsx
'use client'

import { motion, useAnimationControls } from 'framer-motion'
import { useRef, useLayoutEffect, useEffect } from 'react'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

const directionVariants: Record<string, { x?: number; y?: number }> = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = 'up',
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const controls = useAnimationControls()
  const offset = directionVariants[direction]

  useLayoutEffect(() => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    if (rect.top < window.innerHeight + 100) {
      controls.set({ opacity: 1, x: 0, y: 0 })
    } else {
      controls.set({ opacity: 0, ...offset })
    }
  }, [controls, direction, offset])

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, x: 0, y: 0 })
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: '-100px' }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [controls])

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={controls}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}