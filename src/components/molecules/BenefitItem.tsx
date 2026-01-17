import React from 'react';
import { Check } from 'lucide-react';
import Typography from '../atoms/Typography';
import Icon from '../atoms/Icon';

interface BenefitItemProps {
  text: string;
}

const BenefitItem = ({ text }: BenefitItemProps) => {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand-olive/10 text-brand-olive">
        <Icon icon={Check} size={16} />
      </div>
      <Typography variant="body" className="text-brand-dark/80">
        {text}
      </Typography>
    </div>
  );
};

export default BenefitItem;
