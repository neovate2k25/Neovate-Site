import { useState } from 'react';
import { Code, Brain, TrendingUp, Palette, Film, Smartphone, Zap, Users, Layers, Settings, Cpu } from 'lucide-react';

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: Code,
      title: 'Web & App Development',
      description: 'Custom websites and mobile applications built with modern frameworks and best practices.',
      features: ['React & Next.js', 'Mobile Apps', 'E-commerce', 'Progressive Web Apps'],
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Intelligent solutions powered by machine learning and artificial intelligence.',
      features: ['ChatGPT Integration', 'ML Models', 'Automation', 'Data Analytics'],
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Strategic campaigns that drive engagement, growth, and measurable results.',
      features: ['SEO Optimization', 'Social Media', 'Content Strategy', 'Analytics'],
    },
    {
      icon: Palette,
      title: 'Branding & Design',
      description: 'Distinctive brand identities that resonate with your target audience.',
      features: ['Logo Design', 'Brand Strategy', 'UI/UX Design', 'Style Guides'],
    },
    {
      icon: Film,
      title: 'Photo/Video Editing',
      description: 'Professional editing services that bring your visual content to life.',
      features: ['Video Production', 'Photo Editing', 'Motion Graphics', 'Color Grading'],
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Responsive designs optimized for mobile devices and all screen sizes.',
      features: ['iOS Development', 'Android Development', 'Cross-Platform', 'Performance Optimization'],
    },
    {
      icon: Zap,
      title: 'Cloud & DevOps',
      description: 'Scalable infrastructure and deployment solutions for modern applications.',
      features: ['AWS & Azure', 'CI/CD Pipelines', 'Docker & Kubernetes', 'Cloud Migration'],
    },
    {
      icon: Users,
      title: 'Consultation & Strategy',
      description: 'Expert guidance to align technology with your business goals and vision.',
      features: ['Tech Planning', 'Architecture Design', 'Growth Strategy', 'Feasibility Analysis'],
    },
    {
      icon: Layers,
      title: 'System Integration',
      description: 'Seamless integration of multiple systems and platforms for unified workflows.',
      features: ['API Integration', 'Database Management', 'Legacy System Modernization', 'Data Migration'],
    },
    {
      icon: Settings,
      title: 'Maintenance & Support',
      description: 'Ongoing support and maintenance to keep your systems running smoothly.',
      features: ['24/7 Monitoring', 'Bug Fixes', 'Updates & Patches', 'Performance Tuning'],
    },
    {
      icon: Cpu,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      features: ['Security Audits', 'Data Encryption', 'Vulnerability Testing', 'Compliance'],
    },
  ];

  return (
    <section id="services" className="relative py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Our <span className="text-yellow-400">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions tailored to transform your digital presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative p-8 rounded-2xl border transition-all duration-500 cursor-pointer ${
                  hoveredIndex === index
                    ? 'bg-gradient-to-br from-yellow-400/20 to-transparent border-yellow-400 shadow-[0_0_40px_rgba(250,204,21,0.3)] scale-105 z-10'
                    : hoveredIndex !== null
                    ? 'bg-gray-900/50 border-gray-800 blur-sm scale-95'
                    : 'bg-gray-900/50 border-gray-800 hover:border-gray-700'
                }`}
                style={{
                  transform: hoveredIndex === index ? 'translateY(-10px) scale(1.05)' : undefined,
                }}
              >
                <div className={`transition-all duration-500 ${hoveredIndex === index ? 'animate-bounce-slow' : ''}`}>
                  <Icon
                    className={`w-12 h-12 mb-6 transition-all duration-300 ${
                      hoveredIndex === index ? 'text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]' : 'text-yellow-400'
                    }`}
                  />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`flex items-center text-sm transition-all duration-300 ${
                        hoveredIndex === index ? 'text-white' : 'text-gray-500'
                      }`}
                      style={{
                        transitionDelay: hoveredIndex === index ? `${i * 100}ms` : '0ms',
                      }}
                    >
                      <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
