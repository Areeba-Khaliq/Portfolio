import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">

        {/* ✦ NEW: Available badge */}
        <div className="mb-8 mt-8 inline-flex items-center gap-2 px-4 py-1.5 bg-purple-900/40 border border-purple-500/30 rounded-full">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-xs text-purple-300 tracking-widest uppercase">Available for Graduate Roles · May 2026</span>
        </div>

        {/* Profile Image */}
        <div className="mb-10 inline-block">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mx-auto shadow-2xl ring-4 ring-purple-400 ring-opacity-50">
            <img
              src="/image.png"
              alt="Areeba Khaliq"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          Areeba <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Khaliq</span>
        </h1>

        {/* ✦ UPDATED: More specific title */}
        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
          CS Graduate · <span className="text-purple-400">AI/ML Engineer</span> · Full-Stack Developer
        </p>

        {/* ✦ UPDATED: Mention AcneAI FYP */}
        <p className="text-base text-gray-400 mb-4 max-w-2xl mx-auto">
          Final-year student at University of the Punjab, building intelligent systems at the intersection of deep learning and product engineering.
        </p>

        {/* ✦ NEW: FYP callout pill */}
        <div className="mb-10">
          <span
            onClick={() => scrollToSection('fyp')}
            className="cursor-pointer inline-flex items-center gap-2 px-4 py-1.5 bg-pink-900/30 border border-pink-500/30 rounded-full text-xs text-pink-300 hover:bg-pink-900/50 transition-all duration-300"
          >
            🧠 FYP: AcneAI — CNN-based acne severity detection & treatment recommendation
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border-2 border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          
            href="https://github.com/Areeba-Khaliq"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-purple-600 transition-all duration-300 transform hover:scale-110"
          >
            <Github size={24} />
          </a>
          
            href="https://www.linkedin.com/in/areeba-khaliq/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          
            href="mailto:areeeba.khaliq@gmail.com"
            className="p-3 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-red-600 transition-all duration-300 transform hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-purple-400 hover:text-purple-300 transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
