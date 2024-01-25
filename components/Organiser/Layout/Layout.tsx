import { ReactNode, useState } from 'react';

import Head from 'next/head';
import NavBar from './NavBar';
import SideBar from './SideBar';
import PageHeading from '@components/admin/layout/PageHeading';

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
      <div className='flex min-h-full font-circular'>
        <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className='flex w-0 flex-1 flex-col lg:pl-64'>
          <NavBar pageTitle={pageTitle} setSidebarOpen={setSidebarOpen} />
          {/* <PageHeading /> */}

          <main className='flex-1'>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
