import React, { useState } from "react";

import { BankDetailProps } from "../../../pages/organiser/profile";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import { ProfileContent } from "../../../pages/organiser/profile";
import { Tab } from "@headlessui/react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
const BankDetail = ({ bankDetail }: { bankDetail: BankDetailProps[] }) => {
  return (
    <div className="w-full max-w-full px-2 py-4 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-transparent p-1">
          {bankDetail.map((detail) => (
            <Tab
              key={detail.id}
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-lg font-medium leading-5 text-gray-50",
                  "ring-white focus:outline-none",
                  selected
                    ? "border-b-2 border-white  shadow"
                    : "text-gray50 hover:bg-white/[0.12] "
                )
              }
            >
              <span className="flex justify-center gap-x-2">
                {detail.acc_name}{" "}
                {detail.default && (
                  <CheckBadgeIcon className="h-6 w-6 text-green-400" />
                )}
              </span>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {bankDetail.map((detail, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-transparent p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <ProfileContent
                label="Account name"
                value={detail.acc_name}
                link="sample-link"
              />
              <ProfileContent
                label="Acc number"
                value={detail.acc_number}
                link="sample-link"
              />

              <ProfileContent
                label="IFSC"
                value={detail.ifsc}
                link="sample-link"
              />
              <ProfileContent
                label="Branch"
                value={detail.branch}
                link="sample-link"
              />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default BankDetail;
