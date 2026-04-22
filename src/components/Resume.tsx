import React from 'react';
import { Download, Award, Briefcase, GraduationCap, Trophy } from 'lucide-react';

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/AREEBA_KHALIQ_CV.pdf';
    link.download = 'Areeba_Khaliq_CV.pdf';
    link.click();
  };

  const experience = [
    {
      role: 'Machine Learning Engineer',
      org: 'FYP Research · University of the Punjab',
      period: 'Oct 2025 – Apr 2026',
      points: [
        'Trained CNN-based deep learning models with TensorFlow & OpenCV for acne severity classification',
        'Built image preprocessing pipelines with data augmentation across diverse skin tone datasets',
        'Developed backend inference logic generating personalised treatment recommendations',
      ],
    },
    {
      role: 'Full-Stack Developer',
      org: 'Hackathons · lablab.ai & Devpost',
      period: 'Apr 2025',
      points: [
        'Built and shipped ResuMate (AI resume builder) — Finalist at lablab.ai hackathon, live on Vercel',
        'Deployed AgentForce, an agentic IT support assistant using Salesforce Agentforce + FastAPI on Render',
        'Delivered both products end-to-end within 48-hour deadlines',
      ],
    },
  ];

  const achievements = [
    { icon: Trophy, text: 'lablab.ai Hackathon — ResuMate Finalist', year: 'Apr 2025' },
    { icon: Award, text: 'CS50x Puzzle Day — Harvard University', year: '2025 & 2026' },
    { icon: Trophy, text: 'Meta Hacker Cup — Competitive Programming', year: '2025' },
    { icon: Award, text: 'CodeBees 2.0 — Programming Competition', year: '2024' },
  ];

  return (
    <section id="resume" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Experience &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Credentials
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              GPA 3.71 / 4.0 · 2 live deployments · 1 hackathon finalist · graduating May 2026
            </p>
          </div>

          <div className="space-y-6">

            {/* Education */}
            <div className="bg-gray-900 rounded-2xl border border-gray-700 p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg mr-4">
                  <GraduationCap className="text-white" size={22} />
                </div>
                <h3 className="text-xl font-bold text-white">Education</h3>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <p className="text-white font-semibold">BSc Computer Science</p>
                  <p className="text-purple-400 text-sm">University of the Punjab, Lahore</p>
                  <p className="text-gray-400 text-sm mt-1">
                    Data Structures & Algorithms · Machine Learning · Database Systems · Software Engineering · Computer Networks
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-green-400 font-bold text-lg">3.71 / 4.0</p>
                  <p className="text-gray-400 text-sm">2022 – 2026</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-gray-900 rounded-2xl border border-gray-700 p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg mr-4">
                  <Briefcase className="text-white" size={22} />
                </div>
                <h3 className="text-xl font-bold text-white">Experience</h3>
              </div>
              <div className="space-y-8">
                {experience.map((exp, i) => (
                  <div key={i} className={i > 0 ? 'border-t border-gray-700 pt-8' : ''}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                      <div>
                        <p className="text-white font-semibold">{exp.role}</p>
                        <p className="text-purple-400 text-sm">{exp.org}</p>
                      </div>
                      <span className="text-gray-400 text-sm flex-shrink-0">{exp.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.points.map((point, j) => (
                        <li key={j} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                          <span className="text-purple-400 mt-0.5 flex-shrink-0">→</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-gray-900 rounded-2xl border border-gray-700 p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-lg mr-4">
                  <Trophy className="text-white" size={22} />
                </div>
                <h3 className="text-xl font-bold text-white">Achievements & Certifications</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {achievements.map(({ icon: Icon, text, year }, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-gray-800 rounded-xl border border-gray-700">
                    <Icon size={16} className="text-purple-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300 text-sm">{text}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Download */}
            <div className="text-center pt-4">
              <button
                onClick={handleDownload}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Download size={20} className="mr-2" />
                Download Full CV
              </button>
              <p className="text-gray-500 text-sm mt-3">PDF · Last updated April 2026</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
