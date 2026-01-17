import React from 'react';
import { cn } from '../../utils/cn';

interface TypographyProps {
  variant: 'display' | 'h1' | 'h2' | 'h3' | 'body' | 'caption' | 'nav';
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

const Typography = ({ variant, as: Component = 'p', className, children }: TypographyProps) => {
  const variants = {
    display: 'font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-brand-dark leading-tight',
    h1: 'font-serif text-4xl md:text-5xl font-normal text-brand-dark leading-tight text-balance',
    h2: 'font-serif text-3xl md:text-4xl font-normal text-brand-dark leading-tight text-balance',
    h3: 'font-serif text-2xl md:text-3xl font-medium text-brand-dark leading-tight text-balance',
    body: 'font-sans text-base md:text-lg leading-relaxed text-brand-dark text-opacity-90',
    caption: 'font-sans text-sm uppercase tracking-widest text-brand-dark/60',
    nav: 'font-sans text-sm uppercase tracking-widest font-semibold text-brand-dark',
  };

  return (
    <Component className={cn(variants[variant], className)}>
      {children}
    </Component>
  );
};

export default Typography;
