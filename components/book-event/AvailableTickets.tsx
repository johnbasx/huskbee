import React, { useEffect, useState } from 'react';

import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { Tab } from '@headlessui/react';
import Link from 'next/link';

export const delivery_type = [
  {
    id: 1,
    type: 'VIP',
    description: '20 tickets are available out of 200',
    charge: '100',
  },
  {
    id: 2,
    type: 'Normal',
    description: '40 tickets are available out of 400',
    charge: '50',
  },
];

const AvailableTickets = () => {
  const [deliveryMethod, setDeliveryMethod] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    console.log('AvailableTickets: ', selectedIndex);
  }, [selectedIndex]);

  return (
    <>
      <div className='px-4 py-5 sm:px-6'>
        <h3 className='text-lg font-medium leading-6 text-neutral-900'>
          Available tickets
        </h3>
      </div>
      <dl>
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className='space-y-10 px-4 pb-4 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-8 md:space-y-0'>
            {delivery_type.map((type) => (
              <Tab
                key={type.id}
                className='focus: border-none border-neutral-200'
              >
                {({ selected }) => (
                  <Link
                    onClick={() => setDeliveryMethod(type.id)}
                    href='#!'
                    className={`group block w-full space-y-3 rounded-lg  border p-4 shadow-lg ${
                      selected
                        ? 'border border-sky-700'
                        : 'border-white hover:ring-sky-700'
                    }`}
                  >
                    <div className='flex justify-between'>
                      <h3
                        className={`text-base font-bold uppercase text-neutral-400 ${
                          selected && 'text-sky-700'
                        }`}
                      >
                        {type.type}
                      </h3>
                      <CheckCircleIcon
                        className={`float-right h-6 w-6 ${
                          selected ? 'text-sky-700 shadow-2xl' : 'text-white'
                        }`}
                      />
                    </div>
                    <div className='flex justify-start'>
                      <p
                        className={`items-start text-sm font-semibold ${
                          type.id === deliveryMethod
                            ? 'text-sky-700'
                            : 'text-neutral-500'
                        }`}
                      >
                        Some description of {type.type} tickets
                      </p>
                    </div>
                    <div className='flex justify-start'>
                      <p
                        className={`text-base font-bold ${
                          type.id === deliveryMethod
                            ? 'text-sky-700'
                            : 'text-neutral-900'
                        }`}
                      >
                        ₹ {type.charge}
                      </p>
                    </div>
                  </Link>
                )}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {delivery_type.map((type) => (
              <Tab.Panel
                key={type.id}
                className=' grid grid-cols-4 gap-x-4 gap-y-6 px-4 py-4'
              >
                {/* <div className="mt-6 grid grid-cols-4 gap-y-6 gap-x-4"> */}
                <div className='col-span-4 mb-2'>
                  <label
                    htmlFor='total-tickets'
                    className='block text-sm font-medium text-sky-700'
                  >
                    {type.description}
                  </label>
                  <div className='mt-1'>
                    <input
                      placeholder='Enter number of tickets'
                      type='number'
                      id='total-tickets'
                      name='total-tickets'
                      autoComplete='total-tickets'
                      className='block w-full rounded-md border-neutral-300 text-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                    />
                  </div>
                </div>
                {/* </div> */}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </dl>
    </>
  );
};

export default AvailableTickets;
