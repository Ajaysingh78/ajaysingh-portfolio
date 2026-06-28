'use client'

// ============================================================
// FOOTER v2
// ============================================================

import { motion, useInView } from 'framer-motion'
import { useRef }            from 'react'
import { GitBranch, Network, Mail, ArrowUp } from 'lucide-react'
import { personalInfo, navLinks } from '@/features/portfolio/data'
import { scrollToSection }        from '@/lib/browser'
import { fadeIn, viewportConfig } from '@/lib/animations/motion'

export function Footer() {
  const ref    = useRef(null)
  const inView = useInView(ref, viewportConfig)

  return (
    <footer
      ref={ref}
      className="relative"
      style={{
        padding: 'var(--content-px)',
        paddingBlock: '40px 32px',
        borderTop: '1px solid var(--border-subtle)',
        background: 'var(--bg-sidebar)',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,212,255,0.03) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="flex items-center justify-between gap-6 flex-wrap"
      >
        {/* Brand */}
        <div className="flex flex-col gap-1">
          <p style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '1rem', color: 'var(--text-primary)' }}>
            Ajay Rathore
          </p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-disabled)', letterSpacing: '0.08em' }}>
            Backend-Focused Product Engineer · CSE &apos;27
          </p>
        </div>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-4 flex-wrap">
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-disabled)', letterSpacing: '0.08em', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-disabled)')}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Socials + scroll to top */}
        <div className="flex items-center gap-3">
          {[
            { href: personalInfo.github,   icon: GitBranch, label: 'GitHub' },
            { href: personalInfo.linkedin, icon: Network,   label: 'LinkedIn' },
            { href: `mailto:${personalInfo.email}`, icon: Mail, label: 'Email' },
          ].map(s => {
            const Icon = s.icon
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
                style={{ color: 'var(--text-muted)', border: '1px solid var(--border-subtle)' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--border-accent)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border-subtle)' }}
              >
                <Icon size={14} />
              </a>
            )
          })}

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all ml-1"
            style={{ color: 'var(--text-muted)', border: '1px solid var(--border-subtle)' }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--border-accent)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border-subtle)' }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </motion.div>

      <motion.p
        variants={fadeIn}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.60rem',
          color: 'var(--text-disabled)',
          letterSpacing: '0.08em',
          textAlign: 'center',
          marginTop: 24,
        }}
      >
        Built with Next.js 16 · TypeScript · Framer Motion · Tailwind CSS v4
      </motion.p>
    </footer>
  )
}
