import React from 'react';

export interface DataTableProps {
  children?: React.ReactNode;
  className?: string;
}

export const DataTable: React.FC<DataTableProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

