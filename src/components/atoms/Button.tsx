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
  const baseStyles = 'inline-flex items-center justify-center font-sans font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none tracking-wide rounded-sm transform hover:-translate-y-1 active:translate-y-0';
  
  const variants = {
    primary: "bg-brand-dark text-brand-sand hover:bg-brand-olive shadow-lg hover:shadow-xl",
    secondary: "bg-brand-olive text-white hover:bg-brand-dark shadow-md",
    outline: "border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-brand-sand",
    ghost: 'text-brand-dark hover:bg-brand-dark/5',
  };

  const sizes = {
    sm: 'px-6 py-3 text-sm',
    md: 'px-8 py-4 text-lg',
    lg: 'px-12 py-6 text-xl',
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
