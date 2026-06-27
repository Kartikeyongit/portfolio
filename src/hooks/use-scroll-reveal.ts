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

    let observer: IntersectionObserver | null = null
    let timeoutId: ReturnType<typeof setTimeout> | null = null

    const reveal = () => {
      controls.start({ opacity: 1, x: 0, y: 0 })
      observer?.disconnect()
    }

    const revealIfAlreadyVisible = () => {
      const rect = element.getBoundingClientRect()

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        reveal()
      }
    }

    if (!('IntersectionObserver' in window)) {
      reveal()
      return
    }

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal()
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    requestAnimationFrame(revealIfAlreadyVisible)
    timeoutId = setTimeout(revealIfAlreadyVisible, 150)

    return () => {
      observer?.disconnect()
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [controls, threshold, rootMargin])

  return { ref, controls }
}
