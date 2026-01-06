import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, CheckCircle2, Users, Clock, Award, BarChart } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

interface Stat {
  value: string;
  label: string;
}

interface ProcessStep {
  title: string;
  description: string;
}

interface ServiceDetail {
  title: string;
  description: string;
  longDescription: string;
  process: ProcessStep[];
  benefits: string[];
  expertise: string[];
  technologies: string[];
  image: string;
  stats: Stat[];
}

// This would typically come from an API
const serviceDetails: { [key: string]: ServiceDetail } = {
  'custom-software-development': {
    title: 'Custom Software Development',
    description: 'We design and develop tailor-made software solutions that address your unique business challenges, streamline operations, and enhance productivity.',
    longDescription:
      'Our team of skilled developers creates custom software applications that perfectly align with your business processes and objectives. We combine cutting-edge technologies with proven methodologies to deliver robust, scalable, and secure solutions that give you a competitive edge.',
    process: [
      {
        title: 'Requirements Analysis',
        description: 'We work closely with you to understand your business needs, processes, and objectives to define the software requirements.',
      },
      {
        title: 'Design & Architecture',
        description: 'Our architects design the system architecture and user interfaces that will best meet your requirements.',
      },
      {
        title: 'Development',
        description: 'Using agile methodologies, we develop your software in iterative cycles, providing regular updates and gathering feedback.',
      },
      {
        title: 'Testing & QA',
        description: 'We perform rigorous testing to ensure your software is bug-free, secure, and meets all requirements.',
      },
      {
        title: 'Deployment',
        description: 'We deploy your software to your preferred environment, ensuring a smooth transition and minimal disruption.',
      },
      {
        title: 'Support & Maintenance',
        description: 'We provide ongoing support and maintenance to keep your software running smoothly and up-to-date.',
      },
    ],
    benefits: [
      'Tailored to your exact business requirements',
      'Improved operational efficiency and productivity',
      'Enhanced competitive advantage',
      'Greater flexibility and scalability',
      'Better user experience and adoption',
    ],
    expertise: [
      'Enterprise application development',
      'Web application development',
      'Mobile application development',
      'API development and integration',
      'Legacy system modernization',
      'Database design and development',
    ],
    technologies: [
      'Frontend: React, Angular, Vue.js',
      'Backend: Node.js, .NET, Java, Python',
      'Mobile: React Native, Flutter',
      'Databases: SQL, NoSQL, GraphQL',
      'Cloud: AWS, Azure, Google Cloud',
      'DevOps: CI/CD, Docker, Kubernetes',
    ],
    image: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stats: [
      { value: '500+', label: 'Projects Completed' },
      { value: '98%', label: 'Client Satisfaction' },
      { value: '15+', label: 'Years of Experience' },
      { value: '50+', label: 'Expert Developers' },
    ],
  },
  // Default service details for any non-matching ID
  'default': {
    title: 'Our Service',
    description: 'We provide comprehensive technology solutions designed to transform your business and drive innovation.',
    longDescription:
      'At Basel Dynamics Tech, we offer a wide range of technology services tailored to meet your specific business needs. Our team of experts combines deep technical expertise with industry knowledge to deliver solutions that drive growth, efficiency, and competitive advantage.',
    process: [
      {
        title: 'Discovery',
        description: 'We thoroughly assess your requirements and objectives to understand your unique challenges and opportunities.',
      },
      {
        title: 'Strategy',
        description: 'We develop a tailored strategy that aligns with your business goals and outlines the path to successful implementation.',
      },
      {
        title: 'Implementation',
        description: 'Our expert team executes the plan using industry best practices and cutting-edge technologies.',
      },
      {
        title: 'Optimization',
        description: 'We continuously monitor and optimize the solution to ensure it delivers maximum value to your business.',
      },
    ],
    benefits: [
      'Enhanced operational efficiency',
      'Improved decision-making through data-driven insights',
      'Increased agility and adaptability',
      'Reduced costs and resource requirements',
      'Strengthened competitive advantage',
    ],
    expertise: [
      'Digital transformation',
      'Technology strategy',
      'Process optimization',
      'Systems integration',
      'Innovation management',
    ],
    technologies: [
      'Cloud computing',
      'Artificial intelligence',
      'Machine learning',
      'Big data analytics',
      'Internet of Things (IoT)',
      'Blockchain',
    ],
    image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stats: [
      { value: '10+', label: 'Years of Excellence' },
      { value: '200+', label: 'Satisfied Clients' },
      { value: '95%', label: 'Client Retention' },
      { value: '24/7', label: 'Support' },
    ],
  },
};

const ServiceDetailPage: React.FC = () => {
  const { id } = useParams();
  const service = serviceDetails[id as keyof typeof serviceDetails] || serviceDetails.default;
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
    document.title = `${service.title} | Basel Dynamics Tech Solutions`;
    window.scrollTo(0, 0);
  }, [service.title]);

  return (
    <div className={`pt-20 ${darkMode ? 'bg-dark-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
      {/* Hero Section */}
      <Section className={`py-20 shadow-md ${darkMode ? 'bg-dark-800' : 'bg-white'}`}>
        <Link to="/services" className={`inline-flex items-center mb-6 ${darkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-600 hover:text-gray-800'}`}>
          <ChevronLeft className="mr-2" size={20} />
          Back to Services
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={`text-4xl md:text-5xl font-heading font-bold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
              {service.title}
            </h1>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              {service.description}
            </p>
            <div className="mb-8">
              <Link to="/contact">
                <Button variant="primary" size="lg" className="mr-4">
                  Request Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className={`${darkMode ? 'text-gray-300 border-gray-700 hover:bg-gray-700 hover:text-gray-100' : 'text-gray-600 border-gray-300 hover:bg-gray-300 hover:text-gray-800'}`}>
                  Get a Quote
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
                src={service.image}
                alt={service.title}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Overview Section */}
      <Section className={`py-16 ${darkMode ? 'bg-dark-900' : 'bg-white'} border-b ${darkMode ? 'border-dark-700' : 'border-gray-200'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl font-heading font-bold mb-6 ${darkMode ? 'text-orange-400' : 'text-primary-500'}`}>
            Overview
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-8 leading-relaxed`}>
            {service.longDescription}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {service.stats.map((stat, index) => (
              <Card key={index} className={`text-center p-6 shadow-md ${darkMode ? 'bg-dark-700 border border-dark-600' : 'bg-white'}`}>
                <div className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-orange-400' : 'text-primary-500'} mb-2`}>
                  {stat.value}
                </div>
                <div className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Our Process */}
      <Section className={`py-16 ${darkMode ? 'bg-dark-800' : 'bg-gray-100'} border-b ${darkMode ? 'border-dark-700' : 'border-gray-200'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl font-heading font-bold mb-10 ${darkMode ? 'text-orange-400' : 'text-primary-500'}`}>
            Our Process
          </h2>

          <div className="relative">
            {/* Process Timeline */}
            <div className={`absolute left-[19px] top-0 bottom-0 w-1 ${darkMode ? 'bg-orange-400' : 'bg-primary-500'} hidden md:block`}></div>

            <div className="space-y-12">
              {service.process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 mb-4 md:mb-0">
                      <div className="flex items-center">
                        <div className={`h-10 w-10 rounded-full flex items-center justify-center text-white font-bold z-10 border ${darkMode ? 'bg-dark-700 border-orange-400 text-orange-400' : 'bg-primary-500 border-primary-500'}`}>
                          {index + 1}
                        </div>
                        <div className={`hidden md:block h-1 flex-grow ml-4 ${darkMode ? 'bg-orange-400' : 'bg-primary-500'}`}></div>
                      </div>
                    </div>
                    <div className="md:w-3/4 md:pl-8">
                      <h3 className={`text-2xl font-heading font-semibold mb-3 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                        {step.title}
                      </h3>
                      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Benefits & Expertise */}
      <Section className={`py-16 ${darkMode ? 'bg-dark-900' : 'bg-white'} border-b ${darkMode ? 'border-dark-700' : 'border-gray-200'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className={`text-3xl font-heading font-bold mb-6 ${darkMode ? 'text-orange-400' : 'text-primary-500'}`}>
              Benefits
            </h2>
            <div className={`p-8 rounded-lg shadow-md ${darkMode ? 'bg-dark-700 border border-dark-600' : 'bg-white'}`}>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className={`${darkMode ? 'text-orange-400' : 'text-primary-500'} mt-1 mr-3 flex-shrink-0`} size={20} />
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className={`text-3xl font-heading font-bold mb-6 ${darkMode ? 'text-orange-400' : 'text-primary-500'}`}>
              Our Expertise
            </h2>
            <div className={`p-8 rounded-lg shadow-md ${darkMode ? 'bg-dark-700 border border-dark-600' : 'bg-white'}`}>
              <ul className="space-y-4">
                {service.expertise.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className={`${darkMode ? 'text-orange-400' : 'text-primary-500'} mr-3`}>•</span>
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className={`text-3xl font-heading font-bold mb-6 ${darkMode ? 'text-orange-400' : 'text-primary-500'}`}>
            Technologies We Use
          </h2>
          <div className={`p-8 rounded-lg shadow-md ${darkMode ? 'bg-dark-700 border border-dark-600' : 'bg-white'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.technologies.map((tech, index) => (
                <div key={index} className="flex items-start">
                  <span className={`${darkMode ? 'text-orange-400' : 'text-primary-500'} mr-3`}>•</span>
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className={`py-16 ${darkMode ? 'bg-dark-800' : 'bg-gray-100'} text-center`}>           
        <h2 className={`text-3xl font-heading font-bold mb-6 ${darkMode ? 'text-orange-400' : 'text-primary-500'}`}>
          Ready to Transform Your Business?
        </h2>
        <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-8`}>
          Contact us today to discuss how we can help you achieve your business goals with our custom software solutions.
        </p>
        <Link to="/contact">
          <Button variant="primary" size="lg">
            Get Started
          </Button>
        </Link>
      </Section>
    </div>
  );
}
export default ServiceDetailPage;