import React from 'react';

export const ConflictState: React.FC<{ message?: string }> = ({ message }) => (
  <div className="p-4 text-center">
    <p>{message || 'ConflictState'}</p>
  </div>
);

