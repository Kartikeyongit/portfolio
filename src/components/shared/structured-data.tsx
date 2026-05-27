// src/components/shared/structured-data.tsx
export function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Your Name',
    url: 'https://yourdomain.com',
    jobTitle: 'Full Stack Developer',
    sameAs: [
      'https://github.com/yourusername',
      'https://linkedin.com/in/yourusername',
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