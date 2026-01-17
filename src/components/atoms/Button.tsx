import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  children,
  ...props
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-sans font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none uppercase tracking-widest';
  
  const variants = {
    primary: 'bg-brand-blue text-white hover:bg-opacity-90',
    secondary: 'bg-brand-olive text-white hover:bg-opacity-90',
    outline: 'border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white',
    ghost: 'text-brand-blue hover:bg-brand-blue/5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-8 py-4 text-sm',
    lg: 'px-12 py-6 text-base',
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth ? 'w-full' : '',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
