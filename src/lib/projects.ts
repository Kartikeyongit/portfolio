import { Project, OtherProject } from '@/types/project'

export const featuredProjects: Project[] = [
  {
    slug: 'real-time-collaboration-platform',
    title: 'Real-Time Collaboration Platform',
    tagline: 'Google Docs clone with Yjs CRDT, TipTap editor, and AI writing assistant',
    description:
      'A production-grade collaborative document editor supporting 50+ concurrent users with zero merge conflicts using Yjs CRDT, TipTap rich text editing, Socket.IO presence, and an AI writing assistant powered by Groq.',
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
      frontend: ['Next.js 14', 'TypeScript', 'TipTap', 'Zustand', 'Tailwind CSS'],
      backend: ['Node.js', 'Express', 'Socket.IO', 'Yjs', 'Groq AI'],
      database: ['PostgreSQL', 'LevelDB', 'Redis'],
      devops: ['Docker', 'AWS EC2', 'Nginx'],
      other: ['NextAuth.js', 'Prisma', 'jsPDF', 'docx'],
    },
    liveUrl: 'https://collabdocs-next.onrender.com/',
    githubUrl: 'https://github.com/Kartikeyongit/realtime-collab-platform',
    caseStudyUrl: '/projects/real-time-collaboration-platform',
    highlights: [
      'Built real-time collaborative editor using Yjs CRDT, supporting 50+ concurrent users with sub-100ms sync via WebSocket',
      'Integrated AI writing assistant (Groq) for improve, grammar, summarize, and expand features directly in the editor',
      'Implemented document export to 5 formats (PDF, DOCX, Markdown, HTML, Plain Text) and template system with 6 templates',
    ],
    metrics: [
      { label: 'Concurrent Users', value: '50+' },
      { label: 'Export Formats', value: '5' },
      { label: 'Templates', value: '6' },
    ],
    status: 'production',
    featuredOrder: 1,
    createdAt: '2025-10-01',
    updatedAt: '2026-01-15',
  },
  {
    slug: 'flash-sales-ecommerce',
    title: 'E-Commerce with Real-Time Inventory & Flash Sales',
    tagline: 'High-scale e-commerce with Turso database, Stripe payments, and admin dashboard',
    description:
      'A full-stack e-commerce platform handling flash sales with real-time inventory tracking, Stripe Checkout integration, wishlist management, product reviews, and a full admin dashboard with Recharts analytics.',
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
      frontend: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Zustand'],
      backend: ['Next.js API Routes', 'NextAuth.js', 'Node.js'],
      database: ['Turso (SQLite)', 'Drizzle ORM', 'Redis'],
      devops: ['Docker', 'Vercel', 'GitHub Actions'],
      other: ['Stripe', 'Uploadthing', 'Recharts', 'Framer Motion'],
    },
    liveUrl: 'https://modern-store-rust.vercel.app/',
    githubUrl: 'https://github.com/Kartikeyongit/modern-store',
    caseStudyUrl: '/projects/flash-sales-ecommerce',
    highlights: [
      'Designed real-time inventory system with Turso and Redis caching, reducing stock update latency to under 50ms',
      'Built complete admin dashboard with revenue charts, product CRUD, order management, and customer views using Recharts',
      'Implemented Stripe Checkout with webhook integration, wishlist, product reviews, and Uploadthing for multi-image uploads',
    ],
    metrics: [
      { label: 'Stock Latency', value: '<50ms' },
      { label: 'Admin Views', value: '4' },
      { label: 'Pages', value: '25+' },
    ],
    status: 'production',
    featuredOrder: 2,
    createdAt: '2025-11-01',
    updatedAt: '2026-02-01',
  },
  {
    slug: 'dashboard-builder',
    title: 'Real-Time Dashboard Builder',
    tagline: 'Drag-and-drop dashboard builder with Go backend and live database connections',
    description:
      'A Retool/Grafana-inspired platform connecting PostgreSQL and MySQL databases with a Go (Fiber) backend, Monaco SQL editor with schema autocomplete, and drag-and-drop widgets that refresh in real time via WebSocket.',
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
      frontend: ['React 19', 'TypeScript', 'Redux Toolkit', 'ECharts', 'AG Grid'],
      backend: ['Go (Fiber)', 'gorilla/websocket', 'pgxpool'],
      database: ['PostgreSQL', 'MySQL', 'Redis'],
      devops: ['Docker', 'Render', 'GitHub Actions'],
      other: ['Monaco Editor', 'react-grid-layout', 'Prometheus'],
    },
    liveUrl: 'https://dashboard-frontend-kms5.onrender.com',
    githubUrl: 'https://github.com/Kartikeyongit/dashboard-builder',
    caseStudyUrl: '/projects/dashboard-builder',
    highlights: [
      'Built Go (Fiber) backend with WebSocket hub, Redis pub/sub scheduler, and sandboxed SQL execution engine for PostgreSQL and MySQL',
      'Created drag-and-drop widget system (ECharts, AG Grid) with configurable auto-refresh and dashboard sharing with password protection',
      'Implemented multi-tenant architecture with role-based access (admin/editor/viewer), JWT auth, and rate limiting',
    ],
    metrics: [
      { label: 'DB Types', value: '2' },
      { label: 'Backend', value: 'Go (Fiber)' },
      { label: 'Widget Types', value: '8+' },
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
    tagline: 'Polyglot microservices with Node.js, Go, Python, RabbitMQ, and Kubernetes',
    description:
      'A production-grade microservices e-commerce platform with 6 services (API Gateway, Auth, Product, Order, Payment, Notification) using Node.js, Go, and Python. Async communication via RabbitMQ with Docker Compose and Kubernetes orchestration.',
    thumbnail: '/images/projects/microservices/thumbnail.webp',
    category: 'backend',
    stack: ['Node.js', 'Go', 'Python', 'Express', 'RabbitMQ', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'Prometheus', 'Grafana'],
    githubUrl: 'https://github.com/Kartikeyongit/ecommerce-microservices',
    highlights: [
      'Polyglot architecture: Order service in Go, Payment service in Python, remaining services in Node.js with RabbitMQ message queue',
      'Implemented Saga pattern for distributed transactions, CQRS for read/write separation, and circuit breaker for fault tolerance',
      'Full monitoring stack with Prometheus, Grafana dashboards, and structured logging per service',
    ],
    metrics: [
      { label: 'Services', value: '6' },
      { label: 'Languages', value: 'Polyglot' },
      { label: 'Orchestration', value: 'K8s' },
    ],
    status: 'development',
  },
  {
    slug: 'blog-cms',
    title: 'Blog Platform with CMS',
    tagline: 'Full-featured blog with rich text editor, Resend newsletter, and analytics dashboard',
    description:
      'A modern blogging platform with rich Markdown editor (MDEditor) with live preview, Prisma/PostgreSQL backend, nested comment system with likes, bookmarking, Resend-powered newsletter, and a Recharts analytics dashboard.',
    thumbnail: '/images/projects/blog-cms/thumbnail.webp',
    category: 'fullstack',
    stack: ['Next.js 16', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'NextAuth.js', 'MDEditor', 'Recharts', 'Resend', 'Uploadthing'],
    githubUrl: 'https://github.com/Kartikeyongit/blog-platform',
    liveUrl: 'https://blog-platform-two-eta.vercel.app/',
    highlights: [
      'Rich Markdown editor with live preview, draft auto-save to localStorage, and Uploadthing cover image uploads',
      'Full user system with role-based access (Admin/Author/Reader), nested comments with likes, and bookmark system',
      'Analytics dashboard with Recharts showing views, engagement, post categories, and newsletter subscription tracking via Resend',
    ],
    metrics: [
      { label: 'Roles', value: '3' },
      { label: 'CMS Type', value: 'MDEditor' },
      { label: 'Auth', value: 'NextAuth.js' },
    ],
    status: 'production',
  },
  {
    slug: 'social-media-platform',
    title: 'Social Media Platform',
    tagline: 'GraphQL-powered social app with Redis feed caching and AI hashtag suggestions',
    description:
      'A full-stack social media monorepo with Apollo GraphQL API, Redis-powered feed caching, real-time notifications, direct messaging, Cloudinary image CDN, and TF-IDF based AI hashtag suggestions.',
    thumbnail: '/images/projects/social-media/thumbnail.webp',
    category: 'frontend',
    stack: ['Next.js 14', 'TypeScript', 'Apollo Client', 'Apollo Server', 'GraphQL', 'PostgreSQL', 'Prisma', 'Redis', 'Cloudinary', 'Framer Motion'],
    githubUrl: 'https://github.com/Kartikeyongit/social-platform',
    liveUrl: 'https://social-platform-web-flax.vercel.app/',
    highlights: [
      'GraphQL API with Apollo Server featuring Redis caching, data loaders, and real-time subscriptions for notifications',
      'AI-powered hashtag suggestions using TF-IDF content analysis and personalized recommendations via content-based filtering',
      'Glass-morphism UI with dark mode, infinite scroll feed with cursor-based pagination, and real-time messaging',
    ],
    metrics: [
      { label: 'API Layer', value: 'GraphQL' },
      { label: 'Caching', value: 'Redis' },
      { label: 'Messaging', value: 'Real-time' },
    ],
    status: 'production',
  },
]

export const spaProjects: OtherProject[] = [
  {
    slug: 'value-ai-spa',
    title: 'ValueAI — AI Infrastructure Suite',
    tagline: 'AI cost management with spend audit, optimization dashboard, and marketing landing page',
    description:
      'A comprehensive AI cost management suite combining three products: a marketing landing page, an AI spend audit tool (Next.js), and a full-stack optimization dashboard (React/Vite + Express + Prisma + PostgreSQL + Docker).',
    thumbnail: '/images/projects/value-ai-spa/thumbnail.webp',
    category: 'frontend',
    stack: ['React', 'TypeScript', 'Vite', 'Next.js', 'Express', 'Prisma', 'PostgreSQL', 'Redis', 'Tailwind CSS', 'Recharts', 'Zustand', 'Docker'],
    githubUrl: 'https://github.com/Kartikeyongit/value-ai-spa',
    liveUrl: 'https://value-ai-spa-sepia.vercel.app/',
    highlights: [
      'Unified AI cost management platform: marketing SPA landing page + free spend audit tool + full optimization dashboard',
      'Spend audit tool analyzes AI subscriptions (Cursor, ChatGPT, Claude, etc.) across 15+ providers and identifies savings opportunities',
      'Optimization dashboard with real-time cost monitoring, cross-provider normalization, predictive forecasting, and smart alerts',
    ],
    metrics: [
      { label: 'Products', value: '3-in-1' },
      { label: 'Providers', value: '15+' },
      { label: 'Infrastructure', value: 'Docker' },
    ],
    status: 'production',
  },
  {
    slug: 'editorial-magazine',
    title: 'Editorial Magazine',
    tagline: 'Interactive digital magazine with GSAP motion choreography and atmospheric audio',
    description:
      'A visually immersive digital magazine with GSAP-powered scroll-triggered animations, Lenis smooth scrolling, horizontal photo essays on desktop, word-highlight scroll mapping, and an atmospheric audio controller.',
    thumbnail: '/images/projects/editorial-magazine/thumbnail.webp',
    category: 'frontend',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'Lenis', 'Lucide React'],
    githubUrl: 'https://github.com/Kartikeyongit/editorial-magazine',
    liveUrl: 'https://editorial-magazine-six.vercel.app/',
    highlights: [
      'GSAP-powered scroll-triggered animation timeline with parallax effects, word-highlight mapping, and horizontal photo essays',
      'Lenis smooth scrolling with custom easing, scroll-preserved navigation, and interactive preloader with numeric progress',
      'Atmospheric audio controller with ambient tracks, mute state sync, and magnetic hover indicators',
    ],
    metrics: [
      { label: 'Animation', value: 'GSAP' },
      { label: 'Scrolling', value: 'Lenis' },
      { label: 'Audio', value: 'Ambient' },
    ],
    status: 'production',
  },
  {
    slug: 'ai-agent-spa',
    title: 'AI Agent SPA (StackForge)',
    tagline: 'Monorepo AI app generator with OpenAPI codegen, Drizzle ORM, and Express 5',
    description:
      'A pnpm monorepo AI-powered full-stack application generator. Describe your app in plain English and get production-ready React 19 + Vite frontend, Express 5 API, Drizzle ORM schemas, and code-generated API client from an OpenAPI spec via Orval.',
    thumbnail: '/images/projects/ai-agent-spa/thumbnail.webp',
    category: 'fullstack',
    stack: ['React 19', 'TypeScript', 'Vite 7', 'Express 5', 'PostgreSQL', 'Drizzle ORM', 'Zod', 'Orval', 'Tailwind CSS', 'pnpm', 'Framer Motion'],
    githubUrl: 'https://github.com/Kartikeyongit/ai-agent-spa',
    liveUrl: 'https://ai-agent-spa-rouge.vercel.app/',
    highlights: [
      'pnpm monorepo with OpenAPI spec as source of truth — Orval codegen produces React Query hooks + Zod schemas automatically',
      'Express 5 (ESM) backend with esbuild bundling, Drizzle ORM for type-safe database queries, and Zod validation',
      'AI-powered full-stack app generator — describe an app in natural language and generate production-ready code across the stack',
    ],
    metrics: [
      { label: 'Architecture', value: 'Monorepo' },
      { label: 'Frontend', value: 'Vite + React 19' },
      { label: 'Codegen', value: 'Orval' },
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
