import React, { Dispatch } from "react";

import { Bars4Icon } from "@heroicons/react/24/solid";
import { FaSearch } from "react-icons/fa";

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
                className=" bg-gray-900 block w-full mt-4  pl-8 pr-3 py-2 border-transparent text-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-b-2 sm:text-sm"
                placeholder="Search"
                type="search"
                name="search"
              />
            </div>
          </form>
        </div>
        <div className="ml-4 flex items-center lg:ml-6">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
