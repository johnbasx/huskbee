import { BOOKING_BASE_URL } from '@constants/api-urls';
import { EventPartnersProps } from '../event-detail/[eventId]';
import Layout from '@components/organiser/layout/Layout';
import { NextPageContext } from 'next';
import React from 'react';
import { getCookie } from 'cookies-next';

const Partners = ({
  token,
  organiser_partners,
}: {
  token: string;
  organiser_partners: EventPartnersProps[];
}) => {
  return (
    <Layout pageTitle='Partners'>
      <div className='bg-transparent'>
        <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
          <div className='rounded-2xl bg-transparent px-6 py-16 sm:p-16'>
            <div className='mx-auto max-w-xl lg:max-w-none'>
              <div className='text-center'>
                <h2 className='text-2xl font-extrabold tracking-tight text-neutral-200'>
                  We built our business on customer service
                </h2>
              </div>
              <div className='mx-auto mt-12 grid max-w-sm grid-cols-1 gap-x-8 gap-y-10 sm:max-w-none lg:grid-cols-3'>
                {organiser_partners &&
                  organiser_partners.map((partner) => (
                    <div
                      key={partner.id}
                      className='text-center sm:flex sm:text-left lg:block lg:text-center'
                    >
                      <div className='sm:flex-shrink-0'>
                        <div className='flow-root'>
                          <img
                            className='mx-auto h-16 w-16'
                            src={partner.logo}
                            alt=''
                          />
                        </div>
                      </div>
                      <div className='mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6'>
                        <h3 className='text-sm font-medium text-neutral-200'>
                          {partner.name}
                        </h3>
                        <p className='mt-2 text-sm text-neutral-300'>
                          {partner.description}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Partners;

export async function getServerSideProps(context: NextPageContext) {
  const req = context.req;
  const res = context.res;
  const token = getCookie('org_token', { req, res });
  const response = await fetch(BOOKING_BASE_URL + 'organiser-partners', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const organiser_partners = await response.json();

  if (!organiser_partners) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { token, organiser_partners },
  };
}
