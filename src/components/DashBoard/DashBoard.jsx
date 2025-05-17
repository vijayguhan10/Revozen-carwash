import React from "react";
import RevenueHeader from "./RevenueHeader";
import RevenueStats from "./RevenueStats";
import OrderCard from "./OrderContent";

const DashBoard = ({ sidebarCollapsed }) => (
  <div
    className={`p-8 bg-gray-50 min-h-screen transition-all duration-300 ${
      sidebarCollapsed ? "ml-20" : "ml-64"
    }`}
  >
    <RevenueHeader />
    <RevenueStats />
    <OrderCard />
  </div>
);

export default DashBoard;
