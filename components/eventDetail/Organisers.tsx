import { CurrencyRupeeIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

import React from "react";

const policies = [
  {
    name: "International delivery",
    icon: GlobeAltIcon,
    description: "Get your order in 2 years",
  },
  {
    name: "Loyalty rewards",
    icon: CurrencyRupeeIcon,
    description: "Don't look at other tees",
  },
];

const Organisers = () => {
  return (
    <div className="border-t border-gray-200 mt-10 pt-10">
      <h3 className="text-sm font-medium">Organised by</h3>
      <section aria-labelledby="policies-heading" className="mt-10">
        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {policies.map((policy) => (
            <div
              key={policy.name}
              className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center"
            >
              <dt>
                <policy.icon
                  className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <span className="mt-4 text-sm font-medium text-gray-900">
                  {policy.name}
                </span>
              </dt>
              <dd className="mt-1 text-sm text-gray-500">
                {policy.description}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
};

export default Organisers;
