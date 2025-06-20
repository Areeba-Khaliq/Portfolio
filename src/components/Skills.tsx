import React from 'react';
import { Code, Database, Wrench, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: Code,
      skills: ["C", "C++", "Python", "Java", "SQL", "HTML", "CSS", "JavaScript", "React", "Next.js", "Django"],
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: ["VS Code", "Linux", "Git", "GitHub", "Google Colab", "Jupyter Notebook", "Apache Tomcat"],
      color: "from-green-500 to-green-700"
    },
    {
      title: "Data Science & ML",
      icon: Database,
      skills: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Machine Learning", "Data Analysis"],
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Soft Skills",
      icon: Brain,
      skills: ["Problem-solving", "Creativity", "Algorithm Design", "Communication", "Team Collaboration"],
      color: "from-pink-500 to-pink-700"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern applications and solving complex problems
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105"
                >
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-600 hover:border-purple-400 hover:text-purple-400 transition-all duration-300 cursor-default"
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