// ============================================================
// ANIMATION VARIANTS — AJAY RATHORE PORTFOLIO
// ============================================================

import type { Variants, Transition } from 'framer-motion'

// --- Base Transitions ---
export const transitions = {
  fast: {
    duration: 0.2,
    ease: [0.4, 0, 0.2, 1],
  } satisfies Transition,

  base: {
    duration: 0.4,
    ease: [0.4, 0, 0.2, 1],
  } satisfies Transition,

  slow: {
    duration: 0.7,
    ease: [0.4, 0, 0.2, 1],
  } satisfies Transition,

  spring: {
    type: 'spring',
    stiffness: 300,
    damping: 30,
  } satisfies Transition,

  springSmooth: {
    type: 'spring',
    stiffness: 200,
    damping: 40,
  } satisfies Transition,

  cinematic: {
    duration: 1.0,
    ease: [0.22, 1, 0.36, 1],
  } satisfies Transition,
} as const

// --- Fade Variants ---
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitions.base,
  },
}

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.base,
  },
}

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.base,
  },
}

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.base,
  },
}

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.base,
  },
}

// --- Scale Variants ---
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.spring,
  },
}

export const scaleInFast: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.fast,
  },
}

// --- Stagger Container ---
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.base,
  },
}

export const staggerItemLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.base,
  },
}

// --- Hero Variants ---
export const heroTitle: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const heroSubtitle: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.2,
    },
  },
}

export const heroCta: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.4,
    },
  },
}

export const heroDashboard: Variants = {
  hidden: { opacity: 0, x: 48, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.3,
    },
  },
}

// --- Loader Variants ---
export const loaderWrapper: Variants = {
  visible: { opacity: 1 },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
      delay: 0.2,
    },
  },
}

export const loaderText: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.fast,
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: transitions.fast,
  },
}

// --- Nav Variants ---
export const navItem: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.07,
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
}

// --- Card Hover ---
export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.01,
    y: -4,
    transition: transitions.spring,
  },
}

// --- Section Reveal ---
export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

// --- Line Draw ---
export const lineDraw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.2, ease: 'easeInOut' },
      opacity: { duration: 0.2 },
    },
  },
}

// --- Counter ---
export const counterReveal: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.springSmooth,
  },
}

// --- Terminal Typing ---
export const terminalLine: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.3,
      ease: 'easeOut',
    },
  }),
}

// --- Page Transition ---
export const pageTransition: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

// --- Floating animation (for dashboard elements) ---
export const floatAnimation = {
  y: [0, -8, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

// --- Pulse glow ---
export const pulseGlow = {
  boxShadow: [
    '0 0 8px rgba(0, 212, 255, 0.2)',
    '0 0 24px rgba(0, 212, 255, 0.4)',
    '0 0 8px rgba(0, 212, 255, 0.2)',
  ],
  transition: {
    duration: 2.5,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

// --- Viewport config ---
export const viewportConfig = {
  once: true,
  margin: '-80px',
} as const
