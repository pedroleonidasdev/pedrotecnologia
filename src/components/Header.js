import React, { useState } from 'react';
import '../styles/components.css';
import emblem from '../assets/emblema.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src={emblem} alt="Brasão da FORJA TECNOLOGIA" />
            <div>
            <h1>FORJA TECNOLOGIA</h1>
            <p className="slogan">Solução & Inovação !</p>
            </div>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>Serviços</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>Sobre</a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfólio</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contato</a>
          </nav>

          <button className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;