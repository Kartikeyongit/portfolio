'use client'

import { useContext } from 'react'
import { LenisContext } from '@/components/layout/smooth-scroll-provider'

export function useLenis() {
  const ctx = useContext(LenisContext)
  if (!ctx) {
    throw new Error('useLenis must be used within a SmoothScrollProvider')
  }
  return ctx
}
