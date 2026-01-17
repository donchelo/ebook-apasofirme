import React from 'react';
import { MessageCircle } from 'lucide-react';
import { cn } from '../../utils/cn';

const WhatsAppButton = () => {
  const phoneNumber = '573218298211';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-8 right-8 z-50",
        "flex items-center justify-center w-14 h-14",
        "bg-brand-olive text-brand-sand rounded-full shadow-2xl",
        "transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 active:scale-95",
        "hover:bg-brand-dark group"
      )}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-full mr-4 px-3 py-1 bg-brand-dark text-brand-sand text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
        ¿Cómo puedo ayudarte?
      </span>
    </a>
  );
};

export default WhatsAppButton;
