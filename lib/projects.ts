import { Project } from '../types/project';
import fs from 'fs';
import path from 'path';

const projectsDirectory = path.join(process.cwd(), 'data/projects');

// For JSON-based projects (Alternative approach)
export async function getProjectsFromJSON(): Promise<Project[]> {
  try {
    const filePath = path.join(process.cwd(), 'data/projects.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const projects: Project[] = JSON.parse(fileContents);
    return projects.sort((a, b) => a.priority - b.priority);
  } catch (error) {
    console.error('Error loading projects:', error);
    return [];
  }
}

// For individual JSON files per project
export async function getProjectsFromFiles(): Promise<Project[]> {
  try {
    if (!fs.existsSync(projectsDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(projectsDirectory);
    const projects: Project[] = [];

    for (const fileName of fileNames) {
      if (fileName.endsWith('.json')) {
        const filePath = path.join(projectsDirectory, fileName);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const project: Project = JSON.parse(fileContents);
        projects.push(project);
      }
    }

    return projects.sort((a, b) => a.priority - b.priority);
  } catch (error) {
    console.error('Error loading projects from files:', error);
    return [];
  }
}

// For CMS integration (Contentful, Strapi, etc.)
export async function getProjectsFromCMS(): Promise<Project[]> {
  try {
    // Example with a generic CMS API
    const response = await fetch(`${process.env.CMS_API_URL}/projects`, {
      headers: {
        'Authorization': `Bearer ${process.env.CMS_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch projects from CMS');
    }

    const data = await response.json();
    return data.projects || [];
  } catch (error) {
    console.error('Error loading projects from CMS:', error);
    return [];
  }
}

// Unified function that can switch between different sources
export async function getProjects(source: 'static' | 'json' | 'files' | 'cms' = 'static'): Promise<Project[]> {
  switch (source) {
    case 'json':
      return getProjectsFromJSON();
    case 'files':
      return getProjectsFromFiles();
    case 'cms':
      return getProjectsFromCMS();
    case 'static':
    default:
      // Import static projects
      const { getAllProjects } = await import('../data/projects');
      return getAllProjects();
  }
}

export async function getProjectBySlug(slug: string, source: 'static' | 'json' | 'files' | 'cms' = 'static'): Promise<Project | undefined> {
  const projects = await getProjects(source);
  return projects.find(project => project.slug === slug);
}

export async function getFeaturedProjects(source: 'static' | 'json' | 'files' | 'cms' = 'static'): Promise<Project[]> {
  const projects = await getProjects(source);
  return projects.filter(project => project.featured);
}

// Image optimization helper
export function getOptimizedImageUrl(src: string, width?: number, height?: number): string {
  // For Next.js Image optimization
  if (src.startsWith('/')) {
    const params = new URLSearchParams();
    if (width) params.set('w', width.toString());
    if (height) params.set('h', height.toString());
    params.set('q', '75'); // Quality
    
    return `/_next/image?url=${encodeURIComponent(src)}&${params.toString()}`;
  }
  
  return src;
}

// SEO helper
export function generateProjectMetadata(project: Project, locale: 'en' | 'ar') {
  const translation = project.translations[locale];
  
  return {
    title: translation.title,
    description: translation.shortDescription,
    keywords: project.seo.keywords.join(', '),
    openGraph: {
      title: translation.title,
      description: translation.shortDescription,
      images: [
        {
          url: project.thumbnail.src,
          width: project.thumbnail.width,
          height: project.thumbnail.height,
          alt: project.thumbnail.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: translation.title,
      description: translation.shortDescription,
      images: [project.thumbnail.src],
    },
  };
}
