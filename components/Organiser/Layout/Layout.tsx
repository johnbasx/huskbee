import { ReactNode, useState } from "react";

import Head from "next/head";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const Layout = ({
  children,
  pageTitle,
}: {
  children: ReactNode;
  pageTitle: string;
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'
          key='scale'
        />
        {/* <!-- this sets the color of url bar in Apple smatphones --> */}
        {/* <meta name="apple-mobile-web-app-status-bar" content="#0f172a" /> */}
        <meta name='apple-mobile-web-app-status-bar' content='#0f172a' />
      </Head>
      <div className='min-h-full flex'>
        <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className='lg:pl-64 flex flex-col w-0 flex-1'>
          <NavBar pageTitle={pageTitle} setSidebarOpen={setSidebarOpen} />

          <main className='flex-1'>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
