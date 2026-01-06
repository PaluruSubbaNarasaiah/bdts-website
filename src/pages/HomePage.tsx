import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import About from '../components/home/About';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Basel Dynamics Tech Solutions | IT Built to Perfection';
  }, []);

  return (
    <div>
      <Hero />
      <Features />
      <About />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default HomePage;