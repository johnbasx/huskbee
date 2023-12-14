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

// import { createRouter } from "next-connect";

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

export const getServerSideProps: GetServerSideProps<{
  fundraisers: FundraiserEventsProps[];
}> = async () => {
  const data = await fetch(CROWDFUNDING_BASE_URL + "fundraisers/?q=all");
  const fundraisers = await data.json();
  if (!fundraisers) {
    // https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props#notfound
    return {
      notFound: true,
    };
  }
  return { props: { fundraisers } };
};
