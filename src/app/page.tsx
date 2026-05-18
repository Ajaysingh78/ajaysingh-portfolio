'use client'

// ============================================================
// MAIN PAGE — AJAY RATHORE PORTFOLIO
// ============================================================

import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

// Systems
import { Loader } from '@/components/feedback/Loader'
import { Cursor } from '@/components/interaction/Cursor'
import { Navbar } from '@/components/layout/Navbar'

// Sections
import { Hero } from '@/features/portfolio/sections/Hero'
import { About } from '@/features/portfolio/sections/About'
import { Expertise } from '@/features/portfolio/sections/Expertise'
import { Projects } from '@/features/portfolio/sections/Projects'
import { Hackathons } from '@/features/portfolio/sections/Hackathons'
import { Leadership } from '@/features/portfolio/sections/Leadership'
import { Timeline } from '@/features/portfolio/sections/Timeline'
import { Terminal } from '@/features/portfolio/sections/Terminal'
import { Contact } from '@/features/portfolio/sections/Contact'
import { Footer } from '@/features/portfolio/sections/Footer'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [isReady, setIsReady]     = useState(false)

  useEffect(() => {
    // Prevent scroll during loader
    if (isLoading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isLoading])

  const handleLoadComplete = () => {
    setIsLoading(false)
    setTimeout(() => setIsReady(true), 100)
  }

  return (
    <>
      {/* Custom Cursor — desktop only */}
      <Cursor />

      {/* Cinematic Loader */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader key="loader" onComplete={handleLoadComplete} />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence>
        {isReady && (
          <main>
            {/* Fixed Navigation */}
            <Navbar />

            {/* Sections */}
            <Hero />
            <About />
            <Expertise />
            <Projects />
            <Hackathons />
            <Leadership />
            <Timeline />
            <Terminal />
            <Contact />
            <Footer />
          </main>
        )}
      </AnimatePresence>
    </>
  )
}
