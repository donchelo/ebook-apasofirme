import React from 'react';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';

interface HeroContentProps {
  title: string;
  subtitle: string;
  ctaText: string;
  onCtaClick?: () => void;
}

const HeroContent = ({ title, subtitle, ctaText, onCtaClick }: HeroContentProps) => {
  return (
    <div className="flex flex-col gap-12">
      <Typography variant="giant" as="h1" className="text-brand-dark">
        {title}
      </Typography>
      <div className="flex flex-col lg:flex-row items-end gap-12">
        <Typography variant="body" className="text-brand-dark max-w-2xl text-2xl font-light">
          {subtitle}
        </Typography>
        <div className="flex-shrink-0">
          <Button onClick={onCtaClick} size="lg" className="w-full sm:w-auto">
            {ctaText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
