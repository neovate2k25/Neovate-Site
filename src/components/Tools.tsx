import { useEffect, useState } from 'react';

export default function Tools() {
  const [activeIndex, setActiveIndex] = useState(0);

  const tools = [
    { name: 'React', color: '#61DAFB' },
    { name: 'Python', color: '#3776AB' },
    { name: 'Figma', color: '#F24E1E' },
    { name: 'Java', color: '#007396' },
    { name: 'Node.js', color: '#339933' },
    { name: 'TailwindCSS', color: '#06B6D4' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'Power BI', color: '#F2C811' },
    { name: 'MongoDB', color: '#47A248' },
    { name: 'PostgreSQL', color: '#4169E1' },
    { name: 'Docker', color: '#2496ED' },
    { name: 'AWS', color: '#FF9900' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tools.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [tools.length]);

  return (
    <section id="tools" className="relative py-20 bg-black overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              height: `${Math.random() * 100}px`,
              top: `${Math.random() * 100}%`,
              animation: `flow-up ${5 + Math.random() * 5}s linear infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
        {[...Array(50)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"
            style={{
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100}px`,
              left: `${Math.random() * 100}%`,
              animation: `flow-right ${5 + Math.random() * 5}s linear infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Our <span className="text-yellow-400">Tech Stack</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Powered by cutting-edge technologies and industry-leading tools
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden py-12">
            <div className="flex items-center justify-center flex-wrap gap-8">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-700 ${
                    activeIndex === index ? 'scale-125 z-10' : 'scale-100'
                  }`}
                  style={{
                    opacity: activeIndex === index ? 1 : 0.5,
                  }}
                >
                  <div
                    className="w-32 h-32 rounded-2xl flex items-center justify-center font-bold text-lg transition-all duration-500 border-2"
                    style={{
                      backgroundColor: activeIndex === index ? `${tool.color}20` : 'rgba(31, 41, 55, 0.5)',
                      borderColor: activeIndex === index ? tool.color : 'rgba(75, 85, 99, 0.5)',
                      boxShadow: activeIndex === index ? `0 0 40px ${tool.color}60` : 'none',
                      color: activeIndex === index ? tool.color : '#9CA3AF',
                    }}
                  >
                    {tool.name}
                  </div>
                  {activeIndex === index && (
                    <div
                      className="absolute inset-0 rounded-2xl animate-ping"
                      style={{
                        border: `2px solid ${tool.color}`,
                        opacity: 0.3,
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg">
            Continuously evolving with the latest technologies to deliver{' '}
            <span className="text-yellow-400 font-semibold">exceptional results</span>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes flow-up {
          0% { transform: translateY(100px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-100px); opacity: 0; }
        }
        @keyframes flow-right {
          0% { transform: translateX(-100px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100px); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
