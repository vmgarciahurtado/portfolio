'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

interface TechCategory {
  icon: React.ReactNode;
  title: string;
  technologies: string[];
  color: string;
  gradient: string;
}

export function TechStackSection() {
  const t = useTranslations('techStack');

  const techCategories: TechCategory[] = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: 'Web Development',
      technologies: ['Flutter Web'],
      color: '#3B82F6',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
      title: 'Mobile Development',
      technologies: ['Flutter', 'Kotlin', 'Swift', 'Ionic'],
      color: '#10B981',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
      title: 'Backend',
      technologies: ['Python (FastAPI)', 'NodeJS', 'DartFrog'],
      color: '#F59E0B',
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27,6.96 12,12.01 20.73,6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      title: 'DevOps & Cloud',
      technologies: ['AWS (S3, EC2, Amplify)', 'Azure DevOps', 'Firebase', 'Docker'],
      color: '#8B5CF6',
      gradient: 'from-purple-500 to-violet-500'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
        </svg>
      ),
      title: 'Databases',
      technologies: ['PostgreSQL', 'SQLite', 'MongoDB', 'Firestore'],
      color: '#EF4444',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'AI & Automation',
      technologies: ['n8n', 'TensorFlow Lite', 'Augmented Reality', 'Voice Control', 'AI-Driven Development'],
      color: '#EC4899',
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section
      id="tech-stack"
      className="min-h-screen py-20 px-6"
      style={{ backgroundColor: 'var(--background)' }}
    >
      <div className="container-custom max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
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

        {/* Tech Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true }}
              className="group"
            >
              <div
                className="relative p-8 rounded-3xl border transition-all duration-300 hover:scale-105 hover:shadow-2xl group h-83 flex flex-col"
                style={{
                  backgroundColor: 'var(--background)',
                  borderColor: 'var(--border)',
                }}
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Category Icon */}
                <motion.div
                  className="mb-4 flex items-center justify-center w-14 h-14 rounded-2xl flex-shrink-0"
                  style={{
                    backgroundColor: `${category.color}15`,
                    color: category.color
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {category.icon}
                </motion.div>

                {/* Category Title */}
                <h3
                  className="text-xl font-bold mb-4 flex-shrink-0"
                  style={{ color: 'var(--foreground)' }}
                >
                  {category.title}
                </h3>

                {/* Technologies List */}
                <div className="space-y-3 flex-1 overflow-hidden">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: (index * 0.1) + (techIndex * 0.05) + 0.3
                      }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 group/tech"
                    >
                      {/* Tech Dot */}
                      <motion.div
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: category.color }}
                        whileHover={{ scale: 1.3 }}
                        transition={{ duration: 0.2 }}
                      />

                      {/* Tech Name */}
                      <span
                        className="text-sm font-medium transition-colors duration-200 group-hover/tech:opacity-80 truncate"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {tech}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Effect Border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ borderColor: category.color }}
                  initial={false}
                />

                {/* Tech Count Badge */}
                <motion.div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold"
                  style={{
                    backgroundColor: category.color,
                    color: 'white'
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  {category.technologies.length}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '6+', label: 'Categories' },
              { number: '10+', label: 'Technologies' },
              { number: '5+', label: 'Years Experience' },
              { number: '∞', label: 'Learning' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.8 + (index * 0.1),
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div
                  className="text-3xl md:text-4xl font-bold"
                  style={{ color: 'var(--primary)' }}
                >
                  {stat.number}
                </div>
                <div
                  className="text-sm font-medium"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
