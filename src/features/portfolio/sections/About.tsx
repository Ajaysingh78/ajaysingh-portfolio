'use client'

// ============================================================
// ABOUT — ENGINEERING IDENTITY SECTION
// ============================================================

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, GraduationCap, Briefcase } from 'lucide-react'
import { personalInfo, codingStats, experiences } from '@/features/portfolio/data'
import { staggerContainer, staggerItem, viewportConfig } from '@/lib/animations/motion'

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, viewportConfig)

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">01 · About</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — Identity text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex flex-col gap-6"
          >
            <motion.h2 variants={staggerItem} className="font-head">
              Not just a student.<br />
              <span style={{ color: 'var(--accent)' }}>An engineer who executes.</span>
            </motion.h2>

            <motion.p variants={staggerItem} style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              I&apos;m a pre-final year Computer Science student at IES College of Technology, Bhopal —
              but my identity isn&apos;t defined by a classroom. It&apos;s defined by what I&apos;ve
              shipped, led, and competed in.
            </motion.p>

            <motion.p variants={staggerItem} style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              From building a real-time MDR pathogen tracing system that reached the top 6 nationally
              at Smart India Hackathon, to reducing API latency by 30% during my Infosys internship —
              I operate with an execution-first mindset.
            </motion.p>

            <motion.p variants={staggerItem} style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              I think in systems. I build for real-world impact. And I lead when it matters.
            </motion.p>

            {/* Info tags */}
            <motion.div variants={staggerItem} className="flex flex-wrap gap-3 pt-2">
              <InfoTag icon={<MapPin size={13} />} text={personalInfo.location} />
              <InfoTag icon={<GraduationCap size={13} />} text={`${personalInfo.degree} · ${personalInfo.batch}`} />
              <InfoTag icon={<Briefcase size={13} />} text={personalInfo.availability} color="green" />
            </motion.div>
          </motion.div>

          {/* Right — Stats + Experience */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex flex-col gap-6"
          >
            {/* Coding stats */}
            <motion.div variants={staggerItem}>
              <p
                className="text-xs mb-3 tracking-widest uppercase"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
              >
                Coding Stats
              </p>
              <div className="grid grid-cols-2 gap-3">
                {codingStats.map((stat) => (
                  <a
                    key={stat.platform}
                    href={stat.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="stat-card cursor-hover"
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
                    <span
                      className="text-xs mt-1"
                      style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
                    >
                      {stat.platform}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Experience snapshot */}
            <motion.div variants={staggerItem}>
              <p
                className="text-xs mb-3 tracking-widest uppercase"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
              >
                Experience
              </p>
              <div className="flex flex-col gap-3">
                {experiences.map((exp) => (
                  <div
                    key={exp.id}
                    className="glass-card p-4 flex items-start gap-3"
                  >
                    <div
                      className="w-1 self-stretch rounded-full flex-shrink-0"
                      style={{
                        background: exp.current ? 'var(--green)' : 'var(--accent)',
                      }}
                    />
                    <div className="flex flex-col gap-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span
                          className="text-sm font-medium truncate"
                          style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-head)' }}
                        >
                          {exp.role}
                        </span>
                        {exp.current && (
                          <span className="badge badge-green text-[10px] py-0.5 flex-shrink-0">
                            Current
                          </span>
                        )}
                      </div>
                      <span
                        className="text-xs"
                        style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}
                      >
                        {exp.company}
                      </span>
                      <span
                        className="text-xs"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        {exp.duration}
                      </span>
                      {exp.metrics && exp.metrics.map((m) => (
                        <span
                          key={m}
                          className="text-xs mt-1"
                          style={{ color: 'var(--green)' }}
                        >
                          ↑ {m}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function InfoTag({
  icon, text, color,
}: {
  icon: React.ReactNode
  text: string
  color?: 'green'
}) {
  return (
    <span
      className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border"
      style={{
        fontFamily: 'var(--font-mono)',
        color: color === 'green' ? 'var(--green)' : 'var(--text-secondary)',
        background: color === 'green' ? 'var(--green-dim)' : 'var(--bg-elevated)',
        borderColor: color === 'green' ? 'rgba(16,185,129,0.25)' : 'var(--border-default)',
      }}
    >
      {icon}
      {text}
    </span>
  )
}
