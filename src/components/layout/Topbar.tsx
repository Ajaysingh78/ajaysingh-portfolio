'use client'

// ============================================================
// TOPBAR — Horizontal navbar inside content area
// Alex Walker style: nav links + settings icon + "Let's Talk" pill
// ============================================================

import { useEffect, useState }  from 'react'
import { motion }               from 'framer-motion'
import { Settings }             from 'lucide-react'
import { navLinks, personalInfo } from '@/features/portfolio/data'
import { scrollToSection }        from '@/lib/browser'
import { useTheme }               from '@/lib/theme'

interface Props { isReady: boolean }

export function Topbar({ isReady }: Props) {
  const [activeLink, setActiveLink] = useState('')
  const { theme, toggle }           = useTheme()

  // Active section tracking
  useEffect(() => {
    const ids = ['hero', ...navLinks.map(l => l.href.replace('#', ''))]
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting)
            setActiveLink(e.target.id === 'hero' ? '' : `#${e.target.id}`)
        })
      },
      { threshold: 0.25, rootMargin: '-50px 0px -40% 0px' }
    )
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      className="topbar"
      initial={{ opacity: 0, y: -16 }}
      animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: -16 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
    >
      {/* Nav links */}
      <nav className="flex items-center gap-1" aria-label="Main navigation">
        {navLinks.map((link, i) => {
          const isActive = activeLink === link.href
          return (
            <motion.button
              key={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
              onClick={() => scrollToSection(link.href)}
              aria-current={isActive ? 'page' : undefined}
              className="relative px-3 py-1.5 rounded-lg text-sm font-medium transition-all"
              style={{
                color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
                background: isActive ? 'var(--bg-elevated)' : 'transparent',
                border: isActive ? '1px solid var(--border-default)' : '1px solid transparent',
                fontFamily: 'var(--font-body)',
                fontSize: '0.82rem',
              }}
            >
              {link.label}
            </motion.button>
          )
        })}
      </nav>

      {/* Right side — theme toggle + CTA */}
      <div className="flex items-center gap-3">
        {/* Theme toggle icon */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          onClick={toggle}
          className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
          style={{
            color: theme === 'cyan' ? 'var(--accent)' : 'var(--text-muted)',
            border: '1px solid var(--border-default)',
            background: theme === 'cyan' ? 'var(--accent-dim)' : 'transparent',
          }}
          title={`Switch to ${theme === 'default' ? 'cyan' : 'default'} theme`}
          aria-label="Toggle theme"
        >
          <Settings size={14} />
        </motion.button>

        {/* Let's Talk pill */}
        <motion.a
          href={`mailto:${personalInfo.email}`}
          className="btn-pill hidden sm:inline-flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Let&apos;s Talk ↗
        </motion.a>
      </div>
    </motion.div>
  )
}
