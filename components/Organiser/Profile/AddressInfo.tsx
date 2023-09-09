import React, { ReactNode } from "react";

import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import { OrganiserProfileStore } from "@store/organiser-profile-store";
import { ProfileContent } from "../../../pages/organiser/profile";
import { Tab } from "@headlessui/react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const AddressInfo = () => {
  const { addresses } = OrganiserProfileStore();

  return (
    <Wrapper>
      {addresses.map((address, idx) => (
        <Tab.Panel
          key={idx}
          className={classNames("rounded-xl bg-transparent p-3")}
        >
          <ProfileContent
            lookUp={address.id}
            name="name"
            label="Address"
            value={address.name}
            link="update-organiser-address/"
          />

          <ProfileContent
            lookUp={address.id}
            name="land_mark"
            label="Landmark"
            value={address.land_mark}
            link="update-organiser-address/"
          />
          <ProfileContent
            lookUp={address.id}
            name="pin_code"
            label="Pin"
            value={address.pin_code}
            link="update-organiser-address/"
          />
        </Tab.Panel>
      ))}
    </Wrapper>
  );
};

export default AddressInfo;

const Wrapper = ({ children }: { children: ReactNode }) => {
  const { addresses } = OrganiserProfileStore();

  return (
    <div className="w-full max-w-full px-2 py-4 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-transparent p-1">
          {addresses.map((address) => (
            <Tab
              key={address.id}
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
                {address.name}{" "}
                {address.default && (
                  <CheckBadgeIcon className="h-6 w-6 text-green-400" />
                )}
              </span>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">{children}</Tab.Panels>
      </Tab.Group>
    </div>
  );
};
