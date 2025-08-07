import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          <span className="text-foreground">Olá, eu sou </span>
          <span className="gradient-text">
            Leonardo Andrade
          </span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Estudante de Engenharia da Computação
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/projects" 
            className="inline-flex items-center justify-center px-6 py-3 button-primary rounded-lg group"
          >
            Ver Projetos
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a 
            href="/Curriculo Leonardo Andrade.pdf" 
            download
            className="inline-flex items-center justify-center px-6 py-3 button-secondary rounded-lg"
          >
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

