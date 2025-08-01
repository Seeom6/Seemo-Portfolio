"use client"

import * as React from "react"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Calendar, ExternalLink, Award, GraduationCap, Briefcase } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { SKILLS, EXPERIENCE, EDUCATION, CERTIFICATIONS } from "../../lib/constants"
import { Skill, SkillCategory } from "../../lib/types"
import { cn } from "../../lib/utils"

export function AboutSection() {
  const t = useTranslations('about')

  const skillCategories: SkillCategory[] = ['frontend', 'backend', 'database', 'devops', 'design', 'other']

  const getSkillsByCategory = (category: SkillCategory): Skill[] => {
    return SKILLS.filter(skill => skill.category === category)
  }

  const getSkillLevelColor = (level: string) => {
    switch (level) {
      case 'expert': return 'bg-green-500'
      case 'advanced': return 'bg-blue-500'
      case 'intermediate': return 'bg-yellow-500'
      case 'beginner': return 'bg-gray-500'
      default: return 'bg-gray-500'
    }
  }

  const getSkillLevelWidth = (level: string) => {
    switch (level) {
      case 'expert': return 'w-full'
      case 'advanced': return 'w-4/5'
      case 'intermediate': return 'w-3/5'
      case 'beginner': return 'w-2/5'
      default: return 'w-2/5'
    }
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {t('title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* About Me */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    About Me
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    I&apos;m a passionate web developer with over 5 years of experience creating modern,
                    responsive web applications. I specialize in React, Next.js, and TypeScript, 
                    with a strong focus on user experience and performance optimization.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    When I&apos;m not coding, you can find me exploring new technologies, contributing to
                    open-source projects, or sharing my knowledge through blog posts and mentoring.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Experience Timeline */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Briefcase className="h-6 w-6" />
                {t('experience')}
              </h2>
              <div className="space-y-6">
                {EXPERIENCE.map((exp) => (
                  <Card key={exp.id}>
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <CardTitle>{exp.position}</CardTitle>
                          <CardDescription className="flex items-center gap-2">
                            <span>{exp.company}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {new Date(exp.startDate).getFullYear()} - {exp.endDate ? new Date(exp.endDate).getFullYear() : 'Present'}
                            </span>
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{exp.description}</p>
                      
                      {exp.achievements && exp.achievements.length > 0 && (
                        <div>
                          <h4 className="font-semibold mb-2">Key Achievements:</h4>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map(tech => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap className="h-6 w-6" />
                {t('education')}
              </h2>
              <div className="space-y-4">
                {EDUCATION.map((edu) => (
                  <Card key={edu.id}>
                    <CardHeader>
                      <CardTitle>{edu.degree} in {edu.field}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <span>{edu.institution}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(edu.startDate).getFullYear()} - {edu.endDate ? new Date(edu.endDate).getFullYear() : 'Present'}
                        </span>
                        {edu.gpa && (
                          <>
                            <span>•</span>
                            <span>GPA: {edu.gpa}</span>
                          </>
                        )}
                      </CardDescription>
                    </CardHeader>
                    {edu.description && (
                      <CardContent>
                        <p className="text-muted-foreground">{edu.description}</p>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    {t('skills')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {skillCategories.map(category => {
                    const categorySkills = getSkillsByCategory(category)
                    if (categorySkills.length === 0) return null

                    return (
                      <div key={category}>
                        <h4 className="font-semibold mb-3 capitalize">{category}</h4>
                        <div className="space-y-3">
                          {categorySkills.map(skill => (
                            <div key={skill.name}>
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-sm font-medium">{skill.name}</span>
                                <span className="text-xs text-muted-foreground capitalize">{skill.level}</span>
                              </div>
                              <div className="w-full bg-secondary rounded-full h-2">
                                <div
                                  className={cn(
                                    "h-2 rounded-full transition-all duration-300",
                                    getSkillLevelColor(skill.level),
                                    getSkillLevelWidth(skill.level)
                                  )}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </CardContent>
              </Card>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    {t('certifications')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {CERTIFICATIONS.map(cert => (
                    <div key={cert.id} className="border-l-2 border-primary pl-4">
                      <h4 className="font-semibold">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(cert.issueDate).toLocaleDateString()}
                        {cert.expiryDate && ` - ${new Date(cert.expiryDate).toLocaleDateString()}`}
                      </p>
                      {cert.credentialUrl && (
                        <Button asChild variant="link" size="sm" className="p-0 h-auto">
                          <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-1 h-3 w-3" />
                            View Credential
                          </a>
                        </Button>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
