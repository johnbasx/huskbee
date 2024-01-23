// import { recommendedData } from "@/src/contents/recommendData";
import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { TbBuildingBroadcastTower } from 'react-icons/tb';
import LargeFundCard from './LargeFundCard';
import FundCard from './FundCard';

const CardScrollWrapper = () => {
  return (
    <>
      <div className='p-auto m-auto flex max-w-7xl flex-col'>
        <div className='mx-2 flex items-center justify-between px-3 py-5 pt-7 text-xl font-bold text-black'>
          <div className='flex items-center space-x-1'>
            <TbBuildingBroadcastTower className='h-5 w-5 text-emerald-500' />
            <h1>Trending right now</h1>
          </div>
          <span className='px-2 py-1 text-xs font-semibold text-neutral-800'>
            View all
          </span>
        </div>
        <div className='hide-scroll-bar flex overflow-x-scroll pb-0'>
          <div className='ml-5 flex flex-nowrap'>
            {/* <div className='inline-block pr-3'>
                            <div className='flex items-center justify-center w-[20rem] md:w-[22rem] max-w-xs overflow-hidden duration-300 ease-in-out rounded-3xl'>
                                <div className='flex flex-col space-y-4'>
                                    <h3 className='text-sm font-medium text-neutral-500'>
                                        We hope the best for your support
                                    </h3>
                                    <span className='flex items-center justify-center w-10 h-10 text-white bg-black rounded-full'>
                                        <BiArrowBack className='w-6 h-6' />
                                    </span>
                                </div>
                            </div>
                        </div> */}
            {/* {recommendedData.map((data, index) => (
              // <RecommendCard key={data.name + index * 3} {...data} />
              // <LargeFundCard key={data.name + index * 3} />
              <FundCard key={data.name + index} />
            ))} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardScrollWrapper;
