import React from 'react';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';
import PriceTag from '../molecules/PriceTag';

interface FinalCTAProps {
  ctaUrl: string;
  onCtaClick?: () => void;
}

const FinalCTA = ({ ctaUrl, onCtaClick }: FinalCTAProps) => {
  return (
    <section id="cta-final" className="bg-brand-dark text-brand-sand py-32 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <Typography variant="caption" className="text-brand-olive mb-8 block">
          Toma el primer paso
        </Typography>
        
        <Typography variant="h2" className="mb-12 text-balance text-brand-sand">
          Si sientes que el estrés y la inseguridad interna te están pasando factura, este ebook es un buen primer paso.
        </Typography>
        
        <div className="bg-brand-sand/5 backdrop-blur-sm p-12 border border-brand-sand/10 inline-flex flex-col items-center gap-10">
          <PriceTag price="11.99" className="text-brand-sand" />
          
          <a 
            href={ctaUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={onCtaClick}
            className="w-full sm:w-auto"
          >
            <Button variant="secondary" size="lg" fullWidth>
              👉 Empieza hoy
            </Button>
          </a>
        </div>
        
        <Typography variant="body" className="mt-12 text-brand-sand/60 text-sm">
          Garantía de satisfacción Hotmart. Acceso inmediato tras la compra.
        </Typography>
      </div>
    </section>
  );
};

export default FinalCTA;
