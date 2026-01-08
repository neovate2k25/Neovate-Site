import { useState, useEffect } from 'react';
import neovateLogo from '../assets/LoGo.png';
import { Menu, X } from 'lucide-react';

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
    { name: 'Startup Hub', id: 'starthub' },
    { name: 'Video Hub', id: 'videos' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-xl shadow-2xl border-b border-yellow-400/15'
            : 'bg-black/40 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 max-w-7xl relative">
          <div className="flex items-center justify-between relative z-40">
            {/* Logo - Simplified for mobile */}
            <button
              onClick={() => scrollToSection('home')}
              onMouseEnter={() => setIsLogoHovered(true)}
              onMouseLeave={() => setIsLogoHovered(false)}
              className="flex items-center space-x-2 sm:space-x-3 group cursor-pointer transition-all duration-500"
            >
              <div className={`transition-all duration-700 ease-out ${isLogoHovered ? 'rotate-12 scale-110' : ''}`}>
                <img
                  src={neovateLogo}
                  alt="Neovate Icon"
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>
              <span className="text-2xl sm:text-3xl font-black tracking-tight">
                <span className="text-white">Neo</span>
                <span className="text-yellow-400">vate</span>
              </span>
            </button>

            {/* Desktop Navigation - Unchanged */}
            <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
              {navLinks.map((link, index) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  style={{ animationDelay: `${index * 50}ms` }}
                  className="text-white hover:text-yellow-400 transition-all duration-400 text-base xl:text-lg font-bold relative group py-2 overflow-hidden"
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-400"></span>
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="relative px-6 py-2 xl:px-8 xl:py-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-bold rounded-full hover:from-yellow-300 hover:via-yellow-400 hover:to-yellow-500 transition-all duration-400 hover:scale-105 transform overflow-hidden group text-sm xl:text-base"
              >
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>

            {/* Mobile Menu Button - Simplified */}
            <div className="lg:hidden flex items-center space-x-4">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 p-2 rounded-lg z-50"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation - Completely Simplified */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-yellow-400/20">
              <div className="container mx-auto px-4 py-4">
                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className="block w-full text-left text-white hover:text-yellow-400 py-4 px-4 text-lg font-bold rounded-lg transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
                <div className="pt-4 mt-2 border-t border-yellow-400/20">
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="w-full px-6 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-full hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 text-lg"
                  >
                    Get in Touch
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Add spacer to prevent content from being hidden behind navbar */}
      <div className="h-16 lg:h-20"></div>

      {/* Simplified global styles */}
      <style>{`
        /* Prevent body scroll when mobile menu is open */
        body.no-scroll {
          overflow: hidden;
        }
      `}</style>
    </>
  );
}