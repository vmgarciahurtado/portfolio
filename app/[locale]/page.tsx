import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        
        <section id="timeline" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
              Timeline
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Componente en desarrollo...
            </p>
          </div>
        </section>

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
          id="blog" 
          className="min-h-screen flex items-center justify-center"
          style={{ backgroundColor: 'var(--surface)' }}
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
              Blog
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Componente en desarrollo...
            </p>
          </div>
        </section>

        <section id="about" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
              About
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Componente en desarrollo...
            </p>
          </div>
        </section>
      </main>

      <footer 
        className="py-8 text-center"
        style={{ 
          backgroundColor: 'var(--surface)',
          borderTop: '1px solid var(--border)'
        }}
      >
        <p style={{ color: 'var(--text-secondary)' }}>
          © 2025 Portfolio. Todos los derechos reservados.
        </p>
      </footer>
    </>
  );
}
