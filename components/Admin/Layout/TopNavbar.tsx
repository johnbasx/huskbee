import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
const TopNavbar = ({ pageTitle }: { pageTitle: string }) => {
  const [user, setUser] = useState(localStorage.getItem("off_username"));
  return (
    <div className="hidden border-b border-gray-200 px-4 py-2 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 shadow-lg">
      <div className="flex-1 min-w-0">
        {/* <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate"> */}
        <h1 className="text-xl font-medium sm:text-lg text-gray-700">
          {pageTitle}
        </h1>
      </div>
      <div className="mt-4 flex sm:mt-0 sm:ml-4">
        <Menu as="div" className="ml-3 relative">
          <div>
            <Menu.Button className="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none  lg:p-2 lg:rounded-lg border">
              <img
                className="h-7 w-9 rounded-full"
                src="/logo/axewhy-colorful-logo.png"
                alt="Company logo"
              />
              <span className="hidden ml-3 text-gray-700 text-sm font-medium lg:block capitalize">
                <span className="sr-only">Open user menu for </span>
                {user}
              </span>
              <ChevronDownIcon
                className="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-600 lg:block"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <ProfileDropDownList />
        </Menu>
      </div>
    </div>
  );
};

export default TopNavbar;

export const ProfileDropDownList = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      const response = await axios.post("/api/office-admin-logout");
      //   console.log("successfully logout");
      router.push("/admin/login");
    } catch (e: any) {
      console.log(e);
    }
    console.log("logout");
  };

  return (
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
        <Menu.Item>
          {({ active }) => (
            <Link
              href="/admin/profile"
              className={classNames(
                active ? "bg-gray-200 text-indigo-600" : "text-gray-700",
                "block px-4 py-2 text-sm cursor-pointer"
              )}
            >
              Your Profile
            </Link>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              href="#"
              className={classNames(
                active ? "bg-gray-200 text-indigo-600" : "text-gray-700",
                "block px-4 py-2 text-sm cursor-pointer"
              )}
            >
              Settings
            </a>
          )}
        </Menu.Item>
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
  );
};
