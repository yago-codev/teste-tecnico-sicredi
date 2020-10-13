import React from 'react';

import { TooltipContainer } from './styles';

interface ITooltipProps {
  title: string;
  className?: string;
}

export const Tooltip: React.FC<ITooltipProps> = ({
  title,
  className,
  children,
}) => {
  return (
    <TooltipContainer className={className}>
      {children}
      <span>{title}</span>
    </TooltipContainer>
  );
};
