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
    <div className={cn("flex flex-col border-l-4 border-brand-olive pl-8", className)}>
      <Typography variant="caption" className="mb-4 opacity-60">Inversión única</Typography>
      <div className="flex items-baseline gap-4">
        <Typography variant="giant" as="span" className="text-7xl md:text-8xl font-serif text-current">
          ${price}
        </Typography>
        <Typography variant="caption" className="text-lg font-bold opacity-60 tracking-normal">{currency}</Typography>
      </div>
    </div>
  );
};

export default PriceTag;
