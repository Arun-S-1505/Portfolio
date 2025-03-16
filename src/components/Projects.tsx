import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Brewed Awakening',
    description: 'Brewed Awakening is a sleek and modern coffee shop website built using HTML, CSS, and JavaScript. It features an intuitive UI, showcasing menu items, promotions, and seamless navigation for an enhanced user experience.',
    image: '/assets/brewed-awakening.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Arun-S-1505/InnomaticsAssignment2.git',
    live: 'https://arun-s-1505.github.io/InnomaticsAssignment2/',
  },
  {
    title: 'E-Commerce Website',
    description: 'ShopEasy is a dynamic and user-friendly e-commerce website built using HTML, CSS, and JavaScript. It offers a seamless shopping experience with an intuitive UI, product listings, and smooth navigation.',
    image: '/assets/ShopEasy.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Arun-S-1505/InnomaticsAssignment4.git',
    live: 'https://arun-s-1505.github.io/InnomaticsAssignment4/',
  },
  {
    title: 'Memory Match Game',
    description: 'Memory Match Game is an interactive and engaging web-based game built using HTML, CSS, and JavaScript. It challenges players to test their memory skills with a fun and visually appealing card-matching experience.',
    image: '/assets/MemoryMatch.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Arun-S-1505/InnomaticsProject2.git',
    live: 'https://arun-s-1505.github.io/InnomaticsProject2/',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Some of my recent work</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
