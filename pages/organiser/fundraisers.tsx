import { FundraiserStore, orgTokenStore } from '@store/index';
import React, { useEffect } from 'react';

import { FormatDate } from '@utils/index';
import Layout from '@components/organiser/layout/Layout';
import Link from 'next/link';
import { NextPageContext } from 'next';
import SearchFundraiser from '@components/organiser/fundraiser/SearchFundraiser';
import { ShareCountStore } from '@store/fundraiser-detail-store';
import { getCookie } from 'cookies-next';

export type RecentDonorType = {
  donated_by__photo: string;
};

export type DonationDetailType = {
  recent_donors: RecentDonorType[];
  total_donation: number;
  total_donors: number;
};

export type MaxDonationType = {
  donated_by: string;
  amount: number;
  donated_id: string;
};

export type FirstDonationType = {
  fullname: string;
  amount: number;
  donor_id: string;
};

export interface FundraiserEventProps {
  id: string;
  title: string;
  goal: string;
  description: string;
  open_status: boolean;
  approved_status: string;
  target_amount: number;
  end_date: string;
  created_at: string;
  organiser: string;
  organiser_name: string;
  organisation_name: string;
  organiser_logo: string;
  first_donation: FirstDonationType | null;

  donation_detail: DonationDetailType;
  max_donation: MaxDonationType | null;
  share_count: number;
}

const Fundraisers = ({ token }: { token: string }) => {
  const { setOrgToken } = orgTokenStore();
  const { fundraisers, setFundraisers } = FundraiserStore();

  useEffect(() => {
    setOrgToken(token);
  }, [token]);

  return (
    <Layout pageTitle='Your Fundraiser Events'>
      <div className='bg-transparent py-10 sm:py-10'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <SearchFundraiser setFundraisers={setFundraisers} />

          <div className='mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-6 sm:pt-1 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
            {fundraisers &&
              fundraisers.map((event) => (
                <article
                  key={event.id}
                  className='flex max-w-xl flex-col items-start justify-between space-y-2 rounded-lg border bg-white p-6 shadow-lg'
                >
                  <div className='group relative'>
                    <h3 className=' text-lg font-semibold leading-6 text-black'>
                      <Link href={`fundraiser-detail/` + event.id}>
                        <span className='absolute inset-0 cursor-pointer' />
                        {event.title}
                      </Link>
                    </h3>
                    <p className='mt-4 line-clamp-3 text-sm leading-6 text-neutral-700'>
                      {event.description}
                    </p>
                  </div>
                  <div className='relative mt-8 flex items-center gap-x-4'>
                    <div className='text-sm leading-6'>
                      <p className='font-semibold text-neutral-700'>
                        <a href='#!'>
                          <span className='absolute inset-0' />
                          {event.donation_detail.total_donors + ' Donors'}
                        </a>
                      </p>
                      {/* <p className="text-neutral-600">{post.author.role}</p> */}
                    </div>
                  </div>
                  <div className='flex w-full flex-col justify-between text-center text-sm text-black md:flex-row'>
                    <div>
                      <span className='mt-1 font-medium'>
                        Created on{' '}
                        {/* {event.created_at + "  " + event.created_at.length} */}
                        {FormatDate(event.created_at)}
                      </span>
                    </div>
                    {/* text-[#166534] bg-[#DCFCE7]*/}
                    <div>
                      <span
                        className={`relative rounded-full border border-transparent shadow-lg  ${
                          event.open_status ? 'bg-[#7ce7a1]' : 'bg-red-400'
                        } px-2 py-1 font-medium text-black hover:border hover:border-neutral-700 hover:bg-neutral-100 hover:text-black hover:shadow-xl`}
                      >
                        {event.open_status ? 'Active' : 'Close'}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Fundraisers;

export async function getServerSideProps(context: NextPageContext) {
  const req = context.req;
  const res = context.res;
  const token = getCookie('org_token', { req, res });

  return {
    props: { token },
  };
}
