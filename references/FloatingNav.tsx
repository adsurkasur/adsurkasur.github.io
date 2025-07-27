import { useState, useEffect } from 'react';
import { Home, User, Briefcase, Code, Mail, Heart, GraduationCap } from 'lucide-react';

interface NavItem {
  id: string;
  icon: React.ReactNode;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'hero', icon: <Home />, label: 'Home' },
  { id: 'projects', icon: <Briefcase />, label: 'Projects' },
  { id: 'skills', icon: <Code />, label: 'Skills' },
  { id: 'education', icon: <GraduationCap />, label: 'Education' },
  { id: 'experience', icon: <User />, label: 'Experience' },
  { id: 'contact', icon: <Mail />, label: 'Contact' },
  { id: 'support-me', icon: <Heart />, label: 'Support Me' }
];

export const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Best practice: use the section whose top is closest to (but <=) the top of the viewport
        let candidate = null;
        let candidateTop = -Infinity;
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.boundingClientRect.top <= 0) {
            if (entry.boundingClientRect.top > candidateTop) {
              candidateTop = entry.boundingClientRect.top;
              candidate = entry.target.id;
            }
          }
        });
        if (candidate) {
          setActiveSection(candidate);
        } else {
          // If none are above, pick the first visible section
          const firstVisible = entries.find(entry => entry.isIntersecting);
          if (firstVisible) setActiveSection(firstVisible.target.id);
        }
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    navItems.forEach(item => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const targetId = sectionId === 'hero' ? 'home' : sectionId;
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`
        fixed z-50 transition-all duration-700
        md:right-6 md:top-1/2 md:-translate-y-1/2 md:flex md:flex-col
        md:opacity-100 md:translate-x-0
        ${isVisible ? 'opacity-100 md:translate-x-0' : 'opacity-0 md:translate-x-10'}
        bottom-4 left-1/2 -translate-x-1/2 flex flex-row md:bottom-auto md:left-auto md:translate-x-0
        w-auto
      `}
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
    >
      <div className="glass-card p-2 flex flex-row space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        {navItems.map((item, index) => {
          const isActive = activeSection === item.id || (item.id === 'hero' && activeSection === 'home');
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative group flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-primary text-primary-foreground shadow-glow-primary scale-110'
                  : 'bg-card/50 text-muted-foreground hover:text-primary hover:bg-primary/10 hover:scale-105'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`transition-transform duration-300 ${
                isActive ? 'scale-110' : 'group-hover:scale-110 group-hover:rotate-12'
              }`}>
                {item.icon}
              </div>
              {/* Tooltip: only show on desktop */}
              <div className={`hidden md:block absolute right-full mr-3 px-3 py-2 bg-card border border-primary/20 rounded-lg whitespace-nowrap text-sm transition-all duration-300 pointer-events-none ${
                isActive || 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
              }`}>
                {item.label}
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-2 h-2 bg-card border-r border-b border-primary/20 rotate-45" />
              </div>
            </button>
          );
        })}
      </div>
      {/* Progress indicator: only show on desktop */}
      <div className="hidden md:block absolute left-0 top-0 w-1 h-full bg-muted/30 rounded-full overflow-hidden">
        {(() => {
          const idx = navItems.findIndex(item =>
            item.id === activeSection || (item.id === 'hero' && activeSection === 'home')
          );
          const progress = idx >= 0 ? ((idx + 1) / navItems.length) * 100 : 0;
          return (
            <div
              className="w-full bg-gradient-primary transition-all duration-300 rounded-full"
              style={{ height: `${progress}%` }}
            />
          );
        })()}
      </div>
    </nav>
  );
};