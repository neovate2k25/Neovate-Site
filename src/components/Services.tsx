import { useState, useMemo, useRef, useEffect } from 'react';
import {
  Code,
  Brain,
  Megaphone,
  Palette,
  Smartphone,
  Users,
  Camera,
  Video,
  BarChart3,
  Globe,
  Wrench,
  Search,
  GraduationCap,
  Database,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async'; // Page-level SEO

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false); // For scroll animations
  const sectionRef = useRef<HTMLDivElement>(null);

  // Memoized services for perf (avoids re-renders)
  const services = useMemo(() => [
    { name: 'Web Development', icon: Code, description: 'Custom responsive websites, front-end & back-end development.' },
    { name: 'App Development', icon: Smartphone, description: 'Native and cross-platform mobile apps for iOS/Android.' },
    { name: 'AI Integration', icon: Brain, description: 'Chatbots, ML pipelines, and AI automation tailored for startups.' },
    { name: 'Digital Marketing', icon: Megaphone, description: 'SEO-driven campaigns that convert and grow audiences in India.' },
    { name: 'Google & Meta Ads', icon: BarChart3, description: 'Targeted ad strategy, setup, and ROI optimization for businesses.' },
    { name: 'Photo/Video Editing', icon: Camera, description: 'Professional color grading, cuts, and motion graphics for brands.' },
    { name: 'Social Media Handling', icon: Users, description: 'Content calendars, engagement, and community growth on Instagram/LinkedIn.' },
    { name: 'Branding', icon: Palette, description: 'Logos, visual identity systems, and brand guidelines for startups.' },
    { name: 'Multimedia Support', icon: Video, description: 'Custom animations, motion design, and digital assets production.' },
    { name: 'CRM Setup', icon: Database, description: 'Custom CRM configuration & automation (Zoho, HubSpot) for efficient workflows.' },
    { name: 'Hosting & Domain', icon: Globe, description: 'Secure domain registration, hosting setup & ongoing management.' },
    { name: 'College Projects', icon: GraduationCap, description: 'Full-stack, AI, IoT, ML projects – end-to-end delivery for students.' },
    { name: 'School & Mini Projects', icon: GraduationCap, description: 'Quick, affordable academic & hobby projects with code + docs.' },
    { name: 'UI/UX Design', icon: Palette, description: 'User-centered wireframes, prototypes, and Figma designs.' },
    { name: 'Website Maintenance', icon: Wrench, description: 'Regular updates, backups, security audits, and performance tweaks.' },
    { name: 'SEO Optimization', icon: Search, description: 'On-page, technical SEO, and local ranking boosts for sites.' },
  ], []);

  const animMap = useMemo(() => [
    'float', 'pop', 'pulse', 'wave', 'spark', 'film', 'orbit', 'swirl', 'slide',
    'rise', 'float', 'pop', 'pulse', 'swirl', 'wave', 'spark',
  ], []);

  // Scroll observer for staggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Services schema for SEO (rich snippets)
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Software Development and Digital Services",
    "provider": {
      "@type": "Organization",
      "name": "Neovate",
      "url": "https://neovate.com",
      "address": { "@type": "PostalAddress", "addressLocality": "New Delhi", "addressCountry": "IN" }
    },
    "areaServed": "India",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Neovate Services",
      "itemListElement": services.map((svc, i) => ({
        "@type": "Offer",
        "position": i + 1,
        "itemOffered": { "@type": "Service", "name": svc.name, "description": svc.description }
      }))
    }
  };

  return (
    <>
      <Helmet>
        <title>Services | Neovate - Web, AI, SEO & College Projects in Delhi</title>
        <meta
          name="description"
          content="Neovate offers affordable web development, AI integration, SEO optimization, college projects, and digital marketing in New Delhi. Student-led solutions for startups and students."
        />
        <meta name="keywords" content="neovate services delhi, web development india, ai integration new delhi, college projects ai, seo optimization startup, crm setup zoho" />
        <meta property="og:title" content="Neovate Services: From Web Dev to AI in Delhi" />
        <meta property="og:description" content="Explore our 16+ services: Custom apps, branding, ads, and academic projects by student innovators." />
        <meta property="og:image" content="/og-services.jpg" />
        <meta property="og:url" content="https://neovate.com/services" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
      </Helmet>
      <section
        id="services"
        ref={sectionRef}
        className="relative py-12 sm:py-16 lg:py-20 bg-black"
        aria-label="Neovate Services Overview"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 animate-fadeInUp">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Our <span className="text-yellow-400">Services</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              16+ focused categories from web & AI to SEO and college projects—hover for micro-animations. Tailored for startups and students.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              const anim = animMap[i] || 'float';

              return (
                <article
                  key={svc.name}
                  className={`relative p-4 sm:p-6 lg:p-8 rounded-2xl border transition-all duration-500 cursor-pointer transform-gpu group focus-within:outline-none focus-within:ring-2 focus-within:ring-yellow-400/50 ${
                    hoveredIndex === i
                      ? 'bg-gradient-to-br from-yellow-400/20 to-transparent border-yellow-400 scale-105 z-10'
                      : 'bg-gray-900/50 border-gray-800 hover:border-gray-600'
                  } ${isVisible ? `animate-fadeInUp delay-${i * 50}ms` : 'opacity-0'}`}
                  style={{
                    transform: hoveredIndex === i ? 'translateY(-8px) scale(1.03)' : undefined,
                  }}
                  tabIndex={0}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onFocus={() => setHoveredIndex(i)}
                  onBlur={() => setHoveredIndex(null)}
                  role="button"
                  aria-label={`Explore ${svc.name}: ${svc.description}`}
                >
                  {/* Animated icon container */}
                  <div className={`icon-wrap mb-4 sm:mb-6 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg flex items-center justify-center ${anim} ${hoveredIndex === i ? 'active' : ''}`}>
                    <Icon className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 transition-all duration-300 ${hoveredIndex === i ? 'text-yellow-300 drop-shadow-lg' : 'text-yellow-400/90'}`} aria-hidden="true" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white text-center sm:text-left group-hover:text-yellow-300 transition-colors">
                    {svc.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 mb-0 sm:mb-4 text-center sm:text-left leading-relaxed">
                    {svc.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Styles */}
        <style>{`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
          .delay-0ms { animation-delay: 0ms; }
          .delay-50ms { animation-delay: 50ms; }
          .delay-100ms { animation-delay: 100ms; }
          /* Repeat for all delays up to 750ms (16 items) */
          .delay-150ms { animation-delay: 150ms; }
          .delay-200ms { animation-delay: 200ms; }
          .delay-250ms { animation-delay: 250ms; }
          .delay-300ms { animation-delay: 300ms; }
          .delay-350ms { animation-delay: 350ms; }
          .delay-400ms { animation-delay: 400ms; }
          .delay-450ms { animation-delay: 450ms; }
          .delay-500ms { animation-delay: 500ms; }
          .delay-550ms { animation-delay: 550ms; }
          .delay-600ms { animation-delay: 600ms; }
          .delay-650ms { animation-delay: 650ms; }
          .delay-700ms { animation-delay: 700ms; }
          .delay-750ms { animation-delay: 750ms; }
          /* Icon wrappers & animations (expanded from yours) */
          .icon-wrap { background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); }
          .icon-wrap svg { transition: transform .45s cubic-bezier(.2,.9,.2,1), filter .35s; }
          .float svg { transform-origin: center; }
          .float.active svg { animation: float 3s ease-in-out infinite; }
          .pop.active svg { animation: pop 700ms cubic-bezier(.2,.9,.2,1); }
          .swirl.active { animation: swirl 2.2s linear infinite; }
          .wave.active svg { animation: wave 1.6s ease-in-out infinite; transform-origin: center bottom; }
          .pulse.active svg { animation: pulse 1.4s ease-in-out infinite; }
          .orbit.active { animation: orbit 3s linear infinite; }
          .film.active svg { animation: film 1.8s steps(4) infinite; }
          .slide.active { animation: slide 1.6s ease-in-out infinite; }
          .rise.active svg { animation: rise 2s ease-in-out infinite; }
          .spark.active svg { animation: spark 900ms ease-in-out infinite; }
          /* Keyframes (unchanged) */
          @keyframes float { 0%,100%{transform: translateY(0)}50%{transform: translateY(-8px)} }
          @keyframes pop { 0%{transform: scale(0.85)}60%{transform: scale(1.08)}100%{transform: scale(1)} }
          @keyframes swirl { 0%{transform: rotate(0deg)}100%{transform: rotate(360deg)} }
          @keyframes wave { 0%{transform: rotate(-6deg)}50%{transform: rotate(6deg)}100%{transform: rotate(-6deg)} }
          @keyframes pulse { 0%{opacity: 0.5}50%{opacity: 1}100%{opacity: 0.5} }
          @keyframes orbit { 0%{transform: translateX(0)}25%{transform: translateX(6px) translateY(-4px)}50%{transform: translateX(0) translateY(-8px)}75%{transform: translateX(-6px) translateY(-4px)}100%{transform: translateX(0)} }
          @keyframes film { 0%{opacity:1}50%{opacity:.6}100%{opacity:1} }
          @keyframes slide { 0%{transform: translateX(-6px)}50%{transform: translateX(6px)}100%{transform: translateX(-6px)} }
          @keyframes rise { 0%{transform: translateY(6px) scale(.98)}50%{transform: translateY(-6px) scale(1.02)}100%{transform: translateY(6px) scale(.98)} }
          @keyframes spark { 0%{transform: scale(1)}50%{transform: scale(1.06)}100%{transform: scale(1)} }
          /* Responsive */
          @media (max-width: 640px){ .icon-wrap{ width:48px !important; height:48px !important; } .grid{ gap: 1rem; } }
          @media (min-width: 641px) and (max-width: 1024px){ .icon-wrap{ width: 56px; height: 56px; } }
        `}</style>
      </section>
    </>
  );
}