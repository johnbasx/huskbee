import {
  EventDetailProps,
  EventPartnersProps,
} from "../event-detail/[eventId]";

import { BOOKING_BASE_URL } from "@constants/api-urls";
import Events from "@components/Organiser/home/Events";
import Layout from "@components/Organiser/Layout/Layout";
import MyPartners from "@components/Organiser/home/MyPartners";
import { NextPageContext } from "next";
import { OrgPartnersStore } from "@store/index";
import Overview from "@components/Organiser/home/Overview";
import { getCookie } from "cookies-next";
import { useEffect } from "react";

const Home = ({
  events,
  orgPartners,
}: {
  events: EventDetailProps[];
  orgPartners: EventPartnersProps[];
}) => {
  const { setOrgPartners } = OrgPartnersStore();

  useEffect(() => {
    setOrgPartners(orgPartners);
  }, []);

  return (
    <Layout>
      <div className="py-12 xl:py-10 space-y-24">
        <Overview />
        <Events events={events} />
        <MyPartners />
      </div>
    </Layout>
  );
};

export default Home;

export async function getServerSideProps(context: NextPageContext) {
  const req = context.req;
  const res = context.res;
  const token = getCookie("org_token", { req, res });

  const response = await fetch(BOOKING_BASE_URL + "organiser-events", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const events_ins = await response.json();
  const events = events_ins.results;

  const org_partner_res = await fetch(
    BOOKING_BASE_URL + "search-partner/?q=OP",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const instance = await org_partner_res.json();
  const orgPartners = instance.results;
  // console.log(instance.results);

  if (!events || !orgPartners) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { events, orgPartners },
  };
}
