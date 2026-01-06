import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Layers, Zap, Shield, Globe, BarChart3 } from 'lucide-react';
import Card from '../ui/Card';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';

const features = [
  {
    icon: <Code size={48} />,
    title: 'Custom Software Development',
    description: 'Tailor-made software solutions designed to address your unique business challenges and operational requirements.',
  },
  {
    icon: <Layers size={48} />,
    title: 'Enterprise Applications',
    description: 'Robust, scalable applications that streamline processes, enhance productivity and drive business growth.',
  },
  {
    icon: <Zap size={48} />,
    title: 'AI & Machine Learning',
    description: 'Cutting-edge AI solutions that analyze data, derive insights, and automate decision-making processes.',
  },
  {
    icon: <Shield size={48} />,
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive security services to protect your digital assets against evolving cyber threats.',
  },
  {
    icon: <Globe size={48} />,
    title: 'Cloud Services',
    description: 'Seamless cloud migration, management, and optimization services for improved scalability and performance.',
  },
  {
    icon: <BarChart3 size={48} />,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights with our advanced analytics and visualization solutions.',
  },
];

const Features: React.FC = () => {
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

  return (
    <Section className={darkMode ? "bg-dark-800" : "bg-white"}>
      <SectionTitle
        title="Our Expertise"
        subtitle="Discover our comprehensive range of technological solutions designed to transform and elevate your business."
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)" 
            }}
          >
            <Card
              hover
              className={`h-full border ${
                darkMode ? 'border-gray-700 bg-bg-dark-600' : 'border-gray-200 bg-white'
              } transition-shadow duration-300 ease-in-out`}
            >
              <div className={darkMode ? "text-orange-400 mb-4" : "text-orange-500 mb-4"}>{feature.icon}</div>
              <h3 className={`text-xl font-heading font-semibold mb-3 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                {feature.title}
              </h3>
              <p className={darkMode ? "text-gray-300" : "text-gray-600"}>{feature.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Features;
