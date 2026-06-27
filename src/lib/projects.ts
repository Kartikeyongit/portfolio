// src/lib/projects.ts
import { Project, OtherProject } from '@/types/project'

export const featuredProjects: Project[] = [
  {
    slug: 'real-time-collaboration-platform',
    title: 'Real-Time Collaboration Platform',
    tagline: 'Google Docs clone with CRDT-based conflict resolution and live cursors',
    description:
      'A production-grade collaborative document editor supporting multiple concurrent users with zero merge conflicts using Yjs CRDT library.',
    featured: true,
    category: 'realtime',
    thumbnail: '/images/projects/collab-platform/thumbnail.webp',
    images: [
      '/images/projects/collab-platform/hero.webp',
      '/images/projects/collab-platform/architecture.webp',
      '/images/projects/collab-platform/cursors.webp',
      '/images/projects/collab-platform/history.webp',
    ],
    videoDemo: undefined,
    stack: {
      frontend: ['React', 'TypeScript', 'TipTap', 'Zustand', 'Tailwind CSS'],
      backend: ['Node.js', 'Express', 'y-websocket', 'Yjs'],
      database: ['PostgreSQL', 'Redis'],
      devops: ['Docker', 'AWS EC2', 'Nginx'],
      other: ['Socket.io', 'NextAuth', 'JWT'],
    },
    liveUrl: 'https://realtime-collab-platform-pi.vercel.app/',
    githubUrl: 'https://github.com/Kartikeyongit/realtime-collab-platform',
    caseStudyUrl: '/projects/real-time-collaboration-platform',
    highlights: [
      'Built real-time collaborative editor using Yjs CRDT library, supporting 50+ concurrent users with sub-100ms sync',
      'Engineered presence awareness system with live cursors and per-section viewer tracking via WebSocket',
      'Implemented version history with time-travel slider using differential snapshots stored in PostgreSQL',
    ],
    metrics: [
      { label: 'Concurrent Users', value: '50+' },
      { label: 'Sync Latency', value: '<100ms' },
      { label: 'Doc Size', value: '100K+ chars' },
    ],
    status: 'production',
    featuredOrder: 1,
    createdAt: '2025-10-01',
    updatedAt: '2026-01-15',
  },
  {
    slug: 'flash-sales-ecommerce',
    title: 'E-Commerce with Real-Time Inventory & Flash Sales',
    tagline: 'High-scale e-commerce with real-time stock updates and flash sale queuing',
    description:
      'A visually stunning e-commerce platform handling flash sales with real-time inventory tracking, countdown timers, and a robust queuing system.',
    featured: true,
    category: 'fullstack',
    thumbnail: '/images/projects/flash-sales/thumbnail.webp',
    images: [
      '/images/projects/flash-sales/hero.webp',
      '/images/projects/flash-sales/flash-sale.webp',
      '/images/projects/flash-sales/admin.webp',
      '/images/projects/flash-sales/architecture.webp',
    ],
    stack: {
      frontend: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
      backend: ['Next.js API Routes', 'BullMQ', 'Node.js'],
      database: ['PostgreSQL', 'Redis'],
      devops: ['Docker', 'Vercel', 'GitHub Actions'],
      other: ['Supabase Realtime', 'Stripe', 'Meilisearch', 'WebSocket'],
    },
    liveUrl: 'https://modern-store-rust.vercel.app/',
    githubUrl: 'https://github.com/Kartikeyongit/modern-store',
    caseStudyUrl: '/projects/flash-sales-ecommerce',
    highlights: [
      'Designed real-time inventory system with Redis caching, reducing stock update latency to under 50ms',
      'Built flash sale queue using BullMQ with rate limiting, handling 10K+ concurrent checkout attempts',
      'Implemented faceted search with Meilisearch achieving sub-100ms search across 100K+ products',
    ],
    metrics: [
      { label: 'Stock Latency', value: '<50ms' },
      { label: 'Concurrent Checkouts', value: '10K+' },
      { label: 'Search Speed', value: '<100ms' },
    ],
    status: 'production',
    featuredOrder: 2,
    createdAt: '2025-11-01',
    updatedAt: '2026-02-01',
  },
  {
    slug: 'dashboard-builder',
    title: 'Real-Time Dashboard Builder',
    tagline: 'Drag-and-drop dashboard builder with live database connections',
    description:
      'A Retool/Grafana-inspired platform letting users connect external databases and build interactive dashboards with drag-and-drop widgets.',
    featured: true,
    category: 'tools',
    thumbnail: '/images/projects/dashboard-builder/thumbnail.webp',
    images: [
      '/images/projects/dashboard-builder/hero.webp',
      '/images/projects/dashboard-builder/architecture.webp',
      '/images/projects/dashboard-builder/editor.webp',
      '/images/projects/dashboard-builder/sql.webp',
    ],
    stack: {
      frontend: ['React', 'TypeScript', 'AG Grid', 'ECharts', 'CodeMirror'],
      backend: ['Node.js', 'Express', 'Go (Fiber)'],
      database: ['PostgreSQL', 'MySQL', 'Redis'],
      devops: ['Docker', 'Railway', 'GitHub Actions'],
      other: ['WebSocket', 'pgx', 'SQL Parser'],
    },
    liveUrl: 'https://dashboard-frontend-kms5.onrender.com',
    githubUrl: 'https://github.com/Kartikeyongit/dashboard-builder',
    caseStudyUrl: '/projects/dashboard-builder',
    highlights: [
      'Built sandboxed SQL execution engine with connection pooling supporting PostgreSQL and MySQL',
      'Created drag-and-drop widget system with real-time data refresh via WebSocket at configurable intervals',
      'Implemented shareable read-only dashboard links with role-based access control',
    ],
    metrics: [
      { label: 'DB Types', value: '2' },
      { label: 'Widget Types', value: '8+' },
      { label: 'Min Refresh', value: '5s' },
    ],
    status: 'production',
    featuredOrder: 3,
    createdAt: '2025-08-15',
    updatedAt: '2026-01-20',
  },
]

export const otherProjects: OtherProject[] = [
  {
    slug: 'microservices-ecommerce',
    title: 'Microservices E-Commerce',
    tagline: 'Distributed e-commerce with Docker, K8s, and RabbitMQ message queues',
    description:
      'A production-grade microservices e-commerce platform built with a polyglot architecture. Services communicate via RabbitMQ message queues with Docker Compose and Kubernetes orchestration for scalable deployment.',
    thumbnail: '/images/projects/microservices/thumbnail.webp',
    category: 'backend',
    stack: ['Node.js', 'Python', 'Go', 'RabbitMQ', 'Docker', 'Kubernetes'],
    githubUrl: 'https://github.com/Kartikeyongit/ecommerce-microservices',
    highlights: [
      'Polyglot microservices architecture with Node.js, Python, and Go services communicating via RabbitMQ',
      'Docker Compose for local dev and Kubernetes manifests for production deployment with auto-scaling',
      'Implemented API Gateway pattern with rate limiting, auth, and request routing',
    ],
    metrics: [
      { label: 'Services', value: '6' },
      { label: 'Tech Stack', value: 'Polyglot' },
      { label: 'Orchestration', value: 'K8s' },
    ],
    status: 'development',
  },
  {
    slug: 'blog-cms',
    title: 'Blog Platform with CMS',
    tagline: 'Full-featured blog with Sanity CMS, SSG/ISR, and analytics dashboard',
    description:
      'A modern blogging platform with headless CMS integration via Sanity, server-side rendering with ISR for fast page loads, and a custom analytics dashboard for content performance tracking.',
    thumbnail: '/images/projects/blog-cms/thumbnail.webp',
    category: 'fullstack',
    stack: ['Next.js', 'Sanity', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Kartikeyongit/blog-platform',
    liveUrl: 'https://blog-platform-two-eta.vercel.app/',
    highlights: [
      'Headless CMS with Sanity providing real-time content preview and structured content modeling',
      'ISR-based caching strategy achieving sub-100ms page loads with instant content updates on publish',
      'Custom analytics dashboard tracking page views, read time, and content engagement metrics',
    ],
    metrics: [
      { label: 'Page Load', value: '<100ms' },
      { label: 'CMS Sync', value: 'Real-time' },
      { label: 'Framework', value: 'Next.js' },
    ],
    status: 'production',
  },
  {
    slug: 'social-media-platform',
    title: 'Social Media Platform',
    tagline: 'GraphQL-powered social app with news feed algorithm and real-time chat',
    description:
      'A full-stack social media platform featuring a GraphQL API with Apollo, a personalized news feed algorithm, real-time messaging via WebSocket, and Redis-powered caching.',
    thumbnail: '/images/projects/social-media/thumbnail.webp',
    category: 'frontend',
    stack: ['React', 'Node.js', 'GraphQL', 'PostgreSQL', 'Redis'],
    githubUrl: 'https://github.com/Kartikeyongit/social-platform',
    liveUrl: 'https://social-platform-web-flax.vercel.app/',
    highlights: [
      'GraphQL API with Apollo Server featuring data loaders and query batching for optimal performance',
      'Personalized news feed algorithm using Redis sorted sets for real-time ranking and relevance scoring',
      'Real-time chat with WebSocket connections and message persistence in PostgreSQL',
    ],
    metrics: [
      { label: 'API Layer', value: 'GraphQL' },
      { label: 'Caching', value: 'Redis' },
      { label: 'Chat', value: 'WebSocket' },
    ],
    status: 'production',
  },
]

export const spaProjects: OtherProject[] = [
  {
    slug: 'value-ai-spa',
    title: 'ValueAI — AI Infrastructure Suite',
    tagline: 'Landing page, spend audit tool, and infrastructure optimizer — a full AI cost management suite',
    description:
      'A comprehensive AI cost management suite comprising three integrated tools: a marketing landing page, an AI spend audit dashboard, and an infrastructure optimizer. Built as a modern SPA with a Node.js/Express backend and PostgreSQL persistence.',
    thumbnail: '/images/projects/value-ai-spa/thumbnail.webp',
    category: 'frontend',
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Claude AI'],
    githubUrl: 'https://github.com/Kartikeyongit/value-ai-spa',
    liveUrl: 'https://value-ai-spa-sepia.vercel.app/',
    highlights: [
      'AI spend audit dashboard with interactive charts and real-time cost tracking across cloud providers',
      'Infrastructure optimizer providing actionable recommendations for reducing AI compute costs',
      'Multi-page SPA with client-side routing, form validation, and responsive design',
    ],
    metrics: [
      { label: 'Tools', value: '3-in-1' },
      { label: 'Backend', value: 'Express + Prisma' },
      { label: 'Database', value: 'PostgreSQL' },
    ],
    status: 'production',
  },
  {
    slug: 'editorial-magazine',
    title: 'Editorial Magazine',
    tagline: 'Interactive digital magazine with GSAP-powered motion choreography and immersive audio beds',
    description:
      'A visually immersive digital magazine experience featuring scroll-triggered animations with GSAP, smooth parallax scrolling via Lenis, audio integration for ambient soundscapes, and a rich editorial layout.',
    thumbnail: '/images/projects/editorial-magazine/thumbnail.webp',
    category: 'frontend',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'Lenis'],
    githubUrl: 'https://github.com/Kartikeyongit/editorial-magazine',
    liveUrl: 'https://editorial-magazine-six.vercel.app/',
    highlights: [
      'GSAP-powered scroll-triggered animation timeline with parallax effects and choreographed reveals',
      'Smooth scrolling with Lenis, including custom easing and scroll-driven animation hooks',
      'Ambient audio playback system with playlist controls and volume management',
    ],
    metrics: [
      { label: 'Animation', value: 'GSAP' },
      { label: 'Scrolling', value: 'Lenis' },
      { label: 'Design', value: 'Editorial' },
    ],
    status: 'production',
  },
  {
    slug: 'ai-agent-spa',
    title: 'AI Agent SPA',
    tagline: 'Monorepo AI agent platform with React frontend, Express API, and PostgreSQL persistence',
    description:
      'A monorepo AI agent platform featuring a Vite-powered React frontend, Express API server, and PostgreSQL database with Drizzle ORM. The platform provides an interface for interacting with AI agents.',
    thumbnail: '/images/projects/ai-agent-spa/thumbnail.webp',
    category: 'fullstack',
    stack: ['React', 'TypeScript', 'Vite', 'Express', 'PostgreSQL', 'Drizzle ORM', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Kartikeyongit/ai-agent-spa',
    liveUrl: 'https://ai-agent-spa-rouge.vercel.app/',
    highlights: [
      'Monorepo architecture with shared TypeScript types between frontend and backend',
      'Vite-powered React frontend with fast HMR and optimized production builds',
      'Express API with Drizzle ORM for type-safe database queries and migrations',
    ],
    metrics: [
      { label: 'Architecture', value: 'Monorepo' },
      { label: 'Frontend', value: 'Vite + React' },
      { label: 'ORM', value: 'Drizzle' },
    ],
    status: 'production',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return featuredProjects.find((p) => p.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return featuredProjects.map((p) => p.slug)
}