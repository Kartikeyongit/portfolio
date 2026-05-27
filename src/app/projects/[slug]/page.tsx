// src/app/projects/[slug]/page.tsx
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { GithubIcon } from '@/components/shared/icons'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/projects'

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>
}

// Generate static params for all projects
export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }))
}

// Dynamic metadata
export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return { title: 'Project Not Found' }
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.thumbnail, width: 1200, height: 630 }],
      type: 'article',
    },
  }
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <article className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link
          href="/#featured-work"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12 group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to all projects
        </Link>

        {/* Header */}
        <header className="mb-12">
          {/* Category & Status */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="secondary" className="capitalize">
              {project.category}
            </Badge>
            <Badge
              variant="outline"
              className={
                project.status === 'production'
                  ? 'border-green-500/30 text-green-600 dark:text-green-400'
                  : 'border-yellow-500/30 text-yellow-600 dark:text-yellow-400'
              }
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current mr-1.5 inline-block" />
              {project.status}
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            {project.liveUrl && (
              <Button size="lg" className="rounded-xl shadow-lg shadow-primary/25" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
            <Button size="lg" variant="outline" className="rounded-xl" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="mr-2 h-4 w-4" />
                View Source Code
              </a>
            </Button>
          </div>

          {/* Key metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-primary">{metric.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{metric.label}</div>
                </div>
              ))}
            </div>
          )}
        </header>

        {/* Hero Image */}
        <div className="relative aspect-video rounded-2xl overflow-hidden mb-16 border border-border shadow-xl">
          <Image
            src={project.images[0]}
            alt={`${project.title} hero screenshot`}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>

        {/* Resume Highlights */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Key Achievements</h2>
          <div className="space-y-4">
            {project.highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 rounded-xl border border-border bg-card/50 hover:bg-card transition-colors"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
                <p className="text-muted-foreground leading-relaxed pt-1">{highlight}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Architecture</h2>
          <div className="relative rounded-2xl border border-border overflow-hidden bg-card p-2 sm:p-4 shadow-lg">
            <Image
              src={
                project.images.find((img) => img.includes('architecture')) ||
                project.images[1] ||
                project.images[0]
              }
              alt={`${project.title} architecture diagram`}
              width={1200}
              height={700}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <p className="text-sm text-muted-foreground mt-3 text-center">
            System architecture showing service communication and data flow
          </p>
        </section>

        {/* Full Tech Stack */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Technology Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(project.stack).map(([category, techs]) =>
              techs.length > 0 ? (
                <div
                  key={category}
                  className="p-5 rounded-xl border border-border bg-card/50 hover:bg-card transition-colors"
                >
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {techs.map((tech) => (
                      <Badge key={tech} variant="secondary" className="font-normal">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ) : null
            )}
          </div>
        </section>

        <Separator className="my-8" />

        {/* Image Gallery */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Screenshots & UI</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images
              .filter((img) => !img.includes('architecture'))
              .slice(1)
              .map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-video rounded-xl overflow-hidden border border-border shadow-md group cursor-pointer"
                >
                  <Image
                    src={image}
                    alt={`${project.title} screenshot ${index + 2}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
              ))}
          </div>
        </section>

        {/* Video Demo */}
        {project.videoDemo && (
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Video Demo</h2>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border shadow-xl">
              <iframe
                src={project.videoDemo}
                title={`${project.title} demo video`}
                className="absolute inset-0 w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </section>
        )}

        {/* Footer CTA */}
        <section className="text-center py-12 px-6 rounded-2xl border border-border bg-card/50">
          <h2 className="text-2xl font-semibold mb-4">Interested in this project?</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Check out the live demo or dive into the source code to see how it&apos;s built.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {project.liveUrl && (
              <Button className="rounded-xl" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Try Live Demo
                </a>
              </Button>
            )}
            <Button variant="outline" className="rounded-xl" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="mr-2 h-4 w-4" />
                View on GitHub
              </a>
            </Button>
          </div>
        </section>
      </div>
    </article>
  )
}