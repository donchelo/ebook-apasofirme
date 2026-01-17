import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

interface IconProps {
  icon: LucideIcon;
  size?: number | string;
  className?: string;
}

const Icon = ({ icon: IconComponent, size = 20, className }: IconProps) => {
  return <IconComponent size={size} className={cn('flex-shrink-0', className)} />;
};

export default Icon;
