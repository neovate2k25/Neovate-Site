import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Twitter, Github } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
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
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Get in <span className="text-yellow-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to start your project? Let's create something amazing together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
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
                      ? 'border-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.3)]'
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
                      ? 'border-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.3)]'
                      : 'border-gray-700'
                  }`}
                  placeholder="your@email.com"
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
                      ? 'border-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.3)]'
                      : 'border-gray-700'
                  }`}
                  placeholder="Tell us about your project..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-4 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition-all duration-300 shadow-[0_0_30px_rgba(250,204,21,0.6)] hover:shadow-[0_0_40px_rgba(250,204,21,0.9)] hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                  <Mail className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email</p>
                  <p className="text-white font-semibold">hello@neovate.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                  <Phone className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Phone</p>
                  <p className="text-white font-semibold">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                  <MapPin className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Location</p>
                  <p className="text-white font-semibold">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:scale-110 transition-all duration-300 group border border-yellow-400/30 hover:border-yellow-400"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 text-yellow-400 group-hover:text-black transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.18171182763!2d-122.50764017832253!3d37.75768895889491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1649875894250!5m2!1sen!2s"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Neovate Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
