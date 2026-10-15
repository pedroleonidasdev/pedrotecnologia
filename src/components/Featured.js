import React from 'react';
import '../styles/portfolio.css';
import shot from '../assets/pdv-catolico.png';

const stats = [['50', 'Produtos'], ['2', 'Plataformas de deploy'], ['4', 'Módulos'], ['100%', 'Responsivo']];
const log = [
  ['fix', '−', 'erro 500 em busca por código de barras (overflow de integer)'],
  ['fix', '−', 'hash de senha inválido bloqueando login em produção'],
  ['add', '+', 'busca por nome ignorando acentuação (unaccent), sem alterar os dados'],
  ['add', '+', 'exclusão de vendas (admin) com estorno automático de estoque via transação'],
  ['chg', '~', 'CORS restrito às origens de produção e desenvolvimento']
];
const badges = ['Next.js', 'NestJS', 'PostgreSQL', 'TypeORM', 'Vercel', 'Render'];

const Featured = () => (
  <section id="portfolio" className="pf-featured">
    <div className="container">
      <div className="section-header">
        <h2>Portfólio</h2>
        <p>Projeto em destaque</p>
      </div>
      <div className="pf-featured-grid">
        <div>
          <div className="pf-head">
            <span>projetos / pdv-catolico</span>
            <span className="pf-live"><i /> live</span>
            <span className="pf-ver">v1.0.0</span>
          </div>
          <h3 className="pf-title">PDV Católico</h3>
          <p className="pf-text">
            Sistema completo de ponto de venda para uma loja de artigos religiosos:
            modelagem de banco, autenticação JWT, API REST, frontend responsivo e deploy
            em produção. Em uso real por uma loja como piloto.
          </p>
          <div className="pf-stats">
            {stats.map(([n, l]) => (
              <div key={l}><strong>{n}</strong><span>{l}</span></div>
            ))}
          </div>
          <ul className="pf-log">
            {log.map(([c, m, t]) => (
              <li key={t} className={c}><b>{m}</b>{t}</li>
            ))}
          </ul>
          <div className="pf-badges">
            {badges.map((b) => <span key={b}>{b}</span>)}
          </div>
          <div className="hero-buttons">
            <a href="https://lojapresentededeus.com.br" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Acessar sistema →</a>
            <a href="#projetos" className="btn btn-secondary">Ver outros projetos</a>
          </div>
        </div>
        <figure className="pf-browser">
          <div className="pf-bar"><span /><span /><span /><em>lojapresentededeus.com.br</em></div>
          <img src={shot} alt="Tela de login do PDV Católico" />
          <figcaption>Tela de login — acesso restrito, uso interno</figcaption>
        </figure>
      </div>
    </div>
  </section>
);

export default Featured;
