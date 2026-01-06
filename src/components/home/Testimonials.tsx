  import React, { useState, useEffect } from 'react';
  import { motion, AnimatePresence } from 'framer-motion';
  import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
  import Section from '../ui/Section';
  import SectionTitle from '../ui/SectionTitle';

  const testimonials = [
    {
      quote: "Basel Dynamics Tech's software solutions have completely transformed our business operations. The custom CRM they developed has increased our sales efficiency by 45%.",
      author: "Sarah Johnson",
      position: "CEO, TechVenture Inc.",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "The cybersecurity infrastructure implemented by Basel Dynamics Tech has provided us with peace of mind. Their proactive approach to security has prevented numerous potential breaches.",
      author: "Michael Chen",
      position: "CTO, Global Secure Systems",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "Working with Basel Dynamics Tech has been a game-changer for our data analytics capabilities. Their AI solutions have helped us uncover insights we never thought possible.",
      author: "Priya Sharma",
      position: "Data Director, AnalyticsFirst",
      image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Dark Mode Handling
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

    const goToPrevious = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    return (
      <Section className={darkMode ? 'bg-dark-800 relative overflow-hidden' : 'bg-white relative overflow-hidden'}>
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-500 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500 rounded-full opacity-10 translate-x-1/2 translate-y-1/2"></div>

        <SectionTitle 
          title="Client Success Stories" 
          subtitle="Hear from our clients about how Basel Dynamics Tech solutions have transformed their businesses."
          centered
        />

        <div className="max-w-5xl mx-auto relative">
          
          {/* Navigation buttons */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
            <button 
              onClick={goToPrevious}
              className="bg-dark-700 hover:bg-dark-600 p-3 rounded-full text-gray-400 hover:text-white transition duration-300"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
            <button 
              onClick={goToNext}
              className="bg-dark-700 hover:bg-dark-600 p-3 rounded-full text-gray-400 hover:text-white transition duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Testimonial Content */}
          <div className="py-10 px-16 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center gap-8"
              >
                {/* Image with Hover Animation */}
                <div className="md:w-1/3">
                  <motion.div 
                    whileHover={{ scale: 1.05 }} 
                    className="relative w-64 h-64 mx-auto overflow-hidden rounded-full border-2 border-primary-500"
                  >
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].author}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>

                {/* Text Content */}
                <div className="md:w-2/3 text-center md:text-left">
                  <Quote className={`${darkMode ? 'text-orange-400' : 'text-primary-500'} opacity-50 mb-4`} size={48} />
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-xl mb-6 italic`}>
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <h4 className={`font-heading text-xl font-bold ${darkMode ? 'text-orange-400' : 'neon-text'}`}>
                    {testimonials[currentIndex].author}
                  </h4>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                    {testimonials[currentIndex].position}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-primary-500' : 'bg-dark-600'
                } hover:scale-110 transition duration-300`}
              />
            ))}
          </div>
        </div>
      </Section>
    );
  };

  export default Testimonials;
