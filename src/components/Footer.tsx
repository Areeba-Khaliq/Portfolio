import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center mr-3">
                  <span className="text-white font-bold">AK</span>
                </div>
                <h3 className="text-xl font-bold text-white">Areeba Khaliq</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Computer Science student passionate about creating innovative solutions and building the future through code.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2">
                {['About', 'Skills', 'Projects', 'Resume', 'Contact'].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(link.toLowerCase());
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
              <div className="space-y-3">
                <a
                  href="mailto:areeeba.khaliq@gmail.com"
                  className="flex items-center text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  <Mail size={16} className="mr-2" />
                  areeeba.khaliq@gmail.com
                </a>
                <p className="text-gray-400 flex items-start">
                  <span className="w-4 h-4 mt-0.5 mr-2">📍</span>
                  Lahore, Pakistan
                </p>
              </div>
            </div>
          </div>

          {/* Social Links and Copyright */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Social Links */}
              <div className="flex space-x-6 mb-4 md:mb-0">
                <a
                  href="https://github.com/Areeba-Khaliq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-700 text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/areeba-khaliq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-700 text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:areeeba.khaliq@gmail.com"
                  className="p-2 rounded-full bg-gray-700 text-gray-400 hover:text-white hover:bg-red-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Mail size={18} />
                </a>
              </div>

              {/* Copyright */}
              <div className="text-center md:text-right">
                <p className="text-gray-400 flex items-center justify-center md:justify-end">
                  Made with <Heart size={16} className="text-red-500 mx-1" /> by Areeba Khaliq
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  © {currentYear} All rights reserved.
                </p>
              </div>
            </div>
          </div>

          {/* Back to Top Button */}
          <div className="text-center mt-8">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center px-4 py-2 bg-gray-700 text-gray-400 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              ↑ Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;