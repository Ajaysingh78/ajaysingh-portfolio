'use client'

// ============================================================
// HACKATHONS SECTION
// ============================================================

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Trophy, Globe, Building2, GraduationCap } from 'lucide-react'
import { hackathons } from '@/features/portfolio/data'
import type { Hackathon } from '@/features/portfolio/types'
import { staggerContainer, staggerItem, viewportConfig } from '@/lib/animations/motion'

const levelIcon = {
  international: <Globe size={14} />,
  national:      <Building2 size={14} />,
  college:       <GraduationCap size={14} />,
}

const levelLabel = {
  international: 'International',
  national:      'National',
  college:       'College',
}

const resultColor: Record<string, string> = {
  finalist:    'var(--purple)',
  shortlisted: 'var(--accent)',
  winner:      'var(--green)',
  participant: 'var(--amber)',
}

export function Hackathons() {
  const ref = useRef(null)
  const isInView = useInView(ref, viewportConfig)

  return (
    <section id="hackathons" className="section" ref={ref}>
      <div className="container">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">04 · Hackathons</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="font-head mb-3">
            Competed.{' '}
            <span style={{ color: 'var(--accent)' }}>Delivered. Repeated.</span>
          </h2>
          <p className="text-base max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            10+ hackathons. NASA Finalist. SIH Top 6 Nationally. These aren&apos;t participation
            certificates — they&apos;re proof of execution under pressure.
          </p>
        </motion.div>

        {/* Summary stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
        >
          {[
            { value: '10+',  label: 'Hackathons',       color: 'var(--accent)'  },
            { value: '2',    label: 'Finalist Stages',  color: 'var(--purple)'  },
            { value: 'Top 6',label: 'National Rank',    color: 'var(--green)'   },
            { value: '1',    label: 'NASA Achievement', color: 'var(--amber)'   },
          ].map((s) => (
            <div key={s.label} className="stat-card">
              <span className="stat-value" style={{ color: s.color }}>{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Hackathon cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-6"
        >
          {hackathons.map((h) => (
            <motion.div key={h.id} variants={staggerItem}>
              <HackathonCard hackathon={h} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-sm mt-10"
          style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
        >
          + GDG Hackathons · Vertex Ideathon · Multiple National-Level Events
        </motion.p>
      </div>
    </section>
  )
}

function HackathonCard({ hackathon }: { hackathon: Hackathon }) {
  const color = resultColor[hackathon.result]

  return (
    <motion.div
      className="glass-card p-6 flex flex-col gap-4 h-full cursor-hover"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
    >
      {/* Level badge */}
      <div className="flex items-center justify-between">
        <span
          className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border"
          style={{
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-muted)',
            background: 'var(--bg-elevated)',
            borderColor: 'var(--border-subtle)',
          }}
        >
          {levelIcon[hackathon.level]}
          {levelLabel[hackathon.level]}
        </span>
        <span
          className="text-xs font-medium"
          style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
        >
          {hackathon.year}
        </span>
      </div>

      {/* Trophy + result */}
      <div className="flex items-start gap-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: `${color}15`, border: `1px solid ${color}30` }}
        >
          <Trophy size={18} style={{ color }} />
        </div>
        <div>
          <h3
            className="font-head text-base leading-tight mb-1"
            style={{ color: 'var(--text-primary)' }}
          >
            {hackathon.name}
          </h3>
          <span
            className="text-xs font-medium"
            style={{ color, fontFamily: 'var(--font-mono)' }}
          >
            {hackathon.resultLabel}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {hackathon.description}
      </p>

      {/* Project tag */}
      {hackathon.project && (
        <div
          className="mt-auto pt-4"
          style={{ borderTop: '1px solid var(--border-subtle)' }}
        >
          <span
            className="text-xs"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
          >
            Project →{' '}
            <span style={{ color: 'var(--text-secondary)' }}>{hackathon.project}</span>
          </span>
        </div>
      )}
    </motion.div>
  )
}
