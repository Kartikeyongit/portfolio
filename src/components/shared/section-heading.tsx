// src/components/shared/section-heading.tsx
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  label: string
  title: string
  description?: string
  className?: string
}

export function SectionHeading({ label, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn('max-w-2xl', className)}>
      <span className="text-sm font-medium text-primary uppercase tracking-wider">
        {label}
      </span>
      <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground">{description}</p>
      )}
    </div>
  )
}