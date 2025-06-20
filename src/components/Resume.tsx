import React from 'react';
import { Download, FileText, Award } from 'lucide-react';

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Areeba.pdf'; // Make sure this file exists in the public folder
    link.download = 'Areeba-Resume.pdf';
    link.click();
  };

  const achievements = [
    "98.54% accuracy in Heart Disease Prediction Model",
    "Successfully completed multiple hackathon projects",
    "Built full-stack web applications with modern frameworks",
    "Experience with AI/ML and data science projects"
  ];

  return (
    <section id="resume" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Resume</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Download my complete resume to learn more about my experience and qualifications
            </p>
          </div>

          {/* Resume Card */}
          <div className="bg-gray-900 rounded-2xl shadow-xl border border-gray-700 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8">
              <div className="flex items-center justify-center text-white">
                <FileText size={48} className="mr-4" />
                <div>
                  <h3 className="text-2xl font-bold">My Resume</h3>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid md:grid-cols-1 gap-8">
                {/* Highlights */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-6 flex items-center justify-center">
                    <Award className="mr-2 text-purple-400" size={20} />
                    Key Highlights
                  </h4>
                  <ul className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Download Button */}
              <div className="text-center mt-8">
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Download size={20} className="mr-2" />
                  Download My Resume
                </button>
                <p className="text-gray-400 text-sm mt-4">
                  Last updated: June 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
