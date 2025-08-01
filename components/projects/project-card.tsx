'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Tag, ArrowUpRight, Star, Code } from 'lucide-react';
import { Project } from '../../types/project';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '../../components/ui/card';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const locale = useLocale() as 'en' | 'ar';
  const t = useTranslations('projects');
  const [imageLoaded, setImageLoaded] = useState(false);
  // const [isHovered, setIsHovered] = useState(false);

  const translation = project.translations[locale];
  const isRTL = locale === 'ar';

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === 'ar' ? 'ar-SA' : 'en-US', {
      year: 'numeric',
      month: 'short'
    });
  };

  const getDemoLink = () => {
    return project.links.find(link => link.type === 'demo');
  };

  const getGithubLink = () => {
    return project.links.find(link => link.type === 'github');
  };

  const cardVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1
    },
    hover: {
      y: -8,
      scale: featured ? 1.02 : 1.03
    }
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1
    }
  };

  const overlayVariants = {
    initial: { opacity: 0 },
    hover: {
      opacity: 1
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      // onHoverStart={() => setIsHovered(true)}
      // onHoverEnd={() => setIsHovered(false)}
      className={`group ${featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
    >
      <Card className="h-full overflow-hidden bg-gradient-to-br from-card via-card to-secondary/20 border-border/50 shadow-soft hover:shadow-strong transition-all duration-500 backdrop-blur-sm">
        <CardHeader className="p-0 relative">
          <div className="relative aspect-[16/10] overflow-hidden">
            <motion.div
              variants={imageVariants}
              className="w-full h-full"
            >
              <Image
                src={project.thumbnail.src}
                alt={project.thumbnail.alt}
                fill
                className={`object-cover transition-all duration-700 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
                sizes={featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
              />
            </motion.div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} z-10`}
            >
              <Badge
                variant={project.status === 'completed' ? 'default' : 'secondary'}
                className="capitalize shadow-md backdrop-blur-sm bg-background/90 border-0 font-medium"
              >
                {t(`status.${project.status}`)}
              </Badge>
            </motion.div>

            {/* Featured Badge */}
            {project.featured && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} z-10`}
              >
                <Badge variant="outline" className="glass border-primary/20 text-primary font-medium shadow-md">
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  {t('featured')}
                </Badge>
              </motion.div>
            )}

            {/* Enhanced Quick Action Overlay */}
            <motion.div
              variants={overlayVariants}
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center gap-3 z-20"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                {getDemoLink() && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Button size="sm" asChild className="shadow-lg backdrop-blur-sm bg-primary/90 hover:bg-primary border-0">
                      <a
                        href={getDemoLink()!.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gap-2 font-medium"
                      >
                        <ExternalLink className="h-4 w-4" />
                        {t('viewDemo')}
                      </a>
                    </Button>
                  </motion.div>
                )}
                {getGithubLink() && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Button size="sm" variant="outline" asChild className="shadow-lg backdrop-blur-sm bg-background/90 hover:bg-background border-border/50">
                      <a
                        href={getGithubLink()!.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gap-2 font-medium"
                      >
                        <Code className="h-4 w-4" />
                        {t('viewCode')}
                      </a>
                    </Button>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Loading Skeleton */}
            {!imageLoaded && (
              <div className="absolute inset-0 skeleton" />
            )}
          </div>
        </CardHeader>

        <CardContent className="p-6 space-y-5">
          {/* Title and Date */}
          <div className="space-y-3">
            <motion.h3
              className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href={`/${locale}/projects/${project.slug}`}
                className="hover:underline decoration-primary/30 underline-offset-4"
              >
                {translation.title}
              </Link>
            </motion.h3>

            <motion.div
              className="flex items-center gap-2 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Calendar className="h-4 w-4 text-primary/70" />
              <span className="font-medium">
                {formatDate(project.startDate)}
                {project.endDate && ` - ${formatDate(project.endDate)}`}
              </span>
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            className="text-muted-foreground line-clamp-3 leading-relaxed text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {translation.shortDescription}
          </motion.p>

          {/* Technologies */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
              <Tag className="h-4 w-4 text-primary/70" />
              {t('technologies')}
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, featured ? 8 : 5).map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.05 }}
                >
                  <Badge
                    variant="secondary"
                    className="text-xs font-medium px-2.5 py-1 rounded-full border-0 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
                    style={{
                      backgroundColor: tech.color ? `${tech.color}20` : undefined,
                      color: tech.color || undefined,
                      borderColor: tech.color ? `${tech.color}40` : undefined
                    }}
                  >
                    {tech.name}
                  </Badge>
                </motion.div>
              ))}
              {project.technologies.length > (featured ? 8 : 5) && (
                <Badge variant="outline" className="text-xs font-medium px-2.5 py-1 rounded-full">
                  +{project.technologies.length - (featured ? 8 : 5)}
                </Badge>
              )}
            </div>
          </motion.div>
        </CardContent>

        <CardFooter className="p-6 pt-0">
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Button
              asChild
              className="w-full group/btn bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-md hover:shadow-lg transition-all duration-300 border-0 font-medium"
            >
              <Link href={`/${locale}/projects/${project.slug}`}>
                {t('projectDetails')}
                <ArrowUpRight className={`h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 ${
                  isRTL ? 'mr-2 group-hover/btn:-translate-x-0.5' : 'ml-2'
                }`} />
              </Link>
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
