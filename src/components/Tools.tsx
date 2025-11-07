import { useEffect, useState } from 'react';

export default function Tools() {
  const [activeIndex, setActiveIndex] = useState(0);

  const tools = [
    { name: 'React', color: '#61DAFB', image: 'https://images.pexels.com/photos/18069363/pexels-photo-18069363.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Python', color: '#3776AB', image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Figma', color: '#F24E1E', image: 'https://images.pexels.com/photos/8349434/pexels-photo-8349434.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Java', color: '#007396', image: 'https://images.pexels.com/photos/15582872/pexels-photo-15582872.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Node.js', color: '#339933', image: 'https://images.pexels.com/photos/9072355/pexels-photo-9072355.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'TailwindCSS', color: '#06B6D4', image: 'https://images.pexels.com/photos/6919028/pexels-photo-6919028.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'TypeScript', color: '#3178C6', image: 'https://images.pexels.com/photos/7974/pexels-photo-7974.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Power BI', color: '#F2C811', image: 'https://images.pexels.com/photos/374632/pexels-photo-374632.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'MongoDB', color: '#47A248', image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'PostgreSQL', color: '#4169E1', image: 'https://images.pexels.com/photos/8058054/pexels-photo-8058054.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Docker', color: '#2496ED', image: 'https://images.pexels.com/photos/4164871/pexels-photo-4164871.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'AWS', color: '#FF9900', image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Vue.js', color: '#4FC08D', image: 'https://images.pexels.com/photos/7681447/pexels-photo-7681447.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'GraphQL', color: '#E10098', image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Next.js', color: '#000000', image: 'https://images.pexels.com/photos/18069363/pexels-photo-18069363.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Kubernetes', color: '#326CE5', image: 'https://images.pexels.com/photos/4164871/pexels-photo-4164871.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Firebase', color: '#FFCA28', image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Redux', color: '#764ABC', image: 'https://images.pexels.com/photos/7681447/pexels-photo-7681447.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Express.js', color: '#90C53F', image: 'https://images.pexels.com/photos/7974/pexels-photo-7974.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Svelte', color: '#FF3E00', image: 'https://images.pexels.com/photos/9072355/pexels-photo-9072355.jpeg?auto=compress&cs=tinysrgb&w=600' },
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

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 mb-16">
            {tools.map((tool, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  activeIndex === index ? 'scale-110 z-20' : 'hover:scale-105'
                }`}
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden border-2 transition-all duration-500" style={{
                  borderColor: activeIndex === index ? tool.color : 'rgba(75, 85, 99, 0.5)',
                  boxShadow: activeIndex === index ? `0 0 30px ${tool.color}80` : 'none',
                }}>
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                    <span className="font-bold text-white text-sm md:text-base">{tool.name}</span>
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full border-2" style={{ borderColor: tool.color }}></div>
                  </div>
                </div>
                {activeIndex === index && (
                  <div
                    className="absolute inset-0 rounded-2xl animate-ping pointer-events-none"
                    style={{
                      border: `2px solid ${tool.color}`,
                      opacity: 0.3,
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="text-center py-8">
            <h3 className="text-2xl font-bold text-white mb-2">{tools[activeIndex].name}</h3>
            <p className="text-gray-400">Currently showcasing</p>
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
