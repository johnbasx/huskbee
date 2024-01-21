import Layout from '@components/exocrowd-client/Layout';
import React, { useEffect } from 'react';
import {
  TbArrowRight,
  TbCircleCheck,
  TbHeadset,
  TbPigMoney,
  TbSearch,
} from 'react-icons/tb';
import { nanoid } from 'nanoid';
import BrowseFundraisersLayout from '@components/fundraiser/layout/BrowseFundraisersLayout';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getCookie } from 'cookies-next';
import { orgTokenStore } from '@store/index';
import { FundraiserEventsProps } from '../organiser/fundraiser-detail/[fundraiserId]';
import { CROWDFUNDING_BASE_URL } from '@constants/api-urls';
import { DisplayCardBlock } from '@components/exocrowd-client/scroll/MoreWaysScroll';
import BrowseFundraiserCardBlock from '@components/fundraiser/fundraiser-detail/BrowseFundraiserCardBlock';
import Pagination from '@components/fundraiser/layout/Pagination';
import Link from 'next/link';

export const headlineTags = [
  {
    id: nanoid(),
    tag: 'Verified Fundraisers',
    Icon: TbCircleCheck,
  },
  {
    id: nanoid(),
    tag: 'Help & Assistance',
    Icon: TbHeadset,
  },
  {
    id: nanoid(),
    tag: 'Tax Benefits',
    Icon: TbPigMoney,
  },
];

export const tagsList = [
  {
    id: nanoid(),
    tag: 'All',
  },
  {
    id: nanoid(),
    tag: 'Medical',
  },
  {
    id: nanoid(),
    tag: 'Relief Camps',
  },
  {
    id: nanoid(),
    tag: 'Organizations',
  },
  {
    id: nanoid(),
    tag: 'Child',
  },
  {
    id: nanoid(),
    tag: 'Projects',
  },
  {
    id: nanoid(),
    tag: 'Education',
  },
];

const BrowseFundraisers = ({
  access_token,
  fundraisers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { user_token, setUserToken } = orgTokenStore();
  // console.log('U_token: ', user_token);

  useEffect(() => {
    if (access_token != '') {
      setUserToken(access_token);
    }
  }, [user_token]);

  return (
    <Layout title='Exocrowd - fundraiser details page' className='bg-white'>
      <section className='mx-auto bg-white bg-heroImage bg-cover bg-no-repeat'>
        <div className='flex h-[50vh] w-full flex-col items-center justify-center py-4 backdrop-brightness-50 md:h-[25vh] md:py-20'>
          <div className='px-4 text-center text-white'>
            <h1 className='text-center text-2xl font-bold text-white md:text-3xl'>
              Want to make contributions?
            </h1>
            <p className='mt-2 text-sm'>
              You can make a huge impact to the lives of people with small
              contributions.
            </p>
            <div className='mx-auto mt-4 flex max-w-xs flex-wrap items-center justify-center gap-2'>
              {headlineTags.map((item, index) => (
                <span
                  key={`headline-tag-${item.id}`}
                  className='inline-flex items-center justify-center gap-1 rounded-full bg-neutral-950/30 px-1.5 py-1 text-xs'
                >
                  <item.Icon />
                  {item.tag}
                </span>
              ))}
            </div>
          </div>
          <div className='mx-auto mt-4 flex w-full max-w-xl items-center justify-center gap-2 px-4'>
            <div className='relative mx-auto w-full text-neutral-600'>
              <input
                className='h-12 w-full rounded-full border border-neutral-300 bg-white px-5 pl-12 text-sm font-medium shadow-2xl placeholder:text-neutral-600 focus:outline-none'
                type='search'
                name='search'
                placeholder='Search by name, fundraiser, handle, tag, description, etc... '
              />
              <span className='absolute left-0 top-0 ml-4 mt-4 text-lg text-neutral-500'>
                <TbSearch />
              </span>
            </div>
            <button
              type='submit'
              className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-center text-xl text-white duration-150 hover:bg-blue-700'
            >
              <TbArrowRight />
            </button>
          </div>
        </div>
      </section>
      <section className='mx-auto max-w-2xl'>
        {/* Tags */}
        <div className='px-4 py-4 lg:py-10'>
          <ul className='flex flex-wrap items-center justify-start gap-2 text-sm font-medium lg:justify-center lg:gap-3'>
            {tagsList.map((item, index) => (
              <li
                key={'fundraiser-tag-' + item.tag + index}
                className='rounded-full bg-neutral-200 px-3 py-2 text-black duration-300 first:bg-blue-300 hover:bg-neutral-300'
              >
                <Link href={'#!'}>{item.tag}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <BrowseFundraisersLayout>
        {fundraisers?.length && (
          <div className='pb-4 text-sm text-neutral-500'>
            <p>Showing {fundraisers.length} fundraisers near you</p>
          </div>
        )}
        <div className='grid grid-cols-1 gap-6 px-0 sm:mx-0 md:grid-cols-3 lg:grid-cols-3'>
          {fundraisers.map((data, index) => (
            <BrowseFundraiserCardBlock
              key={`display-card-block-${data.id}${index}`}
              data={data}
            />
          ))}
        </div>
        <Pagination />
      </BrowseFundraisersLayout>
    </Layout>
  );
};

export default BrowseFundraisers;

export const getServerSideProps: GetServerSideProps<{
  access_token: string;
  fundraisers: FundraiserEventsProps[];
}> = async (context) => {
  const req = context.req;
  const res = context.res;
  const token = getCookie('user_token', { req, res });

  let access_token = '';
  if (token != undefined && typeof token == 'string') {
    access_token = token;
  }

  const data = await fetch(`${CROWDFUNDING_BASE_URL}fundraisers/?q=all`);
  const fundraisers = await data.json();
  if (!fundraisers) {
    return {
      notFound: true,
    };
  }
  return { props: { access_token, fundraisers } };
};
