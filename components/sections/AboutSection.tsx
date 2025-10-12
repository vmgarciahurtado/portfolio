'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export function AboutSection() {
  const t = useTranslations('about');

  return (
    <section 
      id="about" 
      className="min-h-screen py-20 px-6 flex items-center"
    >
      <div className="container-custom max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
        >
          {/* Columna izquierda - Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]"
              >
                <img
                  src="/victor.jpg"
                  alt="Víctor García"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
                {/* Overlay decorativo */}
                <div 
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, transparent 100%)',
                  }}
                />
              </motion.div>
              
              {/* Decoración de fondo */}
              <div 
                className="absolute -z-10 top-6 left-6 w-full h-full rounded-2xl"
                style={{ 
                  backgroundColor: 'var(--primary)',
                  opacity: 0.1,
                }}
              />
            </div>
          </motion.div>

          {/* Columna derecha - Texto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div 
                  className="w-12 h-0.5 rounded-full"
                  style={{ backgroundColor: 'var(--primary)' }}
                />
                <motion.h2 
                  className="text-2xl md:text-3xl font-semibold tracking-tight"
                  style={{ color: 'var(--foreground)' }}
                >
                  {t('title')}
                </motion.h2>
              </div>
            </div>

            <motion.div 
              className="space-y-4 text-lg leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              <p>{t('paragraph1')}</p>
              <p>{t('paragraph2')}</p>
              <p>{t('paragraph3')}</p>
            </motion.div>

            {/* Skills/Highlights */}
            <motion.div 
              className="flex flex-wrap gap-3 pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              {['Full Stack', 'React', 'Next.js', 'Node.js', 'TypeScript'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: 'var(--surface)',
                    color: 'var(--foreground)',
                  }}
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* Botones CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#work"
                className="inline-block mt-6 px-8 py-4 text-lg font-medium rounded-full transition-all duration-300"
                style={{
                  backgroundColor: 'var(--primary)',
                  color: 'white',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('cta')}
              </motion.a>
              
              <motion.a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 mt-6 px-8 py-4 text-lg font-medium rounded-full transition-all duration-300"
                style={{
                  backgroundColor: 'transparent',
                  color: 'var(--foreground)',
                  border: '2px solid var(--primary)',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                {t('downloadCV')}
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

