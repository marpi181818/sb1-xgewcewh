import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Gallery />
          <Contact />
        </main>
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}

export default App;