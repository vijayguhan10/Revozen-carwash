import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCheck, FaTimes } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ClientData = ({ sidebarCollapsed }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    fetchOrders();
  }, []);

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
      console.log("Fetched orders:", response.data);
      setOrders(response.data.orders ?? []);
      setLoading(false);
      toast.success("Orders fetched successfully!");
    } catch (err) {
      setError(err.message);
      setLoading(false);
      toast.error("Failed to fetch orders.");
    }
  };

  const handleStatusChange = async (orderId, status) => {
    const token = localStorage.getItem("token");
    try {
      await axios.patch(
        `${import.meta.env.VITE_API_URL}/carwash/order/status`,
        { orderId, status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchOrders(); // Refresh orders after update
      toast.success(`Order status updated to ${status}!`);
    } catch (err) {
      console.error(`Error updating order status to ${status}:`, err);
      toast.error(`Failed to update order status to ${status}.`);
    }
  };

  const filteredOrders = orders.filter((order) => {
    if (activeTab === "All") return true;
    return order.status === activeTab.toLowerCase();
  });

  if (loading) return <div className="p-8">Loading orders...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>;

  return (
    <div
      className={`p-8 bg-gray-50 min-h-screen transition-all duration-300 ${
        sidebarCollapsed ? "ml-20" : "ml-64"
      }`}
    >
      <ToastContainer />
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Orders</h2>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-4 border-b">
        {["All", "Pending", "Completed", "Rejected"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-2 text-sm font-medium border-b-2 transition ${
              activeTab === tab
                ? "border-purple-500 text-purple-600"
                : "border-transparent text-gray-700 hover:border-purple-500 hover:text-purple-600"
            }`}
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
              <th className="py-3 px-4">ID</th>
              <th className="py-3 px-4">Appointment Date</th>
              <th className="py-3 px-4">Appointment Time</th>
              <th className="py-3 px-4">Customer Name</th>
              <th className="py-3 px-4">Customer Email</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length === 0 ? (
              <tr>
                <td colSpan="7" className="py-4 text-center text-gray-500">
                  No orders found in this category
                </td>
              </tr>
            ) : (
              filteredOrders.map((order) => (
                <tr key={order._id} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4">{order._id}</td>
                  <td className="py-2 px-4">
                    {new Date(order.appointmentDate).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-4">{order.appointmentTime}</td>
                  <td className="py-2 px-4">{order.orderId?.name}</td>
                  <td className="py-2 px-4">{order.orderId?.email}</td>
                  <td className="py-2 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        order.status === "completed"
                          ? "bg-green-100 text-green-700"
                          : order.status === "pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-2 px-4">
                    {activeTab === "All" && order.status === "pending" && (
                      <div className="flex gap-2">
                        <button
                          onClick={() =>
                            handleStatusChange(order._id, "completed")
                          }
                          className="bg-green-100 hover:bg-green-200 text-green-700 p-1.5 rounded"
                          title="Approve"
                        >
                          <FaCheck />
                        </button>
                        <button
                          onClick={() =>
                            handleStatusChange(order._id, "rejected")
                          }
                          className="bg-red-100 hover:bg-red-200 text-red-700 p-1.5 rounded"
                          title="Reject"
                        >
                          <FaTimes />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientData;
