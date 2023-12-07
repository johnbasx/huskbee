import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import ActionHero from "@components/exocrowd-client/ActionHero";
import AttractiveHero from "@components/exocrowd-client/hero/AttractiveHero";
import { CROWDFUNDING_BASE_URL } from "@constants/api-urls";
import CardScrollWrapper from "@components/exocrowd-client/CardScrollWrapper";
import CausesSection from "@components/exocrowd-client/CausesSection";
import DisplacedStats from "@components/exocrowd-client/DisplacedStats";
import FunctionalitiesGrid from "@components/exocrowd-client/sections/FunctionalitiesGrid";
import FundraiserCardScroll from "@components/exocrowd-client/scroll/FundraiserCardScroll";
import { FundraiserEventsProps } from "./organiser/fundraiser-detail/[fundraiserId]";
import FundraisersFor from "@components/exocrowd-client/sections/FundraisersFor";
import HeroFeature from "@components/exocrowd-client/hero/HeroFeature";
import Layout from "@components/exocrowd-client/Layout";
import MoreWaysScroll from "@components/exocrowd-client/scroll/MoreWaysScroll";
import RecommendCardScroll from "@components/exocrowd-client/RecommendCardScroll";
import StackedCards from "@components/exocrowd-client/StackedCards";
import TrustAndSafetySection from "@components/exocrowd-client/sections/TrustAndSafetySection";

export const getServerSideProps: GetServerSideProps<{
  fundraisers: FundraiserEventsProps[];
}> = async () => {
  const res = await fetch(CROWDFUNDING_BASE_URL + "fundraisers/?q=all");
  const fundraisers = await res.json();
  // const fundraisers= instance.results

  return {
    props: { fundraisers },
  };
};

const IndexPage = ({
  fundraisers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log("fundraisers: ", fundraisers);
  return (
    <Layout title="Exocrowd Home | We are stronger united">
      <AttractiveHero />
      <HeroFeature />
      {/* <DisplacedStats /> */}
      <MoreWaysScroll />
      <FunctionalitiesGrid />
      <ActionHero />

      {/* <StackedCards /> */}
      {/* <HeroSection /> */}
      {/* <CardScrollWrapper /> */}
      {/* <RecommendCardScroll /> */}
      <FundraiserCardScroll fundraisers={fundraisers} />

      {/* <CausesSection /> */}
      <TrustAndSafetySection />
      {/* <FundraisersFor /> */}
    </Layout>
  );
};

export default IndexPage;

// export async function getServerSideProps(context: NextPageContext) {
//   const req = context.req;
//   const res = context.res;
//   const login_status = getCookie("login", { req, res });
//   const login = login_status ? login_status == true : false;

//   const response = await fetch(BOOKING_BASE_URL + "upcoming-events");
//   const instance = await response.json();
//   const events= instance.results

//   return {
//     props: { login, events },
//   };
// }
