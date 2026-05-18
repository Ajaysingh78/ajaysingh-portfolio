'use client'

// ============================================================
// FOOTER
// ============================================================

import { motion } from 'framer-motion'
import { GitBranch, Link2, Mail, ArrowUp } from 'lucide-react'
import { personalInfo, navLinks } from '@/features/portfolio/data'
import { scrollToSection } from '@/lib/browser'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative pt-16 pb-8"
      style={{ borderTop: '1px solid var(--border-subtle)' }}
    >
      <div className="container">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-medium border"
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
                className="text-sm font-medium"
                style={{ fontFamily: 'var(--font-head)', color: 'var(--text-secondary)' }}
              >
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Backend-Focused Product Engineer.<br />
              Building scalable real-world systems.
            </p>
            <span
              className="badge badge-green w-fit"
            >
              ● {personalInfo.availability}
            </span>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-3">
            <p
              className="text-xs tracking-widest uppercase mb-1"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
            >
              Navigate
            </p>
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-left transition-colors hover:text-[var(--accent)] w-fit"
                style={{ color: 'var(--text-muted)' }}
              >
                <span
                  className="mr-2 text-xs"
                  style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-disabled)' }}
                >
                  {link.index}
                </span>
                {link.label}
              </button>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p
              className="text-xs tracking-widest uppercase mb-1"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
            >
              Contact
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 text-sm transition-colors hover:text-[var(--accent)]"
              style={{ color: 'var(--text-muted)' }}
            >
              <Mail size={13} />
              {personalInfo.email}
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm transition-colors hover:text-[var(--accent)]"
              style={{ color: 'var(--text-muted)' }}
            >
              <GitBranch size={13} />
              github.com/Ajaysingh78
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm transition-colors hover:text-[var(--accent)]"
              style={{ color: 'var(--text-muted)' }}
            >
              <Link2 size={13} />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="divider" />

        {/* Bottom bar */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <p
            className="text-xs"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
          >
            © {year} Ajay Rathore · Built with Next.js + Framer Motion
          </p>

          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-xs transition-colors hover:text-[var(--accent)] cursor-hover"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            Back to top
            <ArrowUp size={13} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
