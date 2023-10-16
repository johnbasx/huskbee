import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

type DropDownListItemsType = {
  name: string;
  href: string;
};
type ProfileDropDownType = {
  image: string;
  content: string | null;
  handleSignOut: () => void;
  listItems: DropDownListItemsType[];
};
export const ProfileDropDown = ({
  image,
  content,
  handleSignOut,
  listItems,
}: ProfileDropDownType) => {
  return (
    <Menu as="div" className="ml-3 relative">
      <div>
        <Menu.Button className="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none  lg:p-2 lg:rounded-lg border">
          <img
            className="h-7 w-9 rounded-full"
            src={image}
            alt="Company logo"
          />
          <span className="hidden ml-3 text-gray-700 text-sm font-medium lg:block capitalize">
            <span className="sr-only">Open user menu for </span>
            {content && content}
          </span>
          <ChevronDownIcon
            className="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-600 lg:block"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 z-10 bg-white  ring-1 ring-black ring-opacity-5 focus:outline-none ">
          {listItems.map((item) => (
            <Menu.Item key={item.name}>
              {({ active }) => (
                <Link
                  href={item.href}
                  className={classNames(
                    active ? "bg-gray-200 text-indigo-600" : "text-gray-700",
                    "block px-4 py-2 text-sm cursor-pointer"
                  )}
                >
                  {item.name}
                </Link>
              )}
            </Menu.Item>
          ))}

          <Menu.Item>
            {({ active }) => (
              <a
                onClick={() => handleSignOut()}
                className={classNames(
                  active ? "bg-gray-200 text-indigo-600" : "text-gray-700",
                  "block px-4 py-2 text-sm cursor-pointer"
                )}
              >
                Logout
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ProfileDropDown;
