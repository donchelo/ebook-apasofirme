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
  const baseStyles = 'inline-flex items-center justify-center font-sans font-bold transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none tracking-[0.1em] uppercase rounded-none transform hover:scale-[1.02] active:scale-[0.98] border-2';
  
  const variants = {
    primary: "bg-[#FF4D00] text-white border-[#FF4D00] hover:bg-transparent hover:text-[#FF4D00]",
    secondary: "bg-brand-olive text-white border-brand-olive hover:bg-transparent hover:text-brand-olive",
    outline: "border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-brand-sand",
    ghost: 'border-transparent text-brand-dark hover:bg-brand-dark/5',
  };

  const sizes = {
    sm: 'px-8 py-4 text-xs',
    md: 'px-10 py-5 text-base',
    lg: 'px-16 py-8 text-lg',
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
