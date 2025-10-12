'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';

const navItems = [
  { id: 'about', href: '#about' },
  { id: 'work', href: '#work' },
  { id: 'techStack', href: '#tech-stack' },
  { id: 'timeline', href: '#timeline' },
  { id: 'blog', href: '#blog' },
  { id: 'bookshelf', href: '#bookshelf' },
];

export function Navbar() {
  const t = useTranslations('nav');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-apple' : ''
      }`}
      style={{
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        backgroundColor: isScrolled ? 'var(--nav-bg)' : 'transparent',
      }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            className="text-xl md:text-2xl font-bold"
            style={{ color: 'var(--foreground)' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Portfolio
          </motion.a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: 'var(--text-secondary)' }}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {t(item.id as any)}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
