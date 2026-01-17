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
    <div className="flex flex-col gap-8 max-w-4xl">
      <Typography variant="h1" as="h1" className="text-brand-dark leading-[1.05]">
        {title}
      </Typography>
      <Typography variant="body" className="text-brand-dark/80 max-w-2xl text-xl">
        {subtitle}
      </Typography>
      <div className="pt-4">
        <Button onClick={onCtaClick} size="lg">
          {ctaText}
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;
