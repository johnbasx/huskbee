import Image from "next/image";
import React from "react";
import { TbBuildingBroadcastTower } from "react-icons/tb";
import { recommendedData } from "../contents/recommendData";

export const StackedCard = () => {
  return (
    <div className='max-w-sm mr-4 border w-[60vw] md:w-[25vw] border-slate-200 bg-white rounded-2xl overflow-hidden'>
      <Image
        className='w-full max-h-40 object-cover'
        src='/images/hospitalized.jpg'
        width={200}
        height={200}
        priority
        quality={100}
        alt='Sunset in the mountains'
      />
      <div className='p-4 space-y-1'>
        <div className=''>
          <h2 className='font-bold text-lg line-clamp-2'>
            In support for displaced people in Manipur
          </h2>

          <p className='text-gray-700 text-base hidden'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className='gap-1.5 flex flex-wrap'>
          <span className='whitespace-nowrap rounded-full bg-rose-100 px-2.5 py-0.5 text-[0.6rem] font-medium text-rose-700'>
            emergency
          </span>
          <span className='whitespace-nowrap rounded-full bg-emerald-100 px-2.5 py-0.5 text-[0.6rem] font-medium text-emerald-700'>
            trending
          </span>
        </div>
        <div className='grid grid-cols-2'>
          <span className='text-xs font-semibold text-emerald-600'>
            By CAS Organisation
          </span>
          <span className='font-bold'>
            5104{" "}
            <span className='text-xs font-normal text-gray-500'>
              Amazing supporters
            </span>
          </span>
        </div>

        <div className='mt-2 text-sm '>
          <div className='my-2'>
            {/* <span className='font-bold'>
              5104{" "}
              <span className='text-xs font-normal text-gray-500'>
                Amazing supporters
              </span>
            </span> */}
          </div>
          <div className=''>
            <span className='font-bold'>
              ₹14,90,760{" "}
              <span className='text-xs font-normal text-gray-500'>
                money raised
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const StackedCards = () => {
  return (
    <section>
      <div className='flex flex-col m-auto max-w-screen-2xl p-auto sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between px-4 lg:px-0 py-4 text-xl font-bold text-black'>
          <div className='flex items-center space-x-1'>
            <TbBuildingBroadcastTower className='w-5 h-5 text-emerald-500' />
            <h1>Need urgent help</h1>
          </div>
          <span className='py-1 text-xs font-semibold text-slate-800'>
            View all
          </span>
        </div>
        <div className='flex pb-0 overflow-x-scroll hide-scroll-bar'>
          <div className='flex ml-4 lg:ml-0 flex-nowrap'>
            {/* <div className='inline-block pr-3'>
                          <div className='flex items-center justify-center w-[20rem] md:w-[22rem] max-w-xs overflow-hidden duration-300 ease-in-out rounded-3xl'>
                              <div className='flex flex-col space-y-4'>
                                  <h3 className='text-sm font-medium text-gray-500'>
                                      We hope the best for your support
                                  </h3>
                                  <span className='flex items-center justify-center w-10 h-10 text-white bg-black rounded-full'>
                                      <BiArrowBack className='w-6 h-6' />
                                  </span>
                              </div>
                          </div>
                      </div> */}
            {recommendedData.map((data, index) => (
              // <RecommendCard key={data.name + index * 3} {...data} />
              // <LargeFundCard key={data.name + index * 3} />
              <StackedCard key={data.name + index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackedCards;
