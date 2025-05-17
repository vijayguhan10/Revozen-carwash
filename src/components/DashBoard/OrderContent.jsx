import React from "react";
import CampaignCard from "./OrderCard";
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";

const users = [
  "https://randomuser.me/api/portraits/men/1.jpg",
  "https://randomuser.me/api/portraits/women/2.jpg",
  "https://randomuser.me/api/portraits/men/3.jpg",
  "https://randomuser.me/api/portraits/women/4.jpg",
];

const campaigns = [
  {
    section: "Draft",
    count: 2,
    items: [
      {
        icon: <FaFacebook className="text-blue-600" />,
        title: "10 Simple steps to revolutionise workflows with our product",
        subtitle: "Start: Not Started",
        users,
        updated: "Apr 10, 2023",
      },
      {
        icon: <FaInstagram className="text-pink-500" />,
        title: "Beyond Boundaries: Explore our new product",
        subtitle: "Start: Not Started",
        users,
        updated: "Apr 10, 2023",
      },
    ],
  },
  {
    section: "In Progress",
    count: 2,
    items: [
      {
        icon: <FaGoogle className="text-yellow-500" />,
        title: "Boost your performance: start using our amazing product",
        subtitle: "",
        users,
        start: "Jun 1, 2023",
        end: "Aug 1, 2023",
        updated: "July 10, 2023",
      },
      {
        icon: <FaFacebook className="text-blue-600" />,
        title: "Skyrocket your productivity: our product is revealed",
        subtitle: "",
        users,
        start: "Jul 1, 2023",
        end: "Sep 30, 2023",
        updated: "Sep 30, 2023",
      },
    ],
  },
  {
    section: "Archived",
    count: 1,
    items: [
      {
        icon: <FaGoogle className="text-yellow-500" />,
        title: "The power of our product: A new era in SaaS",
        subtitle: "",
        users,
        end: "Jun 11, 2023",
        updated: "Apr 10, 2023",
        archived: true,
      },
    ],
  },
];

const RecentCampaigns = () => (
  <div>
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-xl font-bold text-gray-900">Recent campaigns</h3>
      <button className="text-blue-600 text-sm font-medium hover:underline">
        View all
      </button>
    </div>
    <div className="flex gap-6">
      {campaigns.map((section) => (
        <div key={section.section} className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-semibold">{section.section}</span>
            <span className="bg-gray-200 text-gray-700 rounded-full px-2 text-xs">
              {section.count}
            </span>
          </div>
          <div className="flex flex-col gap-4">
            {section.items.map((item, idx) => (
              <CampaignCard key={idx} {...item} />
            ))}
            {section.section === "Archived" && (
              <button className="mt-2 flex items-center gap-2 text-gray-500 hover:text-blue-600 text-sm">
                + Add campaign
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default RecentCampaigns;
