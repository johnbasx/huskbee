import { FormatDate, toIndianCurrency } from '@utils/index';
import { FundraiserEventProps } from '../../../pages/organiser/fundraisers';
import Link from 'next/link';
import React from 'react';

const FundraiserTable = ({
  fundraisers,
}: {
  fundraisers: FundraiserEventProps[];
}) => {
  return (
    <div className='hidden rounded-lg border bg-white p-6 shadow-md sm:block'>
      <div className='inline-block min-w-full border-b border-neutral-200 align-middle '>
        <div className='px-4 py-4 text-2xl font-bold text-neutral-900 sm:text-2xl'>
          Recent Crowdfunding events
        </div>
        <table className='min-w-full divide-y divide-neutral-200'>
          <thead className='bg-neutral-100'>
            <tr>
              <th
                scope='col'
                className='px-6 py-3 text-left text-xs font-bold uppercase tracking-wide text-black '
              >
                Title
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-left text-xs font-bold uppercase tracking-wide text-black'
              >
                Donors
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-left text-xs font-bold uppercase tracking-wide text-black'
              >
                Donations
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-left text-xs font-bold uppercase tracking-wide text-black'
              >
                Created at
              </th>
              <th scope='col' className='relative px-6 py-3'>
                <span className='sr-only'>Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-neutral-200 bg-white'>
            {fundraisers.map((data, i) => {
              return i < 5 ? (
                <tr key={data.id}>
                  <td className='whitespace-nowrap px-6 py-6'>
                    <Link href={`/admin/fundraiser-detail/${data.id}`}>
                      <span className='flex items-center'>
                        {/* <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={data.}
                            alt=""
                          />
                        </div> */}
                        <div className='ml-4'>
                          <div className=' whitespace-nowrap text-sm font-medium capitalize text-neutral-800'>
                            {data.title}
                          </div>
                          {/* <div className="text-sm text-neutral-500">
                            {data.email}
                          </div> */}
                        </div>
                      </span>
                    </Link>
                  </td>
                  <td className='whitespace-nowrap px-6 py-6'>
                    <div className='whitespace-nowrap text-sm text-neutral-800'>
                      {data.total_donors}
                    </div>
                    {/* <div className="text-sm text-neutral-500">
                      {data.department}
                    </div> */}
                  </td>
                  <td className='whitespace-nowrap px-6 py-2 text-neutral-800'>
                    {toIndianCurrency(data.total_donation)}
                  </td>
                  <td className='whitespace-nowrap px-6 py-6 text-sm text-neutral-800'>
                    {FormatDate(data.created_at)}
                  </td>
                  <td className='whitespace-nowrap px-6 py-6 text-right text-sm font-medium'>
                    <Link href={`/admin/fundraiser-detail/${data.id}`}>
                      <span className='text-indigo-600 hover:text-indigo-900'>
                        Detail
                      </span>
                    </Link>
                  </td>
                </tr>
              ) : null;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FundraiserTable;
