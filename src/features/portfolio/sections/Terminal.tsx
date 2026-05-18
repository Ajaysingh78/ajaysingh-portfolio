'use client'

// ============================================================
// TERMINAL SECTION — INTERACTIVE CLI
// ============================================================

import { useState, useRef, useEffect, KeyboardEvent } from 'react'
import { motion, useInView } from 'framer-motion'
import { terminalCommands } from '@/features/portfolio/data'
import { viewportConfig, staggerContainer, staggerItem } from '@/lib/animations/motion'
import { openUrl } from '@/lib/browser'

interface TerminalEntry {
  type: 'input' | 'output' | 'error' | 'success'
  content: string | string[]
}

const WELCOME: TerminalEntry[] = [
  {
    type: 'output',
    content: [
      '╔══════════════════════════════════════════╗',
      '║   AJAY RATHORE · ENGINEERING TERMINAL   ║',
      '║   Backend Engineer · CSE\'27 · Bhopal    ║',
      '╚══════════════════════════════════════════╝',
      '',
      'Type "help" to see available commands.',
    ],
  },
]

export function Terminal() {
  const ref           = useRef(null)
  const isInView      = useInView(ref, viewportConfig)
  const inputRef      = useRef<HTMLInputElement>(null)
  const bodyRef       = useRef<HTMLDivElement>(null)

  const [entries, setEntries]   = useState<TerminalEntry[]>(WELCOME)
  const [input,   setInput]     = useState('')
  const [history, setHistory]   = useState<string[]>([])
  const [histIdx, setHistIdx]   = useState(-1)

  // Auto-scroll to bottom
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }
  }, [entries])

  const processCommand = (cmd: string) => {
    const raw      = cmd.trim().toLowerCase()
    const newEntry: TerminalEntry = { type: 'input', content: `$ ${cmd}` }

    if (!raw) return

    // Add to history
    setHistory((h) => [cmd, ...h])
    setHistIdx(-1)

    const commandDef = terminalCommands.find((c) => c.command === raw)

    if (raw === 'clear') {
      setEntries(WELCOME)
      return
    }

    if (raw === 'open github') {
      openUrl('https://github.com/Ajaysingh78')
      setEntries((e) => [
        ...e,
        newEntry,
        { type: 'success', content: ['→ Opening GitHub profile...', '→ github.com/Ajaysingh78'] },
      ])
      return
    }

    if (raw === 'download resume') {
      setEntries((e) => [
        ...e,
        newEntry,
        { type: 'success', content: ['→ Resume link will be available soon.', '→ Contact at ajaygurjar78692@gmail.com'] },
      ])
      return
    }

    if (commandDef) {
      const output = Array.isArray(commandDef.output)
        ? commandDef.output
        : [commandDef.output]

      setEntries((e) => [
        ...e,
        newEntry,
        { type: 'output', content: output },
      ])
    } else {
      setEntries((e) => [
        ...e,
        newEntry,
        {
          type: 'error',
          content: [
            `Command not found: "${cmd}"`,
            'Type "help" to see available commands.',
          ],
        },
      ])
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      processCommand(input)
      setInput('')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const idx = Math.min(histIdx + 1, history.length - 1)
      setHistIdx(idx)
      setInput(history[idx] ?? '')
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const idx = Math.max(histIdx - 1, -1)
      setHistIdx(idx)
      setInput(idx === -1 ? '' : history[idx] ?? '')
    }
  }

  return (
    <section id="terminal" className="section" ref={ref}>
      <div className="container-md">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">07 · Terminal</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10"
        >
          <h2 className="font-head mb-3">
            Prefer to{' '}
            <span style={{ color: 'var(--accent)' }}>explore directly?</span>
          </h2>
          <p className="text-base max-w-lg" style={{ color: 'var(--text-secondary)' }}>
            Interactive terminal. Type commands to navigate the portfolio.
          </p>
        </motion.div>

        {/* Quick commands */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-wrap gap-2 mb-6"
        >
          {terminalCommands.slice(0, 6).map((cmd) => (
            <motion.button
              key={cmd.command}
              variants={staggerItem}
              onClick={() => {
                setInput(cmd.command)
                inputRef.current?.focus()
              }}
              className="badge badge-muted cursor-hover hover:border-[var(--border-accent)] hover:text-[var(--accent)] transition-all"
            >
              {cmd.command}
            </motion.button>
          ))}
        </motion.div>

        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="terminal"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Terminal header */}
          <div className="terminal-header">
            <div className="terminal-dot" style={{ background: '#EF4444' }} />
            <div className="terminal-dot" style={{ background: '#F59E0B' }} />
            <div className="terminal-dot" style={{ background: '#10B981' }} />
            <span
              className="ml-3 text-xs flex-1"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
            >
              ajay@portfolio:~
            </span>
            <button
              onClick={(e) => { e.stopPropagation(); setEntries(WELCOME) }}
              className="text-xs px-2 py-0.5 rounded transition-colors hover:text-[var(--text-primary)]"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
            >
              clear
            </button>
          </div>

          {/* Terminal body */}
          <div
            ref={bodyRef}
            className="terminal-body overflow-y-auto"
            style={{ maxHeight: '360px' }}
          >
            {entries.map((entry, i) => (
              <div key={i} className="mb-1">
                {Array.isArray(entry.content) ? (
                  entry.content.map((line, j) => (
                    <div
                      key={j}
                      style={{
                        color: entry.type === 'input'   ? 'var(--accent)'
                             : entry.type === 'error'   ? 'var(--red)'
                             : entry.type === 'success' ? 'var(--green)'
                             : 'var(--text-secondary)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        lineHeight: 1.7,
                        whiteSpace: 'pre-wrap',
                        overflowWrap: 'anywhere',
                      }}
                    >
                      {line || '\u00A0'}
                    </div>
                  ))
                ) : (
                  <div
                    style={{
                      color: entry.type === 'input'   ? 'var(--accent)'
                           : entry.type === 'error'   ? 'var(--red)'
                           : entry.type === 'success' ? 'var(--green)'
                           : 'var(--text-secondary)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      lineHeight: 1.7,
                    }}
                  >
                    {entry.content}
                  </div>
                )}
              </div>
            ))}

            {/* Input line */}
            <div className="flex items-center gap-2 mt-2">
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: 'var(--accent)',
                }}
              >
                $
              </span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent outline-none border-none"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: 'var(--text-primary)',
                  caretColor: 'var(--accent)',
                }}
                autoComplete="off"
                spellCheck={false}
                aria-label="Terminal input"
              />
              <span className="terminal-cursor" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
