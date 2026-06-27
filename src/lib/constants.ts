// src/lib/constants.ts
export const SITE_CONFIG = {
  name: 'Kartikey Gautam',
  title: 'Full Stack Developer',
  description: 'Full-stack developer building production-grade applications. GATE CS Qualified.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://kartikey.dev',
  email: 'gautamrajput377@gmail.com',
  github: 'https://github.com/kartikeyongit',
  linkedin: 'https://linkedin.com/in/kartikeygautamrai',
  twitter: 'https://twitter.com',
} as const

export function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault()
  const element = document.querySelector(href)
  if (element) {
    const offset = 80
    const top = element.getBoundingClientRect().top + window.pageYOffset - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

export const NAV_LINKS = [
  { href: '#featured-work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
] as const