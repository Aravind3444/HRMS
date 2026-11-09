import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

export const PrivateRoute: React.FC = () => {
  const { user } = useAuthStore();
  return user ? <Outlet /> : <Navigate to="/auth/login" replace />;
};
