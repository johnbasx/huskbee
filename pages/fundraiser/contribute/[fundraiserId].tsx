import { BASE_URL, CROWDFUNDING_BASE_URL } from '@constants/api-urls';
import { FormatDate, toIndianCurrency } from '@utils/index';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { FundraiserEventsProps } from '../../organiser/fundraiser-detail/[fundraiserId]';
import Image from 'next/image';
import Layout from "@components/exocrowd-client/Layout";
import React from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react'

const Contribute = ({
  fundraiser_detail,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter()
  return (
    <Layout title={`Contribute to ${fundraiser_detail.title}}`} >
      <div className="max-w-5xl mx-auto text-slate-700 font-semibold py-8">
        Fundraiser title - {fundraiser_detail.title}<br />
        Fundraiser goal - {fundraiser_detail.goal}<br />
        Fundraiser description - {fundraiser_detail.description}<br />
        Target amount - {toIndianCurrency(fundraiser_detail.target_amount)}<br />
        End date - {FormatDate(fundraiser_detail.end_date)}<br />
        Total donors - {fundraiser_detail.total_donors}<br />
        Total donations - {toIndianCurrency(fundraiser_detail.total_donation)}<br />
        Fundraiser creator or Organiser name - {fundraiser_detail.organiser_name}<br /><br />

        organiser logo -
        <Image src={BASE_URL + '/media/' + fundraiser_detail.organiser_logo} height={400} width={400} alt='organiser-logo' />

        Fundraiser photo -
        <Image src={BASE_URL + fundraiser_detail.fundraiser_photo[0].photo} height={400} width={400} alt='fundraiser-photo' />
      </div>
    </Layout >
  )
}

export default Contribute

export const getServerSideProps: GetServerSideProps<{
  fundraiser_detail: FundraiserEventsProps;
}> = (async (context) => {
  const { fundraiserId } = context.query;
  const data = await fetch(
    `${CROWDFUNDING_BASE_URL}fundraiser-detail/${fundraiserId}`,
  );
  const fundraiser_detail = await data.json();

  if (!fundraiser_detail || fundraiser_detail.detail === 'Not found.') {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
      // notFound: true,
    };
  }
  return { props: { fundraiser_detail } };
});