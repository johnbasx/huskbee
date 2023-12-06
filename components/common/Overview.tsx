import Link from "next/link";
import React from "react";

type OverviewType = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  total: number | string;
  color: string;
  link: string;
};

const Overview = ({ icon, title, total, color, link }: OverviewType) => {
  const Icon = icon;
  return (
    <div
      className={`bg-white border border-l-[5px] ${color} shadow-md overflow-hidden rounded-lg`}
    >
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">
                {title}
              </dt>
              <dd>
                <div className="text-lg font-medium text-gray-900">{total}</div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-5 py-3">
        <div className="text-sm">
          <Link href={link}>
            <span className="font-medium text-cyan-700 hover:text-cyan-900">
              View all
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Overview;
