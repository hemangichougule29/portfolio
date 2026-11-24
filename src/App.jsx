import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container" style={{ width: '100%', maxWidth: '100%', overflowX: 'hidden', position: 'relative' }}>
      {/* Background blobs wrapper to prevent mobile overflow */}
      <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: -1 }}>
        <div className="blob" style={{ top: '-10%', left: '-10%', width: '300px', height: '300px', background: 'var(--accent-primary)', borderRadius: '50%' }}></div>
        <div className="blob" style={{ top: '40%', right: '-10%', width: '250px', height: '250px', background: 'var(--accent-secondary)', borderRadius: '50%', animationDelay: '2s' }}></div>
        <div className="blob" style={{ bottom: '-10%', left: '10%', width: '300px', height: '300px', background: 'var(--accent-primary)', borderRadius: '50%', animationDelay: '4s', opacity: 0.2 }}></div>
      </div>

      <Navbar />
      <main style={{ width: '100%', overflowX: 'hidden' }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;