import React, { useState, useEffect } from 'react';
import certificatesData from '@/data/certificates.json';
import { Award, Calendar, ExternalLink, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  link?: string;
  featured?: boolean;
}

export const ExperienceSection = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setCertificates(certificatesData as Certificate[]);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
      <div className="absolute bottom-1/2 right-1/2 transform translate-x-1/2 translate-y-1/2 w-96 h-96 bg-gradient-secondary rounded-full blur-3xl opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Experience & <span className="gradient-text">Certificates</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fostering continuous learning and development through certifications and diverse hands-on experiences.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-reveal">
          {certificates.map((cert, index) => (
            <Card
              key={cert.id}
              className={`glass-card hover-glow group transition-all duration-500 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${cert.featured ? 'ring-2 ring-primary/20' : ''}`}
              style={{ 
                transitionDelay: `${index * 150}ms`
              }}
            >
              <div className="p-6 space-y-4">
                {/* Certificate Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    {cert.featured && (
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-xs text-yellow-500 font-medium">Featured</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {cert.title}
                  </h3>
                  
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.issuer} • {cert.date}</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </div>

              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center scroll-reveal">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Always Learning</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in lifelong learning for personal and professional growth. 
              These certifications represent my dedication to continually enhancing my competencies and striving for excellence.
            </p>
            <div className="mt-8 flex justify-center">
              <Button
                variant="outline"
                size="lg"
                className="border-primary/30 hover:border-primary hover:bg-primary/10 group/btn w-full max-w-xs flex items-center justify-center gap-2"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/adsur/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* LinkedIn SVG Logo */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/>
                  </svg>
                  View Certificates in LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}