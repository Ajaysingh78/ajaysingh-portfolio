'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

import { Loader }     from '@/components/feedback/Loader'
import { Cursor }     from '@/components/interaction/Cursor'
import { SidebarCard } from '@/components/layout/SidebarCard'
import { Topbar }      from '@/components/layout/Topbar'
import { ThemeContext, type Theme } from '@/lib/theme'

import { Hero }       from '@/features/portfolio/sections/Hero'
import { About }      from '@/features/portfolio/sections/About'
import { Expertise }  from '@/features/portfolio/sections/Expertise'
import { Projects }   from '@/features/portfolio/sections/Projects'
import { Hackathons } from '@/features/portfolio/sections/Hackathons'
import { Leadership } from '@/features/portfolio/sections/Leadership'
import { Timeline }   from '@/features/portfolio/sections/Timeline'
import { Contact }    from '@/features/portfolio/sections/Contact'
import { Footer }     from '@/features/portfolio/sections/Footer'

// ── Theme Context ──────────────────────────────────────────
export default function Home() {
  const [isLoading,   setIsLoading]   = useState(true)
  const [isReady,     setIsReady]     = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [theme,       setTheme]       = useState<Theme>('default')

  // Apply theme to <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    document.body.style.overflow = isLoading ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isLoading])

  const handleLoadComplete = () => {
    setIsLoading(false)
    setTimeout(() => setIsReady(true), 100)
  }

  const toggleTheme = () => setTheme(t => t === 'default' ? 'cyan' : 'default')

  return (
    <ThemeContext.Provider value={{ theme, toggle: toggleTheme }}>
      <Cursor />

      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" onComplete={handleLoadComplete} />}
      </AnimatePresence>

      <div
        className="layout-root"
        style={{ opacity: isReady ? 1 : 0, transition: 'opacity 0.7s ease', pointerEvents: isReady ? 'auto' : 'none' }}
      >
        {/* ── Fixed Sidebar Card ── */}
        <SidebarCard isReady={isReady} isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Mobile backdrop */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* ── Scrollable Content ── */}
        <div className="content-area">
          {/* Mobile top bar */}
          <div
            className="mobile-bar fixed top-0 left-0 right-0 h-14 z-50 items-center justify-between px-5"
            style={{ background: 'rgba(10,10,10,0.92)', borderBottom: '1px solid var(--border-subtle)', backdropFilter: 'blur(20px)' }}
          >
            <span style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '0.95rem' }}>
              Ajay Rathore
            </span>
            <button
              onClick={() => setSidebarOpen(v => !v)}
              className="flex flex-col gap-1.5 p-2"
              aria-label="Toggle sidebar"
            >
              <span className="block w-5 h-0.5 rounded" style={{ background: 'var(--text-secondary)' }} />
              <span className="block w-5 h-0.5 rounded" style={{ background: 'var(--text-secondary)' }} />
              <span className="block w-3 h-0.5 rounded" style={{ background: 'var(--text-secondary)' }} />
            </button>
          </div>

          {/* ── Sticky Topbar (nav) ── */}
          <Topbar isReady={isReady} />

          {/* ── Sections ── */}
          <Hero       isReady={isReady} />
          <About />
          <Expertise />
          <Projects />
          <Hackathons />
          <Leadership />
          <Timeline />
          <Contact />
          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  )
}
