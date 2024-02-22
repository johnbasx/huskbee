import { cn } from '@utils/lib';
import Link from 'next/link';
import React from 'react';

type OverviewType = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  total: number | string;
  color: string;
  bgColor: string;
  link: string;
};

const Overview = ({
  icon,
  title,
  total,
  color,
  bgColor,
  link,
}: OverviewType) => {
  const Icon = icon;
  return (
    <div
      className={cn(
        'flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 rounded-xl px-4 py-6 shadow sm:px-6 xl:px-8',
        bgColor
      )}
    >
      <dt className='text-sm font-medium leading-6 text-gray-500'>{title}</dt>
      <dd
        className={cn(
          'text-gray-700',
          'text-xs font-medium',
          `text-${color}-500`
        )}
      >
        <Icon className='h-7 w-7' />
      </dd>
      <dd className='w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900'>
        {total}
      </dd>
      <div className=''>
        <div className='text-xs'>
          <Link href={link}>
            <span className='font-medium text-blue-600 duration-200 ease-out hover:text-blue-500 hover:underline'>
              See more
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
  // return (
  //   <div
  //     className={`border border-l-[5px] bg-white ${color} overflow-hidden rounded-lg shadow-md`}
  //   >
  //     <div className='p-5'>
  //       <div className='flex items-center'>
  //         <div className='flex-shrink-0'>
  //           <Icon className='h-6 w-6 text-neutral-400' aria-hidden='true' />
  //         </div>
  //         <div className='ml-5 w-0 flex-1'>
  //           <dl>
  //             <dt className='truncate text-sm font-medium text-neutral-500'>
  //               {title}
  //             </dt>
  //             <dd>
  //               <div className='text-lg font-medium text-neutral-900'>
  //                 {total}
  //               </div>
  //             </dd>
  //           </dl>
  //         </div>
  //       </div>
  //     </div>
  //     <div className='bg-neutral-50 px-5 py-3'>
  //       <div className='text-sm'>
  //         <Link href={link}>
  //           <span className='font-medium text-cyan-700 hover:text-cyan-900'>
  //             View all
  //           </span>
  //         </Link>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Overview;
