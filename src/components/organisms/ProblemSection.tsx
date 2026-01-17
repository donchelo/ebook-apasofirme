import React from 'react';
import Typography from '../atoms/Typography';

const ProblemSection = () => {
  const points = [
    'Están cansadas emocionalmente',
    'Piensan demasiado',
    'Viven con ansiedad constante',
    'Sienten que algo no está bien… aunque "todo debería estar bien"',
  ];

  return (
    <section id="problema" className="bg-brand-stone py-32 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-4xl">
          <Typography variant="caption" className="text-brand-olive mb-6">El Contexto</Typography>
          <Typography variant="h2" className="mb-12">
            Muchas personas viven así: Trabajan. Cumplen. Siguen adelante.
          </Typography>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-brand-dark/10 pt-12">
            <div>
              <Typography variant="h3" className="mb-8 font-normal italic opacity-80">
                Pero por dentro...
              </Typography>
              <ul className="space-y-6">
                {points.map((point, index) => (
                  <li key={index} className="flex gap-4 items-baseline border-b border-brand-dark/5 pb-4">
                    <span className="text-brand-olive font-serif">0{index + 1}</span>
                    <Typography variant="body" className="text-xl">{point}</Typography>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col justify-center">
              <Typography variant="body" className="text-2xl leading-relaxed font-serif italic text-brand-dark/70">
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
