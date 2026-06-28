'use client'

// ============================================================
// SIDEBAR CARD — Alex Walker style floating profile card
// Photo fills top, name/role/meta below, socials + CTA at bottom
// ============================================================

import { motion }  from 'framer-motion'
import { ExternalLink, GitBranch, Mail, Network, Send } from 'lucide-react'
import { personalInfo } from '@/features/portfolio/data'

interface Props { isReady: boolean; isOpen: boolean; onClose: () => void }

export function SidebarCard({ isReady, isOpen }: Props) {
  return (
    <motion.aside
      className={`sidebar-card ${isOpen ? 'open' : ''}`}
      initial={{ opacity: 0, x: -20 }}
      animate={isReady ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* ── Avatar — fills top portion ── */}
      <div
        className="relative flex-shrink-0"
        style={{ margin: '14px 14px 0 14px', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}
      >
        <div
          style={{
            width: '100%',
            aspectRatio: '1 / 1.05',
            background: 'linear-gradient(135deg, var(--accent-dim) 0%, rgba(167,139,250,0.12) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '4.5rem',
            fontFamily: 'var(--font-head)',
            fontWeight: 800,
            color: 'var(--accent)',
          }}
        >
          AR
        </div>

        {/* Subtle glow overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(180deg,transparent 60%,rgba(0,0,0,0.4) 100%)' }}
        />
      </div>

      {/* ── Profile info ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isReady ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex flex-col gap-3 px-4 pt-3"
      >
        {/* Name */}
        <div>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2, color: 'var(--text-primary)' }}>
            {personalInfo.name}
          </h2>
        </div>

        {/* Specialization */}
        <div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.60rem', color: 'var(--text-disabled)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 3 }}>
            Specialization:
          </p>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.5, fontWeight: 500 }}>
            Backend-focused product engineer and full-stack developer
          </p>
        </div>

        {/* Location */}
        <div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.60rem', color: 'var(--text-disabled)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 3 }}>
            Based in:
          </p>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
            Bhopal, India
          </p>
        </div>
      </motion.div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* ── Bottom: socials + CTA ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isReady ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex flex-col gap-3 px-4 pb-4"
      >
        {/* Social icons */}
        <div className="flex items-center gap-2 flex-wrap">
          {[
            { icon: GitBranch,   href: personalInfo.github,              label: 'GitHub' },
            { icon: Network,     href: personalInfo.linkedin,            label: 'LinkedIn' },
            { icon: Mail,        href: `mailto:${personalInfo.email}`,   label: 'Email' },
            { icon: Send,        href: '#',                              label: 'Twitter' },
            { icon: ExternalLink,href: personalInfo.resumeUrl,           label: 'Resume' },
          ].map(s => {
            const Icon = s.icon
            return (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                aria-label={s.label} className="social-icon">
                <Icon size={14} />
              </a>
            )
          })}
        </div>

        {/* CTA Button */}
        <a
          href={`mailto:${personalInfo.email}`}
          className="btn-sidebar-cta"
        >
          Let&apos;s Work Together!
        </a>
      </motion.div>
    </motion.aside>
  )
}
