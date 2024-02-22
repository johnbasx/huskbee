import { Menu, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';

import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { TbLogout, TbUserCircle } from 'react-icons/tb';
import clsx from 'clsx';

type DropDownListItemsType = {
  name: string;
  href: string;
};
type ProfileDropDownType = {
  image: string;
  content?: string | null;
  handleSignOut: () => void;
  listItems: DropDownListItemsType[];
};
export const ProfileDropDown = ({
  image,
  content,
  handleSignOut,
  listItems,
}: ProfileDropDownType) => {
  return (
    <Menu as='div' className='relative ml-3'>
      <div>
        <Menu.Button className='flex max-w-xs items-center rounded-full border bg-white text-xs focus:outline-none lg:rounded-lg lg:p-2'>
          {/* <TbUserCircle className='h-5 w-5 text-neutral-500' /> */}

          <Image
            height={30}
            width={30}
            className='h-5 w-5 rounded-full object-contain'
            src={image}
            alt='Organiser logo'
          />

          <span className='ml-2 mr-1 line-clamp-1 hidden text-xs font-semibold capitalize text-neutral-700 lg:block'>
            <span className='sr-only'>Open user menu for </span>
            {content && content}
          </span>
          <ChevronDownIcon
            className='hidden h-4 w-4 flex-shrink-0 text-neutral-600 lg:block'
            aria-hidden='true'
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right overflow-hidden rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none '>
          {listItems.map((item) => (
            <Menu.Item key={item.name}>
              {({ active }) => (
                <Link
                  href={item.href}
                  className={clsx(
                    active
                      ? 'bg-neutral-100 text-blue-600'
                      : 'text-neutral-700',
                    'line-clamp-1 block cursor-pointer px-4 py-1.5 text-xs font-medium hover:text-neutral-700'
                  )}
                >
                  {item.name}
                </Link>
              )}
            </Menu.Item>
          ))}

          <Menu.Item>
            {({ active }) => (
              <button
                type='button'
                onClick={() => handleSignOut()}
                className={clsx(
                  active ? 'bg-neutral-100 text-blue-600' : 'text-rose-600',
                  'inline-flex w-full cursor-pointer items-center gap-2 px-4 py-1.5 text-left text-xs font-semibold hover:text-rose-600'
                )}
              >
                Logout
                <TbLogout />
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ProfileDropDown;
