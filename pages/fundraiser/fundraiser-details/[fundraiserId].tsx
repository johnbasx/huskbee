import {
  BASE_URL,
  CROWDFUNDING_BASE_URL,
  USER_BASE_URL,
} from '@constants/api-urls';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Image, { ImageProps } from 'next/image';
import React, { useEffect, useState } from 'react';
import {
  TbBrandWhatsapp,
  TbCalendarCheck,
  TbEmergencyBed,
  TbPhone,
  TbTag,
  TbUser,
} from 'react-icons/tb';

import DonationDetail from '@components/fundraiser/fundraiser-detail/DonationDetail';
import FundraiserDetailDescription from '@components/fundraiser/fundraiser-detail/FundraiserDetailDescription';
import { FundraiserEventsProps } from '../../organiser/fundraiser-detail/[fundraiserId]';
import ImageScrollWithThumbnails from '@components/exocrowd-client/scroll/ImageScrollWithThumbnails';
import Layout from '@components/exocrowd-client/Layout';
import Link from 'next/link';
import { ShareCountStore } from '@store/fundraiser-detail-store';
import { Toaster } from 'react-hot-toast';
import { getCookie } from 'cookies-next';
import { orgTokenStore } from '@store/index';
import { useRouter } from 'next/router';

const temporary_phone = 919920512634;
const urgent = false;

type OrganiserDisplayType = {
  organiser_name: string;
  organiser_logo: string;
  organisation_name: string;
};
const FundraiserDetailsPage = ({
  access_token,
  fundraiser_detail,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { user_token, setUserToken } = orgTokenStore();
  const { count, setCount } = ShareCountStore();

  console.log('fundraiser_detail_sc: ', fundraiser_detail.share_count);

  useEffect(() => {
    setCount(fundraiser_detail.share_count);
  }, []);

  useEffect(() => {
    if (access_token != '') {
      setUserToken(access_token);
    }
  }, [user_token]);

  const goToDonatePage = async () => {
    router.push(
      {
        pathname: `/fundraiser/contribute/${fundraiser_detail.id}`,
        query: {
          fundraiser_title: fundraiser_detail.title,
        },
      },
      `/fundraiser/contribute/${fundraiser_detail.id}`
    );
  };
  return (
    <>
      {' '}
      <Toaster />
      <Layout title='Exocrowd - fundraiser details page'>
        <section className='mx-auto max-w-screen-2xl bg-neutral-50 py-4 md:pb-16 md:pt-8 lg:px-8'>
          {urgent && <UrgentFundraiserFlag />}
          <FundraiserTitle title={fundraiser_detail.title} />
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div className='col-span-1 px-4 md:pr-0 lg:col-span-2'>
              <ImageScrollWithThumbnails
                fundraisers_photos={fundraiser_detail.fundraiser_photo}
              />
              {/* Mobile donation details */}
              <div className='mt-4 block md:hidden'>
                <DonationDetail
                  first_donation={fundraiser_detail.first_donation}
                  max_donation={
                    fundraiser_detail.max_donation &&
                    fundraiser_detail.max_donation
                  }
                  share_count={count}
                  fundraiser_id={fundraiser_detail.id}
                  total_donation={
                    fundraiser_detail.donation_detail.total_donation
                  }
                  target_amount={fundraiser_detail.target_amount}
                  total_donors={fundraiser_detail.donation_detail.total_donors}
                  end_date={fundraiser_detail.end_date}
                  goToDonatePage={goToDonatePage}
                />
                {/* <DonationDetailSideUpdates
									share_count={count}
									fundraiser_id={fundraiser_detail.id}
									total_donation={fundraiser_detail.total_donation}
									target_amount={fundraiser_detail.target_amount}
									total_donors={fundraiser_detail.total_donors}
									end_date={fundraiser_detail.end_date}
									goToDonatePage={goToDonatePage}
								/> */}
              </div>

              <FundraiserOrganiserTag
                organiser_name={fundraiser_detail.organiser_name}
                beneficiary_name='Gaurav'
              />
              <FundraiserDetailDescription
                details={fundraiser_detail.description}
              />
            </div>
            <div className='sticky top-24 col-span-1 mt-4 hidden self-start px-4 md:mt-0 lg:col-span-1 lg:block'>
              {/* fundraiser details info */}
              <DonationDetail
                first_donation={fundraiser_detail.first_donation}
                max_donation={fundraiser_detail.max_donation}
                share_count={count}
                fundraiser_id={fundraiser_detail.id}
                total_donation={
                  fundraiser_detail.donation_detail.total_donation
                }
                target_amount={fundraiser_detail.target_amount}
                total_donors={fundraiser_detail.donation_detail.total_donors}
                end_date={fundraiser_detail.end_date}
                goToDonatePage={goToDonatePage}
              />
              <DonationDetailOrganiserDisplay
                organisation_name={fundraiser_detail.organisation_name}
                organiser_name={fundraiser_detail.organiser_name}
                organiser_logo={fundraiser_detail.organiser_logo}
              />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export const FundraiserOrganiserTag = ({
  organiser_name,
  beneficiary_name,
}: {
  organiser_name: string;
  beneficiary_name: string;
}) => {
  return (
    <div className='flex flex-col gap-0 py-4'>
      <div className='line-clamp-2 inline-flex items-start gap-2 text-xs md:items-center md:text-sm'>
        <TbUser />
        <p>
          {organiser_name} is organizing this fundraiser on behalf of{' '}
          {beneficiary_name}.
        </p>
      </div>
      <div className='inline-flex flex-wrap gap-3 text-xs md:gap-4 md:text-sm'>
        <span className='inline-flex items-center gap-2'>
          <TbCalendarCheck /> Created 2d ago
        </span>
        <span>&bull;</span>
        <p className='inline-flex items-center gap-2'>
          <TbTag />
          <Link href='#!' className='underline'>
            Medical
          </Link>
        </p>
      </div>
    </div>
  );
};

export const DonationDetailOrganiserDisplay = ({
  organisation_name,
  organiser_name,
  organiser_logo,
}: OrganiserDisplayType) => {
  return (
    <div className='mt-6 flex flex-col gap-4 rounded-2xl bg-white px-6 py-4 shadow-lg'>
      <h3 className='text-sm font-bold'>Organisers &amp; Beneficiaries</h3>
      <DonationDetailSingleOrganiserCard
        organiser_logo={organiser_logo}
        user_group='Organiser'
        full_name={organiser_name}
        username='manikantasingh'
        organisation_name={organisation_name}
        // organisation_name={"Meitei Apunba Lup"}
        phone_number={temporary_phone}
        whatsapp_number={temporary_phone}
      />
      <DonationDetailSingleOrganiserCard
        organiser_logo={organiser_logo}
        user_group='Beneficiary'
        full_name='Gaurav'
        username='gaurav555'
      />
    </div>
  );
};

export type DonationDetailSingleOrganiserCardType = {
  organiser_logo: string;
  user_group: string;
  full_name: string;
  username: string;
  phone_number?: number;
  whatsapp_number?: number;
  organisation_name?: string;
  profile_image?: ImageProps['src'];
};

export const DonationDetailSingleOrganiserCard = ({
  organiser_logo,
  user_group,
  full_name,
  username,
  organisation_name,
  profile_image,
  phone_number,
  whatsapp_number,
}: DonationDetailSingleOrganiserCardType) => {
  return (
    <div className='inline-flex items-start gap-2'>
      {organiser_logo ? (
        <Image
          className='h-10 w-10 rounded-full object-cover'
          alt={`profile-image-${full_name}`}
          src={BASE_URL + '/media/' + organiser_logo}
          height={50}
          width={50}
          quality={30}
        />
      ) : (
        <div className='rounded-full bg-neutral-200 p-2 text-xl text-neutral-700'>
          <TbUser />
        </div>
      )}

      <div className='flex flex-col text-xs'>
        <span>{user_group}</span>
        <div className='inline-flex items-baseline gap-2 text-base'>
          <Link href='#!' className='font-bold tracking-tight text-blue-700'>
            {full_name}
          </Link>
          {organisation_name && (
            <>
              <span className='text-neutral-400'>&bull;</span>
              <span className='text-xs'>{organisation_name}</span>
            </>
          )}
        </div>
        <div className='mt-2 flex flex-wrap gap-2'>
          {phone_number && (
            <Link
              href={`tel:${phone_number}`}
              className='inline-flex max-w-fit items-center gap-1 rounded-md border bg-neutral-50 px-4 py-1.5 text-center font-semibold'
            >
              <TbPhone />
              Contact
            </Link>
          )}
          {whatsapp_number && (
            <Link
              href={`https://api.whatsapp.com/send?phone=${whatsapp_number}&text=Hi%20Exocrowd%2C%0AI%20want%20to%20inquire%20about%20starting%20a%20fundraiser%20for%20my%20%3Cyour%20purpose%3E`}
              aria-label='Chat on WhatsApp'
              className='inline-flex max-w-fit items-center gap-1 rounded-md border bg-neutral-50 px-4 py-1.5 text-center font-semibold'
            >
              <TbBrandWhatsapp />
              Send in WhatsApp
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export const FundraiserTitle = ({ title }: { title: string }) => {
  return (
    <div className='px-4 py-2 text-left'>
      <h3 className='mb-2 line-clamp-3 text-2xl font-bold text-neutral-950 lg:mb-4 lg:text-4xl'>
        {title}
        {/* Fundraiser in support for the people living in relief camps */}
      </h3>
    </div>
  );
};

export const UrgentFundraiserFlag = () => {
  return (
    <div className='mx-auto mb-2 max-w-fit px-6 lg:mb-8'>
      <div className='line-clamp-1 flex items-center rounded-full bg-rose-200 px-4 py-2.5 text-center lg:px-4 lg:py-3'>
        <h1 className='inline-flex items-center gap-2 text-xs font-semibold text-rose-900 lg:text-base'>
          <TbEmergencyBed />
          This fundraiser need urgent need of funds
        </h1>
      </div>
    </div>
  );
};
export default FundraiserDetailsPage;

export const getServerSideProps: GetServerSideProps<{
  access_token: string;
  fundraiser_detail: FundraiserEventsProps;
}> = async (context) => {
  const { fundraiserId } = context.query;
  const data = await fetch(
    `${CROWDFUNDING_BASE_URL}fundraiser-detail/${fundraiserId}`
  );
  const fundraiser_detail = await data.json();

  const req = context.req;
  const res = context.res;
  const token = getCookie('user_token', { req, res });

  let access_token = '';
  if (token != undefined && typeof token == 'string') {
    access_token = token;
  }

  if (!fundraiser_detail || fundraiser_detail.detail === 'Not found.') {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
      // notFound: true,
    };
  }
  return { props: { access_token, fundraiser_detail } };
};
