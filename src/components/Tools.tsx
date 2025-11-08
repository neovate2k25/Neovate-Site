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

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-2 md:gap-3 mb-12">
            {tools.map((tool, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative group cursor-pointer transition-all duration-300 ${
                  activeIndex === index ? 'scale-125 z-20' : 'hover:scale-110'
                }`}
              >
                <div className="relative aspect-square rounded-lg md:rounded-xl overflow-hidden border transition-all duration-300" style={{
                  borderColor: activeIndex === index ? tool.color : 'rgba(75, 85, 99, 0.3)',
                  borderWidth: activeIndex === index ? '2px' : '1px',
                  boxShadow: activeIndex === index ? `0 0 20px ${tool.color}80` : 'none',
                }}>
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-2">
                    <span className="font-semibold text-white text-xs line-clamp-1">{tool.name}</span>
                  </div>
                </div>
                {activeIndex === index && (
                  <div
                    className="absolute inset-0 rounded-lg md:rounded-xl animate-ping pointer-events-none"
                    style={{
                      border: `2px solid ${tool.color}`,
                      opacity: 0.2,
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="text-center py-6">
            <h3 className="text-xl md:text-2xl font-bold text-white">{tools[activeIndex].name}</h3>
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
