import { useState } from 'react';
import neovateLogo from '../assets/LoGo.webp';

export default function Footer() {
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Startup Hub', id: 'starthub' },
    // { name: 'Ideas Lab', id: 'ideas-lab' },
    { name: 'Video Hub', id: 'videos' },
  ];

  const socialLinks = [
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/neovate_ai',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/company/neovate-ai',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    { 
      name: 'YouTube', 
      url: 'https://www.youtube.com/@Neovate-ai',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    { 
      name: 'X (Twitter)', 
      url: 'https://x.com/Neovate_AI',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    { 
      name: 'Threads', 
      url: 'https://www.threads.com/@neovate_ai',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-13h2v6h-2V7zm0 8h2v2h-2v-2z"/>
        </svg>
      )
    },
  ];

  // JSON-LD Schema for Organization (SEO boost)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Neovate",
    "url": "https://neovateai.tech", // Update with your domain
    "logo": "https://neovateai.tech/assets/LoGo.webp", // Full URL to logo
    "description": "Student-led software development startup in New Delhi, specializing in AI automation, web, and mobile solutions.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "url": "https://neovateai.tech/contact"
    },
    "sameAs": socialLinks.map(link => link.url) // All social profiles
  };

  return (
    <>
      <footer className="relative bg-black border-t border-yellow-400/30 py-12">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>

        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-8">
            {/* Logo Section */}
            <div className="flex flex-col items-center lg:items-start space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                onMouseEnter={() => setIsLogoHovered(true)}
                onMouseLeave={() => setIsLogoHovered(false)}
                className="flex items-center space-x-3 group cursor-pointer transition-all duration-500"
                aria-label="Neovate Home"
              >
                <div className={`transition-all duration-700 ease-out ${isLogoHovered ? 'rotate-12 scale-110' : ''}`}>
                  <img
                    src={neovateLogo}
                    alt="Neovate Logo - Student-Led Software Development Startup"
                    className="w-10 h-10 object-contain"
                    loading="lazy" // Perf boost
                  />
                </div>
                <span className="text-3xl font-black tracking-tight">
                  <span className="text-white">Neo</span>
                  <span className="text-yellow-400">vate</span>
                </span>
              </button>
              
              {/* Social Media Links */}
              <div className="flex space-x-4" role="list">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-yellow-400 hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-yellow-400/10"
                    aria-label={`Follow us on ${social.name}`}
                    role="listitem"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4" role="navigation" aria-label="Main navigation">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-400 hover:text-yellow-400 transition-all duration-300 text-base font-semibold relative group py-2"
                  aria-label={`Scroll to ${link.name} section`}
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
              {/* Contact Button */}
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-400 hover:text-yellow-400 transition-all duration-300 text-base font-semibold relative group py-2"
                aria-label="Scroll to Contact section"
              >
                <span className="relative z-10">Contact</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            </nav>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent mb-8"></div>

          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2026 <span className="text-yellow-400 font-semibold">Neovate</span> | All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Innovating the New
            </p>
            <p className="text-gray-600 text-lg mt-2">
              Developed by <a href="https://www.sanjayn.me" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">Sanjay N</a>
            </p>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                opacity: 0.2,
              }}
            />
          ))}
        </div>
      </footer>

      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}