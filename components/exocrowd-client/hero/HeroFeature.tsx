import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  TbArrowRight,
  TbArrowUpRight,
  TbArrowWaveRightUp,
  TbCircleDot,
} from "react-icons/tb";

const FeatureCard1 = () => {
  return (
    <article className='relative overflow-hidden rounded-2xl lg:rounded-3xl transition'>
      <Image
        alt='Office'
        width={500}
        height={500}
        quality={100}
        src='/images/children.jpg'
        className='absolute brightness-110 inset-0 h-full w-full object-cover'
      />
      <Image
        alt='Office'
        width={500}
        height={500}
        quality={100}
        src='/overlays/gardient-overlay-15.svg'
        className='absolute inset-0 bg-gradient-to-tr from-black to-transparent brightness-105 h-full w-full object-cover'
      />
      <div className='relative hidden p-4 lg:flex justify-between items-center'>
        <span className='inline-flex text-xs items-center gap-1.5 rounded-full px-4 py-2 bg-white text-black font-semibold transition'>
          local projects initiatives
        </span>
        <span className='bg-white text-black rounded-full p-3'>
          <TbArrowUpRight />
        </span>
      </div>
      <div className='relative pt-32 sm:pt-48 lg:pt-64'>
        <div className='p-4 sm:p-6'>
          <h3 className='mt-0.5 text-xl drop-shadow-lg md:text-4xl font-bold text-white'>
            Transparent Funding
          </h3>

          <Link
            href='#!'
            className='inline-flex mt-6 text-sm items-center gap-1.5 rounded-full px-4 py-2 bg-white/10 backdrop-blur-md border border-white/10 text-white font-semibold transition'
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
    <article className='relative overflow-hidden rounded-2xl lg:rounded-3xl transition'>
      <Image
        alt='Office'
        width={500}
        height={500}
        quality={100}
        src='/images/relief-camp.jpg'
        className='absolute brightness-110 inset-0 h-full w-full object-cover'
      />
      <Image
        alt='Office'
        width={500}
        height={500}
        quality={100}
        src='/overlays/gardient-overlay-17.svg'
        className='absolute inset-0 bg-gradient-to-tr from-black to-transparent brightness-105 h-full w-full object-cover'
      />

      <div className='relative pt-32 sm:pt-0 sm:pb-48 lg:pb-64'>
        <div className='p-4 sm:p-6'>
          <h3 className='mt-0.5 text-xl drop-shadow-lg md:text-4xl font-bold text-white'>
            Inspiration & Impact
          </h3>

          <Link
            href='#!'
            className='inline-flex mt-6 text-sm items-center gap-1.5 rounded-full px-4 py-2 bg-white/10 border border-white/10 backdrop-blur-md text-white font-semibold transition'
          >
            Explore
            <TbCircleDot className='h-3 w-3 text-blue-300' />
          </Link>
        </div>
      </div>
      <div className='relative hidden p-4 lg:flex justify-between items-center'>
        <span className='inline-flex text-xs items-center gap-1.5 rounded-full px-4 py-2 bg-white text-black font-semibold transition'>
          catalyst for new ideas
        </span>
        <span className='bg-white text-black rounded-full p-3'>
          <TbArrowUpRight />
        </span>
      </div>
    </article>
  );
};
const FeatureCard3 = () => {
  return (
    <article className='relative overflow-hidden rounded-2xl lg:rounded-3xl transition'>
      <Image
        alt='Office'
        width={500}
        height={500}
        quality={100}
        src='/images/memorial.jpg'
        className='absolute brightness-110 inset-0 h-full w-full object-cover'
      />
      <Image
        alt='Office'
        width={500}
        height={500}
        quality={100}
        src='/overlays/gardient-overlay-16.svg'
        className='absolute inset-0 bg-gradient-to-tr from-black to-transparent h-full brightness-105 w-full object-cover'
      />
      <div className='relative hidden p-4 lg:flex justify-between items-center'>
        <span className='inline-flex text-xs items-center gap-1.5 rounded-full px-4 py-2 bg-white text-black font-semibold transition'>
          democratic decision
        </span>
        <span className='bg-white text-black rounded-full p-3'>
          <TbArrowUpRight />
        </span>
      </div>
      <div className='relative pt-32 sm:pt-48 lg:pt-64'>
        <div className='p-4 sm:p-6'>
          <h3 className='mt-0.5 drop-shadow-lg text-xl md:text-4xl font-bold text-white'>
            Participation & Involvement
          </h3>

          <Link
            href='#!'
            className='inline-flex mt-6 text-sm items-center gap-1.5 rounded-full px-4 py-2 bg-white/10 backdrop-blur-md border border-white/10 text-white font-semibold transition'
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
    <article className='relative bg-black block sm:hidden overflow-hidden rounded-2xl lg:rounded-3xl transition'>
      <div className='p-4 text-slate-50 '>
        <h3 className='text-xl font-semibold'>
          Bring a creative project to life.
        </h3>
        <p className='mt-4 text-sm'>
          Raising Funds was never this easy. Start a fundraiser in 5 minutes!
        </p>
        <span className='bg-blue-400 mt-4 inline-flex text-center items-center justify-center text-black rounded-full p-3 text-xl font-medium'>
          <TbArrowUpRight className='w-6 h-6' />
        </span>
      </div>
    </article>
  );
};

const HeroFeature = () => {
  return (
    <section className='py-8 md:py-12 relative max-w-screen-2xl mx-auto'>
      <div className='mx-auto flex flex-col md:flex-row relative px-4 py-2 sm:px-6 lg:px-8'>
        <div className='flex-1 max-w-3xl pt-4 pb-4 md:pt-8 justify-center text-left'>
          <h1 className='text-black text-3xl leading-relaxed md:text-4xl tracking-tight py-2 rounded-full'>
            We help local{" "}
            <span className='border border-blue-300 leading-relaxed rounded-full px-3 py-0.5'>
              people
            </span>
            , entrepreneurs &{" "}
            <span className='bg-blue-500 text-white leading-relaxed rounded-full px-3 py-0.5'>
              organizations
            </span>{" "}
            raise funds.
          </h1>
        </div>
        <div className='flex-1 py-4 md:py-14 justify-center text-left md:text-right'>
          <Link
            href='#!'
            className='border inline-flex items-center gap-2 text-sm border-slate-700 font-semibold rounded-full px-6 py-2.5 text-slate-700'
          >
            Learn more
            <TbCircleDot className='h-4 w-4 text-blue-300' />
          </Link>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-4 lg:grid-cols-3 px-4 py-2 sm:px-6 lg:px-8'>
        <FeatureCard1 />
        <FeatureCard2 />
        <FeatureCard3 />
        <EmptyCard />
      </div>
    </section>
  );
};

export default HeroFeature;
