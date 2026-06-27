import { cn } from '@/lib/utils'

interface GradientTextProps {
  children: React.ReactNode
  className?: string
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span
      className={cn(
        'bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 bg-clip-text text-transparent dark:from-rose-400 dark:via-pink-400 dark:to-rose-500',
        className
      )}
    >
      {children}
    </span>
  )
}
