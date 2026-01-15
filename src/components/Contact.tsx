import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', message: '' });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send message to admin (you)
      await emailjs.send(
        'service_oea27kp',      // your service ID
        'template_z1ug5uq',     // template for admin
        {
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          message: formData.message,
          from_email: 'teamneovate@gmail.com' // updated sender email
        },
        'jbjZxkG--7ob-fr1J'     // your public key
      );

      // Send confirmation mail to the user
      await emailjs.send(
        'service_oea27kp',      // same service ID
        'template_3lvrb64',     // template for user confirmation
        {
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          message: formData.message,
          from_email: 'teamneovate@gmail.com' // updated sender email
        },
        'jbjZxkG--7ob-fr1J'
      );

      // setSubmitStatus({
      //   type: 'success',
      //   message: "Message sent successfully! We've also sent you a confirmation email.",
      // });

      setFormData({ name: '', email: '', mobile: '', message: '' });

    } catch (error) {
      console.error('EmailJS Error:', error);
      // setSubmitStatus({
      //   type: 'error',
      //   message: 'Failed to send message. Please try again later.',
      // });
    } finally {
      setIsSubmitting(false);
    }
  };

  // socialLinks use your provided URLs and SVG icons
  const socialLinks = [
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/neovate_ai',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/company/neovate-ai',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    { 
      name: 'YouTube', 
      url: 'https://www.youtube.com/@Neovate_ai',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    { 
      name: 'X (Twitter)', 
      url: 'https://x.com/Neovate_AI',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    { 
      name: 'Threads', 
      url: 'https://www.threads.com/@neovate_ai',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161"/>
        </svg>
      )
    },
  ];

  return (
    <>
      <Helmet>
        <title>Neovate</title>
        <meta
          name="description"
          content="Reach out to Neovate for software development, AI solutions, and digital services. Contact us via email, phone, or our online form to discuss your project."
        />
        <meta name="keywords" content="contact neovate, software company contact, AI startup India, web development inquiry, digital services contact" />
        <link rel="canonical" href="https://neovateai.tech/contact" />
      </Helmet>

      <section id="contact" className="relative py-20 bg-black overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-px bg-yellow-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                opacity: 0.4,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Get in</span>
              <span className="text-yellow-400">Touch</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to start your project? Let's create something amazing together
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-gray-900/50 border rounded-lg text-white focus:outline-none transition-all duration-300 ${
                      focusedField === 'name'
                        ? 'border-yellow-400'
                        : 'border-gray-700'
                    }`}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-gray-900/50 border rounded-lg text-white focus:outline-none transition-all duration-300 ${
                      focusedField === 'email'
                        ? 'border-yellow-400'
                        : 'border-gray-700'
                    }`}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Mobile Number</label>
                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    onFocus={() => setFocusedField('mobile')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-gray-900/50 border rounded-lg text-white focus:outline-none transition-all duration-300 ${
                      focusedField === 'mobile'
                        ? 'border-yellow-400'
                        : 'border-gray-700'
                    }`}
                    placeholder="+91 1234567890"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={6}
                    className={`w-full px-4 py-3 bg-gray-900/50 border rounded-lg text-white focus:outline-none transition-all duration-300 resize-none ${
                      focusedField === 'message'
                        ? 'border-yellow-400'
                        : 'border-gray-700'
                    }`}
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>

                {submitStatus && (
                  <div
                    className={`p-4 rounded-lg text-center font-semibold ${
                      submitStatus.type === 'success'
                        ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                        : 'bg-red-500/20 text-red-400 border border-red-500/50'
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-4 bg-yellow-400 text-black font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSubmitting
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-yellow-300 hover:scale-105'
                  }`}
                >
                  <Send size={20} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                    <Mail className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Email</p>
                    <p className="text-white font-semibold">teamneovate@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                    <Phone className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Phone</p>
                    <p className="text-white font-semibold">+91 9080581688 , +91 9655191168</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                    <MapPin className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Location</p>
                    <p className="text-white font-semibold">Remote (Vellore) </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:scale-110 transition-all duration-300 group border border-yellow-400/30 hover:border-yellow-400"
                        aria-label={social.name}
                      >
                        {/* render the inline SVG icon */}
                        <span className="text-yellow-400 group-hover:text-black transition-colors">
                          {social.icon}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}