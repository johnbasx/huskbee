import {
  ArchiveBoxIcon,
  BanknotesIcon,
  ClockIcon,
  HomeIcon,
  ListBulletIcon,
  RectangleGroupIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { Dialog, Transition } from '@headlessui/react';
import { Dispatch, Fragment } from 'react';
import { org_crowd_funding, org_navigation } from '@constants/list-items';

import Link from 'next/link';
import { MdEventAvailable } from 'react-icons/Md';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import Image from 'next/image';
import { cn } from '@utils/lib';

const settings = [{ id: 1, name: 'Profile', href: '#' }];

const SideBar = ({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<boolean>;
}) => {
  const router = useRouter();

  return (
    <>
      {/* Mobile SideNav */}
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
            <div className='relative flex w-full max-w-xs flex-1 flex-col bg-neutral-800 pb-4 pt-5'>
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
              <div className='flex flex-shrink-0 items-center gap-x-4 px-4'>
                <Image
                  height={20}
                  width={250}
                  className='h-8 w-auto object-contain'
                  src='/exocrowd-logo.svg'
                  alt='Exocrowd logo'
                />
                <span className='font-base text-2xl'>exocrowd</span>
              </div>
              <div className='mt-5 h-0 flex-1 overflow-y-auto'>
                <nav className='px-2'>
                  <div className='space-y-1'>
                    {org_navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={clsx(
                          item.current
                            ? 'bg-neutral-900 text-white'
                            : 'text-neutral-300 hover:bg-neutral-700 hover:text-white',
                          'group flex items-center rounded-md px-2 py-2 text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        <item.icon
                          className={clsx(
                            item.current
                              ? 'text-neutral-300'
                              : 'text-neutral-400 group-hover:text-neutral-300',
                            'mr-4 h-6 w-6 flex-shrink-0'
                          )}
                          aria-hidden='true'
                        />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className='mt-10'>
                    <p className='px-2 text-xs font-semibold uppercase tracking-wider text-neutral-400'>
                      Settings
                    </p>
                    <div className='mt-2 space-y-1'>
                      {settings.map((item) => (
                        <a
                          key={item.id}
                          href={item.href}
                          className='flex items-center rounded-md px-2 py-2 text-base font-medium text-neutral-300 hover:bg-neutral-700 hover:text-white'
                        >
                          <span className='truncate'>{item.name}</span>
                        </a>
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
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className='flex-shrink-0 items-center px-6'>
          <div className='flex gap-x-2'>
            <Image
              height={50}
              width={150}
              className='h-8 w-fit object-contain'
              src='/exocrowd-logo.svg'
              alt='Exocrowd logo'
            />
            {/* <span className='text-3xl font-bold uppercase text-neutral-800'>
              huskbee
            </span> */}
          </div>
          <span className='ml-8 items-center text-sm text-blue-700'>
            Organiser Dashboard
          </span>
        </div>
        <div className='mt-1 flex h-0 flex-1 flex-col overflow-y-auto'>
          <nav className='flex-1 px-2 py-4'>
            <div className=''>
              {/* Crowdfunding navigation */}
              <h3
                className='px-3 text-xs font-semibold uppercase tracking-wider text-neutral-500'
                id='desktop-crowdfunding-headline'
              >
                Crowd Funding
              </h3>
              <div
                className='mt-1 space-y-1'
                role='group'
                aria-labelledby='desktop-crowdfunding-links'
              >
                {org_crowd_funding.map((content, index) => (
                  <Link key={content.name} href={content.href}>
                    <span
                      aria-current={index === 0 ? 'page' : undefined}
                      className={`group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                        router.pathname === content.href
                          ? 'bg-neutral-200 text-neutral-900'
                          : 'text-neutral-700 hover:bg-neutral-50'
                      }`}
                    >
                      <content.icon
                        className={cn('h-5 w-5', content.iconColor)}
                      />
                      {/* <span
                        className={clsx(
                          content.bgColorClass,
                          'mr-4 h-2.5 w-2.5 rounded-full'
                        )}
                        aria-hidden='true'
                      /> */}
                      <span className='truncate'>{content.name}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Events links */}
            <div className='mt-8'>
              <h3
                className='px-3 text-xs font-semibold uppercase tracking-wider text-neutral-500'
                id='desktop-crowdfunding-headline'
              >
                Event Management
              </h3>
              <div
                className='mt-1 space-y-1'
                role='group'
                aria-labelledby='desktop-event-management-links'
              >
                {org_navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <span
                      className={cn(
                        router.pathname === item.href
                          ? 'bg-neutral-200 text-neutral-900'
                          : 'text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900',
                        'group flex items-center rounded-md px-3 py-2 text-sm font-medium'
                      )}
                      // className={clsx(
                      //   item.current
                      //     ? "bg-neutral-900 text-white"
                      //     : "text-neutral-300 hover:bg-neutral-700 hover:text-white",
                      //   "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                      // )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      <item.icon
                        className={cn(
                          router.pathname === item.href
                            ? 'text-neutral-500'
                            : 'text-neutral-400 group-hover:text-neutral-500',
                          'mr-2 h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden='true'
                      />
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className='mt-10'>
              <p className='px-3 text-xs font-semibold uppercase tracking-wider text-neutral-400'>
                Settings
              </p>
              <div className='mt-2 space-y-1'>
                {settings.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className='group flex items-center rounded-md px-3 py-2 text-sm font-medium text-neutral-300 hover:bg-neutral-700 hover:text-white'
                  >
                    <span className='truncate'>{item.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SideBar;
