import React, { useState, useEffect } from 'react';

interface TechStack {
  name: string;
  svg: React.ReactNode;
}

const techStacks: TechStack[] = [
  // Frontend Web
  { name: 'HTML', svg: (<svg width="100%" height="100%" viewBox="0 0 128 128"><path fill="#E44D26" d="M19.5 114.5L8.1 0h111.8l-11.4 114.5L63.9 128"/><path fill="#F16529" d="M64 117.2l36.8-10.2 9.8-109.7H64"/><path fill="#EBEBEB" d="M64 66.7H45.6l-1.2-13.7H64V39.7H32.7l.3 3.7 3.1 34.7H64zM64 98.2h-.1l-15.4-4.2-.9-10.2H36.2l1.7 19.2 26 7.2h.1z"/><path fill="#FFF" d="M63.9 66.7v13.3h15.7l-1.5 16.6-14.2 4.2v13.2l26-7.2 1.7-19.2H63.9zM63.9 39.7v13.3h28.1l.3-3.7.7-7.9.2-1.7z"/></svg>) },
  { name: 'CSS', svg: (<svg width="100%" height="100%" viewBox="0 0 128 128"><path fill="#1572B6" d="M19.5 114.5L8.1 0h111.8l-11.4 114.5L63.9 128"/><path fill="#33A9DC" d="M64 117.2l36.8-10.2 9.8-109.7H64"/><path fill="#fff" d="M64 66.7H45.6l-1.2-13.7H64V39.7H32.7l.3 3.7 3.1 34.7H64zM64 98.2h-.1l-15.4-4.2-.9-10.2H36.2l1.7 19.2 26 7.2h.1z"/><path fill="#EBEBEB" d="M63.9 66.7v13.3h15.7l-1.5 16.6-14.2 4.2v13.2l26-7.2 1.7-19.2H63.9zM63.9 39.7v13.3h28.1l.3-3.7.7-7.9.2-1.7z"/></svg>) },
  { name: 'JavaScript', svg: (<svg width="100%" height="100%" viewBox="0 0 128 128"><path fill="#F7DF1E" d="M1.408 1.408h125.184v125.185H1.408z"/><path d="M116.407 116.407H11.593V11.593h104.814z" fill="none"/><path d="M89.462 106.01c2.184 3.572 5.01 6.188 10.02 6.188 4.205 0 6.89-2.104 6.89-5.01 0-3.484-2.77-4.72-7.44-6.75l-2.56-1.1c-7.39-3.15-12.29-7.1-12.29-15.43 0-7.68 5.86-13.53 15.02-13.53 6.52 0 11.22 2.27 14.59 8.22l-7.99 5.13c-1.76-3.13-3.66-4.36-6.6-4.36-3.01 0-4.92 1.91-4.92 4.36 0 3.05 1.91 4.28 6.33 6.16l2.56 1.1c8.71 3.73 13.61 7.44 13.61 15.89 0 9.1-7.15 14.08-16.77 14.08-9.39 0-15.47-4.48-18.42-10.36zm-36.36.85c1.34 2.38 2.56 4.39 5.49 4.39 2.8 0 4.57-1.1 4.57-5.38V70.98h9.01v34.98c0 9.36-5.5 13.62-13.53 13.62-7.25 0-11.48-3.76-13.65-8.32z"/></svg>) },
  { name: 'TypeScript', svg: (<svg width="100%" height="100%" viewBox="0 0 128 128"><rect width="128" height="128" rx="16" fill="#3178C6"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="40" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">TS</text></svg>) },
  { name: 'React.js', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><g fill="none"><circle cx="64" cy="64" r="11" fill="#61DAFB"/><g stroke="#61DAFB" strokeWidth="4"><ellipse rx="56" ry="22" cx="64" cy="64" transform="rotate(60 64 64)"/><ellipse rx="56" ry="22" cx="64" cy="64" transform="rotate(120 64 64)"/><ellipse rx="56" ry="22" cx="64" cy="64"/></g></g></svg>) },
  { name: 'Angular', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><polygon fill="#dd0031" points="64,8 8,32 20,112 64,128 108,112 120,32"/><polygon fill="#c3002f" points="64,8 64,128 108,112 120,32"/><polygon fill="#fff" points="64,24 32,104 48,104 64,64 80,104 96,104"/></svg>) },
  { name: 'Tailwind CSS', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><path fill="#38BDF8" d="M64 32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm0 58c-14.4 0-26-11.6-26-26s11.6-26 26-26 26 11.6 26 26-11.6 26-26 26z"/></svg>) },
  { name: 'Bootstrap', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><rect width="128" height="128" rx="16" fill="#7952B3"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="40" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">B</text></svg>) },

  // Backend Web
  { name: 'Node.js', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><path fill="#8CC84B" d="M64 8.1l54.6 31.5v48.8L64 119.9 9.4 88.4V39.6z"/><path fill="#fff" d="M64 16.6l47.1 27.2v40.4L64 111.4 16.9 84.2V43.8z"/><path fill="#333" d="M64 24.2l39.6 22.9v34.2L64 103.8 24.4 81.3V47.1z"/></svg>) },
  { name: 'Express.js', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><rect width="128" height="128" rx="16" fill="#222"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="28" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">Express</text></svg>) },
  { name: 'Django', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><rect width="128" height="128" rx="16" fill="#092E20"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="28" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">Dj</text></svg>) },
  { name: 'Flask', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><rect width="128" height="128" rx="16" fill="#000"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="28" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">Flask</text></svg>) },
  { name: 'Spring Boot', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><rect width="128" height="128" rx="16" fill="#6DB33F"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="20" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">Spring</text></svg>) },
  { name: 'PHP', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><ellipse fill="#777BB4" cx="64" cy="64" rx="56" ry="40"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="28" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">PHP</text></svg>) },

  // Databases
  { name: 'MongoDB', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><path fill="#13AA52" d="M64 2.5c-34 0-61.5 27.5-61.5 61.5s27.5 61.5 61.5 61.5 61.5-27.5 61.5-61.5S98 2.5 64 2.5zm0 117c-30.6 0-55.5-24.9-55.5-55.5S33.4 8.5 64 8.5s55.5 24.9 55.5 55.5-24.9 55.5-55.5 55.5z"/><path fill="#FFF" d="M64 32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm0 58c-14.4 0-26-11.6-26-26s11.6-26 26-26 26 11.6 26 26-11.6 26-26 26z"/></svg>) },
  { name: 'MySQL', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><ellipse fill="#00758F" cx="64" cy="64" rx="56" ry="56"/><path fill="#F29111" d="M64 32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm0 58c-14.4 0-26-11.6-26-26s11.6-26 26-26 26 11.6 26 26-11.6 26-26 26z"/></svg>) },
  { name: 'PostgreSQL', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><ellipse fill="#336791" cx="64" cy="64" rx="56" ry="56"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="20" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">PG</text></svg>) },
  { name: 'Firebase', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><polygon fill="#FFCA28" points="64,20 100,108 28,108"/><polygon fill="#FFA000" points="64,20 64,108 100,108"/></svg>) },

  // Mobile
  { name: 'React Native', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><g fill="none"><circle cx="64" cy="64" r="11" fill="#61DAFB"/><g stroke="#61DAFB" strokeWidth="4"><ellipse rx="56" ry="22" cx="64" cy="64" transform="rotate(60 64 64)"/><ellipse rx="56" ry="22" cx="64" cy="64" transform="rotate(120 64 64)"/><ellipse rx="56" ry="22" cx="64" cy="64"/></g></g></svg>) },
  { name: 'Flutter', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><polygon fill="#02569B" points="28,100 64,20 100,100"/><polygon fill="#0175C2" points="64,20 64,100 100,100"/></svg>) },
  { name: 'Android Studio', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><circle cx="64" cy="64" r="56" fill="#3DDC84"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="20" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">Android</text></svg>) },
  { name: 'Swift', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><rect width="128" height="128" rx="16" fill="#FA7343"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="24" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">Swift</text></svg>) },
  { name: 'Expo Go', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><polygon fill="#1B1F23" points="64,20 100,108 28,108"/><text x="50%" y="80%" textAnchor="middle" fontSize="18" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">Expo</text></svg>) },

  // Other Tools
  { name: 'GitHub', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><circle cx="64" cy="64" r="56" fill="#181717"/><path fill="#fff" d="M64 24c-22.1 0-40 17.9-40 40 0 17.7 11.5 32.7 27.5 38.1 2 .4 2.7-.9 2.7-2v-7c-11.2 2.4-13.5-5.4-13.5-5.4-1.8-4.5-4.5-5.7-4.5-5.7-3.7-2.5.3-2.5.3-2.5 4.1.3 6.3 4.2 6.3 4.2 3.6 6.2 9.4 4.4 11.7 3.4.4-2.6 1.4-4.4 2.5-5.4-9-1-18.5-4.5-18.5-20.1 0-4.4 1.6-8 4.2-10.8-.4-1-1.8-5 .4-10.4 0 0 3.4-1.1 11.2 4.1 3.2-.9 6.6-1.4 10-1.4s6.8.5 10 1.4c7.8-5.2 11.2-4.1 11.2-4.1 2.2 5.4.8 9.4.4 10.4 2.6 2.8 4.2 6.4 4.2 10.8 0 15.7-9.5 19.1-18.5 20.1 1.4 1.2 2.7 3.6 2.7 7.3v10.8c0 1.1.7 2.4 2.7 2C92.5 96.7 104 81.7 104 64c0-22.1-17.9-40-40-40z"/></svg>) },
  { name: 'Figma', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><circle cx="64" cy="64" r="56" fill="#fff"/><circle cx="64" cy="40" r="16" fill="#F24E1E"/><circle cx="64" cy="64" r="16" fill="#A259FF"/><circle cx="64" cy="88" r="16" fill="#1ABCFE"/><circle cx="88" cy="64" r="16" fill="#0ACF83"/><circle cx="40" cy="64" r="16" fill="#FF7262"/></svg>) },
  { name: 'Docker', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><rect width="128" height="128" rx="16" fill="#2496ED"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="24" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">Docker</text></svg>) },
  { name: 'GraphQL', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><circle cx="64" cy="64" r="56" fill="#E10098"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="20" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">GraphQL</text></svg>) },
  { name: 'AWS', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><rect width="128" height="128" rx="16" fill="#232F3E"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="24" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">AWS</text></svg>) },
];

// Helper to split array into n nearly equal parts
function splitArray<T>(array: T[], n: number): T[][] {
  const result = Array.from({ length: n }, () => [] as T[]);
  array.forEach((item, i) => {
    result[i % n].push(item);
  });
  return result;
}

const rows: TechStack[][] = splitArray(techStacks, 3);

function getRowAnimation(row: number, isMobile: boolean): React.CSSProperties {
  // Alternate direction for each row with faster animation on mobile
  const duration = isMobile ? '20s' : '30s';
  
  return {
    animation: row % 2 === 0 
      ? `marqueeX ${duration} linear infinite` 
      : `marqueeXReverse ${duration} linear infinite`,
  };
}

function Tools() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIsMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  
  return (
    <section className="w-full py-12 bg-black relative overflow-hidden">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-6 md:mb-10 text-white tracking-wide">
        <span className="text-gray-300">Our</span> <span className="bg-gradient-to-r from-purple-700 via-gray-300 to-gray-800 text-transparent bg-clip-text ">Proficiencies</span>
      </h2>

      {/* Unified View for both Desktop and Mobile: Animated Rows */}
      <div className="relative w-full h-[300px] md:h-[360px] flex flex-col justify-center space-y-4 md:space-y-8">
        {rows.map((rowStacks, rowIndex) => (
          <div
            key={rowIndex}
            className="flex items-center gap-4 md:gap-8 whitespace-nowrap will-change-transform"
            style={getRowAnimation(rowIndex, isMobile)}
          >
            {rowStacks.map((stack, i) => (
              <div
                key={stack.name + rowIndex + i}
                className="flex flex-col items-center justify-center bg-black/60 border border-purple-1500 rounded-xl px-3 py-2 md:px-6 md:py-4 shadow-lg hover:scale-100 transition-transform duration-300 animate-border-glow"
              >
                <div className="mb-1 md:mb-2 w-8 h-8 md:w-10 md:h-10">{stack.svg}</div>
                <span className="text-white text-xs md:text-lg font-semibold drop-shadow-md mt-1">
                  {stack.name}
                </span>
              </div>
            ))}
            {/* Duplicate for seamless looping */}
            {rowStacks.map((stack, i) => (
              <div
                key={stack.name + '-dup-' + rowIndex + i}
                className="flex flex-col items-center justify-center bg-black/60 border border-purple-1500 rounded-xl px-3 py-2 md:px-6 md:py-4 shadow-lg hover:scale-100 transition-transform duration-300 animate-border-glow"
                aria-hidden="true"
              >
                <div className="mb-1 md:mb-2 w-8 h-8 md:w-10 md:h-10">{stack.svg}</div>
                <span className="text-white text-xs md:text-lg font-semibold drop-shadow-md mt-1">
                  {stack.name}
                </span>
              </div>
            ))}
          </div>
        ))}
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
      `}</style>
    </section>
  );
}

export default Tools;