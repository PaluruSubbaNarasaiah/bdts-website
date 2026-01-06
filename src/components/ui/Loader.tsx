import React from 'react';
// import Logo from './Logo';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-dark-900 flex items-center justify-center z-50">
      <div className="flex flex-col items-center">
        <div className="relative">
          {/* <Logo className="h-75 w-75 animate-spin-slow" />  */}
          {/* Logo loaded from public folder */}
          <img 
            src="/bdtslogo.png" 
            alt="BASEL DYNAMICS TECH Logo"
            className="h-24 w-24 animate-spin-slow" 
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-16 w-16 rounded-full border-t-2 border-b-2 border-primary-500 animate-spin"></div> {/* Increased from h-16 w-16 */}
          </div>
        </div>
        <h2 className="font-heading text-2xl mt-8 neon-text text-center">
          BASEL DYNAMICS TECH
        </h2>
        <p className="text-gray-400 mt-2 animate-pulse">Loading the future...</p>
      </div>
    </div>
  );
};

export default Loader;