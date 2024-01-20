import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiArrowRight } from 'react-icons/hi2';
import { TbArrowRight } from 'react-icons/tb';

const HeroSection = () => {
  return (
    <>
      <section className='cta-sec relative mx-auto max-w-screen-xl px-4 py-4 md:px-8'>
        <div className='absolute left-0 top-0 h-full w-full bg-white opacity-40' />
        <div className='relative z-10 items-center gap-5 lg:flex'>
          <div className='max-w-lg flex-1 py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left'>
            <h3 className='text-3xl font-semibold text-neutral-800 md:text-4xl'>
              Need Funds to Pay For a{' '}
              <span className='text-emerald-700'>
                Social Cause or Medical Emergencies?
              </span>
            </h3>
            <p className='mt-3 leading-relaxed text-neutral-500'>
              0% Platform Fees. Raise maximum funds for the cause you care about
              and manage all the transactions.
            </p>
            <Link
              className='mt-10 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-lg font-semibold text-neutral-50'
              href='#!'
            >
              Start a fundraiser for free
              <TbArrowRight className='h-5 w-5' />
            </Link>
          </div>
          <div className='mx-auto mt-5 flex-1 sm:w-9/12 lg:mt-0 lg:w-auto'>
            <Image
              src='/images/save-manipur.jpg'
              alt='hero image'
              width={1000}
              height={1000}
              quality={100}
              priority
              className='w-full rounded-3xl'
            />
          </div>
        </div>
      </section>
      <section className='relative bg-heroImage bg-cover bg-center bg-no-repeat'>
        <div className='absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white/20 sm:bg-transparent sm:bg-gradient-to-r' />

        <div className='relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8'>
          <div className='max-w-xl text-center sm:text-left'>
            <div>
              <p className='text-3xl font-semibold tracking-tight text-black sm:text-4xl'>
                Need Funds to Pay For a Social Cause or Medical Emergencies?
              </p>
              <p className='mt-4 max-w-xl text-lg tracking-tight text-neutral-600'>
                0% Platform Fees. Raise maximum funds for the cause you care
                about and manage all the transactions.
              </p>
            </div>
            <div className='mt-16 flex flex-col items-center justify-center gap-3 lg:flex-row lg:justify-start'>
              <a
                className='inline-flex items-center justify-center rounded-full border-2 border-black bg-black px-10 py-3 text-center text-lg font-semibold text-white duration-200 hover:border-black hover:bg-neutral-900 focus:outline-none focus-visible:outline-black focus-visible:ring-black lg:w-auto'
                href='#!'
              >
                Start a fundraiser for free
              </a>
              <a
                className='inline-flex items-center text-sm font-semibold leading-6 text-neutral-900'
                href='#!'
              >
                <span> Learn more </span>→
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
