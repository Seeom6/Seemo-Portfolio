'use client';

import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Code,
  Globe,
  FileText,
  Palette,
  Link as LinkIcon
} from 'lucide-react';
import { ProjectLink } from '../../types/project';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';

interface ProjectLinksProps {
  links: ProjectLink[];
}

const linkIcons = {
  demo: ExternalLink,
  github: Code,
  website: Globe,
  documentation: FileText,
  figma: Palette,
  other: LinkIcon,
};

const linkColors = {
  demo: 'text-blue-600 hover:text-blue-700',
  github: 'text-gray-800 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-100',
  website: 'text-green-600 hover:text-green-700',
  documentation: 'text-purple-600 hover:text-purple-700',
  figma: 'text-pink-600 hover:text-pink-700',
  other: 'text-gray-600 hover:text-gray-700',
};

export function ProjectLinks({ links }: ProjectLinksProps) {
  const locale = useLocale() as 'en' | 'ar';
  const t = useTranslations('projects');
  const isRTL = locale === 'ar';

  if (links.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('links')}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {links.map((link, index) => {
            const Icon = linkIcons[link.type];
            const colorClass = linkColors[link.type];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
              >
                <Button
                  asChild
                  variant="outline"
                  className={`w-full justify-start gap-3 h-auto p-4 hover:shadow-sm transition-all duration-200 ${colorClass}`}
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="flex items-center gap-3 w-full">
                      <div className="flex-shrink-0">
                        <Icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                      </div>
                      
                      <div className={`flex-1 text-left ${isRTL ? 'text-right' : ''}`}>
                        <div className="font-medium text-sm">
                          {link.label || t(`linkTypes.${link.type}`)}
                        </div>
                        <div className="text-xs text-muted-foreground truncate">
                          {new URL(link.url).hostname}
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0">
                        <ExternalLink className={`h-4 w-4 opacity-50 group-hover:opacity-100 transition-all duration-200 ${
                          isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'
                        }`} />
                      </div>
                    </div>
                  </a>
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* Alternative: Compact Button Layout */}
        <div className="mt-6 pt-6 border-t border-border/50">
          <div className="flex flex-wrap gap-2">
            {links.map((link, index) => {
              const Icon = linkIcons[link.type];
              
              return (
                <motion.div
                  key={`compact-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <Button
                    asChild
                    size="sm"
                    variant="secondary"
                    className="gap-2 hover:scale-105 transition-transform duration-200"
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="h-4 w-4" />
                      {t(`linkTypes.${link.type}`)}
                    </a>
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
