import React from 'react';
import Typography from '../atoms/Typography';
import BenefitItem from '../molecules/BenefitItem';

interface SolutionSectionProps {
  teaching: string[];
  benefits: string[];
}

const SolutionSection = ({ teaching, benefits }: SolutionSectionProps) => {
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
            <div className="lg:col-span-12">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
