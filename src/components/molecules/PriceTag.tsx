import React from 'react';
import Typography from '../atoms/Typography';
import { cn } from '../../utils/cn';

interface PriceTagProps {
  price: string;
  currency?: string;
  className?: string;
}

const PriceTag = ({ price, currency = 'USD', className }: PriceTagProps) => {
  return (
    <div className={cn("flex flex-col border-l-4 border-[#FF4D00] pl-8", className)}>
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <Typography variant="caption" className="opacity-60">Inversión única</Typography>
        <span className="bg-[#FF4D00] text-brand-sand text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider animate-pulse">
          Precio de lanzamiento
        </span>
      </div>
      <div className="flex items-baseline gap-4 text-[#FF4D00]">
        <Typography variant="giant" as="span" className="text-7xl md:text-8xl font-serif text-current">
          ${price}
        </Typography>
        <Typography variant="caption" className="text-lg font-bold opacity-60 tracking-normal">{currency}</Typography>
      </div>
    </div>
  );
};

export default PriceTag;
