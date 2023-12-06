import ActionHero from "@components/exocrowd-client/ActionHero";
import AttractiveHero from "@components/exocrowd-client/hero/AttractiveHero";
import CardScrollWrapper from "@components/exocrowd-client/CardScrollWrapper";
import CausesSection from "@components/exocrowd-client/CausesSection";
import DisplacedStats from "@components/exocrowd-client/DisplacedStats";
import FunctionalitiesGrid from "@components/exocrowd-client/sections/FunctionalitiesGrid";
import FundraiserCardScroll from "@components/exocrowd-client/scroll/FundraiserCardScroll";
import FundraisersFor from "@components/exocrowd-client/sections/FundraisersFor";
import HeroFeature from "@components/exocrowd-client/hero/HeroFeature";
import Layout from "@components/exocrowd-client/Layout";
import MoreWaysScroll from "@components/exocrowd-client/scroll/MoreWaysScroll";
import RecommendCardScroll from "@components/exocrowd-client/RecommendCardScroll";
import StackedCards from "@components/exocrowd-client/StackedCards";
import TrustAndSafetySection from "@components/exocrowd-client/sections/TrustAndSafetySection";

const IndexPage = ({
  login,
}: // events,
{
  login: boolean;
  // events: EventDetailProps[];
}) => {
  return (
    <Layout title='Exocrowd Home | We are stronger united'>
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
      <FundraiserCardScroll />

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
