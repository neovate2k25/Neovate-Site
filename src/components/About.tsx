import { useEffect, useRef, useState } from 'react';

export default function About() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50"></div>

      <div className="relative z-10 container mx-auto px-6 max-w-5xl">
        <div
          className="text-center transition-all duration-1000"
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
            <span className="text-yellow-400 drop-shadow-[0_0_20px_rgba(250,204,21,0.8)]">Neo</span>
            <span className="text-white">vate</span>
          </h2>

          <div
            className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed"
            style={{
              transform: `translateZ(${scrollY * 20}px)`,
            }}
          >
            <p className="max-w-3xl mx-auto">
              We are a <span className="text-yellow-400 font-semibold">student-led startup</span> redefining the boundaries of digital innovation.
              Our mission is to empower businesses, entrepreneurs, and creatives with cutting-edge technology solutions.
            </p>
            <p className="max-w-3xl mx-auto">
              From <span className="text-white font-semibold">web development</span> and <span className="text-white font-semibold">AI integration</span> to
              <span className="text-white font-semibold"> digital marketing</span> and <span className="text-white font-semibold">brand identity</span>,
              we bring fresh perspectives and bold ideas to every project.
            </p>
            <p className="max-w-2xl mx-auto text-yellow-400 font-semibold text-2xl mt-8">
              "Innovation isn't just what we do—it's who we are."
            </p>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
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
      </div>
    </section>
  );
}
