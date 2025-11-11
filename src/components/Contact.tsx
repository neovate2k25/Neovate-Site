import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Twitter, Github } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
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
        'service_fue8iw3',      // your service ID
        'template_rxy5wfd',     // template for admin
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'pIKOD318ghxCQNKga'     // your public key
      );

      // Send confirmation mail to the user
      await emailjs.send(
        'service_fue8iw3',      // same service ID
        'template_aaxo61g',     // template for user confirmation
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'pIKOD318ghxCQNKga'
      );

      setSubmitStatus({
        type: 'success',
        message: "✅ Message sent successfully! We've also sent you a confirmation email.",
      });

      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus({
        type: 'error',
        message: '❌ Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
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
                className={`w-full px-6 py-4 bg-yellow-400 text-black font-bold rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(250,204,21,0.6)] flex items-center justify-center gap-2 ${
                  isSubmitting
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-yellow-300 hover:shadow-[0_0_40px_rgba(250,204,21,0.9)] hover:scale-105'
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
                  <p className="text-white font-semibold">sanjayn.23aim@kongu.edu</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                  <Phone className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Phone</p>
                  <p className="text-white font-semibold">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                  <MapPin className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Location</p>
                  <p className="text-white font-semibold">Kongu Engineering College, Erode</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
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

            {/* Map */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.206739007289!2d77.60232907490833!3d11.274853188924597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f8aeb5a2bdb%3A0x8ee5a2c7e788969!2sKongu%20Engineering%20College!5e0!3m2!1sen!2sin!4v1684561234567!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Neovate Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
