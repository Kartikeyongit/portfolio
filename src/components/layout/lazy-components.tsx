'use client'

import dynamic from 'next/dynamic'

const ScrollProgress = dynamic(
  () => import('@/components/shared/scroll-progress').then((m) => m.ScrollProgress),
  { ssr: false }
)

const CursorFollower = dynamic(
  () => import('@/components/shared/cursor-follower').then((m) => m.CursorFollower),
  { ssr: false }
)

export function LazyComponents() {
  return (
    <>
      <ScrollProgress />
      <CursorFollower />
    </>
  )
}
