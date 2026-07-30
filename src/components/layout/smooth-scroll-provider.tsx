'use client'

import { createContext, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

interface LenisContextValue {
  lenis: Lenis | null
}

export const LenisContext = createContext<LenisContextValue | null>(null)

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setReady(true)
      return
    }

    gsap.registerPlugin(ScrollTrigger)

    const lenis = new Lenis({
      lerp: 0.05,
      duration: 1.8,
      smoothWheel: true,
      syncTouch: true,
    })

    lenisRef.current = lenis
    ;(window as any).lenis = lenis

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    setReady(true)

    return () => {
      lenis.destroy()
      lenisRef.current = null
      ;(window as any).lenis = undefined
    }
  }, [])

  return (
    <LenisContext.Provider value={{ lenis: lenisRef.current }}>
      {children}
    </LenisContext.Provider>
  )
}
