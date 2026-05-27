// src/app/projects/[slug]/loading.tsx
export default function CaseStudyLoading() {
  return (
    <div className="py-16 px-4 animate-pulse">
      <div className="max-w-4xl mx-auto">
        {/* Back button skeleton */}
        <div className="h-5 w-32 bg-muted rounded mb-12" />

        {/* Header skeleton */}
        <div className="mb-12">
          <div className="flex gap-3 mb-4">
            <div className="h-6 w-20 bg-muted rounded-full" />
            <div className="h-6 w-24 bg-muted rounded-full" />
          </div>
          <div className="h-12 w-3/4 bg-muted rounded-lg mb-4" />
          <div className="h-6 w-full bg-muted rounded mb-6" />
          <div className="flex gap-3 mb-8">
            <div className="h-11 w-36 bg-muted rounded-xl" />
            <div className="h-11 w-44 bg-muted rounded-xl" />
          </div>
          <div className="grid grid-cols-3 gap-4 p-6 rounded-2xl border border-border">
            {[1, 2, 3].map((i) => (
              <div key={i}>
                <div className="h-8 w-16 bg-muted rounded mb-2" />
                <div className="h-4 w-24 bg-muted rounded" />
              </div>
            ))}
          </div>
        </div>

        {/* Hero image skeleton */}
        <div className="aspect-video bg-muted rounded-2xl mb-16" />

        {/* Content sections */}
        {[1, 2, 3].map((i) => (
          <div key={i} className="mb-12">
            <div className="h-8 w-48 bg-muted rounded-lg mb-6" />
            <div className="space-y-3">
              <div className="h-4 w-full bg-muted rounded" />
              <div className="h-4 w-5/6 bg-muted rounded" />
              <div className="h-4 w-4/6 bg-muted rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}