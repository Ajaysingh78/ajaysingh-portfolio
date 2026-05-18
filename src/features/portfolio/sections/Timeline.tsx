'use client'

// ============================================================
// TIMELINE SECTION
// ============================================================

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { timelineCategoryColor } from '@/features/portfolio/config/display'
import { timelineItems } from '@/features/portfolio/data'
import { staggerContainer, staggerItem, viewportConfig } from '@/lib/animations/motion'

const categoryLabel = {
  education:   'Education',
  experience:  'Experience',
  achievement: 'Achievement',
  project:     'Project',
}

export function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, viewportConfig)

  return (
    <section id="timeline" className="section" ref={ref}>
      <div className="container">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">06 · Timeline</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="font-head mb-3">
            Engineering{' '}
            <span style={{ color: 'var(--accent)' }}>Growth Log</span>
          </h2>
          <p className="text-base max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            Every milestone, every win, every step of the journey — documented.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">

          {/* Vertical line */}
          <motion.div
            className="absolute left-[19px] top-0 bottom-0 w-px"
            initial={{ scaleY: 0, originY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            style={{
              background: 'linear-gradient(180deg, transparent, var(--accent-strong), transparent)',
            }}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex flex-col gap-8"
          >
            {timelineItems.map((item) => {
              const colorKey = timelineCategoryColor[item.category]
              const colorVar =
                colorKey === 'accent'  ? 'var(--accent)'  :
                colorKey === 'green'   ? 'var(--green)'   :
                colorKey === 'purple'  ? 'var(--purple)'  :
                'var(--amber)'

              return (
                <motion.div
                  key={item.id}
                  variants={staggerItem}
                  className="flex gap-6 pl-1"
                >
                  {/* Dot */}
                  <div className="flex flex-col items-center flex-shrink-0 mt-1">
                    <div
                      className="timeline-dot"
                      style={{
                        background: item.highlight ? colorVar : 'var(--border-strong)',
                        boxShadow: item.highlight ? `0 0 8px ${colorVar}` : 'none',
                        width: item.highlight ? '12px' : '8px',
                        height: item.highlight ? '12px' : '8px',
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div
                    className={`flex flex-col gap-1.5 pb-2 ${item.highlight ? 'glass-card p-4 -mt-2' : ''}`}
                    style={item.highlight ? { borderLeft: `2px solid ${colorVar}` } : {}}
                  >
                    {/* Year + category */}
                    <div className="flex items-center gap-3 flex-wrap">
                      <span
                        className="text-xs font-medium"
                        style={{ fontFamily: 'var(--font-mono)', color: colorVar }}
                      >
                        {item.year}
                      </span>
                      <span
                        className="badge text-[10px] py-0.5"
                        style={{
                          color: colorVar,
                          background: `${colorVar}12`,
                          borderColor: `${colorVar}30`,
                        }}
                      >
                        {categoryLabel[item.category]}
                      </span>
                    </div>

                    {/* Title */}
                    <h4
                      className="font-head text-base"
                      style={{ color: item.highlight ? 'var(--text-primary)' : 'var(--text-secondary)' }}
                    >
                      {item.title}
                    </h4>

                    {/* Subtitle */}
                    <span
                      className="text-xs"
                      style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
                    >
                      {item.subtitle}
                    </span>

                    {/* Description */}
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
