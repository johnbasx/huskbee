import { BASE_URL } from '@constants/api-urls';
import { DonationProps } from '../../../pages/organiser/fundraiser-detail/[fundraiserId]';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Donors = ({ donors }: { donors: DonationProps[] }) => {
  return (
    <section aria-labelledby='recent-hires-title'>
      <div className='overflow-hidden rounded-lg border bg-white shadow'>
        <div className='p-6'>
          <h2
            className='text-base font-medium text-neutral-900'
            id='recent-hires-title'
          >
            Recent donations
          </h2>
          <div className='mt-6 flow-root'>
            <ul className='-my-5 divide-y divide-neutral-200'>
              {donors?.map((donor) => (
                <li key={donor.id} className='py-4'>
                  <div className='flex items-center space-x-4'>
                    <div className='flex-shrink-0'>
                      {/* {donor.donor_photo_url} */}
                      <Image
                        height={30}
                        width={30}
                        quality={20}
                        className='h-8 w-8 rounded-full object-cover'
                        src={BASE_URL + donor.donor_photo_url}
                        alt={donor.donor_name}
                      />
                    </div>
                    <div className='min-w-0 flex-1'>
                      <p className='truncate text-sm font-medium text-neutral-900'>
                        {donor.donor_name}
                      </p>
                      <p className='truncate text-sm text-neutral-500'>
                        {`@${donor.donor_email}`}
                      </p>
                    </div>
                    <div>
                      <Link href={`/admin/user-detail/${donor.donor_id}`}>
                        <span className='inline-flex items-center rounded-full border border-neutral-300 bg-white px-2.5 py-0.5 text-sm font-medium leading-5 text-neutral-700 shadow-sm hover:bg-neutral-50'>
                          View
                        </span>
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className='mt-6'>
            <a
              href='#!'
              className='flex w-full items-center justify-center rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm hover:bg-neutral-50'
            >
              View all
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donors;
