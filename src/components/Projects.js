import React from 'react';
import '../styles/portfolio.css';

const repos = [
  ['desafiojr', 'Desafio técnico full stack: CRUD de clientes com validação de unicidade, soft delete, bloqueio de edição de inativos e paginação.', '#6C9BF0', 'TypeScript', 'NestJS + Next.js', 'desafiojr'],
  ['nahnuveem-backend', 'API de gestão de produtos com autenticação stateless via JWT, Spring Data JPA e paginação dinâmica.', '#E8A33D', 'Java', 'Spring Boot + Security', 'nahnuveem-backend'],
  ['pdv-api', 'Versão em Java/Spring de um sistema de ponto de venda: produtos, estoque, vendas e cálculo de troco.', '#E8A33D', 'Java', 'Spring Boot', 'pdv-api'],
  ['BarbeariaSystem', 'Gestão financeira de barbearia em .NET, organizada em camadas Domain / Infrastructure / UI.', '#6C9BF0', 'C#', '.NET 10', 'BarbeariaSystem'],
  ['gerador-de-conselho', 'Consumo assíncrono de API externa com tradução automática em tempo real e visual glassmorphic responsivo.', '#F0DB4F', 'JavaScript', 'HTML/CSS/JS', 'geradorDeConselho']
];

const Projects = () => (
  <section id="projetos" className="pf-projects">
    <div className="container">
      <div className="section-header">
        <h2>Mais projetos</h2>
        <p>// outros repositórios</p>
      </div>
      <div className="pf-repo-grid">
        {repos.map(([name, desc, color, lang, stack, slug]) => (
          <div key={name} className="pf-repo">
            <h4>📦 {name}</h4>
            <p>{desc}</p>
            <div className="pf-meta">
              <span><i style={{ background: color }} />{lang}</span>
              <span>{stack}</span>
            </div>
            <a href={`https://github.com/pedrocsdev/${slug}`} target="_blank" rel="noopener noreferrer">repositório →</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
