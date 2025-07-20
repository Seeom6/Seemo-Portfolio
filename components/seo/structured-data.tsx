import { SITE_CONFIG } from '@/lib/constants'
import { Project } from '@/lib/types'

interface PersonStructuredDataProps {
  locale: string
}

export function PersonStructuredData({ locale }: PersonStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": SITE_CONFIG.author.name,
    "url": `${SITE_CONFIG.url}/${locale}`,
    "image": `${SITE_CONFIG.url}/profile-image.jpg`,
    "sameAs": [
      `https://github.com/${SITE_CONFIG.author.github}`,
      `https://linkedin.com/in/${SITE_CONFIG.author.linkedin}`,
      `https://twitter.com/${SITE_CONFIG.author.twitter}`,
    ],
    "jobTitle": "Web Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "University of Technology"
    },
    "knowsAbout": [
      "Web Development",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Frontend Development",
      "Backend Development"
    ],
    "email": SITE_CONFIG.author.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "addressCountry": "US"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

interface WebsiteStructuredDataProps {
  locale: string
}

export function WebsiteStructuredData({ locale }: WebsiteStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": SITE_CONFIG.name,
    "url": `${SITE_CONFIG.url}/${locale}`,
    "description": SITE_CONFIG.description,
    "inLanguage": locale,
    "author": {
      "@type": "Person",
      "name": SITE_CONFIG.author.name,
      "url": `${SITE_CONFIG.url}/${locale}`
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${SITE_CONFIG.url}/${locale}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

interface ProjectStructuredDataProps {
  project: Project
  locale: string
}

export function ProjectStructuredData({ project, locale }: ProjectStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "url": project.liveUrl,
    "image": project.images[0],
    "author": {
      "@type": "Person",
      "name": SITE_CONFIG.author.name,
      "url": `${SITE_CONFIG.url}/${locale}`
    },
    "dateCreated": project.completionDate,
    "programmingLanguage": project.techStack,
    "codeRepository": project.githubUrl,
    "keywords": project.tags.join(", "),
    "genre": project.category,
    "inLanguage": locale
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

interface BreadcrumbStructuredDataProps {
  items: Array<{
    name: string
    url: string
  }>
}

export function BreadcrumbStructuredData({ items }: BreadcrumbStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

interface OrganizationStructuredDataProps {
  locale: string
}

export function OrganizationStructuredData({ locale }: OrganizationStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE_CONFIG.name,
    "url": `${SITE_CONFIG.url}/${locale}`,
    "logo": `${SITE_CONFIG.url}/logo.png`,
    "description": SITE_CONFIG.description,
    "founder": {
      "@type": "Person",
      "name": SITE_CONFIG.author.name
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": SITE_CONFIG.author.email,
      "contactType": "customer service"
    },
    "sameAs": [
      `https://github.com/${SITE_CONFIG.author.github}`,
      `https://linkedin.com/in/${SITE_CONFIG.author.linkedin}`,
      `https://twitter.com/${SITE_CONFIG.author.twitter}`,
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
