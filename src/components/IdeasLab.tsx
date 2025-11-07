import { useState } from 'react';
import { Send, Lightbulb } from 'lucide-react';

export default function IdeasLab() {
  const [formData, setFormData] = useState({ name: '', email: '', idea: '' });

  const communityIdeas = [
    { idea: 'AI-powered study assistant for students', author: 'Alex K.' },
    { idea: 'Sustainable fashion marketplace platform', author: 'Maya R.' },
    { idea: 'Local food delivery with zero waste packaging', author: 'David L.' },
    { idea: 'Mental health check-in app with peer support', author: 'Emma S.' },
    { idea: 'AR app for furniture visualization in homes', author: 'Chris P.' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Idea submitted:', formData);
    setFormData({ name: '', email: '', idea: '' });
  };

  return (
    <section id="ideas-lab" className="relative py-20 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(45deg, transparent 49%, rgba(250,204,21,0.3) 49%, rgba(250,204,21,0.3) 51%, transparent 51%)',
          backgroundSize: '20px 20px',
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Lightbulb className="w-12 h-12 text-yellow-400 mr-4" />
            <h2 className="text-5xl md:text-6xl font-bold">
              Ideas <span className="text-yellow-400">Lab</span>
            </h2>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a startup idea? Share it with the community and get feedback, resources, and support to make it real
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-white">Submit Your Idea</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">Your Idea</label>
                <textarea
                  value={formData.idea}
                  onChange={(e) => setFormData({ ...formData, idea: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 resize-none"
                  placeholder="Describe your startup idea..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-4 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition-all duration-300 shadow-[0_0_30px_rgba(250,204,21,0.6)] hover:shadow-[0_0_40px_rgba(250,204,21,0.9)] hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Submit Your Idea
              </button>
            </form>
          </div>

          <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-white">Community Ideas Wall</h3>
            <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
              {communityIdeas.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-black/30 border border-gray-700 rounded-lg hover:border-yellow-400/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.1)] group"
                >
                  <p className="text-white mb-2 group-hover:text-yellow-400 transition-colors">{item.idea}</p>
                  <p className="text-sm text-gray-500">
                    — <span className="text-yellow-400">{item.author}</span>
                  </p>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-sm mt-6 text-center">
              All ideas are credited to their original creators
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(250, 204, 21, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(250, 204, 21, 0.5);
        }
      `}</style>
    </section>
  );
}
