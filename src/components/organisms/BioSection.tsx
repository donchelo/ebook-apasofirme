import React from 'react';
import Typography from '../atoms/Typography';
import AuthorSummary from '../molecules/AuthorSummary';

interface BioSectionProps {
  name: string;
  role: string;
  bio: string;
}

const BioSection = ({ name, role, bio }: BioSectionProps) => {
  return (
    <section id="autor" className="bg-brand-beige py-32 px-6 border-y border-brand-gray-light/10">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <Typography variant="caption" className="mb-6">El Autor</Typography>
            <Typography variant="h2" className="mb-8">
              Acompañando tu proceso con ciencia y empatía.
            </Typography>
            <Typography variant="body" className="mb-12 text-xl leading-relaxed text-brand-gray-warm italic">
              "{bio}"
            </Typography>
            <AuthorSummary name={name} role={role} />
          </div>
          <div className="w-full md:w-1/3 aspect-[3/4] bg-brand-gray-warm/10 relative overflow-hidden group">
             {/* Simple aesthetic placeholder for photo */}
             <div className="absolute inset-0 bg-brand-beige flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                <div className="w-full h-full border-[1px] border-brand-blue/5 flex flex-col items-center justify-center p-8 text-center">
                  <Typography variant="caption" className="opacity-40">Gabriel Arriola Dugand</Typography>
                  <div className="w-12 h-[1px] bg-brand-olive my-4 opacity-30"></div>
                  <Typography variant="body" className="text-sm opacity-30 uppercase tracking-[0.2em]">Coach Neurociencia</Typography>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
