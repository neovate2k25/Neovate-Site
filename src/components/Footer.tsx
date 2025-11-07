import { Zap } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = [
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
    <footer className="relative bg-black border-t border-yellow-400/30 py-12">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]" fill="currentColor" />
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-white">Neo</span>
              <span className="text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.6)]">vate</span>
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent mb-8"></div>

        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © 2025 <span className="text-yellow-400 font-semibold">Neovate</span>. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Innovating the New, One Project at a Time
          </p>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
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
  );
}
