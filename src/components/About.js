import React from 'react';
import '../styles/components.css';

const About = () => {
  const stats = [
    { number: '500+', label: 'Projetos Entregues' },
    { number: '200+', label: 'Clientes Satisfeitos' },
    { number: '10+', label: 'Anos de Experiência' },
    { number: '50+', label: 'Especialistas' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Sobre a PL TECNOLOGIA</h2>
            <p className="about-description">
              Somos uma empresa de tecnologia focada em transformar negócios através 
              de soluções inovadoras. Com uma equipe altamente qualificada e apaixonada 
              por tecnologia, entregamos resultados excepcionais que superam expectativas.
            </p>
            <p className="about-description">
              Nossa missão é democratizar o acesso à tecnologia de ponta, ajudando 
              empresas de todos os tamanhos a se destacarem no mercado digital.
            </p>
            
            <div className="values">
              <div className="value-item">
                <span className="value-icon">🎯</span>
                <div>
                  <h4>Foco no Cliente</h4>
                  <p>Suas necessidades são nossa prioridade</p>
                </div>
              </div>
              <div className="value-item">
                <span className="value-icon">💡</span>
                <div>
                  <h4>Inovação Constante</h4>
                  <p>Sempre na vanguarda da tecnologia</p>
                </div>
              </div>
              <div className="value-item">
                <span className="value-icon">🤝</span>
                <div>
                  <h4>Parceria Duradoura</h4>
                  <p>Crescemos junto com nossos clientes</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;