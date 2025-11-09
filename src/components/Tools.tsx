import React, { useState, useEffect, useRef } from 'react';
import { Code, Cpu, Database, Smartphone, Zap } from 'lucide-react';

// Define the type for tech stack items
interface TechStack {
  name: string;
  svg: JSX.Element;
  category: string;
}

const techStacks: TechStack[] = [
  // Frontend Web
  { name: 'HTML', category: 'frontend', svg: (<svg width="100%" height="100%" viewBox="0 0 128 128"><path fill="#E44D26" d="M19.5 114.5L8.1 0h111.8l-11.4 114.5L63.9 128"/><path fill="#F16529" d="M64 117.2l36.8-10.2 9.8-109.7H64"/><path fill="#EBEBEB" d="M64 66.7H45.6l-1.2-13.7H64V39.7H32.7l.3 3.7 3.1 34.7H64zM64 98.2h-.1l-15.4-4.2-.9-10.2H36.2l1.7 19.2 26 7.2h.1z"/><path fill="#FFF" d="M63.9 66.7v13.3h15.7l-1.5 16.6-14.2 4.2v13.2l26-7.2 1.7-19.2H63.9zM63.9 39.7v13.3h28.1l.3-3.7.7-7.9.2-1.7z"/></svg>) },
  { name: 'CSS', category: 'frontend', svg: (<svg width="100%" height="100%" viewBox="0 0 128 128"><path fill="#1572B6" d="M19.5 114.5L8.1 0h111.8l-11.4 114.5L63.9 128"/><path fill="#33A9DC" d="M64 117.2l36.8-10.2 9.8-109.7H64"/><path fill="#fff" d="M64 66.7H45.6l-1.2-13.7H64V39.7H32.7l.3 3.7 3.1 34.7H64zM64 98.2h-.1l-15.4-4.2-.9-10.2H36.2l1.7 19.2 26 7.2h.1z"/><path fill="#EBEBEB" d="M63.9 66.7v13.3h15.7l-1.5 16.6-14.2 4.2v13.2l26-7.2 1.7-19.2H63.9zM63.9 39.7v13.3h28.1l.3-3.7.7-7.9.2-1.7z"/></svg>) },
  { name: 'JavaScript', category: 'frontend', svg: (<svg width="100%" height="100%" viewBox="0 0 128 128"><path fill="#F7DF1E" d="M1.408 1.408h125.184v125.185H1.408z"/><path d="M116.407 116.407H11.593V11.593h104.814z" fill="none"/><path d="M89.462 106.01c2.184 3.572 5.01 6.188 10.02 6.188 4.205 0 6.89-2.104 6.89-5.01 0-3.484-2.77-4.72-7.44-6.75l-2.56-1.1c-7.39-3.15-12.29-7.1-12.29-15.43 0-7.68 5.86-13.53 15.02-13.53 6.52 0 11.22 2.27 14.59 8.22l-7.99 5.13c-1.76-3.13-3.66-4.36-6.6-4.36-3.01 0-4.92 1.91-4.92 4.36 0 3.05 1.91 4.28 6.33 6.16l2.56 1.1c8.71 3.73 13.61 7.44 13.61 15.89 0 9.1-7.15 14.08-16.77 14.08-9.39 0-15.47-4.48-18.42-10.36zm-36.36.85c1.34 2.38 2.56 4.39 5.49 4.39 2.8 0 4.57-1.1 4.57-5.38V70.98h9.01v34.98c0 9.36-5.5 13.62-13.53 13.62-7.25 0-11.48-3.76-13.65-8.32z"/></svg>) },
  { name: 'TypeScript', category: 'frontend', svg: (<svg width="100%" height="100%" viewBox="0 0 128 128"><rect width="128" height="128" rx="16" fill="#3178C6"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="40" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">TS</text></svg>) },
  { name: 'React.js', category: 'frontend', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><g fill="none"><circle cx="64" cy="64" r="11" fill="#61DAFB"/><g stroke="#61DAFB" strokeWidth="4"><ellipse rx="56" ry="22" cx="64" cy="64" transform="rotate(60 64 64)"/><ellipse rx="56" ry="22" cx="64" cy="64" transform="rotate(120 64 64)"/><ellipse rx="56" ry="22" cx="64" cy="64"/></g></g></svg>) },
  { name: 'Angular', category: 'frontend', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><polygon fill="#dd0031" points="64,8 8,32 20,112 64,128 108,112 120,32"/><polygon fill="#c3002f" points="64,8 64,128 108,112 120,32"/><polygon fill="#fff" points="64,24 32,104 48,104 64,64 80,104 96,104"/></svg>) },
  { name: 'Tailwind CSS', category: 'frontend', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><path fill="#38BDF8" d="M64 32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm0 58c-14.4 0-26-11.6-26-26s11.6-26 26-26 26 11.6 26 26-11.6 26-26 26z"/></svg>) },
  { name: 'Bootstrap', category: 'frontend', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><rect width="128" height="128" rx="16" fill="#7952B3"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="40" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">B</text></svg>) },

  // Backend Web
  { name: 'Node.js', category: 'backend', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><path fill="#8CC84B" d="M64 8.1l54.6 31.5v48.8L64 119.9 9.4 88.4V39.6z"/><path fill="#fff" d="M64 16.6l47.1 27.2v40.4L64 111.4 16.9 84.2V43.8z"/><path fill="#333" d="M64 24.2l39.6 22.9v34.2L64 103.8 24.4 81.3V47.1z"/></svg>) },
  { name: 'Express.js', category: 'backend', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><rect width="128" height="128" rx="16" fill="#222"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="28" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">Express</text></svg>) },
  { name: 'Django', category: 'backend', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><rect width="128" height="128" rx="16" fill="#092E20"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="28" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">Dj</text></svg>) },
  { name: 'Flask', category: 'backend', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><rect width="128" height="128" rx="16" fill="#000"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="28" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">Flask</text></svg>) },
  { name: 'Spring Boot', category: 'backend', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><rect width="128" height="128" rx="16" fill="#6DB33F"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="20" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">Spring</text></svg>) },
  { name: 'PHP', category: 'backend', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><ellipse fill="#777BB4" cx="64" cy="64" rx="56" ry="40"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="28" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">PHP</text></svg>) },

  // Databases
  { name: 'MongoDB', category: 'database', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><path fill="#13AA52" d="M64 2.5c-34 0-61.5 27.5-61.5 61.5s27.5 61.5 61.5 61.5 61.5-27.5 61.5-61.5S98 2.5 64 2.5zm0 117c-30.6 0-55.5-24.9-55.5-55.5S33.4 8.5 64 8.5s55.5 24.9 55.5 55.5-24.9 55.5-55.5 55.5z"/><path fill="#FFF" d="M64 32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm0 58c-14.4 0-26-11.6-26-26s11.6-26 26-26 26 11.6 26 26-11.6 26-26 26z"/></svg>) },
  { name: 'MySQL', category: 'database', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><ellipse fill="#00758F" cx="64" cy="64" rx="56" ry="56"/><path fill="#F29111" d="M64 32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm0 58c-14.4 0-26-11.6-26-26s11.6-26 26-26 26 11.6 26 26-11.6 26-26 26z"/></svg>) },
  { name: 'PostgreSQL', category: 'database', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><ellipse fill="#336791" cx="64" cy="64" rx="56" ry="56"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="20" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">PG</text></svg>) },
  { name: 'Firebase', category: 'database', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><polygon fill="#FFCA28" points="64,20 100,108 28,108"/><polygon fill="#FFA000" points="64,20 64,108 100,108"/></svg>) },

  // Mobile
  { name: 'React Native', category: 'mobile', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><g fill="none"><circle cx="64" cy="64" r="11" fill="#61DAFB"/><g stroke="#61DAFB" strokeWidth="4"><ellipse rx="56" ry="22" cx="64" cy="64" transform="rotate(60 64 64)"/><ellipse rx="56" ry="22" cx="64" cy="64" transform="rotate(120 64 64)"/><ellipse rx="56" ry="22" cx="64" cy="64"/></g></g></svg>) },
  { name: 'Flutter', category: 'mobile', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><polygon fill="#02569B" points="28,100 64,20 100,100"/><polygon fill="#0175C2" points="64,20 64,100 100,100"/></svg>) },
  { name: 'Android Studio', category: 'mobile', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><circle cx="64" cy="64" r="56" fill="#3DDC84"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="20" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">Android</text></svg>) },
  { name: 'Swift', category: 'mobile', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><rect width="128" height="128" rx="16" fill="#FA7343"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="24" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">Swift</text></svg>) },
  { name: 'Expo Go', category: 'mobile', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><polygon fill="#1B1F23" points="64,20 100,108 28,108"/><text x="50%" y="80%" textAnchor="middle" fontSize="18" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">Expo</text></svg>) },

  // Other Tools
  { name: 'GitHub', category: 'tools', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><circle cx="64" cy="64" r="56" fill="#181717"/><path fill="#fff" d="M64 24c-22.1 0-40 17.9-40 40 0 17.7 11.5 32.7 27.5 38.1 2 .4 2.7-.9 2.7-2v-7c-11.2 2.4-13.5-5.4-13.5-5.4-1.8-4.5-4.5-5.7-4.5-5.7-3.7-2.5.3-2.5.3-2.5 4.1.3 6.3 4.2 6.3 4.2 3.6 6.2 9.4 4.4 11.7 3.4.4-2.6 1.4-4.4 2.5-5.4-9-1-18.5-4.5-18.5-20.1 0-4.4 1.6-8 4.2-10.8-.4-1-1.8-5 .4-10.4 0 0 3.4-1.1 11.2 4.1 3.2-.9 6.6-1.4 10-1.4s6.8.5 10 1.4c7.8-5.2 11.2-4.1 11.2-4.1 2.2 5.4.8 9.4.4 10.4 2.6 2.8 4.2 6.4 4.2 10.8 0 15.7-9.5 19.1-18.5 20.1 1.4 1.2 2.7 3.6 2.7 7.3v10.8c0 1.1.7 2.4 2.7 2C92.5 96.7 104 81.7 104 64c0-22.1-17.9-40-40-40z"/></svg>) },
  { name: 'Figma', category: 'tools', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><circle cx="64" cy="64" r="56" fill="#fff"/><circle cx="64" cy="40" r="16" fill="#F24E1E"/><circle cx="64" cy="64" r="16" fill="#A259FF"/><circle cx="64" cy="88" r="16" fill="#1ABCFE"/><circle cx="88" cy="64" r="16" fill="#0ACF83"/><circle cx="40" cy="64" r="16" fill="#FF7262"/></svg>) },
  { name: 'Docker', category: 'tools', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><rect width="128" height="128" rx="16" fill="#2496ED"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="24" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">Docker</text></svg>) },
  { name: 'GraphQL', category: 'tools', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><circle cx="64" cy="64" r="56" fill="#E10098"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="20" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">GraphQL</text></svg>) },
  { name: 'AWS', category: 'tools', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><rect width="128" height="128" rx="16" fill="#232F3E"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="24" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">AWS</text></svg>) },
];

// Helper to split array into n nearly equal parts
function splitArray(array: TechStack[], n: number): TechStack[][] {
  const result: TechStack[][] = Array.from({ length: n }, () => []);
  array.forEach((item, i) => {
    result[i % n].push(item);
  });
  return result;
}

const rows = splitArray(techStacks, 3);

function getRowAnimation(row: number, isMobile: boolean): React.CSSProperties {
  const duration = isMobile ? '20s' : '30s';
  return {
    animation: row % 2 === 0 
      ? `marqueeX ${duration} linear infinite` 
      : `marqueeXReverse ${duration} linear infinite`,
  };
}

function TechStacks() {
  const [isMobile, setIsMobile] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
        setScrollY(scrollProgress);
        
        // Check if section is in view
        if (rect.top < window.innerHeight * 0.8) {
          setInView(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkIsMobile);
    
    // Initial checks
    checkIsMobile();
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const categories = [
    { icon: Code, name: 'Frontend', color: 'from-blue-400 to-cyan-400' },
    { icon: Cpu, name: 'Backend', color: 'from-green-400 to-emerald-400' },
    { icon: Database, name: 'Database', color: 'from-purple-400 to-pink-400' },
    { icon: Smartphone, name: 'Mobile', color: 'from-orange-400 to-red-400' },
    { icon: Zap, name: 'Tools', color: 'from-yellow-400 to-amber-400' },
  ];

  return (
    <section
      id="tech-stacks"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50"></div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div
          className="text-center transition-all duration-1000 mb-16"
          style={{
            opacity: scrollY,
            transform: `translateY(${(1 - scrollY) * 50}px)`,
          }}
        >
          <h2
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{
              transform: `translateZ(${scrollY * 30}px) scale(${0.8 + scrollY * 0.2})`,
            }}
          >
            <span className="text-white">Tech</span>
            <span className="text-yellow-400 drop-shadow-[0_0_20px_rgba(250,204,21,0.8)]">Stack</span>
          </h2>

          <div
            className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed mb-8"
            style={{
              transform: `translateZ(${scrollY * 20}px)`,
            }}
          >
            <p className="max-w-3xl mx-auto">
              We master a comprehensive suite of modern technologies to deliver 
              <span className="text-yellow-400 font-semibold"> cutting-edge solutions</span>. 
              From frontend to backend, mobile to cloud — our expertise spans the entire development spectrum.
            </p>
          </div>
        </div>

        {/* Category Icons */}
        <div className="flex justify-center flex-wrap gap-6 mb-12">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className={`flex flex-col items-center transition-all duration-500 transform ${
                inView 
                  ? 'translate-y-0 opacity-100 scale-100' 
                  : 'translate-y-10 opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-3 transform transition-all duration-300 hover:scale-110 hover:rotate-12 group`}>
                <category.icon size={28} className="text-black group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-gray-300 font-semibold text-sm">{category.name}</span>
            </div>
          ))}
        </div>

        {/* Animated Tech Stack Rows */}
        <div
          className={`relative w-full h-[300px] md:h-[360px] flex flex-col justify-center space-y-6 md:space-y-8 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {rows.map((rowStacks, row) => (
            <div
              key={row}
              className="flex items-center gap-4 md:gap-8 whitespace-nowrap will-change-transform"
              style={getRowAnimation(row, isMobile)}
            >
              {rowStacks.map((stack, i) => (
                <div
                  key={`${stack.name}-${row}-${i}`}
                  className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black border-2 border-yellow-400/20 rounded-2xl p-4 md:p-6 shadow-lg hover:scale-105 transition-all duration-300 group hover:border-yellow-400/50"
                  style={{
                    boxShadow: '0 0 20px rgba(250, 204, 21, 0.1)',
                  }}
                >
                  <div className="mb-2 md:mb-3 w-10 h-10 md:w-12 md:h-12 group-hover:scale-110 transition-transform duration-300">
                    {stack.svg}
                  </div>
                  <span className="text-white text-sm md:text-lg font-semibold drop-shadow-md">
                    {stack.name}
                  </span>
                </div>
              ))}
              {/* Duplicate for seamless looping */}
              {rowStacks.map((stack, i) => (
                <div
                  key={`${stack.name}-dup-${row}-${i}`}
                  className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black border-2 border-yellow-400/20 rounded-2xl p-4 md:p-6 shadow-lg hover:scale-105 transition-all duration-300 group hover:border-yellow-400/50"
                  aria-hidden="true"
                  style={{
                    boxShadow: '0 0 20px rgba(250, 204, 21, 0.1)',
                  }}
                >
                  <div className="mb-2 md:mb-3 w-10 h-10 md:w-12 md:h-12 group-hover:scale-110 transition-transform duration-300">
                    {stack.svg}
                  </div>
                  <span className="text-white text-sm md:text-lg font-semibold drop-shadow-md">
                    {stack.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${
            inView 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-yellow-400"></div>
            <Zap size={24} className="text-yellow-400 animate-pulse" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-yellow-400"></div>
          </div>
          <p className="text-yellow-400 font-bold text-xl md:text-2xl max-w-2xl mx-auto">
            " Powering Innovation with Modern Technology "
          </p>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              opacity: 0.3 + Math.random() * 0.4,
            }}
          />
        ))}
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-yellow-400/20 rounded-full animate-float">
          <div className="absolute inset-0 bg-yellow-400/40 rounded-full animate-ping"></div>
        </div>
        <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-yellow-400/30 rounded-full animate-float" style={{animationDelay: '1s'}}>
          <div className="absolute inset-0 bg-yellow-400/50 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        </div>
      </div>

      <style>{`
        @keyframes marqueeX {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marqueeXReverse {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default TechStacks;