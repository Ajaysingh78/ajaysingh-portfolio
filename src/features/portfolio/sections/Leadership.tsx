'use client'

// ============================================================
// LEADERSHIP SECTION
// ============================================================

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Zap, Star } from 'lucide-react'
import { leadershipItems, certifications } from '@/features/portfolio/data'
import { staggerContainer, staggerItem, viewportConfig } from '@/lib/animations/motion'

export function Leadership() {
  const ref = useRef(null)
  const isInView = useInView(ref, viewportConfig)

  return (
    <section id="leadership" className="section" ref={ref}>
      <div className="container">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">05 · Leadership</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="font-head mb-3">
            I don&apos;t just build —{' '}
            <span style={{ color: 'var(--accent)' }}>I lead.</span>
          </h2>
          <p className="text-base max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            Organized national hackathons. Led 8-member teams. Coordinated 250+ participant events.
            Leadership isn&apos;t a title for me — it&apos;s a pattern.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_340px] gap-10">

          {/* Leadership cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex flex-col gap-4"
          >
            {leadershipItems.map((item, i) => (
              <motion.div
                key={item.id}
                variants={staggerItem}
                className="glass-card p-5 flex gap-4 cursor-hover"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                {/* Index */}
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-medium"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    background: 'var(--accent-dim)',
                    border: '1px solid var(--border-accent)',
                    color: 'var(--accent)',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>

                <div className="flex flex-col gap-2 min-w-0">
                  {/* Role + event */}
                  <div>
                    <h4
                      className="font-head text-base"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {item.role}
                    </h4>
                    <span
                      className="text-xs"
                      style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}
                    >
                      {item.event}
                    </span>
                  </div>

                  {/* Scope */}
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {item.scope}
                  </p>

                  {/* Impact */}
                  <div className="flex items-center gap-1.5">
                    <Zap size={12} style={{ color: 'var(--green)' }} />
                    <span className="text-xs" style={{ color: 'var(--green)' }}>
                      {item.impact}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {item.tags.map((tag) => (
                      <span key={tag} className="badge badge-muted text-[10px] py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right — Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            <p
              className="text-xs tracking-widest uppercase mb-1"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
            >
              Certifications
            </p>

            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="glass-card p-4 flex items-start gap-3"
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: cert.highlight ? 'var(--accent-dim)' : 'var(--bg-elevated)',
                    border: `1px solid ${cert.highlight ? 'var(--border-accent)' : 'var(--border-subtle)'}`,
                  }}
                >
                  <Star
                    size={13}
                    style={{ color: cert.highlight ? 'var(--accent)' : 'var(--text-muted)' }}
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span
                    className="text-sm font-medium leading-snug"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {cert.title}
                  </span>
                  <span
                    className="text-xs"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
                  >
                    {cert.issuer} · {cert.date}
                  </span>
                </div>
              </div>
            ))}

            {/* Community */}
            <div
              className="glass-card p-4 mt-2"
              style={{ borderColor: 'var(--border-accent)' }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Users size={14} style={{ color: 'var(--accent)' }} />
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}
                >
                  Community
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {[
                  'GDG On Campus Member',
                  'IIT Madras Campus Ambassador',
                  'SAC Student Coordinator',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <span style={{ color: 'var(--accent)' }}>→</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
