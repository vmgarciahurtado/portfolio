'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import blogData from '@/data/blog.json';

interface BlogPost {
    id: string;
    title: string;
    titleEn: string;
    description: string;
    descriptionEn: string;
    url: string;
    date: string;
    readTime: string;
    tags: string[];
    image?: string;
    platform: string;
}

export function BlogSection() {
    const t = useTranslations('blog');
    const locale = useLocale();
    const posts = blogData as BlogPost[];

    return (
        <section
            id="blog"
            className="min-h-screen py-20 px-6"
            style={{ backgroundColor: 'var(--background)' }}
        >
            <div className="container-custom max-w-6xl mx-auto">
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

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.a
                            key={post.id}
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                            viewport={{ once: true }}
                            className="group block"
                        >
                            <div
                                className="relative rounded-3xl border overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col"
                                style={{
                                    backgroundColor: 'var(--surface)',
                                    borderColor: 'var(--border)',
                                }}
                            >
                                {/* Image Header */}
                                <div
                                    className="relative h-48 overflow-hidden"
                                >
                                    {/* Background Image */}
                                    {post.image ? (
                                        <img
                                            src={post.image}
                                            alt={locale === 'es' ? post.title : post.titleEn}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div
                                            className="w-full h-full"
                                            style={{
                                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                            }}
                                        />
                                    )}

                                    {/* Dark Overlay for better text visibility */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                                    {/* Medium Logo */}
                                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-sm text-white">
                                        {post.platform}
                                    </div>

                                    {/* Hover Overlay */}
                                    <div
                                        className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100"
                                    >
                                        <div className="px-4 py-2 rounded-full bg-white/90 text-gray-800 font-medium text-sm flex items-center gap-2">
                                            {t('readArticle')}
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="7" y1="17" x2="17" y2="7" />
                                                <polyline points="7 7 17 7 17 17" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex-1 flex flex-col">
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {post.tags.slice(0, 3).map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 rounded-full text-xs font-medium"
                                                style={{
                                                    backgroundColor: 'var(--primary)',
                                                    color: 'white',
                                                    opacity: 0.9
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors"
                                        style={{ color: 'var(--foreground)' }}
                                    >
                                        {locale === 'es' ? post.title : post.titleEn}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className="text-sm mb-4 line-clamp-3 flex-1"
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        {locale === 'es' ? post.description : post.descriptionEn}
                                    </p>

                                    {/* Footer */}
                                    <div
                                        className="flex items-center justify-between pt-4 border-t"
                                        style={{ borderColor: 'var(--border)' }}
                                    >
                                        <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                                            {post.date}
                                        </span>
                                        <span className="text-xs flex items-center gap-1" style={{ color: 'var(--text-secondary)' }}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="10" />
                                                <polyline points="12 6 12 12 16 14" />
                                            </svg>
                                            {post.readTime}
                                        </span>
                                    </div>
                                </div>

                                {/* Hover Border Effect */}
                                <motion.div
                                    className="absolute inset-0 rounded-3xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                    style={{ borderColor: 'var(--primary)' }}
                                />
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Empty State */}
                {posts.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center py-20"
                    >
                        <div
                            className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: 'var(--surface)' }}
                        >
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                            </svg>
                        </div>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            {t('noPosts')}
                        </p>
                    </motion.div>
                )}

                {/* View More on Medium */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://medium.com/@vmgarciahurtado"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium border transition-all duration-300 hover:scale-105"
                        style={{
                            backgroundColor: 'transparent',
                            color: 'var(--foreground)',
                            borderColor: 'var(--border)',
                        }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                        </svg>
                        {t('viewMore')}
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
