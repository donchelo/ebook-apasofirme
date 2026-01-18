import React from 'react';
import Typography from '../atoms/Typography';
import AuthorSummary from '../molecules/AuthorSummary';

interface BioSectionProps {
  name: string;
  role: string;
  bio: string;
  imageSrc?: string;
}

const BioSection = ({ name, role, bio, imageSrc }: BioSectionProps) => {
  return (
    <section id="autor" className="bg-brand-sand py-48 px-6 border-y-[20px] border-brand-dark">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
        <div className="w-full lg:w-1/2 aspect-[4/5] bg-brand-dark relative overflow-hidden group border-[16px] border-brand-dark shadow-2xl">
          <div className="absolute top-8 left-8 w-24 h-24 bg-brand-accent z-10 -rotate-12 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          {imageSrc ? (
              <img 
                src={imageSrc} 
                alt={name} 
                className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
              />
            ) : (
              <div className="absolute inset-0 bg-brand-stone flex items-center justify-center">
                <Typography variant="display" className="opacity-10 rotate-90">{name}</Typography>
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 bg-brand-dark p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <Typography variant="caption" className="text-brand-sand">{role}</Typography>
            </div>
          </div>

          <div className="flex-1">
            <Typography variant="caption" className="mb-12">El Autor</Typography>
            <Typography variant="giant" className="mb-12 leading-[0.85]">
              Gabo <br/>
              <span className="italic font-light text-brand-olive">Arriola.</span>
            </Typography>
            <div className="border-t-2 border-brand-dark/10 pt-12 space-y-6">
              <Typography variant="h2" className="mb-8 font-light">
                Acompañando tu proceso con <span className="font-serif italic underline decoration-brand-olive underline-offset-8">ciencia y empatía.</span>
              </Typography>
              {bio.split('\n\n').map((paragraph, index) => (
                <Typography key={index} variant="body" className="text-xl md:text-2xl leading-relaxed text-brand-dark/80 font-serif">
                  {paragraph}
                </Typography>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
