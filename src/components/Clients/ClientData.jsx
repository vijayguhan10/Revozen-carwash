import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { FaPlus, FaEllipsisV, FaFileExport } from "react-icons/fa";

const stats = [
  {
    label: "Total Orders",
    value: 21,
    change: "+25.2%",
    chart: [
      { x: 1, y: 2 },
      { x: 2, y: 4 },
      { x: 3, y: 6 },
      { x: 4, y: 8 },
      { x: 5, y: 7 },
      { x: 6, y: 9 },
    ],
    color: "#6366f1",
    gradient: "ordersGradient",
  },
  {
    label: "Order items over time",
    value: 15,
    change: "-18.2%",
    chart: [
      { x: 1, y: 8 },
      { x: 2, y: 7 },
      { x: 3, y: 6 },
      { x: 4, y: 5 },
      { x: 5, y: 6 },
      { x: 6, y: 5 },
    ],
    color: "#f59e42",
    gradient: "itemsGradient",
  },
  {
    label: "Returns Orders",
    value: 0,
    change: "-1.2%",
    chart: [
      { x: 1, y: 1 },
      { x: 2, y: 1 },
      { x: 3, y: 0 },
      { x: 4, y: 0 },
      { x: 5, y: 0 },
      { x: 6, y: 0 },
    ],
    color: "#ef4444",
    gradient: "returnsGradient",
  },
  {
    label: "Fulfilled orders over time",
    value: 12,
    change: "-12.2%",
    chart: [
      { x: 1, y: 2 },
      { x: 2, y: 3 },
      { x: 3, y: 4 },
      { x: 4, y: 6 },
      { x: 5, y: 8 },
      { x: 6, y: 12 },
    ],
    color: "#22c55e",
    gradient: "fulfilledGradient",
  },
];

const ClientData = ({ sidebarCollapsed }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/carwash/getall`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setOrders(response.data.orders ?? []);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <div className="p-8">Loading orders...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>;

  return (
    <div
      className={`p-8 bg-gray-50 min-h-screen transition-all duration-300 ${
        sidebarCollapsed ? "ml-20" : "ml-64"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Orders</h2>
          <span className="text-xs text-gray-500">Jan 1 - Jan 30, 2024</span>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 border px-4 py-2 rounded text-gray-700 bg-white hover:bg-gray-50 text-sm">
            <FaFileExport className="text-base" />
            Export
          </button>
          <button className="flex items-center gap-2 border px-4 py-2 rounded text-gray-700 bg-white hover:bg-gray-50 text-sm">
            <FaEllipsisV className="text-base" />
            More actions
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded text-white bg-purple-600 hover:bg-purple-700 text-sm font-semibold">
            <FaPlus className="text-base" />
            Create order
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="flex gap-4 mb-8">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-4 border-b">
        {["All", "Unfulfilled", "Unpaid", "Open", "Closed", "Add"].map(
          (tab) => (
            <button
              key={tab}
              className="px-3 py-2 text-sm font-medium text-gray-700 border-b-2 border-transparent hover:border-purple-500 hover:text-purple-600 transition"
            >
              {tab}
            </button>
          )
        )}
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="min-w-full text-left">
          <thead>
            <tr className="text-xs text-gray-500 border-b">
              <th className="py-3 px-4">ID</th>
              <th className="py-3 px-4">Appointment Date</th>
              <th className="py-3 px-4">Appointment Time</th>
              <th className="py-3 px-4">Customer Name</th>
              <th className="py-3 px-4">Customer Email</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{order._id}</td>
                <td className="py-2 px-4">
                  {new Date(order.appointmentDate).toLocaleDateString()}
                </td>
                <td className="py-2 px-4">{order.appointmentTime}</td>
                <td className="py-2 px-4">{order.orderId?.name}</td>
                <td className="py-2 px-4">{order.orderId?.email}</td>
                <td className="py-2 px-4 capitalize">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const StatCard = ({ label, value, change, chart, color, gradient }) => (
  <div className="bg-white rounded-xl shadow p-4 flex-1 min-w-[200px]">
    <div className="flex justify-between items-center">
      <div>
        <div className="text-xs text-gray-500">{label}</div>
        <div className="text-2xl font-bold">{value}</div>
        <div className="text-xs text-gray-400">{change} last week</div>
      </div>
      <div className="w-24 h-12">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chart}>
            <defs>
              <linearGradient id="ordersGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#6366f1" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="itemsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f59e42" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#f59e42" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="returnsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ef4444" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#ef4444" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient
                id="fulfilledGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#22c55e" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#22c55e" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              horizontal={false}
            />
            <XAxis dataKey="x" hide />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="y"
              stroke={`url(#${gradient})`}
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

export default ClientData;
