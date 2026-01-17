import React from 'react';
import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';

interface LandingTemplateProps {
  children: React.ReactNode;
}

const LandingTemplate = ({ children }: LandingTemplateProps) => {
  return (
    <div className="min-h-screen bg-brand-sand selection:bg-brand-olive/20 selection:text-brand-dark">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default LandingTemplate;
