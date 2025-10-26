'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { TimelineItem } from '@/types';
import timelineData from '@/data/timeline.json';

export default function TimelineSection() {
  const t = useTranslations('timeline');
  const items = timelineData as TimelineItem[];
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section 
      id="timeline" 
      className="py-20 px-6"
      style={{ backgroundColor: 'var(--surface)' }}
    >
      <div className="container-custom max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: 'var(--foreground)' }}
          >
            {t('title')}
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Simple Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 w-0.5 h-full" style={{ backgroundColor: 'var(--border)' }} />

          {/* Timeline Items */}
          <div className="space-y-8">
            {items.map((item, index) => {
              const colors = {
                work: { bg: '#10B981', light: '#10B98115' },
                education: { bg: '#3B82F6', light: '#3B82F615' }
              };
              const currentColors = colors[item.type];
              const isEven = index % 2 === 0;

              const getIcon = (iconType: string) => {
                switch (iconType) {
                  case 'graduation':
                    return (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                      </svg>
                    );
                  case 'briefcase':
                    return (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                      </svg>
                    );
                  default:
                    return null;
                }
              };

              return (
                <motion.div
                  key={item.id}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  {/* Item Content */}
                  <div className={`flex items-center md:justify-between ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    {/* Left/Right Card */}
                    <div className="md:w-[calc(50%-60px)]">
                      <motion.div
                        className={`rounded-2xl border cursor-pointer transition-all duration-300 ${
                          expandedId === item.id ? 'p-6' : 'p-4'
                        }`}
                        style={{
                          backgroundColor: 'var(--background)',
                          borderColor: expandedId === item.id ? currentColors.bg : 'var(--border)',
                          boxShadow: expandedId === item.id ? `0 0 0 3px ${currentColors.light}` : 'none',
                        }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Badge */}
                        <div
                          className="inline-block px-2 py-0.5 rounded-full text-xs font-bold mb-2"
                          style={{ backgroundColor: currentColors.bg, color: 'white' }}
                        >
                          {item.type === 'work' ? 'Work' : 'Education'}
                        </div>

                        {/* Title */}
                        <h3 className={`font-bold mb-1 truncate`} style={{ color: 'var(--foreground)' }}>
                          {item.title}
                        </h3>

                        {/* Organization */}
                        <p className="text-xs font-medium mb-1" style={{ color: currentColors.bg }}>
                          {item.organization}
                        </p>

                        {/* Date */}
                        <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                          {item.date}
                        </p>

                        {/* Expandable Description */}
                        <AnimatePresence>
                          {expandedId === item.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden mt-4 pt-4 border-t"
                              style={{ borderColor: 'var(--border)' }}
                            >
                              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                {item.description}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Expand Indicator */}
                        <motion.div
                          className="mt-3 flex items-center justify-center"
                          animate={{ rotate: expandedId === item.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ color: 'var(--text-secondary)' }}
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Center Connector (Desktop) */}
                    <div className="hidden md:flex items-center justify-center w-[120px]">
                      {/* Timeline Dot */}
                      <motion.div
                        className="relative flex items-center justify-center w-12 h-12 rounded-full border-4"
                        style={{
                          backgroundColor: currentColors.bg,
                          borderColor: 'var(--background)',
                          boxShadow: `0 0 0 4px ${currentColors.light}`,
                        }}
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div style={{ color: 'white' }}>
                          {getIcon(item.icon)}
                        </div>
                      </motion.div>
                    </div>

                    {/* Right/Left Spacer for alignment */}
                    <div className="md:w-[calc(50%-60px)]" />
                  </div>

                  {/* Mobile Timeline Dot */}
                  <div className="md:hidden absolute left-0 top-6 -translate-x-1/2">
                    <div
                      className="w-8 h-8 rounded-full border-4 flex items-center justify-center"
                      style={{
                        backgroundColor: currentColors.bg,
                        borderColor: 'var(--background)',
                      }}
                    >
                      <div style={{ color: 'white' }}>
                        {getIcon(item.icon)}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}