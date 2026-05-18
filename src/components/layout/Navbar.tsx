'use client'

// ============================================================
// NAVBAR — FIXED NAVIGATION SYSTEM
// ============================================================

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

import { navLinks, personalInfo } from '@/features/portfolio/data'
import { scrollToSection } from '@/lib/browser'
import { navItem } from '@/lib/animations/motion'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section detection
  useEffect(() => {
    const sections = ['hero', ...navLinks.map((link) => link.href.replace('#', ''))]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id === 'hero' ? '' : `#${entry.target.id}`)
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: '-64px 0px -40% 0px',
      }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)

      if (el) {
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (href: string) => {
    scrollToSection(href)
    setMobileOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.1,
        }}
        className="fixed top-0 left-0 right-0 z-[var(--z-modal)]"
        style={{
          background: scrolled
            ? 'rgba(6, 8, 16, 0.92)'
            : 'transparent',

          borderBottom: scrolled
            ? '1px solid var(--border-subtle)'
            : '1px solid transparent',

          backdropFilter: scrolled ? 'blur(20px)' : 'none',

          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',

          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <motion.button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center border text-xs font-medium transition-all"
              style={{
                background: 'var(--accent-dim)',
                borderColor: 'var(--border-accent)',
                color: 'var(--accent)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              AR
            </div>

            <span
              className="hidden sm:block text-sm font-medium transition-colors"
              style={{
                fontFamily: 'var(--font-head)',
                color: 'var(--text-secondary)',
              }}
            >
              {personalInfo.name}
            </span>
          </motion.button>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                custom={i}
                variants={navItem}
                initial="hidden"
                animate="visible"
                onClick={() => handleNavClick(link.href)}
                aria-current={activeLink === link.href ? 'page' : undefined}
                className="relative px-3 py-2 text-sm transition-colors group"
                style={{
                  color:
                    activeLink === link.href
                      ? 'var(--text-primary)'
                      : 'var(--text-muted)',

                  fontFamily: 'var(--font-body)',
                }}
              >
                <span
                  className="text-[10px] mr-1 transition-colors"
                  style={{
                    fontFamily: 'var(--font-mono)',

                    color:
                      activeLink === link.href
                        ? 'var(--accent)'
                        : 'var(--text-disabled)',
                  }}
                >
                  {link.index}
                </span>

                {link.label}

                {/* Active underline */}
                {activeLink === link.href && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute bottom-0 left-3 right-3 h-px"
                    style={{
                      background: 'var(--accent)',
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Resume Button */}
            <motion.a
              href={personalInfo.resumeUrl || `mailto:${personalInfo.email}?subject=Resume request`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex btn btn-outline text-xs py-2 px-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Resume ↗
            </motion.a>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 rounded-lg transition-colors"
              style={{
                color: 'var(--text-secondary)',
              }}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{
              duration: 0.25,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="fixed inset-x-0 top-16 z-[var(--z-modal)] md:hidden"
            style={{
              background: 'rgba(6, 8, 16, 0.97)',
              borderBottom: '1px solid var(--border-default)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <nav id="mobile-navigation" className="container py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  aria-current={activeLink === link.href ? 'page' : undefined}
                  className="flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-colors"
                  style={{
                    color:
                      activeLink === link.href
                        ? 'var(--text-primary)'
                        : 'var(--text-secondary)',

                    background:
                      activeLink === link.href
                        ? 'var(--accent-dim)'
                        : 'transparent',
                  }}
                >
                  <span
                    className="text-[10px]"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--accent)',
                    }}
                  >
                    {link.index}
                  </span>

                  <span className="text-sm">{link.label}</span>
                </button>
              ))}

              {/* Mobile Resume */}
              <a
                href={personalInfo.resumeUrl || `mailto:${personalInfo.email}?subject=Resume request`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline mt-4 text-sm"
              >
                Download Resume ↗
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
