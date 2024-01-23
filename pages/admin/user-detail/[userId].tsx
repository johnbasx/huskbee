import { CROWDFUNDING_BASE_URL, USER_BASE_URL } from '@constants/api-urls';

import { DonationProps } from '../../organiser/fundraiser-detail/[fundraiserId]';
import Donations from '@components/admin/donor-detail/Donations';
import Layout from '@components/admin/layout/Layout';
import { NextPageContext } from 'next';
import React from 'react';
import { getCookie } from 'cookies-next';

interface HuskbeeUser {
  full_name: string;
  total_donation_amount: number;
  email: string;
  phone: string;
  photo: string;
  created_at: string;
}
const DonorDetail = ({
  detail,
  donations,
}: {
  detail: HuskbeeUser;
  donations: DonationProps[];
}) => {
  return (
    <Layout pageTitle='Donor detail'>
      <div className='mx-auto my-10 max-w-6xl space-y-4 overflow-hidden bg-white shadow sm:rounded-lg'>
        <div>
          <div className='px-4 py-5 sm:px-6'>
            <h3 className='text-lg font-medium leading-6 text-neutral-900'>
              Donor&apos;s Information
            </h3>
          </div>
          <div className='border-t border-neutral-200 px-4 py-5 sm:p-0'>
            <dl className='sm:divide-y sm:divide-neutral-200'>
              <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                <dt className='text-sm font-medium text-neutral-500'>
                  Full name
                </dt>
                <dd className='mt-1 text-sm capitalize text-neutral-900 sm:col-span-2 sm:mt-0'>
                  {detail.full_name}
                </dd>
              </div>
              <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                <dt className='text-sm font-medium text-neutral-500'>
                  Phone number
                </dt>
                <dd className='mt-1 text-sm text-neutral-900 sm:col-span-2 sm:mt-0'>
                  {detail.phone}
                </dd>
              </div>
              <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                <dt className='text-sm font-medium text-neutral-500'>
                  Email address
                </dt>
                <dd className='mt-1 text-sm text-neutral-900 sm:col-span-2 sm:mt-0'>
                  {detail.email}
                </dd>
              </div>
              <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                <dt className='text-sm font-medium text-neutral-500'>
                  Account created on
                </dt>
                <dd className='mt-1 text-sm text-neutral-900 sm:col-span-2 sm:mt-0'>
                  {detail.created_at}
                </dd>
              </div>
              <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                <dt className='text-sm font-medium text-neutral-500'>
                  Total donated amount
                </dt>
                <dd className='mt-1 text-sm text-neutral-900 sm:col-span-2 sm:mt-0'>
                  {'₹ ' + detail.total_donation_amount}
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div>
          <Donations donations={donations} donor={detail.full_name} />
        </div>
      </div>
    </Layout>
  );
};

export default DonorDetail;

export async function getServerSideProps(context: NextPageContext) {
  const { userId } = context.query;
  const req = context.req;
  const res = context.res;
  const token = getCookie('admin_token', { req, res });

  const response = await fetch(
    USER_BASE_URL + 'huskbee-user-detail/' + userId,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const detail = await response.json();

  const donations_res = await fetch(
    CROWDFUNDING_BASE_URL + 'user-donations/' + userId,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const donations = await donations_res.json();

  if (!detail) {
    return {
      redirect: {
        destination: 'admin/home',
        permanent: false,
      },
    };
  }

  return {
    props: { token, detail, donations },
  };
}
