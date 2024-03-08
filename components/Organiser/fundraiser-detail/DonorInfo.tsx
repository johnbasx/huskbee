import { Dialog, Transition } from '@headlessui/react';
import { EnvelopeIcon, UserIcon } from '@heroicons/react/24/outline';
import { ForwardRefExoticComponent, Fragment, RefAttributes, SVGProps, useState } from 'react';

import { IconType } from 'react-icons';
import React from 'react';

//  import UserI



const DonorInfo = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type='button'
        onClick={() => setOpen(true)}
        className='cursor-pointer text-indigo-600 hover:text-indigo-900'
      >
        Donor info
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-10 overflow-y-auto'
          onClose={setOpen}
        >
          <div className='flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-neutral-500 bg-opacity-75 transition-opacity' />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className='hidden sm:inline-block sm:h-screen sm:align-middle'
              aria-hidden='true'
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <div className='inline-block transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle'>
                <div>
                  <div className='space-y-2 text-center'>
                    <DataDisplay Aicon={UserIcon} content='Full Name' />
                    <DataDisplay Aicon={EnvelopeIcon} content='name@gmail.com' />
                  </div>
                </div>
                <div className='mt-5 sm:mt-6' />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default DonorInfo;

const DataDisplay = ({
  Aicon,
  content,
}: {
  // Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  Aicon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & { title?: string | undefined; titleId?: string | undefined; } & RefAttributes<SVGSVGElement>>;
  content: string;
}) => {
  return (
    <div className='flex'>
      <Aicon
        className='h-6 w-6 flex-shrink-0 text-blue-700'
        aria-hidden='true'
      />
      <span className='ml-3 font-bold text-neutral-900'>{content}</span>
    </div>
  );
};
