import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'StartHub', id: 'starthub' },
    { name: 'Tools', id: 'tools' },
    { name: 'Why Neovate', id: 'why-neovate' },
    { name: 'Ideas Lab', id: 'ideas-lab' },
    { name: 'Videos', id: 'videos' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-lg shadow-lg shadow-yellow-400/10' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
            className="flex items-center space-x-2 group cursor-pointer"
          >
            <div className={`transition-all duration-500 ${isLogoHovered ? 'rotate-180 scale-110' : ''}`}>
              <Zap className="w-8 h-8 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]" fill="currentColor" />
            </div>
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-white">Neo</span>
              <span className="text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.6)]">vate</span>
            </span>
          </button>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-white hover:text-yellow-400 transition-all duration-300 text-sm font-medium relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition-all duration-300 shadow-[0_0_20px_rgba(250,204,21,0.5)] hover:shadow-[0_0_30px_rgba(250,204,21,0.8)] hover:scale-105"
            >
              Get a Quote
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-yellow-400 hover:text-yellow-300 transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 space-y-4 border-t border-yellow-400/20 pt-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-white hover:text-yellow-400 transition-colors py-2 text-sm font-medium"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full px-6 py-2.5 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition-all duration-300"
            >
              Get a Quote
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
