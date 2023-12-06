import ActionHero from "@components/hu/ActionHero";
import AttractiveHero from "@components/hu/hero/AttractiveHero";
import CardScrollWrapper from "@components/hu/CardScrollWrapper";
import CausesSection from "@components/hu/CausesSection";
import DisplacedStats from "@components/hu/DisplacedStats";
import FunctionalitiesGrid from "@components/hu/sections/FunctionalitiesGrid";
import FundraiserCardScroll from "@components/hu/scroll/FundraiserCardScroll";
import FundraisersFor from "@components/hu/sections/FundraisersFor";
import HeroFeature from "@components/hu/hero/HeroFeature";
import Layout from "@components/hu/Layout";
import MoreWaysScroll from "@components/hu/scroll/MoreWaysScroll";
import RecommendCardScroll from "@components/hu/RecommendCardScroll";
import StackedCards from "@components/hu/StackedCards";
import TrustAndSafetySection from "@components/hu/sections/TrustAndSafetySection";

const IndexPage = ({
  login,
}: // events,
{
  login: boolean;
  // events: EventDetailProps[];
}) => {
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
