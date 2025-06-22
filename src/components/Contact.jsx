import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'leogalves28@gmail.com',
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: '+55 (71) 993639047',
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Salvador, Ba - Brasil',
    }
  ];

  const socialLinks = [
    { 
      icon: Github, 
      label: 'GitHub',
      url: 'https://github.com/LeoAlves28'
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/leonardo-andrade-88298628b/'
    },
    { 
      icon: Instagram, 
      label: 'Instagram',
      url: 'https://www.instagram.com/leoag28/'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vamos conversar sobre seu próximo projeto ou oportunidade de colaboração
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Vamos conversar!</h3>
              <p className="text-muted-foreground leading-relaxed">
                Estou sempre aberto a novas oportunidades e projetos interessantes. 
                Se você tem uma ideia incrível ou precisa de ajuda com desenvolvimento, 
                não hesite em entrar em contato!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.label} className="flex items-center space-x-4 p-4 bg-card rounded-lg border">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground">
                        {info.label}
                      </h4>
                      <p className="text-foreground">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Me siga nas redes sociais</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-lg border p-6">
            <form 
              action="https://formsubmit.co/leogalves28@gmail.com" 
              method="POST" 
              className="space-y-6"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={window.location.href} />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Nome *</label>
                  <input
                    id="name"
                    name="name"
                    placeholder="Seu nome completo"
                    required
                    className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    required
                    className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Assunto *</label>
                <input
                  id="subject"
                  name="_subject"
                  placeholder="Sobre o que você gostaria de conversar?"
                  required
                  className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Mensagem *</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Conte-me mais sobre seu projeto ou ideia..."
                  rows={5}
                  required
                  className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <button 
                type="submit" 
                className="w-full flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                <Send className="mr-2 h-4 w-4" />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

