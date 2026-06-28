'use client'
// ============================================================
// LOADER v3
// ============================================================
import { useEffect, useState }    from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { loaderWrapper, loaderText } from '@/lib/animations/motion'
import { loaderSteps }               from '@/features/portfolio/data'

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress,  setProgress]  = useState(0)
  const [stepIndex, setStepIndex] = useState(0)

  useEffect(() => {
    const total = loaderSteps.reduce((s, l) => s + l.duration, 0)
    let elapsed = 0, step = 0

    const tick = () => {
      if (step >= loaderSteps.length) {
        setProgress(100)
        setTimeout(onComplete, 600)
        return
      }
      setStepIndex(step)
      const interval = setInterval(() => {
        elapsed += 16
        const p = Math.min((elapsed / total) * 100, ((step + 1) / loaderSteps.length) * 100)
        setProgress(p)
        if (elapsed >= (step + 1) * loaderSteps[step].duration) {
          clearInterval(interval); step++; tick()
        }
      }, 16)
    }
    tick()
  }, [onComplete])

  return (
    <motion.div className="loader-wrapper" variants={loaderWrapper} initial="visible" exit="exit">
      <motion.div initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
        style={{ background: 'var(--accent-dim)', border: '1px solid var(--border-accent)', boxShadow: '0 0 24px var(--accent-glow)', fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '1.4rem', color: 'var(--accent)' }}>
        AR
      </motion.div>
      <AnimatePresence mode="wait">
        <motion.p key={stepIndex} className="loader-text" variants={loaderText} initial="hidden" animate="visible" exit="exit">
          {loaderSteps[stepIndex]?.text ?? 'Ready'}
        </motion.p>
      </AnimatePresence>
      <div className="loader-bar-track mt-3">
        <div className="loader-bar-fill" style={{ width: `${progress}%`, transition: 'width 0.08s linear' }} />
      </div>
      <span className="loader-text mt-1" style={{ color: 'var(--accent)' }}>{Math.round(progress)}%</span>
    </motion.div>
  )
}