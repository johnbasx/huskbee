import {
  CalendarIcon,
  CogIcon,
  HomeIcon,
  MapIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { ChevronLeftIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/


const user = {
  name: 'Tom Cook',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Teams', href: '#', icon: UserGroupIcon, current: false },
  { name: 'Directory', href: '#', icon: HomeIcon, current: true },
  { name: 'Announcements', href: '#', icon: HomeIcon, current: false },
  { name: 'Office Map', href: '#', icon: MapIcon, current: false },
];
const secondaryNavigation = [
  { name: 'Apps', href: '#', icon: HomeIcon },
  { name: 'Settings', href: '#', icon: CogIcon },
];
const tabs = [
  { name: 'Profile', href: '#', current: true },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Recognition', href: '#', current: false },
];
const profile = {
  name: 'Ricardo Cooper',
  imageUrl:
    'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  coverImageUrl:
    'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  about: `
    <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
    <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
  `,
  fields: {
    Phone: '(555) 123-4567',
    Email: 'ricardocooper@example.com',
    Title: 'Senior Front-End Developer',
    Team: 'Product Development',
    Location: 'San Francisco',
    Sits: 'Oasis, 4th floor',
    Salary: '$145,000',
    Birthday: 'June 8, 1990',
  },
};
const directory = {
  A: [
    {
      id: 1,
      name: 'Leslie Abbott',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 2,
      name: 'Hector Adams',
      role: 'VP, Marketing',
      imageUrl:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 3,
      name: 'Blake Alexander',
      role: 'Account Coordinator',
      imageUrl:
        'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 4,
      name: 'Fabricio Andrews',
      role: 'Senior Art Director',
      imageUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  B: [
    {
      id: 5,
      name: 'Angela Beaver',
      role: 'Chief Strategy Officer',
      imageUrl:
        'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 6,
      name: 'Yvette Blanchard',
      role: 'Studio Artist',
      imageUrl:
        'https://images.unsplash.com/photo-1506980595904-70325b7fdd90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 7,
      name: 'Lawrence Brooks',
      role: 'Content Specialist',
      imageUrl:
        'https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  C: [
    {
      id: 8,
      name: 'Jeffrey Clark',
      role: 'Senior Art Director',
      imageUrl:
        'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 9,
      name: 'Kathryn Cooper',
      role: 'Associate Creative Director',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  E: [
    {
      id: 10,
      name: 'Alicia Edwards',
      role: 'Junior Copywriter',
      imageUrl:
        'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 11,
      name: 'Benjamin Emerson',
      role: 'Director, Print Operations',
      imageUrl:
        'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 12,
      name: 'Jillian Erics',
      role: 'Designer',
      imageUrl:
        'https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 13,
      name: 'Chelsea Evans',
      role: 'Human Resources Manager',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  G: [
    {
      id: 14,
      name: 'Michael Gillard',
      role: 'Co-Founder / CTO',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 15,
      name: 'Dries Giuessepe',
      role: 'Manager, Business Relations',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  M: [
    {
      id: 16,
      name: 'Jenny Harrison',
      role: 'Studio Artist',
      imageUrl:
        'https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 17,
      name: 'Lindsay Hatley',
      role: 'Front-end Developer',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 18,
      name: 'Anna Hill',
      role: 'Partner, Creative',
      imageUrl:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  S: [
    {
      id: 19,
      name: 'Courtney Samuels',
      role: 'Designer',
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 20,
      name: 'Tom Simpson',
      role: 'Director, Product Development',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  T: [
    {
      id: 21,
      name: 'Floyd Thompson',
      role: 'Principal Designer',
      imageUrl:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 22,
      name: 'Leonard Timmons',
      role: 'Senior Designer',
      imageUrl:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 23,
      name: 'Whitney Trudeau',
      role: 'Copywriter',
      imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  W: [
    {
      id: 24,
      name: 'Kristin Watson',
      role: 'VP, Human Resources',
      imageUrl:
        'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 25,
      name: 'Emily Wilson',
      role: 'VP, User Experience',
      imageUrl:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  Y: [
    {
      id: 26,
      name: 'Emma Young',
      role: 'Senior Front-end Developer',
      imageUrl:
        'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full overflow-hidden">
        ```
      */}
      <div className='flex h-full'>
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
              <div className='relative flex w-full max-w-xs flex-1 flex-col bg-white focus:outline-none'>
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
                      <HomeIcon
                        className='h-6 w-6 text-white'
                        aria-hidden='true'
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className='h-0 flex-1 overflow-y-auto pb-4 pt-5'>
                  <div className='flex flex-shrink-0 items-center px-4'>
                    <img
                      className='h-8 w-auto'
                      src='https://tailwindui.com/img/logos/workflow-logo-pink-500-mark-neutral-900-text.svg'
                      alt='Workflow'
                    />
                  </div>
                  <nav aria-label='Sidebar' className='mt-5'>
                    <div className='space-y-1 px-2'>
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-neutral-100 text-neutral-900'
                              : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900',
                            'group flex items-center rounded-md px-2 py-2 text-base font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? 'text-neutral-500'
                                : 'text-neutral-400 group-hover:text-neutral-500',
                              'mr-4 h-6 w-6'
                            )}
                            aria-hidden='true'
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <hr
                      className='my-5 border-t border-neutral-200'
                      aria-hidden='true'
                    />
                    <div className='space-y-1 px-2'>
                      {secondaryNavigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className='group flex items-center rounded-md px-2 py-2 text-base font-medium text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                        >
                          <item.icon
                            className='mr-4 h-6 w-6 flex-shrink-0 text-neutral-400 group-hover:text-neutral-500'
                            aria-hidden='true'
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </nav>
                </div>
                <div className='flex flex-shrink-0 border-t border-neutral-200 p-4'>
                  <a href='#' className='group block flex-shrink-0'>
                    <div className='flex items-center'>
                      <div>
                        <img
                          className='inline-block h-10 w-10 rounded-full'
                          src={user.imageUrl}
                          alt=''
                        />
                      </div>
                      <div className='ml-3'>
                        <p className='text-base font-medium text-neutral-700 group-hover:text-neutral-900'>
                          {user.name}
                        </p>
                        <p className='text-sm font-medium text-neutral-500 group-hover:text-neutral-700'>
                          View profile
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </Transition.Child>
            <div className='w-14 flex-shrink-0' aria-hidden='true'>
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className='hidden lg:flex lg:flex-shrink-0'>
          <div className='flex w-64 flex-col'>
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className='flex min-h-0 flex-1 flex-col border-r border-neutral-200 bg-neutral-100'>
              <div className='flex flex-1 flex-col overflow-y-auto pb-4 pt-5'>
                <div className='flex flex-shrink-0 items-center px-4'>
                  <img
                    className='h-8 w-auto'
                    src='https://tailwindui.com/img/logos/workflow-logo-pink-500-mark-neutral-900-text.svg'
                    alt='Workflow'
                  />
                </div>
                <nav className='mt-5 flex-1' aria-label='Sidebar'>
                  <div className='space-y-1 px-2'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-neutral-200 text-neutral-900'
                            : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900',
                          'group flex items-center rounded-md px-2 py-2 text-sm font-medium'
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
                      </a>
                    ))}
                  </div>
                  <hr
                    className='my-5 border-t border-neutral-200'
                    aria-hidden='true'
                  />
                  <div className='flex-1 space-y-1 px-2'>
                    {secondaryNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='group flex items-center rounded-md px-2 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                      >
                        <item.icon
                          className='mr-3 h-6 w-6 flex-shrink-0 text-neutral-400 group-hover:text-neutral-500'
                          aria-hidden='true'
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </nav>
              </div>
              <div className='flex flex-shrink-0 border-t border-neutral-200 p-4'>
                <a href='#' className='group block w-full flex-shrink-0'>
                  <div className='flex items-center'>
                    <div>
                      <img
                        className='inline-block h-9 w-9 rounded-full'
                        src={user.imageUrl}
                        alt=''
                      />
                    </div>
                    <div className='ml-3'>
                      <p className='text-sm font-medium text-neutral-700 group-hover:text-neutral-900'>
                        {user.name}
                      </p>
                      <p className='text-xs font-medium text-neutral-500 group-hover:text-neutral-700'>
                        View profile
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='flex min-w-0 flex-1 flex-col overflow-hidden'>
          <div className='lg:hidden'>
            <div className='flex items-center justify-between border-b border-neutral-200 bg-neutral-50 px-4 py-1.5'>
              <div>
                <img
                  className='h-8 w-auto'
                  src='https://tailwindui.com/img/logos/workflow-mark-pink-500.svg'
                  alt='Workflow'
                />
              </div>
              <div>
                <button
                  type='button'
                  className='-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md text-neutral-500 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600'
                  onClick={() => setSidebarOpen(true)}
                >
                  <span className='sr-only'>Open sidebar</span>
                  <HomeIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>
            </div>
          </div>
          <div className='relative z-0 flex flex-1 overflow-hidden'>
            <main className='relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last'>
              {/* Breadcrumb */}
              <nav
                className='flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden'
                aria-label='Breadcrumb'
              >
                <a
                  href='#'
                  className='inline-flex items-center space-x-3 text-sm font-medium text-neutral-900'
                >
                  <ChevronLeftIcon
                    className='-ml-2 h-5 w-5 text-neutral-400'
                    aria-hidden='true'
                  />
                  <span>Directory</span>
                </a>
              </nav>

              <article>
                {/* Profile header */}
                <div>
                  <div>
                    <img
                      className='h-32 w-full object-cover lg:h-48'
                      src={profile.coverImageUrl}
                      alt=''
                    />
                  </div>
                  <div className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
                    <div className='-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5'>
                      <div className='flex'>
                        <img
                          className='h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32'
                          src={profile.imageUrl}
                          alt=''
                        />
                      </div>
                      <div className='mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1'>
                        <div className='mt-6 min-w-0 flex-1 sm:hidden 2xl:block'>
                          <h1 className='truncate text-2xl font-bold text-neutral-900'>
                            {profile.name}
                          </h1>
                        </div>
                        <div className='mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0'>
                          <button
                            type='button'
                            className='inline-flex justify-center rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2'
                          >
                            <HomeIcon
                              className='-ml-1 mr-2 h-5 w-5 text-neutral-400'
                              aria-hidden='true'
                            />
                            <span>Message</span>
                          </button>
                          <button
                            type='button'
                            className='inline-flex justify-center rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2'
                          >
                            <PhoneIcon
                              className='-ml-1 mr-2 h-5 w-5 text-neutral-400'
                              aria-hidden='true'
                            />
                            <span>Call</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='mt-6 hidden min-w-0 flex-1 sm:block 2xl:hidden'>
                      <h1 className='truncate text-2xl font-bold text-neutral-900'>
                        {profile.name}
                      </h1>
                    </div>
                  </div>
                </div>

                {/* Tabs */}
                <div className='mt-6 sm:mt-2 2xl:mt-5'>
                  <div className='border-b border-neutral-200'>
                    <div className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
                      <nav className='-mb-px flex space-x-8' aria-label='Tabs'>
                        {tabs.map((tab) => (
                          <a
                            key={tab.name}
                            href={tab.href}
                            className={classNames(
                              tab.current
                                ? 'border-pink-500 text-neutral-900'
                                : 'border-transparent text-neutral-500 hover:border-neutral-300 hover:text-neutral-700',
                              'whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium'
                            )}
                            aria-current={tab.current ? 'page' : undefined}
                          >
                            {tab.name}
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                </div>

                {/* Description list */}
                <div className='mx-auto mt-6 max-w-5xl px-4 sm:px-6 lg:px-8'>
                  <dl className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
                    {Object.keys(profile.fields).map((field) => (
                      <div key={field} className='sm:col-span-1'>
                        <dt className='text-sm font-medium text-neutral-500'>
                          {field}
                        </dt>
                        <dd className='mt-1 text-sm text-neutral-900'>
                          {/* {profile.fields[field]} */}
                        </dd>
                      </div>
                    ))}
                    <div className='sm:col-span-2'>
                      <dt className='text-sm font-medium text-neutral-500'>
                        About
                      </dt>
                      <dd
                        className='mt-1 max-w-prose space-y-5 text-sm text-neutral-900'
                        dangerouslySetInnerHTML={{ __html: profile.about }}
                      />
                    </div>
                  </dl>
                </div>
              </article>
            </main>
            <aside className='hidden w-96 flex-shrink-0 border-r border-neutral-200 xl:order-first xl:flex xl:flex-col'>
              <div className='px-6 pb-4 pt-6'>
                <h2 className='text-lg font-medium text-neutral-900'>
                  Directory
                </h2>
                <p className='mt-1 text-sm text-neutral-600'>
                  Search directory of 3,018 employees
                </p>
                <form className='mt-6 flex space-x-4' action='#'>
                  <div className='min-w-0 flex-1'>
                    <label htmlFor='search' className='sr-only'>
                      Search
                    </label>
                    <div className='relative rounded-md shadow-sm'>
                      <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                        <HomeIcon
                          className='h-5 w-5 text-neutral-400'
                          aria-hidden='true'
                        />
                      </div>
                      <input
                        type='search'
                        name='search'
                        id='search'
                        className='block w-full rounded-md border-neutral-300 pl-10 focus:border-pink-500 focus:ring-pink-500 sm:text-sm'
                        placeholder='Search'
                      />
                    </div>
                  </div>
                  <button
                    type='submit'
                    className='inline-flex justify-center rounded-md border border-neutral-300 bg-white px-3.5 py-2 text-sm font-medium text-neutral-700 shadow-sm hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2'
                  >
                    <HomeIcon
                      className='h-5 w-5 text-neutral-400'
                      aria-hidden='true'
                    />
                    <span className='sr-only'>Search</span>
                  </button>
                </form>
              </div>
              {/* Directory list */}
              <nav
                className='min-h-0 flex-1 overflow-y-auto'
                aria-label='Directory'
              >
                {Object.keys(directory).map((letter) => (
                  <div key={letter} className='relative'>
                    <div className='sticky top-0 z-10 border-b border-t border-neutral-200 bg-neutral-50 px-6 py-1 text-sm font-medium text-neutral-500'>
                      <h3>{letter}</h3>
                    </div>
                    <ul
                      role='list'
                      className='relative z-0 divide-y divide-neutral-200'
                    >
                      {/* {directory[letter].map((person) => (
                        <li key={person.id}>
                          <div className='relative flex items-center space-x-3 px-6 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500 hover:bg-neutral-50'>
                            <div className='flex-shrink-0'>
                              <img
                                className='h-10 w-10 rounded-full'
                                src={person.imageUrl}
                                alt=''
                              />
                            </div>
                            <div className='min-w-0 flex-1'>
                              <a href='#' className='focus:outline-none'>
                               
                                <span
                                  className='absolute inset-0'
                                  aria-hidden='true'
                                />
                                <p className='text-sm font-medium text-neutral-900'>
                                  {person.name}
                                </p>
                                <p className='truncate text-sm text-neutral-500'>
                                  {person.role}
                                </p>
                              </a>
                            </div>
                          </div>
                        </li>
                      ))} */}
                    </ul>
                  </div>
                ))}
              </nav>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
