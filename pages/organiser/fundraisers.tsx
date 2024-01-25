import { FundraiserStore, orgTokenStore } from '@store/index';
import React, { useEffect } from 'react';

import { FormatDate, toIndianCurrency } from '@utils/index';
import Layout from '@components/organiser/layout/Layout';
import Link from 'next/link';
import { NextPageContext } from 'next';
import SearchFundraiser from '@components/organiser/fundraiser/SearchFundraiser';
import { ShareCountStore } from '@store/fundraiser-detail-store';
import { getCookie } from 'cookies-next';
import { cn, sanitizedData } from '@utils/lib';

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
    <Layout pageTitle='Your Fundraisers all in one place'>
      <div className='py-10 sm:py-10'>
        <div className='mx-auto px-6 lg:px-8'>
          <SearchFundraiser setFundraisers={setFundraisers} />

          <div className='mx-auto mt-6 grid max-w-screen-2xl grid-cols-1 gap-x-6 gap-y-6 pt-10 sm:mt-6 sm:grid-cols-2 sm:pt-1 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4'>
            {fundraisers &&
              fundraisers.map((event) => (
                <OrganiserFundraiserCardBlock
                  {...event}
                  key={'fundraiser-card-' + event.id}
                />
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

const OrganiserFundraiserCardBlock = ({
  ...fundraiser
}: FundraiserEventProps) => {
  return (
    <Link
      href={`fundraiser-detail/` + fundraiser.id}
      className='relative block overflow-hidden rounded-xl border border-neutral-200 p-4 sm:p-4 lg:p-6 xl:p-8'
    >
      <span className='absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-emerald-300 via-blue-500 to-purple-600'></span>

      <div className='sm:flex sm:justify-between sm:gap-4'>
        <div>
          <h3 className='line-clamp-2 text-lg font-bold text-gray-900 sm:text-xl'>
            {fundraiser.title}
          </h3>

          <p className='mt-1 text-xs font-medium text-gray-600'>
            Published on • {FormatDate(fundraiser.created_at)}
          </p>
        </div>

        <div className='hidden sm:block sm:shrink-0'>
          {/* <img
        alt="Paul Clapton"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        className="h-16 w-16 rounded-lg object-cover shadow-sm"
      /> */}
        </div>
      </div>

      <div className='mt-4'>
        <p
          className='line-clamp-3 max-w-[40ch] text-sm text-gray-500'
          dangerouslySetInnerHTML={sanitizedData(fundraiser.description)}
        ></p>
      </div>

      <dl className='mt-6 flex gap-4 sm:gap-6'>
        <div className='flex flex-col-reverse'>
          <dd className='text-sm font-medium text-gray-600'>
            {toIndianCurrency(fundraiser.donation_detail.total_donation)}
          </dd>
          <dt className='text-xs text-gray-500'>
            Donated
            {/* {FormatDate(fundraiser.created_at)} */}
          </dt>
        </div>

        <div className='flex flex-col-reverse'>
          <dd className='text-sm font-medium text-gray-600'>
            {fundraiser.donation_detail.total_donors}
          </dd>
          <dt className='text-xs text-gray-500'>
            Contributors
            {/* {FormatDate(fundraiser.end_date)} */}
          </dt>
        </div>
      </dl>
    </Link>
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
