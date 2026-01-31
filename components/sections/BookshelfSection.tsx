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
      title: 'Atomic Habits',
      author: 'James Clear',
      coverImage: 'https://buybookbook.com/cdn/shop/files/9780735211292_800x.webp?v=1761041405',
      amazonUrl: 'https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299/ref=sr_1_3?adgrpid=99604171665&dib=eyJ2IjoiMSJ9.wyVInfqX21vnN5PcxoCBhEgPLp8dOzGW-vZgJMm0dlGRJr_KUYIbJBwSlDwztSCQ2i9jREECCG71Zehu-wneDbpokK_ES6U0t81eschKoSSeQbgSQIlapO8BtRbY5qvbPL9zpulUMH6rNci7K8Uj1QdHfYO3T90zROy_HWysaz4iDSiYQwwq93rQGpk8aZaIvb19pIlDueTgPZfg2dDWU0qDfwWSeKrg2kUsBSI_rqE.YaMkEqHuvr6oeCyGnJs7zkqQRK1D4EDqE9dc-ZhwrpY&dib_tag=se&hvadid=602503261892&hvdev=c&hvlocphy=9210622&hvnetw=g&hvqmt=e&hvrand=713375546893209558&hvtargid=kwd-728711807665&hydadcr=26452_11703456&keywords=h%C3%A1bitos+at%C3%B3micos&mcid=039ece96b25d3228995b30980ca1d3cf&qid=1769863211&sr=8-3'
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
      title: 'The Richest Man in Babylon',
      author: 'George S. Clason',
      coverImage: 'https://m.media-amazon.com/images/I/71VZub0QnLL._SL1500_.jpg',
      amazonUrl: 'https://www.amazon.com/Richest-Man-Babylon-Original-Classics/dp/1954839499/ref=sr_1_3_sspa?adgrpid=153013744690&dib=eyJ2IjoiMSJ9.Lm7H5LXdNamIwykMqAVSaT7chtKU73Hel6-gaH3xOTVvYp_uIkiwttRjSN0A1AlP4RcUEc0jzJl87VSFPk2iPzjaGqPoi-lgUdHRtXMHk9fJ68EouSclz186U-h_0_CqOFfA5USFjdzDm7eTzGQqBogrXN9wPMgkzrDUZSXw9XFsz4D6wOwp8374I6aA45Z3YvVOqrRoMXt2hFFsloxEE5F-tYE6iCIc8frXHT7Fchg.voVWVDHauEJgkKv-RLdkRmycOo-9pJLWz5pTr41s2Ts&dib_tag=se&hvadid=687788401366&hvdev=c&hvlocphy=9210622&hvnetw=g&hvqmt=e&hvrand=3914025801118426962&hvtargid=kwd-297036760789&hydadcr=13870_13560379&keywords=el+hombre+mas+rico+de+babilonia&mcid=00045d24c7993d239b49f191c5050c1e&qid=1769863401&sr=8-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'
    },
    {
      id: 4,
      title: 'The Odyssey',
      author: 'Homero',
      coverImage: 'https://m.media-amazon.com/images/I/61YUYPYlkzL._SL1360_.jpg',
      amazonUrl: 'https://www.amazon.com/Odisea-Spanish-Homero/dp/1539427692/ref=sr_1_1?adgrpid=124471280783&dib=eyJ2IjoiMSJ9.BDAEpXOyuppoGScevhi6G-QyPcSrJdsuHsgdTVrZvdUtBTfw59-WgcM1pYqIilToNBx4ViDPbNSBEAIp80TXd0GYyMF3k5vpsSVn3s6Ix6R4BD-3vx3A2ZPdZzy6w0QT_AvGvl2awyHog9Zp3QXMPuI22guhHySkkESGyJXs53LY5EEK_P75BlaS1Tb32vpVed2yKS94c6qXX01-vW25CGuqrj-0EmXBBn8YJN0UE1epxX0nNjqFLZ9qrBIa3F2VV3B1UM3oleb1gEMLK1wF5t0hz9SR7UQ06t9m8sruFjQ.dGtvbvrUgYJJj0PFj7aiZ6iq6zsaWx_ZFTI6k4EUjFw&dib_tag=se&hvadid=602503174739&hvdev=c&hvlocphy=9210622&hvnetw=g&hvqmt=e&hvrand=5671181789688490357&hvtargid=kwd-300118210680&hydadcr=23019_13539056&keywords=la+odisea&mcid=9d316455922b3f6c8e7e0d08b99687d4&qid=1769863673&sr=8-1'
    },
    {
      id: 5,
      title: 'The Secret Language of Numbers',
      author: 'Francis S. Collins',
      coverImage: 'https://m.media-amazon.com/images/I/61WH0odjATL._SL1483_.jpg',
      amazonUrl: 'https://www.amazon.com/-/es/El-lenguaje-secreto-los-n%C3%BAmeros/dp/8482985876'
    },
    {
      id: 6,
      title: 'The Way We Were Then',
      author: 'Ralph E. Braden',
      coverImage: 'https://pictures.abebooks.com/inventory/30532490906.jpg',
      amazonUrl: 'https://www.abebooks.com/Way-Book-1-Ralph-E-Braden/30532490906/bd'
    },
    {
      id: 7,
      title: 'Vendedores de Perros',
      author: 'Blair Singer',
      coverImage: 'https://http2.mlstatic.com/D_NQ_NP_2X_814911-MCO89002293070_082025-F.webp',
      amazonUrl: 'https://www.mercadolibre.com.co/vendedores-perros--nuevo-y-original-/up/MCOU3337841217#polycard_client=search-desktop&search_layout=grid&position=1&type=product&tracking_id=f1f21352-8df3-4101-99b8-75e6172074aa&wid=MCO2985355002&sid=search'
    },
    {
      id: 8,
      title: 'El Arte de la Guerra',
      author: 'Sun Tzu',
      coverImage: 'https://m.media-amazon.com/images/I/71U-+Ba1QQL._SL1499_.jpg',
      amazonUrl: 'https://www.amazon.com/Arte-Guerra-Sun-Tzu-Espa%C3%B1ol/dp/B0DWWM714X/ref=sr_1_5?adgrpid=147566827113&dib=eyJ2IjoiMSJ9.1m0TrXyo9J3b7wnUIkkAIE_q9WPwswkrzhAIuTgFh-PLCwN2DbmHWy5pM3u0QD0PI2yXcD7hL7lKEjrC6oLRknOrRKXjXIkwHxZ1GCTVj8bgDsEJkZvMdwbRc62V3eKU3mqSngaJfjzJXdV_jO-lcC4jMOEN6LAJDtDQu7aKyeMunhcI6jLYn8-Yb8JbY4pPiDLDRtMU_bzxqGdaXcgRbx_lTIZrEeIOi24vPKcDXUY.Y_LbiJQ-GeYu5u6hesF3O1btfkfoW7QF5f5eY8gz5m0&dib_tag=se&hvadid=673262916127&hvdev=c&hvlocphy=9210622&hvnetw=g&hvqmt=e&hvrand=14921856549229695256&hvtargid=kwd-342957785&hydadcr=20487_13497022&keywords=el+arte+de+la+guerra&mcid=44aeb41cf53230aba5c78ec98f670c13&qid=1769864385&sr=8-5'
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

