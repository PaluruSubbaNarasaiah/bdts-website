import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  // Dark Mode Handling
  const [darkMode, setDarkMode] = React.useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
    }
    return false;
  });

  React.useEffect(() => {
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
    <footer className={darkMode ? 'bg-dark-800 border-t border-dark-600' : 'bg-white border-t border-gray-300'}>
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <Logo className="h-10 w-auto" />
              <span className={`text-lg font-heading font-bold ${darkMode ? 'neon-text' : 'text-primary-500'}`}>
                Basel Dynamics Tech
              </span>
            </Link>
            <p className={darkMode ? 'text-gray-400 text-sm mt-4' : 'text-gray-600 text-sm mt-4'}>
              Leading technology company specializing in software applications and custom IT services.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61576002102301" target="_blank" rel="noopener noreferrer" className={`text-gray-400 hover:${darkMode ? 'text-primary-500' : 'text-primary-500'} transition-colors`}>
                <Facebook size={20} />
              </a>
              <a href="https://x.com/Basel_DTSPL?t=2QkFImPDtuk8a15wnZphDw&s=09" target="_blank" rel="noopener noreferrer" className={`text-gray-400 hover:${darkMode ? 'text-primary-500' : 'text-primary-500'} transition-colors`}>
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/baseldynamictechsolutions" target="_blank" rel="noopener noreferrer" className={`text-gray-400 hover:${darkMode ? 'text-primary-500' : 'text-primary-500'} transition-colors`}>
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/basel_dynamic_tech_solutions?igsh=anUzM2x5NTQzbHBv" target="_blank" rel="noopener noreferrer" className={`text-gray-400 hover:${darkMode ? 'text-primary-500' : 'text-primary-500'} transition-colors`}>
                <Instagram size={20} />
              </a>
              <a href="https://github.com/BaselDynamics" target="_blank" rel="noopener noreferrer" className={`text-gray-400 hover:${darkMode ? 'text-primary-500' : 'text-primary-500'} transition-colors`}>
                <Github size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className={`text-xl font-heading font-semibold mb-6 ${darkMode ? 'neon-text' : 'text-primary-500'}`}>Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/products" className={`text-gray-400 hover:${darkMode ? 'text-white' : 'text-primary-500'} transition-colors`}>Products</Link></li>
              <li><Link to="/services" className={`text-gray-400 hover:${darkMode ? 'text-white' : 'text-primary-500'} transition-colors`}>Services</Link></li>
              <li><Link to="/blog" className={`text-gray-400 hover:${darkMode ? 'text-white' : 'text-primary-500'} transition-colors`}>Blog</Link></li>
              <li><Link to="/careers" className={`text-gray-400 hover:${darkMode ? 'text-white' : 'text-primary-500'} transition-colors`}>Careers</Link></li>
              <li><Link to="/support" className={`text-gray-400 hover:${darkMode ? 'text-white' : 'text-primary-500'} transition-colors`}>Support</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className={`text-xl font-heading font-semibold mb-6 ${darkMode ? 'neon-text' : 'text-primary-500'}`}>Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className={`text-primary-500 mr-3 mt-1 flex-shrink-0`} size={18} />
                <div>
                  <div className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Headquarters:</div>
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>6th Floor, Suite No: 10, Gamma Block, Sigma Soft Tech Park</span>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className={`text-primary-500 mr-3 mt-1 flex-shrink-0`} size={18} />
                <div>
                  <div className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Branch Office:</div>
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>23-8-161/2, Second Floor, MR Palli Rd, above Sri Hari Medical store, SV Nagar, New Balaji Colony, Tirupati, Andhra Pradesh - 517501</span>
                </div>
              </li>
              <li className="flex items-center">
                <Phone className={`text-primary-500 mr-3 flex-shrink-0`} size={18} />
                <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>+91 88855 25531</span>
              </li>
              <li className="flex items-center">
                <Mail className={`text-primary-500 mr-3 flex-shrink-0`} size={18} />
                <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>info@baseldtsolutions.com</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
<div>
  <h3 className={`text-xl font-heading font-semibold mb-6 ${darkMode ? 'neon-text' : 'text-primary-500'}`}>
    Stay Updated
  </h3>
  <p className={darkMode ? 'text-gray-400 text-sm mb-4' : 'text-gray-600 text-sm mb-4'}>
    Subscribe to our newsletter for the latest updates and insights.
  </p>
  <form className="mt-2">
    <div className="flex">
      <input 
        type="email" 
        placeholder="Your email" 
        className={`px-2 py-2 rounded-l outline-none border transition-colors w-48
          ${darkMode 
            ? 'bg-dark-700 text-white border-dark-500 focus:border-primary-500' 
            : 'bg-white text-gray-900 border-gray-300 focus:border-orange-500'
          }`}
      />
      <button 
        type="submit" 
        className={`px-3 py-2 rounded-r font-medium transition-colors 
          ${darkMode 
            ? 'bg-primary-500 text-dark-900 hover:bg-primary-400' 
            : 'bg-orange-500 text-white hover:bg-orange-400'
          }`}
      >
        Subscribe
      </button>
    </div>
  </form>
</div>

        </div>
        
        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-dark-600 flex flex-col md:flex-row justify-between items-center">
          <p className={darkMode ? 'text-gray-400 text-sm' : 'text-gray-500 text-sm'}>
            &copy; {currentYear} Basel Dynamics Tech Solutions. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy" className={darkMode ? 'text-gray-400 hover:text-white text-sm' : 'text-gray-500 hover:text-white text-sm'}>Privacy Policy</Link>
            <Link to="/terms" className={darkMode ? 'text-gray-400 hover:text-white text-sm' : 'text-gray-500 hover:text-white text-sm'}>Terms of Service</Link>
            <Link to="/cookies" className={darkMode ? 'text-gray-400 hover:text-white text-sm' : 'text-gray-500 hover:text-white text-sm'}>Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
