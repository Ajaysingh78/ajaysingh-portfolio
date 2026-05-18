'use client'

// ============================================================
// PROJECTS — OPERATIONS CENTER
// ============================================================

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GitBranch, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'
import { accentColorMap } from '@/features/portfolio/config/display'
import { projects } from '@/features/portfolio/data'
import type { Project } from '@/features/portfolio/types'
import { staggerContainer, staggerItem, viewportConfig } from '@/lib/animations/motion'
import { openUrl } from '@/lib/browser'

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, viewportConfig)

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">03 · Projects</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="font-head mb-3">
            Project{' '}
            <span style={{ color: 'var(--accent)' }}>Operations Center</span>
          </h2>
          <p className="text-base max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            Not side projects — deployed systems, hackathon missions, and real-world solutions.
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-6"
        >
          {projects.map((project, i) => (
            <motion.div key={project.id} variants={staggerItem}>
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const colors = accentColorMap[project.accentColor]

  const statusColorMap: Record<string, string> = {
    deployed:    'var(--green)',
    finalist:    'var(--purple)',
    shortlisted: 'var(--accent)',
    built:       'var(--amber)',
  }

  return (
    <motion.div
      className="glass-card p-6 flex flex-col gap-5 h-full cursor-hover"
      whileHover={{ y: -4, borderColor: 'var(--border-accent)' }}
      transition={{ duration: 0.25 }}
      style={{
        borderLeft: `2px solid ${colors.hex}`,
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-2">
          {/* Status badge */}
          <span
            className="badge text-xs"
            style={{
              color: statusColorMap[project.status],
              background: `${statusColorMap[project.status]}15`,
              borderColor: `${statusColorMap[project.status]}40`,
            }}
          >
            ● {project.statusLabel}
          </span>

          {/* Title */}
          <h3
            className="font-head text-lg leading-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            {project.title}
          </h3>

          {/* Tagline */}
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            {project.tagline}
          </p>
        </div>

        {/* Index */}
        <span
          className="text-3xl font-head opacity-10 flex-shrink-0"
          style={{ color: colors.hex }}
        >
          0{index + 1}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {project.description}
      </p>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-2">
        {project.metrics.map((metric) => (
          <div
            key={metric.label}
            className="flex flex-col gap-0.5 px-3 py-2 rounded-lg"
            style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}
          >
            <span
              className="text-xs font-medium"
              style={{ color: colors.hex }}
            >
              {metric.value}
            </span>
            <span
              className="text-xs"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
            >
              {metric.label}
            </span>
          </div>
        ))}
      </div>

      {/* Expandable: Problem + Solution */}
      {expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="flex flex-col gap-4 pt-2"
          style={{ borderTop: '1px solid var(--border-subtle)' }}
        >
          <div>
            <p
              className="text-xs mb-1 tracking-widest uppercase"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
            >
              Problem
            </p>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              {project.problem}
            </p>
          </div>
          <div>
            <p
              className="text-xs mb-1 tracking-widest uppercase"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
            >
              Solution
            </p>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              {project.solution}
            </p>
          </div>
        </motion.div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-4" style={{ borderTop: '1px solid var(--border-subtle)' }}>
        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, 3).map((tech) => (
            <span key={tech} className="badge badge-muted text-[10px] py-0.5">
              {tech}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="badge badge-muted text-[10px] py-0.5">
              +{project.stack.length - 3}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <button
              onClick={() => openUrl(project.githubUrl!)}
              className="p-1.5 rounded-lg transition-colors hover:text-[var(--accent)]"
              style={{ color: 'var(--text-muted)' }}
              aria-label="View on GitHub"
            >
              <GitBranch size={15} />
            </button>
          )}
          {project.liveUrl && (
            <button
              onClick={() => openUrl(project.liveUrl!)}
              className="p-1.5 rounded-lg transition-colors hover:text-[var(--accent)]"
              style={{ color: 'var(--text-muted)' }}
              aria-label="View live"
            >
              <ExternalLink size={15} />
            </button>
          )}
          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg transition-all"
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-muted)',
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            {expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
            {expanded ? 'Less' : 'More'}
          </button>
        </div>
      </div>
    </motion.div>
  )
}
