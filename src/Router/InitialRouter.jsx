import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
// import Login from "../components/Auth/Login";
import DashBoard from "../components/DashBoard/DashBoard";
import ClientData from "../components/Clients/ClientData";
import EditShop from "../components/Editshop/Editshops";
const InitialRouter = () => {
  const sidebarCollapsed = useSelector((state) => state.sidebar.collapsed);

  return (
    <Routes>
      {/* <Route path="/" element={<Login />} /> */}
      <Route
        path="/dashboard"
        element={<DashBoard sidebarCollapsed={sidebarCollapsed} />}
      />
      <Route
        path="/clientdata"
        element={<ClientData sidebarCollapsed={sidebarCollapsed} />}
      />
      <Route
        path="/editshop"
        element={<EditShop sidebarCollapsed={sidebarCollapsed} />}
      />
    </Routes>
  );
};

export default InitialRouter;
