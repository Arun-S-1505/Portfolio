import React from 'react';
import { BookOpen, Briefcase, Coffee } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Get to know me better</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
            I'm a passionate Full Stack Developer currently pursuing a B.Tech in Computer Science and Engineering. With hands-on experience in web development, I have worked on projects like 'Perfumy' and contributed to various intern projects. I also developed 'Crisis Pop,' a web-based emergency alert system. I enjoy crafting elegant solutions to complex problems and continuously explore new technologies to enhance my skills.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source
              projects, or sharing my knowledge through LinkedIn posts.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-700 dark:text-gray-200">Innomatics Intern</span>
              </div>
              <div className="flex items-center gap-4">
                <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-700 dark:text-gray-200">Pursuing B.Tech in Computer Science</span>
              </div>
              <div className="flex items-center gap-4">
                <Coffee className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-700 dark:text-gray-200">Tech enthusiast & coffee lover</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Frontend</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>React</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Backend</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Tools</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Git</li>
                <li>Linux</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Soft Skills</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Communication</li>
                <li>Leadership</li>
                <li>Problem Solving</li>
                <li>Teamwork</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}