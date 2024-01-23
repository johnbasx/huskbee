import { BASE_URL } from '@constants/api-urls';
import { DonationProps } from '../../../pages/organiser/fundraiser-detail/[fundraiserId]';
import { FormatDate } from '@utils/index';
import React from 'react';

const Donations = ({ donors }: { donors: DonationProps[] }) => {
  return (
    <section aria-labelledby='recent-hires-title'>
      <div className='overflow-hidden rounded-lg border bg-white shadow'>
        <div className='p-6'>
          <div className='flex justify-between'>
            <h2
              className='text-base font-medium text-neutral-900'
              id='recent-hires-title'
            >
              Recent donations
            </h2>
            <a
              href='#donation-chart'
              className='cursor-pointer text-base text-blue-700'
            >
              View graph
            </a>
          </div>
          <div className='mt-6 flow-root'>
            <ul className='-my-5 divide-y divide-neutral-200'>
              {donors.length > 0 ? (
                donors.map((donor) => (
                  <li key={donor.id} className='py-4'>
                    <div className='flex items-center space-x-4'>
                      <div className='flex-shrink-0'>
                        {/* {donor.donor_photo_url} */}
                        <img
                          className='h-8 w-8 rounded-full'
                          src={BASE_URL + donor.donor_photo_url}
                          alt={donor.donor_name}
                        />
                      </div>
                      <div className='min-w-0 flex-1'>
                        <p className='truncate text-sm font-medium capitalize text-neutral-900'>
                          {donor.donor_name}
                        </p>
                        <p className='truncate text-sm text-neutral-500'>
                          {donor.donor_email}
                        </p>
                        <p className='truncate text-sm text-neutral-500'>
                          {`Donated on ${FormatDate(donor.created_at)}`}
                        </p>
                      </div>
                      <div>
                        <span className='text-neutral-800'>{`₹ ${donor.amount}`}</span>
                        {/* <Link href={`/admin/user-detail/${donor.donor_id}`}>
                          <span className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-neutral-300 text-sm leading-5 font-medium rounded-full text-neutral-700 bg-white hover:bg-neutral-50">
                            View
                          </span>
                        </Link> */}
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <li className='text-center text-xl font-medium text-black'>
                  No donations
                </li>
              )}
            </ul>
          </div>

          {donors.length > 0 && (
            <div className='mt-6'>
              <a
                href='#fund-donors'
                className='flex w-full items-center justify-center rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm hover:bg-neutral-50'
              >
                View all
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Donations;
