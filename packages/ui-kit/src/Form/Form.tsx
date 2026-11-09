import React from 'react';

export interface FormProps {
  children?: React.ReactNode;
  className?: string;
}

export const Form: React.FC<FormProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

