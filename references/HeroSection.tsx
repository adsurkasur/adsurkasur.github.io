import { useEffect, useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import developerAvatar from '@/assets/developer-avatar.jpg';

export const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "Hobbyist Web Developer",
    "Creative Student", 
    "Problem Solver",
    "Tech Enthusiast"
  ];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-space via-background to-secondary/20 animate-pulse opacity-50" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className={`container mx-auto px-6 z-10 transition-all duration-1000 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text animate-glow">
                  AdsurKasur
                </span>
              </h1>
              
              <div className="relative h-16 lg:h-20 overflow-hidden">
                <div 
                  className="absolute inset-0 transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateY(-${currentRole * 100}%)` }}
                >
                  {roles.map((role, index) => (
                    <div key={index} className="h-16 lg:h-20 flex items-center">
                      <h2 className="text-2xl lg:text-4xl font-medium text-muted-foreground">
                        {role}
                      </h2>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Welcome! I thrive on turning challenges into opportunities through a blend of scientific inquiry, 
              strategic thinking, and a love for technology. I'm always looking for the next exciting project. 
              Let's build the future together!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="group relative bg-gradient-primary hover:bg-gradient-secondary text-primary-foreground font-semibold px-8 py-6 text-lg hover-glow transition-all duration-300"
                asChild
              >
                <a href="https://github.com/adsurkasur" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  View GitHub Profile
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="group bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary text-foreground hover:bg-primary/10 px-8 py-6 text-lg transition-all duration-300"
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                <ExternalLink className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                Explore Projects
              </Button>
            </div>
          </div>

          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="relative group hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-pulse group-hover:opacity-50 transition-opacity duration-500" />
              <img
                src={developerAvatar}
                alt="AdsurKasur Developer Avatar"
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary/30 shadow-glow-primary group-hover:border-primary/50 transition-all duration-500"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-primary/10 to-accent/20 pointer-events-none group-hover:via-primary/20 group-hover:to-accent/30 transition-all duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};