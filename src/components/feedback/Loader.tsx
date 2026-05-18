'use client'

// ============================================================
// LOADER — CINEMATIC SYSTEM INITIALIZATION
// ============================================================

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { loaderSteps } from '@/features/portfolio/data'
import { loaderWrapper, loaderText } from '@/lib/animations/motion'
import { delay } from '@/lib/async'

interface LoaderProps {
  onComplete: () => void
}

export function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress]     = useState(0)
  const [stepIndex, setStepIndex]   = useState(0)
  const [currentText, setCurrentText] = useState(loaderSteps[0].text)

  useEffect(() => {
    let cancelled = false

    const run = async () => {
      const totalDuration = loaderSteps.reduce((acc, s) => acc + s.duration, 0)
      let elapsed = 0

      for (let i = 0; i < loaderSteps.length; i++) {
        if (cancelled) return
        const step = loaderSteps[i]

        setStepIndex(i)
        setCurrentText(step.text)

        await delay(step.duration)
        elapsed += step.duration
        setProgress(Math.round((elapsed / totalDuration) * 100))
      }

      if (!cancelled) {
        await delay(300)
        onComplete()
      }
    }

    run()
    return () => { cancelled = true }
  }, [onComplete])

  return (
    <motion.div
      className="loader-wrapper"
      variants={loaderWrapper}
      initial="visible"
      exit="exit"
    >
      {/* Grid background */}
      <div className="grid-bg" aria-hidden="true" />

      {/* Logo / Identity */}
      <div className="flex flex-col items-center gap-8">
        {/* Monogram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div
            className="w-16 h-16 border border-[var(--border-accent)] rounded-xl flex items-center justify-center"
            style={{ background: 'var(--accent-dim)' }}
          >
            <span
              className="font-mono text-xl font-medium"
              style={{ color: 'var(--accent)' }}
            >
              AR
            </span>
          </div>
          {/* Glow ring */}
          <motion.div
            className="absolute inset-0 rounded-xl"
            animate={{
              boxShadow: [
                '0 0 0px rgba(0,212,255,0)',
                '0 0 24px rgba(0,212,255,0.3)',
                '0 0 0px rgba(0,212,255,0)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* Step text */}
        <AnimatedText text={currentText} stepIndex={stepIndex} />

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center gap-3"
        >
          <div className="loader-bar-track">
            <motion.div
              className="loader-bar-fill"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>
          <span className="loader-text">{progress}%</span>
        </motion.div>

        {/* Bottom label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="loader-text"
          style={{ color: 'var(--text-disabled)' }}
        >
          AJAY RATHORE · BACKEND ENGINEER · CSE&apos;27
        </motion.p>
      </div>
    </motion.div>
  )
}

// Animated step text
function AnimatedText({ text, stepIndex }: { text: string; stepIndex: number }) {
  return (
    <motion.div
      key={stepIndex}
      variants={loaderText}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="loader-text text-center"
      style={{ color: 'var(--accent)', letterSpacing: '0.2em' }}
    >
      {text}
    </motion.div>
  )
}
