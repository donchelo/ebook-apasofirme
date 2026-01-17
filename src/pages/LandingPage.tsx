import React, { useEffect } from 'react';
import LandingTemplate from '../components/templates/LandingTemplate';
import HeroSection from '../components/organisms/HeroSection';
import ProblemSection from '../components/organisms/ProblemSection';
import SolutionSection from '../components/organisms/SolutionSection';
import BioSection from '../components/organisms/BioSection';
import FinalCTA from '../components/organisms/FinalCTA';
import { trackPixelEvent } from '../utils/pixel';

const LandingPage = () => {
  useEffect(() => {
    trackPixelEvent('ViewContent', {
      content_name: 'Ebook Landing Page',
      content_category: 'Ebook',
    });
  }, []);
  const content = {
    hero: {
      title: "Recupera tu calma, claridad y confianza emocional.",
      subtitle: "Una guía práctica basada en neurociencia para regular tu mente, tu cuerpo y dejar de vivir en constante estrés.",
      ctaText: "Empieza con el ebook",
      videoUrl: "https://youtu.be/QMwKu8gSmho",
    },
    solution: {
      teaching: [
        "Regular tu sistema nervioso",
        "Calmar la mente sin forzarte",
        "Recuperar estabilidad emocional",
        "Volver a confiar en ti",
      ],
      benefits: [
        "Menos ansiedad diaria",
        "Más calma interna",
        "Decisiones más claras",
        "Mejor descanso mental",
        "Más energía emocional",
      ],
      ctaUrl: "https://pay.hotmart.com/V103449204E",
    },
    author: {
      name: "Gabo Arriola",
      role: "Coach en Neurociencia y PNL",
      bio: "Acompaño a personas que se sienten agotadas por dentro a recuperar claridad, calma y confianza emocional.",
    }
  };

  const handlePurchase = () => {
    trackPixelEvent('InitiateCheckout', {
      content_name: 'Cómo despertar tu confianza - A Paso Firme',
      value: 12.00,
      currency: 'USD',
    });
    window.open(content.solution.ctaUrl, '_blank');
  };

  return (
    <LandingTemplate>
      <HeroSection 
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        ctaText={content.hero.ctaText}
        videoUrl={content.hero.videoUrl}
        onCtaClick={handlePurchase}
      />
      
      <ProblemSection />
      
      <SolutionSection 
        teaching={content.solution.teaching}
        benefits={content.solution.benefits}
        ctaUrl={content.solution.ctaUrl}
        onCtaClick={handlePurchase}
      />
      
      <BioSection 
        name={content.author.name}
        role={content.author.role}
        bio={content.author.bio}
      />

      <FinalCTA 
        ctaUrl={content.solution.ctaUrl}
        onCtaClick={handlePurchase}
      />
    </LandingTemplate>
  );
};

export default LandingPage;
