import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import ThankYou from './components/ThankYou';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <About />
      <Gallery />
      <ThankYou />
      <Footer />
    </div>
  );
}

export default App;
