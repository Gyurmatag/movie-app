import React from 'react';
import { Navigate } from 'react-router';
import { auth } from '../utils/auth';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = auth.isAuthenticated();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
} 