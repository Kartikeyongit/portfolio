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
      <div className="flex items-center gap-3 mb-3">
        <span className="h-px w-8 bg-primary/40" />
        <span className="text-sm font-medium text-primary uppercase tracking-wider">
          {label}
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{description}</p>
      )}
    </div>
  )
}
