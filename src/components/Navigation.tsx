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
    { name: 'Ideas Lab', id: 'ideas-lab' },
    { name: 'Videos', id: 'videos' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-xl shadow-2xl shadow-yellow-400/25 border-b border-yellow-400/15'
            : 'bg-black/40 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 max-w-7xl relative">
          <div className="flex items-center justify-between relative z-40">
            {/* Logo with enhanced hover animation */}
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
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow-[0_0_15px_rgba(250,204,21,0.9)] group-hover:drop-shadow-[0_0_20px_rgba(250,204,21,1)]"
                />
              </div>
              <span className="text-2xl sm:text-3xl font-black tracking-tight">
                <span className="text-white">Neo</span>
                <span className="text-yellow-400 drop-shadow-[0_0_12px_rgba(250,204,21,0.7)]">vate</span>
              </span>
            </button>

            {/* Desktop Navigation - Enhanced with glow and stagger animation */}
            <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
              {navLinks.map((link, index) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  style={{ animationDelay: `${index * 50}ms` }}
                  className="text-white hover:text-yellow-400 transition-all duration-400 text-base xl:text-lg font-bold relative group py-2 overflow-hidden"
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-400 shadow-[0_0_10px_rgba(250,204,21,0.8)]"></span>
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="relative px-6 py-2 xl:px-8 xl:py-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-bold rounded-full hover:from-yellow-300 hover:via-yellow-400 hover:to-yellow-500 transition-all duration-400 shadow-[0_0_25px_rgba(250,204,21,0.6)] hover:shadow-[0_0_40px_rgba(250,204,21,1)] hover:scale-105 transform overflow-hidden group text-sm xl:text-base"
              >
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>

            {/* Tablet/Mobile CTA Button - Hidden on desktop, shown on smaller screens */}
            <div className="lg:hidden flex items-center space-x-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="hidden sm:flex px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-full hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-[0_0_15px_rgba(250,204,21,0.6)] hover:shadow-[0_0_25px_rgba(250,204,21,0.8)] text-sm"
              >
                Contact
              </button>

              {/* Mobile Menu Button - Enhanced with rotation */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-yellow-400 hover:text-yellow-300 transition-all duration-400 p-2 rounded-xl hover:bg-yellow-400/15 transform hover:rotate-12 z-50"
              >
                {isMobileMenuOpen ? <X size={28} className="w-7 h-7 sm:w-8 sm:h-8" /> : <Menu size={28} className="w-7 h-7 sm:w-8 sm:h-8" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation - Enhanced with slide-in and bottom gaps */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-6 space-y-2 border-t border-yellow-400/30 pt-4 bg-black/98 backdrop-blur-2xl rounded-b-2xl shadow-2xl shadow-yellow-400/20 relative z-50 animate-in slide-in-from-top duration-300">
              <div className="space-y-1">
                {navLinks.map((link, index) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    style={{ animationDelay: `${index * 100}ms` }}
                    className="block w-full text-left text-white hover:text-yellow-400 hover:bg-gradient-to-r hover:from-yellow-400/10 hover:to-yellow-500/10 transition-all duration-400 py-3 px-4 sm:py-4 sm:px-6 text-base sm:text-lg font-bold rounded-lg sm:rounded-xl mx-1 sm:mx-2 group relative overflow-hidden"
                  >
                    <div className="flex items-center space-x-3 sm:space-x-4 relative z-10">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-400"></div>
                      <span>{link.name}</span>
                    </div>
                    <div className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 group-hover:w-full transition-all duration-400 shadow-[0_0_8px_rgba(250,204,21,0.6)]"></div>
                  </button>
                ))}
              </div>
              <div className="px-4 sm:px-6 pt-4 border-t border-yellow-400/20 mt-2 rounded-b-2xl">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-bold rounded-full hover:from-yellow-300 hover:via-yellow-400 hover:to-yellow-500 transition-all duration-400 shadow-[0_0_25px_rgba(250,204,21,0.6)] hover:shadow-[0_0_35px_rgba(250,204,21,1)] hover:scale-105 transform text-base sm:text-lg overflow-hidden group relative"
                >
                  <span className="relative z-10">Get a Quote</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </div>
              {/* Bottom gaps for left and right corners */}
              <div className="absolute bottom-0 left-0 w-1/2 h-3 bg-gradient-to-r from-black/95 to-transparent rounded-br-2xl pointer-events-none"></div>
              <div className="absolute bottom-0 right-0 w-1/2 h-3 bg-gradient-to-l from-black/95 to-transparent rounded-bl-2xl pointer-events-none"></div>
            </div>
          )}
        </div>
      </nav>

      {/* Enhanced global styles for better responsiveness */}
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
        
        /* Improved mobile responsiveness */
        @media (max-width: 640px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .container {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
        }
        
        /* Prevent body scroll when mobile menu is open */
        body:has(nav [aria-expanded="true"]) {
          overflow: hidden;
        }
      `}</style>
    </>
  );
}