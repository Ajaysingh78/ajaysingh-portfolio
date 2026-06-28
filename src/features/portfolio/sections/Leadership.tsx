'use client'
// ============================================================
// LEADERSHIP
// ============================================================
import { motion, useInView } from 'framer-motion'
import { useRef }            from 'react'
import { Users, Star, Megaphone } from 'lucide-react'
import { sectionReveal, staggerContainer, staggerItem, viewportConfig } from '@/lib/animations/motion'
import { leadershipItems } from '@/features/portfolio/data'

const icons = [Users, Star, Megaphone]

export function Leadership() {
  const ref = useRef(null); const inView = useInView(ref, viewportConfig)
  return (
    <section id="leadership" className="section" ref={ref}>
      <motion.div variants={sectionReveal} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
        <span className="section-label">Leadership</span>
      </motion.div>
      <motion.h2 variants={staggerItem} initial="hidden" animate={inView ? 'visible' : 'hidden'} style={{ marginBottom: 40 }}>
        Leading teams, <span className="gradient-text">driving outcomes</span>
      </motion.h2>
      <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {leadershipItems.map((item, i) => {
          const Icon = icons[i % icons.length]
          return (
            <motion.div key={item.id} variants={staggerItem} className="glass-card p-6 flex flex-col gap-4"
              whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300, damping: 30 }}>
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'var(--accent-dim)', border: '1px solid var(--border-accent)' }}>
                  <Icon size={17} style={{ color: 'var(--accent)' }} />
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.60rem', color: 'var(--text-disabled)', letterSpacing: '0.06em' }}>{item.duration}</span>
              </div>
              <div>
                <h3 style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4, lineHeight: 1.3 }}>{item.role}</h3>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '0.04em' }}>{item.event}</p>
              </div>
              <p style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', lineHeight: 1.7, flex: 1 }}>{item.scope}</p>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--green)', fontWeight: 600 }}>↗ {item.impact}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map(t => <span key={t} className="badge badge-muted" style={{ fontSize: '0.58rem' }}>{t}</span>)}
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}