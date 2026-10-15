import React from 'react';
import '../styles/portfolio.css';
import pedro from '../assets/pedro.jpg';

const stack = [
  ['frontend', ['React', 'Next.js', 'TypeScript']],
  ['backend', ['NestJS', 'Spring Boot', 'ASP.NET']],
  ['languages', ['TypeScript', 'Java', 'C#']],
  ['database', ['PostgreSQL', 'TypeORM', 'Prisma']],
  ['tools', ['Git', 'Selenium', 'Excel']],
  ['deploy', ['Vercel', 'Render']]
];

const Founder = () => (
  <section id="fundador" className="pf-founder">
    <div className="container pf-founder-grid">
      <div>
        <p className="pf-eyebrow">// fundador · full-stack developer</p>
        <h2 className="pf-title">Pedro Leonidas</h2>
        <p className="pf-text">
          Estudante de <strong>Análise e Desenvolvimento de Sistemas</strong>, focado em
          construir aplicações completas do zero — não apenas telas, mas sistemas que
          resolvem problemas reais de operação. Já naveguei por múltiplas stacks
          (TypeScript, Java/Spring, C#/.NET), sempre com o mesmo cuidado:{' '}
          <strong>autenticação segura, integridade de dados e deploy confiável em produção</strong>.
        </p>
        <span className="pf-status"><i /> disponível para novos projetos</span>
      </div>
      <div className="pf-founder-right">
        <img className="pf-avatar" src={pedro} alt="Pedro Leonidas" />
        <div className="pf-code">
          <div className="pf-bar"><span /><span /><span /><em>stack.json</em></div>
          <pre>
            {'{\n'}
            {stack.map(([k, v], i) => (
              <React.Fragment key={k}>
                {'  '}<b>"{k}"</b>: [{v.map((x, j) => (
                  <React.Fragment key={x}><s>"{x}"</s>{j < v.length - 1 ? ', ' : ''}</React.Fragment>
                ))}]{i < stack.length - 1 ? ',' : ''}{'\n'}
              </React.Fragment>
            ))}
            {'}'}
          </pre>
        </div>
      </div>
    </div>
  </section>
);

export default Founder;
