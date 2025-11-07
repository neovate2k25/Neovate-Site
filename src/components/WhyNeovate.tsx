import { Target, Zap, Users, Award } from 'lucide-react';

export default function WhyNeovate() {
  const values = [
    {
      icon: Target,
      title: 'Precision-Driven',
      description: 'Every project is executed with meticulous attention to detail and strategic planning',
    },
    {
      icon: Zap,
      title: 'Fast & Agile',
      description: 'Rapid development cycles without compromising on quality or innovation',
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'We work closely with clients, treating every project as a partnership',
    },
    {
      icon: Award,
      title: 'Excellence First',
      description: 'Committed to delivering nothing less than exceptional results',
    },
  ];

  const metrics = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '30+', label: 'Happy Clients' },
    { value: '15+', label: 'Team Members' },
    { value: '100%', label: 'Satisfaction Rate' },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Startup Founder',
      quote: 'Neovate transformed our vision into reality. Their innovative approach and dedication exceeded all expectations.',
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director',
      quote: 'Working with Neovate was seamless. They delivered a stunning website that truly represents our brand.',
    },
  ];

  return (
    <section id="why-neovate" className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${Math.random() > 0.5 ? '#facc15' : '#ffffff'} 0%, transparent 70%)`,
              animation: `particle-float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.3 + Math.random() * 0.4,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Why <span className="text-yellow-400">Neovate?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We don't just build products—we create experiences that drive real impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="relative p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-yellow-400/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(250,204,21,0.2)] group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <Icon className="w-12 h-12 text-yellow-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 max-w-5xl mx-auto">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-yellow-400/10 to-transparent border border-yellow-400/30 hover:border-yellow-400 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">{metric.value}</div>
              <div className="text-gray-400 text-sm md:text-base">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our <span className="text-yellow-400">Clients Say</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.2)]"
              >
                <div className="text-yellow-400 text-5xl mb-4">"</div>
                <p className="text-gray-300 text-lg mb-6 italic">{testimonial.quote}</p>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-yellow-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes particle-float {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(10px, -10px); }
          50% { transform: translate(-10px, 10px); }
          75% { transform: translate(10px, 10px); }
        }
      `}</style>
    </section>
  );
}
