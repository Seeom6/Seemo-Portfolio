export interface ProjectImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface ProjectLink {
  type: 'demo' | 'github' | 'website' | 'documentation' | 'figma' | 'other';
  url: string;
  label: string;
}

export interface ProjectTranslation {
  title: string;
  description: string;
  shortDescription: string;
  features: string[];
  challenges?: string[];
  learnings?: string[];
  images: {
    alt: string;
    caption?: string;
  }[];
}

export interface ProjectTechnology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'deployment' | 'design' | 'other';
  icon?: string;
  color?: string;
}

export interface Project {
  id: string;
  slug: string;
  status: 'completed' | 'in-progress' | 'planned' | 'archived';
  featured: boolean;
  priority: number; // For sorting (1 = highest priority)
  
  // Dates
  startDate: string; // ISO date string
  endDate?: string; // ISO date string
  lastUpdated: string; // ISO date string
  
  // Media
  thumbnail: ProjectImage;
  images: ProjectImage[];
  video?: {
    src: string;
    poster?: string;
    type: 'mp4' | 'webm' | 'youtube' | 'vimeo';
  };
  
  // Technologies
  technologies: ProjectTechnology[];
  
  // Links
  links: ProjectLink[];
  
  // Translations
  translations: {
    en: ProjectTranslation;
    ar: ProjectTranslation;
  };
  
  // SEO & Metadata
  seo: {
    keywords: string[];
    category: string;
  };
}

export type ProjectCategory = 'web-app' | 'mobile-app' | 'website' | 'api' | 'library' | 'design' | 'other';

export interface ProjectFilter {
  category?: ProjectCategory;
  technology?: string;
  status?: Project['status'];
  featured?: boolean;
}
