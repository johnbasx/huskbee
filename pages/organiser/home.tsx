import { BOOKING_BASE_URL } from "@constants/api-urls";
import { EventDetailProps } from "../event-detail/[eventId]";
import Events from "@components/Organiser/home/Events";
import Layout from "@components/Organiser/Layout/Layout";
import MyPartners from "@components/Organiser/home/MyPartners";
import { NextPageContext } from "next";
import Overview from "@components/Organiser/home/Overview";
import { getCookie } from "cookies-next";

const Home = ({ events }: { events: EventDetailProps[] }) => {
  console.log(events);
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
  const events = await response.json();

  if (!events) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { events },
  };
}
