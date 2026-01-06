import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const ContactPage: React.FC = () => {
  const [result, setResult] = useState('');
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
    }
    return false;
  });

  useEffect(() => {
    document.title = 'Contact Us | Basel Dynamics Tech Solutions';
  }, []);

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

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.currentTarget);

    formData.append('access_key', 'da3d0f25-8051-46a6-9645-b7442c0c75a1');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      (event.target as HTMLFormElement).reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  return (
    <div className={`pt-20 ${darkMode ? 'bg-dark-900 text-gray-100' : 'bg-gray-100 text-gray-800'}`}>
      {/* Hero Section */}
      <Section className={`py-20 ${darkMode ? 'bg-dark-800 shadow-lg' : 'bg-white shadow-md'}`}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-4xl md:text-5xl font-heading font-bold mb-6 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}
          >
            Let's <span className={darkMode ? 'text-orange-400' : 'text-orange-500'}>Connect</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
          >
            Have questions or ready to start your next project? Reach out to our team and we'll get back to you promptly.
          </motion.p>
        </div>
      </Section>

      {/* Contact Information */}
      <Section className={`py-12 ${darkMode ? 'bg-dark-900' : 'bg-gray-100'}`}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            whileHover={{ y: -5 }}
          >
<Card
  hover
  className={`h-full flex flex-col items-center text-center p-8 transition-all duration-300 ${
    darkMode 
      ? 'bg-dark-700 border-dark-600 hover:border-transparent hover:shadow-[0px_0px_15px_5px_rgba(255,165,0,0.8)]' 
      : 'bg-white border-gray-200 hover:border-transparent hover:shadow-[0px_0px_15px_5px_rgba(255,165,0,0.8)]'
  }`}
>
  <div className={`p-4 rounded-full mb-6 transition-colors ${
    darkMode ? 'bg-dark-600' : 'bg-gray-200'
  }`}>
    <Phone className={darkMode ? "text-orange-400" : "text-orange-500"} size={32} />
  </div>
  <h3 className={`text-xl font-heading font-semibold mb-4 ${
    darkMode ? 'text-gray-100' : 'text-gray-900'
  }`}>
    Call Us
  </h3>
  <p className={`mb-4 ${
    darkMode ? 'text-gray-400' : 'text-gray-600'
  }`}>
    We're available Mon-Fri, 9:30 AM - 6:30 PM
  </p>
  <p className={`font-semibold ${
    darkMode ? 'text-gray-100' : 'text-gray-800'
  }`}>
    +91 88865 56393
  </p>
</Card>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <Card hover   className={`h-full flex flex-col items-center text-center p-8 transition-all duration-300 ${
    darkMode 
      ? 'bg-dark-700 border-dark-600 hover:border-transparent hover:shadow-[0px_0px_15px_5px_rgba(255,165,0,0.8)]' 
      : 'bg-white border-gray-200 hover:border-transparent hover:shadow-[0px_0px_15px_5px_rgba(255,165,0,0.8)]'
  }`}>
              <div className={`p-4 rounded-full mb-6 transition-colors ${
                darkMode ? 'bg-dark-600' : 'bg-gray-200'
              }`}>
                <Mail className={darkMode ? "text-orange-400" : "text-orange-500"} size={32} />
              </div>
              <h3 className={`text-xl font-heading font-semibold mb-4 ${
                darkMode ? 'text-gray-100' : 'text-gray-900'
              }`}>Email Us</h3>
              <p className={`mb-4 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>We typically respond within 24 hours</p>
              <p className={`font-semibold ${
                darkMode ? 'text-gray-100' : 'text-gray-800'
              }`}>info@baseldtsolutions.com</p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
            <Card hover   className={`h-full flex flex-col items-center text-center p-8 transition-all duration-300 ${
    darkMode 
      ? 'bg-dark-700 border-dark-600 hover:border-transparent hover:shadow-[0px_0px_15px_5px_rgba(255,165,0,0.8)]' 
      : 'bg-white border-gray-200 hover:border-transparent hover:shadow-[0px_0px_15px_5px_rgba(255,165,0,0.8)]'
  }`}>
              <div className={`p-4 rounded-full mb-6 transition-colors ${
                darkMode ? 'bg-dark-600' : 'bg-gray-200'
              }`}>
                <MapPin className={darkMode ? "text-orange-400" : "text-orange-500"} size={32} />
              </div>
              <h3 className={`text-xl font-heading font-semibold mb-4 ${
                darkMode ? 'text-gray-100' : 'text-gray-900'
              }`}>Headquarters</h3>
              <p className={`mb-4 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>Our main office</p>
              <p className={`font-semibold text-sm ${
                darkMode ? 'text-gray-100' : 'text-gray-800'
              }`}>6th Floor, Suite No: 10, Gamma Block, Sigma Soft Tech Park</p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <Card hover   className={`h-full flex flex-col items-center text-center p-8 transition-all duration-300 ${
    darkMode 
      ? 'bg-dark-700 border-dark-600 hover:border-transparent hover:shadow-[0px_0px_15px_5px_rgba(255,165,0,0.8)]' 
      : 'bg-white border-gray-200 hover:border-transparent hover:shadow-[0px_0px_15px_5px_rgba(255,165,0,0.8)]'
  }`}>
              <div className={`p-4 rounded-full mb-6 transition-colors ${
                darkMode ? 'bg-dark-600' : 'bg-gray-200'
              }`}>
                <MapPin className={darkMode ? "text-orange-400" : "text-orange-500"} size={32} />
              </div>
              <h3 className={`text-xl font-heading font-semibold mb-4 ${
                darkMode ? 'text-gray-100' : 'text-gray-900'
              }`}>Branch Office</h3>
              <p className={`mb-4 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>Our branch location</p>
              <p className={`font-semibold text-sm ${
                darkMode ? 'text-gray-100' : 'text-gray-800'
              }`}>23-8-161/2, Second Floor, MR Palli Rd, above Sri Hari Medical store, SV Nagar, New Balaji Colony, Tirupati, Andhra Pradesh - 517501</p>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Contact Form */}
      <Section className={`py-16 ${darkMode ? 'bg-dark-800' : 'bg-gray-100'}`} id="demo">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionTitle title="Send Us a Message" />
            <p className={`mb-8 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Fill out the form below and our team will get back to you as soon as possible. We're eager to hear about your project and how we can help bring your vision to life.
            </p>

            <div className={`p-6 rounded-lg mb-8 ${
              darkMode ? 'bg-dark-700 shadow-lg' : 'bg-white shadow-md'
            }`}>
              <h3 className={`text-xl font-heading font-semibold mb-4 ${
                darkMode ? 'text-orange-400' : 'text-orange-500'
              }`}>Office Hours</h3>
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className={`py-2 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>Monday - Friday:</td>
                    <td className={`py-2 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>9:30 AM - 6:30 PM</td>
                  </tr>
                  <tr>
                    <td className={`py-2 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>Saturday - Sunday</td>
                    <td className={`py-2 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>Closed</td>
                  </tr>
                  <tr>
                    <td className={`py-2 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>Customer Support:</td>
                    <td className={`py-2 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>24/7</td>
                  </tr>
                  <tr>
                    <td className={`py-2 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>Today</td>
                    <td className="py-2">
                      {(() => {
                        const now = new Date();
                        const day = now.getDay();
                        const hours = now.getHours();
                        const minutes = now.getMinutes();
                        
                        if (day === 0 || day === 6) {
                          return <span className="text-red-400">Closed</span>;
                        }
                        
                        const isOpen = (hours > 9 || (hours === 9 && minutes >= 30)) && 
                                      (hours < 18 || (hours === 18 && minutes <= 30));
                        
                        return isOpen 
                          ? <span className="text-green-400">Open - Closes at 6:30 PM</span>
                          : <span className="text-red-400">Closed - Opens at 9:30 AM</span>;
                      })()}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className={`text-xl font-heading font-semibold mb-4 ${darkMode ? 'text-orange-400' : 'text-orange-500'}`}>Headquarters Location</h3>
                <div className={`w-full h-80 rounded-lg overflow-hidden ${darkMode ? 'bg-dark-700 shadow-lg' : 'bg-gray-200 shadow-md'}`}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.732221144487!2d77.73833591027343!3d12.955817087305356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1302aa8f3afd%3A0x12e5e8f11df20e45!2sBASEL%20DYNAMICS%20TECH%20SOLUTIONS%20PRIVATE%20LIMITED!5e1!3m2!1sen!2sin!4v1746701097213!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    className="border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              
              <div>
                <h3 className={`text-xl font-heading font-semibold mb-4 ${darkMode ? 'text-orange-400' : 'text-orange-500'}`}>Branch Office Location</h3>
                <div className={`w-full h-80 rounded-lg overflow-hidden ${darkMode ? 'bg-dark-700 shadow-lg' : 'bg-gray-200 shadow-md'}`}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.588343995776!2d79.40847167374407!3d13.621935600289673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b7ad5177887%3A0x45c82df61f7c1d10!2sTech%20Spire%20Academy!5e0!3m2!1sen!2sin!4v1767724546196!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    className="border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Card className={`p-8 transition-all duration-300 ${
              darkMode 
                ? 'bg-dark-700 border-dark-600 hover:shadow-lg' 
                : 'bg-white border-gray-200 shadow-md hover:shadow-lg'
            }`}>
              <form onSubmit={onSubmit}>
                <div className="mb-6">
                  <div>
                    <label htmlFor="name" className={`block text-sm font-medium mb-1 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className={`w-full rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent border ${
                        darkMode 
                          ? 'bg-dark-600 border-dark-500 text-white placeholder-gray-400' 
                          : 'bg-gray-100 border-gray-300 text-gray-800 placeholder-gray-500'
                      }`}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className={`block text-sm font-medium mb-1 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={`w-full rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent border ${
                      darkMode 
                        ? 'bg-dark-600 border-dark-500 text-white placeholder-gray-400' 
                        : 'bg-gray-100 border-gray-300 text-gray-800 placeholder-gray-500'
                    }`}
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className={`block text-sm font-medium mb-1 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className={`w-full rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent border ${
                      darkMode 
                        ? 'bg-dark-600 border-dark-500 text-white placeholder-gray-400' 
                        : 'bg-gray-100 border-gray-300 text-gray-800 placeholder-gray-500'
                    }`}
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className={`block text-sm font-medium mb-1 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className={`w-full rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent border ${
                      darkMode 
                        ? 'bg-dark-600 border-dark-500 text-white' 
                        : 'bg-gray-100 border-gray-300 text-gray-800'
                    }`}
                  >
                    <option value="">Select an option</option>
                    <option value="general">General Inquiry</option>
                    <option value="demo">Request a Demo</option>
                    <option value="quote">Request a Quote</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className={`block text-sm font-medium mb-1 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className={`w-full rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent border ${
                      darkMode 
                        ? 'bg-dark-600 border-dark-500 text-white placeholder-gray-400' 
                        : 'bg-gray-100 border-gray-300 text-gray-800 placeholder-gray-500'
                    }`}
                  ></textarea>
                </div>

                <Button 
                  variant="primary" 
                  className={`w-full hover:shadow-lg transition-all ${
                    darkMode 
                      ? 'bg-orange-500 hover:bg-orange-600 text-gray-900' 
                      : 'bg-orange-500 hover:bg-orange-600 text-white'
                  }`} 
                  type="submit"
                >
                  <Send size={16} className="mr-2" />
                  Send Message
                </Button>
                <span className={`block mt-4 text-center ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>{result}</span>
              </form>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ContactPage;