import { Users, Lightbulb, Rocket, BookOpen } from 'lucide-react';
import { useState } from 'react';

export default function StartHub() {
  const [isHovered, setIsHovered] = useState(false);

  const features = [
    {
      icon: Users,
      title: 'Freelancer Network',
      description: 'Connect with talented freelancers and collaborate on projects',
    },
    {
      icon: Lightbulb,
      title: 'Mentorship',
      description: 'Get guidance from experienced professionals in the industry',
    },
    {
      icon: BookOpen,
      title: 'Resources Hub',
      description: 'Access tools, templates, and learning materials for growth',
    },
    {
      icon: Rocket,
      title: 'Launch Support',
      description: 'End-to-end support to bring your startup idea to life',
    },
  ];

  return (
    <section id="starthub" className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(250,204,21,0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Start<span className="text-yellow-400">Hub</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A thriving ecosystem for freelancers, entrepreneurs, and innovators to connect, learn, and build together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.2)] hover:scale-105"
              >
                <Icon className="w-10 h-10 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-r from-yellow-400/10 to-yellow-400/5 border border-yellow-400/30 rounded-2xl p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Join the <span className="text-yellow-400">Revolution?</span>
          </h3>
          <p className="text-gray-300 mb-8 text-lg">
            Whether you're a freelancer looking for opportunities or an entrepreneur with a vision,
            StartHub is your launchpad to success.
          </p>
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative px-10 py-4 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition-all duration-500 shadow-[0_0_30px_rgba(250,204,21,0.6)] overflow-hidden group"
            style={{
              transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Rocket size={20} />
              Apply Now
            </span>
            <div
              className={`absolute inset-0 bg-white transition-all duration-500 ${
                isHovered ? 'scale-100' : 'scale-0'
              }`}
              style={{
                transformOrigin: 'center',
                borderRadius: '9999px',
              }}
            ></div>
          </button>
        </div>
      </div>

      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
            opacity: 0.2 + Math.random() * 0.3,
          }}
        />
      ))}
    </section>
  );
}
