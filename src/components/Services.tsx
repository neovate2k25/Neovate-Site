import { useState } from 'react';
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
  // Settings,
  Database,
} from 'lucide-react';


export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);


  const services = [
    { name: 'Web Development', icon: Code, description: 'Custom websites, front-end & back-end.' },
    { name: 'App Development', icon: Smartphone, description: 'Native and cross-platform mobile apps.' },
    { name: 'AI Integration', icon: Brain, description: 'Chatbots, ML pipelines and automation.' },
    { name: 'Digital Marketing', icon: Megaphone, description: 'Campaigns that convert and grow audiences.' },
    { name: 'Google & Meta Ads', icon: BarChart3, description: 'Ad strategy, setup and optimisation.' },
    { name: 'Photo/Video Editing', icon: Camera, description: 'Color grading, cuts, motion graphics.' },
    { name: 'Social Media Handling', icon: Users, description: 'Content calendars and community growth.' },
    { name: 'Branding', icon: Palette, description: 'Logos, identity and visual systems.' },
    { name: 'Multimedia Support', icon: Video, description: 'Animations, motion design and assets.' },

    // ========== NEW SERVICES ADDED ==========
    { name: 'CRM Setup', icon: Database, description: 'Custom CRM configuration & automation (Zoho, HubSpot, etc.).' },
    { name: 'Hosting & Domain', icon: Globe, description: 'Domain registration, hosting setup & management.' },
    { name: 'College Projects', icon: GraduationCap, description: 'Full Stack, AI, IoT, ML – end-to-end project delivery.' },
    { name: 'School & Mini Projects', icon: GraduationCap, description: 'Quick, affordable academic & hobby projects.' },
    { name: 'UI/UX Design', icon: Palette, description: 'User-centered designs, wireframes & prototypes.' },
    { name: 'Website Maintenance', icon: Wrench, description: 'Updates, backups, security & performance optimization.' },
    { name: 'SEO Optimization', icon: Search, description: 'On-page, technical SEO & ranking improvements.' },
  ];

  // Extended animation map for the new cards
  const animMap = [
    'float',   // Web Development
    'pop',     // App Development
    'pulse',   // AI Integration
    'wave',    // Digital Marketing
    'spark',   // Google & Meta Ads
    'film',    // Photo/Video Editing
    'orbit',   // Social Media Handling
    'swirl',   // Branding
    'slide',   // Multimedia Support
    'rise',    // CRM Setup
    'float',   // Hosting & Domain
    'pop',     // College Projects
    'pulse',   // School & Mini Projects
    'swirl',   // UI/UX Design
    'wave',    // Website Maintenance
    'spark',   // SEO Optimization
  ];


  return (
    <section id="services" className="relative py-12 sm:py-16 lg:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Our <span className="text-yellow-400">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Focused service categories — tap a card to see a micro-animation.
          </p>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((svc, i) => {
            const Icon = svc.icon as any;
            const anim = animMap[i] || 'float';


            return (
              <div
                key={svc.name}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative p-4 sm:p-6 lg:p-8 rounded-2xl border transition-all duration-500 cursor-pointer transform-gpu
                  ${hoveredIndex === i ? 'bg-gradient-to-br from-yellow-400/20 to-transparent border-yellow-400 scale-105 z-10' : 'bg-gray-900/50 border-gray-800 hover:border-gray-700'}
                `}
                style={{
                  transform: hoveredIndex === i ? 'translateY(-8px) scale(1.03)' : undefined,
                }}
              >
                {/* Animated icon container */}
                <div className={`icon-wrap mb-4 sm:mb-6 w-12 h-12 sm:w-14 sm:h-14 lg:w-14 lg:h-14 rounded-lg flex items-center justify-center ${anim} ${hoveredIndex === i ? 'active' : ''}`}>
                  <Icon className={`w-6 h-6 sm:w-8 sm:h-8 lg:w-8 lg:h-8 ${hoveredIndex === i ? 'text-yellow-400' : 'text-yellow-400/90'}`} />
                </div>


                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white text-center sm:text-left">{svc.name}</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-0 sm:mb-4 text-center sm:text-left">{svc.description}</p>


                
              </div>
            );
          })}
        </div>
      </div>


      <style>{`
        /* Icon wrappers */
        .icon-wrap{ background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); }
        .icon-wrap svg{ transition: transform .45s cubic-bezier(.2,.9,.2,1), filter .35s; }


        /* Variants */
        .float svg{ transform-origin: center; }
        .float.active svg{ animation: float 3s ease-in-out infinite; }


        .pop.active svg{ animation: pop 700ms cubic-bezier(.2,.9,.2,1); }


        .swirl.active{ animation: swirl 2.2s linear infinite; }


        .wave.active svg{ animation: wave 1.6s ease-in-out infinite; transform-origin: center bottom; }


        .pulse.active svg{ animation: pulse 1.4s ease-in-out infinite; }


        .orbit.active{ animation: orbit 3s linear infinite; }


        .film.active svg{ animation: film 1.8s steps(4) infinite; }


        .slide.active{ animation: slide 1.6s ease-in-out infinite; }


        .rise.active svg{ animation: rise 2s ease-in-out infinite; }


        .spark.active svg{ animation: spark 900ms ease-in-out infinite; }


        /* Keyframes */
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


        /* Responsive tweaks */
        @media (max-width: 640px){
          .icon-wrap{ width:48px !important; height:48px !important; }
          .grid{ gap: 1rem; }
        }
        @media (min-width: 641px) and (max-width: 1024px){
          .icon-wrap{ width: 56px; height: 56px; }
        }
      `}</style>
    </section>
  );
}