// src/app/api/og/route.tsx
import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || 'Your Name — Full Stack Developer'
  const subtitle = searchParams.get('subtitle') || 'Building production-grade applications'

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0f0f23 100%)',
          fontFamily: 'Geist',
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Gradient orbs */}
        <div
          style={{
            position: 'absolute',
            top: -200,
            left: -200,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'rgba(99, 102, 241, 0.15)',
            filter: 'blur(80px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -200,
            right: -200,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'rgba(139, 92, 246, 0.15)',
            filter: 'blur(80px)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 16,
            zIndex: 10,
          }}
        >
          <h1
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: 'white',
              textAlign: 'center',
              maxWidth: 900,
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: 28,
              color: '#a5b4fc',
              textAlign: 'center',
              margin: 0,
            }}
          >
            {subtitle}
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}