import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id,
  fullWidth = false
}) => {
  return (
    <section id={id} className={`section ${className}`}>
      {fullWidth ? (
        children
      ) : (
        <div className="container-custom">
          {children}
        </div>
      )}
    </section>
  );
};

export default Section;