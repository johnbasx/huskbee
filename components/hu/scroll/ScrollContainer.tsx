import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { BiArrowBack } from "react-icons/bi";

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
}: Pick<ScrollType, "emptyCardText">) => {
  return (
    <div className='inline-block pr-3'>
      <div className='flex items-center justify-center w-[20rem] md:w-[22rem] max-w-xs overflow-hidden duration-300 ease-in-out rounded-3xl'>
        <div className='flex flex-col space-y-4'>
          <h3 className='text-sm font-medium text-gray-500'>{emptyCardText}</h3>
          <span className='flex items-center justify-center w-10 h-10 text-white bg-black rounded-full'>
            <BiArrowBack className='w-6 h-6' />
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
  emptyCardText = "We hope the best for your support",
  children,
}: ScrollType) => {
  const ScrollHeading = () => {
    return (
      <div className='flex items-center justify-between px-3 py-5 mx-2 text-xl font-bold text-black pt-7'>
        <div className='flex items-center space-x-1'>
          <Icon className='w-5 h-5 text-emerald-500' />
          <h1>{heading}</h1>
        </div>
        <Link
          href={viewAllLink}
          className='px-2 py-1 text-xs font-semibold text-slate-800'
        >
          View all
        </Link>
      </div>
    );
  };
  return (
    <section className='m-auto max-w-screen-2xl lg:px-6'>
      <div className='flex flex-col p-auto'>
        <ScrollHeading />
        <div className='flex pb-0 overflow-x-scroll hide-scroll-bar'>
          {emptyFirstCard && (
            <FirstScrollEmptyCard emptyCardText={emptyCardText} />
          )}
          <div className='flex ml-5 flex-nowrap'>
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
