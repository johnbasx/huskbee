import { NextPage, NextPageContext } from "next";
import { authStatus, upcomingEvents } from "@store/index";

import { BOOKING_BASE_URL } from "@constants/api-urls";
import Carousel from "@components/carousel/Carousel";
import DigitalEvents from "@components/discover/digital-events";
import DiscoverContainer from "@components/discover/container";
import DiscoverTitle from "@components/discover/title";
import { EventDetailProps } from "../pages/event-detail/[eventId]";
import { FaGuitar } from "react-icons/fa";
import Layout from "@components/layout/Layout";
import Link from "next/link";
import MenuCard from "@components/cards/MenuCard";
import Movie from "@components/cards/Movie";
import UpcomingEvents from "@components/discover/upcoming-events";
import cookie from "cookie";
import { getCookie } from "cookies-next";
import { movieList } from "@constants/movies-data";
import { useEffect } from "react";

// import { EventDetailProps } from "@components/eventDetail/EventDetail";

const IndexPage = ({
  login,
  events,
}: {
  login: boolean;
  events: EventDetailProps[];
}) => {
  const { setAuthStatus } = authStatus();
  const { setUpcomingEvents } = upcomingEvents();
  // console.log("from_index: ", login);
  // console.log("from_index: ", login === true);
  useEffect(() => {
    login == true ? setAuthStatus(true) : setAuthStatus(false);
  }, []);

  useEffect(() => {
    setUpcomingEvents(events);
  }, [events]);

  return (
    <Layout title="HuskBee | All in one booking platform">
      <Carousel />

      <div className="relative flex flex-col items-center w-full py-4">
        {/* <div className="w-full absolute top-24 shadow-lg px-4 rounded-3xl h-[10vh]">
        <div className="w-full h-full border bg-zinc-900 border-zinc-800 rounded-3xl"></div>
      </div> */}

        <MenuCard />
      </div>
      <UpcomingEvents />
      <DigitalEvents />

      {/* <div className="flex flex-wrap mt-2"> */}
      <DiscoverContainer
        className="mt-4 mb-0"
        classNameChild="border-none bg-transparent"
      >
        <DiscoverTitle
          title="Upcoming Events"
          about="Come watch and enjoy all these upcomimg events hapenning around you."
          icon={FaGuitar}
        />
      </DiscoverContainer>
      <div className="grid grid-cols-1 mt-2 md:grid-cols-2 ">
        {movieList.map((movie) => (
          <Movie key={movie.id + movie.name} {...movie} />
        ))}
      </div>
      {/* <h1>About</h1>

    <p>This is the about page</p>
    <p>
      <Link href="/">Go home</Link>
    </p> */}
    </Layout>
  );
};

export default IndexPage;

export async function getServerSideProps(context: NextPageContext) {
  const req = context.req;
  const res = context.res;
  const login_status = getCookie("login", { req, res });
  const login = login_status ? login_status == true : false;

  const response = await fetch(BOOKING_BASE_URL + "upcoming-events");
  const instance = await response.json();
  const events= instance.results

  return {
    props: { login, events },
  };
}
