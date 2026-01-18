import React from 'react';
import HeroContent from '../molecules/HeroContent';
import Typography from '../atoms/Typography';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  videoUrl: string;
  onCtaClick?: () => void;
}

const HeroSection = ({ title, subtitle, ctaText, videoUrl, onCtaClick }: HeroSectionProps) => {
  return (
    <section id="hero" className="min-h-screen flex flex-col pt-48 pb-32 px-6 bg-brand-sand">
      <div className="container mx-auto">
        <div className="mb-24">
          <HeroContent 
            title={title}
            subtitle={subtitle}
            ctaText={ctaText}
            onCtaClick={onCtaClick}
          />
        </div>
        
        <div className="w-full aspect-video lg:aspect-[21/9] bg-brand-dark overflow-hidden relative border-[12px] border-brand-dark shadow-2xl">
          <iframe
            className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            src={`https://www.youtube.com/embed/${videoUrl.split('v=')[1] || videoUrl.split('/').pop()}`}
            title="Video Principal"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="absolute top-4 right-4 z-10">
            <Typography variant="caption" className="bg-brand-dark/90 text-brand-sand px-3 py-1">Video Protagonista</Typography>
          </div>
        </div>
      </div>
      
      <div className="mt-20 border-t border-brand-stone/40 pt-8 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          <Typography variant="display" className="text-brand-stone text-9xl mr-20">
            NEUROCIENCIA • CALMA • CLARIDAD • CONFIANZA •
          </Typography>
          <Typography variant="display" className="text-brand-stone text-9xl mr-20">
            NEUROCIENCIA • CALMA • CLARIDAD • CONFIANZA •
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
