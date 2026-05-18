import type {
  Certification,
  CodingStat,
  DashboardStat,
  Experience,
  Hackathon,
  LeadershipItem,
  LoaderStep,
  NavLink,
  Project,
  SkillGroup,
  TerminalCommand,
  TimelineItem,
} from '@/features/portfolio/types'

export const personalInfo = {
  name: 'Ajay Rathore',
  role: 'Backend-Focused Product Engineer',
  tagline:
    'MERN Stack and Java developer building scalable systems, hackathon-grade products, and real-world engineering solutions.',
  email: 'ajaygurjar78692@gmail.com',
  phone: '+91 78692 00000',
  location: 'Bhopal, Madhya Pradesh, India',
  college: 'IES College of Technology, Bhopal',
  degree: 'B.Tech Computer Science',
  batch: "CSE'27",
  availability: 'Open to internships and collaborations',
  github: 'https://github.com/Ajaysingh78',
  linkedin: 'https://www.linkedin.com/in/ajay-rathore',
  resumeUrl: '',
  avatarUrl: '',
} as const

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about', index: '01' },
  { label: 'Expertise', href: '#expertise', index: '02' },
  { label: 'Projects', href: '#projects', index: '03' },
  { label: 'Hackathons', href: '#hackathons', index: '04' },
  { label: 'Leadership', href: '#leadership', index: '05' },
  { label: 'Timeline', href: '#timeline', index: '06' },
  { label: 'Terminal', href: '#terminal', index: '07' },
  { label: 'Contact', href: '#contact', index: '08' },
]

export const dashboardStats: DashboardStat[] = [
  { label: 'Hackathons', value: '10+', color: 'accent' },
  { label: 'SIH Rank', value: 'Top 6', color: 'green' },
  { label: 'NASA Stage', value: 'Finalist', color: 'purple' },
  { label: 'API Gain', value: '30%', color: 'amber' },
]

export const codingStats: CodingStat[] = [
  {
    platform: 'GitHub',
    value: '25+',
    label: 'Repositories',
    url: personalInfo.github,
    color: 'accent',
  },
  {
    platform: 'LeetCode',
    value: 'DSA',
    label: 'Practice',
    url: 'https://leetcode.com/',
    color: 'amber',
  },
  {
    platform: 'Java',
    value: 'Core',
    label: 'Language',
    url: '#expertise',
    color: 'green',
  },
  {
    platform: 'MERN',
    value: 'Full',
    label: 'Stack',
    url: '#projects',
    color: 'purple',
  },
]

export const experiences: Experience[] = [
  {
    id: 'infosys',
    role: 'Backend Developer Intern',
    company: 'Infosys',
    type: 'internship',
    duration: '2025',
    location: 'Remote',
    description: [
      'Improved backend API performance and contributed to production-minded service workflows.',
      'Worked with REST APIs, database queries, and testing-focused delivery.',
    ],
    metrics: ['Reduced API latency by 30%'],
    stack: ['Java', 'REST APIs', 'SQL'],
    current: false,
  },
  {
    id: 'student-lead',
    role: 'Student Coordinator',
    company: 'IES College of Technology',
    type: 'leadership',
    duration: '2024 - Present',
    location: 'Bhopal',
    description: [
      'Coordinating technical events, teams, and student community programs.',
    ],
    metrics: ['Managed 250+ participant events'],
    current: true,
  },
]

export const skillGroups: SkillGroup[] = [
  {
    category: 'backend',
    label: 'Backend Systems',
    icon: 'server',
    skills: [
      { name: 'Node.js', level: 'core', category: 'backend' },
      { name: 'Express.js', level: 'core', category: 'backend' },
      { name: 'REST APIs', level: 'core', category: 'backend' },
      { name: 'Authentication', level: 'proficient', category: 'backend' },
      { name: 'API Optimization', level: 'proficient', category: 'backend' },
    ],
  },
  {
    category: 'languages',
    label: 'Languages',
    icon: 'code',
    skills: [
      { name: 'Java', level: 'core', category: 'languages' },
      { name: 'JavaScript', level: 'core', category: 'languages' },
      { name: 'TypeScript', level: 'proficient', category: 'languages' },
      { name: 'C++', level: 'familiar', category: 'languages' },
    ],
  },
  {
    category: 'frontend',
    label: 'Frontend',
    icon: 'layout',
    skills: [
      { name: 'React', level: 'proficient', category: 'frontend' },
      { name: 'Next.js', level: 'proficient', category: 'frontend' },
      { name: 'Tailwind CSS', level: 'proficient', category: 'frontend' },
      { name: 'Framer Motion', level: 'familiar', category: 'frontend' },
    ],
  },
  {
    category: 'database',
    label: 'Data Layer',
    icon: 'database',
    skills: [
      { name: 'MongoDB', level: 'core', category: 'database' },
      { name: 'MySQL', level: 'proficient', category: 'database' },
      { name: 'Schema Design', level: 'proficient', category: 'database' },
      { name: 'Query Optimization', level: 'familiar', category: 'database' },
    ],
  },
  {
    category: 'tools',
    label: 'Tools',
    icon: 'wrench',
    skills: [
      { name: 'Git and GitHub', level: 'core', category: 'tools' },
      { name: 'Postman', level: 'core', category: 'tools' },
      { name: 'Docker', level: 'familiar', category: 'tools' },
      { name: 'Vercel', level: 'proficient', category: 'tools' },
    ],
  },
  {
    category: 'cs-fundamentals',
    label: 'CS Fundamentals',
    icon: 'cpu',
    skills: [
      { name: 'Data Structures', level: 'core', category: 'cs-fundamentals' },
      { name: 'Algorithms', level: 'core', category: 'cs-fundamentals' },
      { name: 'Operating Systems', level: 'proficient', category: 'cs-fundamentals' },
      { name: 'DBMS', level: 'proficient', category: 'cs-fundamentals' },
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'mdr-trace',
    title: 'MDR Pathogen Tracing System',
    tagline: 'Real-time disease surveillance and outbreak intelligence.',
    description:
      'A backend-first system for tracking multidrug-resistant pathogen patterns and helping health teams respond faster.',
    problem:
      'Fragmented health data makes it difficult to detect patterns and coordinate early response.',
    solution:
      'Built a structured reporting workflow with dashboards, alerting logic, and clean API boundaries for field-ready use.',
    stack: ['Node.js', 'Express', 'MongoDB', 'React', 'Charts'],
    metrics: [
      { label: 'SIH', value: 'Top 6' },
      { label: 'Focus', value: 'HealthTech' },
    ],
    status: 'finalist',
    statusLabel: 'National Finalist',
    competition: 'Smart India Hackathon',
    tags: ['Healthcare', 'Analytics', 'Backend'],
    highlight: true,
    accentColor: 'green',
    githubUrl: personalInfo.github,
  },
  {
    id: 'nasa-space-apps',
    title: 'NASA Space Apps Mission Tool',
    tagline: 'Decision support for space-app challenge workflows.',
    description:
      'A hackathon product built under time pressure with a focus on clarity, data flow, and usable problem solving.',
    problem:
      'Participants needed a simple way to interpret mission data and present actionable insights.',
    solution:
      'Designed a full-stack prototype with clean views, structured data, and a focused problem narrative.',
    stack: ['React', 'Node.js', 'APIs', 'Tailwind CSS'],
    metrics: [
      { label: 'Stage', value: 'Finalist' },
      { label: 'Scope', value: 'Global' },
    ],
    status: 'finalist',
    statusLabel: 'NASA Finalist',
    competition: 'NASA Space Apps Challenge',
    tags: ['SpaceTech', 'Prototype', 'Data'],
    highlight: true,
    accentColor: 'purple',
    githubUrl: personalInfo.github,
  },
  {
    id: 'portfolio-os',
    title: 'Portfolio OS',
    tagline: 'Interactive engineering portfolio with terminal UX.',
    description:
      'A modern single-page portfolio that presents engineering work through animated systems and command-style exploration.',
    problem:
      'Traditional resumes are static and fail to show execution, product sense, and technical identity.',
    solution:
      'Built an interactive Next.js portfolio with content-driven sections, animation, and a CLI-inspired explorer.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    metrics: [
      { label: 'Sections', value: '8' },
      { label: 'Mode', value: 'SPA' },
    ],
    status: 'deployed',
    statusLabel: 'Portfolio Build',
    tags: ['Portfolio', 'UI', 'Frontend'],
    highlight: false,
    accentColor: 'accent',
    githubUrl: personalInfo.github,
  },
  {
    id: 'api-optimizer',
    title: 'API Performance Workbench',
    tagline: 'Service tuning and backend profiling practice.',
    description:
      'A backend learning project for measuring request flow, identifying bottlenecks, and improving response patterns.',
    problem:
      'APIs often grow without visibility into latency, validation cost, and database access patterns.',
    solution:
      'Created repeatable API checks and refactored handlers around smaller, measurable service boundaries.',
    stack: ['Java', 'Spring Concepts', 'SQL', 'Postman'],
    metrics: [
      { label: 'Latency', value: '-30%' },
      { label: 'Layer', value: 'API' },
    ],
    status: 'built',
    statusLabel: 'Built',
    tags: ['Backend', 'Performance', 'Java'],
    highlight: false,
    accentColor: 'amber',
    githubUrl: personalInfo.github,
  },
]

export const hackathons: Hackathon[] = [
  {
    id: 'sih',
    name: 'Smart India Hackathon',
    result: 'finalist',
    resultLabel: 'Top 6 Nationally',
    project: 'MDR Pathogen Tracing System',
    year: '2025',
    description:
      'Reached the national top 6 with a real-world healthcare system focused on antimicrobial resistance response.',
    level: 'national',
  },
  {
    id: 'nasa',
    name: 'NASA Space Apps Challenge',
    result: 'finalist',
    resultLabel: 'Finalist',
    project: 'Mission Data Tool',
    year: '2024',
    description:
      'Built and presented a space-app solution under global challenge constraints and tight delivery timelines.',
    level: 'international',
  },
  {
    id: 'gdg',
    name: 'GDG Hackathons',
    result: 'participant',
    resultLabel: 'Multiple Builds',
    project: 'Community Tech Projects',
    year: '2024',
    description:
      'Participated in fast-paced team builds focused on web products, APIs, and practical product thinking.',
    level: 'college',
  },
]

export const leadershipItems: LeadershipItem[] = [
  {
    id: 'sac',
    role: 'Student Activity Coordinator',
    event: 'SAC and campus events',
    duration: '2024 - Present',
    scope: 'Coordinated student programs, team workflows, and execution plans for campus events.',
    impact: '250+ participants coordinated',
    tags: ['Coordination', 'Operations', 'Teamwork'],
  },
  {
    id: 'hackathon-lead',
    role: 'Hackathon Team Lead',
    event: 'National hackathon builds',
    duration: '2024 - 2025',
    scope: 'Led an 8-member team across planning, backend delivery, presentation, and final submission.',
    impact: '8-member team led',
    tags: ['Leadership', 'Delivery', 'Pitching'],
  },
  {
    id: 'campus-ambassador',
    role: 'Campus Ambassador',
    event: 'IIT Madras outreach',
    duration: '2024',
    scope: 'Supported student outreach, event communication, and community participation.',
    impact: 'Community reach improved',
    tags: ['Outreach', 'Community', 'Communication'],
  },
]

export const certifications: Certification[] = [
  {
    id: 'java',
    title: 'Java Programming',
    issuer: 'Professional Training',
    date: '2025',
    highlight: true,
  },
  {
    id: 'mern',
    title: 'MERN Stack Development',
    issuer: 'Project-Based Learning',
    date: '2025',
    highlight: true,
  },
  {
    id: 'cloud',
    title: 'Cloud and Deployment Fundamentals',
    issuer: 'Self Learning',
    date: '2024',
    highlight: false,
  },
]

export const timelineItems: TimelineItem[] = [
  {
    id: 'college-start',
    year: '2023',
    title: 'Started Computer Science Engineering',
    subtitle: 'IES College of Technology, Bhopal',
    description: 'Built fundamentals in programming, DSA, DBMS, and web development.',
    category: 'education',
    highlight: false,
  },
  {
    id: 'nasa-finalist',
    year: '2024',
    title: 'NASA Space Apps Finalist',
    subtitle: 'International hackathon milestone',
    description: 'Delivered a team project under global challenge constraints.',
    category: 'achievement',
    highlight: true,
  },
  {
    id: 'infosys',
    year: '2025',
    title: 'Backend Developer Internship',
    subtitle: 'Infosys',
    description: 'Worked on backend workflows and improved API latency by 30%.',
    category: 'experience',
    highlight: true,
  },
  {
    id: 'sih-top-six',
    year: '2025',
    title: 'Smart India Hackathon Top 6',
    subtitle: 'National finalist project',
    description: 'Built an MDR pathogen tracing system for health response teams.',
    category: 'project',
    highlight: true,
  },
]

export const terminalCommands: TerminalCommand[] = [
  {
    command: 'help',
    description: 'List available commands',
    output: [
      'Available commands:',
      'about - show profile summary',
      'skills - show core technical stack',
      'projects - list highlighted projects',
      'hackathons - show competition record',
      'contact - show direct contact details',
      'open github - open GitHub profile',
      'download resume - show resume status',
      'clear - reset terminal',
    ],
  },
  {
    command: 'about',
    description: 'Show profile summary',
    output:
      'Ajay Rathore is a backend-focused product engineer, CSE 2027 student, MERN and Java developer, and national hackathon finalist.',
  },
  {
    command: 'skills',
    description: 'Show technical skills',
    output: ['Core: Java, JavaScript, Node.js, Express, MongoDB', 'Also: React, Next.js, TypeScript, SQL, Git, Postman'],
  },
  {
    command: 'projects',
    description: 'Show highlighted projects',
    output: ['1. MDR Pathogen Tracing System - SIH Top 6', '2. NASA Space Apps Mission Tool - Finalist', '3. Portfolio OS - Next.js interactive portfolio'],
  },
  {
    command: 'hackathons',
    description: 'Show hackathon record',
    output: ['10+ hackathons', 'NASA Space Apps Finalist', 'Smart India Hackathon Top 6 Nationally'],
  },
  {
    command: 'contact',
    description: 'Show contact details',
    output: [`Email: ${personalInfo.email}`, `Location: ${personalInfo.location}`, `GitHub: ${personalInfo.github}`],
  },
]

export const loaderSteps: LoaderStep[] = [
  { text: 'Initializing engineering profile', duration: 450 },
  { text: 'Loading backend systems', duration: 450 },
  { text: 'Compiling hackathon record', duration: 450 },
  { text: 'Preparing portfolio interface', duration: 450 },
]
