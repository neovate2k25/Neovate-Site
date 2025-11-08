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
    { name: 'StartHub', id: 'starthub' },
    // { name: 'Tools', id: 'tools' },
    // { name: 'Why Neovate', id: 'why-neovate' },
    { name: 'Ideas Lab', id: 'ideas-lab' },
    { name: 'Videos', id: 'videos' },
    // { name: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-xl shadow-2xl shadow-yellow-400/25 border-b border-yellow-400/15 rounded-b-xl px-4'
            : 'bg-transparent px-0'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-4 max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Logo with enhanced hover animation */}
            <button
              onClick={() => scrollToSection('home')}
              onMouseEnter={() => setIsLogoHovered(true)}
              onMouseLeave={() => setIsLogoHovered(false)}
              className="flex items-center space-x-3 group cursor-pointer transition-all duration-500"
            >
              <div className={`transition-all duration-700 ease-out ${isLogoHovered ? 'rotate-12 scale-110' : ''}`}>
                <img
                  src={neovateLogo}
                  alt="Neovate Icon"
                  className="w-10 h-10 object-contain drop-shadow-[0_0_15px_rgba(250,204,21,0.9)] group-hover:drop-shadow-[0_0_20px_rgba(250,204,21,1)]"
                />
              </div>
              <span className="text-3xl font-black tracking-tight">
              <span className="text-white">Neo</span>
              <span className="text-yellow-400 drop-shadow-[0_0_12px_rgba(250,204,21,0.7)]">vate</span>
            </span>
            </button>

            {/* Desktop Navigation - Enhanced with glow and stagger animation */}
            <div className="hidden lg:flex items-center space-x-12">
              {navLinks.map((link, index) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  style={{ animationDelay: `${index * 50}ms` }}
                  className="text-white hover:text-yellow-400 transition-all duration-400 text-lg font-bold relative group py-2 overflow-hidden"
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-400 shadow-[0_0_10px_rgba(250,204,21,0.8)]"></span>
                  {/* <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 to-yellow-400/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div> */}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="relative px-8 py-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-bold rounded-full hover:from-yellow-300 hover:via-yellow-400 hover:to-yellow-500 transition-all duration-400 shadow-[0_0_25px_rgba(250,204,21,0.6)] hover:shadow-[0_0_40px_rgba(250,204,21,1)] hover:scale-105 transform overflow-hidden group"
              >
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>

            {/* Mobile Menu Button - Enhanced with rotation */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-yellow-400 hover:text-yellow-300 transition-all duration-400 p-2 rounded-xl hover:bg-yellow-400/15 transform hover:rotate-12"
            >
              {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>

          {/* Mobile Navigation - Enhanced with slide-in and bottom gaps */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-6 pb-8 space-y-4 border-t border-yellow-400/30 pt-6 bg-black/90 backdrop-blur-2xl rounded-b-3xl shadow-2xl shadow-yellow-400/20 mx-4 relative">
              <div className="space-y-3">
                {navLinks.map((link, index) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    style={{ animationDelay: `${index * 100}ms` }}
                    className="block w-full text-left text-white hover:text-yellow-400 hover:bg-gradient-to-r hover:from-yellow-400/10 hover:to-yellow-500/10 transition-all duration-400 py-4 px-6 text-lg font-bold rounded-xl mx-2 group relative overflow-hidden"
                  >
                    <div className="flex items-center space-x-4 relative z-10">
                      <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-400"></div>
                      <span>{link.name}</span>
                    </div>
                    <div className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 group-hover:w-full transition-all duration-400 shadow-[0_0_8px_rgba(250,204,21,0.6)]"></div>
                  </button>
                ))}
              </div>
              <div className="px-6 pt-6 border-t border-yellow-400/20 mt-4 rounded-b-2xl">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full px-8 py-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-bold rounded-full hover:from-yellow-300 hover:via-yellow-400 hover:to-yellow-500 transition-all duration-400 shadow-[0_0_25px_rgba(250,204,21,0.6)] hover:shadow-[0_0_35px_rgba(250,204,21,1)] hover:scale-105 transform text-lg overflow-hidden group relative"
                >
                  <span className="relative z-10">Get a Quote</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </div>
              {/* Bottom gaps for left and right corners */}
              <div className="absolute bottom-0 left-0 w-1/2 h-4 bg-gradient-to-r from-black/95 to-transparent rounded-br-3xl pointer-events-none"></div>
              <div className="absolute bottom-0 right-0 w-1/2 h-4 bg-gradient-to-l from-black/95 to-transparent rounded-bl-3xl pointer-events-none"></div>
            </div>
          )}
        </div>
      </nav>

      {/* Enhanced global styles for better responsiveness - moved outside nav to avoid attribute issues */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        nav .container > div > button {
          animation: slideIn 0.6s ease-out forwards;
        }
        @media (max-width: 1024px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </>
  );
}