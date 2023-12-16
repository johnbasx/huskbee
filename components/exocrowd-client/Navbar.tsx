import { Dialog, Menu, Transition } from "@headlessui/react";
import { FcCustomerSupport, FcGoogle } from "react-icons/fc";
import {
  HiBars3,
  HiOutlineUserCircle,
  HiPhone,
  HiXMark,
} from "react-icons/hi2";
import React, { Fragment, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { TbCircleFilled } from "react-icons/tb";
import clsx from "clsx";
import { orgTokenStore } from "@store/index";
import { useRouter } from "next/router";

// import { TbCircleFilled } from "react-icons/tb";

export const navigation = [
  { name: "Browse Fundraisers", href: "/fundraisers" },
  //   { name: "Fundraiser for", href: "/fundraiser-options" },
  { name: "How it works", href: "/career" },
  { name: "Join the team", href: "/about" },
  { name: "Contact us", href: "/contact" },
];
export const mobileNavigation = navigation.concat([
  { name: "Partner with Us", href: "/fundraisers" },
  { name: "Success Stories", href: "/contact" },
  { name: "Sponsor a child", href: "/contact" },
]);

const Navbar = () => {
	const {user_token} = orgTokenStore()
  console.log('Navbar: ', user_token);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <nav className='bg-white isolate border-b border-slate-200 sticky top-0 z-40'>
      {/* <div className='flex items-center justify-center w-full h-8 text-xs font-semibold text-center text-white bg-gradient-to-r from-orange-700 to-orange-400'>
                <span>
                    This website is under development
                </span>
            </div> */}
      <div className='px-4 lg:px-6 py-3 lg:py-5'>
        <div className='flex items-center justify-between mx-auto max-w-screen-2xl lg:px-6'>
          <div className='flex lg:flex-1'>
            <Link href='/' className='-mx-1.5 lg:mx-0 p-0'>
              <span className='sr-only'>Exocrowd</span>
              <Image
                className='object-contain w-auto h-8 md:h-10'
                src='/exocrowd-logo.svg'
                alt='Exocrowd logo'
                width={100}
                height={50}
              />
            </Link>
          </div>
          <div className='flex justify-end gap-x-1 items-center lg:hidden'>
            {/* <Link
              href='#!'
              className='px-3.5 inline-flex items-center gap-1 py-3 text-sm font-semibold text-white duration-150 rounded-full bg-black hover:bg-slate-800'
            >
              Help Manipur
              <TbCircleFilled className='text-blue-300' />
            </Link>
             */}
            <Link
              href='#!'
              className='font-semibold inline-flex items-center gap-0.5 justify-center text-sm tracking-tight underline underline-offset-2 text-blue-500'
            >
              Support Manipur
              {/* <TbCircleFilled className='text-blue-500' /> */}
            </Link>
            <button
              type='button'
              className='-mr-2 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <HiBars3 className='w-6 h-6' aria-hidden='true' />
            </button>
          </div>
          <div className='hidden lg:flex lg:gap-x-6'>
            {navigation.map((item, idx) => (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  "font-semibold text-base duration-150 tracking-tight rounded-md hover:text-slate-700",
                  currentRoute === item.href
                    ? "text-slate-600"
                    : "text-gray-900"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className='hidden gap-4 lg:flex lg:flex-1 lg:justify-end'>
            <Link href='/organiser/registration'>
              <span className='px-4 py-2 flex gap-1.5 text-center justify-center items-center text-sm font-semibold text-white duration-150 rounded-full bg-black hover:bg-slate-800'>
                Start a fundraiser
                <TbCircleFilled className='text-blue-300' />
              </span>
            </Link>
            {user_token==''?
            <Link
              href='/exocrowd-user/signin'
              className='inline-flex border-none border-slate-400 rounded-full items-center gap-1 px-3 py-1.5 text-sm text-white bg-blue-500 font-semibold cursor-pointer'
            >
              <HiOutlineUserCircle className='h-4 w-4' />
              Sign in
            </Link>:<></>}
          </div>
        </div>
      </div>

      {/* Mobile navigation and overlay */}
      <Transition appear as={Fragment} show={mobileMenuOpen}>
        <Dialog as='div' onClose={setMobileMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-200 transform'
            enterFrom='translate-x-full opacity-0'
            enterTo='translate-x-0 opacity-1'
            leave='transition ease-in-out duration-200 transform'
            leaveFrom='translate-x-0'
            leaveTo='translate-x-full opacity-0'
          >
            <Dialog.Panel
              className='fixed inset-0 z-50 px-4 py-5 overflow-y-auto bg-black lg:hidden'
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className='flex items-center justify-between'>
                <Link href='/' className='-mx-1.5 p-0 outline-none'>
                  <span className='sr-only'>Exocrowd logo</span>
                  <Image
                    className='object-contain w-auto h-8'
                    src='/exocrowd-wlogo.svg'
                    alt='Exocrowd logo white'
                    priority
                    width={100}
                    height={100}
                  />
                </Link>
                <button
                  type='button'
                  className='-m-2.5 rounded-md p-2.5 text-slate-50'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className='sr-only'>Close menu</span>
                  <HiXMark className='w-6 h-6' aria-hidden='true' />
                </button>
              </div>
              <div className='flow-root mt-6'>
                <div className='divide-y divide-slate-100/10'>
                  <div className='bg-blue-400 px-4 py-3 rounded-xl text-slate-100 text-xs'>
                    <p>
                      Your ₹1/- can make a huge impact to countless others.
                      Support life, stay united.{" "}
                      <Link className='underline font-bold' href='#!'>
                        Donate Now
                      </Link>
                    </p>
                  </div>
                  <div className='py-4 space-y-2 font-nunito'>
                    {mobileNavigation.map((item, idx) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={clsx(
                          "block px-3 py-2 font-semibold duration-150 rounded-lg text-gray-50 hover:bg-slate-900/50",
                          currentRoute === item.href ? "bg-slate-400/10" : ""
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className='flex flex-col gap-6 py-6'>
                    <div className='grid grid-cols-2 gap-4'>
                      <Link
                        href='#!'
                        className='rounded-lg justify-center py-2.5 px-3 text-sm font-semibold inline-flex items-center gap-2 text-slate-50 border border-slate-700 hover:bg-slate-400/10'
                      >
                        <FcCustomerSupport className='h-6 w-6' />
                        Support
                      </Link>
                      <Link
                        href='#!'
                        className='rounded-lg justify-center py-2.5 px-3 text-sm font-semibold inline-flex items-center gap-2 text-slate-50 border border-slate-700 hover:bg-slate-400/10'
                      >
                        <FcGoogle className='h-6 w-6' />
                        Sign in
                      </Link>
                    </div>
                    <Link
                      href='#!'
                      className='px-4 inline-flex items-center justify-center text-center text-lg py-3 font-semibold duration-150 gap-2 bg-white rounded-full text-slate-900 hover:bg-gray-50'
                    >
                      Start a fundraiser
                      <TbCircleFilled className='text-blue-300' />
                    </Link>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </nav>
  );
};

export default Navbar;
