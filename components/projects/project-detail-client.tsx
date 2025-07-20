"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, ExternalLink, Github, Globe, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Project } from '@/types/project';

interface ProjectDetailClientProps {
  project: Project;
  locale: 'en' | 'ar';
}

export function ProjectDetailClient({ project, locale }: ProjectDetailClientProps) {
  const translation = project.translations[locale];
  const isRTL = locale === 'ar';
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'challenges' | 'learnings'>('overview');

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === 'ar' ? 'ar-SA' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const calculateDuration = () => {
    const start = new Date(project.startDate);
    const end = project.endDate ? new Date(project.endDate) : new Date();
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const months = Math.floor(diffDays / 30);
    const days = diffDays % 30;
    
    if (months > 0) {
      return `${months} ${months === 1 ? 'month' : 'months'}${days > 0 ? ` ${days} days` : ''}`;
    }
    return `${days} ${days === 1 ? 'day' : 'days'}`;
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % project.images.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? project.images.length - 1 : selectedImageIndex - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <Link
          href={`/${locale}/projects`}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 group"
        >
          <ArrowLeft className={`h-4 w-4 transition-transform group-hover:-translate-x-1 ${
            isRTL ? 'ml-2 group-hover:translate-x-1' : 'mr-2'
          }`} />
          <span>Back to Projects</span>
        </Link>
      </motion.div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8 mb-16"
      >
        {/* Project Title and Meta */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-4">
              <motion.h1
                className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {translation.title}
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {translation.shortDescription}
              </motion.p>
            </div>

            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                project.status === 'completed' 
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                  : project.status === 'in-progress'
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                  : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
              }`}>
                {project.status.charAt(0).toUpperCase() + project.status.slice(1).replace('-', ' ')}
              </span>
            </motion.div>
          </div>

          {/* Project Meta Information */}
          <motion.div
            className="flex flex-wrap gap-6 text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>
                {formatDate(project.startDate)}
                {project.endDate && ` - ${formatDate(project.endDate)}`}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Duration: {calculateDuration()}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              <span>Last Updated: {formatDate(project.lastUpdated)}</span>
            </div>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border/50 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.02 }}
        >
          <Image
            src={project.images[0]?.src || project.thumbnail.src}
            alt={translation.images?.[0]?.alt || project.thumbnail.alt}
            fill
            className="object-cover cursor-pointer"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            onClick={() => setSelectedImageIndex(0)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          
          {/* Click to expand hint */}
          <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-sm rounded-full opacity-0 hover:opacity-100 transition-opacity duration-200">
            Click to expand
          </div>
        </motion.div>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-12">
          {/* Navigation Tabs */}
          <motion.div
            className="flex flex-wrap gap-2 p-1 bg-muted rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            {[
              { key: 'overview' as const, label: 'Overview' },
              { key: 'features' as const, label: 'Features' },
              { key: 'challenges' as const, label: 'Challenges' },
              { key: 'learnings' as const, label: 'Learnings' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.key
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {translation.description}
                    </p>
                  </div>

                  {/* Project Gallery */}
                  {project.images.length > 1 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold">Project Gallery</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {project.images.map((image, index) => (
                          <motion.div
                            key={index}
                            className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border/50 cursor-pointer group"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            onClick={() => setSelectedImageIndex(index)}
                          >
                            <Image
                              src={image.src}
                              alt={translation.images?.[index]?.alt || image.alt}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-110"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'features' && translation.features && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Key Features</h3>
                  <div className="grid gap-4">
                    {translation.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-card border border-border/50 rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'challenges' && translation.challenges && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Challenges Overcome</h3>
                  <div className="grid gap-4">
                    {translation.challenges.map((challenge, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-card border border-border/50 rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-orange-500 mt-3 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{challenge}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'learnings' && translation.learnings && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Key Learnings</h3>
                  <div className="grid gap-4">
                    {translation.learnings.map((learning, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-card border border-border/50 rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-green-500 mt-3 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{learning}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Sidebar */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          {/* Technology Stack */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Technology Stack</h3>
            <div className="grid gap-3">
              {project.technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="flex items-center gap-3 p-3 bg-card border border-border/50 rounded-lg hover:bg-card/80 transition-colors duration-200"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {tech.icon && (
                    <Image
                      src={tech.icon}
                      alt={`${tech.name} icon`}
                      width={24}
                      height={24}
                      className="rounded-sm"
                    />
                  )}
                  <div className="flex-1">
                    <div className="font-medium">{tech.name}</div>
                    <div className="text-xs text-muted-foreground capitalize">{tech.category}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Project Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Project Links</h3>
            <div className="space-y-3">
              {project.links.map((link, index) => (
                <motion.a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-card border border-border/50 rounded-lg hover:bg-card/80 transition-all duration-200 group"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {link.type === 'github' ? (
                    <Github className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  ) : (
                    <Globe className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  )}
                  <span className="font-medium group-hover:text-primary transition-colors">
                    {link.label}
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors ml-auto" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Project Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Project Info</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Priority</span>
                <span className="font-medium">#{project.priority}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Category</span>
                <span className="font-medium capitalize">{project.seo.category.replace('-', ' ')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Featured</span>
                <span className={`font-medium ${project.featured ? 'text-green-600' : 'text-muted-foreground'}`}>
                  {project.featured ? 'Yes' : 'No'}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImageIndex(null)}
          >
            <motion.div
              className="relative max-w-7xl max-h-[90vh] mx-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <Image
                  src={project.images[selectedImageIndex].src}
                  alt={translation.images?.[selectedImageIndex]?.alt || project.images[selectedImageIndex].alt}
                  width={project.images[selectedImageIndex].width}
                  height={project.images[selectedImageIndex].height}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedImageIndex(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors duration-200"
                >
                  <X className="h-6 w-6" />
                </button>

                {/* Navigation Buttons */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors duration-200"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors duration-200"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}

                {/* Image Caption */}
                {translation.images?.[selectedImageIndex]?.caption && (
                  <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/50 backdrop-blur-sm text-white rounded-lg">
                    <p className="text-center">{translation.images[selectedImageIndex].caption}</p>
                  </div>
                )}
              </div>

              {/* Image Counter */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-sm rounded-full">
                {selectedImageIndex + 1} / {project.images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
