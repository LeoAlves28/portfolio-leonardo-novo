import React from 'react';
import { ExternalLink, Github, Globe, Smartphone } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Gerador de Ticket',
      description: 'Com o Gerador Oficial de Tickets da Coding Conf 2026, você garante seu ingresso de forma rápida, personalizada e segura para vivenciar palestras, workshops e networking com os maiores nomes da programação, inovação e desenvolvimento de software.',
      image: '/projeto-gerador-ticket.jpeg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      icon: Globe,
      status: 'Concluído',
      githubUrl: 'https://github.com/LeoAlves28/GERADOR-TICKET',
      liveUrl: 'https://gerador-ticket-cyan.vercel.app/'
    },
    {
      id: 2,
      title: 'Calculadora de Idade',
      description: 'Calculadora de Idade, a ferramenta online perfeita para quem quer descobrir exatamente quanto tempo já se passou desde uma data específica até hoje! Seja para calcular a idade de uma pessoa, um animal de estimação, um projeto ou até mesmo um evento histórico, nosso site oferece um resultado rápido, e fácil de entender.',
      image: '/projeto-calculadora-idade.jpeg',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
      icon: Smartphone,
      status: 'Concluído',
      githubUrl: 'https://github.com/LeoAlves28/minha-calculadora',
      liveUrl: 'https://minha-calculadora-ruddy.vercel.app/'
    },
    {
      id: 3,
      title: 'Movie Search',
      description: 'Movie Search é um site de busca de filmes que ajuda você a encontrar onde assistir aos seus títulos favoritos. Com um banco de dados abrangente, ele mostra em quais plataformas de streaming (como Netflix, Amazon Prime, Disney+, HBO Max e outras) o filme está disponível, seja para aluguel, compra ou incluso na assinatura.',
      image: '/MovieSearch.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
      icon: Smartphone,
      status: 'Em andamento',
      githubUrl: 'https://github.com/ROpeixoto/FullStack-APIs',
      liveUrl: 'https://full-stack-apis.vercel.app/'
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Meus <span className="gradient-text">Projetos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-gray-400 mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes e significativos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => {
            const Icon = project.icon;
            
            return (
              <div key={project.id} className="bg-card rounded-lg border overflow-hidden card-hover">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                      project.status === 'Concluído' 
                        ? 'bg-green-500/10 text-green-400' 
                        : 'bg-yellow-500/10 text-yellow-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-secondary text-xs rounded">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-1 bg-secondary text-xs rounded">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 button-primary text-sm rounded text-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-1 inline" />
                      Site
                    </a>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 button-secondary text-sm rounded text-center"
                    >
                      <Github className="w-4 h-4 mr-1 inline" />
                      Código
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

