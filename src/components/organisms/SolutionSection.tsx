import React from 'react';
import Typography from '../atoms/Typography';
import BenefitItem from '../molecules/BenefitItem';
import Button from '../atoms/Button';
import PriceTag from '../molecules/PriceTag';

interface SolutionSectionProps {
  teaching: string[];
  benefits: string[];
  ctaUrl: string;
  onCtaClick?: () => void;
}

const SolutionSection = ({ teaching, benefits, ctaUrl, onCtaClick }: SolutionSectionProps) => {
  return (
    <section id="solucion" className="bg-brand-sand py-48 px-6 border-t-8 border-brand-dark">
      <div className="container mx-auto">
        <div className="flex flex-col gap-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-end">
            <div>
              <Typography variant="caption" className="mb-12">La Propuesta</Typography>
              <Typography variant="giant" className="mb-12 leading-[0.85]">
                Paso a paso <br/>
                <span className="italic font-light">hacia ti.</span>
              </Typography>
            </div>
            <div>
              <ul className="space-y-8 border-l-4 border-brand-olive pl-12">
                {teaching.map((item, index) => (
                  <li key={index}>
                    <Typography variant="h3" className="text-3xl">{item}</Typography>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <Typography variant="h1" className="mb-16">
                Beneficios que notarás <br/>
                <span className="text-brand-olive">desde la primera semana:</span>
              </Typography>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                {benefits.map((benefit, index) => (
                  <BenefitItem key={index} text={benefit} />
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-brand-dark p-16 relative">
               <div className="absolute -top-12 -right-12 h-32 w-32 bg-brand-olive flex items-center justify-center -rotate-6 shadow-xl border-4 border-brand-sand">
                  <Typography variant="caption" className="text-brand-sand text-center leading-tight font-bold">ACCESO<br/>TOTAL</Typography>
               </div>
               
               <Typography variant="h2" className="mb-8 text-brand-sand">Comienza tu camino hoy</Typography>
               <Typography variant="body" className="mb-16 text-brand-sand/60 text-xl">
                  Si sientes que el estrés y la inseguridad interna te están pasando factura, este ebook es un buen primer paso.
               </Typography>
               
               <div className="flex flex-col gap-12">
                  <PriceTag price="11.99" className="text-brand-sand" />
                  <a href={ctaUrl} target="_blank" rel="noopener noreferrer" onClick={onCtaClick} className="w-full">
                    <Button variant="secondary" size="lg" fullWidth>Adquirir ahora</Button>
                  </a>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
