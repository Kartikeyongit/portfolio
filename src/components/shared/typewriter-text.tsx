// src/components/shared/typewriter-text.tsx
'use client'

import { useState, useEffect, useCallback } from 'react'
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
  typeSpeed = 5,
  deleteSpeed = 5,
  pauseDuration = 2000,
  className,
}: TypewriterTextProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(blinkInterval)
  }, [])

  const type = useCallback(() => {
    const fullWord = words[currentWordIndex]

    if (isComplete) return

    if (isPaused) return

    if (!isDeleting) {
      if (currentText.length < fullWord.length) {
        setCurrentText(fullWord.substring(0, currentText.length + 1))
      } else {
        if (currentWordIndex === words.length - 1) {
          setIsComplete(true)
          return
        }
        setIsPaused(true)
        setTimeout(() => {
          setIsPaused(false)
          setIsDeleting(true)
        }, pauseDuration)
      }
    } else {
      if (currentText.length > 0) {
        setCurrentText(currentText.substring(0, currentText.length - 1))
      } else {
        setIsDeleting(false)
        setCurrentWordIndex((prev) => prev + 1)
      }
    }
  }, [currentWordIndex, currentText, isDeleting, isPaused, isComplete, words, pauseDuration])

  useEffect(() => {
    const speed = isDeleting ? deleteSpeed : typeSpeed
    const timer = setTimeout(type, speed)
    return () => clearTimeout(timer)
  }, [type, isDeleting, typeSpeed, deleteSpeed])

  return (
    <span className={cn('inline', className)}>
      {currentText}
      <span
        className="inline-block w-[0.2em] h-[1em] ml-[2px] align-middle"
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