import { useEffect, useState } from 'react';
import { 
  Code, 
  Server, 
  Database, 
  Settings, 
  Globe, 
  BrainCircuit, 
  BrainCog, 
  MessagesSquare, 
  Mic, 
  Users, 
  Crown 
} from 'lucide-react';

// Interface for a skill
interface Skill {
  name: string;
  icon: React.ReactNode;
  category: string;
  color: string;
}

// Array of all skills, including technical and professional
const skills: Skill[] = [
  // Technical Skills
  { name: 'JavaScript', icon: <Code />, category: 'Languages', color: 'from-yellow-400 to-yellow-600' },
  { name: 'TypeScript', icon: <Code />, category: 'Languages', color: 'from-blue-400 to-blue-600' },
  { name: 'Python', icon: <Code />, category: 'Languages', color: 'from-green-400 to-green-600' },
  { name: 'React', icon: <Globe />, category: 'Frameworks', color: 'from-cyan-400 to-cyan-600' },
  { name: 'Node.js', icon: <Server />, category: 'Backend', color: 'from-green-500 to-green-700' },
  { name: 'MongoDB', icon: <Database />, category: 'Database', color: 'from-emerald-400 to-emerald-600' },
  { name: 'Docker', icon: <Settings />, category: 'Tools', color: 'from-blue-500 to-blue-700' },
  { name: 'Git', icon: <Settings />, category: 'Tools', color: 'from-orange-400 to-orange-600' },
  // Professional Skills
  { name: 'Problem Solving', icon: <BrainCircuit />, category: 'Professional', color: 'from-purple-400 to-purple-600' },
  { name: 'Critical Thinking', icon: <BrainCog />, category: 'Professional', color: 'from-indigo-400 to-indigo-600' },
  { name: 'Communication', icon: <MessagesSquare />, category: 'Professional', color: 'from-teal-400 to-teal-600' },
  { name: 'Public Speaking', icon: <Mic />, category: 'Professional', color: 'from-rose-400 to-rose-600' },
  { name: 'Teamwork', icon: <Users />, category: 'Professional', color: 'from-sky-400 to-sky-600' },
  { name: 'Leadership', icon: <Crown />, category: 'Professional', color: 'from-amber-400 to-amber-600' },
];

// Categories for filtering, now including "Professional"
const categories = ['All', 'Languages', 'Frameworks', 'Backend', 'Database', 'Tools', 'Professional'];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [animatedSkills, setAnimatedSkills] = useState<boolean[]>(new Array(skills.length).fill(false));
  const [hasAnimated, setHasAnimated] = useState(false);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            // Animate skills progressively
            skills.forEach((_, index) => {
              setTimeout(() => {
                setAnimatedSkills(prev => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, [hasAnimated]);

  // Filter skills based on the active category
  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-accent rounded-full blur-3xl opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          {/* Updated Title */}
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            My <span className="gradient-text">Skills & Expertise</span>
          </h2>
          {/* Updated Description */}
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A versatile toolkit of technical and professional skills that drive my work. 
            I am committed to holistic growth and continuous improvement in every domain.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-primary text-primary-foreground shadow-glow-primary'
                  : 'bg-card/50 text-foreground hover:bg-primary/10 border border-primary/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => {
            const skillIdx = skills.findIndex(s => s.name === skill.name);
            const isAnimated = animatedSkills[skillIdx];
            return (
              <div
                key={skill.name}
                className={`glass-card p-6 hover-glow group transition-all duration-500
                  ${isAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                `}
                style={{
                  transitionDelay: `${filteredSkills.indexOf(skill) * 100}ms`,
                }}
              >
                {/* Skill Icon */}
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-primary text-2xl group-hover:rotate-12 transition-transform duration-300">
                    {skill.icon}
                  </div>
                </div>

                {/* Skill Name */}
                <h3 className="text-xl font-semibold text-center mb-4 group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </h3>

                {/* Category Badge */}
                <div className="text-center">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs border border-primary/20">
                    {skill.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Updated Additional Info Section */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">A Commitment to Growth</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe that true expertise comes from a blend of technical mastery and strong professional skills. 
              I am constantly exploring new technologies while also honing my ability to communicate, lead, and solve problems effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
