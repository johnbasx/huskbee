import { DisplayCardBlockDataType } from '@components/exocrowd-client/scroll/FundraiserCardScroll';
import { BASE_URL } from '@constants/api-urls';
import { GetPercentage, toIndianCurrency } from '@utils/index';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RiVerifiedBadgeFill } from 'react-icons/ri';
import { TbHeart } from 'react-icons/tb';

const BrowseFundraiserCardBlock = ({ data }: DisplayCardBlockDataType) => {
  return (
    <div className='group flex max-w-sm cursor-pointer flex-col overflow-hidden rounded-2xl bg-white transition-colors duration-150 lg:bg-white lg:hover:bg-white/50'>
      <div className='relative overflow-hidden rounded-2xl'>
        <Link href={'/fundraiser/fundraiser-details/' + data.id}>
          <Image
            className='h-48 w-full rounded-2xl object-cover transition-transform duration-200 ease-in group-hover:scale-110 md:h-52'
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
        </Link>
        <div className='absolute left-2 top-2 rounded-full text-xs font-semibold tracking-tight text-black'>
          <div className='inline-flex items-center justify-end gap-1'>
            <span className='rounded-full bg-white/60 px-2 py-1.5 backdrop-blur-md'>
              1.6K donations
            </span>
          </div>
        </div>
        <div className='absolute bottom-2 right-2 rounded-full bg-white/40 p-2 text-xs font-semibold tracking-tight text-white backdrop-blur-md'>
          <TbHeart className='h-5 w-5' />
        </div>
      </div>
      <div className='flex flex-col gap-2 px-4 pb-4 pt-3'>
        <div className='inline-flex items-center justify-between gap-2'>
          <Link
            href={'/fundraiser/fundraiser-details/' + data.id}
            className='text-black'
          >
            <h3 className='line-clamp-1 text-lg font-medium leading-6'>
              {data.title}
            </h3>
          </Link>
          <div className=''>
            <RiVerifiedBadgeFill className='h-6 w-6 flex-shrink-0 text-emerald-500' />
          </div>
        </div>
        <div className='hidden'>
          <p
            className='line-clamp-2 text-xs text-neutral-500'
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        </div>

        <dl className='grid grid-cols-2 gap-4 text-neutral-500 sm:gap-6'>
          <div className='col-span-1 flex flex-col text-xs'>
            <div className='flex flex-col-reverse'>
              <dt>Supervisor</dt>
              <dd className='font-medium text-neutral-600'>
                {data.organiser_name}
              </dd>
            </div>
            {/* <span className='text-sm'>by {data.organiser_name}</span> */}
            {/* <span className='line-clamp-1'>
              for {data.organiser_name}

            </span> */}
          </div>
          <div className='col-span-1 flex items-start justify-start gap-4 text-xs'>
            <div className='flex flex-col-reverse'>
              <dt>Helpers</dt>
              <dd className='font-medium text-neutral-600'>179</dd>
              {/* FIXME */}
            </div>
            <div className='flex flex-col-reverse'>
              <dt>Left</dt>
              <dd className='font-medium text-neutral-600'>14 Days</dd>
              {/* FIXME */}
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
            className='block overflow-hidden rounded-full bg-neutral-300/50 lg:bg-neutral-300/50'
          >
            <span
              className='block h-1.5 rounded-full bg-gradient-to-r from-emerald-200 to-blue-600'
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

        <div className='my-2 grid grid-cols-2 text-base'>
          <dl className='flex gap-4 sm:gap-6'>
            <div className='flex flex-col'>
              {/* <span className='text-xs tracking-tight text-neutral-600'>
                DONATED
              </span> */}
              <dt className='text-lg font-semibold text-neutral-800 lg:text-base'>
                {data.donation_detail.total_donation === 0 ? (
                  <span className='text-emerald-500'>awaiting for help</span>
                ) : (
                  <span>
                    {toIndianCurrency(data.donation_detail.total_donation)}
                  </span>
                )}
                {/*FIXME  */}

                <br />
              </dt>
              <dt className='text-sm text-neutral-600'>
                <span>out of </span>
                <span className=''>{toIndianCurrency(data.target_amount)}</span>
              </dt>
            </div>
          </dl>
          <div className='flex items-end justify-end'>
            <Link
              href={'/fundraiser/fundraiser-details/' + data.id}
              className='rounded-full bg-blue-50/70 px-4 py-2 text-sm font-medium text-blue-700 duration-300 ease-out group-hover:bg-blue-600 group-hover:text-blue-50'
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
