import Link from "next/link";
import React from "react";
import {
  TbChartBar,
  TbCircleDot,
  TbDeviceMobile,
  TbLockAccess,
  TbMessageDots,
  TbShield,
  TbClock2,
} from "react-icons/tb";

export const functionalitiesData = [
  {
    id: 1,
    title: "Donor protection guarantee",
    description:
      "Exocrowd has the first and only donor guarantee in the industry.",
    Icon: TbShield,
  },
  {
    id: 2,
    title: "Simple setup",
    description:
      "You can personalize and share your Exocrowd in just a few minutes.",
    Icon: TbClock2,
  },
  {
    id: 3,
    title: "Secure",
    description:
      "Our Trust & Safety team works around the clock to protect against fraud. ",
    Icon: TbLockAccess,
  },
  {
    id: 4,
    title: "Web app",
    description:
      "The Exocrowd web-app works like an app and makes it simple to launch and manage your fundraiser without the need to install any app.",
    Icon: TbDeviceMobile,
  },
  {
    id: 5,
    title: "Social reach",
    description:
      "Harness the power of social media to spread your story and get more support.",
    Icon: TbChartBar,
  },
  {
    id: 6,
    title: "Expert advice",
    description:
      "Our best-in-class Customer Care Specialists will answer your questions, day or night.",
    Icon: TbMessageDots,
  },
];

const FunctionalitiesGrid = () => {
  return (
    <section className='bg-blue-700 text-white'>
      <div className='max-w-screen-2xl mx-auto px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-24'>
        <div className='max-w-xl'>
          <h2 className='text-3xl font-bold sm:text-4xl'>
            Exocrowd has everything You need
          </h2>

          <p className='mt-4 text-gray-300'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            dolores iure fugit totam iste obcaecati. Consequatur ipsa quod ipsum
            sequi culpa delectus, cumque id tenetur quibusdam, quos fuga minima.
          </p>
        </div>

        <div className='mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3'>
          {functionalitiesData.map((data, index) => (
            <div
              className='flex items-start gap-4'
              key={"functionalities-data-" + data.id + index}
            >
              <span className='shrink-0 rounded-lg bg-blue-800 p-4'>
                <data.Icon className='h-7 w-7' />
              </span>

              <div>
                <h2 className='text-lg font-bold'>{data.title}</h2>

                <p className='mt-1 text-sm text-gray-300'>{data.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-center items-center mt-12 lg:mt-16'>
          <Link
            href='#!'
            className='inline-flex items-center gap-2 rounded-full px-6 py-3 bg-black text-white font-semibold text-lg transition hover:bg-slate-900'
          >
            Start helping now
            <TbCircleDot className='h-4 w-4 text-blue-300 animate-pulse' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FunctionalitiesGrid;
