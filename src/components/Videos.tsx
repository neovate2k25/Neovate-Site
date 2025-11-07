import { Play, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export default function Videos() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const videos = [
    {
      title: 'Building the Future with AI',
      thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoId: 'dQw4w9WgXcQ',
    },
    {
      title: 'Web Development Masterclass',
      thumbnail: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoId: 'dQw4w9WgXcQ',
    },
    {
      title: 'Startup Success Stories',
      thumbnail: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoId: 'dQw4w9WgXcQ',
    },
  ];

  return (
    <section id="videos" className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            YouTube <span className="text-yellow-400">Highlights</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our latest videos, tutorials, and behind-the-scenes content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {videos.map((video, index) => (
            <a
              key={index}
              href={`https://www.youtube.com/watch?v=${video.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-all duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-[0_0_30px_rgba(250,204,21,0.8)]">
                  <Play className="w-8 h-8 text-black fill-black ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-white font-bold text-lg">{video.title}</h3>
              </div>
              <div
                className={`absolute top-4 right-4 transition-all duration-300 ${
                  hoveredIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}
              >
                <div className="w-8 h-8 bg-yellow-400/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-yellow-400">
                  <ExternalLink className="w-4 h-4 text-yellow-400" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.youtube.com/@neovate"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-full hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-[0_0_30px_rgba(250,204,21,0.6)] hover:shadow-[0_0_40px_rgba(250,204,21,0.9)] hover:scale-105"
          >
            <Play size={20} className="fill-current" />
            Watch More on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
