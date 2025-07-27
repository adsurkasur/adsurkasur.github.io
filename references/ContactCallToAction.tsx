import React from 'react';
import { Mail, Github, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export const ContactCallToAction: React.FC = () => (
  <section id="contact-cta" className="py-20 relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center scroll-reveal">
          <Card className="glass-card p-12 hover-glow">
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center animate-pulse">
                  <Heart className="w-10 h-10 text-primary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  Ready to Start Something Amazing?
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Whether it's a collaborative project, a job opportunity, or just a friendly chat about technology, I'd love to hear from you. Let's create something extraordinary together!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:bg-gradient-secondary text-primary-foreground font-semibold px-8 py-6 text-lg group"
                  asChild
                >
                  <a href="mailto:adesur2706@gmail.com">
                    <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                    Send Message
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary/30 hover:border-primary text-foreground hover:bg-primary/10 px-8 py-6 text-lg group"
                  asChild
                >
                  <a href="https://github.com/adsurkasur" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                    Follow on GitHub
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
);
