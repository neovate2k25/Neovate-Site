import { useEffect, useRef, useState } from 'react';
import { FaBullseye, FaLightbulb} from 'react-icons/fa6';
import { IoRocketSharp } from 'react-icons/io5';

export default function About() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [cardInView, setCardInView] = useState({
    mission: false,
    vision: false
  });

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
        setScrollY(scrollProgress);

        // Check if cards are in view
        const missionCard = document.getElementById('mission-card');
        const visionCard = document.getElementById('vision-card');
        
        if (missionCard) {
          const missionRect = missionCard.getBoundingClientRect();
          setCardInView(prev => ({
            ...prev,
            mission: missionRect.top < window.innerHeight * 0.8
          }));
        }
        
        if (visionCard) {
          const visionRect = visionCard.getBoundingClientRect();
          setCardInView(prev => ({
            ...prev,
            vision: visionRect.top < window.innerHeight * 0.8
          }));
        }
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

      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
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
            <span className="text-white">Neo</span>
            <span className="text-yellow-400 drop-shadow-[0_0_20px_rgba(250,204,21,0.8)]">vate</span>
          </h2>

          <div
            className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed mb-8"
            style={{
              transform: `translateZ(${scrollY * 20}px)`,
            }}
          >
            <p className="max-w-3xl mx-auto">
              At Neovate, we are a <span className="text-yellow-400 font-semibold">student-led startup</span> driven by curiosity, creativity, and a shared passion for solving real-world problems through technology. Our journey began with a simple idea — to make innovation accessible. While we work towards developing our own AI-powered products, we currently operate as a service-based company, helping businesses, entrepreneurs, and creators bring their visions to life.
            </p>
            
          </div>
        </div>

        {/* Mission and Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Mission Card */}
          <div
            id="mission-card"
            className={`bg-gradient-to-br from-gray-900 to-black border-2 border-yellow-400/30 rounded-2xl p-8 shadow-2xl transition-all duration-1000 transform ${
              cardInView.mission 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-20 opacity-0 scale-95'
            }`}
            style={{
              boxShadow: cardInView.mission 
                ? '0 0 40px rgba(250, 204, 21, 0.3), 0 0 80px rgba(250, 204, 21, 0.1)' 
                : 'none',
            }}
          >
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-500 hover:scale-110 hover:rotate-12 group">
                <FaBullseye className="text-3xl text-black group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Mission</h3>
              <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-200 mx-auto rounded-full"></div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed text-center">
              Our mission is to build intelligent AI automation products and provide top-quality digital services at minimal cost, empowering startups and businesses to grow, adapt, and innovate in the digital age.
            </p>
            
            
          </div>

          {/* Vision Card */}
          <div
            id="vision-card"
            className={`bg-gradient-to-br from-gray-900 to-black border-2 border-yellow-400/30 rounded-2xl p-8 shadow-2xl transition-all duration-1000 transform delay-300 ${
              cardInView.vision 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-20 opacity-0 scale-95'
            }`}
            style={{
              boxShadow: cardInView.vision 
                ? '0 0 40px rgba(250, 204, 21, 0.3), 0 0 80px rgba(250, 204, 21, 0.1)' 
                : 'none',
            }}
          >
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-500 hover:scale-110 hover:-rotate-12 group">
                <IoRocketSharp className="text-3xl text-black group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Vision</h3>
              <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-200 mx-auto rounded-full"></div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed text-center">
              To become a global technology leader like Google and other innovators — building AI-driven products that address real-world challenges and shape a smarter, more sustainable future.
            </p>
            
          </div>
        </div>

        {/* Innovation Quote */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${
            cardInView.mission && cardInView.vision 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-yellow-400"></div>
            <FaLightbulb className="text-yellow-400 text-2xl animate-pulse" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-yellow-400"></div>
          </div>
          <p className="text-yellow-400 font-bold text-5xl md:text-4xl max-w-2xl mx-auto">
  " Innovate. Elevate. Neovate. "
</p>

        </div>
      </div>

      {/* Animated Background Elements */}
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
        
        {/* Floating particles around cards */}
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-yellow-400/20 rounded-full animate-float">
          <div className="absolute inset-0 bg-yellow-400/40 rounded-full animate-ping"></div>
        </div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-yellow-400/30 rounded-full animate-float" style={{animationDelay: '1s'}}>
          <div className="absolute inset-0 bg-yellow-400/50 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </section>
  );
}