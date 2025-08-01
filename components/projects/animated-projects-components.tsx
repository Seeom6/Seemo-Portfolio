"use client";

import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";
import { getAllProjects, getFeaturedProjects } from '../../data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export function AnimatedProjectsHeader() {
  const t = useTranslations('projects');

  return (
    <motion.div
      className="text-center space-y-8 mb-20"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative space-y-6">
        {/* Animated badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="w-2 h-2 bg-primary rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          Portfolio Showcase
        </motion.div>

        {/* Main title with gradient and animation */}
        <div className="space-y-4">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              {t('title')}
            </span>
          </motion.h1>
          
          {/* Animated underline */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.div
              className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "12rem" }}
              transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            />
          </motion.div>
        </div>

        {/* Description with stagger animation */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            {t('description')}
          </p>
        </motion.div>

        {/* Stats or additional info */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-3xl font-bold text-primary">12+</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </motion.div>
          <motion.div
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-3xl font-bold text-primary">8+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </motion.div>
          <motion.div
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-3xl font-bold text-primary">4+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function AnimatedProjectsGrid() {
  // const t = useTranslations('projects'); // Will be used when adding filtering/search
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set());
  const params = useParams();
  const locale = params.locale as string;

  const featuredProjects = getFeaturedProjects();
  const allProjects = getAllProjects();
  const otherProjects = allProjects.filter(project => !project.featured);

  const toggleProjectExpansion = (projectId: string) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(projectId)) {
      newExpanded.delete(projectId);
    } else {
      newExpanded.add(projectId);
    }
    setExpandedProjects(newExpanded);
  };

  // Enhanced animation variants for sophisticated transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.92,
      rotateX: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 20,
        mass: 1,
      },
    },
  };

  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const cardHoverVariants = {
    rest: {
      scale: 1,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
    hover: {
      scale: 1.03,
      y: -12,
      rotateX: 8,
      rotateY: 5,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <motion.div 
      className="space-y-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <motion.section 
          className="space-y-12"
          variants={sectionVariants}
        >
          {/* Section Header */}
          <motion.div 
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              ⭐ Featured Work
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>

          {/* Enhanced Grid for Featured Projects */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`group perspective-1000 ${index === 0 ? "lg:col-span-2 xl:col-span-1" : ""}`}
                variants={itemVariants}
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <motion.div
                  className="relative h-full bg-gradient-to-br from-card via-card/95 to-card/90 border border-border/30 rounded-3xl overflow-hidden backdrop-blur-sm"
                  variants={cardHoverVariants}
                  style={{
                    background: "linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--card)/0.95) 50%, hsl(var(--card)/0.9) 100%)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                  }}
                >
                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Featured badge */}
                  <motion.div
                    className="absolute top-4 right-4 z-20 px-3 py-1 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-xs font-medium text-primary"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                  >
                    Featured
                  </motion.div>

                  {/* Enhanced Project Image */}
                  <div className="relative h-56 w-full overflow-hidden rounded-t-3xl">
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <Image
                        src={project.thumbnail.src}
                        alt={project.thumbnail.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Floating elements for visual interest */}
                    <motion.div
                      className="absolute top-4 left-4 w-2 h-2 bg-primary/60 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    />
                    <motion.div
                      className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-secondary/60 rounded-full"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.4, 0.8, 0.4]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    />
                  </div>

                  <div className="relative z-10 p-8 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.translations.en.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.translations.en.shortDescription}
                      </p>

                      {/* Expandable Features Section */}
                      <motion.button
                        onClick={() => toggleProjectExpansion(project.id)}
                        className="text-sm text-primary hover:text-primary/80 transition-colors duration-200 flex items-center gap-1"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {expandedProjects.has(project.id) ? 'Show Less' : 'Show Features'}
                        <motion.span
                          animate={{ rotate: expandedProjects.has(project.id) ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          ▼
                        </motion.span>
                      </motion.button>

                      <motion.div
                        initial={false}
                        animate={{
                          height: expandedProjects.has(project.id) ? 'auto' : 0,
                          opacity: expandedProjects.has(project.id) ? 1 : 0
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 space-y-2">
                          <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {project.translations.en.features.slice(0, 4).map((feature, featureIndex) => (
                              <motion.li
                                key={featureIndex}
                                className="flex items-start gap-2"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: featureIndex * 0.05 }}
                              >
                                <span className="text-primary text-xs mt-1">•</span>
                                <span>{feature}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    </div>

                    {/* Enhanced Technology badges */}
                    <div className="flex flex-wrap gap-2.5 pt-6">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <motion.div
                          key={tech.name}
                          className="group/tech flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-secondary/40 to-secondary/60 border border-secondary/30 text-secondary-foreground rounded-xl text-sm font-medium backdrop-blur-sm hover:from-secondary/60 hover:to-secondary/80 transition-all duration-300"
                          initial={{ opacity: 0, scale: 0.8, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.1 + techIndex * 0.05 + 0.7,
                            ease: [0.25, 0.46, 0.45, 0.94]
                          }}
                          whileHover={{
                            scale: 1.08,
                            y: -2,
                            transition: { duration: 0.2 }
                          }}
                        >
                          {tech.icon && (
                            <motion.div
                              className="relative"
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <Image
                                src={tech.icon}
                                alt={`${tech.name} icon`}
                                width={18}
                                height={18}
                                className="rounded-sm"
                              />
                            </motion.div>
                          )}
                          <span className="group-hover/tech:text-foreground transition-colors duration-200">
                            {tech.name}
                          </span>
                        </motion.div>
                      ))}
                      {project.technologies.length > 4 && (
                        <motion.span
                          className="px-4 py-2 bg-muted/60 text-muted-foreground rounded-xl text-sm font-medium border border-muted backdrop-blur-sm"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 + 0.9 }}
                        >
                          +{project.technologies.length - 4} more
                        </motion.span>
                      )}
                    </div>

                    {/* Project Status and Date */}
                    <div className="flex items-center justify-between pt-2">
                      <motion.span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          project.status === 'completed'
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                            : project.status === 'in-progress'
                            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                            : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                        }`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + 0.8 }}
                      >
                        {project.status.charAt(0).toUpperCase() + project.status.slice(1).replace('-', ' ')}
                      </motion.span>
                      <span className="text-xs text-muted-foreground">
                        {new Date(project.endDate || project.startDate).getFullYear()}
                      </span>
                    </div>

                    {/* Enhanced Action buttons */}
                    <motion.div
                      className="flex gap-4 pt-6"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 1.0 }}
                    >
                      <motion.div className="flex-1">
                        <Link
                          href={`/${locale}/projects/${project.slug}`}
                          className="group/btn block w-full"
                        >
                          <motion.div
                            className="relative px-6 py-3 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-xl font-semibold text-center overflow-hidden"
                            whileHover={{
                              scale: 1.02,
                              boxShadow: "0 8px 25px rgba(var(--primary), 0.3)"
                            }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                          >
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100"
                              initial={false}
                              animate={{ x: "-100%" }}
                              whileHover={{ x: "100%" }}
                              transition={{ duration: 0.6 }}
                            />
                            <span className="relative z-10">View Project</span>
                          </motion.div>
                        </Link>
                      </motion.div>
                      {project.links.find(link => link.type === 'github') && (
                        <motion.a
                          href={project.links.find(link => link.type === 'github')?.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn-secondary"
                          whileHover={{
                            scale: 1.02,
                            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)"
                          }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="px-6 py-3 border-2 border-border/50 rounded-xl font-semibold text-center backdrop-blur-sm hover:border-border hover:bg-secondary/30 transition-all duration-300">
                            <span>Code</span>
                          </div>
                        </motion.a>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      )}

      {/* All Projects */}
      {otherProjects.length > 0 && (
        <motion.section
          className="space-y-12"
          variants={sectionVariants}
        >
          {/* Section Header */}
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              {featuredProjects.length > 0 ? 'All Projects' : 'Projects'}
            </h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>

          {/* Responsive Grid for All Projects */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group perspective-1000"
                variants={itemVariants}
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <motion.div
                  className="relative h-full bg-gradient-to-br from-card via-card/95 to-card/90 border border-border/30 rounded-3xl overflow-hidden backdrop-blur-sm"
                  variants={cardHoverVariants}
                  style={{
                    background: "linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--card)/0.95) 50%, hsl(var(--card)/0.9) 100%)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                  }}
                >
                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Status badge for consistency */}
                  <motion.div
                    className={`absolute top-4 right-4 z-20 px-3 py-1 backdrop-blur-sm border rounded-full text-xs font-medium ${
                      project.status === 'completed'
                        ? 'bg-green-100/80 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800'
                        : project.status === 'in-progress'
                        ? 'bg-blue-100/80 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800'
                        : 'bg-yellow-100/80 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800'
                    }`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                  >
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1).replace('-', ' ')}
                  </motion.div>

                  {/* Enhanced Project Image */}
                  <div className="relative h-56 w-full overflow-hidden rounded-t-3xl">
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <Image
                        src={project.thumbnail.src}
                        alt={project.thumbnail.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Floating elements for visual interest */}
                    <motion.div
                      className="absolute top-4 left-4 w-2 h-2 bg-primary/60 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    />
                    <motion.div
                      className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-secondary/60 rounded-full"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.4, 0.8, 0.4]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    />
                  </div>

                  <div className="relative z-10 p-8 space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.translations.en.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.translations.en.shortDescription}
                      </p>
                    </div>

                    {/* Enhanced Technology badges */}
                    <div className="flex flex-wrap gap-2.5 pt-4">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <motion.div
                          key={tech.name}
                          className="group/tech flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-secondary/40 to-secondary/60 border border-secondary/30 text-secondary-foreground rounded-xl text-sm font-medium backdrop-blur-sm hover:from-secondary/60 hover:to-secondary/80 transition-all duration-300"
                          initial={{ opacity: 0, scale: 0.8, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.1 + techIndex * 0.05 + 0.7,
                            ease: [0.25, 0.46, 0.45, 0.94]
                          }}
                          whileHover={{
                            scale: 1.08,
                            y: -2,
                            transition: { duration: 0.2 }
                          }}
                        >
                          {tech.icon && (
                            <motion.div
                              className="relative"
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <Image
                                src={tech.icon}
                                alt={`${tech.name} icon`}
                                width={18}
                                height={18}
                                className="rounded-sm"
                              />
                            </motion.div>
                          )}
                          <span className="group-hover/tech:text-foreground transition-colors duration-200">
                            {tech.name}
                          </span>
                        </motion.div>
                      ))}
                      {project.technologies.length > 4 && (
                        <motion.span
                          className="px-4 py-2 bg-muted/60 text-muted-foreground rounded-xl text-sm font-medium border border-muted backdrop-blur-sm"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 + 0.9 }}
                        >
                          +{project.technologies.length - 4} more
                        </motion.span>
                      )}
                    </div>



                    {/* Enhanced Action buttons */}
                    <motion.div
                      className="flex gap-4 pt-6"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 1.0 }}
                    >
                      <motion.div className="flex-1">
                        <Link
                          href={`/${locale}/projects/${project.slug}`}
                          className="group/btn block w-full"
                        >
                          <motion.div
                            className="relative px-6 py-3 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-xl font-semibold text-center overflow-hidden"
                            whileHover={{
                              scale: 1.02,
                              boxShadow: "0 8px 25px rgba(var(--primary), 0.3)"
                            }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                          >
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100"
                              initial={false}
                              animate={{ x: "-100%" }}
                              whileHover={{ x: "100%" }}
                              transition={{ duration: 0.6 }}
                            />
                            <span className="relative z-10">View Project</span>
                          </motion.div>
                        </Link>
                      </motion.div>
                      {project.links.find(link => link.type === 'github') && (
                        <motion.a
                          href={project.links.find(link => link.type === 'github')?.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn-secondary"
                          whileHover={{
                            scale: 1.02,
                            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)"
                          }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="px-6 py-3 border-2 border-border/50 rounded-xl font-semibold text-center backdrop-blur-sm hover:border-border hover:bg-secondary/30 transition-all duration-300">
                            <span>Code</span>
                          </div>
                        </motion.a>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      )}

      {/* Enhanced No Projects Message */}
      {allProjects.length === 0 && (
        <motion.div
          className="text-center py-20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-6">
            <motion.div
              className="w-24 h-24 mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground">No Projects Yet</h3>
              <p className="text-muted-foreground text-lg">
                Projects are coming soon. Stay tuned!
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
