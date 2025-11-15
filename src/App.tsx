import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import StartHub from './components/StartHub';
import Tools from './components/Tools';
import Videos from './components/Videos';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import EasterEgg from './components/EasterEgg';
import ScrollButton from './components/ScrollButton';

function App() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = '#000000';

    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          section.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      {isDesktop && <CustomCursor />}
      <Hero />
      <About />
      <Services />
      <Tools />
      <StartHub />
      <Videos />
      <Contact />
      <Footer />
      <EasterEgg />
      <ScrollButton />
    </div>
  );
}

export default App;