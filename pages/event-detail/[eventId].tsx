import React, { useEffect, useState } from 'react';

import { BOOKING_BASE_URL } from '@constants/api-urls';
import EventDescription from '@components/event-detail/EventDetail';
import { EventNameStore } from '@store/index';
import Layout from '@components/layout/Layout';
import { NextPageContext } from 'next';
import Organisers from '@components/event-detail/Organisers';
import ProductImage from '@components/event-detail/ProductImage';
import ShareOnSocial from '@components/event-detail/ShareOnSocial';
import { useRouter } from 'next/router';

export interface TicketVariantProps {
  id: string;
  available_tickets: number;
  original_price: number;
  offer_price: number;
  type: string;
  total_tickets: number;
  event: string;
}

export interface EventPartnersProps {
  id: string;
  name: string;
  description: string;
  logo: string;
  hero_image: string;
}

export interface OrganiserProps {
  id: string;
  name: string;
  logo: string;
  organiser_type: string;
  created_at: Date;
  updated_at: Date;
  user: number;
}

export interface EventDetailProps {
  id: string;
  organiser: OrganiserProps;
  partners: EventPartnersProps[];
  ticket_variants: TicketVariantProps[];
  name: string;
  tag_line: string;
  description: string;
  start_date: string;
  end_date: string;
  start_time: string;
  end_time: string;
  logo: string;
  event_type: string;
  hero_image: string;
  start_on: string;
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

const EventDetail = ({ event_detail }: { event_detail: EventDetailProps }) => {
  const { setEventName } = EventNameStore();
  const router = useRouter();
  const { eventid } = router.query;
  // console.log(event_detail);

  useEffect(() => {
    setEventName(event_detail.name);
  }, []);

  return (
    <Layout>
      <div className='border-none bg-transparent'>
        <div className='mx-auto px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8'>
          {/* Product */}
          <div className='lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16'>
            {/* Product image */}
            <ProductImage
              ImageSrc={event_detail.hero_image}
              ImageAlt={event_detail.name}
            />

            {/* Event details */}
            <div className='mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none'>
              <EventDescription
                event={event_detail.id}
                name={event_detail.name}
                startDate={event_detail.start_on}
                startTime={event_detail.start_time}
                endDate={event_detail.end_date}
                description={event_detail.description}
              />

              {/* <div className="border-t border-neutral-200 mt-10 pt-10">
                <h3 className="text-sm font-medium">Highlights</h3>
                <div className="mt-4 prose prose-sm text-neutral-500">
                  <ul role="list">
                    {product.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div> */}

              <Organisers organiser={event_detail.organiser} />

              <ShareOnSocial />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventDetail;

export async function getServerSideProps(context: NextPageContext) {
  const { eventId } = context.query;
  const response = await fetch(BOOKING_BASE_URL + 'event-detail/' + eventId);
  const event_detail = await response.json();
  console.log(event_detail);
  return {
    props: { event_detail },
  };
}
