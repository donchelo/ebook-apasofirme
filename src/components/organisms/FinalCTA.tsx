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
    <section id="cta-final" className="bg-brand-blue text-white py-32 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <Typography variant="caption" className="text-brand-olive mb-8 block">
          Toma el primer paso
        </Typography>
        
        <Typography variant="h2" className="mb-12 text-balance">
          Si sientes que el estrés y la inseguridad interna te están pasando factura, este ebook es un buen primer paso.
        </Typography>
        
        <div className="bg-white/5 backdrop-blur-sm p-12 border border-white/10 inline-flex flex-col items-center gap-10">
          <PriceTag price="12.00" className="text-white" />
          
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
        
        <Typography variant="body" className="mt-12 opacity-60 text-sm">
          Garantía de satisfacción Hotmart. Acceso inmediato tras la compra.
        </Typography>
      </div>
    </section>
  );
};

export default FinalCTA;
