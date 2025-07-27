import { Mail, Linkedin, Twitter, Github, Send, Instagram } from 'lucide-react';
import TwitterXLogo from '@/assets/twitter-x.svg';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ContactItem {
  name: string;
  icon: React.ReactNode;
  href: string;
  label: string;
  color: string;
}

const contacts: ContactItem[] = [
  {
    name: 'Email',
    icon: <Mail />,
    href: 'mailto:adesur2706@gmail.com',
    label: 'adesur2706@gmail.com',
    color: 'hover:text-red-400'
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin />,
    href: 'https://www.linkedin.com/in/adsur/',
    label: '/in/adsur',
    color: 'hover:text-blue-400'
  },
  {
    name: 'X',
    icon: <img src={TwitterXLogo} alt="X (Twitter)" className="w-6 h-6" style={{ filter: 'invert(1)' }} />,
    href: 'https://x.com/adsurkasur',
    label: '@adsurkasur',
    color: 'hover:text-cyan-400'
  },
  {
    name: 'Instagram',
    icon: <Instagram />,
    href: 'https://instagram.com/adsurkasur',
    label: '@adsurkasur',
    color: 'hover:text-pink-400'
  },
  {
    name: 'GitHub',
    icon: <Github />,
    href: 'https://github.com/adsurkasur',
    label: 'adsurkasur',
    color: 'hover:text-white'
  }
];


export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-primary/5" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to collaborate on exciting projects or just want to say hello? 
              I'm always open to new opportunities and interesting conversations.
            </p>
          </div>


        {/* Contact Cards Grid */}
        <div className="flex flex-col gap-4 max-w-2xl mx-auto mb-12 scroll-reveal">
          {contacts.map((contact) => (
            <Card
              key={contact.name}
              className="glass-card hover-glow group cursor-pointer overflow-hidden transition-all duration-300"
            >
              <a
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 relative"
              >
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex items-center justify-between w-full">
                  {/* Left side - Icon and Content */}
                  <div className="flex items-center space-x-4">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${contact.color}`}>
                      <div className="text-xl group-hover:rotate-12 transition-transform duration-300">
                        {contact.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                        {contact.name}
                      </h3>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 truncate">
                        {contact.label}
                      </p>
                    </div>
                  </div>

                  {/* Right side - Arrow */}
                  <div className="flex-shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all duration-300">
                    <Send className="w-5 h-5" />
                  </div>
                </div>
              </a>
            </Card>
          ))}
        </div>


        </div>
      </div>
    </section>
  );
};