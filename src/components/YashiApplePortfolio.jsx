import React, { useState, useEffect } from 'react';
import { ChevronDown, Moon, Sun, ArrowRight, Linkedin, GitHub, FileText } from 'lucide-react';
import './YashiApplePortfolio.css';

const YashiApplePortfolio = () => {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

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
    return () => window.removeEventListener('scroll', handleScroll);
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
                  <span className="text-2xl font-semibold">YY</span>
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
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4 animate-fade-in-up">Yashi Yadav</h1>
            <p className="text-xl mb-8 animate-fade-in-up animation-delay-300">Machine Learning Engineer • Data Scientist • AI Engineer</p>
            <a href="/assets/Yadav_Yashi_Resume.pdf" download className="apple-btn animate-fade-in-up animation-delay-300">
              Download Resume <FileText size={16} className="inline ml-2" />
            </a>
            <a href="#about" className="animate-bounce inline-block mt-8">
              <ChevronDown size={32} />
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold mb-8 text-center">About Me</h2>
            <p className="text-lg mb-6 animate-fade-in">
              A passionate Machine Learning Engineer and Software Developer with a strong foundation in AI/ML techniques and
              hands-on experience in deep learning and natural language processing. Highly skilled in developing and deploying ML
              models using TensorFlow and PyTorch. Excited to create solutions using machine learning and deep learning techniques
              and solve complex problems with cool solutions.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold mb-12 text-center">Skills & Technologies</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {skillsData.map((skill, index) => (
                <div key={index} className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300 ease-in-out">
                  <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg mb-4">
                    <img src={skill.logo} alt={skill.name} className="w-12 h-12" />
                  </div>
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6 text-center">Specializations</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {specializations.map((spec, index) => (
                  <span key={index} className="bg-blue-500 text-white dark:bg-blue-700 rounded-full px-6 py-2 text-sm font-medium animate-pulse">{spec}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold mb-12 text-center">Professional Experience</h2>
            {experienceData.map((exp, index) => (
              <div key={index} className="mb-12 bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
                <div className="flex items-center mb-4">
                  <img src={exp.logo} alt={exp.company} className="w-16 h-16 mr-6" />
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{exp.company} | {exp.period}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold mb-12 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-500 hover:underline">
                      View on GitHub <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
          <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-semibold mb-4">Yashi Yadav</h3>
                  <p className="text-sm text-gray-400">Machine Learning Engineer • Data Scientist • AI Engineer</p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li><a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">About</a></li>
                    <li><a href="#skills" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Skills</a></li>
                    <li><a href="#experience" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Experience</a></li>
                    <li><a href="#projects" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Projects</a></li>
                  </ul>
                </div>
                <div className="text-center md:text-right">
                  <h3 className="text-lg font-semibold mb-4">Connect</h3>
                  <div className="flex justify-center md:justify-end space-x-4">
                    <a href="mailto:yashiyadav0901@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/yashiyadav/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                      </svg>
                    </a>
                    <a href="https://github.com/yashiyadav1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                <p className="text-sm text-gray-400">&copy; 2024 Yashi Yadav. All rights reserved.</p>
              </div>
            </div>
          </footer>
          </div>
    </div>
  );
};

export default YashiApplePortfolio;