// src/components/EducationSection.tsx

import React from 'react';
import { Card } from '@/components/ui/card';
import { School, Award, BookOpen, Star } from 'lucide-react';
import ubLogo from '@/assets/ub-logo.png';
import banhasLogo from '@/assets/banhas-logo.jpeg';
import bssLogo from '@/assets/bss-logo.jpeg';

// Define data for education history
const educationHistory = [
  {
    id: 'brawijaya-university',
    institution: 'Brawijaya University',
    logo: ubLogo,
    degree: 'Bachelor of Agricultural Technology (S.TP)',
    major: 'Industrial Agricultural Technology', 
    period: '2023 - Present (Estimated Graduation 2027)',
    description: 'Studying knowledge that integrates engineering principles with biological systems to manage, process, and distribute agricultural products efficiently and sustainably.',
    achievements: [
      'Recipient of Program Kreativitas Mahasiswa Riset Eksakta (PKM-RE) Funding 2024',
      'Teaching Assistant for Basic Chemistry Laboratory',
      'First Runner-up, BIOPLASMA 2024 Business Plan Competition',
      'Staff of HRD Bureau, Agritech Research and Study Club (ARSC)',
    ],
    relevantCourses: [
      'Physics',
      'Personality Development and Professional Ethics',
      'Organic and Inorganic Chemistry',
      'Basic Biology',
      'Introduction to Agroindustry',
      'Introduction to Economics',
      'Basic Mathematics',
      'Engineering Drawing',
      'Engineering Economics',
      'Calculus',
      'Industrial Microbiology',
      'Fundamentals of Process Engineering',
      'Computer Programming',
      'Industrial Waste and Environmental Management',
      'Human Resource Management',
      'Agroindustrial Materials Knowledge',
      'English',
      'Industrial Mathematics',
      'Unit Operations',
      'Industrial Statistics 1',
      'Product Design and Development',
      'Operations Research',
      'Work Design and Ergonomics',
      'Waste Technology',
      'Quality Control',
      'Islamic Religion',
      'Pancasila',
      'Unit Processes',
      'Optimization Techniques',
      'Bioprocess Engineering',
      'Material Handling and Facility Layout Planning',
      'Production Planning and Inventory Control',
      'System Modeling and Simulation',
      'Information Systems and Technology',
      'Civics',
      'Indonesian Language',
      'Entrepreneurship',
      'Scientific Methods',
      'Decision Analysis',
      'Plant Design',
      'Industrial Project Planning',
      'Industrial Statistics 2',
      'Supply Chain Management',
      'Agroindustrial Product Analysis and Evaluation',
      'Packaging Technology',
      'Industrial Machinery and Instrumentation',
      'Occupational Safety and Industrial Environment',
      'Smart Agroindustry',
      'Special Topics in Agroindustry',
      'Agroindustry Project',
      'Risk Management',
      'Industrial Psychology',
      'Maintenance System',
      'Data Mining',
      'Oil, Emulsion, and Oleochemical Process Engineering',
      'Agroindustry Audit',
      'Bioremediation',
      'Enzyme and Microbial Technology',
      'Global Perspective',
      'Artificial Intelligence',
      'Cost Accounting',
      'Productivity Analysis',
      'Advanced Operations Research',
      'Intelligent Systems',
      'Aromatic Product and Biopharmaceutical Process Engineering',
      'Plantation and Forestry Product Process Engineering',
      'Clean Production',
      'Bioenergy'
    ],
  },
  {
    id: 'brawijaya-smart-school',
    institution: 'SMA Brawijaya Smart School',
    logo: bssLogo,
    degree: 'High School Diploma',
    major: 'Science',
    period: '2019 - 2023',
    description: 'Focused on science subjects and participated in various academic and extracurricular activities.',
    achievements: [
      'Graduated with honors',
      'Member of Islamic Dakwah Council',
    ],
    relevantCourses: [
      'Physics',
      'Chemistry',
      'Biology',
      'Mathematics',
      'English',
      'Indonesian Language',
      'Indonesian History',
      'Geography',
      'Economics',
      'Physical Education',
      'Islam Religion',
      'Civics'
    ],
  },
  {
    id: 'smp-islam-bani-hasyim',
    institution: 'SMP Islam Bani Hasyim',
    logo: banhasLogo,
    degree: 'Junior High School Diploma',
    major: '',
    period: '2016 - 2019',
    description: 'Completed junior high school education with a focus on foundational subjects and character development.',
    achievements: [
      'Graduated',
      'Active in Music Extracurriculars',
      'Active in Silat Perisai Diri',
      'Active in student council'
    ],
    relevantCourses: [
      'Natural Sciences',
      'Mathematics',
      'English',
      'Indonesian Language',
      'Social Sciences',
      'Physical Education',
      'Religion',
      'Civics',
      'Arts and Culture'
    ],
  },
  {
    id: 'sd-islam-bani-hasyim',
    institution: 'SD Islam Bani Hasyim',
    logo: banhasLogo, // Add logo path if available
    degree: 'Elementary School Diploma',
    major: '',
    period: '2010 - 2016',
    description: 'Completed elementary education with a strong foundation in core subjects.',
    achievements: [
      'Graduated',
      'Has several awards'
    ],
    relevantCourses: [
      'Natural Sciences',
      'Mathematics',
      'English',
      'Indonesian Language',
      'Social Sciences',
      'Physical Education',
      'Religion',
      'Civics',
      'Arts and Culture'
    ],
  },
  // You can add other education history (e.g., high school) here if desired
];

export const EducationSection = () => {
  // The scroll-reveal effect will work if you have a global IntersectionObserver
  // like in ProjectShowcase.tsx. Just add the 'scroll-reveal' class.
  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Background Effects (consistent with other sections) */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-accent rounded-full blur-3xl opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Education <span className="gradient-text">History</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The academic journey that shaped the foundation of my skills, mindset, and innovation.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 h-full w-0.5 bg-primary/20 transform -translate-x-1/2" />
          
          {educationHistory.map((edu, index) => (
            <div key={index} className="relative mb-12 scroll-reveal">
              <div className="flex items-center sm:grid sm:grid-cols-2 sm:gap-x-12">
                
                {/* Timeline Dot */}
                <div className="absolute left-4 sm:left-1/2 top-4 w-8 h-8 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center transform -translate-x-1/2">
                  <School className="w-4 h-4 text-primary" />
                </div>
                
                {/* Spacer for mobile layout */}
                <div className="hidden sm:block"></div>

                {/* Education Card */}
                <div className="w-full sm:w-auto ml-12 sm:ml-0">
                  <Card className="glass-card p-6 hover-glow group transition-all duration-300">
                    <div className="space-y-4">
                      {/* Card Header */}
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-xs text-muted-foreground">{edu.period}</p>
                          <h3 className="text-xl lg:text-2xl font-bold group-hover:text-primary transition-colors duration-300">{edu.institution}</h3>
                          <p className="text-md text-primary font-medium">{edu.major}</p>
                        </div>
                        <img src={edu.logo} alt={`${edu.institution} logo`} className="w-12 h-12 hidden sm:block" />
                      </div>
                      
                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>

                      {/* Achievements */}
                      <div className="pt-2">
                        <h4 className="flex items-center text-md font-semibold mb-2">
                          <Award className="mr-2 h-4 w-4 text-primary" />
                          Achievements & Activities
                        </h4>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                          {edu.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
                        </ul>
                      </div>
                      
                      {/* Relevant Courses */}
                      <div className="pt-2">
                        <h4 className="flex items-center text-md font-semibold mb-2">
                          <BookOpen className="mr-2 h-4 w-4 text-primary" />
                          Relevant Courses
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.relevantCourses.map((course, i) => (
                             <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs border border-primary/20">
                               {course}
                             </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};