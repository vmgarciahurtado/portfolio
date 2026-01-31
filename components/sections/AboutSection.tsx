'use client';

import { useTranslations } from 'next-intl';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export function AboutSection() {
  const t = useTranslations('about');
  const sectionRef = useRef<HTMLElement>(null);

  // Array of profile images
  const profileImages = [
    '/images/me/me2.jpg',
    '/images/me/me3.jpg',
    '/images/me/victor.jpg',
  ];

  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen py-20 px-6 flex items-center overflow-hidden"
    >
      {/* Background decorative gradient */}
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-[0.03]"
        style={{
          y,
          background: `radial-gradient(circle, var(--primary) 0%, transparent 70%)`,
        }}
      />

      <div className="container-custom max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image Stack Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative order-1 md:order-1"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Image stack - always spread */}
              <AnimatePresence mode="sync">
                {profileImages.map((image, index) => {
                  const isActive = activeImageIndex === index;

                  // Calculate spread positions
                  const getSpreadPosition = (imgIndex: number) => {
                    switch (imgIndex) {
                      case 0: return { y: -80, x: -100 };
                      case 1: return { y: 80, x: 0 };
                      case 2: return { y: -80, x: 100 };
                      default: return { y: 0, x: 0 };
                    }
                  };

                  const spreadPos = getSpreadPosition(index);

                  return (
                    <motion.div
                      key={`${image}-${index}`}
                      className="absolute inset-0"
                      initial={{
                        scale: 0.85,
                        rotateZ: 0,
                        y: spreadPos.y,
                        x: spreadPos.x,
                        opacity: 1,
                        zIndex: isActive ? 1000 : 1,
                      }}
                      animate={{
                        scale: isActive ? 1 : 0.85,
                        rotateZ: 0,
                        y: isActive ? 0 : spreadPos.y,
                        x: isActive ? 0 : spreadPos.x,
                        opacity: 1,
                        zIndex: isActive ? 1000 : 1,
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      <motion.div
                        className="relative w-full h-full rounded-3xl overflow-hidden cursor-pointer"
                        whileHover={{ scale: isActive ? 1 : 1.05 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => {
                          setActiveImageIndex(index);
                        }}
                        style={{
                          boxShadow: isActive
                            ? '0 25px 50px rgba(0,0,0,0.3)'
                            : '0 15px 30px rgba(0,0,0,0.12)',
                          border: '3px solid',
                          borderColor: isActive ? 'var(--primary)' : 'var(--border)',
                        }}
                      >
                        <img
                          src={image}
                          alt={`Víctor García ${index + 1}`}
                          className="w-full h-full object-cover"
                          style={{
                            filter: isActive ? 'grayscale(0%)' : 'grayscale(60%) brightness(0.7)',
                          }}
                        />

                        {/* Gradient overlay */}
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            background: isActive
                              ? 'linear-gradient(135deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.05) 100%)'
                              : 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)',
                          }}
                        />
                      </motion.div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6 order-2 md:order-2"
          >
            {/* Title */}
            <div className="space-y-4">
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                style={{ color: 'var(--foreground)' }}
              >
                {t('title')}
              </motion.h2>
              <motion.div
                className="w-20 h-1 rounded-full"
                style={{ backgroundColor: 'var(--primary)' }}
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              />
            </div>

            {/* Description */}
            <motion.div
              className="space-y-4 text-base md:text-lg leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              <p>{t('paragraph1')}</p>
              <p>{t('paragraph2')}</p>
              <p>{t('paragraph3')}</p>
            </motion.div>


            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                href="#work"
                className="flex items-center gap-2 px-8 py-4 rounded-full font-medium transition-all duration-300"
                style={{
                  backgroundColor: 'var(--primary)',
                  color: 'white',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('cta')}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </motion.a>

              <motion.a
                href="https://drive.google.com/file/d/1RaRgJmkTyfFhjdLbBRKDf3v9NahvVD0J/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-full font-medium border transition-all duration-300"
                style={{
                  backgroundColor: 'transparent',
                  color: 'var(--foreground)',
                  borderColor: 'var(--border)',
                }}
                whileHover={{ scale: 1.05, borderColor: 'var(--primary)' }}
                whileTap={{ scale: 0.98 }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

