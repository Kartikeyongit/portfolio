// src/app/layout.tsx
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { ThemeProvider } from '@/components/layout/theme-provider'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import { Geist } from "next/font/google";
import { ScrollProgress } from '@/components/shared/scroll-progress'
import { StructuredData } from '@/components/shared/structured-data'
import { Analytics } from '@vercel/analytics/react'

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const geistSans = GeistSans
const geistMono = GeistMono

// In src/app/layout.tsx, update the metadata:
export const metadata: Metadata = {
  // ... rest of metadata
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    siteName: 'Your Name Portfolio',
    title: 'Your Name — Full Stack Developer',
    description: 'Full-stack developer building production-grade applications.',
    images: [
      {
        url: '/api/og?title=Your%20Name%20—%20Full%20Stack%20Developer&subtitle=Building%20production-grade%20applications',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          'font-sans antialiased min-h-screen bg-background text-foreground'
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <ScrollProgress />
        </ThemeProvider>
        <StructuredData />
        <Analytics />
      </body>
    </html>
  )
}