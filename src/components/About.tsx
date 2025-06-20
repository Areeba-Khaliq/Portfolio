import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          {/* Content */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700 text-center space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Motivated and detail-oriented Computer Science student passionate about building scalable software and solving real-world problems through code. Experienced in web application development, machine learning projects, and hackathons.
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-center text-purple-400">
                <GraduationCap className="mr-3" size={20} />
                <span className="font-semibold">University of the Punjab, Lahore</span>
              </div>
              <div className="flex items-center justify-center text-pink-400">
                <Calendar className="mr-3" size={20} />
                <span className="font-semibold">Expected Graduation: June 2026</span>
              </div>
              <div className="flex items-center justify-center text-blue-400">
                <MapPin className="mr-3" size={20} />
                <span className="font-semibold">Lahore, Pakistan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
