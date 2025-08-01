'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ProjectTechnology } from '../../types/project';
import { Badge } from '../../components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';

interface ProjectTechStackProps {
  technologies: ProjectTechnology[];
}

export function ProjectTechStack({ technologies }: ProjectTechStackProps) {
  // const locale = useLocale() as 'en' | 'ar';
  const t = useTranslations('projects');
  
  // Group technologies by category
  const groupedTechnologies = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<string, ProjectTechnology[]>);

  const categoryOrder: ProjectTechnology['category'][] = [
    'frontend',
    'backend',
    'database',
    'deployment',
    'design',
    'other'
  ];

  const orderedCategories = categoryOrder.filter(category => 
    groupedTechnologies[category]?.length > 0
  );

  if (technologies.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>{t('technologies')}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {orderedCategories.map((category, categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: categoryIndex * 0.1 }}
            className="space-y-3"
          >
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              {t(`techCategories.${category}`)}
            </h4>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {groupedTechnologies[category].map((tech, techIndex) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.2, 
                    delay: categoryIndex * 0.1 + techIndex * 0.05 
                  }}
                  className="group"
                >
                  <div 
                    className="flex flex-col items-center p-3 rounded-lg border border-border/50 hover:border-border transition-all duration-200 hover:shadow-sm bg-background/50"
                    style={{
                      backgroundColor: tech.color ? `${tech.color}08` : undefined,
                      borderColor: tech.color ? `${tech.color}20` : undefined
                    }}
                  >
                    {/* Technology Icon */}
                    {tech.icon && (
                      <div className="relative w-8 h-8 mb-2 group-hover:scale-110 transition-transform duration-200">
                        <Image
                          src={tech.icon}
                          alt={`${tech.name} icon`}
                          fill
                          className="object-contain"
                          sizes="32px"
                        />
                      </div>
                    )}
                    
                    {/* Technology Name */}
                    <span 
                      className="text-xs font-medium text-center leading-tight"
                      style={{ color: tech.color || undefined }}
                    >
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Alternative: Simple Badge Layout */}
        <div className="pt-4 border-t border-border/50">
          <h4 className="text-sm font-semibold text-muted-foreground mb-3">
            {t('technologies')} ({technologies.length})
          </h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                <Badge 
                  variant="secondary"
                  className="text-xs font-medium hover:scale-105 transition-transform duration-200"
                  style={{
                    backgroundColor: tech.color ? `${tech.color}15` : undefined,
                    borderColor: tech.color ? `${tech.color}30` : undefined,
                    color: tech.color || undefined
                  }}
                >
                  {tech.icon && (
                    <div className="relative w-3 h-3 mr-1.5">
                      <Image
                        src={tech.icon}
                        alt=""
                        fill
                        className="object-contain"
                        sizes="12px"
                      />
                    </div>
                  )}
                  {tech.name}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
