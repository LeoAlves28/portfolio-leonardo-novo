import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Sobre <span className="gradient-text">Mim</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-gray-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tenho 21 anos, sou estudante de engenharia da computação (2022.2 - 2027.1) no Senai
              Cimatec, atualmente estou no 6º semestre. Tenho como objetivo desenvolver-me
              profissionalmente, colocando em prática aspectos abordados em sala de aula.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sou um desenvolvedor apaixonado por tecnologia, com experiência em criar soluções 
              digitais inovadoras. Acredito que a combinação entre funcionalidade e estética é 
              fundamental para criar produtos digitais que realmente fazem a diferença.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="font-semibold text-foreground">Nome:</span>
                  <span className="ml-2 text-muted-foreground">Leonardo Andrade Gomes Alves</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-foreground">Email:</span>
                  <span className="ml-2 text-muted-foreground">leogalves28@gmail.com</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="font-semibold text-foreground">Experiência:</span>
                  <span className="ml-2 text-muted-foreground">Sem experiência na área</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-foreground">Localização:</span>
                  <span className="ml-2 text-muted-foreground">Salvador, BA, Brasil</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { number: '2+', label: 'Projetos Concluídos' },
              { number: '6º', label: 'Semestre Atual' },
              { number: '21', label: 'Anos de Idade' },
              { number: '2025', label: 'Ano de Formação' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-card rounded-lg border card-hover">
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

