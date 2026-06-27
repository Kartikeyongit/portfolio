// src/components/shared/typewriter-text.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface TypewriterTextProps {
  words: string[]
  typeSpeed?: number
  deleteSpeed?: number
  pauseDuration?: number
  className?: string
}

export function TypewriterText({
  words,
  typeSpeed = 80,
  deleteSpeed = 40,
  pauseDuration = 2500,
  className,
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  const wordIndexRef = useRef(0)
  const charIndexRef = useRef(0)
  const isDeletingRef = useRef(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(blinkInterval)
  }, [])

  useEffect(() => {
    const tick = () => {
      const fullWord = words[wordIndexRef.current]
      if (isDeletingRef.current) {
        if (charIndexRef.current > 0) {
          charIndexRef.current--
          setDisplayText(fullWord.substring(0, charIndexRef.current))
          timeoutRef.current = setTimeout(tick, deleteSpeed)
        } else {
          isDeletingRef.current = false
          wordIndexRef.current = (wordIndexRef.current + 1) % words.length
          charIndexRef.current = 0
          timeoutRef.current = setTimeout(tick, typeSpeed)
        }
      } else {
        if (charIndexRef.current < fullWord.length) {
          charIndexRef.current++
          setDisplayText(fullWord.substring(0, charIndexRef.current))
          timeoutRef.current = setTimeout(tick, typeSpeed)
        } else {
          timeoutRef.current = setTimeout(() => {
            isDeletingRef.current = true
            timeoutRef.current = setTimeout(tick, deleteSpeed)
          }, pauseDuration)
        }
      }
    }

    timeoutRef.current = setTimeout(tick, typeSpeed)
    return () => clearTimeout(timeoutRef.current)
  }, [words, typeSpeed, deleteSpeed, pauseDuration])

  return (
    <span className={cn('inline', className)}>
      {displayText}
      <span
        aria-hidden="true"
        className="inline-block w-[0.2em] h-[1em] ml-[2px] align-middle rounded-sm"
        style={{
          background: showCursor
            ? 'linear-gradient(to right, #6366f1, #8b5cf6)'
            : 'transparent',
          transition: 'background-color 0.1s',
        }}
      />
    </span>
  )
}