# Areeba Khaliq - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS featuring a dark theme with smooth animations and professional design.

## 🌟 Features

- **Modern Dark Theme**: Professional dark color scheme with purple/pink accents
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Subtle hover effects and transitions throughout
- **Interactive Components**: Smooth scrolling navigation and interactive project cards
- **Production Ready**: Clean, optimized code with proper component structure

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.tsx          # Landing page with intro and navigation
│   ├── About.tsx         # About me section with bio and education
│   ├── Skills.tsx        # Skills showcase with categories
│   ├── Projects.tsx      # Project portfolio with live links
│   ├── Resume.tsx        # Resume download section
│   ├── Contact.tsx       # Contact form and social links
│   └── Footer.tsx        # Footer with additional links
├── App.tsx              # Main app component
├── main.tsx             # App entry point
└── index.css            # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone or download the project files
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## 🎨 Customization

### Personal Information
Update the following files with your information:

**Hero.tsx**: Name, title, and bio
**About.tsx**: Education details, bio, and stats
**Skills.tsx**: Your technical skills and categories
**Projects.tsx**: Your project details and links
**Contact.tsx**: Contact information and social links

### Colors and Styling
The color scheme uses Tailwind CSS classes. Main colors:
- Primary: Purple (`purple-400`, `purple-600`)
- Secondary: Pink (`pink-400`, `pink-600`)
- Background: Gray (`gray-800`, `gray-900`)

### Adding Your Resume
1. Add your PDF resume to the `public` folder
2. Update the download link in `Resume.tsx`:
   ```typescript
   const handleDownload = () => {
     const link = document.createElement('a');
     link.href = '/your-resume.pdf';
     link.download = 'Areeba-Khaliq-Resume.pdf';
     link.click();
   };
   ```

## 📱 Responsive Design

The website is built with a mobile-first approach:
- **Mobile**: Single column layouts, stacked elements
- **Tablet**: Two-column grids where appropriate
- **Desktop**: Full grid layouts with optimal spacing

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Deployment

### GitHub Pages

1. Build the project:
   ```bash
   npm run build
   ```

2. Install the GitHub Pages deployment package:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Add deployment scripts to `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/your-repo-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### Other Platforms
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repo
- **Firebase Hosting**: Use Firebase CLI

## 🔍 SEO Optimization

The website includes:
- Semantic HTML structure
- Proper meta tags (update in `index.html`)
- Accessible navigation
- Fast loading times
- Mobile optimization

## 🎯 Performance

- **Lazy Loading**: Components load as needed
- **Optimized Images**: Use WebP format when possible
- **Minimal Dependencies**: Only essential packages included
- **Tree Shaking**: Unused code automatically removed

## 🤝 Contributing

This is a personal portfolio template. Feel free to:
1. Fork the project
2. Create your feature branch
3. Make your changes
4. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Areeba Khaliq**
- Email: areeeba.khaliq@gmail.com
- LinkedIn: [linkedin.com/in/areeba-khaliq](https://www.linkedin.com/in/areeba-khaliq/)
- GitHub: [github.com/Areeba-Khaliq](https://github.com/Areeba-Khaliq)

## 🙏 Acknowledgments

- Design inspired by modern portfolio trends
- Icons from [Lucide React](https://lucide.dev/)
- Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

**Note**: Remember to replace placeholder links and information with your actual details before deployment!