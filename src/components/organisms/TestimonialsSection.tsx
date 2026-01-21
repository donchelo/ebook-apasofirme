import React from 'react';
import Typography from '../atoms/Typography';

const TestimonialsSection = () => {
  // Función helper para extraer el ID de YouTube de diferentes formatos de URL
  const extractYouTubeId = (url: string): string => {
    // Formato: https://youtu.be/VIDEO_ID o https://www.youtube.com/watch?v=VIDEO_ID
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^&\n?#]+)/);
    return match ? match[1] : url.split('/').pop()?.split('?')[0] || '';
  };

  const testimonials = [
    {
      id: extractYouTubeId('https://youtu.be/XVX3lTEji9E?si=0orZs8cS-n8e6n0-'),
      title: 'Testimonio 1',
    },
    {
      id: extractYouTubeId('https://youtu.be/AnLho7FflAk'),
      title: 'Testimonio 2',
    },
  ];

  return (
    <section id="testimonios" className="bg-brand-dark text-brand-sand py-48 px-6 border-t-8 border-brand-sand">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto space-y-24">
          <div className="text-center">
            <Typography variant="caption" className="text-brand-sand/40 mb-12">
              Testimonios
            </Typography>
            <Typography variant="giant" className="text-brand-sand mb-8 leading-[0.85]">
              Lo que dicen <br/>
              <span className="text-[#FF4D00] italic font-light">quienes lo han probado</span>
            </Typography>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full aspect-video bg-brand-dark overflow-hidden relative border-[12px] border-brand-sand shadow-2xl group"
              >
                <iframe
                  className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                  src={`https://www.youtube.com/embed/${testimonial.id}`}
                  title={testimonial.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Typography variant="caption" className="bg-brand-dark/90 text-brand-sand px-3 py-1">
                    {testimonial.title}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
