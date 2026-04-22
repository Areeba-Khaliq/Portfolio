import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-3 gap-8 mb-8">

            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">AK</span>
                </div>
                <h3 className="text-xl font-bold text-white">Areeba Khaliq</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm">
                AI/ML Engineer & Full-Stack Developer
              </p>
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-900/20 border border-green-700/30 rounded-full text-xs text-green-400">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                Open to work
              </span>
            </div>

            {/* Quick Links — updated to include FYP */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Navigation</h4>
              <ul className="space-y-2">
                {[
                  { label: 'About', id: 'about' },
                  { label: 'FYP — AcneAI', id: 'fyp' },
                  { label: 'Projects', id: 'projects' },
                  { label: 'Skills', id: 'skills' },
                  { label: 'Contact', id: 'contact' },
                ].map(({ label, id }) => (
                  <li key={id}>
                    <button
                      onClick={() => scrollToSection(id)}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Contact</h4>
              <div className="space-y-3">
                <a href="mailto:areeeba.khaliq@gmail.com"
                  className="flex items-center text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
                  <Mail size={14} className="mr-2" />
                  areeeba.khaliq@gmail.com
                </a>
                <p className="text-gray-400 text-sm flex items-center gap-2">
                  <MapPinIcon />
                  Lahore, Pakistan · Remote OK
                </p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex space-x-4">
              <a href="https://github.com/Areeba-Khaliq" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-700 text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300 transform hover:scale-110">
                <Github size={16} />
              </a>
              <a href="https://www.linkedin.com/in/areeba-khaliq/" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-700 text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110">
                <Linkedin size={16} />
              </a>
              <a href="mailto:areeeba.khaliq@gmail.com"
                className="p-2 rounded-full bg-gray-700 text-gray-400 hover:text-white hover:bg-red-600 transition-all duration-300 transform hover:scale-110">
                <Mail size={16} />
              </a>
            </div>

            <p className="text-gray-500 text-sm">
              © {currentYear} Areeba Khaliq 
            </p>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-4 py-2 bg-gray-700 text-gray-400 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300 text-sm"
            >
              ↑ Back to Top
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

// inline icon to avoid extra import
const MapPinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

export default Footer;
