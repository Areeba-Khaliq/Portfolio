import React from 'react';
import { MapPin, Rocket, Cpu, Globe } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Cpu,
      label: 'AI / ML Engineer',
      desc: 'Built CNN-based deep learning systems, predictive models, and NLP-powered tools deployed in real products.',
      color: 'text-purple-400',
      bg: 'bg-purple-900/20 border-purple-700/30',
    },
    {
      icon: Globe,
      label: 'Full-Stack Developer',
      desc: 'Shipped full-stack web apps using Next.js, Django, React, and SQLite — from hackathons to production deployments on Vercel and Render.',
      color: 'text-pink-400',
      bg: 'bg-pink-900/20 border-pink-700/30',
    },
    {
      icon: Rocket,
      label: 'Hackathon Builder',
      desc: 'Delivered two live products under hackathon pressure — ResuMate (AI resume builder) and AgentForce (AI IT support agent).',
      color: 'text-blue-400',
      bg: 'bg-blue-900/20 border-blue-700/30',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Left — Bio */}
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a software engineer specialising in <span className="text-purple-400 font-semibold">AI/ML systems</span> and <span className="text-pink-400 font-semibold">full-stack development</span>. I build end-to-end products — from training deep learning models to shipping them behind clean, functional interfaces.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My work spans computer vision, NLP, backend APIs, and data pipelines. I care about writing clean, maintainable code and building things that actually work in production — not just in notebooks.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Currently finalising my deep learning Final Year Project, <span className="text-purple-400 font-semibold">AcneAI</span> — a CNN-based acne severity classifier with personalised treatment recommendations — while actively looking for graduate engineering roles.
              </p>

              {/* Location + availability */}
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300">
                  <MapPin size={14} className="text-purple-400" />
                  Lahore, Pakistan
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-900/20 border border-green-700/30 rounded-full text-sm text-green-400">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Open to opportunities
                </span>
              </div>
            </div>

            {/* Right — Highlight cards */}
            <div className="space-y-4">
              {highlights.map(({ icon: Icon, label, desc, color, bg }) => (
                <div key={label} className={`flex gap-4 p-5 rounded-xl border ${bg} transition-all duration-300 hover:scale-[1.02]`}>
                  <div className={`${color} mt-0.5 flex-shrink-0`}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className={`font-semibold ${color} mb-1`}>{label}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
