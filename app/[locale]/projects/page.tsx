import { Suspense } from 'react';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { AnimatedProjectsHeader, AnimatedProjectsGrid } from '@/components/projects/animated-projects-components';
// import { ProjectCard } from '@/components/projects/project-card';
// import { PageTransition } from '@/components/ui/page-transition';

interface ProjectsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ProjectsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'projects' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

// ProjectsHeader moved to client component

// ProjectsGrid moved to client component

function ProjectsSkeleton() {
  return (
    <div className="space-y-20">
      {/* Header Skeleton */}
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <div className="h-4 w-32 bg-muted rounded-full mx-auto animate-pulse" />
          <div className="h-16 w-96 bg-muted rounded-2xl mx-auto animate-pulse" />
        </div>
      </div>

      {/* Featured Projects Skeleton */}
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <div className="h-12 w-64 bg-muted rounded-xl mx-auto animate-pulse" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="space-y-6 p-8 border border-border/50 rounded-2xl">
              <div className="space-y-3">
                <div className="h-8 w-3/4 bg-muted rounded-lg animate-pulse" />
                <div className="h-4 w-full bg-muted rounded animate-pulse" />
              </div>

              <div className="flex gap-2">
                {[...Array(3)].map((_, j) => (
                  <div key={j} className="h-6 w-16 bg-muted rounded-full animate-pulse" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Other Projects Skeleton */}
      <div className="space-y-12">
        <div className="text-center">
          <div className="h-12 w-48 bg-muted rounded-xl mx-auto animate-pulse" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-4 p-6 border border-border/50 rounded-xl">
              <div className="space-y-2">
                <div className="h-6 w-2/3 bg-muted rounded animate-pulse" />
                <div className="h-3 w-full bg-muted rounded animate-pulse" />
              </div>

              <div className="flex gap-1.5">
                {[...Array(6)].map((_, j) => (
                  <div key={j} className="h-5 w-12 bg-muted rounded-md animate-pulse" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-secondary/5 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <AnimatedProjectsHeader />
          <Suspense fallback={<ProjectsSkeleton />}>
            <div className="mt-24">
              <AnimatedProjectsGrid />
            </div>
          </Suspense>
        </div>
      </div>


    </div>
  );
}
