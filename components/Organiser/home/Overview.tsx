import React from "react";
import { ScaleIcon } from "@heroicons/react/24/solid";

const data = [
  { name: "Account balance", href: "#", icon: ScaleIcon, amount: "$30,659.45" },
  { name: "Account balance", href: "#", icon: ScaleIcon, amount: "$30,659.45" },
  { name: "Account balance", href: "#", icon: ScaleIcon, amount: "$30,659.45" },
];
const Overview = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* <h2 className="text-lg leading-6 font-medium text-gray-900">Overview</h2> */}
      <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card */}
        {data.map((item) => (
          <div
            key={item.name}
            className="overflow-hidden rounded-lg shadow-lg bg-gray-800/50 border border-gray-400 backdrop-blur-lg"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <item.icon
                    className="h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-100 truncate">
                      {item.name}
                    </dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-50">
                        {item.amount}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className=" px-5 py-3">
              <div className="text-sm">
                <a
                  href={item.href}
                  className="font-medium text-blue-300 hover:text-blue-300"
                >
                  View all
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
