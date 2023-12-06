import { Bars4Icon, BellIcon } from "@heroicons/react/24/solid";
import React, { Dispatch, Fragment, useState } from "react";

import { FaSearch } from "react-icons/fa";
import ProfileDropDown from "@components/common/ProfileDropDown";
import axios from "axios";
import { org_dropdown_list } from "@constants/list-items";
import { useRouter } from "next/router";

const NavBar = ({
  setSidebarOpen,
  pageTitle,
}: {
  setSidebarOpen: Dispatch<boolean>;
  pageTitle: string;
}) => {
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
    <div className="hidden border-b border-gray-200 px-4 py-2 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 shadow-md bg-white">
      <div className="flex-1 min-w-0">
        {/* <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate"> */}
        <h1 className="text-xl font-medium sm:text-lg text-gray-700">
          {pageTitle}
        </h1>
      </div>
      <div className="mt-4 flex sm:mt-0 sm:ml-4">
        <ProfileDropDown
          image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          content={user}
          handleSignOut={handleSignOut}
          listItems={org_dropdown_list}
        />
      </div>
    </div>
  );
};

export default NavBar;
