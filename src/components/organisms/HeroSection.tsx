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
    <section id="hero" className="min-h-screen flex flex-col pt-32 pb-20 px-6">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7">
          <HeroContent 
            title={title}
            subtitle={subtitle}
            ctaText={ctaText}
            onCtaClick={onCtaClick}
          />
        </div>
        
        <div className="lg:col-span-5 w-full aspect-video lg:aspect-square bg-brand-beige overflow-hidden relative group">
          <iframe
            className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            src={`https://www.youtube.com/embed/${videoUrl.split('v=')[1] || videoUrl.split('/').pop()}`}
            title="Video Principal"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="absolute top-4 right-4 z-10">
            <Typography variant="caption" className="bg-brand-blue/90 text-white px-3 py-1">Video Protagonista</Typography>
          </div>
        </div>
      </div>
      
      <div className="mt-20 border-t border-brand-gray-light/20 pt-8 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          <Typography variant="display" className="text-brand-gray-light/10 text-9xl mr-20">
            NEUROCIENCIA • CALMA • CLARIDAD • CONFIANZA •
          </Typography>
          <Typography variant="display" className="text-brand-gray-light/10 text-9xl mr-20">
            NEUROCIENCIA • CALMA • CLARIDAD • CONFIANZA •
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
