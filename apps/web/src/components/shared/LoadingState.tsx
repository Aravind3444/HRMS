import React from 'react';

export const LoadingState: React.FC<{ message?: string }> = ({ message }) => (
  <div className="p-4 text-center">
    <p>{message || 'LoadingState'}</p>
  </div>
);

