'use client'

// ============================================================
// CURSOR — CUSTOM CURSOR SYSTEM
// ============================================================

import { useEffect, useRef, useState } from 'react'

export function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = 0, mouseY = 0
    let ringX  = 0, ringY  = 0
    let rafId: number

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = `${mouseX}px`
      dot.style.top  = `${mouseY}px`
    }

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.left = `${ringX}px`
      ring.style.top  = `${ringY}px`
      rafId = requestAnimationFrame(animateRing)
    }

    const onMouseEnterLink = () => setIsHovering(true)
    const onMouseLeaveLink = () => setIsHovering(false)
    const trackedInteractables = new Set<Element>()

    const addHoverListeners = () => {
      const interactables = document.querySelectorAll(
        'a, button, [role="button"], .cursor-hover'
      )
      interactables.forEach((el) => {
        if (trackedInteractables.has(el)) return
        trackedInteractables.add(el)
        el.addEventListener('mouseenter', onMouseEnterLink)
        el.addEventListener('mouseleave', onMouseLeaveLink)
      })
    }

    document.addEventListener('mousemove', onMouseMove)
    rafId = requestAnimationFrame(animateRing)
    addHoverListeners()

    // Re-check after dynamic content loads
    const observer = new MutationObserver(addHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
      observer.disconnect()
      trackedInteractables.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterLink)
        el.removeEventListener('mouseleave', onMouseLeaveLink)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className={`cursor-ring ${isHovering ? 'hovering' : ''}`}
        aria-hidden="true"
      />
    </>
  )
}
