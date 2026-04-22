import React from 'react';
import { Brain, Microscope, Stethoscope } from 'lucide-react';

const FYP = () => {
  return (
    <section id="fyp" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-purple-900/40 border border-purple-500/30 text-purple-400 rounded-full text-xs tracking-widest uppercase mb-4">
              ★ Final Year Project
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Work
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          {/* FYP Card */}
          <div className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl">
            {/* Top accent bar */}
            <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>

            <div className="grid md:grid-cols-2 gap-0">

              {/* Left — Content */}
              <div className="p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600">
                    <Brain className="text-white" size={28} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 tracking-widest uppercase">Oct 2025 - Apr 2026</p>
                    <p className="text-xs text-purple-400 tracking-widest uppercase">University of the Punjab, Lahore</p>
                  </div>
                </div>

                <h3 className="text-4xl font-bold mb-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    ACNE
                  </span>
                  <span className="text-white">AI</span>
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  A deep learning system that detects and classifies acne severity from facial images
                  into mild, moderate, and severe categories-then generates personalised skincare
                  treatment recommendations based on the classification output.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    'Designed and trained CNN-based models using TensorFlow and OpenCV for multi-class severity detection',
                    'Built image preprocessing pipelines and data augmentation strategies to improve generalisation across diverse skin tones',
                    'Developed backend inference logic that maps severity classification to personalised treatment recommendations',
                    'Evaluated performance using precision, recall, F1-score, and confusion matrix analysis',
                  ].map((point, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-400 leading-relaxed">
                      <span className="text-purple-400 mt-0.5 flex-shrink-0"></span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {['TensorFlow', 'OpenCV', 'Python', 'CNN', 'Data Augmentation', 'Scikit-learn'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-900/30 border border-purple-500/30 text-purple-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — Visual */}
              <div className="bg-gray-900 border-l border-gray-700 p-10 flex flex-col justify-center gap-6">

                {/* Severity Cards */}
                <div>
                  <p className="text-xs text-gray-500 tracking-widest uppercase mb-3">Severity Classification</p>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Mild', icon: Microscope, color: 'text-green-400', bg: 'bg-green-900/20 border-green-700/30' },
                      { label: 'Moderate', icon: Stethoscope, color: 'text-yellow-400', bg: 'bg-yellow-900/20 border-yellow-700/30' },
                      { label: 'Severe', icon: Brain, color: 'text-red-400', bg: 'bg-red-900/20 border-red-700/30' },
                    ].map(({ label, icon: Icon, color, bg }) => (
                      <div key={label} className={`rounded-xl border ${bg} p-4 text-center`}>
                        <Icon className={`${color} mx-auto mb-2`} size={20} />
                        <p className="text-xs text-gray-400">Class</p>
                        <p className={`text-sm font-bold ${color}`}>{label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CNN Pipeline */}
                <div className="bg-gray-800 rounded-xl border border-gray-700 p-5">
                  <p className="text-xs text-gray-500 tracking-widest uppercase mb-4">CNN Pipeline</p>
                  <div className="flex items-center justify-between gap-1">
                    {['Input', 'Conv', 'Feature Maps', 'Dense', 'Output'].map((step, i, arr) => (
                      <React.Fragment key={step}>
                        <div className="flex-1 bg-purple-900/30 border border-purple-700/30 rounded-lg px-1 py-2 text-center">
                          <p className="text-purple-300 text-xs leading-tight">{step}</p>
                        </div>
                        {i < arr.length - 1 && (
                          <span className="text-gray-600 text-xs">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Metrics note */}
                <div className="bg-purple-900/20 border border-purple-500/20 rounded-xl p-4">
                  <p className="text-xs text-purple-400 tracking-widest uppercase mb-1">Evaluation Metrics</p>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Precision · Recall · F1-Score · Confusion Matrix - iteratively improved across all severity classes.
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FYP;
