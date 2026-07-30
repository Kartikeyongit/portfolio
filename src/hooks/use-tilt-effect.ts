'use client'

import { useRef, useCallback } from 'react'

export function useTiltEffect(maxTilt = 8) {
  const ref = useRef<HTMLDivElement>(null)
  const glareRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      const tiltX = (y - 0.5) * -maxTilt * 2
      const tiltY = (x - 0.5) * maxTilt * 2
      el.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
      if (glareRef.current) {
        glareRef.current.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.08), transparent 60%)`
      }
    },
    [maxTilt]
  )

  const handleMouseEnter = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transition = 'transform 0.15s ease-out'
  }, [])

  const handleMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)'
    el.style.transition = 'transform 0.3s ease-out'
    setTimeout(() => {
      if (el) el.style.transition = ''
    }, 300)
    if (glareRef.current) {
      glareRef.current.style.background = 'transparent'
      glareRef.current.style.transition = 'background 0.3s ease-out'
      setTimeout(() => {
        if (glareRef.current) glareRef.current.style.transition = ''
      }, 300)
    }
  }, [])

  return { ref, glareRef, handleMouseMove, handleMouseEnter, handleMouseLeave }
}
