import { BASE_URL, BOOKING_BASE_URL } from '@constants/api-urls';
import { EventTicketStore, orgTokenStore } from '@store/index';
import React, { useEffect } from 'react';

import { EventDetailProps } from '../../event-detail/[eventId]';
import EventMainDetail from '@components/organiser/event-detail/EventMainDetail';
import Layout from '@components/organiser/layout/Layout';
import { NextPageContext } from 'next';
import Partners from '@components/organiser/event-detail/Organisers';
import TicketVariants from '@components/organiser/event-detail/TicketVariants';
import { eventPartnersStore } from '@store/index';
import { getCookie } from 'cookies-next';

const EventDetail = ({
  token,
  detail,
}: {
  token: string;
  detail: EventDetailProps;
}) => {
  const { setPartners } = eventPartnersStore();

  const { setOrgToken } = orgTokenStore();
  const { setEventTickets } = EventTicketStore();
  useEffect(() => {
    setOrgToken(token);
    setPartners(detail.partners);
    setEventTickets(detail.ticket_variants);
  }, []);

  return (
    <Layout>
      <main className='py-10'>
        <div className='mx-auto max-w-3xl px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8'>
          <div className='flex items-center space-x-5'>
            <div className='flex-shrink-0'>
              <div className='relative'>
                {/* <img
                  className="h-16 w-16 rounded-full"
                  src={detail.logo}
                  alt={detail.name}
                /> */}
                <span
                  className='absolute inset-0 rounded-full shadow-inner'
                  aria-hidden='true'
                />
              </div>
            </div>
            <div>
              <h1 className='text-2xl font-bold text-neutral-100'>
                {detail.name}
              </h1>
              <p className='text-sm font-medium text-neutral-300'>
                Created on{' '}
                <time dateTime='2020-08-25'>{detail.start_date}</time>
              </p>
            </div>
          </div>
          <div className='mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-3 sm:space-y-0 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3'>
            <button
              type='button'
              className='inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-100'
            >
              Delete this event
            </button>
          </div>
        </div>

        <div className='mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3'>
          <div className='space-y-6 lg:col-span-2 lg:col-start-1'>
            <EventMainDetail eventDetail={detail} />
            <TicketVariants eventId={detail.id} />
          </div>
          <Partners eventId={detail.id} />
        </div>
      </main>
    </Layout>
  );
};

export default EventDetail;

export async function getServerSideProps(context: NextPageContext) {
  const { eventId } = context.query;
  const req = context.req;
  const res = context.res;
  const token = getCookie('org_token', { req, res });
  const response = await fetch(
    BOOKING_BASE_URL + 'organiser-event-detail/' + eventId,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const detail = await response.json();

  if (!detail) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { token, detail },
  };
}
