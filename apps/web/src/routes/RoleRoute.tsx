import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

export const RoleRoute: React.FC<{ allowedRoles: string[] }> = ({ allowedRoles }) => {
  const { user } = useAuthStore();
  const userRoles = user?.activeTenant?.roles || [];
  const hasRole = allowedRoles.some((r) => userRoles.includes(r));
  return hasRole ? <Outlet /> : <Navigate to="/unauthorized" replace />;
};
