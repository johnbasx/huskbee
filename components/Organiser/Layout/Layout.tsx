import { ReactNode, useState } from "react";

import NavBar from "./NavBar";
import SideBar from "./SideBar";

const Layout = ({ children }: { children: ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="min-h-full flex">
        <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="lg:pl-64 flex flex-col w-0 flex-1">
          <NavBar setSidebarOpen={setSidebarOpen} />

          <main className="flex-1">{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
