import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
const data1 = [
  { uv: 10 },
  { uv: 12 },
  { uv: 14 },
  { uv: 18 },
  { uv: 22 },
  { uv: 22 },
];
const data2 = [
  { uv: 300 },
  { uv: 320 },
  { uv: 310 },
  { uv: 330 },
  { uv: 320 },
  { uv: 320 },
];
const data3 = [
  { uv: 900 },
  { uv: 950 },
  { uv: 1000 },
  { uv: 1100 },
  { uv: 1080 },
  { uv: 1080 },
];

const StatCard = ({ title, value, change, positive, chartData, color }) => (
  <div className="bg-white rounded-xl shadow p-5 flex-1 min-w-[220px]">
    <div className="flex justify-between items-center">
      <div>
        <div className="text-xs text-gray-500">{title}</div>
        <div className="text-xl font-bold">{value}</div>
        <div
          className={`text-xs flex items-center gap-1 ${
            positive ? "text-green-600" : "text-orange-600"
          }`}
        >
          {positive ? "▲" : "▼"} {change}
          <span className="text-gray-400 ml-1">compared to last week</span>
        </div>
      </div>
      <div className="w-20 h-10">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <Line
              type="monotone"
              dataKey="uv"
              stroke={color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

const RevenueStats = () => (
  <div className="flex gap-4 mb-8">
    <StatCard
      title="New subscriptions"
      value="22"
      change="15%"
      positive
      chartData={data1}
      color="#a855f7"
    />
    <StatCard
      title="New orders"
      value="320"
      change="4%"
      positive={false}
      chartData={data2}
      color="#f59e42"
    />
    <StatCard
      title="Avg. order revenue"
      value="$1,080"
      change="8%"
      positive
      chartData={data3}
      color="#a855f7"
    />
  </div>
);

export default RevenueStats;
