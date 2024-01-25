import { TableHead, TableValue } from '@components/common/table/Others';

import { BASE_URL } from '@constants/api-urls';
import { DonationProps } from '../../../pages/organiser/fundraiser-detail/[fundraiserId]';
import DonorInfo from './DonorInfo';
import { DonorsObjStore } from '@store/organiser-fundraiserDetail-store';
import { FcMultipleInputs } from 'react-icons/fc';
import { FormatDate } from '@utils/index';
import Pagination from '@components/common/table/pagination';
import React from 'react';
import axios from 'axios';
import { orgTokenStore } from '@store/index';
import Image from 'next/image';

const FundDonors = ({
  totalDonation,
  donors,
  next,
  prev,
}: {
  totalDonation: number;
  donors: DonationProps[];
  next: string | null;
  prev: string | null;
}) => {
  const { token } = orgTokenStore();
  const { setDonorsIns } = DonorsObjStore();

  const getData = async (url: string | null) => {
    if (url != null) {
      try {
        const response = await axios(url, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setDonorsIns(response.data);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div
      id='fund-donors'
      className='h-screen rounded-xl border bg-white p-8 shadow'
    >
      <div className='flex space-x-6'>
        <h2
          id='applicant-information-title'
          className='text-xl font-bold text-black'
        >
          Donations
        </h2>
        <div className='mt-1 flex  space-x-4'>
          <span className='text-blue-700'>
            {totalDonation > 1
              ? `${totalDonation} Total donations`
              : `Only ${totalDonation} donation`}{' '}
          </span>
          <FcMultipleInputs className=' h-6 w-6' />
        </div>
      </div>
      <div className=' overflow-hidden border-b sm:rounded-lg'>
        <table className='min-w-full divide-y divide-neutral-200'>
          <thead className='bg-white'>
            <tr>
              <TableHead title='Name' />
              <TableHead title='Donated on' />
              <TableHead title='Amount' />
              <TableHead title='Action' />
            </tr>
          </thead>
          <tbody className='divide-y divide-neutral-200 bg-white'>
            {donors.map((donor, idx) => (
              <tr key={'donor-' + donor.donor_email + idx}>
                <td className='whitespace-nowrap px-6 py-4'>
                  <div className='flex items-center'>
                    <div className='h-10 w-10 flex-shrink-0'>
                      <Image
                        height={30}
                        width={30}
                        quality={30}
                        className='h-10 w-10 rounded-full object-cover'
                        src={BASE_URL + donor.donor_photo_url}
                        alt=''
                      />
                    </div>
                    <div className='ml-4'>
                      <div className='text-sm font-medium text-neutral-900'>
                        {donor.donor_name}
                      </div>
                      <div className='text-sm text-neutral-500'>
                        {donor.donor_email}
                      </div>
                    </div>
                  </div>
                </td>
                <TableValue value={FormatDate(donor.created_at)} />
                <TableValue value={`₹ ${donor.amount}`} />

                <td className='whitespace-nowrap px-6 py-4 text-sm font-medium'>
                  <DonorInfo />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          pagenumberList={[1, 2, 3]}
          next={next}
          prev={prev}
          getPageData={getData}
        />
      </div>
    </div>
  );
};

export default FundDonors;
