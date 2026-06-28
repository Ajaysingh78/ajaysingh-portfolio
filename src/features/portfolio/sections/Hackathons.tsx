'use client'
// ============================================================
// HACKATHONS SECTION v3
// ============================================================
import { motion, useInView } from 'framer-motion'
import { useRef }            from 'react'
import { Trophy, Globe, Building2, GraduationCap } from 'lucide-react'
import { sectionReveal, staggerContainer, staggerItem, viewportConfig } from '@/lib/animations/motion'
import { hackathons } from '@/features/portfolio/data'

const levelIcon: Record<string, React.ElementType> = { international: Globe, national: Building2, college: GraduationCap }
const resultBadge: Record<string, string> = { finalist: 'badge-purple', winner: 'badge-green', shortlisted: 'badge-accent', participant: 'badge-amber' }
const resultAccent: Record<string, string> = { finalist: 'var(--purple)', winner: 'var(--green)', shortlisted: 'var(--accent)', participant: 'var(--amber)' }

export function Hackathons() {
  const ref = useRef(null)
  const inView = useInView(ref, viewportConfig)
  return (
    <section id="hackathons" className="section" ref={ref}>
      <motion.div variants={sectionReveal} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
        <span className="section-label">Hackathons</span>
      </motion.div>
      <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="mb-10">
        <motion.h2 variants={staggerItem} style={{ marginBottom: 12 }}>
          Competing at the <span className="gradient-text">highest levels</span>
        </motion.h2>
        <motion.p variants={staggerItem} style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.75, maxWidth: '50ch' }}>
          10+ hackathons across college, national, and international stages.
        </motion.p>
      </motion.div>
      <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="flex flex-col gap-4">
        {hackathons.map(hack => {
          const LevelIcon = levelIcon[hack.level] ?? Globe
          const accent    = resultAccent[hack.result] ?? 'var(--accent)'
          return (
            <motion.div key={hack.id} variants={staggerItem} className="glass-card p-6"
              whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{ borderLeft: `2px solid ${accent}` }}>
              <div className="flex items-start gap-4 flex-wrap sm:flex-nowrap">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${accent}14`, border: `1px solid ${accent}33` }}>
                  <Trophy size={17} style={{ color: accent }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
                    <div>
                      <h3 style={{ fontSize: '0.97rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>{hack.name}</h3>
                      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: 3 }}>{hack.project} · {hack.year}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className={`badge ${resultBadge[hack.result] ?? 'badge-muted'}`}>{hack.resultLabel}</span>
                      <div className="flex items-center gap-1 px-2 py-1 rounded-md" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}>
                        <LevelIcon size={11} style={{ color: 'var(--text-muted)' }} />
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{hack.level}</span>
                      </div>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.80rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{hack.description}</p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
      <motion.div variants={staggerItem} initial="hidden" animate={inView ? 'visible' : 'hidden'}
        className="mt-8 rounded-xl p-5 flex flex-wrap items-center gap-6"
        style={{ background: 'var(--bg-card)', border: '1px solid var(--border-default)' }}>
        {[
          { val: '10+', label: 'Hackathons', color: 'var(--accent)' },
          { val: '2',   label: 'Finalist titles', color: 'var(--purple)' },
          { val: 'Top 6', label: 'SIH National', color: 'var(--green)' },
          { val: 'Global', label: 'NASA stage', color: 'var(--amber)' },
        ].map(s => (
          <div key={s.label} className="flex items-baseline gap-2">
            <span style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '1.3rem', color: s.color, lineHeight: 1 }}>{s.val}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}