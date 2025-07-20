import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getProjectBySlug, getAllProjects } from '@/data/projects';
import { ProjectDetailClient } from '@/components/projects/project-detail-client';

interface ProjectPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  const locales = ['en', 'ar'];
  
  const params = [];
  for (const project of projects) {
    for (const locale of locales) {
      params.push({
        locale,
        slug: project.slug,
      });
    }
  }
  
  return params;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    };
  }

  const projectData = project.translations[locale as 'en' | 'ar'];

  return {
    title: `${projectData.title} | Portfolio`,
    description: projectData.shortDescription,
    keywords: project.seo.keywords,
    openGraph: {
      title: projectData.title,
      description: projectData.shortDescription,
      images: [
        {
          url: project.thumbnail.src,
          width: project.thumbnail.width,
          height: project.thumbnail.height,
          alt: project.thumbnail.alt,
        },
      ],
    },
  };
}

function ProjectDetailSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10">
      <div className="container mx-auto px-4 py-20">
        {/* Header Skeleton */}
        <div className="space-y-8 mb-16">
          <div className="h-12 w-3/4 bg-muted rounded-lg animate-pulse" />
          <div className="h-6 w-1/2 bg-muted rounded animate-pulse" />
          <div className="flex gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-8 w-20 bg-muted rounded-full animate-pulse" />
            ))}
          </div>
        </div>

        {/* Image Skeleton */}
        <div className="h-96 w-full bg-muted rounded-2xl animate-pulse mb-16" />

        {/* Content Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="h-8 w-1/3 bg-muted rounded animate-pulse" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-muted rounded animate-pulse" />
                  <div className="h-4 w-3/4 bg-muted rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            <div className="h-8 w-1/2 bg-muted rounded animate-pulse" />
            <div className="space-y-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-4 w-full bg-muted rounded animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10">
      <Suspense fallback={<ProjectDetailSkeleton />}>
        <ProjectDetailClient project={project} locale={locale as 'en' | 'ar'} />
      </Suspense>
    </div>
  );
}
