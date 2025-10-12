'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface Book {
  id: number;
  title: string;
  author: string;
  coverImage: string;
  amazonUrl: string;
}

export function BookshelfSection() {
  const t = useTranslations('bookshelf');
  const [hoveredBook, setHoveredBook] = useState<number | null>(null);

  const books: Book[] = [
    {
      id: 1,
      title: 'Clean Code',
      author: 'Robert C. Martin',
      coverImage: 'https://m.media-amazon.com/images/I/51E2055ZGUL._SY445_SX342_.jpg',
      amazonUrl: 'https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882'
    },
    {
      id: 2,
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      coverImage: 'https://m.media-amazon.com/images/I/51cUVaBWZzL._SY445_SX342_.jpg',
      amazonUrl: 'https://www.amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052'
    },
    {
      id: 3,
      title: 'Design Patterns',
      author: 'Gang of Four',
      coverImage: 'https://m.media-amazon.com/images/I/51szD9HC9pL._SY445_SX342_.jpg',
      amazonUrl: 'https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612'
    },
    {
      id: 4,
      title: 'Refactoring',
      author: 'Martin Fowler',
      coverImage: 'https://m.media-amazon.com/images/I/51ttgxwzArL._SY445_SX342_.jpg',
      amazonUrl: 'https://www.amazon.com/Refactoring-Improving-Existing-Addison-Wesley-Signature/dp/0134757599'
    },
    {
      id: 5,
      title: 'JavaScript: The Good Parts',
      author: 'Douglas Crockford',
      coverImage: 'https://m.media-amazon.com/images/I/5181yVznHrL._SY445_SX342_.jpg',
      amazonUrl: 'https://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742'
    },
    {
      id: 6,
      title: 'You Don\'t Know JS',
      author: 'Kyle Simpson',
      coverImage: 'https://m.media-amazon.com/images/I/41T5H8u7fUL._SY445_SX342_.jpg',
      amazonUrl: 'https://www.amazon.com/You-Dont-Know-JS-Yet/dp/B084BNMN7T'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const bookVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section 
      id="bookshelf" 
      className="min-h-screen py-20 px-6"
      style={{ backgroundColor: 'var(--surface)' }}
    >
      <div className="container-custom max-w-6xl mx-auto">
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12"
        >
          {books.map((book) => (
            <motion.a
              key={book.id}
              href={book.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              variants={bookVariants}
              onMouseEnter={() => setHoveredBook(book.id)}
              onMouseLeave={() => setHoveredBook(null)}
              className="relative group cursor-pointer"
              style={{ perspective: '1200px' }}
            >
              <motion.div
                className="relative w-full"
                style={{
                  transformStyle: 'preserve-3d',
                  height: '280px',
                }}
              >
                {/* Back cover (barely visible) */}
                <div
                  className="absolute inset-0 bg-gray-700 rounded-l-lg"
                  style={{
                    transform: 'translateZ(-2px)',
                  }}
                />

                {/* Book Thickness/Spine - Visible on the left */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-gray-400 to-gray-300 rounded-l-md"
                  style={{
                    width: '24px',
                    transform: 'translateZ(-12px) rotateY(90deg)',
                    transformOrigin: 'left center',
                    boxShadow: 'inset -2px 0 8px rgba(0,0,0,0.3)',
                  }}
                  animate={{
                    opacity: hoveredBook === book.id ? 0.3 : 1,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: 'easeInOut',
                  }}
                >
                  {/* Spine text decoration */}
                  <div className="h-full flex items-center justify-center">
                    <div className="w-0.5 h-[90%] bg-black/20 rounded" />
                  </div>
                </motion.div>

                {/* Book Pages (visible when opened) */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white rounded-r-lg border-l-2 border-gray-200"
                  style={{
                    transformOrigin: 'left center',
                  }}
                  animate={{
                    rotateY: hoveredBook === book.id ? 0 : -25,
                    translateX: hoveredBook === book.id ? 0 : -10,
                    translateZ: 8,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: 'easeInOut',
                  }}
                >
                  {/* Page lines */}
                  <div className="p-4 pt-8 space-y-2 opacity-60">
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i}
                        className="h-1 bg-gray-400 rounded"
                        style={{
                          width: `${85 - i * 2}%`,
                          marginLeft: '8px',
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Page shadow effect */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-transparent pointer-events-none"
                  />
                </motion.div>

                {/* Book Cover */}
                <motion.div
                  className="absolute inset-0 rounded-r-lg overflow-hidden"
                  style={{
                    transformOrigin: 'left center',
                  }}
                  animate={{
                    rotateY: hoveredBook === book.id ? 0 : -35,
                    translateX: hoveredBook === book.id ? 0 : -15,
                    translateZ: 16,
                    boxShadow: hoveredBook === book.id 
                      ? '0 5px 20px rgba(0,0,0,0.2)'
                      : '0 25px 50px rgba(0,0,0,0.4), -5px 0 15px rgba(0,0,0,0.3)',
                  }}
                  transition={{
                    duration: 0.4,
                    ease: 'easeInOut',
                  }}
                >
                  {/* Book Cover Image */}
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  
                  {/* Inner shadow on the left edge */}
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/40 to-transparent pointer-events-none"
                    animate={{
                      opacity: hoveredBook === book.id ? 0 : 1,
                    }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  />

                  {/* Book Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-r-lg pointer-events-none"
                    animate={{
                      opacity: hoveredBook === book.id ? 0.5 : 0.2,
                    }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  />
                </motion.div>
              </motion.div>

              {/* Hover indicator */}
              <motion.div
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: hoveredBook === book.id ? 1 : 0,
                  y: hoveredBook === book.id ? 0 : -10,
                }}
                transition={{ duration: 0.3 }}
              >
                <span 
                  className="text-xs font-medium"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {t('clickToView')}
                </span>
              </motion.div>
            </motion.a>
          ))}
        </motion.div>

        {/* Decorative dots like in Joan's page */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 mt-16"
        >
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: 'var(--text-secondary)', opacity: 0.5 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

