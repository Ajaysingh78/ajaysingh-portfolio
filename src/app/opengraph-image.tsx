import { ImageResponse } from 'next/og'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#060810',
          color: '#F0F4FF',
          padding: 72,
          fontFamily: 'Inter, Arial, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 80,
              height: 80,
              border: '1px solid rgba(0, 212, 255, 0.35)',
              borderRadius: 18,
              background: 'rgba(0, 212, 255, 0.10)',
              color: '#00D4FF',
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            AR
          </div>
          <div style={{ color: '#00D4FF', fontSize: 24, letterSpacing: 2 }}>
            PORTFOLIO
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ color: '#8B9CC8', fontSize: 28 }}>
            Backend-Focused Product Engineer
          </div>
          <div
            style={{
              maxWidth: 900,
              fontSize: 82,
              lineHeight: 1,
              fontWeight: 800,
              letterSpacing: -3,
            }}
          >
            Ajay Rathore
          </div>
          <div style={{ maxWidth: 900, color: '#8B9CC8', fontSize: 30 }}>
            MERN Stack and Java developer building scalable systems, hackathon-grade products, and real-world engineering solutions.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 20,
            color: '#10B981',
            fontSize: 24,
          }}
        >
          <span>NASA Finalist</span>
          <span style={{ color: '#4A5878' }}>/</span>
          <span>SIH Top 6</span>
          <span style={{ color: '#4A5878' }}>/</span>
          <span>API Performance</span>
        </div>
      </div>
    ),
    size
  )
}
