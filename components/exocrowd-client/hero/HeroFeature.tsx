import {
  TbArrowRight,
  TbArrowUpRight,
  TbArrowWaveRightUp,
  TbCircleDot,
  TbCircleFilled,
} from 'react-icons/tb';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FeatureCard1 = () => {
  return (
    <article className='relative overflow-hidden rounded-2xl transition lg:rounded-3xl'>
      <Image
        alt='Office'
        width={500}
        height={500}
        quality={100}
        src='/images/children.jpg'
        className='absolute inset-0 h-full w-full object-cover brightness-110'
      />
      <Image
        alt='Office'
        width={500}
        height={500}
        quality={100}
        src='/overlays/gardient-overlay-15.svg'
        className='absolute inset-0 h-full w-full bg-gradient-to-tr from-black to-transparent object-cover brightness-105'
      />
      <div className='relative hidden items-center justify-between p-4 lg:flex'>
        <span className='inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition'>
          local projects initiatives
        </span>
        <span className='rounded-full bg-white p-3 text-black'>
          <TbArrowUpRight />
        </span>
      </div>
      <div className='relative pt-32 sm:pt-48 lg:pt-64'>
        <div className='p-4 sm:p-6'>
          <h3 className='mt-0.5 text-xl font-bold text-white drop-shadow-lg md:text-4xl'>
            Transparent Funding
          </h3>

          <Link
            href='#!'
            className='mt-6 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition'
          >
            Explore
            <TbCircleDot className='h-3 w-3 text-blue-300' />
          </Link>
        </div>
      </div>
    </article>
  );
};
const FeatureCard2 = () => {
  return (
    <article className='relative overflow-hidden rounded-2xl transition lg:rounded-3xl'>
      <Image
        alt='Office'
        width={500}
        height={500}
        quality={100}
        src='/images/relief-camp.jpg'
        className='absolute inset-0 h-full w-full object-cover brightness-110'
      />
      <Image
        alt='Office'
        width={500}
        height={500}
        quality={100}
        src='/overlays/gardient-overlay-17.svg'
        className='absolute inset-0 h-full w-full bg-gradient-to-tr from-black to-transparent object-cover brightness-105'
      />

      <div className='relative pt-32 sm:pb-48 sm:pt-0 lg:pb-64'>
        <div className='p-4 sm:p-6'>
          <h3 className='mt-0.5 text-xl font-bold text-white drop-shadow-lg md:text-4xl'>
            Inspiration & Impact
          </h3>

          <Link
            href='#!'
            className='mt-6 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition'
          >
            Explore
            <TbCircleDot className='h-3 w-3 text-blue-300' />
          </Link>
        </div>
      </div>
      <div className='relative hidden items-center justify-between p-4 lg:flex'>
        <span className='inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition'>
          catalyst for new ideas
        </span>
        <span className='rounded-full bg-white p-3 text-black'>
          <TbArrowUpRight />
        </span>
      </div>
    </article>
  );
};
const FeatureCard3 = () => {
  return (
    <article className='relative overflow-hidden rounded-2xl transition lg:rounded-3xl'>
      <Image
        alt='Office'
        width={500}
        height={500}
        quality={100}
        src='/images/memorial.jpg'
        className='absolute inset-0 h-full w-full object-cover brightness-110'
      />
      <Image
        alt='Office'
        width={500}
        height={500}
        quality={100}
        src='/overlays/gardient-overlay-16.svg'
        className='absolute inset-0 h-full w-full bg-gradient-to-tr from-black to-transparent object-cover brightness-105'
      />
      <div className='relative hidden items-center justify-between p-4 lg:flex'>
        <span className='inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition'>
          democratic decision
        </span>
        <span className='rounded-full bg-white p-3 text-black'>
          <TbArrowUpRight />
        </span>
      </div>
      <div className='relative pt-32 sm:pt-48 lg:pt-64'>
        <div className='p-4 sm:p-6'>
          <h3 className='mt-0.5 text-xl font-bold text-white drop-shadow-lg md:text-4xl'>
            Participation & Involvement
          </h3>

          <Link
            href='#!'
            className='mt-6 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition'
          >
            Explore
            <TbCircleDot className='h-3 w-3 text-blue-300' />
          </Link>
        </div>
      </div>
    </article>
  );
};

const EmptyCard = () => {
  return (
    <article className='relative block overflow-hidden rounded-2xl bg-black transition sm:hidden lg:rounded-3xl'>
      <div className='p-4 text-neutral-50 '>
        <h3 className='text-xl font-semibold'>
          Bring a creative project to life.
        </h3>
        <p className='mt-4 text-sm'>
          Raising Funds was never this easy. Start a fundraiser in 5 minutes!
        </p>
        <span className='mt-4 inline-flex items-center justify-center rounded-full bg-blue-400 p-3 text-center text-xl font-medium text-black'>
          <TbArrowUpRight className='h-6 w-6' />
        </span>
      </div>
    </article>
  );
};

const HeroFeature = () => {
  return (
    <section className='relative mx-auto max-w-screen-2xl py-8 md:py-12'>
      <div className='relative mx-auto flex flex-col px-4 py-2 sm:px-6 md:flex-row lg:px-8'>
        <div className='max-w-3xl flex-1 justify-center pb-4 pt-4 text-left md:pt-8'>
          <h1 className='rounded-full py-2 text-3xl leading-relaxed tracking-tight text-black md:text-4xl'>
            We help local{' '}
            <span className='rounded-full border border-blue-300 px-3 py-0.5 leading-relaxed'>
              people
            </span>
            , entrepreneurs &{' '}
            <span className='rounded-full bg-blue-500 px-3 py-0.5 leading-relaxed text-white'>
              organizations
            </span>{' '}
            raise funds.
          </h1>
        </div>
        <div className='flex-1 justify-center py-4 text-left md:py-14 md:text-right'>
          <Link
            href='#!'
            className='inline-flex items-center gap-2 rounded-full border border-neutral-700 px-6 py-2.5 text-sm font-semibold text-neutral-700'
          >
            Learn more
            <TbCircleFilled className='h-4 w-4 text-blue-300' />
          </Link>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-4 px-4 py-2 sm:px-6 lg:grid-cols-3 lg:px-8'>
        <FeatureCard1 />
        <FeatureCard2 />
        <FeatureCard3 />
        <EmptyCard />
      </div>
    </section>
  );
};

export default HeroFeature;
