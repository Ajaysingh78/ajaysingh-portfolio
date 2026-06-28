'use client'
// ============================================================
// CURSOR v3
// ============================================================
import { useEffect, useRef, useState } from 'react'

export function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    if ('ontouchstart' in window) return
    let raf: number, ringX = 0, ringY = 0, curX = 0, curY = 0

    const onMove = (e: MouseEvent) => {
      curX = e.clientX; curY = e.clientY
      if (dotRef.current) { dotRef.current.style.left = `${curX}px`; dotRef.current.style.top = `${curY}px` }
    }
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t
    const animate = () => {
      ringX = lerp(ringX, curX, 0.12); ringY = lerp(ringY, curY, 0.12)
      if (ringRef.current) { ringRef.current.style.left = `${ringX}px`; ringRef.current.style.top = `${ringY}px` }
      raf = requestAnimationFrame(animate)
    }
    const onEnter = (e: MouseEvent) => { if ((e.target as HTMLElement).closest('a,button,[role="button"],input,textarea')) setHovering(true) }
    const onLeave = () => setHovering(false)

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onEnter, { passive: true })
    window.addEventListener('mouseout',  onLeave, { passive: true })
    raf = requestAnimationFrame(animate)
    return () => { window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseover', onEnter); window.removeEventListener('mouseout', onLeave); cancelAnimationFrame(raf) }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
      <div ref={ringRef} className={`cursor-ring ${hovering ? 'hovering' : ''}`} aria-hidden="true" />
    </>
  )
}