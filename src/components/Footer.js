import React from 'react';
import '../styles/components.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>PL TECNOLOGIA</h3>
            <p className="footer-slogan">Solução & Inovação !</p>
            <p className="footer-description">
              Transformando negócios através da tecnologia.
            </p>
          </div>

          <div className="footer-section">
            <h4>Serviços</h4>
            <ul>
              <li><a href="#services">Desenvolvimento Web</a></li>
              <li><a href="#services">Apps Mobile</a></li>
              <li><a href="#services">Cloud Computing</a></li>
              <li><a href="#services">Cibersegurança</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Empresa</h4>
            <ul>
              <li><a href="#about">Sobre Nós</a></li>
              <li><a href="#portfolio">Portfólio</a></li>
              <li><a href="#contact">Contato</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#home">Home</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Redes Sociais</h4>
            <div className="social-links">
              <a href="https://github.com/pedrocsdev" target="_blank" rel="noopener noreferrer" aria-label="GitHub">git</a>
              <a href="https://linkedin.com/in/pedro-leonidas-7339b0366" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
              <a href="https://wa.me/5561998259943" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">wa</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} PL TECNOLOGIA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
