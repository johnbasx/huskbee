import { AiFillBank } from 'react-icons/ai';
import { BsFillCreditCardFill } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import React from 'react';

const otherPaymentsOptions = [
  {
    name: 'Debit / Credit card',
    icon: BsFillCreditCardFill,
  },
  {
    name: 'Internet Banking',
    icon: AiFillBank,
  },
];

const BookingSummary = ({
  subtotal,
  gst,
  orderTotal,
}: {
  subtotal: number;
  gst: number;
  orderTotal: number;
}) => {
  return (
    <>
      <section
        aria-labelledby='summary-heading'
        className='mt-16 rounded-lg bg-neutral-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8'
      >
        <h2
          id='summary-heading'
          className='text-lg font-medium text-neutral-900'
        >
          Order summary
        </h2>
        <dl className='mt-6 space-y-4'>
          <div className='flex items-center justify-between'>
            <dt className='text-sm text-neutral-600'>Subtotal</dt>
            <dd className='text-sm font-medium text-neutral-900'>
              ₹{subtotal}
            </dd>
          </div>

          <div className='flex items-center justify-between border-t border-neutral-200 pt-4'>
            <dt className='flex text-sm text-neutral-600'>
              <span>GST</span>
              <a
                href='#'
                className='ml-2 flex-shrink-0 text-neutral-400 hover:text-neutral-500'
              >
                <span className='sr-only'>
                  Learn more about how tax is calculated
                </span>
                <QuestionMarkCircleIcon
                  className='h-5 w-5'
                  aria-hidden='true'
                />
              </a>
            </dt>
            <dd className='text-sm font-medium text-neutral-900'>₹{gst}</dd>
          </div>
          <div className='flex items-center justify-between border-t border-neutral-200 pt-4'>
            <dt className='text-base font-medium text-neutral-900'>
              Order total
            </dt>
            <dd className='text-base font-medium text-neutral-900'>
              ₹{orderTotal}
            </dd>
          </div>
        </dl>
        <div className='mt-6'>
          <p className='mb-2 text-xs text-indigo-700'>
            Paying Foxbeta Pvt. Ltd.
          </p>

          <Link href={'/final-payment/' + ['google-pay']}>
            <span className='flex w-full cursor-pointer items-center justify-center gap-x-2 rounded-md border border-transparent bg-black py-2 text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2'>
              <span className='sr-only'>Pay with Google Pay</span>
              <span>
                <FcGoogle className='h-6 w-6' />
              </span>{' '}
              <span className='font-medium'>Pay</span>
            </span>
          </Link>

          <div className='relative mt-8'>
            <div
              className='absolute inset-0 flex items-center'
              aria-hidden='true'
            >
              <div className='w-full border-t border-neutral-200' />
            </div>
            <div className='relative flex justify-center'>
              <span className='bg-white px-4 text-sm font-medium text-neutral-500'>
                or
              </span>
            </div>
          </div>

          <div className='space-y-4 py-6'>
            {otherPaymentsOptions.map((option) => (
              <button
                key={option.name}
                type='button'
                className='flex flex w-full items-center justify-center justify-between gap-x-2 rounded-md border bg-neutral-200 px-6 py-2 text-neutral-800 hover:bg-neutral-300 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2'
              >
                <span className=' text-lg font-medium'>{option.name}</span>{' '}
                <span className=''>
                  <option.icon className='h-6 w-6' />
                </span>
              </button>
            ))}
          </div>
          {/* <button
            type="button"
            disabled={orderTotal === 0 ? true : false}
            className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-50 focus:ring-indigo-500"
          >
            Pay now
          </button> */}
        </div>
      </section>
    </>
  );
};

export default BookingSummary;
