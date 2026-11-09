import React from 'react';

export const DeniedState: React.FC<{ message?: string }> = ({ message }) => (
  <div className="p-4 text-center">
    <p>{message || 'DeniedState'}</p>
  </div>
);

