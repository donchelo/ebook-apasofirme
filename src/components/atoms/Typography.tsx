import React from 'react';
import { cn } from '../../utils/cn';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant: 'giant' | 'display' | 'h1' | 'h2' | 'h3' | 'body' | 'caption' | 'nav' | 'accent';
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

const Typography = ({ variant, as: Component = 'p', className, children, ...props }: TypographyProps) => {
  const variants = {
    giant: 'font-serif text-6xl md:text-8xl lg:text-[10rem] font-medium tracking-tighter text-brand-dark leading-[0.85] text-balance',
    display: 'font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-brand-dark leading-tight',
    h1: 'font-serif text-5xl md:text-6xl lg:text-7xl font-normal text-brand-dark leading-[1.05] text-balance',
    h2: 'font-serif text-4xl md:text-5xl font-normal text-brand-dark leading-tight text-balance',
    h3: 'font-serif text-2xl md:text-4xl font-medium text-brand-dark leading-tight text-balance',
    body: 'font-sans text-lg md:text-xl leading-relaxed text-brand-dark text-opacity-90',
    caption: 'font-sans text-xs md:text-sm uppercase tracking-[0.2em] font-bold text-brand-dark/60',
    nav: 'font-sans text-sm uppercase tracking-widest font-semibold text-brand-dark',
    accent: 'font-serif italic text-[#FF4D00]',
  };

  return (
    <Component className={cn(variants[variant], className)} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
