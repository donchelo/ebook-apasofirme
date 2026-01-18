import React, { useState } from 'react';
import Typography from '../atoms/Typography';
import { cn } from '../../utils/cn';

interface NavbarProps {
  onNavigate?: (page: 'landing' | 'terms' | 'privacy') => void;
}

const Navbar = ({ onNavigate }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { label: 'Inicio', href: '#hero', action: () => onNavigate?.('landing') },
    { label: 'El Problema', href: '#problema', action: () => onNavigate?.('landing') },
    { label: 'La Solución', href: '#solucion', action: () => onNavigate?.('landing') },
    { label: 'Sobre Gabo', href: '#autor', action: () => onNavigate?.('landing') },
  ];

  const handleLogoClick = () => {
    onNavigate?.('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-sand/90 backdrop-blur-md border-b border-brand-dark/10">
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        <Typography 
          variant="nav" 
          className="text-2xl font-bold tracking-widest font-serif text-brand-dark group cursor-pointer"
          onClick={handleLogoClick}
        >
          GABO <span className="text-[#FF4D00]">ARRIOLA</span>
        </Typography>
        
        <div className="hidden md:flex gap-10">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              onClick={(e) => {
                item.action();
                if (window.location.hash === item.href) {
                  setIsOpen(false);
                }
              }}
              className="text-brand-dark/60 hover:text-[#FF4D00] transition-colors duration-300"
            >
              <Typography variant="nav">{item.label}</Typography>
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1.5 p-2 z-50 relative"
          >
            <div className={cn("h-0.5 w-6 bg-brand-dark transition-all", isOpen && "rotate-45 translate-y-2")}></div>
            <div className={cn("h-0.5 w-6 bg-brand-dark transition-all", isOpen && "opacity-0")}></div>
            <div className={cn("h-0.5 w-6 bg-brand-dark transition-all", isOpen && "-rotate-45 -translate-y-2")}></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 bg-brand-sand z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        {navItems.map((item) => (
          <a 
            key={item.label} 
            href={item.href} 
            onClick={() => {
              item.action();
              setIsOpen(false);
            }}
            className="text-brand-dark"
          >
            <Typography variant="h3">{item.label}</Typography>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
