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
        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900/30 rounded-xl border border-gray-800 hover:border-yellow-400/50 transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                {/* Project Header */}
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 mb-6">
                  {/* Project Image */}
                  <div className="lg:w-80 flex-shrink-0">
                    <div className="relative rounded-lg overflow-hidden">
                      <img
                        src={project.image}
                        alt={`${project.title} - Project Screenshot`}
                        className="w-full h-48 lg:h-52 object-cover"
                      />
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="flex-1">
                    <div className="flex items-center text-yellow-400 text-sm mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {project.date}
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-yellow-400/10 text-yellow-400 text-sm font-medium px-3 py-1 rounded-md border border-yellow-400/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-800">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-2.5 rounded-lg transition-colors duration-200"
                    >
                      <span>View Live</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 border border-gray-600 hover:border-gray-500 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  )}
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