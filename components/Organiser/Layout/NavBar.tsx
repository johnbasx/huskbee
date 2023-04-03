import {
  Bars4Icon,
  BellIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { Menu, Transition } from "@headlessui/react";
import React, { Dispatch, Fragment } from "react";

import { FaSearch } from "react-icons/fa";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const NavBar = ({ setSidebarOpen }: { setSidebarOpen: Dispatch<boolean> }) => {
  return (
    <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-gray-900 border-b border-gray-900">
      <button
        type="button"
        className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900 lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <Bars4Icon className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="flex-1 px-4 flex justify-between bg-gray-900">
        <div className="flex-1 flex">
          <form className="w-full flex lg:ml-0" action="#" method="GET">
            <label htmlFor="search-field" className="sr-only">
              Search
            </label>
            <div className="relative w-full text-gray-400 focus-within:text-gray-600">
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                <FaSearch className="h-5 w-5" aria-hidden="true" />
              </div>
              <input
                id="search-field"
                className=" bg-gray-900 block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-50 placeholder-gray-400 focus:outline-none focus:placeholder-gray-900 focus:ring-0 focus:border-transparent sm:text-sm"
                placeholder="Search"
                type="search"
                name="search"
              />
            </div>
          </form>
        </div>
        <div className="ml-4 flex items-center md:ml-6">
          <button
            type="button"
            className="bg-gray-900 p-1 rounded-full text-gray-200 hover:text-gray-100"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Profile dropdown */}
          <Menu as="div" className="ml-3 relative">
            <div>
              <Menu.Button className="max-w-xs bg-gray-900 rounded-full flex items-center text-sm focus:outline-none  lg:p-2 lg:rounded-md ">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <span className="hidden ml-3 text-gray-200 text-sm font-medium lg:block">
                  <span className="sr-only">Open user menu for </span>Emilia
                  Birch
                </span>
                <ChevronDownIcon
                  className="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-200 lg:block"
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
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-900" : "",
                        "block px-4 py-2 text-sm text-gray-100"
                      )}
                    >
                      Your Profile
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-900" : "",
                        "block px-4 py-2 text-sm text-gray-100"
                      )}
                    >
                      Settings
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-900" : "",
                        "block px-4 py-2 text-sm text-gray-100"
                      )}
                    >
                      Logout
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        {/* <div className="ml-4 flex items-center lg:ml-6">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          >
            Create
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default NavBar;
