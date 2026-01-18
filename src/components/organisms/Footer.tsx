import React from 'react';
import Typography from '../atoms/Typography';

interface FooterProps {
  onNavigate?: (page: 'landing' | 'terms' | 'privacy') => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
  return (
    <footer className="bg-brand-dark text-brand-sand py-32 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-end mb-32">
          <div>
            <Typography variant="giant" className="text-brand-sand opacity-10 mb-8 block select-none cursor-pointer" onClick={() => onNavigate?.('landing')}>
              A PASO <br/> FIRME.
            </Typography>
            <Typography variant="h3" className="text-brand-sand font-light italic max-w-md">
              La regulación emocional no es un destino, es una práctica diaria.
            </Typography>
          </div>
          
          <div className="flex flex-col lg:items-end gap-12">
            <div className="text-left lg:text-right">
              <Typography variant="caption" className="mb-4 block text-brand-accent">Contacto</Typography>
              <Typography variant="h2" className="text-brand-sand hover:text-brand-accent transition-colors cursor-pointer">+57 321 829 8211</Typography>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-brand-sand/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <Typography variant="caption" className="text-brand-sand/40 tracking-normal">
            © {new Date().getFullYear()} Gabo Arriola. Todos los derechos reservados.
          </Typography>
          <div className="flex gap-12">
            <Typography 
              variant="caption" 
              className="text-brand-sand/40 hover:text-brand-olive transition-colors cursor-pointer"
              onClick={() => onNavigate?.('terms')}
            >
              Términos
            </Typography>
            <Typography 
              variant="caption" 
              className="text-brand-sand/40 hover:text-brand-olive transition-colors cursor-pointer"
              onClick={() => onNavigate?.('privacy')}
            >
              Privacidad
            </Typography>
          </div>
          <Typography variant="caption" className="text-brand-sand/20 lowercase tracking-normal">
            Design by ai4u.com.co
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
