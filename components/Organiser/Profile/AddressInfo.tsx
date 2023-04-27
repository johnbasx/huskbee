import { AddressProps } from "../../../pages/organiser/profile";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import { ProfileContent } from "../../../pages/organiser/profile";
import React from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const AddressInfo = ({ addresses }: { addresses: AddressProps[] }) => {
  return (
    <div className="w-full max-w-full px-2 py-4 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-transparent p-1">
          {addresses.map((detail) => (
            <Tab
              key={detail.id}
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm font-medium leading-5 text-gray-50",
                  "ring-white focus:outline-none",
                  selected
                    ? "border-b-2 border-white  shadow"
                    : "text-gray50 hover:bg-white/[0.12] "
                )
              }
            >
              <span className="flex justify-center gap-x-2">
                {detail.name}{" "}
                {detail.default && (
                  <CheckBadgeIcon className="h-6 w-6 text-green-400" />
                )}
              </span>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {addresses.map((detail, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames("rounded-xl bg-transparent p-3")}
            >
              <ProfileContent
                label="Address"
                value={detail.name}
                link="sample-link"
              />

              <ProfileContent
                label="Landmark"
                value={detail.land_mark}
                link="sample-link"
              />
              <ProfileContent
                label="Pin"
                value={detail.pin_code}
                link="sample-link"
              />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default AddressInfo;
