export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  techStack: string[]
  images: string[]
  liveUrl?: string
  githubUrl?: string
  completionDate: string
  tags: string[]
  category: ProjectCategory
  featured?: boolean
}

export type ProjectCategory = 
  | 'web-app'
  | 'mobile-app'
  | 'desktop-app'
  | 'library'
  | 'tool'
  | 'other'

export interface Skill {
  name: string
  level: SkillLevel
  category: SkillCategory
  icon?: string
}

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert'

export type SkillCategory = 
  | 'frontend'
  | 'backend'
  | 'database'
  | 'devops'
  | 'design'
  | 'other'

export interface Experience {
  id: string
  company: string
  position: string
  startDate: string
  endDate?: string
  description: string
  technologies: string[]
  achievements?: string[]
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: string
  endDate?: string
  gpa?: string
  description?: string
}

export interface Certification {
  id: string
  name: string
  issuer: string
  issueDate: string
  expiryDate?: string
  credentialId?: string
  credentialUrl?: string
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface SEOData {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
}

export type Theme = 'light' | 'dark' | 'system'

export type ViewMode = 'grid' | 'list'

export interface FilterOptions {
  category?: ProjectCategory
  techStack?: string[]
  tags?: string[]
}
