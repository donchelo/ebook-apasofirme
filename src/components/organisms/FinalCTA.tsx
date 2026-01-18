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
    <section id="cta-final" className="bg-brand-olive text-brand-sand py-48 px-6 border-y-[20px] border-brand-dark">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          <div className="lg:w-2/3">
            <Typography variant="caption" className="text-brand-dark font-bold mb-12 block">
              Toma el primer paso
            </Typography>
            
            <Typography variant="giant" className="text-brand-sand mb-12 leading-[0.85]">
              Recupera tu <br/>
              <span className="text-brand-dark italic">calma</span> interna.
            </Typography>
            
            <Typography variant="h2" className="text-brand-sand/80 font-light max-w-2xl leading-relaxed">
              Si sientes que el estrés y la inseguridad interna te están pasando factura, este ebook es tu primer paso hacia la regulación.
            </Typography>
          </div>
          
          <div className="lg:w-1/3 w-full bg-brand-dark p-16 shadow-2xl flex flex-col items-start gap-12">
            <PriceTag price="11.99" className="text-brand-sand" />
            
            <a 
              href={ctaUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={onCtaClick}
              className="w-full"
            >
              <Button variant="secondary" size="lg" fullWidth className="bg-brand-sand text-brand-dark border-brand-sand hover:text-brand-sand">
                Adquirir ahora
              </Button>
            </a>
            
            <Typography variant="caption" className="text-brand-sand/40 text-xs">
              Garantía Hotmart • Acceso Inmediato
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
