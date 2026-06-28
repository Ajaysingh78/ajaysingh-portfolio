'use client'
// ============================================================
// EXPERTISE SECTION v3
// ============================================================
import { motion, useInView } from 'framer-motion'
import { useRef }            from 'react'
import { Server, Code, Layout, Database, Wrench, Cpu } from 'lucide-react'
import { sectionReveal, staggerContainer, staggerItem, viewportConfig } from '@/lib/animations/motion'
import { skillGroups } from '@/features/portfolio/data'

const iconMap: Record<string, React.ElementType> = {
  server: Server, code: Code, layout: Layout, database: Database, wrench: Wrench, cpu: Cpu,
}
const levelColor: Record<string, string> = { core: 'var(--accent)', proficient: 'var(--green)', familiar: 'var(--amber)' }
const levelWidth: Record<string, string> = { core: '90%', proficient: '70%', familiar: '50%' }

export function Expertise() {
  const ref = useRef(null)
  const inView = useInView(ref, viewportConfig)
  return (
    <section id="expertise" className="section" ref={ref}>
      <motion.div variants={sectionReveal} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
        <span className="section-label">Expertise</span>
      </motion.div>
      <motion.h2 variants={staggerItem} initial="hidden" animate={inView ? 'visible' : 'hidden'} style={{ marginBottom: 40, maxWidth: '28ch' }}>
        Stack I build <span className="gradient-text">production systems</span> with
      </motion.h2>
      <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillGroups.map(group => {
          const Icon = iconMap[group.icon] ?? Code
          return (
            <motion.div key={group.category} variants={staggerItem} className="glass-card p-5 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'var(--accent-dim)', border: '1px solid var(--border-accent)' }}>
                  <Icon size={16} style={{ color: 'var(--accent)' }} />
                </div>
                <span style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-primary)' }}>{group.label}</span>
              </div>
              <div className="flex flex-col gap-3">
                {group.skills.map(skill => (
                  <div key={skill.name} className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{skill.name}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: levelColor[skill.level], letterSpacing: '0.06em', textTransform: 'uppercase' }}>{skill.level}</span>
                    </div>
                    <div className="h-px w-full rounded-full overflow-hidden" style={{ background: 'var(--border-default)' }}>
                      <motion.div className="h-full rounded-full" style={{ background: levelColor[skill.level] }}
                        initial={{ width: 0 }}
                        animate={inView ? { width: levelWidth[skill.level] } : { width: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}