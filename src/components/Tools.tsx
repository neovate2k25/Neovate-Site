import { useState, useRef } from 'react';

export default function Tools() {
  const [toolPositions, setToolPositions] = useState<{ [key: string]: { x: number; y: number } }>({});
  const dragRef = useRef<{ id: string; startX: number; startY: number; currentX: number; currentY: number } | null>(null);

  const toolsByCategory = {
    'Marketing & Analytics': [
      { id: 'meta-ads', name: 'Meta Ads', icon: '📱' },
      { id: 'google-ads', name: 'Google Ads', icon: '📊' },
      { id: 'google-analytics', name: 'Google Analytics', icon: '📈' },
      { id: 'tag-manager', name: 'Tag Manager', icon: '🏷️' },
      { id: 'hootsuite', name: 'Hootsuite', icon: '🔗' },
      { id: 'buffer', name: 'Buffer', icon: '📅' },
      { id: 'semrush', name: 'Semrush', icon: '🎯' },
    ],
    'Frontend & Backend': [
      { id: 'react', name: 'React', icon: '⚛️' },
      { id: 'vite', name: 'Vite', icon: '⚡' },
      { id: 'nodejs', name: 'Node.js', icon: '🟢' },
      { id: 'express', name: 'Express', icon: '🛠️' },
    ],
    'Databases': [
      { id: 'mongodb', name: 'MongoDB', icon: '🍃' },
      { id: 'postgresql', name: 'PostgreSQL', icon: '🐘' },
    ],
    'Cloud & Deployment': [
      { id: 'aws', name: 'AWS', icon: '☁️' },
      { id: 'vercel', name: 'Vercel', icon: '▲' },
      { id: 'netlify', name: 'Netlify', icon: '🌐' },
    ],
    'Video & Design': [
      { id: 'premiere', name: 'Premiere Pro', icon: '🎬' },
      { id: 'after-effects', name: 'After Effects', icon: '✨' },
      { id: 'davinci', name: 'DaVinci Resolve', icon: '🎞️' },
      { id: 'photoshop', name: 'Photoshop', icon: '🖼️' },
      { id: 'illustrator', name: 'Illustrator', icon: '🎨' },
      { id: 'figma', name: 'Figma', icon: '🎭' },
      { id: 'canva', name: 'Canva', icon: '📐' },
    ],
    'Mobile Development': [
      { id: 'android', name: 'Android Studio', icon: '📱' },
      { id: 'xcode', name: 'Xcode', icon: '🍎' },
      { id: 'flutter', name: 'Flutter', icon: '🦋' },
      { id: 'react-native', name: 'React Native', icon: '⚛️' },
      { id: 'expo', name: 'Expo', icon: '📦' },
    ],
    'DevOps & Tools': [
      { id: 'jira', name: 'Jira', icon: '📋' },
      { id: 'github-actions', name: 'GitHub Actions', icon: '🚀' },
      { id: 'cursor', name: 'Cursor', icon: '✏️' },
      { id: 'whatsapp', name: 'WhatsApp', icon: '💬' },
    ],
  };

  const handleMouseDown = (e: React.MouseEvent, toolId: string) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    dragRef.current = {
      id: toolId,
      startX: e.clientX - rect.left,
      startY: e.clientY - rect.top,
      currentX: toolPositions[toolId]?.x || 0,
      currentY: toolPositions[toolId]?.y || 0,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragRef.current) return;

    const deltaX = e.clientX - (dragRef.current.startX + window.scrollX);
    const deltaY = e.clientY - (dragRef.current.startY + window.scrollY);

    setToolPositions(prev => ({
      ...prev,
      [dragRef.current!.id]: {
        x: dragRef.current.currentX + deltaX,
        y: dragRef.current.currentY + deltaY,
      },
    }));
  };

  const handleMouseUp = () => {
    dragRef.current = null;
  };

  return (
    <section
      id="tools"
      className="relative py-20 bg-black overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
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
            Only logos shown. A quick glance at our daily toolkit. Drag to move around!
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-12">
          {Object.entries(toolsByCategory).map(([category, tools], rowIndex) => (
            <div key={category} className="relative">
              <h3 className="text-lg md:text-xl font-semibold text-yellow-400 mb-6 ml-2">
                {category}
              </h3>
              <div
                className="flex flex-wrap gap-4 md:gap-6 justify-center items-start md:items-center transition-all duration-500"
                style={{
                  justifyContent:
                    rowIndex % 3 === 0 ? 'flex-start' : rowIndex % 3 === 1 ? 'flex-end' : 'center',
                }}
              >
                {tools.map((tool) => (
                  <div
                    key={tool.id}
                    className="relative"
                    style={{
                      transform: `translate(${toolPositions[tool.id]?.x || 0}px, ${
                        toolPositions[tool.id]?.y || 0
                      }px)`,
                      transition: dragRef.current?.id === tool.id ? 'none' : 'transform 0.3s ease-out',
                    }}
                  >
                    <div
                      onMouseDown={(e) => handleMouseDown(e, tool.id)}
                      className="group cursor-grab active:cursor-grabbing select-none transition-all duration-300"
                    >
                      <div className="relative aspect-square w-20 sm:w-24 md:w-28 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-yellow-400/50 flex items-center justify-center overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.3)] hover:scale-110 group-active:scale-95">
                        <span className="text-5xl md:text-6xl drop-shadow-lg transition-transform duration-300 group-hover:scale-125">
                          {tool.icon}
                        </span>
                        <div className="absolute inset-0 rounded-xl ring-1 ring-yellow-400/0 group-hover:ring-yellow-400/50 transition-all duration-300"></div>
                      </div>
                      <p className="text-center text-xs sm:text-sm mt-3 text-gray-400 group-hover:text-white transition-colors duration-300 font-medium max-w-28">
                        {tool.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            Tip: Drag tools around to customize your view! Continuously expanding our toolkit to deliver cutting-edge solutions
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
