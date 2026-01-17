import React from 'react';
import Typography from '../atoms/Typography';

const Footer = () => {
  return (
    <footer className="bg-brand-arena py-20 px-6 border-t border-brand-gray-light/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <Typography variant="nav" className="text-xl font-serif mb-6 block">
              A PASO FIRME
            </Typography>
            <Typography variant="body" className="max-w-xs text-brand-gray-warm">
              Recupera tu calma, claridad y confianza emocional con base en neurociencia.
            </Typography>
          </div>
          
          <div className="grid grid-cols-2 gap-12">
            <div>
              <Typography variant="caption" className="mb-4 block">Legal</Typography>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-brand-olive transition-colors">Términos y Condiciones</a></li>
                <li><a href="#" className="text-sm hover:text-brand-olive transition-colors">Privacidad</a></li>
              </ul>
            </div>
            <div>
              <Typography variant="caption" className="mb-4 block">Contacto</Typography>
              <Typography variant="body" className="text-sm">hola@ebookapasofirme.com</Typography>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-brand-gray-light/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <Typography variant="caption">
            © {new Date().getFullYear()} Gabo Arriola. Todos los derechos reservados.
          </Typography>
          <Typography variant="caption" className="lowercase">
            Design inspired by Won J You
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
