import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, X, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import ThreeJSHero from './ThreeJSHero';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [demoForm, setDemoForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    message: ''
  });
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
  });

  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('access_key', 'da3d0f25-8051-46a6-9645-b7442c0c75a1');
    formData.append('subject', 'Demo Request from ' + demoForm.name);
    formData.append('from_name', demoForm.name);
    formData.append('email', demoForm.email);
    formData.append('company', demoForm.company);
    formData.append('phone', demoForm.phone);
    formData.append('product', demoForm.product);
    formData.append('message', demoForm.message);
    formData.append('to', 'info@baseldtsolutions.com');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        alert('Demo request submitted successfully!');
        setShowDemoForm(false);
        setDemoForm({ name: '', email: '', company: '', phone: '', product: '', message: '' });
      }
    } catch (error) {
      alert('Error submitting demo request. Please try again.');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleThemeChange = () => {
      const currentTheme = localStorage.getItem('theme');
      const shouldBeDark = currentTheme === 'dark';
      if (shouldBeDark !== darkMode) {
        setDarkMode(shouldBeDark);
      }
    };

    window.addEventListener('theme-changed', handleThemeChange);

    return () => {
      window.removeEventListener('theme-changed', handleThemeChange);
    };
  }, [darkMode]);

  return (
    <div className={`relative min-h-screen flex items-center overflow-hidden ${darkMode ? 'bg-dark' : 'bg-white'}`}>
      <div className="absolute inset-0 z-0 lg:block">
        <ThreeJSHero />
      </div>

      {/* Conditional Content Rendering */}
      {darkMode ? (
        <div className="container-custom relative z-10 pt-12 lg:pt-20">
          <div className="grid grid-cols-1 gap-8 items-center">
            <motion.div
              className="order-1 lg:order-none text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading leading-tight mb-6">
                <span className="neon-text text-4xl">Future-Ready</span> <br />
                
                <span>Basel Dynamic </span><br />
                <span>Tech Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
                Custom IT services and software applications engineered to perfection. Transforming ideas into reality.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button variant="primary" size="lg" onClick={() => setShowDemoForm(true)}>
                  Request Demo
                </Button>
                <Link to="/services">
                  <Button variant="outline" size="lg">
                    Explore Solutions
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="lg:hidden mt-12 h-64 flex items-center justify-center order-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            ></motion.div>
          </div>
        </div>
      ) : (
        <div className="container-custom relative z-10 pt-12 lg:pt-20">
          <div className="grid grid-cols-1 gap-8 items-center">
            <motion.div
              className="order-1 lg:order-none text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading leading-tight mb-6 text-gray-900 dark:text-gray-100">
                <span className="neon-text text-4xl">Future-Ready</span> <br />
                <span>Basel Dynamic </span><br />
                <span>Tech Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
                Custom IT services and software applications engineered to perfection. Transforming ideas into reality.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button variant="primary" size="lg" className="bg-orange-500 hover:bg-orange-600 text-white" onClick={() => setShowDemoForm(true)}>
                  Request Demo
                </Button>
                <Link to="/services">
                  <Button variant="outline" size="lg" className="text-orange-500 hover:bg-orange-50 dark:text-orange-500 dark:hover:bg-orange-900">
                    Explore Solutions
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="lg:hidden mt-12 h-64 flex items-center justify-center order-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            ></motion.div>
          </div>
        </div>
      )}

      {/* Demo Request Form Modal */}
      {showDemoForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`w-full max-w-md rounded-lg shadow-xl ${darkMode ? 'bg-dark-700' : 'bg-white'}`}>
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-dark-600">
              <h2 className={`text-xl font-heading font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Request Demo</h2>
              <button onClick={() => setShowDemoForm(false)} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleDemoSubmit} className="p-6 space-y-4">
              <input
                type="text"
                placeholder="Full Name *"
                required
                value={demoForm.name}
                onChange={(e) => setDemoForm({...demoForm, name: e.target.value})}
                className={`w-full px-3 py-2 border rounded-md ${darkMode ? 'bg-dark-600 border-dark-500 text-gray-200' : 'bg-white border-gray-300 text-gray-800'}`}
              />
              <input
                type="email"
                placeholder="Email Address *"
                required
                value={demoForm.email}
                onChange={(e) => setDemoForm({...demoForm, email: e.target.value})}
                className={`w-full px-3 py-2 border rounded-md ${darkMode ? 'bg-dark-600 border-dark-500 text-gray-200' : 'bg-white border-gray-300 text-gray-800'}`}
              />
              <input
                type="text"
                placeholder="Company Name"
                value={demoForm.company}
                onChange={(e) => setDemoForm({...demoForm, company: e.target.value})}
                className={`w-full px-3 py-2 border rounded-md ${darkMode ? 'bg-dark-600 border-dark-500 text-gray-200' : 'bg-white border-gray-300 text-gray-800'}`}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={demoForm.phone}
                onChange={(e) => setDemoForm({...demoForm, phone: e.target.value})}
                className={`w-full px-3 py-2 border rounded-md ${darkMode ? 'bg-dark-600 border-dark-500 text-gray-200' : 'bg-white border-gray-300 text-gray-800'}`}
              />
              <select
                value={demoForm.product}
                onChange={(e) => setDemoForm({...demoForm, product: e.target.value})}
                className={`w-full px-3 py-2 border rounded-md ${darkMode ? 'bg-dark-600 border-dark-500 text-gray-200' : 'bg-white border-gray-300 text-gray-800'}`}
              >
                <option value="">Select Product</option>
                <option value="SIMS School">SIMS School</option>
                <option value="SIMS College">SIMS College</option>
                <option value="SIMS Degree">SIMS Degree</option>
                <option value="SIMS Engineering">SIMS Engineering</option>
                <option value="Custom Solution">Custom Solution</option>
              </select>
              <textarea
                placeholder="Additional Message"
                rows={3}
                value={demoForm.message}
                onChange={(e) => setDemoForm({...demoForm, message: e.target.value})}
                className={`w-full px-3 py-2 border rounded-md ${darkMode ? 'bg-dark-600 border-dark-500 text-gray-200' : 'bg-white border-gray-300 text-gray-800'}`}
              ></textarea>
              <Button type="submit" variant="primary" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                <Send size={16} className="mr-2" />
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Scroll indicator (remains the same) */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer ${
          darkMode ? 'text-gray-500' : 'text-gray-400'
        }`}
        style={{ opacity: 1 - scrollY / 350 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={24} className={darkMode ? "text-orange-400" : "text-orange-500"} />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;