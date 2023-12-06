import Image from "next/image";
import React from "react";

const LargeFundCard = () => {
  return (
    <a
      href='#!'
      className='relative block overflow-hidden bg-white w-[17rem] md:w-[20rem] rounded-3xl border border-gray-200 p-4 sm:p-4 lg:p-4 mr-3'
    >
      <span className='absolute m-2 rounded-full bg-red-500 px-2 py-1 text-[0.6rem] text-white'>
        Tax benefits
      </span>
      <Image
        alt='Home'
        height={1000}
        width={1000}
        quality={100}
        src='https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        className='h-30 w-full rounded-xl object-cover'
      />
      <span className='absolute inset-x-0 bottom-0 h-2 bg-black'></span>
      {/* <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span> */}

      <div className='mt-2 sm:flex sm:justify-between sm:gap-4'>
        <div>
          <h3 className='line-clamp-2 text-lg font-bold text-gray-900 sm:text-xl'>
            In support of relief camp for displaced people
          </h3>

          <p className='mt-1 line-clamp-1 text-xs font-medium text-gray-600'>
            By CAS Organisation Group
          </p>
        </div>
      </div>
      {/* tags */}
      <div className='mt-2 space-x-1'>
        <span className='whitespace-nowrap rounded-full bg-rose-100 px-2.5 py-0.5 text-[0.6rem] font-medium text-rose-700'>
          emergency
        </span>
        <span className='whitespace-nowrap rounded-full bg-emerald-100 px-2.5 py-0.5 text-[0.6rem] font-medium text-emerald-700'>
          trending
        </span>
      </div>

      <div className='mt-2 text-sm '>
        <div className='my-2'>
          <span className='font-bold'>
            5104{" "}
            <span className='text-xs font-normal text-gray-500'>
              Amazing supporters{" "}
            </span>{" "}
          </span>
        </div>
        <div className='my-2'>
          <span className='font-bold'>
            ₹14,90,760{" "}
            <span className='text-xs font-normal text-gray-500'>
              money raised{" "}
            </span>{" "}
          </span>
        </div>
        <div>
          <span id='ProgressLabel' className='sr-only'>
            Loading
          </span>

          <span
            // role="progressbar"
            // aria-labelledby="ProgressLabel"
            // aria-valuenow="75"
            className='block rounded-full bg-gray-200'
          >
            <span
              className='block h-3 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'
              style={{ width: "75%" }}
            ></span>
          </span>
        </div>
      </div>

      {/* <dl className="mt-4 flex gap-4 sm:gap-6">
                <div className="flex flex-col-reverse">
                    <dt className="text-sm font-medium text-gray-600">3 hours ago</dt>
                    <dd className="text-xs text-gray-500">Last donation</dd>
                </div>

                <div className="flex flex-col-reverse">
                    <dt className="text-sm font-medium text-gray-600">26 Days</dt>
                    <dd className="text-xs text-gray-500">Days left</dd>
                </div>
            </dl> */}
      <div className='mt-4'>
        <span className='text-xs text-gray-500'>Latest activities</span>
        <div className='flex flex-row-reverse justify-end px-3'>
          <div className='relative m-1 ml-0 mr-1 flex h-10 w-auto items-center justify-center rounded-full text-[0.6rem] md:text-xs text-gray-500'>
            +5100 others
          </div>
          <div className='relative m-1 -ml-3 mr-1 flex h-10 w-10 items-center justify-center rounded-full border-r-2 border-white'>
            <Image
              height={20}
              width={20}
              className='rounded-full object-cover h-10 w-10'
              alt='A'
              src='https://randomuser.me/api/portraits/men/20.jpg'
            />
          </div>
          <div className='relative m-1 -ml-3 mr-1 flex h-10 w-10 items-center justify-center rounded-full border-r-2 border-white'>
            <Image
              height={20}
              width={20}
              className='rounded-full object-cover h-10 w-10'
              alt='B'
              src='https://randomuser.me/api/portraits/women/68.jpg'
            />
          </div>
          <div className='relative m-1 -ml-3 mr-1 flex h-10 w-10 items-center justify-center rounded-full border-r-2 border-white'>
            <Image
              height={20}
              width={20}
              className='rounded-full object-cover h-10 w-10'
              alt='C'
              src='https://randomuser.me/api/portraits/women/8.jpg'
            />
          </div>
          <div className='relative m-1 -ml-3 mr-1 flex h-10 w-10 items-center justify-center rounded-full border-r-2 border-white'>
            <Image
              height={20}
              width={20}
              className='rounded-full object-cover h-10 w-10'
              alt='D'
              src='https://randomuser.me/api/portraits/men/10.jpg'
            />
          </div>
        </div>
      </div>
    </a>
  );
};

export default LargeFundCard;
