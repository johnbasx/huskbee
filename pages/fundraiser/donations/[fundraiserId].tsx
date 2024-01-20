import { BASE_URL, CROWDFUNDING_BASE_URL } from '@constants/api-urls';
import { FormatDate, toIndianCurrency } from '@utils/index';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React, { useEffect } from 'react';

import { DonationProps } from '../../organiser/fundraiser-detail/[fundraiserId]';
import Layout from '@components/exocrowd-client/Layout';

const Donations = ({
  donations,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout title={`Donations for ${donations[0].fundraiser_title}`}>
      <div className='mx-auto max-w-5xl py-10'>
        Donations for {donations[0].fundraiser_title}
        <ul role='list' className='divide-y divide-neutral-100'>
          {donations &&
            donations.map((donation) => (
              <li
                key={donation.id}
                className='flex justify-between gap-x-6 py-5'
              >
                <div className='flex min-w-0 gap-x-4'>
                  <img
                    className='h-12 w-12 flex-none rounded-full bg-neutral-50'
                    src={BASE_URL + donation.donor_photo_url}
                    alt=''
                  />
                  <div className='min-w-0 flex-auto'>
                    <p className='text-sm font-semibold leading-6 text-neutral-900'>
                      {donation.donor_name}
                    </p>
                    <p className='mt-1 truncate text-xs leading-5 text-neutral-500'>
                      {donation.donor_email}
                    </p>
                  </div>
                </div>
                <div className='hidden shrink-0 sm:flex sm:flex-col sm:items-end'>
                  <p className='text-sm leading-6 text-neutral-900'>
                    {toIndianCurrency(donation.amount)}
                  </p>
                  <p className='mt-1 text-xs leading-5 text-neutral-700'>
                    Donated on {FormatDate(donation.created_at)}
                  </p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Donations;

export const getServerSideProps: GetServerSideProps<{
  donations: DonationProps[];
}> = async (context) => {
  const { fundraiserId } = context.query;
  const data = await fetch(`${CROWDFUNDING_BASE_URL}donors/${fundraiserId}`);
  const obj = await data.json();
  const donations = obj.results;

  if (!donations || donations.detail === 'Not found.') {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
      // notFound: true,
    };
  }
  return { props: { donations } };
};
