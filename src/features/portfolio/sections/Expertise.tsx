'use client'

// ============================================================
// EXPERTISE — SKILL ARCHITECTURE SECTION
// ============================================================

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code, Server, Layout, Database, Wrench, Cpu } from 'lucide-react'
import { skillGroups } from '@/features/portfolio/data'
import { skillLevelWidth } from '@/features/portfolio/config/display'
import type { SkillCategory } from '@/features/portfolio/types'
import { staggerContainer, staggerItem, viewportConfig } from '@/lib/animations/motion'
import { cn } from '@/lib/cn'

const categoryIcons: Record<SkillCategory, React.ReactNode> = {
  languages:        <Code size={16} />,
  backend:          <Server size={16} />,
  frontend:         <Layout size={16} />,
  database:         <Database size={16} />,
  tools:            <Wrench size={16} />,
  'cs-fundamentals':<Cpu size={16} />,
}

export function Expertise() {
  const ref = useRef(null)
  const isInView = useInView(ref, viewportConfig)
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('backend')

  const activeGroup = skillGroups.find((g) => g.category === activeCategory)

  return (
    <section id="expertise" className="section" ref={ref}>
      <div className="container">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">02 · Expertise</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10"
        >
          <h2 className="font-head mb-3">
            Engineering{' '}
            <span style={{ color: 'var(--accent)' }}>Architecture</span>
          </h2>
          <p className="text-base max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            Backend-first. Full-stack capable. Built for scalable, real-world systems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8">

          {/* Category tabs */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0"
          >
            {skillGroups.map((group) => (
              <motion.button
                key={group.category}
                variants={staggerItem}
                onClick={() => setActiveCategory(group.category)}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-xl text-left whitespace-nowrap transition-all border',
                  'flex-shrink-0 lg:flex-shrink lg:w-full'
                )}
                style={{
                  background: activeCategory === group.category
                    ? 'var(--accent-dim)'
                    : 'var(--bg-card)',
                  borderColor: activeCategory === group.category
                    ? 'var(--border-accent)'
                    : 'var(--border-default)',
                  color: activeCategory === group.category
                    ? 'var(--text-primary)'
                    : 'var(--text-secondary)',
                }}
              >
                <span
                  style={{
                    color: activeCategory === group.category
                      ? 'var(--accent)'
                      : 'var(--text-muted)',
                  }}
                >
                  {categoryIcons[group.category]}
                </span>
                <span className="text-sm font-medium">{group.label}</span>
                <span
                  className="ml-auto text-xs"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color: activeCategory === group.category
                      ? 'var(--accent)'
                      : 'var(--text-muted)',
                  }}
                >
                  {group.skills.length}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Skills panel */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="glass-card p-6"
          >
            {activeGroup && (
              <>
                <div className="flex items-center gap-3 mb-6 pb-4" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <span style={{ color: 'var(--accent)' }}>
                    {categoryIcons[activeCategory]}
                  </span>
                  <h3 className="text-lg font-head">{activeGroup.label}</h3>
                  <span className="badge badge-accent ml-auto">
                    {activeGroup.skills.length} skills
                  </span>
                </div>

                <div className="flex flex-col gap-5">
                  {activeGroup.skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.3 }}
                      className="flex flex-col gap-2"
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className="text-sm font-medium"
                          style={{ color: 'var(--text-primary)' }}
                        >
                          {skill.name}
                        </span>
                        <span
                          className="text-xs"
                          style={{
                            fontFamily: 'var(--font-mono)',
                            color: skill.level === 'core'
                              ? 'var(--accent)'
                              : skill.level === 'proficient'
                              ? 'var(--green)'
                              : 'var(--text-muted)',
                          }}
                        >
                          {skill.level === 'core' ? 'CORE'
                            : skill.level === 'proficient' ? 'PROFICIENT'
                            : 'FAMILIAR'}
                        </span>
                      </div>

                      {/* Skill bar */}
                      <div
                        className="h-1 rounded-full overflow-hidden"
                        style={{ background: 'var(--border-subtle)' }}
                      >
                        <motion.div
                          className="h-full rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: skillLevelWidth[skill.level] }}
                          transition={{ delay: 0.1 + i * 0.06, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                          style={{
                            background: skill.level === 'core'
                              ? 'var(--accent)'
                              : skill.level === 'proficient'
                              ? 'var(--green)'
                              : 'var(--text-muted)',
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
