'use client'
// ============================================================
// ABOUT SECTION v3
// ============================================================
import { motion, useInView } from 'framer-motion'
import { useRef }            from 'react'
import { Code2, Award, Briefcase, Cpu } from 'lucide-react'
import { sectionReveal, staggerContainer, staggerItem, viewportConfig } from '@/lib/animations/motion'
import { experiences } from '@/features/portfolio/data'

const highlights = [
  { icon: Code2,      label: 'Full-Stack Engineer',  desc: 'MERN Stack + Java, REST APIs, scalable backend systems' },
  { icon: Award,      label: 'NASA & SIH Finalist',  desc: 'International & national hackathon recognition' },
  { icon: Briefcase,  label: 'Infosys Intern',       desc: 'Reduced API latency 30% in production' },
  { icon: Cpu,        label: 'Product Thinker',      desc: 'Building civic-tech for real-world India problems' },
]

export function About() {
  const ref    = useRef(null)
  const inView = useInView(ref, viewportConfig)

  return (
    <section id="about" className="section" ref={ref}>
      <motion.div variants={sectionReveal} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
        <span className="section-label">About Me</span>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">
        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="flex flex-col gap-6">
          <motion.h2 variants={staggerItem} style={{ lineHeight: 1.12 }}>
            Turning complex problems{' '}
            <span className="gradient-text">into elegant systems</span>
          </motion.h2>
          <motion.div variants={staggerItem} className="flex flex-col gap-4">
            <p>
              Pre-final year CSE student at IES College of Technology, Bhopal — building production-grade backend systems,
              shipping hackathon products under pressure, and thinking about engineering solutions for India&apos;s next billion.
            </p>
            <p>
              My engineering identity sits at the intersection of backend depth and product thinking.
              Whether it&apos;s a Spring Boot API at Infosys or an MDR pathogen tracker for SIH —
              I build things that work fast, clean, and at scale.
            </p>
          </motion.div>
          <motion.div variants={staggerItem} className="grid grid-cols-2 gap-3">
            {[
              { label: 'College', value: 'IES CoT, Bhopal' },
              { label: 'Batch',   value: 'CSE \u002727' },
              { label: 'CGPA',    value: '7.5 / 10' },
              { label: 'Status',  value: 'Open to Intern' },
            ].map(f => (
              <div key={f.label} className="rounded-xl px-4 py-3" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-default)' }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.60rem', color: 'var(--text-disabled)', letterSpacing: '0.10em', textTransform: 'uppercase', marginBottom: 4 }}>{f.label}</p>
                <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>{f.value}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="grid grid-cols-2 gap-4">
          {highlights.map(h => {
            const Icon = h.icon
            return (
              <motion.div key={h.label} variants={staggerItem} className="glass-card p-5 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'var(--accent-dim)', border: '1px solid var(--border-accent)' }}>
                  <Icon size={17} style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-primary)', marginBottom: 4 }}>{h.label}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{h.desc}</p>
                </div>
              </motion.div>
            )
          })}
          <motion.div variants={staggerItem} className="col-span-2 rounded-xl p-5" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-default)' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>Experience</p>
            {experiences.map(exp => (
              <div key={exp.id} className="flex items-start gap-3 mb-3 last:mb-0">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-default)' }}>
                  <Briefcase size={13} style={{ color: 'var(--text-muted)' }} />
                </div>
                <div>
                  <p style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                    {exp.role} · <span style={{ color: 'var(--accent)' }}>{exp.company}</span>
                  </p>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-muted)', marginTop: 2 }}>{exp.duration}</p>
                  {exp.metrics?.[0] && <span className="badge badge-green mt-1.5">{exp.metrics[0]}</span>}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
