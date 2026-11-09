import React from 'react';

export const ErrorState: React.FC<{ message?: string }> = ({ message }) => (
  <div className="p-4 text-center">
    <p>{message || 'ErrorState'}</p>
  </div>
);

