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
    <section id="solucion" className="bg-brand-arena py-32 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <Typography variant="caption" className="mb-6">La Propuesta</Typography>
            <Typography variant="h2" className="mb-8">
              Este ebook te enseña, paso a paso, a:
            </Typography>
            
            <ul className="space-y-4 mb-12">
              {teaching.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 bg-brand-olive rounded-full"></span>
                  <Typography variant="body" className="text-xl">{item}</Typography>
                </li>
              ))}
            </ul>

            <Typography variant="h3" className="mb-8 text-2xl font-normal italic">
              Beneficios que notarás:
            </Typography>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-16">
              {benefits.map((benefit, index) => (
                <BenefitItem key={index} text={benefit} />
              ))}
            </div>
          </div>

          <div className="bg-white p-12 shadow-2xl border-t-4 border-brand-olive relative">
             <div className="absolute -top-6 -right-6 h-24 w-24 bg-brand-olive flex items-center justify-center rotate-12">
                <Typography variant="caption" className="text-white text-center leading-tight">Acceso<br/>Inmediato</Typography>
             </div>
             
             <Typography variant="h3" className="mb-6">Comienza tu camino hoy</Typography>
             <Typography variant="body" className="mb-8 text-brand-gray-warm">
                Si sientes que el estrés y la inseguridad interna te están pasando factura, este ebook es un buen primer paso.
             </Typography>
             
             <div className="flex flex-col sm:flex-row items-end justify-between gap-8">
                <PriceTag price="12.00" />
                <a href={ctaUrl} target="_blank" rel="noopener noreferrer" onClick={onCtaClick} className="w-full sm:w-auto">
                  <Button variant="secondary" size="lg" fullWidth>Empieza hoy</Button>
                </a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
