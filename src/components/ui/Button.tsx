import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'gold' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-heading font-bold rounded transition-all duration-300';
  
  const variantClasses = {
    primary: 'bg-primary-500 text-dark-900 hover:bg-primary-400 hover:shadow-neon',
    outline: 'bg-transparent border border-primary-500 text-primary-500 hover:shadow-neon',
    gold: 'bg-accent-500 text-dark-900 hover:bg-accent-400 hover:shadow-neon-gold',
    ghost: 'bg-transparent text-white hover:bg-dark-700 hover:text-primary-500',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;