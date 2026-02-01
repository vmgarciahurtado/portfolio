'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { TimelineItem } from '@/types';
import { useLocale, useTranslations } from 'next-intl';

interface TimelineCardProps {
  item: TimelineItem;
  position: { x: number; y: number };
  isLeft: boolean;
  isActive: boolean;
  onActivate: () => void;
}

export function TimelineCard({ item, position, isLeft, isActive, onActivate }: TimelineCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const locale = useLocale();
  const t = useTranslations('timeline');

  // Get localized content
  const title = locale === 'en' && item.titleEn ? item.titleEn : item.title;
  const description = locale === 'en' && item.descriptionEn ? item.descriptionEn : item.description;
  const date = locale === 'en' && item.dateEn ? item.dateEn : item.date;

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'graduation':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        );
      case 'briefcase':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        );
      default:
        return null;
    }
  };

  const colors = {
    work: {
      bg: '#10B981',
      light: '#10B98115'
    },
    education: {
      bg: '#3B82F6',
      light: '#3B82F615'
    }
  };

  const currentColors = colors[item.type];

  return (
    <motion.div
      className="relative mx-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Connector Line */}
      <motion.div
        className="absolute w-0.5 h-6 mx-auto"
        style={{
          backgroundColor: currentColors.bg,
          left: '50%',
          top: '-24px',
          transform: 'translateX(-50%)',
        }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      />

      {/* Card */}
      <motion.div
        className="relative cursor-pointer group text-center"
        onClick={() => {
          setIsExpanded(!isExpanded);
          onActivate();
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          width: isExpanded ? '280px' : '200px',
        }}
      >
        {/* Card Content */}
        <div
          className="relative p-3 rounded-lg border transition-all duration-300"
          style={{
            backgroundColor: 'var(--background)',
            borderColor: isActive ? currentColors.bg : 'var(--border)',
            boxShadow: isActive
              ? `0 6px 20px ${currentColors.light}`
              : '0 2px 10px rgba(0,0,0,0.1)',
          }}
        >
          {/* Type Badge */}
          <div
            className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 px-2 py-0.5 rounded-full text-xs font-bold text-white"
            style={{ backgroundColor: currentColors.bg }}
          >
            {item.type === 'work' ? t('work') : t('education')}
          </div>

          {/* Icon */}
          <motion.div
            className="w-6 h-6 rounded-md flex items-center justify-center mb-2 mx-auto"
            style={{ backgroundColor: currentColors.light, color: currentColors.bg }}
            whileHover={{ rotate: 5 }}
          >
            {getIcon(item.icon)}
          </motion.div>

          {/* Title */}
          <h3
            className="text-sm font-bold mb-1"
            style={{ color: 'var(--foreground)' }}
          >
            {title}
          </h3>

          {/* Organization */}
          <p
            className="text-xs font-medium mb-1"
            style={{ color: currentColors.bg }}
          >
            {item.organization}
          </p>

          {/* Date */}
          <p
            className="text-xs mb-2"
            style={{ color: 'var(--text-secondary)' }}
          >
            {date}
          </p>

          {/* Description - Only show when expanded */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Expand Indicator */}
          <motion.div
            className="mt-2 flex justify-center"
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}