'use client'

import { useRef, useEffect } from 'react'
import { useAnimationControls } from 'framer-motion'

interface ScrollRevealOptions {
  threshold?: number
  rootMargin?: string
  delay?: number
}

interface ScrollRevealReturn {
  ref: React.RefObject<HTMLDivElement | null>
  controls: ReturnType<typeof useAnimationControls>
}

export function useScrollReveal({
  threshold = 0,
  rootMargin = '-50px',
}: ScrollRevealOptions = {}): ScrollRevealReturn {
  const ref = useRef<HTMLDivElement>(null)
  const controls = useAnimationControls()

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, x: 0, y: 0 })
          observer.disconnect()
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [controls, threshold, rootMargin])

  return { ref, controls }
}
