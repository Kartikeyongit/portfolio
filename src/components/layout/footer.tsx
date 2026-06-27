// src/components/layout/footer.tsx
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/shared/icons'
import { SITE_CONFIG } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built by {SITE_CONFIG.name} © {currentYear}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: GithubIcon, href: SITE_CONFIG.github, label: 'GitHub' },
              { icon: LinkedinIcon, href: SITE_CONFIG.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${SITE_CONFIG.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}