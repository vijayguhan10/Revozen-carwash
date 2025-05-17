import React from "react";

const RevenueHeader = () => (
  <div className="flex justify-between items-center mb-6">
    <div>
      <h2 className="text-3xl font-bold text-gray-900">Your total revenue</h2>
      <p className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-yellow-400 text-transparent bg-clip-text mt-1">
        $90,239.00
      </p>
    </div>
    <div className="flex gap-2">
      <button className="flex items-center gap-2 border px-4 py-2 rounded text-gray-700 bg-white hover:bg-gray-50 text-sm">
        <span className="material-icons text-base">calendar_today</span>
        Select Dates
      </button>
      <button className="flex items-center gap-2 border px-4 py-2 rounded text-gray-700 bg-white hover:bg-gray-50 text-sm">
        <span className="material-icons text-base">filter_list</span>
        Filter
      </button>
    </div>
  </div>
);

export default RevenueHeader;
