import {
  BOOKING_BASE_URL,
  CROWDFUNDING_BASE_URL,
  USER_BASE_URL,
} from '@constants/api-urls';
import {
  EventDetailProps,
  EventPartnersProps,
} from '../event-detail/[eventId]';

import Events from '@components/organiser/home/Events';
import FundraiserChart from '@components/organiser/home/FundraiserChart';
import { FundraiserEventProps } from './fundraisers';
import FundraiserTable from '@components/organiser/home/FundraiserTable';
import Layout from '@components/organiser/layout/Layout';
import MyPartners from '@components/organiser/home/MyPartners';
import { NextPageContext } from 'next';
import { OrgPartnersStore } from '@store/index';
import Overview from '@components/common/Overview';
import { getCookie } from 'cookies-next';
import { useEffect } from 'react';
import { TbCalendarHeart, TbHeartDollar } from 'react-icons/tb';
import { BiDonateHeart } from 'react-icons/bi';

// import Overview from "@components/Organiser/home/Overview";

interface OverViewProps {
  total_fundraiser: number;
  total_events: number;
  total_donation: number;
  total_donors: number;
}

export type HomeGraphType = {
  title: string;
  total_donation: number;
};

const Home = ({
  overview,
  // events,
  graph_data,
  fundraisers,
}: // orgPartners,
{
  overview: OverViewProps;
  // events: EventDetailProps[];
  // orgPartners: EventPartnersProps[];
  graph_data: HomeGraphType[];
  fundraisers: FundraiserEventProps[];
}) => {
  // console.log('Fundraisers: ', fundraisers);
  // const { setOrgPartners } = OrgPartnersStore();

  // useEffect(() => {
  //   setOrgPartners(orgPartners);
  // }, []);

  return (
    <Layout pageTitle='Home'>
      <div className='space-y-24 py-12 xl:py-10'>
        <div className='mr-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            <Overview
              icon={TbCalendarHeart}
              title='Fundraiser'
              total={overview.total_fundraiser}
              color='purple'
              bgColor='bg-purple-500/10'
              link='/organiser/fundraisers'
            />
            <Overview
              icon={TbHeartDollar}
              title='Donors'
              total={overview.total_donors}
              color='rose'
              bgColor='bg-rose-500/10'
              link='/organiser/fundraisers'
            />
            <Overview
              icon={BiDonateHeart}
              title='Donations'
              total={'₹' + overview.total_donation}
              color='emerald'
              bgColor='bg-emerald-500/10'
              link='/organiser/donations'
            />
          </div>
        </div>
        <FundraiserTable fundraisers={fundraisers} />
        {/* <Events events={events} /> */}
        <MyPartners />
        <FundraiserChart graphData={graph_data} />
      </div>
    </Layout>
  );
};

export default Home;

export async function getServerSideProps(context: NextPageContext) {
  const req = context.req;
  const res = context.res;
  const token = getCookie('org_token', { req, res });

  const overview_response = await fetch(USER_BASE_URL + 'organiser-overview', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const overview_ins = await overview_response.json();
  const overview = overview_ins;

  // const response = await fetch(BOOKING_BASE_URL + "organiser-events", {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // });
  // const events_ins = await response.json();
  // const events = events_ins.results;

  // const org_partner_res = await fetch(
  //   BOOKING_BASE_URL + "search-partner/?q=OP",
  //   {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  // );
  // const instance = await org_partner_res.json();
  // const orgPartners = instance.results;

  const fundraisers_res = await fetch(
    CROWDFUNDING_BASE_URL + 'list-create-fundraiser-event/?q=all',
    // CROWDFUNDING_BASE_URL+ "crowdfunding/fundraisers/?q=all",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const fundraisers = await fundraisers_res.json();
  // const orgPartners = instance.results;

  const graph_data_response = await fetch(
    CROWDFUNDING_BASE_URL + 'fundraiser-graph',
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  const graph_data = await graph_data_response.json();

  if (!graph_data || !fundraisers) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { overview, graph_data, fundraisers },
  };
}
