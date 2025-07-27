import { useState, useEffect } from 'react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import arinaProject from '@/assets/arina-project.png';
import batikProject from '@/assets/batik-project.png';
import clickerProject from '@/assets/clicker-project.png';

interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  github: string;
  website: string;
  technologies: string[];
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 'arina',
    name: 'Arina',
    description: 'A next-generation web application for advanced agribusiness analysis, forecasting, and personalized recommendations, built with React (Vite), TypeScript, Tailwind CSS, and a Node.js/Express backend.',
    image: arinaProject,
    github: 'https://github.com/adsurkasur/Arina',
    website: 'https://app.arinaai.site',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'Tailwind CSS'],
    featured: true
  },
  {
    id: 'batik',
    name: 'Batik Beji Elegance Web',
    description: 'Official website for BATEJI batik business in Kota Batu, accessible at bateji.my.id, showcasing their products and brand.',
    image: batikProject,
    github: 'https://github.com/adsurkasur/batik-beji-elegance-web',
    website: 'https://bateji.my.id',
    technologies: ['Web Design', 'E-commerce', 'Branding']
  },
  {
    id: 'clicker',
    name: 'Sata Andagi Clicker',
    description: 'A fun tokenized clicker game inspired by Azumanga Daioh\'s Osaka, allowing users to earn $SANDAGI tokens on the Monad testnet.',
    image: clickerProject,
    github: 'https://github.com/adsurkasur/sata-andagi-clicker',
    website: 'https://sandagi.my.id',
    technologies: ['Game Development', 'Blockchain', 'Tokens']
  }
];

export const ProjectShowcase = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my latest work and creative solutions. Each project represents a unique challenge 
            and an opportunity to push the boundaries of what's possible.
          </p>
        </div>

        {/* Main Project Display */}
        <div className="max-w-6xl mx-auto mb-12 scroll-reveal">
          <Card className="glass-card hover-glow group overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={projects[activeProject].image}
                  alt={projects[activeProject].name}
                  className="w-full h-64 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Project Details */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                      {projects[activeProject].name}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {projects[activeProject].description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {projects[activeProject].technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button 
                      className="bg-gradient-primary hover:bg-gradient-secondary text-primary-foreground group/btn"
                      asChild
                    >
                      <a href={projects[activeProject].github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                        View Code
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-primary/30 hover:border-primary text-foreground hover:bg-primary/10 group/btn"
                      asChild
                    >
                      <a href={projects[activeProject].website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                        Open Website
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Project Navigation */}
        <div className="flex justify-center items-center gap-8 scroll-reveal">
          <Button
            variant="outline"
            size="sm"
            onClick={prevProject}
            className="border-primary/30 hover:border-primary hover:bg-primary/10"
          >
            Previous
          </Button>

          <div className="flex gap-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeProject
                    ? 'bg-primary scale-125 shadow-glow-primary'
                    : 'bg-muted hover:bg-primary/50'
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={nextProject}
            className="border-primary/30 hover:border-primary hover:bg-primary/10"
          >
            Next
          </Button>
        </div>

        {/* All Projects Grid */}
        <div className="mt-20 scroll-reveal">
          <h3 className="text-2xl font-bold text-center mb-8">Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project, index) => (
              <Card
                key={project.id}
                className={`glass-card hover-glow cursor-pointer group transition-all duration-300 ${
                  index === activeProject ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setActiveProject(index)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.name}
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Show All Projects Button */}
          <div className="flex justify-center mt-8">
            <Button
              variant="outline"
              className="border-primary/30 hover:border-primary text-foreground hover:bg-primary/10 px-8 py-3 group"
              asChild
            >
              <a href="https://github.com/adsurkasur" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                Show All Projects in GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};