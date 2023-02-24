import React, { ReactNode } from "react";

import Footer from "@components/Footer";
import Head from "next/head";
import MainNavbar from "@components/navigation/MainNavbar";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Hooksby" }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
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
      <MainNavbar />
      <main className='flex-1 mx-auto max-w-7xl'>{children}</main>
      <Footer />
      {/* </div> */}
    </>
  );
};

export default Layout;
