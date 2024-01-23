import { TbArrowDown, TbArrowRight, TbCircleFilled } from 'react-icons/tb';

import { HiStop } from 'react-icons/hi2';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

// import { HiStopCircle } from "react-icons/hi2";

const AttractiveHero = () => {
  return (
    // <section className='relative bg-gradient-to-b from-sky-500/30 to-rose-400/0 via-emerald-400/20 py-6 md:pb-12 bg-transparent'>
    <section className='relative bg-transparent bg-heroImage bg-cover bg-center bg-no-repeat py-8 md:py-20'>
      <div className='absolute inset-0 isolate bg-gradient-to-b from-black/80 via-black/30 to-black' />
      <div className='relative mx-auto max-w-screen-2xl px-4 py-2 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          <div className='mx-auto flex-1 justify-center py-8 text-left md:py-20'>
            <Image
              src='/exocrowd-iconw.svg'
              alt='Exocrowd icon'
              width={100}
              height={100}
              className='h-8 w-8'
            />
            <h1 className='rounded-full py-2 text-4xl font-bold tracking-tight text-white drop-shadow md:text-6xl'>
              Making contributions better for everyone
            </h1>
            <p className='mt-2 text-white drop-shadow-sm md:mt-6 md:text-2xl'>
              Exocrowd is supporting to help be the change you wish to see in
              Manipur. Empower impactful causes with your donations and make a
              difference today!
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: '80%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.6 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='rounded-[2rem] bg-white p-6 shadow-xl shadow-black/5 md:rounded-[2.5rem] md:p-12 lg:px-8 lg:py-12'
          >
            <div className='mx-auto max-w-xl'>
              <Image
                src='/exocrowd-logo.svg'
                alt='Exocrowd logo'
                width={100}
                height={100}
                className='h-4 w-auto md:h-6'
              />
              <div className='mb-6 mt-8 flex flex-wrap gap-1 text-black md:mt-20 md:gap-2'>
                <span className='rounded-full border border-black px-6 py-2 text-2xl font-normal tracking-tight md:text-5xl'>
                  Create
                </span>

                <span className='rounded-full border border-black px-6 py-2 text-2xl font-normal tracking-tight md:text-5xl'>
                  Donate
                </span>
                <span className='flex items-center justify-center rounded-full bg-blue-500 px-3.5 py-2 text-center text-2xl font-normal tracking-tight text-white md:px-2.5 md:text-5xl'>
                  <TbArrowRight />
                </span>
                <span className='rounded-full border border-black px-6 py-2 text-2xl font-normal tracking-tight md:text-5xl'>
                  Help
                </span>
                <span className='rounded-full border border-black px-6 py-2 text-2xl font-normal tracking-tight md:text-5xl'>
                  Develop
                </span>
                <span className='rounded-full border border-black px-6 py-2 text-2xl font-normal tracking-tight md:text-5xl'>
                  Together
                </span>
              </div>
              <ul className='flex list-decimal flex-col space-y-1 text-sm font-medium text-neutral-700 md:text-lg'>
                <li className='inline-flex items-center'>
                  Free fundraising for all. Raise money with full transparency.
                </li>
                <li className='inline-flex items-center'>
                  Support/Funding initiatives.
                </li>
                <li className='inline-flex items-center'>
                  Compounding Impact.
                </li>
              </ul>

              <div className='mt-6 flex flex-wrap items-center gap-2 md:mt-12'>
                <Link
                  href='#!'
                  className='inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-lg font-semibold text-white transition hover:bg-neutral-800'
                >
                  Start helping now
                  <TbCircleFilled className='h-4 w-4 text-blue-300' />
                </Link>
                <Link
                  href='#!'
                  className='inline-flex items-center gap-2 rounded-full bg-transparent px-6 py-3 font-semibold text-neutral-700 transition hover:text-neutral-900 md:px-6'
                >
                  Read more
                  <TbArrowRight className='h-5 w-5' />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AttractiveHero;
