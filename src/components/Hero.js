import React from 'react';
import '../styles/components.css';
import '../styles/portfolio.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <span className="pf-status pf-hero-status"><i /> disponível para novos projetos</span>
          <h1 className="hero-title">
            Transformamos ideias em <span className="highlight">soluções digitais</span>
          </h1>
          <p className="hero-subtitle">
            Na PL TECNOLOGIA, combinamos tecnologia de ponta com inovação para 
            impulsionar o seu negócio para o futuro.
          </p>
          <div className="hero-buttons">
            <a href="#services" className="btn btn-primary">Nossos Serviços</a>
            <a href="#contact" className="btn btn-secondary">Fale Conosco</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="tech-animation">
            <div className="floating-card card-1">
              <span>💻</span>
              <p>Desenvolvimento</p>
            </div>
            <div className="floating-card card-2">
              <span>🚀</span>
              <p>Inovação</p>
            </div>
            <div className="floating-card card-3">
              <span>⚡</span>
              <p>Performance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;