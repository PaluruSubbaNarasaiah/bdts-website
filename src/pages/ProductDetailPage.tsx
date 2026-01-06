import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ExternalLink, ChevronLeft } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

// This would typically come from an API
const productDetails = {
  'data-analyzer-pro': {
    name: 'Data Analyzer Pro',
    tagline: 'Transform raw data into actionable insights',
    description: 'Data Analyzer Pro is a comprehensive analytics platform designed to help businesses make data-driven decisions. With intuitive dashboards, advanced visualization tools, and powerful AI-driven analytics capabilities, it transforms complex data into clear, actionable insights.',
    features: [
      'Real-time data processing and analysis',
      'Customizable dashboards and reporting',
      'AI-powered predictive analytics',
      'Integration with multiple data sources',
      'Automated report generation',
      'Role-based access control'
    ],
    benefits: [
      'Make data-driven decisions with confidence',
      'Identify trends and patterns before your competitors',
      'Improve operational efficiency',
      'Reduce time spent on manual data analysis',
      'Scale your analytics as your business grows'
    ],
    useCases: [
      'Marketing campaign performance analysis',
      'Financial forecasting and planning',
      'Customer behavior analysis',
      'Supply chain optimization',
      'Sales performance tracking'
    ],
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    techSpecs: [
      'Cloud-based SaaS solution',
      'RESTful API for custom integrations',
      'GDPR compliant data handling',
      'Advanced encryption for data security',
      'Scalable architecture for organizations of all sizes'
    ]
  },
  'secure-vault': {
    name: 'SecureVault',
    tagline: 'Enterprise-grade security for your digital assets',
    description: 'SecureVault provides comprehensive security solutions for businesses of all sizes. With advanced threat detection, encryption, and access control features, it protects your most valuable digital assets from both external threats and internal vulnerabilities.',
    features: [
      'Advanced threat detection and prevention',
      'End-to-end encryption for all data',
      'Multi-factor authentication',
      'Real-time security monitoring',
      'Automated security updates',
      'Compliance management tools'
    ],
    benefits: [
      'Protect sensitive business and customer data',
      'Maintain compliance with industry regulations',
      'Prevent costly data breaches and security incidents',
      'Build customer trust with robust security measures',
      'Simplify security management across your organization'
    ],
    useCases: [
      'Financial services security compliance',
      'Healthcare data protection',
      'Intellectual property safeguarding',
      'Customer data protection',
      'Remote work security'
    ],
    image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    techSpecs: [
      'On-premise or cloud deployment options',
      'Integration with existing security infrastructure',
      'AI-powered threat intelligence',
      'Automated incident response',
      'Comprehensive audit logging and reporting'
    ]
  },
  // Additional products would be defined here
  'default': {
    name: 'Product Details',
    tagline: 'Innovative solutions for modern challenges',
    description: 'Explore our comprehensive product offerings designed to transform your business operations and drive growth. Each product is built with cutting-edge technology and designed for seamless integration with your existing systems.',
    features: [
      'Intuitive user interface',
      'Scalable architecture',
      'Enterprise-grade security',
      'Comprehensive documentation and support',
      'Regular updates and enhancements',
      'Flexible deployment options'
    ],
    benefits: [
      'Improve operational efficiency',
      'Reduce costs and resource requirements',
      'Enhance data security and compliance',
      'Gain competitive advantage',
      'Future-proof your business operations'
    ],
    useCases: [
      'Business process optimization',
      'Digital transformation initiatives',
      'Legacy system modernization',
      'Cross-department collaboration',
      'Data-driven decision making'
    ],
    image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    techSpecs: [
      'Cloud-native architecture',
      'API-first design for easy integration',
      'Containerized deployment options',
      'Horizontal scaling capabilities',
      'Comprehensive security features'
    ]
  }
};

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const product = productDetails[id as keyof typeof productDetails] || productDetails.default;
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

  useEffect(() => {
    document.title = `${product.name} | Basel Dynamics Tech Solutions`;
    window.scrollTo(0, 0);
  }, [product.name]);

  return (
    <div className={`pt-20 ${darkMode ? 'bg-dark-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
      {/* Hero Section */}
      <Section className={`py-16 shadow-md ${darkMode ? 'bg-dark-800' : 'bg-white'}`}>
        <Link to="/products" className={`inline-flex items-center hover:text-primary-500 mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          <ChevronLeft size={20} className="mr-1" />
          <span>Back to Products</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={`text-4xl md:text-5xl font-heading font-bold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
              {product.name}
            </h1>
            <p className={`text-2xl mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {product.tagline}
            </p>
            <div className="mb-8">
              <Link to="/contact#demo">
                <Button variant="primary" size="lg" className="mr-4">
                  Request Demo
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className={darkMode ? 'text-gray-300 border-gray-700 hover:bg-gray-700 hover:text-gray-100' : 'text-gray-600 border-gray-300 hover:bg-gray-300 hover:text-gray-800'}>
                  Get Pricing
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Product Description */}
      <Section className="py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl font-heading font-bold mb-6 ${darkMode ? 'text-orange-400' : 'text-primary-500'}`}>
            Overview
          </h2>
          <p className={`text-xl mb-12 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {product.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className={`text-2xl font-heading font-semibold mb-6 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                Key Features
              </h3>
              <ul className="space-y-4">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex">
                    <CheckCircle2 className={`mt-1 mr-3 flex-shrink-0 ${darkMode ? 'text-orange-400' : 'text-primary-500'}`} size={20} />
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className={`text-2xl font-heading font-semibold mb-6 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                Benefits
              </h3>
              <ul className="space-y-4">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex">
                    <CheckCircle2 className={`mt-1 mr-3 flex-shrink-0 ${darkMode ? 'text-orange-400' : 'text-primary-500'}`} size={20} />
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Use Cases */}
      <Section className={`py-16 ${darkMode ? 'bg-dark-800' : 'bg-gray-100'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl font-heading font-bold mb-10 ${darkMode ? 'text-orange-400' : 'text-primary-500'}`}>
            Use Cases
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.useCases.map((useCase, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-md border ${darkMode ? 'bg-dark-700 border-dark-700 hover:border-orange-400' : 'bg-white border-gray-200 hover:border-primary-500'} transition-colors duration-300`}
              >
                <h3 className={`text-xl font-heading font-semibold mb-3 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                  Use Case {index + 1}
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Technical Specifications */}
      <Section className="py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl font-heading font-bold mb-10 ${darkMode ? 'text-orange-400' : 'text-primary-500'}`}>
            Technical Specifications
          </h2>

          <div className={`rounded-lg p-8 shadow-md border ${darkMode ? 'bg-dark-700 border-dark-700' : 'bg-white border-gray-200'}`}>
            <ul className="space-y-4">
              {product.techSpecs.map((spec, index) => (
                <li key={index} className="flex">
                  <span className={`${darkMode ? 'text-orange-400' : 'text-primary-500'} mr-3`}>•</span>
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className={`py-16 border-t ${darkMode ? 'bg-dark-800 border-dark-700' : 'bg-gray-200 border-gray-300'}`}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`text-3xl font-heading font-bold mb-6 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
            Ready to Get Started with <span className={`${darkMode ? 'text-orange-400' : 'text-primary-500'}`}>{product.name}</span>?
          </h2>
          <p className={`text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Contact our team to schedule a personalized demo and discuss your specific requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact#demo">
              <Button variant="primary" size="lg">
                Request Demo
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className={darkMode ? 'text-gray-300 border-gray-700 hover:bg-gray-700 hover:text-gray-100' : 'text-gray-600 border-gray-300 hover:bg-gray-300 hover:text-gray-800'}>
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ProductDetailPage;