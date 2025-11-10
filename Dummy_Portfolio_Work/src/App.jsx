import React, { useState, useEffect } from 'react';
import { Moon, Sun, Code, Database, Layout, Smartphone } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, product management, and user authentication.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop"
    },
    {
      title: "Task Management App",
      description: "Real-time collaborative task manager with drag-and-drop functionality and team collaboration features.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather application with forecasts, maps, and historical data visualization.",
      image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=400&h=300&fit=crop"
    },
    {
      title: "Social Media Analytics",
      description: "Analytics dashboard for tracking social media metrics with real-time data updates and insights.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    }
  ];

  const skills = [
    { name: "HTML5", icon: <Layout className="w-6 h-6" /> },
    { name: "CSS3", icon: <Code className="w-6 h-6" /> },
    { name: "JavaScript", icon: <Code className="w-6 h-6" /> },
    { name: "React", icon: <Smartphone className="w-6 h-6" /> },
    { name: "Node.js", icon: <Database className="w-6 h-6" /> },
    { name: "MongoDB", icon: <Database className="w-6 h-6" /> }
  ];

  return (
<div>
  <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          darkMode ? 'bg-gray-800/95' : 'bg-white/95'
        } backdrop-blur-sm shadow-md`}
      >
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                darkMode ? 'bg-teal-500' : 'bg-blue-600'
              }`}
            >
              <span className="text-white font-bold text-xl">CSP</span>
            </div>
            <span className="text-xl font-bold">Chaitanya Shekhar Pandey</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors ${
                  activeSection === section
                    ? darkMode
                      ? 'text-teal-400'
                      : 'text-blue-600'
                    : darkMode
                    ? 'text-gray-300 hover:text-teal-400'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition-colors ${
              darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className={`min-h-screen flex items-center justify-center pt-20 ${
          darkMode
            ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
            : 'bg-gradient-to-br from-blue-50 via-white to-teal-50'
        }`}
      >
        <div className="container mx-auto px-6 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Welcome, I'm{'Chaitanya Shekhar Pandey'}
            <span className={darkMode ? 'text-teal-400' : 'text-blue-600'}>John Doe</span>
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300 animate-slide-up"
            style={{ animationDelay: '0.1s' }}
          >
            A Full Stack Developer
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <h2 className={`text-4*l font-bold text-center mb-16 ${darkMode ? 'text-teal-400' : 'text-blue-600'}`}>
            About Me
          </h2>
        </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="flex justify-center">
              <div className={`w-64 h-64 rounded-full overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-300'} flex items-center justify-center`}>
                <div className="text-8xl">👨‍💻</div>
              </div>
            </div>

            <div>
              <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                I'm a passionate full stack developer with 5+ years of experience creating web applications that make a difference. I love turning complex problems into simple, beautiful, and intuitive solutions.
              </p>
              <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-all hover:scale-105 ${
                      darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'
                    } shadow-md`}
                  >
                    <div className={darkMode ? 'text-teal-400' : 'text-blue-600'}>
                      {skill.icon}
                    </div>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <h2 className={`text-4xl font-bold text-center mb-16 ${darkMode ? 'text-teal-400' : 'text-blue-600'}`}>
            My Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`rounded-xl overflow-hidden shadow-lg transition-all hover:scale-105 hover:shadow-2xl ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-teal-400 flex items-center justify-center text-white text-6xl">
                  🚀
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  <button
                    className={`px-6 py-2 rounded-full font-semibold transition-all ${
                      darkMode
                        ? 'bg-teal-500 hover:bg-teal-600 text-white'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <h2 className={`text-4xl font-bold text-center mb-16 ${darkMode ? 'text-teal-400' : 'text-blue-600'}`}>
            Get In Touch
          </h2>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              <div>
                <label className="block mb-2 font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`w-full px-4 py-3 rounded-lg transition-colors ${
                    darkMode
                      ? 'bg-gray-700 border-gray-600 focus:border-teal-400'
                      : 'bg-white border-gray-300 focus:border-blue-600'
                  } border-2 outline-none`}
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className={`w-full px-4 py-3 rounded-lg transition-colors ${
                    darkMode
                      ? 'bg-gray-700 border-gray-600 focus:border-teal-400'
                      : 'bg-white border-gray-300 focus:border-blue-600'
                  } border-2 outline-none`}
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Message</label>
                <textarea
                  rows="5"
                  placeholder="Your message here..."
                  className={`w-full px-4 py-3 rounded-lg transition-colors resize-none ${
                    darkMode
                      ? 'bg-gray-700 border-gray-600 focus:border-teal-400'
                      : 'bg-white border-gray-300 focus:border-blue-600'
                  } border-2 outline-none`}
                />
              </div>

              <button
                onClick={(e) => e.preventDefault()}
                className={`w-full px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                  darkMode ? 'bg-teal-500 hover:bg-teal-600 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Fixed Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-6">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-6 h-6 hover:text-teal-400" />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-6 h-6 hover:text-teal-400" />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="w-6 h-6 hover:text-teal-400" />
              </a>
              <a href="mailto:your@email.com">
                <FaEnvelope className="w-6 h-6 hover:text-teal-400" />
              </a>
            </div>

            <p className="text-gray-400 text-sm">© 2025 John Doe. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  </div>
  );
}