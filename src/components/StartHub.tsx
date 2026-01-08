import { Users, Lightbulb, Rocket, BookOpen, Sparkles, Send, Palette, Globe, Megaphone } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function StartHub() {
  const [isHovered, setIsHovered] = useState(false);
  const [formType, setFormType] = useState<'join' | 'idea'>('join');
  const [formData, setFormData] = useState({ name: '', email: '', content: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const isJoin = formType === 'join';
      const message = isJoin 
        ? 'Application Type: Startup Hub Join\n\nMessage: ' + formData.content 
        : 'Submission Type: Ideas Lab\n\nIdea: ' + formData.content;
      const subject = isJoin ? 'New Startup Hub Application' : 'New Ideas Lab Submission';
      const type = isJoin ? 'startup' : 'ideas';

      // Send to admin
      await emailjs.send(
        'service_oea27kp',
        'template_z1ug5uq',
        {
          name: formData.name,
          email: formData.email,
          message: message,
          subject: subject,
          type: type,
          from_email: 'teamneovate@gmail.com'
        },
        'jbjZxkG--7ob-fr1J'
      );

      // Confirmation to user
      await emailjs.send(
        'service_oea27kp',
        'template_3lvrb64',
        {
          name: formData.name,
          email: formData.email,
          message: message,
          subject: `Confirmation: ${subject}`,
          type: type,
          from_email: 'teamneovate@gmail.com'
        },
        'jbjZxkG--7ob-fr1J'
      );

      setSubmitStatus({
        type: 'success',
        message: isJoin
          ? 'Application submitted successfully! We\'ll review it soon. Confirmation email sent.'
          : 'Your idea has been submitted! Thank you for contributing. Confirmation email sent.'
      });
      setFormData({ name: '', email: '', content: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus({ type: 'error', message: 'Failed to submit. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    { icon: Users, title: 'Freelancer Network', description: 'Connect with talented freelancers and collaborate on projects' },
    { icon: Sparkles, title: 'Ideas Lab', description: 'Share your startup ideas and get valuable feedback from the community' },
    { icon: Rocket, title: 'Launch Support', description: 'End-to-end support to bring your startup idea to life' },
    { icon: Lightbulb, title: 'Mentorship', description: 'Get guidance from experienced professionals in the industry' },
    { icon: BookOpen, title: 'Resources Hub', description: 'Access tools, templates, and learning materials for growth' },
  ];

  const plans = [
    {
      name: 'STARTUP DESIGNER',
      icon: Palette,
      price: 'Visual Identity Package',
      includes: ['Logo Creation', 'Brochure Designs', 'Visiting Card Designs'],
      popular: false,
    },
    {
      name: 'STARTUP BASIC PLAN',
      icon: Globe,
      price: 'Digital Presence Package',
      includes: ['Website Development', 'Domain Purchase', 'Server', 'Social Media Page Creation'],
      popular: true,
    },
    {
      name: 'STARTUP PROMOTION',
      icon: Megaphone,
      price: 'Growth Package',
      includes: ['Social Media Management', 'Lead Generation', 'Brand Awareness'],
      popular: false,
    },
  ];

  const isJoin = formType === 'join';
  const Icon = isJoin ? Rocket : Send;
  const buttonText = isJoin ? 'Apply Now' : 'Submit Your Idea';
  const submittingText = isJoin ? 'Applying...' : 'Submitting...';
  const contentPlaceholder = isJoin
    ? 'Tell us about your experience and goals...'
    : 'Describe your startup idea...';

  return (
    <section id="starthub" className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(250,204,21,0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Startup</span>
            <span className="text-yellow-400">Hub</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A thriving ecosystem for freelancers, entrepreneurs, and innovators to connect, learn, and build together
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105"
              >
                <IconComponent className="w-10 h-10 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* NEW: Startup Plans / Pricing Section */}
        <div className="mb-20">
          

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => {
              const PlanIcon = plan.icon;
              return (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                    plan.popular
                      ? 'bg-yellow-400/10 border-yellow-400 scale-105'
                      : 'bg-gray-900/50 border-gray-800 hover:border-yellow-400/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-6 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <PlanIcon className="w-14 h-14 text-yellow-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    <p className="text-yellow-400 text-lg mt-2">{plan.price}</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.includes.map((item) => (
                      <li key={item} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Section */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-yellow-400/10 to-yellow-400/5 border border-yellow-400/30 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">
            Ready to Join the <span className="text-yellow-400">Revolution</span> or Share an Idea?
          </h3>
          <p className="text-gray-300 mb-8 text-lg text-center">
            Whether you're a freelancer looking for opportunities, an entrepreneur with a vision, or have a brilliant idea to share,
            Startup Hub is your launchpad to success.
          </p>

          <div className="flex justify-center mb-6">
            <button
              onClick={() => setFormType('join')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                isJoin
                  ? 'bg-yellow-400 text-black'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Join Hub
            </button>
            <button
              onClick={() => setFormType('idea')}
              className={`px-6 py-2 rounded-full font-semibold ml-4 transition-all duration-300 ${
                !isJoin
                  ? 'bg-yellow-400 text-black'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Submit Idea
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="px-4 py-3 bg-black/40 border border-yellow-400/30 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-all duration-300"
                placeholder="Your name"
                required
              />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="px-4 py-3 bg-black/40 border border-yellow-400/30 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-all duration-300"
                placeholder="your@email.com"
                required
              />
            </div>

            <textarea
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 bg-black/40 border border-yellow-400/30 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-all duration-300 resize-none"
              placeholder={contentPlaceholder}
              required
            />

            <button
              type="submit"
              disabled={isSubmitting}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`w-full relative px-10 py-4 bg-yellow-400 text-black font-bold rounded-full transition-all duration-500 overflow-hidden group flex items-center justify-center gap-2 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              style={{
                transform: isHovered && !isSubmitting ? 'scale(1.05)' : 'scale(1)',
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Icon size={20} />
                {isSubmitting ? submittingText : buttonText}
              </span>
              {!isSubmitting && (
                <div
                  className={`absolute inset-0 bg-white transition-all duration-500 ${
                    isHovered ? 'scale-100' : 'scale-0'
                  }`}
                  style={{
                    transformOrigin: 'center',
                    borderRadius: '9999px',
                  }}
                ></div>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
            opacity: 0.2 + Math.random() * 0.3,
          }}
        />
      ))}
    </section>
  );
}