import React from 'react';

const BookedBy = () => {
  return (
    <>
      <div className='px-4 py-5 sm:px-6'>
        <h3 className='text-lg font-medium leading-6 text-neutral-900'>
          Booked by
        </h3>
      </div>
      <div className='border-t border-neutral-200'>
        <dl>
          <div className='bg-neutral-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-base font-medium text-neutral-500'>
              Full name
            </dt>
            <dd className='mt-1 text-base text-neutral-900 sm:col-span-2 sm:mt-0'>
              Laishram Chinglemba
            </dd>
          </div>
          <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-base font-medium text-neutral-500'>
              Phone number
            </dt>
            <dd className='mt-1 text-base text-neutral-900 sm:col-span-2 sm:mt-0'>
              +91 9523845328
            </dd>
          </div>
          <div className='bg-neutral-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-base font-medium text-neutral-500'>
              Email address
            </dt>
            <dd className='mt-1 text-base text-neutral-900 sm:col-span-2 sm:mt-0'>
              chinglemba@xy.com
            </dd>
          </div>
        </dl>
      </div>
    </>
  );
};

export default BookedBy;
