import { useEffect, useState } from 'react';
import { Code, Zap, Heart } from 'lucide-react';

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  
  const loadingTexts = [
    "Initializing creativity...",
    "Loading passion projects...",
    "Compiling dreams into code...",
    "Ready to innovate!"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    const textTimer = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 1200);

    return () => clearInterval(textTimer);
  }, []);

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      {/* Background animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 animate-pulse" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center space-y-8 max-w-md mx-auto px-6">
        {/* Logo/Icon */}
        <div className="relative mx-auto">
          <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-pulse" />
          <div className="relative w-24 h-24 mx-auto bg-gradient-primary rounded-full flex items-center justify-center animate-bounce">
            <Code className="w-12 h-12 text-primary-foreground" />
          </div>
        </div>

        {/* Loading text */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold gradient-text">
            AdsurKasur
          </h1>
          
          <div className="h-8 flex items-center justify-center">
            <p className="text-lg text-muted-foreground transition-all duration-500">
              {loadingTexts[currentText]}
            </p>
          </div>
        </div>


        {/* Animated icons */}
        <div className="flex justify-center space-x-4">
          {[Code, Zap, Heart].map((Icon, index) => (
            <div
              key={index}
              className="w-8 h-8 text-primary/50 animate-pulse"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <Icon className="w-full h-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};