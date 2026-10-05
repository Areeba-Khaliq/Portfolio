export const profile = {
  name: 'Areeba Khaliq',
  tagline: 'Computer Science graduate working on machine learning for medical imaging, and on the web apps that put those models in front of people.',
  location: 'Lahore, Pakistan',
  email: 'areebakhaliq02@gmail.com',
  phone: '+92 349 6547946',
  github: 'https://github.com/Areeba-Khaliq',
  linkedin: 'https://www.linkedin.com/in/areeba-khaliq/',
  cv: '/AREEBA_KHALIQ_CV.pdf',
};

export const honors: { text: string; href?: string }[] = [
  { text: 'IELTS Academic overall band 7.5 (Reading 8.0, Listening 7.5, Writing 6.5, Speaking 7.0)', href: 'https://drive.google.com/file/d/1rmBHqS00jSuAChyveiUGJX1ich7lVLkV/view?usp=sharing' },
  { text: 'Lead for the local edition of the NASA Space Apps Challenge, NASA’s global annual hackathon', href: 'https://drive.google.com/file/d/1v0WRvBQ3rAD1WQQpERLRLsR5xYhp_eBC/view?usp=sharing' },
  { text: 'Qualified the pre-qualification round of the International Computer Science Competition (ICSC) 2026', href: 'https://drive.google.com/file/d/1gim7vej0O3MWin3bWTk1I6CaGjvVmYPw/view' },
  { text: 'Round 2 of the Meta Hacker Cup, top 16% of participants globally', href: 'https://www.facebook.com/codingcompetitions/hacker-cup/2025/certificate/1455866345523083' },
  { text: 'Perfect 9/9 on Harvard’s CS50x Puzzle Day in both 2025 and 2026', href: 'https://certificates.cs50.io/a98d2004-cf3e-444b-90cf-f55612396c77.pdf?size=letter' },
];

export const scholarships = [
  {
    title: 'PM Laptop Scheme Awardee',
    org: 'HEC Prime Minister’s Youth Laptop Scheme, University of the Punjab',
    date: 'Mar 2024',
    note: 'Awarded a laptop for a 3.74/4.00 CGPA in the first semester.',
  },
  {
    title: 'Merit Scholarship, Grades 11 & 12',
    org: 'Punjab Group of Colleges, Faisalabad',
    date: 'Aug 2019',
    note: 'Full scholarship based on Grades 9 and 10 results (1072/1100).',
  },
  {
    title: 'PEEF Merit Scholarship, Grades 9 & 10',
    org: 'Punjab Educational Endowment Fund',
    date: 'Sep 2017',
    note: 'Awarded for Grade 8 results (483/500).',
    href: 'https://drive.google.com/file/d/163laRwbdtxdJdr2fN999v0JxDJ6dW9_w/view?usp=sharing',
  },
];

export const education = {
  school: 'University of the Punjab, Lahore',
  degree: 'BS Computer Science',
  period: '2022 – 2026',
  gpa: { text: 'GPA 3.48 / 4.00', href: 'https://drive.google.com/file/d/15_Nm6c80gAzSdOT8N4o3dAMgI9JrA-dG/view?usp=sharing' },
  fyp: {
    title: 'Final Year Project: AcneAI, acne detection and analysis with machine learning',
    href: 'https://github.com/Areeba-Khaliq/acne-ai',
    points: [
      'Built a three-model EfficientNet-B3 pipeline for acne detection, sub-type classification and severity classification, reaching 86% validation accuracy on ACNE04.',
      'Converted the models to ONNX and served them through FastAPI: sub-second model inference on CPU, 2.4 seconds end to end.',
      'Designed an asynchronous pipeline with Celery and Redis that cut database load by 40% under concurrent traffic.',
      'Implemented JWT authentication, the Supabase schema, and an OCR + LLM (Groq) pipeline for ingredient scanning and a dermatology chatbot.',
    ],
  },
};

export const research = {
  title: 'Federated Training and Explainability for Hybrid CNN-Transformer Skin Lesion Classification',
  kind: 'Research project',
  period: 'May 2026 – Aug 2026',
  points: [
    'Benchmarked four CNN-Transformer architectures for 7-class skin lesion diagnosis on HAM10000 (10,015 images), comparing centralized and federated training across five simulated hospitals.',
    'Cut the accuracy penalty of federated training from 12.5 to 4.2 percentage points with Group Normalization and centralized-checkpoint initialization; FedProx recovered a further 6 points under severe data imbalance.',
    'Built a Grad-CAM++ and attention-rollout pipeline that explains both network branches, and found two reproducible failure modes on low-contrast lesions.',
  ],
};

export const projects: {
  title: string;
  venue: string;
  date: string;
  stack?: string;
  points: { label?: string; text: string; href?: string }[];
}[] = [
  {
    title: 'ResuMate & AgentForce',
    venue: 'lablab.ai / Devpost hackathons',
    date: 'Apr 2025',
    points: [
      { label: 'ResuMate', text: 'an AI resume builder using Next.js and Grok AI, deployed on Vercel.', href: 'https://github.com/Areeba-Khaliq/ResuMate' },
      { label: 'AgentForce', text: 'an IT support assistant that connects Salesforce Agentforce to a FastAPI backend, deployed on Render.' },
    ],
  },
  {
    title: 'Heart Disease Prediction Model',
    venue: 'Personal project',
    date: 'May 2025',
    stack: 'Python, Scikit-learn, Pandas, NumPy, Matplotlib',
    points: [
      { text: 'Reached 98.54% accuracy while benchmarking Decision Tree, Logistic Regression, KNN and SVM on the 303-record UCI Heart Disease dataset.' },
    ],
  },
];

export const teaching = [
  {
    title: 'DSA Instructor',
    date: 'Sep 2026',
    href: 'https://github.com/Areeba-Khaliq/DSA-for-nonTechStudents',
    text: 'Weekly Data Structures and Algorithms sessions for students from non-technical backgrounds: stacks, queues, linked lists and hashmaps.',
  },
  {
    title: 'IELTS Instructor',
    date: 'Jul 2026',
    href: 'https://github.com/Areeba-Khaliq/IELTS_Volunteer_Work',
    text: 'Coached students on all four IELTS modules (Listening, Reading, Writing, Speaking) toward their target band scores.',
  },
];

export const skills = [
  { label: 'Programming', items: 'Python, Java, JavaScript, C, C++, SQL, HTML, CSS' },
  { label: 'ML & research', items: 'PyTorch, TensorFlow, Scikit-learn, OpenCV, Federated Learning (FedAvg, FedProx), Grad-CAM++, Attention Rollout, Pandas, NumPy' },
  { label: 'Frameworks', items: 'React, Next.js, Django, FastAPI, Celery' },
  { label: 'Tools', items: 'Git, GitHub, VS Code, Jupyter Notebook, Google Colab, Linux, Apache Tomcat, Vercel' },
];
