import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { BookshelfSection } from '@/components/sections/BookshelfSection';
import { SocialLinks } from '@/components/ui/SocialLinks';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        
        {/* About en posición #2 */}
        <AboutSection />

        <section 
          id="work" 
          className="min-h-screen flex items-center justify-center"
          style={{ backgroundColor: 'var(--surface)' }}
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
              Work / Projects
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Componente en desarrollo...
            </p>
          </div>
        </section>

        <section id="tech-stack" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
              Tech Stack
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Componente en desarrollo...
            </p>
          </div>
        </section>

        <section 
          id="timeline" 
          className="min-h-screen flex items-center justify-center"
          style={{ backgroundColor: 'var(--surface)' }}
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
              Timeline
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Componente en desarrollo...
            </p>
          </div>
        </section>

        <section id="blog" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
              Blog
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Componente en desarrollo...
            </p>
          </div>
        </section>

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
