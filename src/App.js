import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Founder from './components/Founder';
import Featured from './components/Featured';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <About />
      <Founder />
      <Featured />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;