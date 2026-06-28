'use client'

// ============================================================
// HERO SECTION v3 — Alex Walker layout
// Large heading left, dashboard card right, orb top-right
// ============================================================

import { motion }  from 'framer-motion'
import { ArrowDown, FileText, ExternalLink, Zap } from 'lucide-react'
import { staggerContainer, staggerItem, heroTitle, heroSubtitle, heroCta, heroDashboard } from '@/lib/animations/motion'
import { personalInfo, dashboardStats } from '@/features/portfolio/data'
import { scrollToSection }              from '@/lib/browser'

export function Hero({ isReady }: { isReady?: boolean }) {
  return (
    <section
      id="hero"
      className="section relative min-h-[calc(100vh-60px)] flex flex-col justify-center"
      style={{ paddingTop: 'clamp(48px,8vw,96px)', paddingBottom: 'clamp(48px,6vw,80px)' }}
    >
      {/* Grid bg */}
      <div className="grid-bg" aria-hidden="true" />

      {/* Orb — top right, exactly like Alex Walker */}
      <div
        className="absolute pointer-events-none"
        style={{ inset: 0, background: 'var(--hero-orb)' }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        {/* Top section — heading left, card right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] items-center gap-10 xl:gap-14">
          {/* ── LEFT: Identity ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isReady ? 'visible' : 'hidden'}
            className="flex flex-col gap-5"
          >
            {/* "Let's meet!" badge */}
            <motion.div variants={staggerItem}>
              <span
                className="inline-flex items-center gap-2"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.82rem',
                  color: 'var(--text-muted)',
                  fontWeight: 500,
                }}
              >
                <span style={{ color: 'var(--accent)', fontSize: '1rem' }}>✦</span>
                Let&apos;s meet!
              </span>
            </motion.div>

            {/* Name — giant */}
            <motion.div variants={heroTitle}>
              <h1 style={{ lineHeight: 1.0, letterSpacing: '-0.03em' }}>
                I&apos;m {personalInfo.name.split(' ')[0]}{' '}
                <br />
                {personalInfo.name.split(' ')[1]}
              </h1>
            </motion.div>

            {/* Role subtitle */}
            <motion.h2
              variants={heroSubtitle}
              className="gradient-text"
              style={{
                fontSize: 'clamp(1rem,2.4vw,1.55rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.3,
              }}
            >
              {personalInfo.role}
            </motion.h2>

            {/* Tagline */}
            <motion.p
              variants={heroSubtitle}
              style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem', maxWidth: '50ch' }}
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={heroCta} className="flex flex-wrap gap-3 pt-1">
              <button onClick={() => scrollToSection('#projects')} className="btn btn-primary">
                <Zap size={15} />
                My Works
              </button>
              <a
                href={personalInfo.resumeUrl || `mailto:${personalInfo.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <FileText size={14} />
                Download CV
                <ExternalLink size={13} />
              </a>
            </motion.div>

            {/* Mini stats */}
            <motion.div
              variants={heroCta}
              className="flex flex-wrap items-center gap-x-7 gap-y-3 pt-3"
              style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '20px' }}
            >
              {[
                { val: '10+',    label: 'Hackathons' },
                { val: 'Top 6', label: 'SIH National' },
                { val: 'NASA',  label: 'Finalist' },
                { val: '30%',   label: 'API Latency ↓' },
              ].map(s => (
                <div key={s.label} className="flex items-baseline gap-2">
                  <span style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--accent)', lineHeight: 1 }}>
                    {s.val}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Engineering Dashboard ── */}
          <motion.div
            variants={heroDashboard}
            initial="hidden"
            animate={isReady ? 'visible' : 'hidden'}
            className="glass-card p-5 hidden lg:block"
          >
            {/* Terminal header */}
            <div className="flex items-center justify-between mb-5 pb-4" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#EF4444' }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F59E0B' }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#10B981' }} />
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                engineering_profile.sys
              </span>
              <motion.span
                className="w-2 h-2 rounded-full"
                style={{ background: 'var(--green)' }}
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {dashboardStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 + i * 0.09, duration: 0.4 }}
                  className="stat-card"
                >
                  <span
                    className="stat-value"
                    style={{
                      color:
                        stat.color === 'green'  ? 'var(--green)'  :
                        stat.color === 'amber'  ? 'var(--amber)'  :
                        stat.color === 'purple' ? 'var(--purple)' :
                        'var(--accent)',
                    }}
                  >
                    {stat.value}
                  </span>
                  <span className="stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </div>

            {/* System status */}
            <div className="rounded-xl p-3 flex flex-col gap-2.5" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}>
              {[
                { label: 'Backend Systems', status: 'OPERATIONAL', color: 'var(--green)' },
                { label: 'Problem Solving',  status: 'ACTIVE',      color: 'var(--accent)' },
                { label: 'Hackathon Mode',   status: 'PRIMED',      color: 'var(--amber)' },
                { label: 'Team Leadership',  status: 'READY',       color: 'var(--purple)' },
              ].map((row, i) => (
                <motion.div
                  key={row.label}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + i * 0.08, duration: 0.3 }}
                  className="flex items-center justify-between"
                >
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.70rem', color: 'var(--text-muted)' }}>
                    {row.label}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.70rem', color: row.color, fontWeight: 600 }}>
                    ● {row.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.button
          type="button"
          initial={{ opacity: 0 }}
          animate={isReady ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.8 }}
          onClick={() => scrollToSection('#about')}
          className="mt-16 flex flex-col items-center gap-2 mx-auto w-fit cursor-pointer"
          aria-label="Scroll down"
        >
          {/* Alex Walker circular scroll text */}
          <div className="relative w-16 h-16 flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 64 64">
              <defs>
                <path id="circle-path" d="M 32,32 m -20,0 a 20,20 0 1,1 40,0 a 20,20 0 1,1 -40,0" />
              </defs>
              <text style={{ fontFamily: 'var(--font-mono)', fontSize: '6px', fill: 'var(--text-disabled)', letterSpacing: '2.5px', textTransform: 'uppercase' }}>
                <textPath href="#circle-path">SCROLL FOR MORE • SCROLL FOR MORE •</textPath>
              </text>
            </svg>
            <motion.div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: 'var(--accent)', color: 'var(--bg-base)' }}
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown size={14} />
            </motion.div>
          </div>
        </motion.button>
      </div>
    </section>
  )
}
