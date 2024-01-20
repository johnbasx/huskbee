import { Dialog, Menu, Transition } from '@headlessui/react';
import { FcCustomerSupport, FcGoogle } from 'react-icons/fc';
import {
  HiBars3,
  HiOutlineUserCircle,
  HiPhone,
  HiXMark,
} from 'react-icons/hi2';
import React, { Fragment, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { TbCircleFilled } from 'react-icons/tb';
import clsx from 'clsx';
import { orgTokenStore } from '@store/index';
import { useRouter } from 'next/router';

// import { TbCircleFilled } from "react-icons/tb";

export const navigation = [
  { name: 'Browse Fundraisers', href: '/fundraiser/browse-fundraisers' },
  //   { name: "Fundraiser for", href: "/fundraiser-options" },
  { name: 'How it works', href: '/career' },
  { name: 'Join the team', href: '/about' },
  { name: 'Contact us', href: '/contact' },
];
export const mobileNavigation = navigation.concat([
  { name: 'Partner with Us', href: '/fundraisers' },
  { name: 'Success Stories', href: '/contact' },
  { name: 'Sponsor a child', href: '/contact' },
]);

const Navbar = () => {
  const { user_token } = orgTokenStore();
  // console.log("Navbar: ", user_token);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <nav className='sticky top-0 isolate z-50 border-b border-neutral-200 bg-white'>
      {/* <div className='flex items-center justify-center w-full h-8 text-xs font-semibold text-center text-white bg-gradient-to-r from-orange-700 to-orange-400'>
                <span>
                    This website is under development
                </span>
            </div> */}
      <div className='px-4 py-3 lg:px-6 lg:py-5'>
        <div className='mx-auto flex max-w-screen-2xl items-center justify-between lg:px-6'>
          <div className='flex lg:flex-1'>
            <Link href='/' className='-mx-1.5 p-0 lg:mx-0'>
              <span className='sr-only'>Exocrowd</span>
              <Image
                className='h-8 w-auto object-contain md:h-10'
                src='/exocrowd-logo.svg'
                alt='Exocrowd logo'
                width={100}
                height={50}
              />
            </Link>
          </div>
          <div className='flex items-center justify-end gap-x-1 lg:hidden'>
            {/* <Link
              href='#!'
              className='px-3.5 inline-flex items-center gap-1 py-3 text-sm font-semibold text-white duration-150 rounded-full bg-black hover:bg-neutral-800'
            >
              Help Manipur
              <TbCircleFilled className='text-blue-300' />
            </Link>
             */}
            <Link
              href='#!'
              className='inline-flex items-center justify-center gap-0.5 text-sm font-semibold tracking-tight text-blue-500 underline underline-offset-2'
            >
              Support Manipur
              {/* <TbCircleFilled className='text-blue-500' /> */}
            </Link>
            <button
              type='button'
              className='-mr-2 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <HiBars3 className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='hidden lg:flex lg:gap-x-6'>
            {navigation.map((item, idx) => (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  'rounded-md text-base font-medium tracking-tight duration-150 hover:text-neutral-700',
                  currentRoute === item.href
                    ? 'text-neutral-600'
                    : 'text-neutral-900'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className='hidden gap-4 lg:flex lg:flex-1 lg:justify-end'>
            <Link href='/organiser/registration'>
              <span className='flex items-center justify-center gap-1.5 rounded-full bg-black px-4 py-2 text-center text-sm font-semibold text-white duration-150 hover:bg-neutral-800'>
                Start a fundraiser
                <TbCircleFilled className='text-blue-300' />
              </span>
            </Link>
            {user_token === '' ? (
              <Link
                href='/exocrowd-user/signin'
                className='inline-flex cursor-pointer items-center gap-1 rounded-full border-none border-neutral-400 bg-blue-500 px-3 py-1.5 text-sm font-semibold text-white'
              >
                <HiOutlineUserCircle className='h-4 w-4' />
                Sign in
              </Link>
            ) : (
              <></>
            )}
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
              className='fixed inset-0 z-50 overflow-y-auto bg-black px-4 py-5 lg:hidden'
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className='flex items-center justify-between'>
                <Link href='/' className='-mx-1.5 p-0 outline-none'>
                  <span className='sr-only'>Exocrowd logo</span>
                  <Image
                    className='h-8 w-auto object-contain'
                    src='/exocrowd-wlogo.svg'
                    alt='Exocrowd logo white'
                    priority
                    width={100}
                    height={100}
                  />
                </Link>
                <button
                  type='button'
                  className='-m-2.5 rounded-md p-2.5 text-neutral-50'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className='sr-only'>Close menu</span>
                  <HiXMark className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>
              <div className='mt-6 flow-root'>
                <div className='divide-y divide-neutral-100/10'>
                  <div className='rounded-xl bg-blue-400 px-4 py-3 text-xs text-neutral-100'>
                    <p>
                      Your ₹1/- can make a huge impact to countless others.
                      Support life, stay united.{' '}
                      <Link className='font-bold underline' href='#!'>
                        Donate Now
                      </Link>
                    </p>
                  </div>
                  <div className='space-y-2 py-4'>
                    {mobileNavigation.map((item, idx) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={clsx(
                          'block rounded-lg px-3 py-2 font-semibold text-neutral-50 duration-150 hover:bg-neutral-900/50',
                          currentRoute === item.href ? 'bg-neutral-400/10' : ''
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
                        className='inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-700 px-3 py-2.5 text-sm font-semibold text-neutral-50 hover:bg-neutral-400/10'
                      >
                        <FcCustomerSupport className='h-6 w-6' />
                        Support
                      </Link>
                      <Link
                        href='#!'
                        className='inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-700 px-3 py-2.5 text-sm font-semibold text-neutral-50 hover:bg-neutral-400/10'
                      >
                        <FcGoogle className='h-6 w-6' />
                        Sign in
                      </Link>
                    </div>
                    <Link
                      href='#!'
                      className='inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-center text-lg font-semibold text-neutral-900 duration-150 hover:bg-neutral-50'
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
