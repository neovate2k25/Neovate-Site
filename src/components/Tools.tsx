import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Code, Cpu, Database, Smartphone, Zap, Brain, CheckCircle, GitBranch } from 'lucide-react';
import { Helmet } from 'react-helmet-async'; // Page-level SEO

// Define the type for tech stack items
interface TechStack {
  name: string;
  svg: JSX.Element;
  category: string;
}

// Tech stack data
const techStacks: TechStack[] = [
  // Frontend Web
  { name: 'HTML', category: 'frontend', svg: (<svg width="100%" height="100%" viewBox="0 0 128 128"><path fill="#E44D26" d="M19.5 114.5L8.1 0h111.8l-11.4 114.5L63.9 128"/><path fill="#F16529" d="M64 117.2l36.8-10.2 9.8-109.7H64"/><path fill="#EBEBEB" d="M64 66.7H45.6l-1.2-13.7H64V39.7H32.7l.3 3.7 3.1 34.7H64zM64 98.2h-.1l-15.4-4.2-.9-10.2H36.2l1.7 19.2 26 7.2h.1z"/><path fill="#FFF" d="M63.9 66.7v13.3h15.7l-1.5 16.6-14.2 4.2v13.2l26-7.2 1.7-19.2H63.9zM63.9 39.7v13.3h28.1l.3-3.7.7-7.9.2-1.7z"/></svg>) },
  { name: 'CSS', category: 'frontend', svg: (<svg width="100%" height="100%" viewBox="0 0 128 128"><path fill="#1572B6" d="M19.5 114.5L8.1 0h111.8l-11.4 114.5L63.9 128"/><path fill="#33A9DC" d="M64 117.2l36.8-10.2 9.8-109.7H64"/><path fill="#fff" d="M64 66.7H45.6l-1.2-13.7H64V39.7H32.7l.3 3.7 3.1 34.7H64zM64 98.2h-.1l-15.4-4.2-.9-10.2H36.2l1.7 19.2 26 7.2h.1z"/><path fill="#EBEBEB" d="M63.9 66.7v13.3h15.7l-1.5 16.6-14.2 4.2v13.2l26-7.2 1.7-19.2H63.9zM63.9 39.7v13.3h28.1l.3-3.7.7-7.9.2-1.7z"/></svg>) },
  { name: 'JavaScript', category: 'frontend', svg: (<svg width="100%" height="100%" viewBox="0 0 128 128"><path fill="#F7DF1E" d="M1.408 1.408h125.184v125.185H1.408z"/><path d="M116.407 116.407H11.593V11.593h104.814z" fill="none"/><path d="M89.462 106.01c2.184 3.572 5.01 6.188 10.02 6.188 4.205 0 6.89-2.104 6.89-5.01 0-3.484-2.77-4.72-7.44-6.75l-2.56-1.1c-7.39-3.15-12.29-7.1-12.29-15.43 0-7.68 5.86-13.53 15.02-13.53 6.52 0 11.22 2.27 14.59 8.22l-7.99 5.13c-1.76-3.13-3.66-4.36-6.6-4.36-3.01 0-4.92 1.91-4.92 4.36 0 3.05 1.91 4.28 6.33 6.16l2.56 1.1c8.71 3.73 13.61 7.44 13.61 15.89 0 9.1-7.15 14.08-16.77 14.08-9.39 0-15.47-4.48-18.42-10.36zm-36.36.85c1.34 2.38 2.56 4.39 5.49 4.39 2.8 0 4.57-1.1 4.57-5.38V70.98h9.01v34.98c0 9.36-5.5 13.62-13.53 13.62-7.25 0-11.48-3.76-13.65-8.32z"/></svg>) },
  { name: 'TypeScript', category: 'frontend', svg: (<svg width="100%" height="100%" viewBox="0 0 128 128"><rect width="128" height="128" rx="16" fill="#3178C6"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="40" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">TS</text></svg>) },
  { name: 'React.js', category: 'frontend', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><g fill="none"><circle cx="64" cy="64" r="11" fill="#61DAFB"/><g stroke="#61DAFB" strokeWidth="4"><ellipse rx="56" ry="22" cx="64" cy="64" transform="rotate(60 64 64)"/><ellipse rx="56" ry="22" cx="64" cy="64" transform="rotate(120 64 64)"/><ellipse rx="56" ry="22" cx="64" cy="64"/></g></g></svg>) },
  { name: 'Angular', category: 'frontend', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><polygon fill="#dd0031" points="64,8 8,32 20,112 64,128 108,112 120,32"/><polygon fill="#c3002f" points="64,8 64,128 108,112 120,32"/><polygon fill="#fff" points="64,24 32,104 48,104 64,64 80,104 96,104"/></svg>) },
  { name: 'Tailwind CSS', category: 'frontend', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><path fill="#38BDF8" d="M64 32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm0 58c-14.4 0-26-11.6-26-26s11.6-26 26-26 26 11.6 26 26-11.6 26-26 26z"/></svg>) },
  { name: 'Bootstrap', category: 'frontend', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><rect width="128" height="128" rx="16" fill="#7952B3"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="40" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">B</text></svg>) },

  // Backend Web
  { name: 'Node.js', category: 'backend', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><path fill="#8CC84B" d="M64 8.1l54.6 31.5v48.8L64 119.9 9.4 88.4V39.6z"/><path fill="#fff" d="M64 16.6l47.1 27.2v40.4L64 111.4 16.9 84.2V43.8z"/><path fill="#333" d="M64 24.2l39.6 22.9v34.2L64 103.8 24.4 81.3V47.1z"/></svg>) },
  { name: 'Express.js', category: 'backend', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><rect width="128" height="128" rx="16" fill="#222"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="28" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">Express</text></svg>) },
  { name: 'Django', category: 'backend', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><rect width="128" height="128" rx="16" fill="#092E20"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="28" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">Dj</text></svg>) },
  { name: 'Flask', category: 'backend', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><rect width="128" height="128" rx="16" fill="#000"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="28" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">Flask</text></svg>) },
  { name: 'Spring Boot', category: 'backend', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><rect width="128" height="128" rx="16" fill="#6DB33F"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="20" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">Spring</text></svg>) },
  { name: 'PHP', category: 'backend', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><ellipse fill="#777BB4" cx="64" cy="64" rx="56" ry="40"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="28" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">PHP</text></svg>) },

  // Databases
  { name: 'MongoDB', category: 'database', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><path fill="#13AA52" d="M64 2.5c-34 0-61.5 27.5-61.5 61.5s27.5 61.5 61.5 61.5 61.5-27.5 61.5-61.5S98 2.5 64 2.5zm0 117c-30.6 0-55.5-24.9-55.5-55.5S33.4 8.5 64 8.5s55.5 24.9 55.5 55.5-24.9 55.5-55.5 55.5z"/><path fill="#FFF" d="M64 32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm0 58c-14.4 0-26-11.6-26-26s11.6-26 26-26 26 11.6 26 26-11.6 26-26 26z"/></svg>) },
  { name: 'MySQL', category: 'database', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><ellipse fill="#00758F" cx="64" cy="64" rx="56" ry="56"/><path fill="#F29111" d="M64 32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm0 58c-14.4 0-26-11.6-26-26s11.6-26 26-26 26 11.6 26 26-11.6 26-26 26z"/></svg>) },
  { name: 'PostgreSQL', category: 'database', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><ellipse fill="#336791" cx="64" cy="64" rx="56" ry="56"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="20" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">PG</text></svg>) },
  { name: 'Firebase', category: 'database', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><polygon fill="#FFCA28" points="64,20 100,108 28,108"/><polygon fill="#FFA000" points="64,20 64,108 100,108"/></svg>) },

  // Mobile
  { name: 'React Native', category: 'mobile', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><g fill="none"><circle cx="64" cy="64" r="11" fill="#61DAFB"/><g stroke="#61DAFB" strokeWidth="4"><ellipse rx="56" ry="22" cx="64" cy="64" transform="rotate(60 64 64)"/><ellipse rx="56" ry="22" cx="64" cy="64" transform="rotate(120 64 64)"/><ellipse rx="56" ry="22" cx="64" cy="64"/></g></g></svg>) },
  { name: 'Flutter', category: 'mobile', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><polygon fill="#02569B" points="28,100 64,20 100,100"/><polygon fill="#0175C2" points="64,20 64,100 100,100"/></svg>) },
  { name: 'Android Studio', category: 'mobile', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><circle cx="64" cy="64" r="56" fill="#3DDC84"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="20" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">Android</text></svg>) },
  { name: 'Swift', category: 'mobile', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><rect width="128" height="128" rx="16" fill="#FA7343"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="24" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">Swift</text></svg>) },
  { name: 'Expo Go', category: 'mobile', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><polygon fill="#1B1F23" points="64,20 100,108 28,108"/><text x="50%" y="80%" textAnchor="middle" fontSize="18" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">Expo</text></svg>) },

  // AI/ML/Data
  { name: 'TensorFlow', category: 'ai-ml', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><rect width="128" height="128" rx="16" fill="#FF6F00"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="28" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">TF</text></svg>) },
  { name: 'PyTorch', category: 'ai-ml', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><rect width="128" height="128" rx="16" fill="#EE4C2C"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="28" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">PT</text></svg>) },
  { name: 'Scikit-learn', category: 'ai-ml', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><rect width="128" height="128" rx="16" fill="#F7931E"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="20" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">SK</text></svg>) },
  { name: 'OpenCV', category: 'ai-ml', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><rect width="128" height="128" rx="16" fill="#E4113A"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="28" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">CV</text></svg>) },
  { name: 'Hugging Face', category: 'ai-ml', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><rect width="128" height="128" rx="16" fill="#FF7A00"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="20" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">HF</text></svg>) },
  { name: 'YOLO', category: 'ai-ml', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><rect width="128" height="128" rx="16" fill="#FF0000"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="28" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">YOLO</text></svg>) },

  // Common Developer Tools
  { name: 'Git', category: 'tools', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><rect width="128" height="128" rx="16" fill="#F05032"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="32" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">G</text></svg>) },
  { name: 'GitHub', category: 'tools', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><circle cx="64" cy="64" r="56" fill="#181717"/><path fill="#fff" d="M64 24c-22.1 0-40 17.9-40 40 0 17.7 11.5 32.7 27.5 38.1 2 .4 2.7-.9 2.7-2v-7c-11.2 2.4-13.5-5.4-13.5-5.4-1.8-4.5-4.5-5.7-4.5-5.7-3.7-2.5.3-2.5.3-2.5 4.1.3 6.3 4.2 6.3 4.2 3.6 6.2 9.4 4.4 11.7 3.4.4-2.6 1.4-4.4 2.5-5.4-9-1-18.5-4.5-18.5-20.1 0-4.4 1.6-8 4.2-10.8-.4-1-1.8-5 .4-10.4 0 0 3.4-1.1 11.2 4.1 3.2-.9 6.6-1.4 10-1.4s6.8.5 10 1.4c7.8-5.2 11.2-4.1 11.2-4.1 2.2 5.4.8 9.4.4 10.4 2.6 2.8 4.2 6.4 4.2 10.8 0 15.7-9.5 19.1-18.5 20.1 1.4 1.2 2.7 3.6 2.7 7.3v10.8c0 1.1.7 2.4 2.7 2C92.5 96.7 104 81.7 104 64c0-22.1-17.9-40-40-40z"/></svg>) },
  { name: 'Postman', category: 'tools', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><circle cx="64" cy="64" r="64" fill="#FF6C37"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="40" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">P</text></svg>) },
  { name: 'VS Code', category: 'tools', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><rect width="128" height="128" rx="16" fill="#007ACC"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="28" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">VS</text></svg>) },
  { name: 'Figma', category: 'tools', svg: (<svg width="40" height="40" viewBox="0 0 128 128"><circle cx="64" cy="64" r="56" fill="#fff"/><circle cx="64" cy="40" r="16" fill="#F24E1E"/><circle cx="64" cy="64" r="16" fill="#A259FF"/><circle cx="64" cy="88" r="16" fill="#1ABCFE"/><circle cx="88" cy="64" r="16" fill="#0ACF83"/><circle cx="40" cy="64" r="16" fill="#FF7262"/></svg>) },
];

const categories = [
  { key: 'frontend', icon: Code, name: 'Frontend', color: 'from-blue-400 to-cyan-400' },
  { key: 'backend', icon: Cpu, name: 'Backend', color: 'from-green-400 to-emerald-400' },
  { key: 'database', icon: Database, name: 'Database', color: 'from-purple-400 to-pink-400' },
  { key: 'mobile', icon: Smartphone, name: 'Mobile', color: 'from-orange-400 to-red-400' },
  { key: 'ai-ml', icon: Brain, name: 'AI/ML/Data', color: 'from-indigo-400 to-purple-400' },
  { key: 'tools', icon: GitBranch, name: 'Tools', color: 'from-yellow-400 to-amber-400' },
];

function TechStacksGrid() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        // Check if the section is 20% visible from the bottom of the viewport
        if (rect.top < window.innerHeight * 0.8) {
          setInView(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Filter stacks based on the active category
  const filteredStacks = useMemo(() => {
    if (!activeCategory) {
      // If no category is selected, return all items in a default order
      return techStacks;
    }
    return techStacks.filter(stack => stack.category === activeCategory);
  }, [activeCategory]);
  
  // Custom stagger delay calculation based on index for the grid animation
  const getStaggerDelay = (index: number) => {
    if (!inView) return '0ms';
    // Small initial delay, then stagger by 50ms per item
    return `${300 + index * 50}ms`;
  };

  // Generate random animation delay for each card
  const getFloatDelay = (index: number) => {
    return `${(index % 10) * 0.2}s`;
  };

  // Schema for tech stacks (SEO boost)
  const techSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Neovate",
    "description": "Student-led software development startup in New Delhi specializing in frontend, backend, AI/ML, mobile, and tools like React, Node.js, TensorFlow.",
    "url": "https://neovate.com/tech-stacks",
    "address": { "@type": "PostalAddress", "addressLocality": "New Delhi", "addressCountry": "IN" },
    "knowsAbout": categories.map(cat => cat.name)
  };

  return (
    <>
      <Helmet>
        <title>Tech Stacks | Neovate - Frontend, Backend, AI/ML in Delhi</title>
        <meta
          name="description"
          content="Explore Neovate's tech stacks: React, Node.js, TensorFlow, MongoDB, and more for web, mobile, AI in New Delhi. Student-led innovation for startups."
        />
        <meta name="keywords" content="neovate tech stacks delhi, react development india, ai ml tools new delhi, node.js backend, flutter mobile" />
        <meta property="og:title" content="Neovate Tech Stacks: Powering Delhi Innovation" />
        <meta property="og:description" content="From frontend to AI/ML—our toolset for scalable solutions in New Delhi." />
        <meta property="og:image" content="/og-tech-stacks.jpg" />
        <meta property="og:url" content="https://neovate.com/tech-stacks" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techSchema) }} />
      </Helmet>
      <section
        id="tech-stacks"
        ref={sectionRef}
        className="relative min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden bg-black text-white"
        aria-label="Neovate Tech Stacks Overview"
      >
        <style>{`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
          .float-animation { animation: float 3s ease-in-out infinite; }
        `}</style>

        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-80"></div>
        
        {/* Background Grid/Lines */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute w-full h-[1px] bg-yellow-400"
              style={{ top: `${i * 10}%` }}
            />
          ))}
          {[...Array(10)].map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute h-full w-[1px] bg-yellow-400"
              style={{ left: `${i * 10}%` }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-6 max-w-7xl">
          {/* Header */}
          <div className={`text-center mb-12 animate-fadeInUp ${inView ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
              <span className="text-white">Our Core</span>
              <span className="text-yellow-400"> Technologies</span>
            </h2>
            <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-300 leading-relaxed">
              Mastered toolsets across domains for your projects—filter by category to explore.
            </p>
          </div>

          {/* Category Selector */}
          <div className="flex justify-center flex-wrap gap-3 md:gap-6 mb-10">
            {categories.map((category, index) => {
              const isActive = activeCategory === category.key;
              return (
                <button
                  key={category.key}
                  onClick={() => setActiveCategory(prev => (prev === category.key ? null : category.key))}
                  className={`
                    flex items-center space-x-2 p-2.5 md:p-3 rounded-full font-semibold text-sm md:text-base
                    transition-all duration-300 transform shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400/50
                    ${isActive
                      ? `bg-gradient-to-r ${category.color} text-black scale-105`
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:scale-[1.02] border border-gray-700'
                    }
                    ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                  `}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  aria-label={`Filter by ${category.name} ${isActive ? '(active)' : ''}`}
                  aria-pressed={isActive}
                >
                  <category.icon size={18} className={isActive ? 'text-black' : 'text-yellow-400'} />
                  <span>{category.name}</span>
                  {isActive && <CheckCircle size={14} className="text-black ml-1" />}
                </button>
              );
            })}
            {/* Reset button */}
            {activeCategory && (
              <button
                onClick={() => setActiveCategory(null)}
                className="flex items-center space-x-2 p-2.5 md:p-3 rounded-full font-semibold text-sm md:text-base bg-red-600 text-white hover:bg-red-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-400/50"
                aria-label="Reset filter to show all technologies"
              >
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* Animated Tech Stack Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3 md:gap-4 justify-center">
            {filteredStacks.map((stack, index) => (
              <div
                key={`${stack.name}-${index}`}
                className={`
                  flex flex-col items-center justify-center p-3 md:p-4 rounded-xl border-2
                  bg-gray-800/70 backdrop-blur-sm
                  transition-all duration-700 ease-out transform hover:scale-110 hover:bg-gray-700/80 hover:z-10
                  float-animation
                  ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-70'}
                  focus-within:outline-none focus-within:ring-2 focus-within:ring-yellow-400/50
                `}
                style={{
                  borderColor: activeCategory === stack.category ? categories.find(c => c.key === stack.category)?.color.replace('from-', '').split(' ')[0] || 'rgba(250, 204, 21, 0.2)' : 'rgba(250, 204, 21, 0.2)',
                  transitionDelay: getStaggerDelay(index),
                  animationDelay: getFloatDelay(index),
                  minHeight: '90px',
                } as React.CSSProperties}
                tabIndex={0}
                aria-label={`${stack.name} - ${stack.category} technology`}
                role="button"
                onKeyDown={(e) => e.key === 'Enter' && console.log(`Explore ${stack.name}`)} // Placeholder for modal/expand
              >
                <div className="mb-1.5 md:mb-2 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                  {stack.svg}
                </div>
                <span className="text-white text-xs md:text-sm font-semibold text-center mt-1">
                  {stack.name}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Quote */}
          <div className={`text-center mt-16 animate-fadeInUp ${inView ? 'opacity-100 delay-500ms' : 'opacity-0'}`}>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-yellow-400"></div>
              <Zap size={20} className="text-yellow-400" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-yellow-400"></div>
            </div>
            <p className="text-yellow-400 font-bold text-lg md:text-xl max-w-2xl mx-auto">
              "Adaptability is the cornerstone of our development."
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default TechStacksGrid;