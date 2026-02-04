import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import MASImg from '../assets/MAS.png';

interface Project {
  title: string;
  description: string;
  tech: string[];
  category: string;
  date: string;
  link?: string;
  github?: string;
  image: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'Muthu Ambulance Service',
      description: 'Developed a website for an ambulance service company with modern UI/UX and integrated contact functionality.',
      tech: ['React', 'EmailJS', 'TailwindCSS'],
      category: 'Web Development',
      date: 'Jan 2026 - Jan 2026',
      link: 'https://www.muthuambulance.works',
      image: MASImg,
    },
  ];

  return (
    <section id="projects" className="relative py-20 lg:py-32 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
                Featured <span className="text-yellow-400">Projects</span>
              </h2>
          
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Discover our latest work and innovative solutions that drive real-world impact
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl lg:rounded-3xl overflow-hidden border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative h-64 lg:h-96 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} - Project Screenshot`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center space-x-2 bg-yellow-400/90 backdrop-blur-sm rounded-full px-3 py-1.5">
                      <Tag className="w-3 h-3 text-black" />
                      <span className="text-black font-bold text-xs uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 lg:p-8 xl:p-10 flex flex-col justify-center">
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 text-yellow-400 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{project.date}</span>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl xl:text-4xl font-black text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1.5 bg-yellow-400/10 border border-yellow-400/30 rounded-lg text-yellow-400 font-medium text-sm hover:bg-yellow-400/20 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-xl hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 hover:scale-105 transform group/btn"
                      >
                        <span>View Live</span>
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </a>
                    )}
                    
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 transform group/btn"
                      >
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 lg:mt-20">
          <div className="bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-yellow-400/20">
            <h3 className="text-2xl lg:text-3xl font-black text-white mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Let's collaborate and bring your ideas to life with cutting-edge technology and innovative solutions.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-xl hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 hover:scale-105 transform group"
            >
              <span>Start Your Project</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}