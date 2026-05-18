'use client'

// ============================================================
// HERO SECTION
// ============================================================

import { motion } from 'framer-motion'
import { ArrowDown, ExternalLink, FileText, GitBranch, Link2, Mail } from 'lucide-react'
import {
  heroTitle, heroSubtitle, heroCta,
  heroDashboard, staggerContainer, staggerItem,
} from '@/lib/animations/motion'
import { personalInfo, dashboardStats } from '@/features/portfolio/data'
import { scrollToSection } from '@/lib/browser'

export function Hero() {
  const resumeHref = personalInfo.resumeUrl || `mailto:${personalInfo.email}?subject=Resume request`

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16"
      style={{ paddingBlock: 'clamp(80px, 10vw, 120px)' }}
    >
      {/* Grid background */}
      <div className="grid-bg" aria-hidden="true" />

      {/* Radial gradient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 20% 50%, rgba(0,212,255,0.05) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="container">
        <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_460px] gap-12 xl:gap-16 items-center">

          {/* Left — Identity */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Status badge */}
            <motion.div variants={staggerItem}>
              <span className="badge badge-green inline-flex items-center gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[var(--green)]"
                  style={{ boxShadow: '0 0 6px var(--green)' }}
                />
                {personalInfo.availability}
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={heroTitle}>
              <p
                className="text-sm font-medium mb-2"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--accent)',
                  letterSpacing: '0.15em',
                }}
              >
                {personalInfo.batch} · {personalInfo.college}
              </p>
              <h1
                className="font-head"
                style={{ lineHeight: 1.05, letterSpacing: '-0.03em' }}
              >
                {personalInfo.name}
              </h1>
            </motion.div>

            {/* Role */}
            <motion.h2
              variants={heroSubtitle}
              className="gradient-text"
              style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
                fontFamily: 'var(--font-head)',
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              {personalInfo.role}
            </motion.h2>

            {/* Tagline */}
            <motion.p
              variants={heroSubtitle}
              className="text-base max-w-lg"
              style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={heroCta} className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => scrollToSection('#projects')}
                className="btn btn-primary"
              >
                View Projects
              </button>
              <a
                href={resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <FileText size={16} />
                {personalInfo.resumeUrl ? 'Download Resume' : 'Request Resume'}
                <ExternalLink size={14} />
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={heroCta} className="flex items-center gap-4 pt-1">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors hover:text-[var(--accent)]"
                style={{ color: 'var(--text-muted)' }}
              >
                <GitBranch size={16} />
                <span className="font-mono">Ajaysingh78</span>
              </a>
              <span style={{ color: 'var(--border-strong)' }}>·</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors hover:text-[var(--accent)]"
                style={{ color: 'var(--text-muted)' }}
              >
                <Link2 size={16} />
                <span className="font-mono">LinkedIn</span>
              </a>
              <span style={{ color: 'var(--border-strong)' }}>·</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-sm transition-colors hover:text-[var(--accent)]"
                style={{ color: 'var(--text-muted)' }}
              >
                <Mail size={16} />
                <span className="font-mono">Email</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Engineering Dashboard */}
          <motion.div
            variants={heroDashboard}
            initial="hidden"
            animate="visible"
            className="glass-card p-5 relative"
          >
            {/* Dashboard header */}
            <div className="flex items-center justify-between mb-5 pb-4" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
              <div className="flex items-center gap-2">
                <div className="terminal-dot w-2.5 h-2.5" style={{ background: '#EF4444' }} />
                <div className="terminal-dot w-2.5 h-2.5" style={{ background: '#F59E0B' }} />
                <div className="terminal-dot w-2.5 h-2.5" style={{ background: '#10B981' }} />
              </div>
              <span
                className="text-xs"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
              >
                engineering_profile.sys
              </span>
              <motion.div
                className="w-2 h-2 rounded-full"
                style={{ background: 'var(--green)' }}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {dashboardStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                  className="stat-card"
                >
                  <span
                    className="stat-value"
                    style={{
                      color: stat.color === 'green'
                        ? 'var(--green)'
                        : stat.color === 'amber'
                        ? 'var(--amber)'
                        : stat.color === 'purple'
                        ? 'var(--purple)'
                        : 'var(--accent)',
                    }}
                  >
                    {stat.value}
                  </span>
                  <span className="stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </div>

            {/* System status */}
            <div
              className="rounded-lg p-3 flex flex-col gap-2"
              style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}
            >
              <StatusLine label="Backend Systems"  status="OPERATIONAL" color="green"  delay={0.9}  />
              <StatusLine label="Problem Solving"   status="ACTIVE"      color="accent" delay={1.0}  />
              <StatusLine label="Hackathon Mode"    status="PRIMED"      color="amber"  delay={1.1}  />
              <StatusLine label="Team Leadership"   status="READY"       color="purple" delay={1.2}  />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          type="button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection('#about')}
          aria-label="Scroll to about section"
        >
          <span
            className="text-xs tracking-widest"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
          >
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} style={{ color: 'var(--accent)' }} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}

// Status line component for dashboard
function StatusLine({
  label, status, color, delay: d,
}: {
  label: string
  status: string
  color: 'green' | 'accent' | 'amber' | 'purple'
  delay: number
}) {
  const colorMap = {
    green:  'var(--green)',
    accent: 'var(--accent)',
    amber:  'var(--amber)',
    purple: 'var(--purple)',
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: d, duration: 0.3 }}
      className="flex items-center justify-between"
    >
      <span className="text-xs" style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
        {label}
      </span>
      <span
        className="text-xs font-medium"
        style={{ fontFamily: 'var(--font-mono)', color: colorMap[color] }}
      >
        ● {status}
      </span>
    </motion.div>
  )
}
