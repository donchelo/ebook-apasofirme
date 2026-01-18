import React from 'react';
import Typography from '../atoms/Typography';

const ProblemSection = () => {
  const points = [
    'Están cansadas emocionalmente',
    'Piensan demasiado',
    'Viven con ansiedad constante',
    'Sienten que algo no está bien',
  ];

  return (
    <section id="problema" className="bg-brand-dark py-48 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <Typography variant="caption" className="text-brand-sand/40 mb-12">El Contexto</Typography>
            <Typography variant="display" className="text-brand-sand mb-16 leading-[0.9]">
              Muchas personas viven así: <br/>
              <span className="text-brand-sand/40 italic font-light">Trabajan.</span> <br/>
              <span className="text-brand-sand/60 italic font-light">Cumplen.</span> <br/>
              <span className="text-brand-sand/80 italic font-light">Siguen.</span> <br/>
              <span className="text-brand-sand italic font-light text-5xl mt-10 block leading-tight">
                Viven como en piloto automático.
              </span>
            </Typography>
          </div>
          
          <div className="border-l border-brand-sand/10 pl-12">
            <Typography variant="h3" className="mb-16 text-brand-sand font-light italic">
              Pero por dentro...
            </Typography>
            <div className="space-y-12">
              {points.map((point, index) => (
                <div key={index} className="group relative">
                  <span className="absolute -left-24 top-0 text-8xl font-serif text-[#FF4D00]/10 transition-colors group-hover:text-[#FF4D00]/30">
                    0{index + 1}
                  </span>
                  <Typography variant="h2" className="text-brand-sand relative z-10 group-hover:translate-x-4 transition-transform duration-500 group-hover:text-[#FF4D00]">
                    {point}
                  </Typography>
                </div>
              ))}
            </div>
            
            <div className="mt-32 pt-16 border-t border-brand-sand/10">
              <Typography variant="body" className="text-3xl leading-relaxed font-serif italic text-brand-sand/60">
                "Esta rumiación mental y fatiga emocional no son casualidad. Son señales de un cuerpo tratando de protegerse."
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
