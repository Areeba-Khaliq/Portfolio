import React, { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Work Together</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Open to graduate roles in AI/ML and web Dev. Let's connect for future opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column — Contact Details & Socials */}
            <div className="space-y-12">
              <div className="space-y-5">
                <div className="flex items-center">
                  <div className="p-3 bg-purple-600 rounded-lg mr-4">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:areeeba.khaliq@gmail.com" className="text-white hover:text-purple-400 transition-colors">
                      areeeba.khaliq@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 bg-pink-600 rounded-lg mr-4">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Lahore, Pakistan</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 bg-blue-600 rounded-lg mr-4">
                    <MessageCircle className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Response Time</p>
                    <p className="text-white">Within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Find Me Online</h4>
                <div className="flex space-x-4">
                  <a href="https://github.com/Areeba-Khaliq" target="_blank" rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300 transform hover:scale-110">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/areeba-khaliq/" target="_blank" rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110">
                    <Linkedin size={20} />
                  </a>
                  <a href="mailto:areeeba.khaliq@gmail.com"
                    className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-red-600 transition-all duration-300 transform hover:scale-110">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column — Form */}
            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

              {submitted && (
                <div className="mb-6 px-4 py-3 bg-green-900/30 border border-green-700/40 rounded-lg text-green-400 text-sm">
                  ✓ Message sent — I'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input
                    type="text" id="name" name="name"
                    value={formData.name} onChange={handleInputChange} required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input
                    type="email" id="email" name="email"
                    value={formData.email} onChange={handleInputChange} required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    id="message" name="message"
                    value={formData.message} onChange={handleInputChange} required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 transition-all duration-300 resize-none"
                    placeholder="Tell me about the role, project, or just say hello."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div> {/* Closes Grid */}
        </div> {/* Closes max-w-6xl */}
      </div> {/* Closes container */}
    </section>
  );
};

export default Contact;
