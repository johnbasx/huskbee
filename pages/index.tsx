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
import type { NextPageContext } from "next";
import RecommendCardScroll from "@components/exocrowd-client/RecommendCardScroll";
import StackedCards from "@components/exocrowd-client/StackedCards";
import TrustAndSafetySection from "@components/exocrowd-client/sections/TrustAndSafetySection";
import { getCookie } from "cookies-next";
import { orgTokenStore } from "@store/index";
import { useEffect } from "react";

const IndexPage = ({
  access_token,
  fundraisers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {user_token, setUserToken} = orgTokenStore()
  console.log('U_token: ', user_token);

  useEffect(() => {
    if(access_token!=''){
      setUserToken(access_token)
    }
  }, [user_token])
  
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
  access_token: string;
  fundraisers: FundraiserEventsProps[];
}> = async (context) => {
  const req = context.req;
	const res = context.res;
	const token = getCookie("user_token", { req, res });

  let access_token = ''
  if(token!=undefined && typeof token == 'string'){
    access_token=token
  }

  const data = await fetch(`${CROWDFUNDING_BASE_URL}fundraisers/?q=all`);
  const fundraisers = await data.json();
  if (!fundraisers) {
    return {
      notFound: true,
    };
  }
  return { props: { access_token, fundraisers } };
};
