import React from 'react';

export interface StatusChipProps {
  children?: React.ReactNode;
  className?: string;
}

export const StatusChip: React.FC<StatusChipProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

