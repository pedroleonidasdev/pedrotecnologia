import React, { useState } from 'react';
import '../styles/components.css';

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
            <h1>Leonidas Tech</h1>
            <p className="slogan">Solução & Inovação !</p>
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