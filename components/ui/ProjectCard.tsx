'use client';

import { motion } from 'framer-motion';
import { Project } from '@/types';
import { useTranslations, useLocale } from 'next-intl';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const t = useTranslations('work');
  const locale = useLocale();

  // Get localized content
  const title = locale === 'en' && project.titleEn ? project.titleEn : project.title;
  const shortDescription = locale === 'en' && project.shortDescriptionEn ? project.shortDescriptionEn : project.shortDescription;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div
        className="relative overflow-hidden rounded-2xl transition-all duration-300"
        style={{
          backgroundColor: 'var(--surface)',
          border: '1px solid var(--border)',
        }}
      >
        {/* Cover Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={project.coverImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Public/Private Badge */}
          <div className="absolute top-4 right-4">
            <span
              className="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md"
              style={{
                backgroundColor: project.isPublic
                  ? 'rgba(34, 197, 94, 0.2)'
                  : 'rgba(239, 68, 68, 0.2)',
                color: project.isPublic ? '#22c55e' : '#ef4444',
                border: `1px solid ${project.isPublic ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
              }}
            >
              {project.isPublic ? t('public') : t('private')}
            </span>
          </div>

          {/* Hover Overlay */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-white text-lg font-medium">
              {t('viewDetails')}
            </span>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <h3
            className="text-xl md:text-2xl font-bold line-clamp-1"
            style={{ color: 'var(--foreground)' }}
          >
            {title}
          </h3>

          <p
            className="text-sm md:text-base line-clamp-2"
            style={{ color: 'var(--text-secondary)' }}
          >
            {shortDescription}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: 'var(--background)',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border)',
                }}
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  color: 'var(--text-secondary)',
                }}
              >
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

