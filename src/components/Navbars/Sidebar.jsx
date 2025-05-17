import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Home,
  User,
  Package,
  Calendar,
  Bell,
  GitPullRequestCreateIcon,
  LogOut,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip"; // optional for hover tips
import { toggleSidebar } from "../../store/sidebarSlice";

const menuItems = [
  { name: "Dashboard", icon: Home, path: "/dashboard" },
  { name: "Client Orders", icon: Package, path: "/clientdata" },
  { name: "Edit Shop Data", icon: User, path: "/editshop" },
  { name: "Notifications", icon: Bell, path: "/notifications" },
  { name: "Privacy Policy", icon: Calendar, path: "/privacy-policy" }, // You can use a better icon if you want
];

const Sidebar = () => {
  const collapsed = useSelector((state) => state.sidebar.collapsed);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleToggle = () => dispatch(toggleSidebar());

  return (
    <div
      className={`h-screen bg-white shadow-xl -r transition-all duration-300 ease-in-out ${
        collapsed ? "w-20" : "w-64"
      } fixed top-0 left-0 z-50`}
    >
      {/* Logo & Toggle */}
      <div className="flex items-center justify-between px-4 py-5 ">
        <div className="flex items-center gap-2">
          <img
            src="https://logos-download.com/wp-content/uploads/2019/06/Royal_Enfield_Logo_full-3000x3000.png"
            className="h-8 w-8"
            alt="RevoZen"
          />
          {!collapsed && (
            <span className="text-xl font-bold text-orange-600">RevoZen</span>
          )}
        </div>
        <button onClick={handleToggle} className="text-gray-500">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {collapsed ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col justify-between h-full">
        <ul className="space-y-1 mt-4">
          {menuItems.map(({ name, icon: Icon, path }) => {
            const isActive = location.pathname === path;
            return (
              <li key={name}>
                <Tooltip title={collapsed ? name : ""} placement="right">
                  <button
                    onClick={() => navigate(path)}
                    className={`flex items-center gap-4 w-full p-3 text-sm font-medium transition rounded-lg ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <Icon
                      size={20}
                      className={isActive ? "text-white" : "text-gray-500"}
                    />
                    {!collapsed && <span>{name}</span>}
                  </button>
                </Tooltip>
              </li>
            );
          })}
        </ul>

        {/* Logout */}
        <div className="p-3">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-4 w-full p-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg"
          >
            <LogOut size={20} />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
