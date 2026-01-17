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
    <div className={cn("flex flex-col", className)}>
      <Typography variant="caption" className="mb-1">Inversión única</Typography>
      <div className="flex items-baseline gap-1">
        <Typography variant="h2" as="span" className="text-5xl font-serif">
          ${price}
        </Typography>
        <Typography variant="caption" className="text-sm">{currency}</Typography>
      </div>
    </div>
  );
};

export default PriceTag;
