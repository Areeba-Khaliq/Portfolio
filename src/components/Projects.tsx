import React from 'react';
import { ExternalLink, Github, Heart, Home, FileText, Bot } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Heart Disease Prediction Model",
      description: "Built using UCI dataset with 98.54% accuracy. Compared ML algorithms like Decision Tree, SVM, KNN, Logistic Regression using Python libraries.",
      tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      icon: Heart,
      color: "from-red-500 to-pink-500",
      github: "#",
      demo: "#"
    },
    {
      title: "Hostel Management System",
      description: "Web app for hostel operations: room allocation, fee tracking, and comprehensive management system for educational institutions.",
      tech: ["Django", "SQLite3", "HTML", "CSS"],
      icon: Home,
      color: "from-blue-500 to-cyan-500",
      github: "#",
      demo: "#"
    },
    {
      title: "ResuMate",
      description: "AI-powered resume builder built for a hackathon. Features AI-driven section generation and is hosted on Vercel for easy access.",
      tech: ["Next.js", "Grok AI", "HTML", "CSS"],
      icon: FileText,
      color: "from-green-500 to-emerald-500",
      github: "#",
      demo: "https://resume-creaters.vercel.app/"
    },
    {
      title: "AgentForce",
      description: "AI assistant for internal IT support using Salesforce Agentforce and FastAPI. Built during a hackathon to streamline support processes.",
      tech: ["HTML", "CSS", "JavaScript", "FastAPI"],
      icon: Bot,
      color: "from-purple-500 to-indigo-500",
      github: "#",
      demo: "https://agentforce-devpost.onrender.com/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              A showcase of my technical skills and creative problem-solving through real-world applications
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={index}
                  className="group bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  {/* Project Header */}
                  <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                  
                  <div className="p-8">
                    {/* Icon and Title */}
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="text-white" size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm border border-gray-600 group-hover:border-purple-400 group-hover:text-purple-400 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="flex items-center px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 hover:text-white transition-all duration-300 group/btn"
                      >
                        <Github size={16} className="mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                        Code
                      </a>
                      {project.demo !== "#" && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 group/btn`}
                        >
                          <ExternalLink size={16} className="mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-6">
              Want to see more of my work or collaborate on a project?
            </p>
            <a
              href="https://github.com/Areeba-Khaliq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Github size={20} className="mr-2" />
              Visit My GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;