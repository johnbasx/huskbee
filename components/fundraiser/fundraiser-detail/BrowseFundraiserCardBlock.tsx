import { DisplayCardBlockDataType } from '@components/exocrowd-client/scroll/FundraiserCardScroll';
import { BASE_URL } from '@constants/api-urls';
import { GetPercentage, toIndianCurrency } from '@utils/index';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TbClockHour11, TbHeart, TbUsersGroup } from 'react-icons/tb';

const BrowseFundraiserCardBlock = ({ data }: DisplayCardBlockDataType) => {
  return (
    <div className='group flex max-w-sm cursor-pointer flex-col overflow-hidden rounded-2xl border border-neutral-300/50 bg-white p-2 shadow-md transition-colors duration-150 lg:bg-white lg:hover:bg-white/50'>
      <div className='relative overflow-hidden rounded-xl'>
        <Image
          className='h-44 w-full rounded-xl object-cover transition-transform duration-200 ease-in group-hover:scale-110 md:h-40'
          width={500}
          height={500}
          priority
          quality={100}
          src={
            data.fundraiser_photo.length === 0
              ? '/images/relief-camp.jpg'
              : BASE_URL + data.fundraiser_photo[0].photo
          }
          alt='donate'
        />
        <div className='absolute bottom-2 left-2 rounded-full text-xs font-semibold tracking-tight text-white'>
          <div className='inline-flex items-center justify-end gap-1'>
            <span className='rounded-full bg-black/30 px-2 py-1.5 backdrop-blur-md'>
              1.6K donations
            </span>
          </div>
        </div>
        <div className='absolute right-2 top-2 rounded-full bg-white/20 p-2 text-xs font-semibold tracking-tight text-white backdrop-blur-md'>
          <TbHeart className='h-5 w-5' />
        </div>
      </div>
      <div className='flex flex-col gap-2 px-3 py-3'>
        <Link
          href={'/fundraiser/fundraiser-details/' + data.id}
          className='text-black'
        >
          <h3 className='line-clamp-2 text-lg font-medium leading-6'>
            {data.title}
          </h3>
        </Link>
        <div>
          <p
            className='line-clamp-2 text-xs text-neutral-500'
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        </div>

        <dl className='mt-2 grid grid-cols-2 gap-4 text-neutral-500 sm:gap-6'>
          <div className='col-span-1 flex flex-col text-xs'>
            <span className='text-sm'>by {data.organiser_name}</span>
            <span className='line-clamp-1'>
              {/* for {data.organiser_name} */}
              for Meitei Youths
            </span>
          </div>
          <div className='col-span-1 flex items-start justify-start gap-4 text-xs'>
            <div className='flex flex-col'>
              <dt>
                <TbUsersGroup className='text-base' />
              </dt>
              <dd>179</dd>
            </div>
            <div className='flex flex-col'>
              <dt>
                <TbClockHour11 className='text-base' />
              </dt>
              <dd>14 Days</dd>
            </div>
          </div>
        </dl>

        <div className='mt-2'>
          <span id='ProgressLabel' className='sr-only'>
            Donation Progress
          </span>

          <span
            // role="progressbar"
            // aria-labelledby="ProgressLabel"
            // aria-valuenow="75"
            className='block rounded-full bg-neutral-300/50 lg:bg-neutral-300'
          >
            <span
              className='block h-1.5 rounded-full bg-gradient-to-r from-blue-200 to-blue-700'
              style={{
                width: GetPercentage(
                  data.donation_detail.total_donation,
                  data.target_amount
                ),
              }}
              // Dynamic data for progress bar
            />
          </span>
        </div>

        {/* <LatestSupportersAvatars /> */}

        <div className='mt-2 grid grid-cols-2 text-base'>
          <dl className='flex gap-4 sm:gap-6'>
            <div className='flex flex-col'>
              <dt className='text-xs text-neutral-600'>
                <span className='text-xl font-semibold text-neutral-800'>
                  {/* {toIndianCurrency(data.donation_detail.total_donation)}{' '} */}
                  {toIndianCurrency(3458901)} {/*FIXME  */}
                </span>
                <span>raised / </span>
                <span className=''>{toIndianCurrency(data.target_amount)}</span>
              </dt>
            </div>
          </dl>
          <div className='flex items-center justify-end'>
            <Link
              href={'/fundraiser/fundraiser-details/' + data.id}
              className='rounded-full bg-blue-50/80 px-4 py-2 text-sm font-medium text-blue-700 duration-300 ease-out group-hover:bg-blue-600 group-hover:text-blue-50'
            >
              Contribute
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseFundraiserCardBlock;
