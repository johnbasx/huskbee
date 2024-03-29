import React, { ReactNode } from 'react';

import { EventDetailProps } from '../../../pages/event-detail/[eventId]';
import LogoHeroImage from './LogoHeroImage';

// import { PaperClipIcon } from "@heroicons/react/24/outline";

const EventMainDetail = ({
  eventDetail,
}: {
  eventDetail: EventDetailProps;
}) => {
  return (
    <Wrapper>
      <Content label='Event name' value={eventDetail.name} />
      <Content label='Event type' value={eventDetail.event_type} />
      <Content label='Start date' value={eventDetail.start_date} />
      <Content label='End date' value={eventDetail.end_date} />
      <Content label='Start time' value={eventDetail.start_time} />
      <Content label='End time' value={eventDetail.end_time} />
      <Content label='Tagline' value={eventDetail.tag_line} />
      <Content label='Description' value={eventDetail.description} />

      <div className='sm:col-span-2'>
        <dt className='text-sm font-medium uppercase text-neutral-300'>
          Images
        </dt>
        <dd className='mt-2 text-sm text-neutral-100'>
          <ul className='divide-y divide-neutral-400 rounded-md border border-neutral-400'>
            <LogoHeroImage name='Event logo' link={eventDetail.logo} />
            <LogoHeroImage
              name='Event hero image'
              link={eventDetail.hero_image}
            />
          </ul>
        </dd>
      </div>
    </Wrapper>
  );
};

export default EventMainDetail;

const Content = ({ label, value }: { label: string; value: string }) => {
  return (
    <div
      className={`${
        label === 'Description' ? 'sm:col-span-2' : 'sm:col-span-1'
      }`}
    >
      <dt className='text-sm font-medium uppercase text-neutral-300'>
        {label}
      </dt>
      <dd className='mt-2 text-sm text-neutral-100'>{value}</dd>
    </div>
  );
};

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <section aria-labelledby='applicant-information-title'>
      <div className='bg-neutral-800/50 shadow sm:rounded-lg'>
        <div className='px-4 py-5 sm:px-6'>
          <h2
            id='applicant-information-title'
            className='text-lg font-medium leading-6 text-neutral-100'
          >
            Event Detail
          </h2>
        </div>
        <div className='border-t border-neutral-400 px-4 py-5 sm:px-6'>
          <dl className='grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2'>
            {children}
          </dl>
        </div>
      </div>
    </section>
  );
};
