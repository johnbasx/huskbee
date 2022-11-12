import Link from "next/link";
import { NextPage } from "next";
import Layout from "@components/layout/Layout";
import Carousel from "@components/carousel/Carousel";
import Movie from "@components/cards/Movie";
import MenuCard from "@components/cards/MenuCard";

import { movieList } from "@constants/movies-data";
import DigitalEvents from "@components/discover/digital-events";
import UpcomingEvents from "@components/discover/upcoming-events";
import DiscoverTitle from "@components/discover/title";
import { FaGuitar } from "react-icons/fa";
import DiscoverContainer from "@components/discover/container";

const IndexPage: NextPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <Carousel />

    <div className="flex flex-col w-full items-center py-4 relative">
      {/* <div className="w-full absolute top-24 shadow-lg px-4 rounded-3xl h-[10vh]">
        <div className="bg-zinc-900 border-zinc-800 border h-full w-full rounded-3xl"></div>
      </div> */}

      <MenuCard />
    </div>
    <UpcomingEvents />
    <DigitalEvents />

    {/* <div className="flex mt-2 flex-wrap"> */}
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
    <div className="grid grid-cols-1 md:grid-cols-2 mt-2 ">
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

export default IndexPage;
