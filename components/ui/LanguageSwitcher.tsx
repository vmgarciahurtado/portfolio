'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'es' : 'en';
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="relative w-10 h-10 rounded-full flex items-center justify-center
                 transition-colors duration-200"
      style={{ 
        backgroundColor: 'var(--surface)',
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle language"
    >
      <motion.span
        className="text-sm font-semibold"
        style={{ color: 'var(--foreground)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        key={locale}
      >
        {locale.toUpperCase()}
      </motion.span>
    </motion.button>
  );
}
