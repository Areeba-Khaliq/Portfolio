import React from 'react';
import { Code, Database, Wrench, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      icon: Code,
      color: 'from-blue-500 to-blue-700',
      skills: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'C++', 'Java', 'React', 'Next.js', 'Django', 'HTML', 'CSS'],
    },
    {
      title: 'AI / ML & Data',
      icon: Database,
      color: 'from-purple-500 to-purple-700',
      skills: ['TensorFlow', 'OpenCV', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'CNN', 'NLP', 'Data Augmentation'],
    },
    {
      title: 'Tools & Infrastructure',
      icon: Wrench,
      color: 'from-green-500 to-green-700',
      skills: ['Git', 'GitHub', 'Linux', 'Vercel', 'Render', 'Jupyter', 'Google Colab', 'VS Code'],
    },
    {
      title: 'Engineering Practices',
      icon: Brain,
      color: 'from-pink-500 to-pink-700',
      skills: ['REST APIs', 'Database Design', 'Model Evaluation', 'Agile', 'Code Review', 'System Design', 'Problem Solving'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technical{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Stack
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Tools and technologies I use to design and build.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                      <IconComponent className="text-white" size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-white">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-600 hover:border-purple-400 hover:text-purple-400 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
