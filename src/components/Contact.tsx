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
    // Replace this with your preferred form handler e.g. Formspree, EmailJS
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
              I'm actively looking for graduate roles in AI/ML engineering, data science, and full-stack development. Open to full-time positions, contract work, and interesting collaborations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Left — Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Get In Touch</h3>
                <p className="text-gray-400 leading-relaxed">
                  Whether you have a role to discuss, a project to build, or just want to connect — my inbox is open. I respond within 24 hours.
                </p>
              </div>

              {/* Availability badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-900/20 border border-green-700/30 rounded-full">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-green-400 text-sm">Availa
