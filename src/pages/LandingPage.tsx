import React, { useEffect } from 'react';
import LandingTemplate from '../components/templates/LandingTemplate';
import HeroSection from '../components/organisms/HeroSection';
import ProblemSection from '../components/organisms/ProblemSection';
import InsightSection from '../components/organisms/InsightSection';
import SolutionSection from '../components/organisms/SolutionSection';
import TestimonialsSection from '../components/organisms/TestimonialsSection';
import BioSection from '../components/organisms/BioSection';
import FinalCTA from '../components/organisms/FinalCTA';
import { trackPixelEvent } from '../utils/pixel';

const LandingPage = ({ onNavigate }: { onNavigate: (page: 'landing' | 'terms' | 'privacy') => void }) => {
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
      videoUrl: "https://youtu.be/lL_KQSapcEU",
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
      role: "Coach en Neurociencia, Máster en PNL y Coach Ontológico",
      bio: "Soy Gabriel Arriola, coach en neurociencia, máster en Programación Neurolingüística y coach ontológico. Desde el año 2000 he dedicado mi vida a acompañar a personas en procesos de transformación personal, regulación emocional y construcción de confianza interna.\n\nNo llegué a este camino desde la teoría, sino desde la experiencia real de atravesar confusión, inseguridad y momentos de quiebre que me llevaron a entender cómo funciona la mente, el sistema nervioso y la identidad emocional.\n\nMi trabajo integra neurociencia aplicada, coaching práctico y entrenamiento emocional, con un enfoque claro: ayudar a las personas a recuperar calma, claridad y seguridad desde adentro, de forma consciente y sostenible.\n\nHoy comparto estas herramientas con quienes sienten que saben mucho, pero no logran sostenerse emocionalmente ni avanzar con firmeza en su vida.",
      imageSrc: "/autor.jpeg",
    }
  };

  const handlePurchase = () => {
    trackPixelEvent('InitiateCheckout', {
      content_name: 'Cómo despertar tu confianza - A Paso Firme',
      value: 11.99,
      currency: 'USD',
    });
    window.open(content.solution.ctaUrl, '_blank');
  };

  return (
    <LandingTemplate onNavigate={onNavigate}>
      <HeroSection 
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        ctaText={content.hero.ctaText}
        videoUrl={content.hero.videoUrl}
        onCtaClick={handlePurchase}
      />
      
      <ProblemSection />
      
      <InsightSection />
      
      <SolutionSection 
        teaching={content.solution.teaching}
        benefits={content.solution.benefits}
        ctaUrl={content.solution.ctaUrl}
        onCtaClick={handlePurchase}
      />
      
      <TestimonialsSection />
      
      <BioSection 
        name={content.author.name}
        role={content.author.role}
        bio={content.author.bio}
        imageSrc={content.author.imageSrc}
      />

      <FinalCTA 
        ctaUrl={content.solution.ctaUrl}
        onCtaClick={handlePurchase}
      />
    </LandingTemplate>
  );
};

export default LandingPage;
