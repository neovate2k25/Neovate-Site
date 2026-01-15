import { useEffect, useRef, useState } from 'react';
import { Target, Lightbulb, Rocket } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.7) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us | Neovate</title>
        <meta
          name="description"
          content="Discover Neovate, a passionate student-led startup building innovative AI automation products and delivering high-quality web, mobile, and digital solutions."
        />
        <link rel="canonical" href="https://neovateai.tech/about" />
        <meta name="keywords" content="about neovate, student startup, software company, AI products, web development India, digital agency" />
      </Helmet>

      <section
        id="about"
        ref={sectionRef}
        className="relative min-h-screen flex items-center justify-center pt-0 pb-20 overflow-hidden bg-black pt-10"
      >
        <style>{`
          @keyframes fadeInUp { 0% { opacity: 0; transform: translate3d(0, 30px, 0); } 100% { opacity: 1; transform: translate3d(0, 0, 0); } }
          @keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }
          .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
          .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        `}</style>

        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50"></div>

        <div className="relative z-10 container mx-auto px-6 max-w-6xl">
          <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Neo</span>
              <span className="text-yellow-400">vate</span>
            </h1>

            <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              <p className="max-w-3xl mx-auto">
                At Neovate, we are a <span className="text-yellow-400 font-semibold">student-led startup</span> driven by curiosity, creativity, and a shared passion for solving real-world problems through technology. Our journey began with a simple idea — to make innovation accessible.
              </p>
              <p className="max-w-3xl mx-auto">
                While we work towards developing our own AI-powered products, we currently operate as a service-based company, helping businesses, entrepreneurs, and creators bring their visions to life.
              </p>
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className={`bg-gradient-to-br from-gray-900 to-black border-2 border-yellow-400/30 rounded-2xl p-8 shadow-2xl hover:scale-105 hover:border-yellow-400/50 transition-all ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 hover:rotate-12 transition-all">
                  <Target size={32} className="text-black" />
                </div>
                <h2 className="text-2xl font-bold text-yellow-400 mb-2">Mission</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-200 mx-auto rounded-full"></div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed text-center">
                Build intelligent AI automation products and provide top-quality digital services at minimal cost, empowering startups and businesses to grow and innovate.
              </p>
            </div>

            <div className={`bg-gradient-to-br from-gray-900 to-black border-2 border-yellow-400/30 rounded-2xl p-8 shadow-2xl hover:scale-105 hover:border-yellow-400/50 transition-all ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 hover:-rotate-12 transition-all">
                  <Rocket size={32} className="text-black" />
                </div>
                <h2 className="text-2xl font-bold text-yellow-400 mb-2">Vision</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-200 mx-auto rounded-full"></div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed text-center">
                To become a global technology leader — building AI-driven products that address real-world challenges and shape a smarter, more sustainable future.
              </p>
            </div>
          </div>

          <div className={`text-center mt-16 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-yellow-400"></div>
              <Lightbulb size={24} className="text-yellow-400 animate-pulse" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-yellow-400"></div>
            </div>
            <p className="text-yellow-400 font-bold text-3xl md:text-4xl max-w-2xl mx-auto">
              " Innovate. Elevate. Neovate. "
            </p>
          </div>
        </div>

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
        </div>
      </section>
    </>
  );
}