import { Bars4Icon, BellIcon } from "@heroicons/react/24/solid";
import React, { Dispatch, Fragment, useState } from "react";

import { FaSearch } from "react-icons/fa";
import ProfileDropDown from "@components/common/ProfileDropDown";
import axios from "axios";
import { org_dropdown_list } from "@constants/list-items";
import { useRouter } from "next/router";

const NavBar = ({ setSidebarOpen }: { setSidebarOpen: Dispatch<boolean> }) => {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      const response = await axios.post("/api/org-logout");
      router.push("/organiser/login");
    } catch (e: any) {
      console.log(e);
    }
  };

  return (
    <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 shadow-md">
      <button
        type="button"
        className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900 lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <Bars4Icon className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="flex-1 px-4 flex justify-between bg-white">
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
                className=" bg-white block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-50 placeholder-gray-400 focus:outline-none focus:placeholder-gray-900 focus:ring-0 focus:border-transparent sm:text-sm"
                placeholder="Search"
                type="search"
                name="search"
              />
            </div>
          </form>
        </div>
        <div className="ml-4 flex items-center md:ml-6">
          {/* <button
            type="button"
            className="bg-gray-900 p-1 rounded-full text-gray-200 hover:text-gray-100"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button> */}

          {/* Profile dropdown */}
          <ProfileDropDown
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            content={user}
            handleSignOut={handleSignOut}
            listItems={org_dropdown_list}
          />
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
