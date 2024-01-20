import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';
import { BiArrowBack } from 'react-icons/bi';

export type ScrollType = {
  heading: string;
  Icon: IconType;
  viewAllLink: string;
  emptyFirstCard: boolean;
  emptyCardText?: string;
  //   scrollList: Array<T>;
  children: React.ReactNode;
};

export const FirstScrollEmptyCard = ({
  emptyCardText,
}: Pick<ScrollType, 'emptyCardText'>) => {
  return (
    <div className='inline-block pr-3'>
      <div className='flex w-[20rem] max-w-xs items-center justify-center overflow-hidden rounded-3xl duration-300 ease-in-out md:w-[22rem]'>
        <div className='flex flex-col space-y-4'>
          <h3 className='text-sm font-medium text-neutral-500'>
            {emptyCardText}
          </h3>
          <span className='flex h-10 w-10 items-center justify-center rounded-full bg-black text-white'>
            <BiArrowBack className='h-6 w-6' />
          </span>
        </div>
      </div>
    </div>
  );
};

// Main Component
const ScrollContainer = ({
  heading,
  Icon,
  viewAllLink,
  emptyFirstCard = false,
  emptyCardText = 'We hope the best for your support',
  children,
}: ScrollType) => {
  const ScrollHeading = () => {
    return (
      <div className='mx-2 flex items-center justify-between px-3 py-5 pt-7 text-xl font-bold text-black'>
        <div className='flex items-center space-x-1'>
          <Icon className='h-5 w-5 text-emerald-500' />
          <h1>{heading}</h1>
        </div>
        <Link
          href={viewAllLink}
          className='px-2 py-1 text-xs font-semibold text-neutral-800'
        >
          View all
        </Link>
      </div>
    );
  };
  return (
    <section className='m-auto max-w-screen-2xl lg:px-6'>
      <div className='p-auto flex flex-col'>
        <ScrollHeading />
        <div className='hide-scroll-bar flex overflow-x-scroll pb-0'>
          {emptyFirstCard && (
            <FirstScrollEmptyCard emptyCardText={emptyCardText} />
          )}
          <div className='ml-5 flex flex-nowrap'>
            {/* {scrollList.map((item, index) => (
              <div key={"Scroll data" + heading + index}>{children}</div>
            ))} */}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollContainer;
