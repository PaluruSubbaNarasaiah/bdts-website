import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  // 🌙 Dark Mode State Management
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
    }
    return false;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleThemeChange = () => {
        const currentTheme = localStorage.getItem('theme');
        const shouldBeDark = currentTheme === 'dark';
        setDarkMode(shouldBeDark);
      };
      window.addEventListener('theme-changed', handleThemeChange);
      return () => window.removeEventListener('theme-changed', handleThemeChange);
    }
  }, []);

  // ✅ Benefits List
  const benefits = [
    'Advanced technological infrastructure',
    'Team of seasoned experts & specialists',
    'Innovative, future-ready solutions',
    'Dedicated 24/7 client support',
    'ISO certified secure development practices',
    'Proven track record of client success',
  ];

  return (
    <Section className={darkMode ? 'bg-dark-900' : 'bg-white'}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ✅ Image Section */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team collaboration" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-dark-800 p-4 rounded-lg shadow-lg border border-primary-500">
              <div className="text-4xl font-bold neon-text-gold">7+</div>
              <div className="text-gray-400">Years of Excellence</div>
            </div>
          </div>
        </motion.div>

        {/* ✅ Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className={`text-3xl md:text-4xl font-heading font-bold mb-6 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
            About <span className="neon-text">Basel Dynamics Tech</span>
          </h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
            At Basel Dynamics Tech, we are more than just a technology company. We are innovation partners committed to transforming businesses through cutting-edge technological solutions tailored to their specific needs.
          </p>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
            Our team of skilled professionals combines deep technological expertise with industry knowledge to deliver solutions that drive growth, efficiency, and competitive advantage for our clients worldwide.
          </p>

          {/* ✅ Benefits List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center hover:translate-x-1 transition-transform duration-300"
              >
                <CheckCircle2 
                  className={darkMode ? 'text-orange-400' : 'text-primary-500'} 
                  size={20} 
                />
                <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} ml-2`}>
                  {benefit}
                </span>
              </motion.div>
            ))}
          </div>

          {/* ✅ Button Link */}
          <Link to="/about">
            <Button 
              variant="outline" 
              className={`hover:bg-opacity-80 transition duration-300 ${darkMode ? 'text-orange-400 border-orange-400' : 'text-primary-500 border-primary-500'}`}
            >
              Learn More About Us
            </Button>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
