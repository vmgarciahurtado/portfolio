import { setRequestLocale } from 'next-intl/server';
import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { WorkSection } from '@/components/sections/WorkSection';
import { TechStackSection } from '@/components/sections/TechStackSection';
import TimelineSection from '@/components/sections/TimelineSection';
import { BlogSection } from '@/components/sections/BlogSection';
import { BookshelfSection } from '@/components/sections/BookshelfSection';
import { SocialLinks } from '@/components/ui/SocialLinks';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />

        {/* About en posición #2 */}
        <AboutSection />

        {/* Work/Projects Section */}
        <WorkSection />

        {/* Tech Stack Section */}
        <TechStackSection />

        {/* Timeline Section */}
        <TimelineSection />

        {/* Blog Section */}
        <BlogSection />

        <BookshelfSection />
      </main>

      <footer
        className="py-12 text-center"
        style={{
          backgroundColor: 'var(--surface)',
          borderTop: '1px solid var(--border)'
        }}
      >
        <div className="container-custom max-w-6xl mx-auto space-y-6">
          <SocialLinks className="justify-center" iconSize={24} />
          <p style={{ color: 'var(--text-secondary)' }}>
            © 2025 Portfolio. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
