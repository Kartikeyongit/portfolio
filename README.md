# 👨‍💻 Kartikey Gautam — Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer-Motion-ff00e5?logo=framer)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://vercel.com)

> A modern, production-grade portfolio showcasing full-stack engineering projects — built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

🔗 **Live:** [portfolio](https://portfolio-kappa-seven-65.vercel.app/)

---

## 📸 Preview

![Portfolio Hero](public/images/og/default.webp)

---

## 🚀 Featured Projects

| Project | Description | Tech |
|---------|-------------|------|
| **Real-Time Collaboration Platform** | Google Docs clone with CRDT-based sync, live cursors, and version history | React, Yjs, WebSocket, PostgreSQL, Redis |
| **E-Commerce with Flash Sales** | Real-time inventory, BullMQ queues, Stripe payments, faceted search | Next.js 14, Redis, BullMQ, Meilisearch |
| **Dashboard Builder** | Drag-and-drop dashboards with sandboxed SQL execution engine | React, Go, PostgreSQL, WebSocket, ECharts |

[View all projects →](https://kartikeygautam.dev/#featured-work)

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Framework** | Next.js 15 (App Router), React 19 |
| **Language** | TypeScript (strict mode) |
| **Styling** | Tailwind CSS, shadcn/ui, Framer Motion |
| **Fonts** | Geist Sans + Geist Mono (by Vercel) |
| **Content** | MDX for case studies |
| **Analytics** | Vercel Analytics |
| **Deployment** | Vercel (automatic CI/CD) |

---

## ✨ Features

- ⚡ **Blazing fast** — Static generation + ISR, 90+ Lighthouse scores
- 🎨 **Dark/Light mode** — Seamless theme switching with `next-themes`
- 🖱️ **Custom cursor** — Interactive cursor follower on desktop
- 📜 **Scroll progress** — Animated gradient progress bar
- ⌨️ **Typewriter effect** — Dynamic role animation in hero
- 📱 **Fully responsive** — Mobile-first design
- 🔍 **SEO optimized** — Dynamic OG images, JSON-LD, sitemap
- ♿ **Accessible** — ARIA labels, keyboard navigation, screen reader support
- 📄 **Resume download** — One-click PDF resume

---

## 📁 Project Structure
```
portfolio/
├── public/
│   ├── images/projects/        # Project screenshots
│   └── resume.pdf              # Latest resume
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── projects/[slug]/    # Dynamic case study pages
│   │   └── api/og/             # OG image generation
│   ├── components/
│   │   ├── home/               # Hero, projects, skills, contact
│   │   ├── layout/             # Header, footer, theme
│   │   ├── projects/           # Project cards
│   │   ├── shared/             # Reusable animations, icons
│   │   └── ui/                 # shadcn/ui components
│   ├── lib/                    # Data, utilities, constants
│   ├── hooks/                  # Custom React hooks
│   ├── types/                  # TypeScript definitions
│   │   └── styles/             # Global CSS
├── content/                    # MDX case studies (coming soon)
└── next.config.ts
```

---

# 🏃 Getting Started

## Prerequisites

- Node.js 18+
- npm or yarn

## Installation

```bash
# Clone the repository
git clone https://github.com/Kartikeyongit/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:3000 in your browser.

## Build for Production

```bash
npm run build
npm start
```

---

# 📝 Customization

## Personal Information

Edit these files to make it yours:

- `src/lib/constants.ts` — Name, links, site config
- `src/lib/projects.ts` — Project data and images
- `public/resume.pdf` — Your resume

## Projects

Add/remove projects in `src/lib/projects.ts`:

```typescript
export const featuredProjects: Project[] = [
  {
    slug: 'your-project',
    title: 'Your Project Name',
    // ... more fields
  },
]
```

## Skills

Update categories in:

```text
src/components/home/skills-section.tsx
```

## Typing Animation

Change roles in:

```text
src/components/home/hero.tsx
```

```typescript
const ROLES = [
  'Software Engineer',
  'Full Stack Developer',
  'DevOps Engineer',
]
```

---

# 🚢 Deployment

This project is configured for one-click deployment on Vercel:

1. Push to GitHub
2. Import repo on Vercel
3. Deploy — no configuration needed

```text
https://vercel.com/button
```

---

# 📊 Lighthouse Scores

| Performance | Accessibility | Best Practices | SEO |
|-------------|--------------|----------------|-----|
| 🟢 98 | 🟢 100 | 🟢 100 | 🟢 100 |

---

# 🎯 Key Achievements

- 🎓 GATE 2026 CS Qualified
- 🏐 Inter-Branch Volleyball Champion (2023 & 2024)
- 💻 200+ DSA Problems Solved on LeetCode
- 🏗️ Built 8+ production-grade full-stack applications

---

# 📬 Contact

- Email: `kartikeygautamrai@gmail.com`
- LinkedIn: `kartikeygautamrai`
- GitHub: `Kartikeyongit`

---

# 📄 License

This project is open source and available under the MIT License.