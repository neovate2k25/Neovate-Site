import { useState, useEffect, useRef } from 'react';
import { Rocket, Eye, Briefcase, Megaphone, Code, Smartphone, Palette, Users, Camera, BarChart3, Brain, Video } from 'lucide-react';
import neovateLogo from '../assets/Neovate-st.webp';

// Stable reference outside component
const services = [
  { name: 'Web Development', icon: Code, color: 'from-blue-500 to-cyan-500' },
  { name: 'Branding', icon: Palette, color: 'from-red-500 to-orange-500' },
  { name: 'Digital Marketing', icon: Megaphone, color: 'from-purple-500 to-pink-500' },
  { name: 'Social Media Handling', icon: Users, color: 'from-indigo-500 to-blue-500' },
  { name: 'App Development', icon: Smartphone, color: 'from-green-500 to-emerald-500' },
  { name: 'Multimedia Support', icon: Video, color: 'from-yellow-500 to-orange-500' },
  { name: 'Training & Internships', icon: Users, color: 'from-gray-500 to-blue-500' },
  { name: 'Google & Meta Ads', icon: BarChart3, color: 'from-teal-500 to-green-500' },
  { name: 'AI Integration', icon: Brain, color: 'from-purple-500 to-indigo-500' },
  { name: 'Photo/Video Editing', icon: Camera, color: 'from-pink-500 to-rose-500' },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState(520);
  const [positions, setPositions] = useState<{ [key: string]: { left: string; top: string } }>({});

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  // Update size and positions on resize
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const size = Math.min(rect.width, rect.height);
        setContainerSize(size);

        const center = size / 2;
        const itemsPerLayer = 5;
        const newPositions: { [key: string]: { left: string; top: string } } = {};

        services.forEach((service, index) => {
          const layer = index < itemsPerLayer ? 1 : 2;
          const layerIndex = layer === 1 ? index : index - itemsPerLayer;
          const segment = 360 / itemsPerLayer;
          const stagger = layer === 2 ? segment / 2 : 0;
          const angleDeg = layerIndex * segment + stagger;
          const angle = (angleDeg * Math.PI) / 180;

          const baseRadius1 = 150;
          const baseRadius2 = 240;
          const scale = size / 520;
          const radius = layer === 1 ? baseRadius1 * scale : baseRadius2 * scale;

          const minRadius1 = 80;
          const minRadius2 = 140;
          const adjustedRadius = Math.max(layer === 1 ? minRadius1 : minRadius2, radius);

          const x = center + adjustedRadius * Math.cos(angle);
          const y = center + adjustedRadius * Math.sin(angle);

          newPositions[service.name] = {
            left: `${x}px`,
            top: `${y}px`,
          };
        });

        setPositions(newPositions);
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Dynamic SVG lines
  const [svgViewBox, setSvgViewBox] = useState('0 0 520 520');
  const [lines, setLines] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const center = containerSize / 2;
    const itemsPerLayer = 5;
    const baseRadius1 = 150;
    const baseRadius2 = 240;
    const scale = containerSize / 520;
    const minRadius1 = 80;
    const minRadius2 = 140;

    setSvgViewBox(`0 0 ${containerSize} ${containerSize}`);

    const newLines: React.ReactNode[] = [];
    services.forEach((_, index) => {
      const layer = index < itemsPerLayer ? 1 : 2;
      const layerIndex = layer === 1 ? index : index - itemsPerLayer;
      const segment = 360 / itemsPerLayer;
      const stagger = layer === 2 ? segment / 2 : 0;
      const angle = ((layerIndex * segment + stagger) * Math.PI) / 180;
      const radius = Math.max(layer === 1 ? minRadius1 : minRadius2, (layer === 1 ? baseRadius1 : baseRadius2) * scale);
      const x = center + radius * Math.cos(angle);
      const y = center + radius * Math.sin(angle);

      newLines.push(
        <line
          key={`line-${index}`}
          x1={center}
          y1={center}
          x2={x}
          y2={y}
          stroke="url(#lineGradient)"
          strokeWidth={1.5}
          strokeDasharray="3 3"
          className="opacity-70"
        />
      );
    });

    setLines(newLines);
  }, [containerSize]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-start overflow-hidden bg-gradient-to-b from-black/80 via-black/70 to-transparent"
      aria-label="Hero: Neovate — innovation and services"
    >
      {/* Background diagonal animated lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0">
          {[...Array(18)].map((_, i) => (
            <div
              key={`gold-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"
              style={{
                top: `${(i * 5) + 6}%`,
                left: '-120%',
                width: '240%',
                animation: `slide-diagonal ${9 + i * 0.25}s linear infinite`,
                animationDelay: `${i * 0.2}s`,
                transform: 'rotate(-6deg)',
              }}
            />
          ))}

          {[...Array(12)].map((_, i) => (
            <div
              key={`white-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-white/12 to-transparent"
              style={{
                top: `${(i * 8) + 8}%`,
                left: '-120%',
                width: '240%',
                animation: `slide-diagonal ${11 + i * 0.35}s linear infinite`,
                animationDelay: `${i * 0.3}s`,
                transform: 'rotate(-6deg)',
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 px-6 max-w-7xl mx-auto w-full pt-20 lg:pt-24 pb-12 flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-16">
        {/* LEFT: Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8">
  <span className="block text-white drop-shadow-md animate-fade-in-up">Innovation starts</span>
  <span className="block text-yellow-400 animate-fade-in-up animation-delay-200">with us.</span>
</h1>

<p className="text-lg md:text-xl text-gray-300 mb-6 animate-fade-in-up animation-delay-400 leading-relaxed">
  Transform your ideas into reality with Neovate — a student-led startup crafting intelligent solutions in web development, app creation, and AI-driven automation.
</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mt-2">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 sm:px-8 py-3 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:scale-105 flex items-center gap-2"
              aria-label="Get a quote"
            >
              <Rocket size={18} />
              Get in Touch
            </button>

            <button
              onClick={() => scrollToSection('services')}
              className="px-6 sm:px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-yellow-400/50 hover:scale-105 flex items-center gap-2"
              aria-label="View our services"
            >
              <Eye size={18} />
              View Services
            </button>

            <button
              onClick={() => scrollToSection('starthub')}
              className="px-6 sm:px-7 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-yellow-400/50 hover:scale-105 flex items-center gap-2"
              aria-label="Start your project"
            >
              <Briefcase size={18} />
              Startup Hub
            </button>
          </div>
        </div>

        {/* RIGHT: Visual Service Hub */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div ref={containerRef} className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[520px] lg:h-[520px]">
            {/* Center Logo Circle */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 max-w-full max-h-full">
                <div className="relative w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center transform transition-transform duration-500 group-hover:scale-105">
                  <div className="w-44 h-44 sm:w-48 sm:h-48 bg-white/95 rounded-2xl flex items-center justify-center shadow-inner">
                    <img
                      src={neovateLogo}
                      alt="Neovate animated logo"
                      className="w-40 h-40 sm:w-44 sm:h-44 object-cover rounded-lg animate-float"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Service Circles */}
            {services.map((service) => {
              const pos = positions[service.name];
              if (!pos) return null;

              const Icon = service.icon;

              return (
                <div
                  key={service.name}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: pos.left, top: pos.top }}
                >
                  <div className="relative flex items-center justify-center" title={service.name} tabIndex={0} role="button">
                    <div className={`relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${service.color} rounded-full flex flex-col items-center justify-center p-2 transform transition-all duration-400 hover:scale-110 focus:scale-110`}>
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                      <span className="text-[10px] sm:text-xs font-semibold text-white text-center leading-tight mt-1 truncate max-w-[64px]">
                        {service.name}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox={svgViewBox} preserveAspectRatio="xMidYMid meet" aria-hidden="true">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.35" />
                </linearGradient>
              </defs>
              {lines}
            </svg>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      
    </section>
  );
}