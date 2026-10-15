import React from 'react';
import '../styles/components.css';

const Services = () => {
  const services = [
    {
      icon: '💻',
      title: 'Desenvolvimento Web',
      description: 'Sites e aplicações web modernas, responsivas e otimizadas para performance.'
    },
    {
      icon: '📱',
      title: 'Apps Mobile',
      description: 'Aplicativos nativos e híbridos para iOS e Android com UX excepcional.'
    },
    {
      icon: '☁️',
      title: 'Cloud Computing',
      description: 'Soluções em nuvem escaláveis, seguras e com alta disponibilidade.'
    },
    {
      icon: '🔒',
      title: 'Cibersegurança',
      description: 'Proteção completa para seus dados e sistemas contra ameaças digitais.'
    },
    {
      icon: '📊',
      title: 'Business Intelligence',
      description: 'Análise de dados e dashboards para decisões estratégicas inteligentes.'
    },
    {
      icon: '🤖',
      title: 'Inteligência Artificial',
      description: 'Implementação de IA e Machine Learning para automatizar processos.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Nossos Serviços</h2>
          <p>Soluções tecnológicas completas para o seu negócio</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className="service-link">Saiba mais →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;