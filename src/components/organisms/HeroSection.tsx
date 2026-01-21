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
    <section id="hero" className="relative min-h-screen flex flex-col pt-64 pb-32 px-6 bg-brand-sand overflow-hidden">
      {/* Elemento Decorativo Sutil (Boceto) */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-15 pointer-events-none select-none z-0">
        <img 
          src="/hero-sketch.png" 
          alt="" 
          className="w-full h-full object-contain object-right-top grayscale mix-blend-multiply transition-opacity duration-1000"
        />
      </div>

      <div className="container mx-auto relative z-10">
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
        </div>
      </div>
      
      <div className="mt-20 border-t border-brand-dark pt-8 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          <Typography variant="display" className="text-[#FF4D00] text-9xl mr-20">
            NEUROCIENCIA • CALMA • CLARIDAD • CONFIANZA •
          </Typography>
          <Typography variant="display" className="text-[#FF4D00] text-9xl mr-20">
            NEUROCIENCIA • CALMA • CLARIDAD • CONFIANZA •
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
