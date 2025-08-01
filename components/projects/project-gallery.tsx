'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { Project } from '../../types/project';
import { Button } from '../../components/ui/button';
import { Dialog, DialogContent } from '../../components/ui/dialog';

interface ProjectGalleryProps {
  project: Project;
}

export function ProjectGallery({ project }: ProjectGalleryProps) {
  const locale = useLocale() as 'en' | 'ar';
  const t = useTranslations('projects');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState<{ [key: number]: boolean }>({});
  
  const translation = project.translations[locale];
  const isRTL = locale === 'ar';

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const newIndex = direction === 'next' 
      ? (selectedImage + 1) % project.images.length
      : (selectedImage - 1 + project.images.length) % project.images.length;
    
    setSelectedImage(newIndex);
  };

  const handleImageLoad = (index: number) => {
    setImageLoaded(prev => ({ ...prev, [index]: true }));
  };

  if (!project.images.length) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">{t('gallery')}</h3>
        
        {/* Main Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-border/50 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={translation.images[index]?.alt || image.alt}
                fill
                className={`object-cover transition-all duration-300 group-hover:scale-105 ${
                  imageLoaded[index] ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => handleImageLoad(index)}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center space-y-2">
                  <ZoomIn className="h-8 w-8 mx-auto" />
                  <p className="text-sm font-medium">
                    {translation.images[index]?.caption || 'View Image'}
                  </p>
                </div>
              </div>

              {/* Loading Skeleton */}
              {!imageLoaded[index] && (
                <div className="absolute inset-0 bg-muted animate-pulse" />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-7xl w-full h-full max-h-[90vh] p-0 bg-black/95 border-none">
          <div className="relative w-full h-full flex items-center justify-center">
            {selectedImage !== null && (
              <>
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
                  onClick={closeLightbox}
                >
                  <X className="h-6 w-6" />
                </Button>

                {/* Navigation Buttons */}
                {project.images.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`absolute top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 ${
                        isRTL ? 'right-4' : 'left-4'
                      }`}
                      onClick={() => navigateImage(isRTL ? 'next' : 'prev')}
                    >
                      {isRTL ? <ChevronRight className="h-6 w-6" /> : <ChevronLeft className="h-6 w-6" />}
                    </Button>
                    
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`absolute top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 ${
                        isRTL ? 'left-4' : 'right-4'
                      }`}
                      onClick={() => navigateImage(isRTL ? 'prev' : 'next')}
                    >
                      {isRTL ? <ChevronLeft className="h-6 w-6" /> : <ChevronRight className="h-6 w-6" />}
                    </Button>
                  </>
                )}

                {/* Image */}
                <div className="relative w-full h-full flex items-center justify-center p-8">
                  <div className="relative max-w-full max-h-full">
                    <Image
                      src={project.images[selectedImage].src}
                      alt={translation.images[selectedImage]?.alt || project.images[selectedImage].alt}
                      width={project.images[selectedImage].width || 1200}
                      height={project.images[selectedImage].height || 800}
                      className="max-w-full max-h-full object-contain"
                      priority
                    />
                  </div>
                </div>

                {/* Image Caption */}
                {translation.images[selectedImage]?.caption && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50">
                    <div className="bg-black/80 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
                      <p className="text-sm text-center max-w-md">
                        {translation.images[selectedImage].caption}
                      </p>
                    </div>
                  </div>
                )}

                {/* Image Counter */}
                {project.images.length > 1 && (
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50">
                    <div className="bg-black/80 text-white px-3 py-1 rounded-full backdrop-blur-sm">
                      <span className="text-sm">
                        {selectedImage + 1} / {project.images.length}
                      </span>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
