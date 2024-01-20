import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/solid';
import { Fragment, useRef, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  callsToAction,
  navigation,
  recentPosts,
  resources,
  solutions,
} from '@constants/header-menu-items';

import Image from 'next/image';
import Link from 'next/link';
import NotifiHead from './NotifiHead';
import SearchEvents from './SearchEvents';
import { authStatus } from '@store/index';
import axios from 'axios';
import clsx from 'clsx';
import { useRouter } from 'next/router';

export default function Navbar() {
  const { status } = authStatus();
  let timeout: ReturnType<typeof setTimeout>;
  const timeoutDuration = 200;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [openState, setOpenState] = useState(false);

  const toggleMenu = (open: boolean) => {
    setOpenState(!open);
    buttonRef.current?.click();
  };

  const onHover = (open: boolean, action: string) => {
    if (
      (!open && !openState && action === 'onMouseOver') ||
      (open && openState && action === 'onMouseLeave')
    ) {
      console.log('Hover: ', open, action);
      toggleMenu(open);
      // clearTimeout(timeout);
      // timeout = setTimeout(() => toggleMenu(open), timeoutDuration);
    }
  };

  return (
    <>
      <NotifiHead />
      <div className='sticky top-0 z-20 h-auto w-full border-b border-neutral-500/20 bg-neutral-900/20 backdrop-blur-md backdrop-filter sm:px-9'>
        <Popover as='header' className='relative'>
          <nav className='mx-auto max-w-7xl px-4 sm:px-6' aria-label='Global'>
            <div className='flex items-center justify-between py-4 md:justify-between md:space-x-2'>
              <div className='flex w-full items-center justify-between md:w-auto lg:w-0 lg:flex-1'>
                <Link
                  href='/'
                  className='flex flex-1 items-center justify-start'
                >
                  <span className='sr-only'>Foxbeta</span>
                  <div className='relative h-8 w-auto sm:h-10'>
                    <Image
                      src='/logo/axewhy-colorful-logo.png'
                      alt='Axewhy logo'
                      width={100}
                      height={100}
                      // sizes="100vw"
                      className='h-8 w-auto sm:h-10'
                    />
                  </div>
                  <span className='ml-2 text-3xl font-extrabold tracking-tight text-white'>
                    Foxbeta
                  </span>
                </Link>

                {/* Hamburger menu for mobile menu popover */}
                <div className='-mr-2 flex items-center md:hidden'>
                  <Popover.Button className='focus-ring-inset inline-flex items-center justify-center rounded-md bg-neutral-900 p-2 text-neutral-400 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-500'>
                    <span className='sr-only'>Open main menu</span>
                    <Bars3Icon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>

              <Popover.Group
                as='nav'
                className='hidden space-x-8 sm:flex-1 md:flex md:justify-end'
              >
                <Popover className='relative'>
                  {({ open, close }) => (
                    <div
                    // onMouseOver={() => onHover(open, "onMouseOver")}
                    // onMouseLeave={() => onHover(open, "onMouseLeave")}
                    >
                      <Popover.Button
                        className={clsx(
                          open ? 'text-indigo-400' : 'text-neutral-300',
                          'group inline-flex items-center rounded-md text-base font-medium transition duration-300 ease-in-out hover:text-neutral-400 focus:outline-none focus:ring focus:ring-transparent'
                        )}
                        ref={buttonRef}
                      >
                        <span>Solutions</span>
                        <ChevronDownIcon
                          className={clsx(
                            open ? 'hidden' : 'block text-neutral-400',
                            'ml-2 h-5 w-5 transition-all duration-200 ease-in-out group-hover:text-neutral-500'
                          )}
                          aria-hidden='true'
                        />
                        <ChevronUpIcon
                          className={clsx(
                            open ? 'block text-indigo-500' : 'hidden',
                            'ml-2 h-5 w-5 transition-all duration-300 ease-in-out group-hover:text-neutral-400'
                          )}
                          aria-hidden='true'
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter='transition ease-out duration-200'
                        enterFrom='opacity-0 translate-y-1'
                        enterTo='opacity-100 translate-y-0'
                        leave='transition ease-in duration-150'
                        leaveFrom='opacity-100 translate-y-0'
                        leaveTo='opacity-0 translate-y-1'
                      >
                        <Popover.Panel className='absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2'>
                          <div className='overflow-hidden rounded-lg border border-neutral-600/20 bg-neutral-900 shadow-lg ring-1 ring-black ring-opacity-5'>
                            <div className='bg-night-700 relative grid gap-6 px-5 py-6 duration-200 sm:gap-8 sm:p-8'>
                              {solutions.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className='-m-3 flex items-start rounded-lg p-3 transition duration-300 hover:bg-neutral-800'
                                >
                                  <item.icon
                                    className='h-6 w-6 flex-shrink-0 text-neutral-400'
                                    aria-hidden='true'
                                  />
                                  <div className='ml-4'>
                                    <p className='text-base font-medium text-neutral-100'>
                                      {item.name}
                                    </p>
                                    <p className='mt-1 text-sm text-neutral-500'>
                                      {item.description}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                            <div className='bg-night-500 space-y-6 bg-neutral-800 px-5 py-5 sm:flex sm:space-x-10 sm:space-y-0 sm:px-8'>
                              {callsToAction.map((item) => (
                                <div key={item.name} className='flow-root'>
                                  <a
                                    href={item.href}
                                    className='hover:bg-night-400 -m-3 flex items-center rounded-md p-3 text-base font-medium text-neutral-50 transition duration-300 hover:bg-neutral-700'
                                  >
                                    <item.icon
                                      className='h-6 w-6 flex-shrink-0 text-neutral-400'
                                      aria-hidden='true'
                                    />
                                    <span className='ml-3'>{item.name}</span>
                                  </a>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </div>
                  )}
                </Popover>

                {/* navigation items mapping */}
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='hidden text-base font-medium text-white hover:text-neutral-300 md:block'
                  >
                    {item.name}
                  </a>
                ))}

                <SearchEvents />
                {/* <SearchButton /> */}
              </Popover.Group>
              {/* Contact Us Button */}
              <div className='hidden items-center justify-end md:flex'>
                {status === false ? (
                  <Link href='/login'>
                    <span className='ml-8 inline-flex scale-100 items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-base font-medium text-white shadow-sm transition-all duration-500 ease-in-out hover:scale-110 hover:bg-indigo-600'>
                      Sign In
                    </span>
                  </Link>
                ) : (
                  <SignOut />
                )}
              </div>
            </div>
            <Popover.Overlay className='fixed inset-0 h-screen bg-neutral-900/80 backdrop-blur-sm ' />
            {/* Mobile menu popover */}
            <Transition
              as={Fragment}
              enter='duration-200 ease-out'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='duration-100 ease-in'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Popover.Panel
                focus
                className='absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden'
              >
                <div className='overflow-hidden rounded-lg border border-neutral-700/80 bg-neutral-900 text-white shadow-md ring-1 ring-neutral-600 ring-opacity-5 '>
                  <div className='px-5 pb-6 pt-5'>
                    <div className='flex items-center justify-between'>
                      <div className='h-10 w-auto'>
                        <Image
                          src='/logo/axewhy-colorful-logo.png'
                          width={50}
                          height={50}
                          alt='Axewhy Logo'
                        />
                      </div>
                      <span className='sr-only'>Boxfree</span>
                      <div className='-mr-2'>
                        <Popover.Button className='inline-flex items-center justify-center rounded-md bg-neutral-800 p-2 text-neutral-400 hover:bg-neutral-700 hover:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                          <span className='sr-only'>Close menu</span>
                          <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className='mt-6'>
                      <nav className='grid gap-y-8'>
                        {solutions.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className='-m-3 flex items-center rounded-md p-3 hover:bg-neutral-800'
                          >
                            <item.icon
                              className='h-6 w-6 flex-shrink-0 text-indigo-600'
                              aria-hidden='true'
                            />

                            <span className='ml-3 text-base font-medium text-neutral-100'>
                              {item.name}
                            </span>
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                  <div className='space-y-6 px-5 py-6'>
                    <div className='grid grid-cols-2 gap-x-8 gap-y-4'>
                      <a
                        href='#!'
                        className='text-base font-medium text-neutral-100 hover:text-neutral-400'
                      >
                        Pricing
                      </a>

                      <a
                        href='#!'
                        className='text-base font-medium text-neutral-100 hover:text-neutral-400'
                      >
                        Docs
                      </a>
                      {resources.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className='text-base font-medium text-neutral-100 hover:text-neutral-400'
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div>
                      <a
                        href='#!'
                        className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
                      >
                        Sign up
                      </a>
                      <p className='mt-6 text-center text-base font-medium text-neutral-500'>
                        Existing customer?{' '}
                        <a
                          href='#!'
                          className='text-indigo-600 hover:text-indigo-500'
                        >
                          Sign in
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </nav>
        </Popover>
      </div>
    </>
  );
}

const SignOut = () => {
  const router = useRouter();
  const handleSignOut = async () => {
    try {
      const response = await axios.post('/api/logout');
      console.log('successfully logout');
      router.push('/login');
    } catch (e: any) {
      console.log(e);
    }
  };
  return (
    <button type='button' onClick={() => handleSignOut()}>
      <span className='ml-8 inline-flex scale-100 cursor-pointer items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-base font-medium text-white shadow-sm transition-all duration-500 ease-in-out hover:scale-110 hover:bg-indigo-600'>
        Sign out
      </span>
    </button>
  );
};

const More = () => {
  return (
    <>
      {/* Nav item with Expanded menu */}
      <Popover className='relative'>
        {({ open }) => (
          <>
            <Popover.Button
              className={clsx(
                open ? 'text-indigo-400' : 'text-neutral-300',
                'group inline-flex items-center rounded-md text-base font-medium transition duration-300 ease-in-out hover:text-neutral-400 focus:outline-none focus:ring focus:ring-transparent'
              )}
            >
              <span>More</span>
              <ChevronDownIcon
                className={clsx(
                  open ? 'hidden' : 'block text-neutral-400',
                  'ml-2 h-5 w-5 transition-all duration-200 ease-in-out group-hover:text-neutral-500'
                )}
                aria-hidden='true'
              />
              <ChevronUpIcon
                className={clsx(
                  open ? 'block text-indigo-500' : 'hidden',
                  'ml-2 h-5 w-5 transition-all duration-300 ease-in-out group-hover:text-neutral-400'
                )}
                aria-hidden='true'
              />
            </Popover.Button>

            {/* Expanded Menu for resources */}
            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='left-4/5 absolute z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0'>
                <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-neutral-700 ring-opacity-5'>
                  <div className='relative grid gap-6 bg-neutral-900 px-5 py-6 sm:gap-8 sm:p-8'>
                    {resources.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='-m-3 flex items-start rounded-lg p-3 hover:bg-neutral-800'
                      >
                        <item.icon
                          className='h-6 w-6 flex-shrink-0 text-neutral-400'
                          aria-hidden='true'
                        />
                        <div className='ml-4'>
                          <p className='text-base font-medium text-neutral-100'>
                            {item.name}
                          </p>
                          <p className='mt-1 text-sm text-neutral-500'>
                            {item.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className='bg-neutral-800 px-5 py-5 sm:px-8 sm:py-8'>
                    <div>
                      <h3 className='text-sm font-medium uppercase tracking-wide text-neutral-200'>
                        Recent Posts
                      </h3>
                      <ul className='mt-4 space-y-4'>
                        {recentPosts.map((post) => (
                          <li key={post.id} className='truncate text-base'>
                            <a
                              href={post.href}
                              className='font-medium text-neutral-400 transition duration-200 hover:text-indigo-300'
                            >
                              {post.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className='mt-5 text-sm'>
                      <a
                        href='#!'
                        className='font-medium text-indigo-600 hover:text-indigo-500'
                      >
                        {' '}
                        View all posts <span aria-hidden='true'>&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
};
