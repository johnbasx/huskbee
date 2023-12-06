import {
  BankDetailProps,
  ProfileContent,
} from "../../../pages/organiser/profile";
import React, { ReactNode } from "react";

import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import { Tab } from "@headlessui/react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
const BankDetail = ({ BankAccounts }: { BankAccounts: BankDetailProps[] }) => {
  return (
    <Wrapper BankAccounts={BankAccounts}>
      {BankAccounts.length > 0 ? (
        BankAccounts.map((detail, idx) => (
          <Tab.Panel
            key={idx}
            className={classNames(
              "rounded-xl bg-transparent p-3",
              "ring-white ring-opacity-60 ring-offset-2  focus:outline-none "
            )}
          >
            <ProfileContent
              lookUp={detail.id}
              name="acc_name"
              label="Account name"
              value={detail.acc_name}
              link="sample-link"
            />
            <ProfileContent
              lookUp={detail.id}
              name="acc_number"
              label="Acc number"
              value={detail.acc_number}
              link="sample-link"
            />
            <ProfileContent
              lookUp={detail.id}
              name="ifsc"
              label="IFSC"
              value={detail.ifsc}
              link="sample-link"
            />
            <ProfileContent
              lookUp={detail.id}
              name="branch"
              label="Branch"
              value={detail.branch}
              link="sample-link"
            />
          </Tab.Panel>
        ))
      ) : (
        <span className="text-black">No Bank account added</span>
      )}
    </Wrapper>
  );
};

export default BankDetail;

const Wrapper = ({
  children,
  BankAccounts,
}: {
  children: ReactNode;
  BankAccounts: BankDetailProps[];
}) => {
  return (
    <div className="w-full max-w-full px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-transparent p-1">
          {BankAccounts.map((detail) => (
            <Tab
              key={detail.id}
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm font-medium leading-5 text-gray-50",
                  "ring-white focus:outline-none",
                  selected
                    ? "border-b-2 border-b-blue-400 border-white shadow"
                    : "text-gray-700 hover:bg-white/[0.12] border-b-2 border-b-white"
                )
              }
            >
              <span className="flex text-xl justify-center gap-x-2 text-black">
                {detail.acc_name}{" "}
                {detail.default && (
                  <CheckBadgeIcon className="h-7 w-7 text-green-500 font-bold" />
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
