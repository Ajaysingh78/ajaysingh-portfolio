'use client'
// ============================================================
// TIMELINE
// ============================================================
import { motion, useInView } from 'framer-motion'
import { useRef }            from 'react'
import { BookOpen, Briefcase, Trophy, FolderGit2 } from 'lucide-react'
import { sectionReveal, viewportConfig } from '@/lib/animations/motion'
import { timelineItems } from '@/features/portfolio/data'

const catIcon: Record<string, React.ElementType> = { education: BookOpen, experience: Briefcase, achievement: Trophy, project: FolderGit2 }
const catColor: Record<string, string> = { education: 'var(--accent)', experience: 'var(--green)', achievement: 'var(--purple)', project: 'var(--amber)' }

export function Timeline() {
  const ref = useRef(null); const inView = useInView(ref, viewportConfig)
  return (
    <section id="timeline" className="section" ref={ref}>
      <motion.div variants={sectionReveal} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
        <span className="section-label">Timeline</span>
      </motion.div>
      <motion.h2 variants={sectionReveal} initial="hidden" animate={inView ? 'visible' : 'hidden'} style={{ marginBottom: 48 }}>
        The journey <span className="gradient-text">so far</span>
      </motion.h2>
      <div className="relative pl-8">
        <motion.div className="timeline-line" style={{ left: 3 }}
          initial={{ scaleY: 0, originY: 0 }}
          animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 1.2, ease: [0.22,1,0.36,1], delay: 0.2 }} />
        <div className="flex flex-col gap-8">
          {timelineItems.map((item, i) => {
            const Icon   = catIcon[item.category]   ?? BookOpen
            const accent = catColor[item.category] ?? 'var(--accent)'
            return (
              <motion.div key={item.id}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.55, ease: [0.22,1,0.36,1] }}
                className="relative">
                <div className="absolute -left-8 top-3 timeline-dot" style={{ background: accent, boxShadow: `0 0 10px ${accent}80` }} />
                <div className={`glass-card p-5 ${item.highlight ? '' : 'opacity-80'}`} style={item.highlight ? { borderColor: `${accent}30` } : {}}>
                  <div className="flex items-start gap-4 flex-wrap sm:flex-nowrap">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${accent}14`, border: `1px solid ${accent}33` }}>
                      <Icon size={15} style={{ color: accent }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
                        <h3 style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>{item.title}</h3>
                        <span className="badge flex-shrink-0" style={{ color: accent, background: `${accent}12`, borderColor: `${accent}30` }}>{item.year}</span>
                      </div>
                      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: accent, marginBottom: 6, letterSpacing: '0.04em' }}>{item.subtitle}</p>
                      <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
