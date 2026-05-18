export const accentColorMap = {
  accent: {
    text: 'text-[var(--accent)]',
    bg: 'bg-[var(--accent-dim)]',
    border: 'border-[var(--border-accent)]',
    hex: '#00D4FF',
  },
  green: {
    text: 'text-[var(--green)]',
    bg: 'bg-[var(--green-dim)]',
    border: 'border-[rgba(16,185,129,0.25)]',
    hex: '#10B981',
  },
  amber: {
    text: 'text-[var(--amber)]',
    bg: 'bg-[var(--amber-dim)]',
    border: 'border-[rgba(245,158,11,0.25)]',
    hex: '#F59E0B',
  },
  purple: {
    text: 'text-[var(--purple)]',
    bg: 'bg-[var(--purple-dim)]',
    border: 'border-[rgba(139,92,246,0.25)]',
    hex: '#8B5CF6',
  },
} as const

export type AccentColor = keyof typeof accentColorMap

export const statusColorMap = {
  deployed: 'green',
  finalist: 'purple',
  shortlisted: 'accent',
  built: 'amber',
} as const

export const hackathonResultColor = {
  finalist: 'purple',
  shortlisted: 'accent',
  winner: 'green',
  participant: 'amber',
} as const

export const skillLevelLabel = {
  core: 'Core',
  proficient: 'Proficient',
  familiar: 'Familiar',
} as const

export const skillLevelWidth = {
  core: '90%',
  proficient: '70%',
  familiar: '50%',
} as const

export const timelineCategoryColor = {
  education: 'accent',
  experience: 'green',
  achievement: 'purple',
  project: 'amber',
} as const
