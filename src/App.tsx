import React from 'react';
import { useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : 'light'}`}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
