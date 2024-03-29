import {
  CheckIcon,
  HandThumbUpIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useRef, useState } from 'react';

import { BASE_URL } from '@constants/api-urls';
import { EventPartnersProps } from '../../../pages/event-detail/[eventId]';
import Image from 'next/image';

const eventTypes = {
  applied: { icon: UserIcon, bgColorClass: 'bg-neutral-400' },
  advanced: { icon: HandThumbUpIcon, bgColorClass: 'bg-blue-500' },
  completed: { icon: CheckIcon, bgColorClass: 'bg-green-500' },
};

const partners = [
  {
    id: 1,
    type: eventTypes.completed,
    content: 'Partner 1',
    target: 'partner@xy.com',
    date: 'Sep 20',
    datetime: '2020-09-20',
  },
  {
    id: 2,
    type: eventTypes.completed,
    content: 'Partner 2',
    target: 'partner@xy.com',
    date: 'Sep 22',
    datetime: '2020-09-22',
  },
  {
    id: 3,
    type: eventTypes.completed,
    content: 'Partner 3',
    target: 'partner@xy.com',
    date: 'Sep 28',
    datetime: '2020-09-28',
  },
  {
    id: 4,
    type: eventTypes.completed,
    content: 'Partner 4',
    target: 'partner@xy.com',
    date: 'Sep 30',
    datetime: '2020-09-30',
  },
  {
    id: 5,
    type: eventTypes.completed,
    content: 'Partner 15',
    target: 'partner@xy.com',
    date: 'Oct 4',
    datetime: '2020-10-04',
  },
  {
    id: 6,
    type: eventTypes.completed,
    content: 'Partner 6',
    target: 'partner@xy.com',
    date: 'Oct 4',
    datetime: '2020-10-04',
  },
  {
    id: 7,
    type: eventTypes.completed,
    content: 'Partner 7',
    target: 'partner@xy.com',
    date: 'Sep 30',
    datetime: '2020-09-30',
  },
  {
    id: 8,
    type: eventTypes.completed,
    content: 'Partner 8',
    target: 'partner@xy.com',
    date: 'Oct 4',
    datetime: '2020-10-04',
  },
  {
    id: 9,
    type: eventTypes.completed,
    content: 'Partner 9',
    target: 'partner@xy.com',
    date: 'Oct 4',
    datetime: '2020-10-04',
  },
];
const MorePartners = ({
  partners,
  morePartners,
}: {
  partners: EventPartnersProps[];
  morePartners: number;
}) => {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);
  return (
    <>
      <button
        type='button'
        onClick={() => {
          setOpen(true);
        }}
      >
        <span className='flex-shrink-0 cursor-pointer text-xs font-medium leading-5'>
          +{morePartners}
        </span>
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-10 overflow-y-auto'
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <div className='flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0 '>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-opacity-75 transition-opacity' />
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
              <div className='inline-block w-full transform overflow-hidden rounded-xl border border-neutral-600 bg-neutral-800 px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle'>
                <div className='bg-neutral-800 px-2 sm:rounded-lg'>
                  <h2
                    id='timeline-title'
                    className='ml-3 text-lg font-medium text-neutral-50'
                  >
                    Event partners
                  </h2>

                  {/*Event partners */}
                  <div
                    className='scrollbar-1 mt-2 max-h-96 scroll-py-3 overflow-y-auto '
                    id='style-1'
                  >
                    {partners.map((partner, itemIdx) => (
                      <>
                        {itemIdx > 0 && (
                          <Partner
                            key={partner.id}
                            logo={partner.logo}
                            name={partner.name}
                            description={partner.description}
                          />
                        )}
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default MorePartners;

const Partner = ({
  logo,
  name,
  description,
}: {
  logo: string;
  name: string;
  description: string;
}) => {
  return (
    <div className=' pointer-events-auto flex w-full bg-transparent shadow-lg ring-1 ring-black ring-opacity-5'>
      <div className='w-0 flex-1 p-4'>
        <div className='flex items-start'>
          <div className='flex-shrink-0 pt-0.5'>
            <Image
              src={BASE_URL + logo}
              // "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
              width={50}
              height={50}
              alt={name}
              className='rounded-full'
            />
            {/* <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
              alt=""
            /> */}
          </div>
          <div className='ml-3 w-0 flex-1'>
            <p className='text-sm font-medium text-neutral-50'>{name}</p>
            {/* <p className="mt-1 text-sm text-neutral-400">{description}</p> */}
          </div>
        </div>
      </div>
      <div className='flex '>
        <button
          type='button'
          className='flex w-full items-center justify-center rounded-none rounded-r-lg border border-transparent p-4 text-sm font-medium text-indigo-300 hover:text-indigo-400'
        >
          Detail
        </button>
      </div>
    </div>
  );
};
