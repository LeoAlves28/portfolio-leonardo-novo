import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Desenvolvedor Frontend Sênior',
      company: 'Tech Innovations Inc.',
      location: 'São Paulo, SP',
      period: '2023 - Presente',
      type: 'Tempo Integral',
      description: 'Liderança no desenvolvimento de interfaces modernas e responsivas para aplicações web de grande escala. Mentoria de desenvolvedores juniores e implementação de melhores práticas de desenvolvimento.',
      achievements: [
        'Reduziu o tempo de carregamento das páginas em 40%',
        'Implementou sistema de design que aumentou a produtividade da equipe em 60%',
        'Liderou migração de aplicação legacy para React/TypeScript',
        'Mentorou 5 desenvolvedores juniores'
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GraphQL']
    },
    {
      id: 2,
      title: 'Desenvolvedor Full Stack',
      company: 'StartupTech Solutions',
      location: 'Remote',
      period: '2022 - 2023',
      type: 'Tempo Integral',
      description: 'Desenvolvimento de aplicações web completas utilizando stack moderna. Colaboração direta com equipes de design e produto para entrega de soluções inovadoras.',
      achievements: [
        'Desenvolveu MVP que atraiu 10k+ usuários em 3 meses',
        'Implementou arquitetura de microserviços escalável',
        'Criou API REST utilizada por 5+ aplicações diferentes',
        'Otimizou banco de dados reduzindo consultas em 50%'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS']
    },
    {
      id: 3,
      title: 'Desenvolvedor Frontend',
      company: 'Digital Agency Pro',
      location: 'São Paulo, SP',
      period: '2021 - 2022',
      type: 'Tempo Integral',
      description: 'Criação de websites responsivos e landing pages para diversos clientes. Foco em performance, acessibilidade e experiência do usuário.',
      achievements: [
        'Entregou 25+ projetos web com 100% de satisfação do cliente',
        'Implementou práticas de SEO que aumentaram tráfego em 200%',
        'Desenvolveu biblioteca de componentes reutilizáveis',
        'Reduziu tempo de desenvolvimento de projetos em 30%'
      ],
      technologies: ['HTML/CSS', 'JavaScript', 'React', 'SASS', 'WordPress']
    },
    {
      id: 4,
      title: 'Desenvolvedor Junior',
      company: 'WebCraft Studio',
      location: 'São Paulo, SP',
      period: '2020 - 2021',
      type: 'Tempo Integral',
      description: 'Início da carreira profissional focado em desenvolvimento frontend. Aprendizado contínuo de novas tecnologias e melhores práticas de desenvolvimento.',
      achievements: [
        'Completou 15+ projetos de websites corporativos',
        'Aprendeu React e tecnologias modernas de frontend',
        'Contribuiu para melhoria de processos de desenvolvimento',
        'Participou de treinamentos e workshops técnicos'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Tempo Integral':
        return 'bg-green-500/10 text-green-600 border-green-500/20';
      case 'Freelance':
        return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
      case 'Estágio':
        return 'bg-purple-500/10 text-purple-600 border-purple-500/20';
      default:
        return 'bg-gray-500/10 text-gray-600 border-gray-500/20';
    }
  };

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Minha <span className="text-primary">Experiência</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Jornada profissional e principais conquistas ao longo da carreira
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-border" />

            <motion.div variants={containerVariants} className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10" />

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-12 md:ml-0`}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="group"
                    >
                      <Card className="transition-all duration-300 group-hover:shadow-lg group-hover:border-primary/50">
                        <CardContent className="p-6 space-y-4">
                          {/* Header */}
                          <div className="space-y-2">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <Badge className={`text-xs ${getTypeColor(exp.type)}`}>
                                {exp.type}
                              </Badge>
                              <div className="flex items-center text-xs text-muted-foreground">
                                <Calendar className="w-3 h-3 mr-1" />
                                {exp.period}
                              </div>
                            </div>
                            
                            <h3 className="text-xl font-bold text-foreground">
                              {exp.title}
                            </h3>
                            
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <Building className="w-4 h-4 mr-1" />
                                {exp.company}
                              </div>
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {exp.location}
                              </div>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-muted-foreground leading-relaxed">
                            {exp.description}
                          </p>

                          {/* Achievements */}
                          <div className="space-y-2">
                            <h4 className="font-semibold text-sm">Principais Conquistas:</h4>
                            <ul className="space-y-1">
                              {exp.achievements.map((achievement, idx) => (
                                <li key={idx} className="text-sm text-muted-foreground flex items-start">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0" />
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies */}
                          <div className="space-y-2">
                            <h4 className="font-semibold text-sm">Tecnologias:</h4>
                            <div className="flex flex-wrap gap-1">
                              {exp.technologies.map((tech) => (
                                <Badge key={tech} variant="outline" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Summary */}
          <motion.div variants={itemVariants}>
            <Card className="bg-gradient-to-r from-primary/5 to-blue-600/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Resumo da Carreira</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">4+</div>
                    <div className="text-sm text-muted-foreground">Anos de Experiência</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Projetos Entregues</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">Tecnologias Dominadas</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

