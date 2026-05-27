// src/lib/constants.ts
export const SITE_CONFIG = {
  name: 'Kartikey Gautam',
  title: 'Full Stack Developer',
  description: 'Full-stack developer building production-grade applications. GATE CS Qualified.',
  url: 'https://yourdomain.com',
  email: 'gautamrajput377@gmail.com',
  github: 'https://github.com/kartikeyongit',
  linkedin: 'https://linkedin.com/in/kartikeygautamrai',
  twitter: 'https://twitter.com/yourusername',
} as const

export const NAV_LINKS = [
  { href: '#featured-work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
] as const