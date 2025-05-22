import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import DashBoard from "../components/DashBoard/DashBoard";
import ClientData from "../components/Clients/ClientData";
import EditShop from "../components/Editshop/Editshops";
import Login from "../components/Authentication/Login";
import ProtectedRoute from "./ProtectedRoute";

const InitialRouter = () => {
  const sidebarCollapsed = useSelector((state) => state.sidebar.collapsed);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashBoard sidebarCollapsed={sidebarCollapsed} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/clientdata"
        element={
          <ProtectedRoute>
            <ClientData sidebarCollapsed={sidebarCollapsed} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/editshop"
        element={
          <ProtectedRoute>
            <EditShop sidebarCollapsed={sidebarCollapsed} />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default InitialRouter;
