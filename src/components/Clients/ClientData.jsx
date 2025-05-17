import React from "react";
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

const orders = [
  {
    id: "#1002",
    date: "11 Feb, 2024",
    customer: "Wade Warren",
    payment: "Pending",
    paymentType: "Online Payment",
    total: "$20.00",
    items: 2,
    status: "Rejected",
  },
  {
    id: "#1004",
    date: "13 Feb, 2024",
    customer: "Esther Howard",
    payment: "Completed",
    paymentType: "COD",
    total: "$22.00",
    items: 3,
    status: "Completed",
  },
  {
    id: "#1007",
    date: "15 Feb, 2024",
    customer: "Jenny Wilson",
    payment: "Pending",
    paymentType: "Online Payment",
    total: "$25.00",
    items: 1,
    status: "Rejected",
  },
  {
    id: "#1009",
    date: "17 Feb, 2024",
    customer: "Guy Hawkins",
    payment: "Completed",
    paymentType: "COD",
    total: "$27.00",
    items: 5,
    status: "Completed",
  },
  {
    id: "#1011",
    date: "19 Feb, 2024",
    customer: "Jacob Jones",
    payment: "Pending",
    paymentType: "Online Payment",
    total: "$32.00",
    items: 4,
    status: "Rejected",
  },
  {
    id: "#1013",
    date: "21 Feb, 2024",
    customer: "Kristin Watson",
    payment: "Completed",
    paymentType: "COD",
    total: "$25.00",
    items: 3,
    status: "Completed",
  },
  {
    id: "#1015",
    date: "23 Feb, 2024",
    customer: "Albert Flores",
    payment: "Pending",
    paymentType: "Online Payment",
    total: "$28.00",
    items: 2,
    status: "Pending",
  },
  {
    id: "#1018",
    date: "25 Feb, 2024",
    customer: "Eleanor Pena",
    payment: "Completed",
    paymentType: "COD",
    total: "$35.00",
    items: 3,
    status: "Completed",
  },
  {
    id: "#1019",
    date: "27 Feb, 2024",
    customer: "Theresa Webb",
    payment: "Pending",
    paymentType: "Online Payment",
    total: "$20.00",
    items: 2,
    status: "Pending",
  },
];

const statusColor = {
  Completed: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Rejected: "bg-red-100 text-red-700",
};

const paymentColor = {
  "Online Payment": "bg-blue-100 text-blue-700",
  COD: "bg-gray-100 text-gray-700",
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

const ClientData = ({ sidebarCollapsed }) => (
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
      {["All", "Unfulfilled", "Unpaid", "Open", "Closed", "Add"].map((tab) => (
        <button
          key={tab}
          className="px-3 py-2 text-sm font-medium text-gray-700 border-b-2 border-transparent hover:border-purple-500 hover:text-purple-600 transition"
        >
          {tab}
        </button>
      ))}
    </div>

    {/* Table */}
    <div className="overflow-x-auto bg-white rounded-xl shadow">
      <table className="min-w-full text-left">
        <thead>
          <tr className="text-xs text-gray-500 border-b">
            <th className="py-3 px-2">
              <input type="checkbox" />
            </th>
            <th className="py-3 px-2">Order</th>
            <th className="py-3 px-2">Date</th>
            <th className="py-3 px-2">Customer</th>
            <th className="py-3 px-2">Payment</th>
            <th className="py-3 px-2">Payment Type</th>
            <th className="py-3 px-2">Total</th>
            <th className="py-3 px-2">Items</th>
            <th className="py-3 px-2">Status</th>
            <th className="py-3 px-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, idx) => (
            <tr key={order.id} className="border-b hover:bg-gray-50">
              <td className="py-2 px-2">
                <input type="checkbox" />
              </td>
              <td className="py-2 px-2 font-semibold text-gray-700">
                {order.id}
              </td>
              <td className="py-2 px-2">{order.date}</td>
              <td className="py-2 px-2">{order.customer}</td>
              <td className="py-2 px-2">
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    order.payment === "Completed"
                      ? "bg-green-100 text-green-700"
                      : order.payment === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {order.payment}
                </span>
              </td>
              <td className="py-2 px-2">
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    paymentColor[order.paymentType]
                  }`}
                >
                  {order.paymentType}
                </span>
              </td>
              <td className="py-2 px-2">{order.total}</td>
              <td className="py-2 px-2">{order.items} items</td>
              <td className="py-2 px-2">
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    statusColor[order.status]
                  }`}
                >
                  {order.status}
                </span>
              </td>
              <td className="py-2 px-2 flex gap-2">
                <button className="text-gray-400 hover:text-blue-600">
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15 12H9m12 0A9 9 0 1 1 3 12a9 9 0 0 1 18 0Z" />
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-red-600">
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default ClientData;
