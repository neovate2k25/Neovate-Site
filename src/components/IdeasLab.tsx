import { useState, useCallback } from 'react';
import { Send, Lightbulb } from 'lucide-react';
import { Helmet } from 'react-helmet-async'; // For page-level SEO

export default function IdeasLab() {
  const [formData, setFormData] = useState({ name: '', email: '', idea: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const communityIdeas = [
    { idea: 'AI-powered study assistant for students', author: 'Alex K.' },
    { idea: 'Sustainable fashion marketplace platform', author: 'Maya R.' },
    { idea: 'Local food delivery with zero waste packaging', author: 'David L.' },
    { idea: 'Mental health check-in app with peer support', author: 'Emma S.' },
    { idea: 'AR app for furniture visualization in homes', author: 'Chris P.' },
  ];

  // Debounced submit for perf (avoids rapid fires)
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      const response = await fetch(`${supabaseUrl}/functions/v1/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${anonKey}`,
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          idea: formData.idea,
          subject: 'New Ideas Lab Submission from Neovate',
          type: 'ideas',
        }),
      });

      if (!response.ok) throw new Error('Network response not ok');

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({ type: 'success', message: 'Your idea has been submitted! Check the community wall soon.' });
        setFormData({ name: '', email: '', idea: '' });
      } else {
        throw new Error(data.error || 'Submission failed');
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to submit. Please check your connection and try again.' });
      console.error('IdeasLab Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, isSubmitting]);

  // IdeasLab-specific SEO (targets community/ideas intent)
  const ideasSchema = {
    "@context": "https://schema.org",
    "@type": "DiscussionForumPosting",
    "headline": "Neovate Ideas Lab: Share Startup Concepts",
    "description": "A community space for students and entrepreneurs in New Delhi to submit and explore innovative startup ideas in AI, web dev, and digital services.",
    "url": "https://neovate.com/ideas-lab",
    "author": {
      "@type": "Organization",
      "name": "Neovate",
      "url": "https://neovate.com"
    },
    "datePublished": "2026-01-15", // Dynamic? Use new Date().toISOString().split('T')[0]
    "interactionStatistic": {
      "@type": "InteractionCounter",
      "interactionType": "http://schema.org/ReplyAction",
      "userInteractionCount": communityIdeas.length.toString()
    }
  };

  return (
    <>
      <Helmet>
        <title>Ideas Lab | Neovate - Share Startup Ideas in Delhi</title>
        <meta
          name="description"
          content="Join Neovate's Ideas Lab: Submit your startup concept for AI, web, or digital marketing in New Delhi. Get community feedback from student innovators."
        />
        <meta name="keywords" content="ideas lab neovate, startup ideas delhi, ai concepts students, entrepreneur community india, innovation submissions" />
        <meta property="og:title" content="Neovate Ideas Lab: Spark Your Next Big Idea" />
        <meta property="og:description" content="Share ideas, collaborate, and launch with Neovate's student community in Delhi." />
        <meta property="og:image" content="/og-ideas-lab.jpg" /> {/* Hero image of lightbulb/community */}
        <meta property="og:url" content="https://neovate.com/ideas-lab" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ideasSchema) }} />
      </Helmet>
      <section id="ideas-lab" className="relative py-20 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'linear-gradient(45deg, transparent 49%, rgba(250,204,21,0.3) 49%, rgba(250,204,21,0.3) 51%, transparent 51%)',
            backgroundSize: '20px 20px',
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header with scroll animation (ties to Hero style) */}
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="flex items-center justify-center mb-4">
              <Lightbulb className="w-12 h-12 text-yellow-400 mr-4 animate-pulse" />
              <h2 className="text-5xl md:text-6xl font-bold">
                Ideas <span className="text-yellow-400">Lab</span>
              </h2>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Have a startup idea? Share it with our community—get feedback, resources, and support to launch it with Neovate's student network.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Submit Form */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold mb-6 text-white">Submit Your Idea</h3>
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                    placeholder="Enter your name"
                    required
                    aria-describedby="name-help"
                  />
                  <small id="name-help" className="text-gray-500 text-xs">We'll credit you in the community wall.</small>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="idea" className="block text-sm font-semibold mb-2 text-gray-300">Your Idea</label>
                  <textarea
                    id="idea"
                    value={formData.idea}
                    onChange={(e) => setFormData({ ...formData, idea: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 resize-none"
                    placeholder="Describe your startup idea (e.g., AI tool for Delhi traffic optimization)..."
                    required
                    aria-describedby="idea-help"
                  />
                  <small id="idea-help" className="text-gray-500 text-xs">Be bold—ideas from students like you change the game!</small>
                </div>
                {submitStatus && (
                  <div
                    role="alert"
                    className={`p-4 rounded-lg text-center font-semibold transition-all duration-300 ${
                      submitStatus.type === 'success'
                        ? 'bg-green-500/20 text-green-400 border border-green-500/50 animate-pulse'
                        : 'bg-red-500/20 text-red-400 border border-red-500/50'
                    }`}
                    aria-live="polite"
                  >
                    {submitStatus.message}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-4 bg-yellow-400 text-black font-bold rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(250,204,21,0.6)] flex items-center justify-center gap-2 group ${
                    isSubmitting
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-yellow-300 hover:shadow-[0_0_40px_rgba(250,204,21,0.9)] hover:scale-105 active:scale-95'
                  }`}
                  aria-label={isSubmitting ? 'Submitting idea...' : 'Submit your startup idea to Neovate community'}
                >
                  <Send size={20} className={`transition-transform ${isSubmitting ? '' : 'group-hover:translate-x-1'}`} />
                  {isSubmitting ? 'Submitting...' : 'Submit Your Idea'}
                </button>
              </form>
            </div>

            {/* Community Wall */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold mb-6 text-white">Community Ideas Wall</h3>
              <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar" role="region" aria-label="Community ideas feed">
                {communityIdeas.map((item, index) => (
                  <article
                    key={index}
                    className="p-4 bg-black/30 border border-gray-700 rounded-lg hover:border-yellow-400/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.1)] group cursor-pointer"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && alert(`Exploring: ${item.idea}`)} // Placeholder for modal/expand
                    aria-label={`Idea: ${item.idea} by ${item.author}`}
                  >
                    <p className="text-white mb-2 group-hover:text-yellow-400 transition-colors line-clamp-2">{item.idea}</p>
                    <p className="text-sm text-gray-500 flex items-center justify-between">
                      <span>— <span className="text-yellow-400 font-medium">{item.author}</span></span>
                      <button className="text-xs text-yellow-400 hover:underline hidden sm:block" onClick={() => alert('Feedback modal opens')}>Give Feedback</button>
                    </p>
                  </article>
                ))}
              </div>
              <p className="text-gray-500 text-sm mt-6 text-center italic">
                All ideas credited to creators. <a href="#contact" className="text-yellow-400 hover:underline">Join the discussion?</a>
              </p>
            </div>
          </div>
        </div>

        {/* Global Styles (add animations from Hero) */}
        <style>{`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
          .custom-scrollbar::-webkit-scrollbar { width: 8px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: rgba(0, 0, 0, 0.3); border-radius: 10px; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(250, 204, 21, 0.3); border-radius: 10px; }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(250, 204, 21, 0.5); }
          .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        `}</style>
      </section>
    </>
  );
}