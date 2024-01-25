import {
  FirstDonationType,
  FundraiserEventProps,
  MaxDonationType,
} from '../../../pages/organiser/fundraisers';
import { GetDaysLeft, GetPercentage, toIndianCurrency } from '@utils/index';
import React, { useState } from 'react';
import {
  TbDevicesHeart,
  TbMoodHeart,
  TbPigMoney,
  TbTrendingUp,
  TbUserHeart,
  TbUserUp,
} from 'react-icons/tb';

import { IconType } from 'react-icons';
import Link from 'next/link';
import LoadingDots from '@components/common/LoadingDots';
import SocialShare from './SocialShare';
import { cn } from '@utils/lib';
import usePageIsLoading from '@hooks/usePageIsLoading';

// import { formatDate } from 'date-fns';

type DonationDetailType = {
  share_count: number;
  fundraiser_id: FundraiserEventProps['id'];
  total_donation: number;
  target_amount: number;
  total_donors: number;
  first_donation: FirstDonationType | null;
  end_date: string;
  max_donation: MaxDonationType | null;
  goToDonatePage: () => {};
};
export type DonatedUserAndAmountSmallDisplayType = {
  username: string;
  donated_amount: number;
  redirect_link: string;
  redirect_text: string;
  Icon: IconType;
};

const DonationDetail = ({
  first_donation,
  max_donation,
  share_count,
  fundraiser_id,
  total_donation,
  target_amount,
  total_donors,
  end_date,
  goToDonatePage,
}: DonationDetailType) => {
  const { pageIsLoading } = usePageIsLoading();
  const [contributeButtonClick, setContributeButtonClick] = useState(false);
  return (
    <div className='rounded-2xl border-neutral-400/30 bg-white py-2 lg:border lg:p-5 lg:shadow-xl'>
      <div className='mb-4 flex flex-col gap-4'>
        <div className='flex flex-col gap-2 text-base'>
          <div className='flex flex-col'>
            <span className='text-2xl font-bold tracking-tight text-neutral-800'>
              {total_donation === 0 ? (
                <span className='text-emerald-500'>awaiting for help</span>
              ) : (
                <span>{toIndianCurrency(total_donation)}</span>
              )}
              {/* {toIndianCurrency(total_donation)} */}
              {/* <span className="">raised</span> */}
            </span>
          </div>
          <span className='text-base text-neutral-500'>
            raised / <span className=''>{toIndianCurrency(target_amount)}</span>
          </span>
        </div>

        <div>
          <span id='ProgressLabel' className='sr-only'>
            Donation Progress
          </span>

          <span
            // role="progressbar"
            // aria-labelledby="ProgressLabel"
            // aria-valuenow="75"
            className='block rounded-full bg-blue-900/20'
          >
            <span
              className='block h-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500'
              style={{ width: GetPercentage(total_donation, target_amount) }}
              // Dynamic data for progress bar
            />
          </span>
        </div>
        <span className='font-nato inline-flex items-center gap-2 text-sm font-medium text-slate-500'>
          <span>
            {total_donors}
            <span className='font-nunito'> donations</span>
          </span>
          <span className='text-slate-400'>&bull;</span>
          <span>
            {end_date}
            {GetDaysLeft(end_date) <= 0 ? (
              'fundraiser ended'
            ) : (
              <>
                {GetDaysLeft(end_date)}
                <span className='font-nunito'>days left</span>
              </>
            )}
          </span>
        </span>
      </div>
      <div className='flex flex-col gap-3 border-b border-dashed pb-3'>
        {/* <Link href={`/ad`}> */}
        <button
          type='button'
          disabled={pageIsLoading && contributeButtonClick ? true : false}
          onClick={() => {
            goToDonatePage(), setContributeButtonClick(true);
          }}
          className={cn(
            'w-full rounded-xl bg-gradient-to-b from-neutral-700 to-black px-4 py-3 text-lg font-semibold text-white duration-300 ease-out hover:bg-gradient-to-b hover:from-neutral-700 hover:to-neutral-900',
            pageIsLoading && contributeButtonClick
              ? 'animate-pulse opacity-75'
              : 'opacity-100'
          )}
        >
          {pageIsLoading && contributeButtonClick ? (
            <LoadingDots />
          ) : (
            <span>Contribute now</span>
          )}
        </button>
        {/* </Link> */}
        <SocialShare fundraiser_id={fundraiser_id} />

        <button
          type='button'
          className='w-full rounded-xl border bg-neutral-50 px-4 py-3 text-sm font-medium text-neutral-700'
        >
          Make monthly contributions
        </button>
        <span className='mt-1 inline-flex items-center justify-center gap-1 text-center text-sm font-medium text-neutral-500'>
          <span className=''>
            {share_count}
            {/* 345 */}
          </span>
          shares
          <span>&bull;</span>
          <span className=''>204</span>
          subscribed donations
        </span>
      </div>

      <div className='mt-4 flex flex-col gap-6'>
        <span className='inline-flex items-center gap-2 font-medium text-emerald-600'>
          <span className='rounded-full bg-emerald-100 p-2.5'>
            <TbTrendingUp className='text-xl' />
          </span>
          1.4K <span className=''> people just donated</span>
        </span>
        {/* <DonatedUserAndAmountSmallDisplay
                    username="Anonymous"
                    donated_amount={2500}
                    redirect_link="#!"
                    redirect_text="Recent donations"
                    Icon={TbDevicesHeart}
                /> */}
        {max_donation && (
          <DonatedUserAndAmountSmallDisplay
            username={max_donation.donated_by}
            donated_amount={max_donation.amount}
            redirect_link='#!'
            redirect_text='Top donations'
            Icon={TbMoodHeart}
          />
        )}
        {/* {min_max_donation && <DonatedUserAndAmountSmallDisplay
                    username={min_max_donation.min_donated_by}
                    donated_amount={min_max_donation.min_amount}
                    redirect_link="#!"
                    redirect_text="Smallest donation"
                    Icon={TbUserUp}
                />} */}
        {first_donation != null ? (
          <DonatedUserAndAmountSmallDisplay
            username={first_donation.fullname}
            donated_amount={first_donation.amount}
            redirect_link='#!'
            redirect_text='First donation'
            Icon={TbUserUp}
          />
        ) : (
          ''
        )}
        <div className='flex flex-wrap gap-2'>
          <Link
            href={`/fundraiser/donations/${fundraiser_id}`}
            className='inline-flex max-w-fit items-center gap-1 rounded-md border bg-neutral-50 px-4 py-1.5 text-center text-xs font-medium'
          >
            <TbPigMoney />
            View all transactions
          </Link>
          <Link
            href='#!'
            className='inline-flex max-w-fit items-center gap-1 rounded-md border bg-neutral-50 px-4 py-1.5 text-center text-xs font-medium'
          >
            <TbUserHeart />
            View all donors
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonationDetail;

export const DonatedUserAndAmountSmallDisplay = ({
  username,
  donated_amount,
  redirect_link,
  redirect_text,
  Icon,
}: DonatedUserAndAmountSmallDisplayType) => {
  return (
    <div className='inline-flex items-center gap-2 text-left font-medium text-neutral-800'>
      <span className='rounded-full bg-blue-50 p-2.5 text-blue-600'>
        <Icon className='text-xl' />
      </span>

      <div className='flex flex-col text-sm'>
        {username}
        <div className='inline-flex items-center gap-2 text-sm'>
          <span className='text-base font-bold tracking-tight text-black'>
            {toIndianCurrency(donated_amount)}
          </span>
          <span className='text-neutral-400'>&bull;</span>
          <Link
            href={redirect_link}
            className='text-xs text-neutral-500 underline'
          >
            {redirect_text}
          </Link>
        </div>
      </div>
    </div>
  );
};
