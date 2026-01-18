import React from 'react';
import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';
import WhatsAppButton from '../atoms/WhatsAppButton';

interface LandingTemplateProps {
  children: React.ReactNode;
  onNavigate?: (page: 'landing' | 'terms' | 'privacy') => void;
}

const LandingTemplate = ({ children, onNavigate }: LandingTemplateProps) => {
  return (
    <div className="min-h-screen bg-brand-sand selection:bg-brand-olive/20 selection:text-brand-dark">
      <Navbar onNavigate={onNavigate} />
      <main>
        {children}
      </main>
      <Footer onNavigate={onNavigate} />
      <WhatsAppButton />
    </div>
  );
};

export default LandingTemplate;
