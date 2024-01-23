import Link from 'next/link';
import Moment from 'react-moment';
import React from 'react';

export interface EventDetailProps {
  event: string;
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  startTime: string;
}
const EventDetail = ({
  event,
  name,
  startDate,
  startTime,
  endDate,
  description,
}: EventDetailProps) => {
  const start_date = new Date(startDate);
  return (
    <>
      <div className='flex flex-col-reverse'>
        <div className='mt-4'>
          <h1 className='text-2xl font-extrabold tracking-tight sm:text-3xl'>
            {name}
          </h1>

          <h2 id='information-heading' className='sr-only'>
            Product information
          </h2>
          <p className='mt-2 text-sm text-neutral-300'>
            Event starts on {startDate}&#32;{/* <Moment date={start_date} /> */}
            at 6:30 AM
            {/*{startTime} */}
            {/* Version {version} (Updated <time dateTime={datetime}>{date}</time>) */}
          </p>
        </div>

        <div>
          <h3 className='sr-only'>Reviews</h3>
          <p className='sr-only'> out of 5 stars</p>
        </div>
      </div>

      <p className='mt-6 text-neutral-500'>{description}</p>

      <div className='mt-10 gap-y-4'>
        <Link href={`/book-event/${event}`}>
          <span
            // type="button"
            className='flex w-full items-center justify-center rounded-lg border border-transparent bg-purple-600 px-8 py-3 text-lg font-bold text-white hover:bg-purple-700  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-neutral-50'
          >
            Book this event
          </span>
        </Link>
        {/* <button
      type="button"
      className="w-full bg-indigo-50 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-indigo-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-50 focus:ring-indigo-500"
    >
      Preview
    </button> */}
      </div>
    </>
  );
};

export default EventDetail;
