import { useState } from 'react';

export default function Tools() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const toolsByCategory = {
    'Marketing & Analytics': [
      { name: 'Meta Ads', icon: '📱' },
      { name: 'Google Ads', icon: '📊' },
      { name: 'Google Analytics', icon: '📈' },
      { name: 'Tag Manager', icon: '🏷️' },
      { name: 'Hootsuite', icon: '🔗' },
      { name: 'Buffer', icon: '📅' },
      { name: 'Semrush', icon: '🎯' },
    ],
    'Frontend & Backend': [
      { name: 'React', icon: '⚛️' },
      { name: 'Vite', icon: '⚡' },
      { name: 'Node.js', icon: '🟢' },
      { name: 'Express', icon: '🛠️' },
    ],
    'Databases': [
      { name: 'MongoDB', icon: '🍃' },
      { name: 'PostgreSQL', icon: '🐘' },
    ],
    'Cloud & Deployment': [
      { name: 'AWS', icon: '☁️' },
      { name: 'Vercel', icon: '▲' },
      { name: 'Netlify', icon: '🌐' },
    ],
    'Video & Design': [
      { name: 'Premiere Pro', icon: '🎬' },
      { name: 'After Effects', icon: '✨' },
      { name: 'DaVinci Resolve', icon: '🎞️' },
      { name: 'Photoshop', icon: '🖼️' },
      { name: 'Illustrator', icon: '🎨' },
      { name: 'Figma', icon: '🎭' },
      { name: 'Canva', icon: '📐' },
    ],
    'Mobile Development': [
      { name: 'Android Studio', icon: '📱' },
      { name: 'Xcode', icon: '🍎' },
      { name: 'Flutter', icon: '🦋' },
      { name: 'React Native', icon: '⚛️' },
      { name: 'Expo', icon: '📦' },
    ],
    'DevOps & Tools': [
      { name: 'Jira', icon: '📋' },
      { name: 'GitHub Actions', icon: '🚀' },
      { name: 'Cursor', icon: '✏️' },
      { name: 'WhatsApp', icon: '💬' },
    ],
  };

  return (
    <section id="tools" className="relative py-20 bg-black overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-yellow-400/10 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              height: `${50 + Math.random() * 150}px`,
              top: `${Math.random() * 100}%`,
              animation: `flow-up ${8 + Math.random() * 4}s linear infinite`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Tools We <span className="text-yellow-400">Use</span>
          </h2>
          <p className="text-xl text-gray-400">
            Only logos shown. A quick glance at our daily toolkit.
          </p>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {Object.entries(toolsByCategory).map(([category, tools]) => (
            <div
              key={category}
              onMouseEnter={() => setHoveredCategory(category)}
              onMouseLeave={() => setHoveredCategory(null)}
              className="group"
            >
              <h3 className="text-lg md:text-xl font-semibold text-yellow-400 mb-6 ml-2 transition-all duration-300">
                {category}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 md:gap-4">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className={`group/item transition-all duration-300 ${
                      hoveredCategory === category ? 'opacity-100' : 'opacity-75 hover:opacity-100'
                    }`}
                  >
                    <div className="relative aspect-square rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-yellow-400/50 flex items-center justify-center overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.3)] hover:scale-110 cursor-pointer group/tool">
                      <span className="text-4xl md:text-5xl drop-shadow-lg transition-transform duration-300 group-hover/tool:scale-125">
                        {tool.icon}
                      </span>
                      <div className="absolute inset-0 rounded-xl ring-1 ring-yellow-400/0 group-hover/tool:ring-yellow-400/50 transition-all duration-300"></div>
                    </div>
                    <p className="text-center text-sm mt-3 text-gray-400 group-hover/item:text-white transition-colors duration-300 font-medium">
                      {tool.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            Continuously expanding our toolkit to deliver cutting-edge solutions
          </p>
        </div>
      </div>

      <style>{`
        @keyframes flow-up {
          0% { transform: translateY(100px); opacity: 0; }
          50% { opacity: 0.3; }
          100% { transform: translateY(-100px); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
