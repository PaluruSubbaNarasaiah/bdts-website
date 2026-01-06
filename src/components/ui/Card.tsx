import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  neonBorder?: boolean;
  neonBorderGold?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = false,
  neonBorder = false,
  neonBorderGold = false
}) => {
  let classes = 'card ' + className;

  if (hover) {
    classes += ' card-hover';
  }
  
  if (neonBorder) {
    classes += ' neon-border';
  }
  
  if (neonBorderGold) {
    classes += ' neon-border-gold';
  }

  return <div className={classes}>{children}</div>;
};

export default Card;