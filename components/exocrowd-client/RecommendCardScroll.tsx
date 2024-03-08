// import {
//   recommendedData,
//   RecommendedProps,
// } from '@/src/contents/recommendData';

import { BiArrowBack } from 'react-icons/bi';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TbMoodPlus } from 'react-icons/tb';
import clsx from 'clsx';

const RecommendCard = (
  // { ...data }: RecommendedProps
) => {
  return (
    <div className='inline-block pr-3'>
      <Link href={`#!`}>
        <div className='relative h-40 w-40 max-w-7xl overflow-hidden rounded-3xl bg-neutral-200 duration-300 ease-in-out md:h-[20rem] md:w-[30rem]'>
          {/* <Image
            src={data.imageUrl}
            alt={data.name}
            height={100}
            width={100}
            className='aspect-square h-full w-full object-cover'
          /> */}
          <div
            className={clsx(
              'justify-left absolute inset-0 flex items-end bg-gradient-to-b from-black/10 to-black/90 p-4'
            )}
          >
            <h3 className='font-bold leading-tight tracking-tight text-white'>
              {/* {data.name} */}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

const RecommendCardScoll = () => {
  return (
    <>
      <div className='p-auto m-auto flex max-w-7xl flex-col'>
        <div className='mx-2 flex items-center justify-between px-3 py-5 pt-7 text-xl font-bold text-black'>
          <div className='flex items-center space-x-1'>
            <TbMoodPlus className='h-5 w-5 text-emerald-500' />
            <h1>Recommended for you</h1>
          </div>
          <span className='rounded-full bg-black px-2 py-1 text-xs font-semibold text-neutral-200'>
            View all
          </span>
        </div>
        <div className='hide-scroll-bar flex overflow-x-scroll pb-0'>
          <div className='ml-5 flex flex-nowrap md:ml-20 lg:ml-40'>
            <div className='inline-block pr-3'>
              <div className='flex h-32 w-32 max-w-xs items-center justify-center overflow-hidden rounded-3xl duration-300 ease-in-out'>
                <div className='flex flex-col space-y-4'>
                  <h3 className='text-sm font-medium text-neutral-500'>
                    We hope the best for your health
                  </h3>
                  <span className='flex h-10 w-10 items-center justify-center rounded-full bg-black text-white'>
                    <BiArrowBack className='h-6 w-6' />
                  </span>
                </div>
              </div>
            </div>
            {/* {recommendedData.map((data, index) => (
              <RecommendCard key={data.name + index * 3} {...data} />
            ))} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecommendCardScoll;
