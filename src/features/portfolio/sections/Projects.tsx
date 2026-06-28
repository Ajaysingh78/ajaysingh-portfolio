'use client'
// ============================================================
// PROJECTS SECTION v3
// ============================================================
import { motion, useInView } from 'framer-motion'
import { useRef }            from 'react'
import { GitBranch, ArrowUpRight } from 'lucide-react'
import { sectionReveal, staggerContainer, staggerItem, viewportConfig } from '@/lib/animations/motion'
import { projects } from '@/features/portfolio/data'

const blobs: Record<string, { a: string; b: string }> = {
  accent: { a: 'rgba(196,166,255,0.28)', b: 'rgba(167,139,250,0.18)' },
  green:  { a: 'rgba(110,231,183,0.28)', b: 'rgba(16,185,129,0.18)' },
  purple: { a: 'rgba(167,139,250,0.30)', b: 'rgba(139,92,246,0.18)' },
  amber:  { a: 'rgba(252,211,77,0.26)',  b: 'rgba(245,158,11,0.16)' },
}
const statusBadge: Record<string, string> = {
  finalist: 'badge-purple', deployed: 'badge-green', shortlisted: 'badge-accent', built: 'badge-amber',
}

export function Projects() {
  const ref    = useRef(null)
  const inView = useInView(ref, viewportConfig)
  const featured = projects.filter(p => p.highlight)
  const rest     = projects.filter(p => !p.highlight)

  return (
    <section id="projects" className="section" ref={ref}>
      <motion.div variants={sectionReveal} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
        <span className="section-label">Projects</span>
      </motion.div>
      <motion.h2 variants={staggerItem} initial="hidden" animate={inView ? 'visible' : 'hidden'} style={{ marginBottom: 40, maxWidth: '20ch' }}>
        Things I&apos;ve <span className="gradient-text">built & shipped</span>
      </motion.h2>

      <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="grid md:grid-cols-2 gap-6 mb-6">
        {featured.map(p => {
          const blob = blobs[p.accentColor] ?? blobs.accent
          return (
            <motion.article key={p.id} variants={staggerItem} className="glass-card overflow-hidden flex flex-col"
              whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300, damping: 30 }}>
              {/* Blob visual */}
              <div className="blob-3d" style={{ '--blob-a': blob.a, '--blob-b': blob.b, minHeight: 155 } as React.CSSProperties}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div style={{ width: 80, height: 80, background: `radial-gradient(circle,${blob.a} 0%,transparent 70%)`, borderRadius: '40% 60% 70% 30%/40% 50% 60% 50%', filter: 'blur(1px)', animation: 'blob-morph 8s ease-in-out infinite' }} />
                </div>
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                  {p.stack.slice(0, 3).map(s => <span key={s} className="badge badge-muted" style={{ fontSize: '0.58rem', padding: '3px 7px' }}>{s}</span>)}
                </div>
                <div className="absolute top-3 right-3">
                  <span className={`badge ${statusBadge[p.status] ?? 'badge-muted'}`}>{p.statusLabel}</span>
                </div>
              </div>
              {/* Content */}
              <div className="p-5 flex flex-col gap-3 flex-1">
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4, lineHeight: 1.3 }}>{p.title}</h3>
                  <p style={{ fontSize: '0.80rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{p.tagline}</p>
                </div>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{p.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {p.metrics.map(m => (
                    <div key={m.label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}>
                      <span style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '0.88rem', color: 'var(--accent)' }}>{m.value}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.60rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{m.label}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-4 pt-2" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                  {p.githubUrl && (
                    <a href={p.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 transition-colors"
                      style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.70rem' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
                      <GitBranch size={13} /> Code
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          )
        })}
      </motion.div>

      <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="grid sm:grid-cols-2 gap-4">
        {rest.map(p => (
          <motion.article key={p.id} variants={staggerItem} className="glass-card p-5 flex flex-col gap-3"
            whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 300, damping: 30 }}>
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>{p.title}</h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{p.tagline}</p>
              </div>
              {p.githubUrl && (
                <a href={p.githubUrl} target="_blank" rel="noopener noreferrer"
                  className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all"
                  style={{ border: '1px solid var(--border-default)', color: 'var(--text-muted)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-default)'; e.currentTarget.style.color = 'var(--text-muted)' }}>
                  <ArrowUpRight size={14} />
                </a>
              )}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {p.stack.slice(0, 4).map(s => <span key={s} className="badge badge-muted" style={{ fontSize: '0.58rem' }}>{s}</span>)}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
