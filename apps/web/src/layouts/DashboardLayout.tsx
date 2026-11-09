import React from 'react';
import { Outlet } from 'react-router-dom';

export const DashboardLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};
