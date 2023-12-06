import React, { useState } from "react";

import ProfileDropDown from "@components/common/ProfileDropDown";
import axios from "axios";
import { off_admin_dropdown_list } from "@constants/list-items";
import { useRouter } from "next/router";

const TopNavbar = ({ pageTitle }: { pageTitle: string }) => {
  const [user, setUser] = useState(localStorage.getItem("off_username"));
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      const response = await axios.post("/api/office-admin-logout");

      router.push("/admin/login");
    } catch (e: any) {
      console.log(e);
    }
    console.log("logout");
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
          content={user}
          handleSignOut={handleSignOut}
          image="/logo/axewhy-colorful-logo.png"
          listItems={off_admin_dropdown_list}
        />
      </div>
    </div>
  );
};

export default TopNavbar;
