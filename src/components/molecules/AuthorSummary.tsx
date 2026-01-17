import React from 'react';
import Typography from '../atoms/Typography';

interface AuthorSummaryProps {
  name: string;
  role: string;
  imageSrc?: string;
}

const AuthorSummary = ({ name, role, imageSrc }: AuthorSummaryProps) => {
  return (
    <div className="flex items-center gap-6">
      <div className="h-24 w-24 overflow-hidden rounded-full bg-brand-stone border border-brand-stone/40 grayscale hover:grayscale-0 transition-all duration-700">
        {imageSrc ? (
          <img src={imageSrc} alt={name} className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full bg-brand-stone flex items-center justify-center">
             <span className="text-brand-dark/40 font-serif text-3xl">{name.charAt(0)}</span>
          </div>
        )}
      </div>
      <div>
        <Typography variant="caption" className="mb-1 text-brand-olive">{role}</Typography>
        <Typography variant="h3" as="h4" className="text-2xl">{name}</Typography>
      </div>
    </div>
  );
};

export default AuthorSummary;
