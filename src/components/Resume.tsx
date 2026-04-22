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
        'Trained CNN-based deep learning models with TensorFlow & OpenCV for acne severity classification (AcneAI)',
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

  const
