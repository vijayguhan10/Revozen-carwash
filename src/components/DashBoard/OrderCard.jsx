import React from "react";

const OrderCard = ({
  icon,
  title,
  subtitle,
  status,
  users,
  start,
  end,
  updated,
  archived,
}) => (
  <div
    className={`bg-white rounded-xl shadow p-4 flex flex-col min-w-[250px] ${
      archived ? "opacity-70" : ""
    }`}
  >
    <div className="flex items-center gap-2 mb-2">
      <span className="text-2xl">{icon}</span>
      <span className="font-semibold">{title}</span>
    </div>
    <div className="text-xs text-gray-500 mb-2">{subtitle}</div>
    <div className="flex items-center gap-1 mb-2">
      {users.map((u, i) => (
        <img
          key={i}
          src={u}
          alt=""
          className="w-6 h-6 rounded-full border-2 border-white -ml-2 first:ml-0"
        />
      ))}
    </div>
    <div className="text-xs text-gray-400 mb-1">
      {start && <span>Start: {start} </span>}
      {end && <span>Ends: {end}</span>}
    </div>
    <div className="text-xs text-gray-400">Last updated: {updated}</div>
  </div>
);

export default OrderCard;
