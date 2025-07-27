import { useState, useEffect } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { ProjectShowcase } from '@/components/ProjectShowcase';
import { SkillsSection } from '@/components/SkillsSection';
import { EducationSection } from '@/components/EducationSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ContactSection } from '@/components/ContactSection';
import { SupportMeSection } from '@/components/SupportMeSection';
import { ContactCallToAction } from '@/components/ContactCallToAction';
import { FloatingNav } from '@/components/FloatingNav';
import { LoadingScreen } from '@/components/LoadingScreen';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Add scroll reveal animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all elements with scroll-reveal class
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [mounted]);

  const handleLoadingComplete = () => {
    setLoading(false);
    setTimeout(() => setMounted(true), 100);
  };

  if (loading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Floating Navigation */}
      <FloatingNav />
      
      {/* Main Content */}
      <main className={`transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Project Showcase */}
        <ProjectShowcase />
        
        {/* Skills Section */}
        <SkillsSection />
        
        {/* Education Section */}
        <EducationSection />

        {/* Experience Section */}
        <ExperienceSection />
        
        {/* Contact Section */}
        <ContactSection />

        {/* Support Me Section */}
        <SupportMeSection />
        
        {/* Contact Call To Action Section */}
        <ContactCallToAction />
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-primary/20 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 AdsurKasur. Crafted with{' '}
            <span className="text-primary animate-pulse">❤️</span>{' '}
            and lots of tea.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
