'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/types';
import { useTranslations, useLocale } from 'next-intl';
import { useEffect, useState } from 'react';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const t = useTranslations('work');
  const locale = useLocale();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project?.id]);

  if (!project) return null;

  // Get localized content
  const title = locale === 'en' && project.titleEn ? project.titleEn : project.title;
  const fullDescription = locale === 'en' && project.fullDescriptionEn ? project.fullDescriptionEn : project.fullDescription;

  const images = project.gallery && project.gallery.length > 0
    ? project.gallery
    : [project.coverImage];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl my-8"
              style={{
                backgroundColor: 'var(--background)',
                borderRadius: '1.5rem',
                border: '1px solid var(--border)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  backgroundColor: 'var(--surface)',
                  color: 'var(--foreground)',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* Content */}
              <div className="p-6 md:p-8 space-y-6">
                {/* Image Gallery */}
                <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
                  <img
                    src={images[currentImageIndex]}
                    alt={`${title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />

                  {/* Gallery Navigation */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="15 18 9 12 15 6" />
                        </svg>
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </button>

                      {/* Dots Indicator */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className="w-2 h-2 rounded-full transition-all duration-300"
                            style={{
                              backgroundColor: index === currentImageIndex
                                ? 'white'
                                : 'rgba(255, 255, 255, 0.5)',
                            }}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Title and Badge */}
                <div className="flex items-start justify-between gap-4">
                  <h2
                    className="text-2xl md:text-3xl font-bold"
                    style={{ color: 'var(--foreground)' }}
                  >
                    {title}
                  </h2>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap"
                    style={{
                      backgroundColor: project.isPublic
                        ? 'rgba(34, 197, 94, 0.1)'
                        : 'rgba(239, 68, 68, 0.1)',
                      color: project.isPublic ? '#22c55e' : '#ef4444',
                      border: `1px solid ${project.isPublic ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
                    }}
                  >
                    {project.isPublic ? t('public') : t('private')}
                  </span>
                </div>

                {/* Description */}
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {fullDescription}
                </p>

                {/* Technologies */}
                <div>
                  <h3
                    className="text-sm font-semibold mb-3"
                    style={{ color: 'var(--foreground)' }}
                  >
                    {t('technologies')}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-full text-sm font-medium"
                        style={{
                          backgroundColor: 'var(--surface)',
                          color: 'var(--foreground)',
                          border: '1px solid var(--border)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links - Only show if public */}
                {project.isPublic && (project.githubUrl || project.youtubeUrl || project.liveUrl) && (
                  <div className="flex flex-wrap gap-3 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300"
                        style={{
                          backgroundColor: 'var(--surface)',
                          color: 'var(--foreground)',
                          border: '1px solid var(--border)',
                        }}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                        {t('viewGithub')}
                      </a>
                    )}
                    {project.youtubeUrl && (
                      <a
                        href={project.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300"
                        style={{
                          backgroundColor: 'var(--surface)',
                          color: 'var(--foreground)',
                          border: '1px solid var(--border)',
                        }}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                        </svg>
                        {t('watchDemo')}
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300"
                        style={{
                          backgroundColor: 'var(--primary)',
                          color: 'white',
                        }}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        {t('visitSite')}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

