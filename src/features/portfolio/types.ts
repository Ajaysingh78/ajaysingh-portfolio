// ============================================================
// TYPES — AJAY RATHORE PORTFOLIO
// ============================================================

// --- Navigation ---
export interface NavLink {
  label: string
  href: string
  index: string
}

// --- Hero Dashboard ---
export interface DashboardStat {
  label: string
  value: string | number
  suffix?: string
  color?: 'accent' | 'green' | 'amber' | 'purple'
  icon?: string
}

// --- Skills ---
export type SkillLevel = 'core' | 'proficient' | 'familiar'

export interface Skill {
  name: string
  level: SkillLevel
  category: SkillCategory
}

export type SkillCategory =
  | 'languages'
  | 'frontend'
  | 'backend'
  | 'database'
  | 'tools'
  | 'cs-fundamentals'

export interface SkillGroup {
  category: SkillCategory
  label: string
  skills: Skill[]
  icon: string
}

// --- Projects ---
export type ProjectStatus = 'deployed' | 'finalist' | 'shortlisted' | 'built'
export type ProjectTag = string

export interface ProjectMetric {
  label: string
  value: string
}

export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  problem: string
  solution: string
  stack: string[]
  metrics: ProjectMetric[]
  status: ProjectStatus
  statusLabel: string
  competition?: string
  tags: ProjectTag[]
  highlight: boolean
  accentColor: 'accent' | 'green' | 'amber' | 'purple'
  githubUrl?: string
  liveUrl?: string
}

// --- Hackathons ---
export type HackathonResult = 'finalist' | 'shortlisted' | 'winner' | 'participant'

export interface Hackathon {
  id: string
  name: string
  result: HackathonResult
  resultLabel: string
  project?: string
  year: string
  description: string
  level: 'national' | 'international' | 'college'
}

// --- Experience ---
export interface Experience {
  id: string
  role: string
  company: string
  type: 'internship' | 'part-time' | 'volunteer' | 'leadership'
  duration: string
  location: string
  description: string[]
  metrics?: string[]
  stack?: string[]
  current: boolean
}

// --- Timeline ---
export type TimelineCategory = 'education' | 'experience' | 'achievement' | 'project'

export interface TimelineItem {
  id: string
  year: string
  title: string
  subtitle: string
  description: string
  category: TimelineCategory
  highlight?: boolean
}

// --- Certifications ---
export interface Certification {
  id: string
  title: string
  issuer: string
  date: string
  highlight: boolean
}

// --- Terminal ---
export interface TerminalCommand {
  command: string
  description: string
  output: string | string[]
}

// --- Contact Form ---
export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface ContactFormState {
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
  message: string
}

// --- Coding Stats ---
export interface CodingStat {
  platform: string
  value: string
  label: string
  url: string
  color: string
}

// --- Leadership ---
export interface LeadershipItem {
  id: string
  role: string
  event: string
  duration: string
  scope: string
  impact: string
  tags: string[]
}

// --- Section Meta ---
export interface SectionMeta {
  id: string
  label: string
  title: string
  subtitle?: string
}

// --- Framer Motion ---
export interface AnimationConfig {
  initial: object
  animate: object
  exit?: object
  transition?: object
}

// --- Loader ---
export interface LoaderStep {
  text: string
  duration: number
}