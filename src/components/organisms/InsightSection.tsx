import React from 'react';
import Typography from '../atoms/Typography';

const InsightSection = () => {
  return (
    <section className="bg-brand-dark text-brand-sand py-48 px-6 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        
        <div className="max-w-6xl mx-auto space-y-24">
          <Typography variant="caption" className="text-brand-olive font-bold">El problema real</Typography>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div className="space-y-6">
               <Typography variant="h1" className="text-brand-sand font-light italic">No es falta de fuerza.</Typography>
               <Typography variant="h1" className="text-brand-sand font-light italic">No es falta de disciplina.</Typography>
            </div>
            
            <Typography variant="giant" className="text-brand-sand leading-[0.85] text-right">
              Es un <span className="text-brand-olive italic">sistema</span> <br/>
              nervioso <br/>
              <span className="underline decoration-brand-olive underline-offset-[16px]">saturado.</span>
            </Typography>
          </div>

          <div className="pt-24 border-t border-brand-sand/10 text-center">
            <Typography variant="h2" className="font-serif italic text-brand-sand/60 text-4xl md:text-5xl max-w-4xl mx-auto leading-relaxed">
              "Cuando tu cuerpo no se siente seguro, tu mente nunca descansa."
            </Typography>
          </div>
        </div>

      </div>
      
      <Typography variant="display" className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 text-[25vw] leading-none text-white opacity-[0.02] pointer-events-none whitespace-nowrap font-bold">
        SISTEMA
      </Typography>
    </section>
  );
};

export default InsightSection;
