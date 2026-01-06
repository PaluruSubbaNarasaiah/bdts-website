import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, FileText, HelpCircle, Phone, Mail, Search, ChevronDown, ChevronUp, Send, X } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    question: 'How do I request a demo of your products?',
    answer: 'You can request a demo by visiting our Contact page and filling out the demo request form. Alternatively, you can email us at info@baseldtsolutions.com or call our sales team at +91 88865 56393.',
    category: 'General'
  },
  {
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary depending on the scope and complexity of the project. Typically, small to medium projects take 4-12 weeks, while larger enterprise solutions may take 3-6 months or more. We provide a detailed timeline during the initial consultation.',
    category: 'Services'
  },
  {
    question: 'Do you offer technical support for your products?',
    answer: 'Yes, we offer comprehensive technical support for all our products. We provide tiered support options including standard business hours support, extended hours support, and 24/7 premium support for critical systems.',
    category: 'Support'
  },
  {
    question: 'How do you ensure the security of your software solutions?',
    answer: 'We implement industry best practices for security throughout our development lifecycle. This includes regular security audits, penetration testing, secure coding practices, and staying up-to-date with the latest security patches and updates.',
    category: 'Security'
  },
  {
    question: 'Can your solutions integrate with our existing systems?',
    answer: 'Yes, our solutions are designed with interoperability in mind. We can integrate with most enterprise systems through APIs, webhooks, and other integration methods. During the requirements phase, we\'ll assess your existing systems and recommend the best integration approach.',
    category: 'Technical'
  },
  {
    question: 'What training do you provide for new implementations?',
    answer: 'We offer comprehensive training programs tailored to your team\'s needs. This includes user training, administrator training, and technical training for your IT staff. Training can be delivered in-person or remotely, and we provide detailed documentation for reference.',
    category: 'Services'
  },
  {
    question: 'What is your pricing model?',
    answer: 'Our pricing models vary depending on the product or service. We offer subscription-based pricing for our SaaS products, project-based pricing for custom development, and hourly rates for consulting services. Contact our sales team for a customized quote.',
    category: 'General'
  },
  {
    question: 'How do you handle data migration from legacy systems?',
    answer: 'We have extensive experience with data migration. Our process includes data assessment, cleaning, mapping, migration execution, and validation. We work closely with your team to ensure data integrity throughout the migration process.',
    category: 'Technical'
  }
];

const categories = ['All', 'General', 'Technical', 'Services', 'Support', 'Security'];

const SupportPage: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [showChat, setShowChat] = useState<boolean>(false);
  const [chatMessage, setChatMessage] = useState<string>('');
  const [chatMessages, setChatMessages] = useState<{text: string, isUser: boolean}[]>([]);
  const [showArticles, setShowArticles] = useState<boolean>(false);
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
    document.title = 'Support | Basel Dynamics Tech Solutions';
  }, []);

  const sendMessage = () => {
    if (chatMessage.trim()) {
      setChatMessages(prev => [...prev, { text: chatMessage, isUser: true }]);
      setChatMessage('');
      
      // Auto-reply after 1 second
      setTimeout(() => {
        setChatMessages(prev => [...prev, { 
          text: "Thank you for your message! Our support team will get back to you shortly. For immediate assistance, please call +91 88865 56393.", 
          isUser: false 
        }]);
      }, 1000);
    }
  };

  const toggleFaq = (question: string) => {
    if (expandedFaq === question) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(question);
    }
  };
  
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={`pt-20 ${darkMode ? 'bg-dark-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Hero Section */}
<Section className={`py-20 ${darkMode ? 'bg-dark-800 shadow-lg' : 'bg-white shadow-md'}`}>
  <div className="max-w-3xl mx-auto text-center">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`text-4xl md:text-5xl font-heading font-bold mb-6 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}
    >
      How Can We <span className={darkMode ? 'text-orange-400' : 'text-orange-500'}>Help</span> You?
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
    >
      Find answers to common questions or reach out to our support team for assistance.
    </motion.p>

   <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  className="relative max-w-2xl mx-auto mt-8"
>
  <input 
    type="text"
    placeholder="Search for answers..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className={`w-full border rounded-md py-4 px-12 text-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
      ${darkMode ? 'bg-dark-700 border-dark-500 text-gray-100' : 'bg-light-700 border-light-500 text-dark-900'}`}
  />
  <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} size={20} />
</motion.div>

  </div>
</Section>

      
      {/* FAQ Section */}
      <Section className={darkMode ? 'bg-dark-900' : 'bg-gray-50'}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl font-heading font-bold mb-8 text-center ${
            darkMode ? 'neon-text' : 'text-primary-600'
          }`}>
            Frequently Asked Questions
          </h2>
          
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full transition-all duration-300 ${
                                selectedCategory === category
                                    ? darkMode
                                        ? 'bg-orange-400 shadow-neon text-gray-900 '
                                        : 'bg-orange-500 text-white shadow-neon'
                                    : darkMode
                                        ? 'bg-dark-700  text-gray-300 hover:bg-gray-600'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
          
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div 
                    className={`rounded-lg overflow-hidden transition-all duration-300 ${
                      darkMode ? 'bg-dark-700' : 'bg-white border border-gray-200'
                    } ${expandedFaq === faq.question ? (darkMode ? 'shadow-neon' : 'shadow-lg') : ''}`}
                  >
                    <div 
                      className="p-5 flex justify-between items-center cursor-pointer"
                      onClick={() => toggleFaq(faq.question)}
                    >
                      <h3 className={`text-lg font-heading font-semibold pr-8 ${
                        darkMode ? 'text-gray-100' : 'text-gray-800'
                      }`}>{faq.question}</h3>
                      {expandedFaq === faq.question ? (
                        <ChevronUp className={`flex-shrink-0 ${
                          darkMode ? 'text-primary-500' : 'text-primary-600'
                        }`} size={20} />
                      ) : (
                        <ChevronDown className={`flex-shrink-0 ${
                          darkMode ? 'text-gray-400' : 'text-gray-500'
                        }`} size={20} />
                      )}
                    </div>
                    
                    {expandedFaq === faq.question && (
                      <div className={`px-5 pb-5 pt-0 ${
                        darkMode ? 'border-dark-600' : 'border-gray-200'
                      } border-t`}>
                        <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))
            ) : (
              <div className={`text-center py-8 ${
                darkMode ? 'bg-dark-800' : 'bg-white'
              } rounded-lg`}>
                <p className={`text-xl mb-4 ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>No results found</p>
                <p className={`mb-6 ${
                  darkMode ? 'text-gray-500' : 'text-gray-400'
                }`}>Try adjusting your search or browse all categories</p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Support Options */}
      <Section className={darkMode ? 'bg-dark-800' : 'bg-gray-100'}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <MessageSquare className={darkMode ? 'text-primary-500' : 'text-primary-600'} size={36} />,
              title: "Live Chat Support",
              description: "Chat with our support team for immediate assistance with your questions or issues.",
              buttonText: "Start Chat",
              action: () => setShowChat(true)
            },
            {
              icon: <FileText className={darkMode ? 'text-primary-500' : 'text-primary-600'} size={36} />,
              title: "Submit a Ticket",
              description: "Create a support ticket for more complex issues requiring detailed attention.",
              buttonText: "Create Ticket",
              action: () => window.open('mailto:support@baseldtsolutions.com?subject=Support Ticket&body=Please describe your issue in detail:', '_blank')
            },
            {
              icon: <HelpCircle className={darkMode ? 'text-primary-500' : 'text-primary-600'} size={36} />,
              title: "Knowledge Base",
              description: "Browse our comprehensive documentation, tutorials, and guides.",
              buttonText: "View Articles",
              action: () => setShowArticles(true)
            }
          ].map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card hover className={`h-full flex flex-col items-center text-center p-8 ${
                darkMode ? 'bg-dark-700' : 'bg-white'
              }`}>
                <div className={`p-6 rounded-full mb-6 ${
                  darkMode ? 'bg-primary-500/20' : 'bg-primary-100'
                }`}>
                  {option.icon}
                </div>
                <h3 className={`text-xl font-heading font-semibold mb-4 ${
                  darkMode ? 'text-gray-100' : 'text-gray-800'
                }`}>{option.title}</h3>
                <p className={`mb-6 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>{option.description}</p>
                <Button variant="outline" className="mt-auto" onClick={option.action}>
                  {option.buttonText}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Contact Info */}
      <Section className={darkMode ? 'bg-dark-900' : 'bg-gray-50'}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl font-heading font-bold mb-6 ${
            darkMode ? 'text-gray-100' : 'text-gray-800'
          }`}>
            Need More <span className={darkMode ? 'neon-text' : 'text-primary-600'}>Help</span>?
          </h2>
          <p className={`text-xl mb-12 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Our support team is available to assist you with any questions or issues.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Phone className={darkMode ? 'text-primary-500' : 'text-primary-600'} size={36} />,
                title: "Call Us",
                subtitle: "Technical Support",
                mainText: "+91 88865 56393",
                details: [
                  "Office Hours: Monday - Friday: 9:30 AM - 6:30 PM",
                  "Customer Support: 24/7",
                  "Saturday - Sunday: Office Closed"
                ]
              },
              {
                icon: <Mail className={darkMode ? 'text-primary-500' : 'text-primary-600'} size={36} />,
                title: "Email Us",
                subtitle: "Support Inquiries",
                mainText: "support@baseldtsolutions.com",
                details: [
                  "We typically respond to email inquiries within 24 hours during business days."
                ]
              }
            ].map((contact, index) => (
              <Card key={index} className={`p-8 text-center ${
                darkMode ? 'bg-dark-700' : 'bg-white'
              }`}>
                <div className={`p-6 rounded-full inline-flex mb-6 ${
                  darkMode ? 'bg-primary-500/20' : 'bg-primary-100'
                }`}>
                  {contact.icon}
                </div>
                <h3 className={`text-xl font-heading font-semibold mb-4 ${
                  darkMode ? 'text-gray-100' : 'text-gray-800'
                }`}>{contact.title}</h3>
                <p className={`mb-2 ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>{contact.subtitle}</p>
                <p className={`text-xl font-medium mb-6 ${
                  darkMode ? 'text-primary-400' : 'text-primary-600'
                }`}>{contact.mainText}</p>
                <div className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                  {contact.details.map((detail, i) => (
                    <p key={i}>{detail}</p>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>
      
      {/* Articles Modal */}
      {showArticles && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`w-full max-w-4xl h-5/6 rounded-lg shadow-xl ${darkMode ? 'bg-dark-700' : 'bg-white'}`}>
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-dark-600">
              <h2 className={`text-2xl font-heading font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Knowledge Base Articles</h2>
              <button onClick={() => setShowArticles(false)} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 h-full overflow-y-auto">
              <div className="grid gap-6">
                {[
                  {
                    title: "Getting Started with SIMS Applications",
                    category: "Tutorial",
                    content: "Learn how to set up and configure your SIMS application for optimal performance. This guide covers initial setup, user management, and basic configuration."
                  },
                  {
                    title: "System Requirements and Installation",
                    category: "Technical",
                    content: "Detailed system requirements for all SIMS products including hardware specifications, software dependencies, and installation procedures."
                  },
                  {
                    title: "User Management and Permissions",
                    category: "Administration",
                    content: "Complete guide to managing users, roles, and permissions across SIMS School, College, Degree, and Engineering applications."
                  },
                  {
                    title: "Data Backup and Recovery",
                    category: "Security",
                    content: "Best practices for backing up your data and recovery procedures in case of system failures or data loss."
                  },
                  {
                    title: "API Integration Guide",
                    category: "Development",
                    content: "Technical documentation for integrating SIMS applications with third-party systems using our REST API."
                  },
                  {
                    title: "Troubleshooting Common Issues",
                    category: "Support",
                    content: "Solutions to frequently encountered problems and step-by-step troubleshooting guides for common issues."
                  }
                ].map((article, index) => (
                  <div key={index} className={`p-4 rounded-lg border ${darkMode ? 'bg-dark-600 border-dark-500' : 'bg-gray-50 border-gray-200'}`}>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className={`text-lg font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{article.title}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${darkMode ? 'bg-orange-400 text-gray-900' : 'bg-orange-100 text-orange-600'}`}>
                        {article.category}
                      </span>
                    </div>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{article.content}</p>
                    <button className={`mt-3 text-sm font-medium ${darkMode ? 'text-orange-400 hover:text-orange-300' : 'text-orange-500 hover:text-orange-600'}`}>
                      Read More →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Chat Widget */}
      {showChat && (
        <div className="fixed bottom-4 right-4 w-80 h-96 bg-white dark:bg-dark-700 border border-gray-300 dark:border-dark-600 rounded-lg shadow-xl z-50">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-dark-600">
            <h3 className="font-semibold text-gray-800 dark:text-gray-100">Live Chat</h3>
            <button onClick={() => setShowChat(false)} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              <X size={20} />
            </button>
          </div>
          
          <div className="h-64 overflow-y-auto p-4 space-y-2">
            {chatMessages.length === 0 && (
              <div className="text-gray-500 dark:text-gray-400 text-sm">
                Hello! How can we help you today?
              </div>
            )}
            {chatMessages.map((msg, index) => (
              <div key={index} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs p-2 rounded-lg text-sm ${
                  msg.isUser 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-gray-200 dark:bg-dark-600 text-gray-800 dark:text-gray-200'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t border-gray-200 dark:border-dark-600">
            <div className="flex gap-2">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-dark-500 rounded-md text-sm bg-white dark:bg-dark-600 text-gray-800 dark:text-gray-200"
              />
              <button
                onClick={sendMessage}
                className="px-3 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportPage;