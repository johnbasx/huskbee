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
import { RiVerifiedBadgeFill } from 'react-icons/ri';

const temporary_phone = 919920512634;
const urgent = false;

type OrganiserDisplayType = {
  organiser_name: string;
  organiser_logo: string;
  organisation_name: string;
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
      <Toaster />
      <Layout title='Exocrowd - fundraiser details page'>
        <section className='mx-auto max-w-screen-2xl bg-white py-4 md:pb-16 md:pt-8 lg:px-8'>
          {urgent && <UrgentFundraiserFlag />}
          <FundraiserTitle title={fundraiser_detail.title} />
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div className='col-span-1 px-4 md:pr-0 lg:col-span-2'>
              <ImageScrollWithThumbnails
                fundraisers_photos={fundraiser_detail.fundraiser_photo}
              />
              {/* Fundraiser Title on small screens */}
              <div className='py-2 text-left lg:hidden'>
                <h3 className='line-clamp-3 text-3xl font-bold tracking-tight text-neutral-950'>
                  {fundraiser_detail.title}
                </h3>
              </div>
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

              {/* <FundraiserOrganiserTag
                organiser_name={fundraiser_detail.organiser_name}
                beneficiary_name='Gaurav'
              /> */}
              <FundraiserOrganiserTag
                organiser_logo={fundraiser_detail.organiser_logo}
                user_group='Organiser'
                full_name={fundraiser_detail.organiser_name}
                username='manikantasingh'
                organisation_name={fundraiser_detail.organisation_name}
                phone_number={temporary_phone}
                whatsapp_number={temporary_phone}
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
              {/* <DonationDetailOrganiserDisplay
                organisation_name={fundraiser_detail.organisation_name}
                organiser_name={fundraiser_detail.organiser_name}
                organiser_logo={fundraiser_detail.organiser_logo}
              /> */}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

// TODO
export const FundraiserOrganiserTag = ({
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
    <div className='flex flex-col gap-0 py-10 lg:gap-4 lg:py-6'>
      {/* Verification tag */}
      <div className='flex items-center justify-between gap-3 overflow-hidden rounded-xl border border-neutral-400 px-3 py-4 lg:px-4 lg:py-6'>
        <div className='inline-flex items-center justify-center text-center font-semibold leading-5'>
          <Image
            alt='Olive-left-image'
            height={20}
            width={20}
            className='h-8 w-7 object-contain'
            src={'/icons/ui/olive-branch-left.svg'}
          />
          <span>
            Fundraiser
            <br />
            Verified
          </span>
          <Image
            alt='Olive-right-image'
            height={20}
            width={20}
            className='h-8 w-7 object-contain'
            src={'/icons/ui/olive-branch-right.svg'}
          />
        </div>
        <div className='hidden max-w-sm font-medium lg:block'>
          One of the most loved fundraisers on Provide, according to our lovely
          supporters
        </div>
        <div className='flex flex-col justify-center text-center text-lg font-semibold'>
          <span>6</span>
          <Link href={'#!'} className='text-xs underline'>
            Reviews
          </Link>
        </div>
        <div>
          <RiVerifiedBadgeFill className='h-6 w-6 flex-shrink-0 text-emerald-500 lg:h-8 lg:w-8' />
        </div>
      </div>

      {/* Organiser details small */}
      <div className='flex flex-col gap-6 border-b border-neutral-200 py-6'>
        <div className='flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-start'>
          <div className='flex items-center justify-start gap-4'>
            {organiser_logo ? (
              <Image
                alt={`profile-image-${full_name}`}
                src={`${BASE_URL}/media/${organiser_logo}`}
                height={20}
                width={20}
                className='h-12 w-12 rounded-full border object-cover'
              />
            ) : (
              <TbUser className='h-12 w-12 overflow-hidden rounded-full bg-neutral-200 p-2.5 text-xl text-neutral-700' />
            )}
            <div className='flex flex-col text-lg font-medium'>
              <h4>Uploaded by {full_name}</h4>
              <p className='text-sm font-normal text-neutral-500'>
                {user_group} • 2d ago
              </p>
              {organisation_name && (
                <p className='text-sm font-normal text-neutral-500'>
                  {organisation_name}
                </p>
              )}
            </div>
          </div>

          <div className='flex flex-wrap gap-2'>
            {phone_number && (
              <Link
                href={`tel:${phone_number}`}
                className='inline-flex max-w-fit items-center gap-1 rounded-md border bg-neutral-50 px-4 py-1.5 text-center font-semibold'
              >
                <TbPhone className='text-emerald-500' />
                Contact
              </Link>
            )}
            {whatsapp_number && (
              <Link
                href={`https://api.whatsapp.com/send?phone=${whatsapp_number}&text=Hi%20Exocrowd%2C%0AI%20want%20to%20inquire%20about%20starting%20a%20fundraiser%20for%20my%20%3Cyour%20purpose%3E`}
                aria-label='Chat on WhatsApp'
                className='inline-flex max-w-fit items-center gap-1 rounded-md border bg-neutral-50 px-4 py-1.5 text-center font-semibold'
              >
                <TbBrandWhatsapp className='text-emerald-500' />
                Send in WhatsApp
              </Link>
            )}
          </div>
        </div>
        {/* Beneficiaries if any */}
        <div className='flex items-center justify-start gap-4'>
          <div>
            <Image
              src={'/images/children.jpg'}
              alt='organiser-profile-image'
              height={20}
              width={20}
              className='h-12 w-12 rounded-full object-cover'
            />
          </div>
          <div className='flex flex-col text-lg font-medium'>
            <h4>{username}</h4>
            <p className='text-sm font-normal text-neutral-500'>Beneficiary</p>
          </div>
        </div>
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
    <div className='hidden px-4 py-2 text-left lg:block'>
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
