import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { Fragment, ReactNode, useEffect, useState } from 'react';
import {
  crowd_funding,
  navigation,
  off_admin_dropdown_list,
} from '@constants/list-items';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import ProfileDropDown from '@components/common/ProfileDropDown';
import TopNavbar from './TopNavbar';
import axios from 'axios';
import { useRouter } from 'next/router';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Layout = ({
  children,
  pageTitle,
}: {
  children: ReactNode;
  pageTitle: string;
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const el = document.querySelector('html') as HTMLElement | null;
    el != null ? el.classList.add('bg-neutral-50') : '';
  }, []);

  const handleSignOut = async () => {
    try {
      const response = await axios.post('/api/office-admin-logout');

      router.push('/admin/login');
    } catch (e) {
      console.log(e);
    }
    console.log('logout');
  };
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
      <div className='min-h-full bg-neutral-50'>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as='div'
            className='fixed inset-0 z-40 flex lg:hidden'
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-neutral-600 bg-opacity-75' />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <div className='relative flex w-full max-w-xs flex-1 flex-col bg-neutral-100 pb-4 pt-5'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-in-out duration-300'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in-out duration-300'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <div className='absolute right-0 top-0 -mr-12 pt-2'>
                    <button
                      type='button'
                      className='ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className='sr-only'>Close sidebar</span>
                      <XMarkIcon
                        className='h-6 w-6 text-white'
                        aria-hidden='true'
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className='flex flex-shrink-0 items-center px-4'>
                  <div className='flex gap-x-2'>
                    <Image
                      height={80}
                      width={200}
                      className='h-8 w-auto object-contain'
                      src='/exocrowd-logo.svg'
                      alt='Exocrowd logo'
                    />
                    {/* <span className='text-neutral-800 text-3xl font-bold uppercase'>
                      Exocrowd lo
                    </span> */}
                  </div>
                </div>
                <div className='mt-5 h-0 flex-1 overflow-y-auto'>
                  <nav className='px-2'>
                    <div className='space-y-1'>
                      {navigation.map((item) => (
                        <Link key={item.name} href={item.href}>
                          <span
                            key={item.name}
                            className={classNames(
                              item.current
                                ? 'bg-neutral-100 text-neutral-900'
                                : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900',
                              'group flex items-center rounded-md px-2 py-2 text-base font-medium leading-5'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            <item.icon
                              className={classNames(
                                item.current
                                  ? 'text-neutral-500'
                                  : 'text-neutral-400 group-hover:text-neutral-500',
                                'mr-3 h-6 w-6 flex-shrink-0'
                              )}
                              aria-hidden='true'
                            />
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className='mt-8'>
                      <h3
                        className='px-3 text-xs font-semibold uppercase tracking-wider text-neutral-500'
                        id='mobile-teams-headline'
                      >
                        Fundraiser
                      </h3>
                      <div
                        className='mt-1 space-y-1'
                        role='group'
                        aria-labelledby='mobile-teams-headline'
                      >
                        {crowd_funding.map((item) => (
                          <Link key={item.name} href={item.href}>
                            <span className='group flex items-center rounded-md px-3 py-2 text-base font-medium leading-5 text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'>
                              <span
                                className={classNames(
                                  item.bgColorClass,
                                  'mr-4 h-2.5 w-2.5 rounded-full'
                                )}
                                aria-hidden='true'
                              />
                              <span className='truncate'>{item.name}</span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </Transition.Child>
            <div className='w-14 flex-shrink-0' aria-hidden='true'>
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className='hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-neutral-200 lg:bg-white lg:pb-4 lg:pt-5'>
          <div className='flex-shrink-0 items-center px-6'>
            <div className='flex gap-x-2'>
              <Image
                height={80}
                width={200}
                className='h-8 w-auto object-contain'
                src='/exocrowd-logo.svg'
                alt='Exocrowd logo'
              />
              {/* <span className="text-neutral-800 text-3xl font-bold uppercase">
								huskbee
							</span> */}
            </div>

            <span className='ml-2 text-left text-xs text-blue-700'>
              (For office admin only)
            </span>
          </div>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className='mt-1 flex h-0 flex-1 flex-col overflow-y-auto'>
            {/* Navigation */}
            <nav className='mt-6 px-3'>
              <div className='space-y-1'>
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <span
                      key={item.name}
                      className={classNames(
                        router.pathname === item.href
                          ? 'bg-neutral-200 text-neutral-900'
                          : 'text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900',
                        'group flex items-center rounded-md px-2 py-2 text-sm font-medium'
                      )}
                      aria-current={
                        router.pathname === item.href ? 'page' : undefined
                      }
                    >
                      <item.icon
                        className={classNames(
                          router.pathname === item.href
                            ? 'text-neutral-500'
                            : 'text-neutral-400 group-hover:text-neutral-500',
                          'mr-3 h-6 w-6 flex-shrink-0'
                        )}
                        aria-hidden='true'
                      />
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
              <div className='mt-8'>
                {/* Secondary navigation */}
                <h3
                  className='px-3 text-xs font-semibold uppercase tracking-wider text-neutral-500'
                  id='desktop-teams-headline'
                >
                  Crowd Funding
                </h3>
                <div
                  className='mt-1 space-y-1'
                  role='group'
                  aria-labelledby='desktop-teams-headline'
                >
                  {crowd_funding.map((content) => (
                    <Link key={content.name} href={content.href}>
                      <span
                        className={`group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-neutral-50 ${router.pathname === content.href
                            ? 'bg-neutral-200 text-neutral-900'
                            : 'text-neutral-700 hover:text-neutral-900 '
                          }`}
                      >
                        <span
                          className={classNames(
                            content.bgColorClass,
                            'mr-4 h-2.5 w-2.5 rounded-full'
                          )}
                          aria-hidden='true'
                        />
                        <span className='truncate'>{content.name}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/* Main column */}
        <div className='flex flex-col lg:pl-64'>
          {/* Search header */}
          <div className='sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-neutral-200 bg-white lg:hidden'>
            <button
              type='button'
              className='border-r border-neutral-200 px-4 text-neutral-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden'
              onClick={() => setSidebarOpen(true)}
            >
              <span className='sr-only'>Open sidebar</span>
              <Bars4Icon className='h-6 w-6' aria-hidden='true' />
            </button>
            <div className='flex flex-1 justify-between px-4 sm:px-6 lg:px-8'>
              <div className='flex flex-1'>
                <form className='flex w-full md:ml-0' action='#' method='GET'>
                  <label htmlFor='search-field' className='sr-only'>
                    Search
                  </label>
                  <div className='relative w-full text-neutral-400 focus-within:text-neutral-600'>
                    <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center'>
                      <MagnifyingGlassIcon
                        className='h-5 w-5'
                        aria-hidden='true'
                      />
                    </div>
                    <input
                      id='search-field'
                      name='search-field'
                      className='block h-full w-full border-transparent py-2 pl-8 pr-3 text-neutral-900 placeholder-neutral-500 focus:border-transparent focus:placeholder-neutral-400 focus:outline-none focus:ring-0 sm:text-sm'
                      placeholder='Search'
                      type='search'
                    />
                  </div>
                </form>
              </div>
              <div className='flex items-center'>
                {/* Profile dropdown */}
                <ProfileDropDown
                  content={localStorage.getItem('off_username')}
                  handleSignOut={handleSignOut}
                  image='/logo/axewhy-colorful-logo.png'
                  listItems={off_admin_dropdown_list}
                />
              </div>
            </div>
          </div>
          <main className='flex-1'>
            <TopNavbar pageTitle={pageTitle} />
            {children}
          </main>
        </div>
      </div>{' '}
    </>
  );
};

export default Layout;
