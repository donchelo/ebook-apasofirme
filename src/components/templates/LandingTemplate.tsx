import React from 'react';
import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';

interface LandingTemplateProps {
  children: React.ReactNode;
}

const LandingTemplate = ({ children }: LandingTemplateProps) => {
  return (
    <div className="min-h-screen bg-brand-arena selection:bg-brand-olive/20 selection:text-brand-blue">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default LandingTemplate;
