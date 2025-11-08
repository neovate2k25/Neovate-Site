import { ChevronDown, Rocket, Eye, Briefcase } from 'lucide-react';
export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-8">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"
              style={{
                top: `${(i * 5) + 10}%`,
                left: '-100%',
                width: '200%',
                animation: `slide-diagonal ${8 + i * 0.3}s linear infinite`,
                animationDelay: `${i * 0.2}s`,
                transform: 'rotate(-5deg)',
              }}
            />
          ))}
        </div>
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
              style={{
                top: `${(i * 5) + 5}%`,
                left: '-100%',
                width: '200%',
                animation: `slide-diagonal ${10 + i * 0.4}s linear infinite`,
                animationDelay: `${i * 0.3}s`,
                transform: 'rotate(-5deg)',
              }}
            />
          ))}
        </div>
      </div>
      <div className="relative z-10 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="inline-block animate-fade-in-up text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Innovation starts
            </span>
            <br />
            <span className="inline-block animate-fade-in-up animation-delay-200 text-yellow-400 drop-shadow-[0_0_30px_rgba(250,204,21,0.8)]">
              with us.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 animate-fade-in-up animation-delay-400 leading-relaxed">
            Transform your ideas into reality with Neovate — a student-led startup crafting intelligent solutions in web development, app creation, and AI-driven automation.
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-12 animate-fade-in-up animation-delay-400 leading-relaxed font-medium">
            We don't just build digital products — we build the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start lg:justify-start items-start sm:items-center animate-fade-in-up animation-delay-600">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition-all duration-300 shadow-[0_0_30px_rgba(250,204,21,0.6)] hover:shadow-[0_0_40px_rgba(250,204,21,0.9)] hover:scale-105 flex items-center gap-2"
            >
              <Rocket size={20} />
              Get a Quote
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/30 hover:border-yellow-400/50 hover:scale-105 flex items-center gap-2"
            >
              <Eye size={20} />
              View Our Services
            </button>
            <button
              onClick={() => scrollToSection('starthub')}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/30 hover:border-yellow-400/50 hover:scale-105 flex items-center gap-2"
            >
              <Briefcase size={20} />
              Start Your Project
            </button>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center animate-fade-in-up animation-delay-600 w-full lg:w-auto">
          <div className="relative w-full max-w-md lg:max-w-md">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-blue-400/20 rounded-3xl blur-2xl"></div>
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-4 md:p-6 shadow-2xl">
              <img
                src="/src/assets/Neovate-st.png"
                alt="Neovate Innovation"
                className="w-full h-auto rounded-2xl object-cover shadow-lg animate-float"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-white/30"></div>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer group"
      >
        <ChevronDown className="w-10 h-10 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
      </button>
      <style>{`
        @keyframes slide-diagonal {
          0% { transform: translateX(-50%) rotate(-5deg); }
          100% { transform: translateX(50%) rotate(-5deg); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}