// mdx-components.tsx (at project root, not in src)
import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ className, ...props }) => (
      <h1 className={cn('text-3xl font-bold mt-12 mb-6 tracking-tight', className)} {...props} />
    ),
    h2: ({ className, ...props }) => (
      <h2 className={cn('text-2xl font-semibold mt-10 mb-4 tracking-tight border-b border-border pb-2', className)} {...props} />
    ),
    h3: ({ className, ...props }) => (
      <h3 className={cn('text-xl font-semibold mt-8 mb-3', className)} {...props} />
    ),
    p: ({ className, ...props }) => (
      <p className={cn('leading-7 text-muted-foreground mb-4', className)} {...props} />
    ),
    ul: ({ className, ...props }) => (
      <ul className={cn('my-4 ml-6 list-disc text-muted-foreground space-y-2', className)} {...props} />
    ),
    ol: ({ className, ...props }) => (
      <ol className={cn('my-4 ml-6 list-decimal text-muted-foreground space-y-2', className)} {...props} />
    ),
    li: ({ className, ...props }) => (
      <li className={cn('leading-7', className)} {...props} />
    ),
    blockquote: ({ className, ...props }) => (
      <blockquote
        className={cn('mt-6 border-l-2 border-primary pl-6 italic text-muted-foreground', className)}
        {...props}
      />
    ),
    code: ({ className, ...props }: any) => {
      const isInline = !className
      if (isInline) {
        return (
          <code
            className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-medium"
            {...props}
          />
        )
      }
      return (
        <code
          className={cn('relative rounded-lg bg-zinc-950 dark:bg-zinc-900 p-4 block overflow-x-auto font-mono text-sm leading-6', className)}
          {...props}
        />
      )
    },
    pre: ({ className, ...props }) => (
      <pre
        className={cn('mb-6 mt-4 overflow-x-auto rounded-xl border border-border bg-zinc-950 dark:bg-zinc-900 p-4', className)}
        {...props}
      />
    ),
    img: ({ src, alt, ...props }: any) => {
      if (!src) return null
      // Only use next/image for local images
      if (src.startsWith('/') || src.startsWith('.')) {
        return (
          <Image
            src={src}
            alt={alt || ''}
            width={1200}
            height={675}
            className="rounded-xl border border-border my-8 w-full h-auto"
            {...props}
          />
        )
      }
      // Fallback for external images
      return (
        <img
          src={src}
          alt={alt || ''}
          className="rounded-xl border border-border my-8 w-full h-auto"
          {...props}
        />
      )
    },
    a: ({ className, ...props }) => (
      <a
        className={cn('font-medium text-primary underline underline-offset-4 hover:no-underline', className)}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    ),
    ...components,
  }
}