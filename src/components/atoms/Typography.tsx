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
    display: 'font-serif text-display uppercase tracking-tighter',
    h1: 'font-serif text-h1 text-balance',
    h2: 'font-serif text-h2 text-balance',
    h3: 'font-serif text-h3 text-balance',
    body: 'font-sans text-lg leading-relaxed',
    caption: 'font-sans text-sm uppercase tracking-widest text-brand-gray-light',
    nav: 'font-sans text-sm uppercase tracking-widest font-medium',
  };

  return (
    <Component className={cn(variants[variant], className)}>
      {children}
    </Component>
  );
};

export default Typography;
