import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";

const ProtectedRoute = () => {
  const isAuthenticated = true; // Replace with your auth check logic

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  );
};

export default ProtectedRoute;
