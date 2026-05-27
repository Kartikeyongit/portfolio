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
    thumbnail: '/images/projects/microservices/thumbnail.webp',
    stack: ['Node.js', 'Python', 'Go', 'RabbitMQ', 'Docker', 'Kubernetes'],
    githubUrl: 'https://github.com/Kartikeyongit/ecommerce-microservices',
  },
  {
    slug: 'blog-cms',
    title: 'Blog Platform with CMS',
    tagline: 'Full-featured blog with Sanity CMS, SSG/ISR, and analytics dashboard',
    thumbnail: '/images/projects/blog-cms/thumbnail.webp',
    stack: ['Next.js', 'Sanity', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Kartikeyongit/blog-platform',
    liveUrl: 'https://blog-platform-two-eta.vercel.app/',
  },
  {
    slug: 'social-media-platform',
    title: 'Social Media Platform',
    tagline: 'GraphQL-powered social app with news feed algorithm and real-time chat',
    thumbnail: '/images/projects/social-media/thumbnail.webp',
    stack: ['React', 'Node.js', 'GraphQL', 'PostgreSQL', 'Redis'],
    githubUrl: 'https://github.com/Kartikeyongit/social-platform',
    liveUrl: 'https://social-platform-web-flax.vercel.app/',
  },
  {
    slug: 'task-manager',
    title: 'Task Manager',
    tagline: 'Full-stack task management with drag-and-drop, real-time updates, and user auth',
    thumbnail: '/images/projects/task-manager/thumbnail.webp',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Kartikeyongit/task-manager',
    liveUrl: undefined, // Add URL if deployed
  },
  {
    slug: 'real-time-chat',
    title: 'Real-Time Chat Application',
    tagline: 'Scalable chat with Socket.io, Redis pub/sub, and JWT authentication',
    thumbnail: '/images/projects/chat/thumbnail.webp',
    stack: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Redis', 'Docker'],
    githubUrl: 'https://github.com/Kartikeyongit/real-time-chat-app',
    liveUrl: undefined,
  },
  {
    slug: 'collaborative-code-editor',
    title: 'Collaborative Code Editor',
    tagline: 'Real-time collaborative code editor with multi-language support and sandboxed execution',
    thumbnail: '/images/projects/code-editor/thumbnail.webp',
    stack: ['React', 'Node.js', 'Socket.io', 'Monaco Editor', 'Docker'],
    githubUrl: 'https://github.com/Kartikeyongit/collaborative-editor',
    liveUrl: undefined, // Add URL if deployed
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return featuredProjects.find((p) => p.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return featuredProjects.map((p) => p.slug)
}