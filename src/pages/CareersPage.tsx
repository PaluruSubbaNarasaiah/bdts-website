import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase as BriefcaseBusiness, Clock, Upload, ChevronDown, ChevronUp, Users, Zap, Heart } from 'lucide-react';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
}

const jobPostings: JobPosting[] = [
  {
    id: 'sd-001',
    title: 'Senior Software Developer',
    department: 'Engineering',
    location: 'Bangalore, India',
    type: 'Full-time',
    description: 'We are looking for an experienced software developer to design, develop and implement software solutions for our clients. You will work with a team of talented developers to create high-quality applications.',
    requirements: [
      '5+ years of experience in software development',
      'Strong proficiency in JavaScript, TypeScript, and React',
      'Experience with Node.js and Express',
      'Knowledge of database systems (SQL, NoSQL)',
      'Understanding of software development methodologies',
      'Excellent problem-solving skills'
    ],
    responsibilities: [
      'Design and develop software solutions',
      'Write clean, maintainable, and efficient code',
      'Collaborate with cross-functional teams',
      'Perform code reviews and mentor junior developers',
      'Troubleshoot and debug applications',
      'Develop and implement new features'
    ],
    benefits: [
      'Competitive salary and bonus structure',
      'Comprehensive health, dental, and vision insurance',
      'Generous paid time off',
      'Professional development opportunities',
      'Modern office with collaborative spaces',
      'Regular team-building activities'
    ]
  },
  {
    id: 'da-001',
    title: 'Data Analyst',
    department: 'Data Science',
    location: 'Remote',
    type: 'Full-time',
    description: 'We are seeking a skilled Data Analyst to interpret data and turn it into information which can offer ways to improve our business, explore new business opportunities, and develop marketing strategies.',
    requirements: [
      '3+ years of experience in data analysis',
      'Proficiency in SQL and data manipulation',
      'Experience with data visualization tools',
      'Knowledge of statistical methods and data mining',
      'Excellent analytical and problem-solving skills',
      'Strong communication skills'
    ],
    responsibilities: [
      'Analyze data to identify patterns and trends',
      'Create and maintain dashboards and reports',
      'Collaborate with teams to gather requirements',
      'Develop and implement data analysis strategies',
      'Present findings to stakeholders',
      'Identify process improvements'
    ],
    benefits: [
      'Competitive salary and performance bonuses',
      'Comprehensive health insurance',
      'Flexible work schedule',
      'Home office stipend',
      'Regular virtual team events',
      'Continuous learning opportunities'
    ]
  },
  {
    id: 'ux-001',
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'Bangalore, India',
    type: 'Full-time',
    description: 'We are looking for a talented UX/UI Designer to create amazing user experiences. The ideal candidate should have an eye for clean and artful design, possess superior UI/UX skills, and be able to translate high-level requirements into interaction flows and artifacts.',
    requirements: [
      '3+ years of experience in UX/UI design',
      'Strong portfolio demonstrating design skills',
      'Proficiency in design tools like Figma, Sketch, Adobe XD',
      'Knowledge of UI/UX best practices',
      'Understanding of user research and usability principles',
      'Experience with responsive design'
    ],
    responsibilities: [
      'Create user-centered designs',
      'Develop wireframes and prototypes',
      'Conduct user research and testing',
      'Collaborate with developers to implement designs',
      'Create visual elements and design systems',
      'Ensure designs are accessible and inclusive'
    ],
    benefits: [
      'Competitive salary with performance bonuses',
      'Comprehensive benefits package',
      'Paid time off and holidays',
      'Creative work environment',
      'Professional development budget',
      'Regular team outings and events'
    ]
  }
];

const CareersPage: React.FC = () => {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
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
    document.title = 'Careers | Basel Dynamics Tech Solutions';
  }, []);

  const toggleJob = (id: string) => {
    if (expandedJob === id) {
      setExpandedJob(null);
    } else {
      setExpandedJob(id);
    }
  };

  return (
    <div className={`pt-20 ${darkMode ? 'bg-dark-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Hero Section */}
      <Section className={`py-20 shadow-sm ${darkMode ? 'bg-dark-800' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-4xl md:text-5xl font-heading font-bold mb-6 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}
          >
            Join Our <span className={darkMode ? 'text-orange-400' : 'text-primary-600'}>Team</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
          >
            Be part of our mission to create innovative technology solutions that transform businesses.
          </motion.p>
        </div>
      </Section>
      
      {/* Why Join Us */}
      <Section className={darkMode ? 'bg-dark-900' : 'bg-gray-50'}>
        <SectionTitle 
          title="Why Join Basel Dynamics Tech?" 
          subtitle="We offer a collaborative, innovative environment where you can grow your career while working on cutting-edge technologies."
          centered
          darkMode={darkMode}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Zap className={darkMode ? 'text-orange-400' : 'text-primary-600'} size={32} />,
              title: "Innovation",
              description: "Work on cutting-edge technologies and innovative solutions that are shaping the future of industries."
            },
            {
              icon: <Users className={darkMode ? 'text-orange-400' : 'text-primary-600'} size={32} />,
              title: "Collaboration",
              description: "Join a collaborative team environment where ideas are valued and diverse perspectives are encouraged."
            },
            {
              icon: <Heart className={darkMode ? 'text-orange-400' : 'text-primary-600'} size={32} />,
              title: "Growth",
              description: "Develop your skills and advance your career with our comprehensive professional development programs."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card hover className={`h-full text-center p-8 ${darkMode ? 'bg-dark-700 border-dark-600' : 'bg-white'}`}>
                <div className={`p-4 rounded-full inline-block mb-6 ${darkMode ? 'bg-dark-600' : 'bg-primary-100'}`}>
                  {item.icon}
                </div>
                <h3 className={`text-xl font-heading font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{item.title}</h3>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className={`text-3xl font-heading font-bold mb-6 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                Life at <span className={darkMode ? 'text-orange-400' : 'text-primary-600'}>Basel Dynamics Tech</span>
              </h2>
              <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Our team is driven by a passion for technology and a commitment to excellence. We foster a culture of innovation, collaboration, and continuous learning.
              </p>
              <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                We value diversity and inclusion, and we're committed to creating an environment where everyone can thrive. Our team members come from diverse backgrounds and bring unique perspectives to their work.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Work-Life Balance",
                    description: "We believe in the importance of balance and offer flexible work arrangements."
                  },
                  {
                    title: "Learning & Development",
                    description: "We invest in our employees' growth with training programs and education assistance."
                  },
                  {
                    title: "Community & Events",
                    description: "From hackathons to volunteer opportunities, we build community beyond work."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`h-6 w-6 rounded-full flex items-center justify-center font-bold text-sm mr-3 mt-1 ${darkMode ? 'bg-orange-400 text-dark-900' : 'bg-primary-600 text-white'}`}>
                      {index + 1}
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold mb-1 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{item.title}</h3>
                      <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden h-40 shadow-md">
                  <img 
                    src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Team collaboration" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden h-40 shadow-md">
                  <img 
                    src="https://images.pexels.com/photos/7551442/pexels-photo-7551442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Office space" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden h-56 shadow-md">
                  <img 
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Team working" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden h-24 shadow-md">
                  <img 
                    src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Team meeting" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Current Openings */}
      <Section className={darkMode ? 'bg-dark-800' : 'bg-white'}>
        <SectionTitle 
          title="Current Openings" 
          subtitle="Explore our current job opportunities and find your next career challenge."
          centered
          darkMode={darkMode}
        />
        
        <div className="max-w-4xl mx-auto space-y-6">
          {jobPostings.map((job) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className={`overflow-hidden transition-all duration-300 ${darkMode ? 'bg-dark-700 border-dark-600' : 'bg-white'} ${
                expandedJob === job.id ? 
                  (darkMode ? 'border-orange-400 shadow-lg' : 'border-primary-600 shadow-lg') : 
                  'shadow-md'
              }`}>
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => toggleJob(job.id)}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <h3 className={`text-2xl font-heading font-semibold mb-2 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className={`flex items-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          <BriefcaseBusiness size={16} className={`mr-1 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`} />
                          {job.department}
                        </div>
                        <div className={`flex items-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          <MapPin size={16} className={`mr-1 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`} />
                          {job.location}
                        </div>
                        <div className={`flex items-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          <Clock size={16} className={`mr-1 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`} />
                          {job.type}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 flex items-center">
                      <Button 
                        variant={expandedJob === job.id ? 'primary' : 'outline'} 
                        className="py-2"
                        darkMode={darkMode}
                      >
                        {expandedJob === job.id ? (
                          <>
                            <span>View Less</span>
                            <ChevronUp size={16} className="ml-1" />
                          </>
                        ) : (
                          <>
                            <span>View More</span>
                            <ChevronDown size={16} className="ml-1" />
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
                
                {expandedJob === job.id && (
                  <div className={`px-6 pb-6 pt-2 border-t ${darkMode ? 'border-dark-600' : 'border-gray-200'}`}>
                    <div className="mb-6">
                      <h4 className={`text-xl font-heading font-semibold mb-3 ${darkMode ? 'text-orange-400' : 'text-primary-600'}`}>Job Description</h4>
                      <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{job.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div>
                          <h4 className={`text-lg font-heading font-semibold mb-3 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Requirements</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, index) => (
                              <li key={index} className="flex items-start">
                                <span className={darkMode ? 'text-orange-400' : 'text-primary-600'}>•</span>
                                <span className={`ml-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className={`text-lg font-heading font-semibold mb-3 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Responsibilities</h4>
                          <ul className="space-y-2">
                            {job.responsibilities.map((resp, index) => (
                              <li key={index} className="flex items-start">
                                <span className={darkMode ? 'text-orange-400' : 'text-primary-600'}>•</span>
                                <span className={`ml-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h4 className={`text-lg font-heading font-semibold mb-3 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Benefits</h4>
                        <ul className="space-y-2">
                          {job.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <span className={darkMode ? 'text-orange-400' : 'text-primary-600'}>•</span>
                              <span className={`ml-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button variant="primary" className="sm:flex-1" darkMode={darkMode}>
                        Apply Now
                      </Button>
                      <Button variant="outline" className="sm:flex-1" darkMode={darkMode}>
                        <Upload size={16} className="mr-2" />
                        Upload Resume
                      </Button>
                    </div>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Application Process */}
      <Section className={darkMode ? 'bg-dark-900' : 'bg-gray-50'}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl font-heading font-bold mb-10 text-center ${darkMode ? 'text-orange-400' : 'text-primary-600'}`}>
            Our Application Process
          </h2>
          
          <div className="relative">
            <div className={`absolute left-[19px] top-0 bottom-0 w-1 hidden md:block ${darkMode ? 'bg-orange-400' : 'bg-primary-600'}`}></div>
            
            <div className="space-y-12">
              {[
                {
                  title: "Application Submission",
                  description: "Submit your application through our careers page. Include your resume and a cover letter explaining why you're interested in the position and how your skills match our requirements."
                },
                {
                  title: "Initial Screening",
                  description: "Our recruitment team will review your application and reach out to schedule an initial phone or video interview if your qualifications match our requirements."
                },
                {
                  title: "Technical Assessment",
                  description: "Depending on the role, you may be asked to complete a technical assessment or case study to demonstrate your skills and problem-solving abilities."
                },
                {
                  title: "Team Interviews",
                  description: "You'll meet with potential team members and managers through a series of interviews to assess your technical skills, experience, and cultural fit."
                },
                {
                  title: "Offer & Onboarding",
                  description: "If selected, you'll receive a job offer with details about compensation, benefits, and start date. Upon acceptance, our HR team will guide you through the onboarding process."
                }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 mb-4 md:mb-0">
                      <div className="flex items-center">
                        <div className={`h-10 w-10 rounded-full text-white flex items-center justify-center font-bold z-10 ${
                          darkMode ? 'bg-orange-400 text-dark-900' : 'bg-primary-600'
                        }`}>
                          {index + 1}
                        </div>
                        <div className={`hidden md:block h-1 flex-grow ml-4 ${darkMode ? 'bg-orange-400' : 'bg-primary-600'}`}></div>
                      </div>
                    </div>
                    <div className="md:w-3/4 md:pl-8">
                      <h3 className={`text-2xl font-heading font-semibold mb-3 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                        {step.title}
                      </h3>
                      <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
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
      
      {/* CTA Section */}
      <Section className={`${darkMode ? 'bg-dark-800 border-dark-700' : 'bg-white border-gray-200'} border-t`}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`text-3xl font-heading font-bold mb-6 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
            Don't See the Right Fit? <span className={darkMode ? 'text-orange-400' : 'text-primary-600'}>Get in Touch</span>
          </h2>
          <p className={`text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Button variant="primary" size="lg" darkMode={darkMode}>
            <Upload size={16} className="mr-2" />
            Submit Your Resume
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default CareersPage;