import { Project, Skill, Experience, Education, Certification, SocialLink } from './types'

export const SITE_CONFIG = {
  name: 'Portfolio',
  title: 'Web Developer Portfolio',
  description: 'Modern, responsive portfolio website showcasing web development projects and skills.',
  url: 'https://your-domain.com',
  ogImage: '/og-image.jpg',
  author: {
    name: 'Your Name',
    email: 'your.email@example.com',
    twitter: '@yourusername',
    github: 'yourusername',
    linkedin: 'yourusername',
  },
}

export const NAVIGATION_ITEMS = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'about' },
  { href: '/projects', label: 'projects' },
  { href: '/contact', label: 'contact' },
] as const

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: 'linkedin',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: 'twitter',
  },
  {
    name: 'Email',
    url: 'mailto:your.email@example.com',
    icon: 'mail',
  },
]

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'React', level: 'expert', category: 'frontend', icon: 'react' },
  { name: 'Next.js', level: 'expert', category: 'frontend', icon: 'nextjs' },
  { name: 'TypeScript', level: 'advanced', category: 'frontend', icon: 'typescript' },
  { name: 'JavaScript', level: 'expert', category: 'frontend', icon: 'javascript' },
  { name: 'HTML5', level: 'expert', category: 'frontend', icon: 'html5' },
  { name: 'CSS3', level: 'expert', category: 'frontend', icon: 'css3' },
  { name: 'TailwindCSS', level: 'advanced', category: 'frontend', icon: 'tailwind' },
  { name: 'Sass/SCSS', level: 'advanced', category: 'frontend', icon: 'sass' },
  
  // Backend
  { name: 'Node.js', level: 'advanced', category: 'backend', icon: 'nodejs' },
  { name: 'Express.js', level: 'advanced', category: 'backend', icon: 'express' },
  { name: 'Python', level: 'intermediate', category: 'backend', icon: 'python' },
  { name: 'Django', level: 'intermediate', category: 'backend', icon: 'django' },
  
  // Database
  { name: 'PostgreSQL', level: 'advanced', category: 'database', icon: 'postgresql' },
  { name: 'MongoDB', level: 'intermediate', category: 'database', icon: 'mongodb' },
  { name: 'Redis', level: 'intermediate', category: 'database', icon: 'redis' },
  
  // DevOps
  { name: 'Docker', level: 'intermediate', category: 'devops', icon: 'docker' },
  { name: 'AWS', level: 'intermediate', category: 'devops', icon: 'aws' },
  { name: 'Vercel', level: 'advanced', category: 'devops', icon: 'vercel' },
  { name: 'Git', level: 'advanced', category: 'devops', icon: 'git' },
]

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with modern UI and secure payments',
    longDescription: 'A comprehensive e-commerce platform built with Next.js, featuring user authentication, product management, shopping cart, secure payment processing with Stripe, and admin dashboard.',
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Prisma', 'PostgreSQL', 'Stripe'],
    images: ['/projects/ecommerce-1.jpg', '/projects/ecommerce-2.jpg'],
    liveUrl: 'https://ecommerce-demo.vercel.app',
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    completionDate: '2024-01-15',
    tags: ['full-stack', 'e-commerce', 'payments'],
    category: 'web-app',
    featured: true,
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates',
    longDescription: 'A modern task management application with real-time collaboration features, drag-and-drop functionality, team management, and progress tracking.',
    techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    images: ['/projects/taskapp-1.jpg', '/projects/taskapp-2.jpg'],
    liveUrl: 'https://taskapp-demo.vercel.app',
    githubUrl: 'https://github.com/yourusername/task-management',
    completionDate: '2023-11-20',
    tags: ['collaboration', 'real-time', 'productivity'],
    category: 'web-app',
    featured: true,
  },
]

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    company: 'Tech Company Inc.',
    position: 'Senior Frontend Developer',
    startDate: '2022-01-01',
    endDate: '2024-01-01',
    description: 'Led frontend development for multiple client projects, mentored junior developers, and implemented modern development practices.',
    technologies: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'],
    achievements: [
      'Improved application performance by 40%',
      'Led a team of 5 developers',
      'Implemented CI/CD pipeline reducing deployment time by 60%',
    ],
  },
  {
    id: '2',
    company: 'Startup XYZ',
    position: 'Full Stack Developer',
    startDate: '2020-06-01',
    endDate: '2021-12-31',
    description: 'Developed and maintained web applications using modern technologies, collaborated with design team to implement user interfaces.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    achievements: [
      'Built 3 major features from scratch',
      'Reduced API response time by 50%',
      'Implemented automated testing increasing code coverage to 85%',
    ],
  },
]

export const EDUCATION: Education[] = [
  {
    id: '1',
    institution: 'University of Technology',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    startDate: '2016-09-01',
    endDate: '2020-05-31',
    gpa: '3.8/4.0',
    description: 'Focused on software engineering, algorithms, and web development.',
  },
]

export const CERTIFICATIONS: Certification[] = [
  {
    id: '1',
    name: 'AWS Certified Developer',
    issuer: 'Amazon Web Services',
    issueDate: '2023-06-15',
    expiryDate: '2026-06-15',
    credentialId: 'AWS-DEV-123456',
    credentialUrl: 'https://aws.amazon.com/verification',
  },
  {
    id: '2',
    name: 'React Developer Certification',
    issuer: 'Meta',
    issueDate: '2022-12-10',
    credentialId: 'META-REACT-789012',
    credentialUrl: 'https://developers.facebook.com/certification',
  },
]

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
} as const
