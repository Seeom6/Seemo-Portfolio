"use client"

import * as React from "react"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Grid, List, Filter, ExternalLink, Github } from "lucide-react"

import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"
import { PROJECTS } from "../../lib/constants"
import { Project, ProjectCategory, ViewMode } from "../../lib/types"
import { cn } from "../../lib/utils"

export function ProjectsSection() {
  const t = useTranslations('projects')
  const [viewMode, setViewMode] = React.useState<ViewMode>('grid')
  const [selectedCategory, setSelectedCategory] = React.useState<ProjectCategory | 'all'>('all')
  const [selectedTech, setSelectedTech] = React.useState<string | 'all'>('all')

  const filteredProjects = React.useMemo(() => {
    return PROJECTS.filter(project => {
      const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory
      const techMatch = selectedTech === 'all' || project.techStack.includes(selectedTech)
      return categoryMatch && techMatch
    })
  }, [selectedCategory, selectedTech])

  const allTechnologies = React.useMemo(() => {
    const techs = new Set<string>()
    PROJECTS.forEach(project => {
      project.techStack.forEach(tech => techs.add(tech))
    })
    return Array.from(techs).sort()
  }, [])

  const categories: (ProjectCategory | 'all')[] = ['all', 'web-app', 'mobile-app', 'desktop-app', 'library', 'tool', 'other']

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {t('title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        {/* Filters and View Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-8"
        >
          <div className="flex flex-wrap gap-2">
            {/* Category Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Category: {selectedCategory === 'all' ? t('filterAll') : selectedCategory}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {categories.map(category => (
                  <DropdownMenuItem
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? 'bg-accent' : ''}
                  >
                    {category === 'all' ? t('filterAll') : category}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Technology Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Tech: {selectedTech === 'all' ? t('filterAll') : selectedTech}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="max-h-60 overflow-y-auto">
                <DropdownMenuItem
                  onClick={() => setSelectedTech('all')}
                  className={selectedTech === 'all' ? 'bg-accent' : ''}
                >
                  {t('filterAll')}
                </DropdownMenuItem>
                {allTechnologies.map(tech => (
                  <DropdownMenuItem
                    key={tech}
                    onClick={() => setSelectedTech(tech)}
                    className={selectedTech === tech ? 'bg-accent' : ''}
                  >
                    {tech}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* View Toggle */}
          <div className="flex gap-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="icon"
              onClick={() => setViewMode('grid')}
              aria-label={t('gridView')}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="icon"
              onClick={() => setViewMode('list')}
              aria-label={t('listView')}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        {/* Projects Grid/List */}
        <motion.div
          layout
          className={cn(
            "gap-6",
            viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
              : "flex flex-col space-y-6"
          )}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              viewMode={viewMode}
              index={index}
            />
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">No projects found matching your filters.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: Project
  viewMode: ViewMode
  index: number
}

function ProjectCard({ project, viewMode, index }: ProjectCardProps) {
  const t = useTranslations('projects')

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className={cn(
        viewMode === 'list' && "flex flex-col md:flex-row"
      )}
    >
      <Card className={cn(
        "h-full transition-shadow hover:shadow-lg",
        viewMode === 'list' && "md:flex-row"
      )}>
        {/* Project Image Placeholder */}
        <div className={cn(
          "bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center",
          viewMode === 'grid' ? "h-48" : "h-32 md:h-auto md:w-48"
        )}>
          <div className="text-4xl font-bold text-primary/60">
            {project.title.charAt(0)}
          </div>
        </div>

        <div className={cn(
          "flex flex-col",
          viewMode === 'list' && "md:flex-1"
        )}>
          <CardHeader>
            <CardTitle className="line-clamp-1">{project.title}</CardTitle>
            <CardDescription className="line-clamp-2">
              {project.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="flex-1">
            <div className="flex flex-wrap gap-1 mb-4">
              {project.techStack.slice(0, 4).map(tech => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 4 && (
                <span className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md">
                  +{project.techStack.length - 4}
                </span>
              )}
            </div>
          </CardContent>

          <CardFooter className="gap-2">
            {project.liveUrl && (
              <Button asChild size="sm" className="flex-1">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {t('viewDemo')}
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild variant="outline" size="sm" className="flex-1">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  {t('viewCode')}
                </a>
              </Button>
            )}
          </CardFooter>
        </div>
      </Card>
    </motion.div>
  )
}
