import React from 'react';
import { Code, Palette, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Code',
      icon: Code,
      color: 'text-gray-300',
      skills: ['C', 'C++', 'Python', 'HTML', 'JavaScript', 'CSS', 'React'],
    },
    {
      title: 'Soft Skills',
      icon: Palette,
      color: 'text-gray-400',
      skills: ['Boa comunicação', 'Proativo', 'Cooperativo', 'Experiência com público', 'Liderança', 'Inglês Avançado', 'Espanhol intermediário'],
    },
    {
      title: 'DevOps',
      icon: Settings,
      color: 'text-gray-500',
      skills: ['Git', 'GitHub','Vercel'],
    },
  ];

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Minhas <span className="gradient-text">Habilidades</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-gray-400 mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar experiências digitais excepcionais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            
            return (
              <div key={category.title} className="bg-card rounded-lg border p-6 card-hover">
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 ${category.color} mb-4`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill}</span>
                      <div className="w-16 h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-gray-400 rounded-full" style={{width: '85%'}} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

