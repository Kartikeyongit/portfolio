// src/components/shared/gradient-text.tsx
import { cn } from '@/lib/utils'

interface GradientTextProps {
  children: React.ReactNode
  className?: string
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span
      className={cn(
        'bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-violet-400 dark:to-purple-400',
        className
      )}
    >
      {children}
    </span>
  )
}