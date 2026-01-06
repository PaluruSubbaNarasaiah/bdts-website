import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, BarChart3, Globe, Lock, Cpu, Users } from 'lucide-react';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  image: string;
}

const services: Service[] = [
  {
    id: 'custom-software-development',
    title: 'Custom Software Development',
    description: 'Tailor-made software solutions designed to address your unique business challenges and operational requirements.',
    icon: <Code className="text-primary-500" size={48} />,
    features: [
      'Enterprise application development',
      'Web application development',
      'Mobile application development',
      'API development and integration',
      'Legacy system modernization'
    ],
    image: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics & BI Solutions',
    description: 'Transform raw data into actionable insights with our advanced analytics and visualization solutions.',
    icon: <BarChart3 className="text-primary-500" size={48} />,
    features: [
      'Business intelligence implementation',
      'Predictive analytics',
      'Data visualization dashboards',
      'Real-time analytics',
      'Data warehouse solutions'
    ],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    description: 'Seamless cloud migration, management, and optimization services for improved scalability and performance.',
    icon: <Globe className="text-primary-500" size={48} />,
    features: [
      'Cloud migration strategies',
      'Multi-cloud management',
      'Cloud-native application development',
      'Serverless architecture',
      'Cloud cost optimization'
    ],
    image: 'https://images.pexels.com/photos/5474282/pexels-photo-5474282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive security services to protect your digital assets against evolving cyber threats.',
    icon: <Lock className="text-primary-500" size={48} />,
    features: [
      'Security assessment and auditing',
      'Threat detection and response',
      'Security architecture design',
      'Compliance management',
      'Security training and awareness'
    ],
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Cutting-edge AI solutions that analyze data, derive insights, and automate decision-making processes.',
    icon: <Cpu className="text-primary-500" size={48} />,
    features: [
      'Machine learning model development',
      'Natural language processing',
      'Computer vision solutions',
      'Intelligent automation',
      'AI strategy consulting'
    ],
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'it-consulting',
    title: 'IT Consulting',
    description: 'Strategic technology consulting to help businesses leverage IT for growth, efficiency, and competitive advantage.',
    icon: <Users className="text-primary-500" size={48} />,
    features: [
      'Digital transformation strategy',
      'IT roadmap development',
      'Technology assessment',
      'Process optimization',
      'IT governance and compliance'
    ],
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const ServicesPage: React.FC = () => {
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
    document.title = 'Services | Basel Dynamics Tech Solutions';
  }, []);

  return (
    <div className={`pt-20 ${darkMode ? 'bg-dark-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
      {/* Hero Section */}
      <Section className={`py-20 shadow-md ${darkMode ? 'bg-dark-800' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-4xl md:text-5xl font-heading font-bold mb-6 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}
          >
            Our <span className={`${darkMode ? 'text-orange-400' : 'text-primary-500'}`}>Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
          >
            Comprehensive technology solutions designed to transform your business and drive innovation.
          </motion.p>
        </div>
      </Section>

      {/* Services Overview */}
      <Section className="py-16">
        <SectionTitle
          title="What We Offer"
          subtitle="Explore our range of specialized technology services tailored to meet your business needs."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card hover className={`h-full flex flex-col shadow-md ${darkMode ? 'bg-dark-700 border border-dark-600 hover:shadow-lg' : 'bg-white border border-gray-200 hover:shadow-md'}`}>
                <div className="h-56 rounded-t-lg overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className={`p-6 flex-grow ${darkMode ? 'bg-dark-700' : 'bg-white'}`}>
                  <div className={`mb-4 ${darkMode ? 'text-orange-400' : 'text-primary-500'}`}>{service.icon}</div>
                  <h3 className={`text-2xl font-heading font-semibold mb-3 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{service.title}</h3>
                  <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{service.description}</p>
                  <h4 className={`text-lg font-medium mb-3 ${darkMode ? 'text-orange-400' : 'text-primary-500'}`}>Key Features</h4>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className={`${darkMode ? 'text-orange-400' : 'text-primary-500'} mr-2 mt-1`}>•</span>
                        <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`p-6 pt-0 mt-auto rounded-b-lg `}>
                  <Link to={`/services/${service.id}`}>
                    <Button variant="outline" className={`w-full ${darkMode ? 'text-gray-300 border-gray-700 hover:bg-gray-700 hover:text-gray-100' : 'text-gray-600 border-gray-300 hover:bg-gray-300 hover:text-gray-800'}`}>
                      Learn More
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Our Approach */}
      <Section className={`py-16 ${darkMode ? 'bg-dark-800' : 'bg-gray-100'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className={`text-3xl md:text-4xl font-heading font-bold mb-6 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
              Our <span className={`${darkMode ? 'text-orange-400' : 'text-primary-500'}`}>Approach</span>
            </h2>
            <p className={`mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              At Basel Dynamics Tech, we follow a systematic and collaborative approach to ensure that our services deliver maximum value to your business. Our process is designed to be transparent, efficient, and focused on your specific needs.
            </p>

            <div className="space-y-6">
              {[
                {
                  number: '01',
                  title: 'Discovery & Analysis',
                  description: 'We begin by understanding your business objectives, challenges, and requirements through comprehensive discussions and analysis.'
                },
                {
                  number: '02',
                  title: 'Strategy & Planning',
                  description: 'We develop a tailored strategy and project plan that aligns with your goals and outlines the path to successful implementation.'
                },
                {
                  number: '03',
                  title: 'Implementation & Development',
                  description: 'Our expert team executes the plan using industry best practices, agile methodologies, and cutting-edge technologies.'
                },
                {
                  number: '04',
                  title: 'Testing & Quality Assurance',
                  description: 'We rigorously test all solutions to ensure they meet the highest standards of quality, security, and performance.'
                },
                {
                  number: '05',
                  title: 'Deployment & Support',
                  description: 'We ensure smooth deployment and provide ongoing support and maintenance to optimize performance and address any issues.'
                }
              ].map((step, index) => (
                <div key={index} className="flex">
                  <div className={`flex-shrink-0 h-12 w-12 rounded-full flex items-center justify-center mr-4 border ${darkMode ? 'bg-dark-700 border-orange-400 text-orange-400' : 'bg-gray-200 border-primary-500 text-primary-500'} font-heading font-bold`}>
                    {step.number}
                  </div>
                  <div>
                    <h3 className={`text-xl font-heading font-semibold mb-2 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{step.title}</h3>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Our Approach"
                className="object-cover w-full h-full"
              />
            </div>
            <div className={`absolute -top-6 -left-6 p-6 rounded-lg shadow-lg border ${darkMode ? 'bg-dark-700 border-orange-400' : 'bg-white border-primary-500'}`}>
              <div className={`text-5xl font-bold mb-2 ${darkMode ? 'text-orange-400' : 'text-primary-500'}`}>10+</div>
              <div className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Years of Excellence</div>
            </div>
            <div className={`absolute -bottom-6 -right-6 p-6 rounded-lg shadow-lg border ${darkMode ? 'bg-dark-700 border-orange-400' : 'bg-white border-primary-500'}`}>
              <div className={`text-5xl font-bold mb-2 ${darkMode ? 'text-orange-400' : 'text-primary-500'}`}>500+</div>
              <div className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Successful Projects</div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className={`py-20 ${darkMode ? 'bg-dark-800' : 'bg-gradient-to-r from-gray-200 to-gray-300'}`}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-heading font-bold mb-6 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
            Ready to <span className={`${darkMode ? 'text-orange-400' : 'text-primary-500'}`}>Transform</span> Your Business?
          </h2>
          <p className={`text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Let's discuss how our services can help you achieve your business goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button variant="primary" size="lg" className={`${darkMode ? 'bg-orange-500 hover:bg-orange-600' : ''}`}>
                Contact Us
              </Button>
            </Link>
            <Link to="/contact#demo">
              <Button 
                variant="outline" 
                size="lg" 
                className={`${darkMode ? 'text-gray-300 border-gray-700 hover:bg-gray-700 hover:text-gray-100' : ''}`}
              >
                Request a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ServicesPage;