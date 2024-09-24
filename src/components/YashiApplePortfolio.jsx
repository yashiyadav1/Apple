import React, { useState, useEffect } from 'react';
import { ChromePicker } from 'react-color';
import { ChevronDown, Moon, Sun, ArrowRight, FileText, Mail, Linkedin, Github } from 'lucide-react';
import './YashiApplePortfolio.css';

const ColorPicker = ({ color, onChange }) => {
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div className="relative">
      <div
        className="w-6 h-6 rounded-full cursor-pointer"
        style={{ backgroundColor: color }}
        onClick={() => setShowPicker(!showPicker)}
      />
      {showPicker && (
        <div className="absolute z-10 mt-2">
          <ChromePicker color={color} onChange={(color) => onChange(color.hex)} />
        </div>
      )}
    </div>
  );
};

const YashiApplePortfolio = () => {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const skillsData = [
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
    { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
    { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
    { name: 'scikit-learn', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
    { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  ];

  const specializations = ['Deep Learning', 'Natural Language Processing', 'Data Analytics'];

  const experienceData = [
    { 
      company: 'Nokia', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Nokia_wordmark.svg', 
      title: 'Software QA Intern',
      period: 'May 2024 - Present',
      description: 'Developed RESTful API using FastAPI, engineered backend systems, and implemented AI model deployment POC in microservices architecture.'
    },
    { 
      company: 'Purdue University Fort Wayne', 
      logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQFLdPAifd1GhA/company-logo_100_100/company-logo_100_100/0/1714406017819/purdue_university_fort_wayne_logo?e=1735171200&v=beta&t=giqSt-VszQgVFcnclxYqHSdT5o-p5XnVRqujwhEfqN0', 
      title: 'Graduate Research Assistant',
      period: 'August 2023 - December 2024',
      description: 'Designed and implemented deep learning models for steganographic applications using TensorFlow.'
    },
    { 
      company: 'Vera Bradley', 
      logo: 'https://media.licdn.com/dms/image/v2/D560BAQGOC-h3jG97Aw/company-logo_100_100/company-logo_100_100/0/1720702091343/vera_bradley_logo?e=1735171200&v=beta&t=LTCRzloPRmYcnyu3u8ZwvUwSDvVnnYXsfjpsheEI8QQ', 
      title: 'D365 Developer Intern',
      period: 'May 2022 - August 2022',
      description: 'Enhanced Microsoft Dynamics 365 and designed Power Automate Flows for critical Batch Jobs.'
    },
  ];

  const projects = [
    { name: 'Adaptive Reading Companion (ARC)', description: 'Chrome extension enabling bionic reading for people with Meares Irlen syndrome and various reading disabilities.', github: 'https://github.com/yashiyadav1/ARC' },
    { name: 'Jerry: The Virtual Assistant', description: 'AI-powered voice assistant using ChatGPT API for communication and task execution.', github: 'https://github.com/yashiyadav1/Jerry' },
    { name: 'Hateful Speech Classifier', description: 'Scalable content moderation system using CNN and BERT models, achieving 93.50% accuracy.', github: 'https://github.com/yashiyadav1/Hate-Speech-Detection' },
    { name: 'ASL Recognition', description: 'Real-time hand gesture recognition for American Sign Language using CNN and LSTM.', github: 'https://github.com/yashiyadav1/ASL-recognition' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Implement smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`font-sans ${darkMode ? 'dark' : ''}`}>
      <div className="text-gray-900 bg-gradient-to-br from-gray-100 to-gray-200 dark:text-gray-100 dark:bg-gradient-to-br dark:from-gray-900 dark:to-black transition-colors duration-500">
        {/* Navigation */}
        <nav className={`fixed w-full z-10 transition-all duration-500 ${scrolled ? 'bg-white bg-opacity-70 backdrop-blur-lg dark:bg-black dark:bg-opacity-70' : 'bg-transparent'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <a href="#" className="flex items-center space-x-2">
                  <span className="text-xl sm:text-2xl font-semibold">YY</span>
                </a>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-4">
                  <a href="#about" className="nav-link">About</a>
                  <a href="#skills" className="nav-link">Skills</a>
                  <a href="#experience" className="nav-link">Experience</a>
                  <a href="#projects" className="nav-link">Projects</a>
                  <button onClick={toggleDarkMode} className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors duration-300">
                    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                  </button>
                </div>
              </div>
              <div className="md:hidden">
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-300 hover:text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">About</a>
                <a href="#skills" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Skills</a>
                <a href="#experience" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Experience</a>
                <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Projects</a>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up">Yashi Yadav</h1>
            <p className="text-lg sm:text-xl mb-8 animate-fade-in-up animation-delay-300">Machine Learning Engineer • Data Scientist • AI Engineer</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
              <a href="/public/assets/Yadav_Yashi_Resume.pdf" download className="apple-btn w-full sm:w-auto">
                Download Resume <FileText className="inline-block ml-2" size={16} />
              </a>
              <a href="mailto:yashiyadav0901@gmail.com" className="apple-btn w-full sm:w-auto">
                Get in Touch
              </a>
              <a href="https://github.com/yashiyadav1" target="_blank" rel="noopener noreferrer" className="apple-btn w-full sm:w-auto">
                Explore Projects
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">About Me</h2>
            <div className="bg-gray-800 rounded-3xl p-8 shadow-lg">
              <p className="text-lg text-gray-300 leading-relaxed">
                A passionate Machine Learning Engineer and Software Developer with a strong foundation in AI/ML techniques and
                hands-on experience in deep learning and natural language processing. Highly skilled in developing and deploying ML
                models using TensorFlow and PyTorch. Excited to create solutions using machine learning and deep learning techniques
                and solve complex problems with cool solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 sm:py-20 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-white">Skills & Technologies</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-8">
              {skillsData.map((skill, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-2xl p-4 sm:p-6 flex flex-col items-center transform transition duration-500 hover:scale-105 hover:shadow-lg">
                    <img src={skill.logo} alt={skill.name} className="w-12 h-12 sm:w-16 sm:h-16 mb-2 sm:mb-4" />
                    <span className="text-xs sm:text-sm font-medium text-gray-300 group-hover:text-white transition duration-300">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 sm:mt-16">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-white">Specializations</h3>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                {specializations.map((spec, index) => (
                  <span key={index} className="bg-blue-600 text-white rounded-full px-4 sm:px-6 py-1 sm:py-2 text-xs sm:text-sm font-medium">{spec}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 sm:py-20 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-white">Professional Experience</h2>
            {experienceData.map((exp, index) => (
              <div key={index} className="mb-8 sm:mb-12 bg-gray-800 rounded-3xl p-6 sm:p-8 shadow-lg transform transition duration-500 hover:scale-105">
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4">
                  <img src={exp.logo} alt={exp.company} className="w-16 h-16 mb-4 sm:mb-0 sm:mr-6" />
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-blue-400">{exp.company} | {exp.period}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm sm:text-base">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 sm:py-20 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-white">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-800 rounded-3xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">{project.name}</h3>
                    <p className="text-gray-400 mb-4 text-sm sm:text-base">{project.description}</p>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition duration-300 text-sm sm:text-base">
                      View on Github <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
              <div className="text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Yashi Yadav</h3>
                <p className="text-gray-400 mb-4 text-sm sm:text-base">Machine Learning Engineer • Data Scientist • AI Engineer</p>
                <a href="/public/assets/Yadav_Yashi_Resume.pdf" download className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 text-sm sm:text-base">
                  <FileText size={18} className="mr-2" />
                  Download Resume
                </a>
              </div>
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {["About", "Skills", "Experience", "Projects"].map((link) => (
                    <li key={link}>
                      <a 
                        href={`#${link.toLowerCase()}`} 
                        className="text-gray-400 hover:text-white transition duration-300 block py-1 text-sm sm:text-base"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center md:text-right">
                <h3 className="text-lg sm:text-xl font-semibold mb-4">Connect</h3>
                <div className="flex justify-center md:justify-end space-x-4 mb-4">
                  <a href="mailto:yashiyadav0901@gmail.com" className="text-gray-400 hover:text-white transition duration-300">
                    <Mail size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/yashiyadav/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                    <Linkedin size={24} />
                  </a>
                  <a href="https://github.com/yashiyadav1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                    <Github size={24} />
                  </a>
                </div>
                <p className="text-gray-400 text-sm sm:text-base">Let's build something amazing together!</p>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center">
              <p className="text-xs sm:text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Yashi Yadav. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Designed with <span className="text-red-500">♥</span> using React and Tailwind CSS
              </p>
            </div>
          </div>
        </footer>
  </div>
</div>
);
};
export default YashiApplePortfolio;
