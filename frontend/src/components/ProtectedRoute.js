import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/Auth'

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/admin/login" />
  }

  return children;
}

export default ProtectedRoute