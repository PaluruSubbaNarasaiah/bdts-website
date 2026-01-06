import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import Button from '../ui/Button';

const CallToAction: React.FC = () => {
  return (
    <Section className="bg-dark-900 py-24 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-30"></div>
        
        <motion.div
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-500 opacity-5 blur-3xl"
        ></motion.div>
        
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-accent-500 opacity-5 blur-3xl"
        ></motion.div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-heading font-bold mb-8"
        >
          Ready to Transform Your <span className="neon-text">Digital Future</span>?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
        >
          Partner with Basel Dynamics Tech and unlock the full potential of technology for your business. Our expert team is ready to craft the perfect solution for your unique challenges.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link to="/contact">
            <Button variant="primary" size="lg" className="group">
              <span>Get Started Today</span>
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
            </Button>
          </Link>
          
          <Link to="/services">
            <Button variant="outline" size="lg">
              Explore Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
};

export default CallToAction;