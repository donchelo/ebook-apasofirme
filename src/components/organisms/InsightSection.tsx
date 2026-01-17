import React from 'react';
import Typography from '../atoms/Typography';

const InsightSection = () => {
  return (
    <section className="bg-brand-dark text-brand-sand py-32 px-6 relative overflow-hidden">
      <div className="container mx-auto relative z-10 text-center flex flex-col items-center">
        
        <div className="max-w-3xl space-y-8">
          <Typography variant="caption" className="text-brand-sand/70">El problema real</Typography>
          
          <div className="space-y-2 opacity-80">
             <Typography variant="body" className="text-xl md:text-2xl">No es falta de fuerza.</Typography>
             <Typography variant="body" className="text-xl md:text-2xl">No es falta de disciplina.</Typography>
          </div>
          
          <Typography variant="display" className="text-brand-sand !text-5xl md:!text-7xl leading-[1.1]">
            Es un sistema nervioso <span className="text-brand-olive italic">saturado</span>.
          </Typography>

          <div className="w-16 h-1 bg-brand-olive mx-auto my-8"></div>

          <Typography variant="body" className="font-serif italic text-brand-sand text-2xl md:text-3xl">
            "Cuando tu cuerpo no se siente seguro, tu mente nunca descansa."
          </Typography>
        </div>

      </div>
      
      {/* Background typographic texture */}
      <Typography variant="display" className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-[15vw] leading-none text-white opacity-[0.03] pointer-events-none whitespace-nowrap">
        A PASO FIRME
      </Typography>
    </section>
  );
};

export default InsightSection;
