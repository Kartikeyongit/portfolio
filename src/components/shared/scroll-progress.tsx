'use client'

import { useRef, useEffect } from 'react'
import { useLenis } from '@/hooks/use-lenis'

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)
  const { lenis } = useLenis()

  useEffect(() => {
    if (!lenis) return

    const update = () => {
      if (!barRef.current) return
      const scroll = lenis.scroll
      const max = lenis.limit
      const progress = max > 0 ? scroll / max : 0
      barRef.current.style.transform = `scaleX(${progress})`
    }

    lenis.on('scroll', update)
    return () => {
      lenis.off('scroll', update)
    }
  }, [lenis])

  return (
    <div
      ref={barRef}
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 origin-left z-[100]"
      style={{ transform: 'scaleX(0)' }}
    />
  )
}
