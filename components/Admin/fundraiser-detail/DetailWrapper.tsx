import React from 'react';
import { UsersIcon } from '@heroicons/react/24/outline';

const DetailWrapper = ({
  children,
  status,
  totalDonation,
  totalDonors,
}: {
  children: React.ReactNode;
  status: string;
  totalDonation?: number;
  totalDonors?: number;
}) => {
  return (
    <div className='space-y-6 lg:col-span-2 lg:col-start-1'>
      <section aria-labelledby='applicant-information-title'>
        <div className='border bg-white shadow sm:rounded-lg'>
          <div className='flex justify-between px-4 py-5 sm:px-6'>
            <div>
              <div className='flex space-x-4'>
                <h2
                  id='applicant-information-title'
                  className='text-xl font-bold text-black'
                  // className="text-lg leading-6 font-medium text-neutral-900"
                >
                  Fundraiser event Information
                </h2>

                <dt>
                  <span>
                    <UsersIcon className='inline h-5 w-5 text-blue-700' />{' '}
                  </span>
                  <span className='ml-1 mt-1 max-w-2xl text-base text-blue-700'>
                    {totalDonors} Donors
                  </span>
                </dt>
              </div>
              <p className='mt-1 max-w-2xl text-sm text-blue-700'>
                Total donation ₹{totalDonation}
                {/* {totalDonors} */}
              </p>
            </div>
            <div>
              {status === 'AP' ? (
                <span className='inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800'>
                  Approved
                </span>
              ) : status === 'PN' ? (
                <span className='inline-flex items-center rounded-full bg-indigo-100 px-3 py-0.5 text-sm font-medium text-blue-700'>
                  Pending
                </span>
              ) : status === 'RE' ? (
                <span className='inline-flex items-center rounded-full bg-pink-100 px-3 py-0.5 text-sm font-medium text-pink-800'>
                  Rejected
                </span>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className='border-t border-neutral-200 px-4 py-5 sm:px-6'>
            {children}
          </div>
          <div>
            <a
              href='#!'
              className='block bg-neutral-50 px-4 py-4 text-center text-sm font-medium text-blue-600 hover:text-blue-700 sm:rounded-b-lg'
            >
              Read criteria and requirements needed to approve Fundraiser
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailWrapper;
