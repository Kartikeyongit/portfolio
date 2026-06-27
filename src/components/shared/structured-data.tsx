// src/components/shared/structured-data.tsx
import { SITE_CONFIG } from '@/lib/constants'

export function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    jobTitle: SITE_CONFIG.title,
    sameAs: [
      SITE_CONFIG.github,
      SITE_CONFIG.linkedin,
    ],
    knowsAbout: [
      'React',
      'Next.js',
      'Node.js',
      'TypeScript',
      'PostgreSQL',
      'Redis',
      'Docker',
      'System Design',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}