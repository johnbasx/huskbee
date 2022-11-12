import React from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaGuitar } from "react-icons/fa";
import Image from "next/image";
// style={{ backgroundImage: `url(${path})` }}
import DiscoverTitle from "./title";
import DiscoverContainer from "./container";
import ScrollCards from "./scroll-cards";

const UpcomingEvents = () => {
  const UpcomingEventCard = ({
    imageSrc,
    topic = "learning for kids",
  }: {
    imageSrc: string;
    topic: string;
  }) => (
    <div className="flex shadow-2xl rounded-xl max-h-20 relative overflow-hidden">
      <Image
        src={imageSrc}
        height={100}
        width={100}
        className="h-full w-full object-cover overflow-hidden"
        alt="Digital Event Card Image"
      />
      <div className="bg-black/30 absolute inset-0 flex flex-1" />
      <div className="absolute inset-0 p-2 w-4/5 flex flex-wrap text-clip">
        <p className="font-bold text-sm h-20">{topic}</p>
      </div>
    </div>
  );

  return (
    <DiscoverContainer>
      <DiscoverTitle
        title="Upcoming Events"
        about="Come watch and enjoy all these upcomimg events hapenning around you."
        icon={FaGuitar}
      />

      <ScrollCards />
    </DiscoverContainer>
  );
};

export default UpcomingEvents;
