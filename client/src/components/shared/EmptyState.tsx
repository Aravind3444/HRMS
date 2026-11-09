import React from 'react';

export const EmptyState: React.FC<{ message?: string }> = ({ message }) => (
  <div className="p-4 text-center">
    <p>{message || 'EmptyState'}</p>
  </div>
);

