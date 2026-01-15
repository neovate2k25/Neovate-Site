import { Users, Lightbulb, Rocket, BookOpen, Sparkles, Send, Palette, Globe, Megaphone } from 'lucide-react';
import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';

export default function StartHub() {
  const [isHovered, setIsHovered] = useState(false);
  const [formType, setFormType] = useState<'join' | 'idea'>('join');
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', content: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Fixed: Switched to double quotes to avoid escape hell
  const features = useMemo(() => [
    { icon: Users, title: 'Freelancer Network', description: "Connect with talented freelancers and collaborate on innovative projects." },
    { icon: Sparkles, title: 'Ideas Lab', description: "Share startup ideas and get feedback from student innovator community." },
    { icon: Rocket, title: 'Launch Support', description: "End-to-end guidance to launch your startup in India's capital." },
    { icon: Lightbulb, title: 'Mentorship', description: "Expert advice from industry pros for entrepreneurs." },
    { icon: BookOpen, title: 'Resources Hub', description: "Free tools, templates, and guides for startup growth." },
  ], []);

  const plans = useMemo(() => [
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
  ], []);

  // Scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const isJoin = formType === 'join';
      const message = isJoin 
        ? `Application Type: Startup Hub Join\n\nMessage: ${formData.content}` 
        : `Submission Type: Ideas Lab\n\nIdea: ${formData.content}`;
      const subject = isJoin ? 'New Startup Hub Application - Neovate Delhi' : 'New Ideas Lab Submission - Neovate';
      const type = isJoin ? 'startup' : 'ideas';

      // Send to admin
      await emailjs.send(
        'service_oea27kp',
        'template_z1ug5uq',
        {
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          message,
          subject,
          type,
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
          mobile: formData.mobile,
          message,
          subject: `Confirmation: ${subject}`,
          type,
          from_email: 'teamneovate@gmail.com'
        },
        'jbjZxkG--7ob-fr1J'
      );

      // setSubmitStatus({
      //   type: 'success',
      //   message: isJoin
      //     ? 'Application submitted! We\'ll review soon—confirmation emailed. Welcome to Neovate\'s Delhi hub.'
      //     : 'Idea submitted! Thanks for sparking innovation—confirmation sent. Check our community soon.'
      // });
      setFormData({ name: '', email: '', mobile: '', content: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      // setSubmitStatus({ type: 'error', message: 'Submission failed—check connection and retry. Or email teamneovate@gmail.com.' });
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, formType, isSubmitting]);

  // Schema for plans/offers
  const hubSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Neovate Startup Hub",
    "description": "Delhi-based ecosystem for freelancers, entrepreneurs, and student innovators offering mentorship, resources, and launch support.",
    "url": "https://neovate.com/starthub",
    "address": { "@type": "PostalAddress", "addressLocality": "New Delhi", "addressCountry": "IN" },
    "offers": plans.map(plan => ({
      "@type": "Offer",
      "name": plan.name,
      "description": plan.price,
      "itemOffered": { "@type": "Service", "name": plan.name }
    }))
  };

  const isJoin = formType === 'join';
  const Icon = isJoin ? Rocket : Send;
  const buttonText = isJoin ? 'Apply Now' : 'Submit Your Idea';
  const submittingText = isJoin ? 'Applying...' : 'Submitting...';
  const contentPlaceholder = isJoin
    ? 'Tell us about your experience, goals, and why join Neovate\'s network...'
    : 'Describe your startup idea (e.g., AI for traffic)...';

  return (
    <>
      <Helmet>
        <title>Startup Hub | Neovate - Freelancer Network & Launch Support</title>
        <meta
          name="description"
          content="Join Neovate's Startup Hub in New Delhi: Freelancer connections, ideas lab, mentorship, and pricing plans for web/AI/digital services. Ideal for students and entrepreneurs."
        />
        <meta name="keywords" content="startup hub delhi, neovate freelancer network, ideas lab india, mentorship new delhi, startup plans ai" />
        <meta property="og:title" content="Neovate Startup Hub: Launch Your Idea in Delhi" />
        <meta property="og:description" content="Connect, collaborate, and grow with student-led support in New Delhi." />
        <meta property="og:image" content="/og-starthub.jpg" />
        <meta property="og:url" content="https://neovate.com/starthub" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hubSchema) }} />
      </Helmet>
      <section
        id="starthub"
        ref={sectionRef}
        className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
        aria-label="Neovate Startup Hub - Ecosystem for Delhi Innovators"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(250,204,21,0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Startup</span>
              <span className="text-yellow-400">Hub</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Thriving ecosystem for freelancers, entrepreneurs, and students: Connect, ideate, and launch with Neovate's network.
            </p>
          </div>

          {/* Features Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105 group focus-within:ring-2 focus-within:ring-yellow-400/50"
                  tabIndex={0}
                  aria-label={`${feature.title}: ${feature.description}`}
                >
                  <IconComponent className="w-10 h-10 text-yellow-400 mb-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-yellow-300 transition-colors">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Pricing Plans */}
          <div className={`mb-20 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <h3 className="text-center text-3xl font-bold mb-8 text-white">Startup Plans</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => {
                const PlanIcon = plan.icon;
                return (
                  <div
                    key={plan.name}
                    className={`relative rounded-2xl p-8 border transition-all duration-300 group focus-within:ring-2 focus-within:ring-yellow-400/50 ${
                      plan.popular
                        ? 'bg-yellow-400/10 border-yellow-400 scale-105'
                        : 'bg-gray-900/50 border-gray-800 hover:border-yellow-400/50 hover:scale-105'
                    }`}
                    tabIndex={0}
                    aria-label={`${plan.name} Plan: ${plan.includes.join(', ')}`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-6 py-1 rounded-full text-sm font-bold">
                        MOST POPULAR
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <PlanIcon className="w-14 h-14 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-yellow-400 text-lg">{plan.price}</p>
                    </div>
                    <ul className="space-y-4 mb-8" role="list">
                      {plan.includes.map((item, i) => (
                        <li key={i} className="flex items-center text-gray-300 group-hover:text-yellow-300 transition-colors" role="listitem">
                          <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></span>
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
          <div className={`max-w-4xl mx-auto bg-gradient-to-r from-yellow-400/10 to-yellow-400/5 border border-yellow-400/30 rounded-2xl p-8 md:p-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">
              Ready to Join the <span className="text-yellow-400">Revolution</span> or Share an Idea?
            </h3>
            <p className="text-gray-300 mb-8 text-lg text-center leading-relaxed">
              Freelancer? Entrepreneur? Got a vision? Neovate's hub offers opportunities, feedback, and tools to thrive.
            </p>

            <div className="flex justify-center mb-6" role="tablist">
              <button
                onClick={() => setFormType('join')}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 ${
                  isJoin
                    ? 'bg-yellow-400 text-black'
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600'
                }`}
                aria-selected={isJoin}
                role="tab"
              >
                Join Hub
              </button>
              <button
                onClick={() => setFormType('idea')}
                className={`px-6 py-2 rounded-full font-semibold ml-4 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 ${
                  !isJoin
                    ? 'bg-yellow-400 text-black'
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600'
                }`}
                aria-selected={!isJoin}
                role="tab"
              >
                Submit Idea
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300 sr-only md:not-sr-only">Name</label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-black/40 border border-yellow-400/30 rounded-lg text-white focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                    placeholder="Your name"
                    required
                    aria-describedby="name-help"
                  />
                  <small id="name-help" className="text-gray-500 text-xs">Required for confirmation</small>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300 sr-only md:not-sr-only">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-black/40 border border-yellow-400/30 rounded-lg text-white focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="mobile" className="block text-sm font-semibold mb-2 text-gray-300 sr-only md:not-sr-only">Mobile</label>
                  <input
                    id="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full px-4 py-3 bg-black/40 border border-yellow-400/30 rounded-lg text-white focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                    placeholder="+91 1234567890"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-semibold mb-2 text-gray-300">Message</label>
                <textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-black/40 border border-yellow-400/30 rounded-lg text-white focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 resize-none"
                  placeholder={contentPlaceholder}
                  required
                  aria-describedby="content-help"
                />
                <small id="content-help" className="text-gray-500 text-xs">Share details—we're here to help launch your dream.</small>
              </div>

              {submitStatus && (
                <div
                  role="alert"
                  className={`p-4 rounded-lg text-center font-semibold transition-all duration-300 ${
                    submitStatus.type === 'success'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/50'
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
                onMouseEnter={() => !isSubmitting && setIsHovered(true)}
                onMouseLeave={() => !isSubmitting && setIsHovered(false)}
                className={`w-full relative px-10 py-4 bg-yellow-400 text-black font-bold rounded-full transition-all duration-500 overflow-hidden group flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 active:scale-95'
                }`}
                aria-label={isSubmitting ? submittingText : buttonText}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Icon size={20} className="group-hover:scale-110 transition-transform" />
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
                  />
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
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
        </div>

        {/* Styles */}
        <style>{`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
          .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
        `}</style>
      </section>
    </>
  );
}