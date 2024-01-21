import Footer from './Footer';
import Head from 'next/head';
import Navbar from './Navbar';
import React from 'react';
import { cn } from '@utils/lib';

export type LayoutProps = {
  children: React.ReactNode;
  title: string;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

const Layout = ({
  children,
  className,
  title = 'Exocrowd | We are stronger united',
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main
        className={cn('font-circular min-h-screen bg-neutral-50', className)}
      >
        <Navbar />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
