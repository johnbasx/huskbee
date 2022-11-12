import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import Image from "next/image";
// style={{ backgroundImage: `url(${path})` }}

const DigitalEvents = () => {
  const DigitalEventCard = ({
    imageSrc,
    topic = "learning for kids",
  }: {
    imageSrc: string;
    topic: string;
  }) => (
    <div className="flex shadow-2xl rounded-xl h-20 md:h-40 max-h-40 relative overflow-hidden">
      <Image
        src={imageSrc}
        height={100}
        width={100}
        className="h-full w-full object-cover overflow-hidden"
        alt="Digital Event Card Image"
      />
      <div className="bg-black/30 absolute inset-0 flex flex-1" />
      <div className="absolute inset-0 p-2 md:p-4 h-20 md:h-40 w-4/5 flex flex-wrap text-clip">
        <p className="font-bold text-sm md:text-xl">{topic}</p>
      </div>
    </div>
  );

  return (
    <div className="px-3">
      <div className="flex flex-col space-y-4 px-5 border-zinc-800/50 border py-5 bg-zinc-900/20 rounded-3xl">
        <div className="space-y-2">
          <div className="flex items-center justify-start space-x-4">
            <h1 className="font-bold text-2xl">Digital Events & Contents</h1>
            <BsFillPlayCircleFill className="h-5 w-5 text-purple-500" />
          </div>
          <p className="text-xs">
            Now streaming Manipur&apos;s top talent.
            <br />
            Watch, play and interact with them only on Boxfree.
          </p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3 grid-rows-2">
          <DigitalEventCard
            imageSrc="/images/movies/lord-of-the-rings.jpg"
            topic="unwind th truth"
          />
          <DigitalEventCard
            imageSrc="/images/movies/star-wars.jpg"
            topic="master a skill"
          />
          <DigitalEventCard
            imageSrc="/images/movies/joker.jpg"
            topic="learning for kids"
          />
          <DigitalEventCard
            imageSrc="/images/movies/inception.jpg"
            topic="volunteer online"
          />
          <DigitalEventCard
            imageSrc="/images/movies/joker.jpg"
            topic="daily healthy routines"
          />
        </div>
      </div>
    </div>
  );
};

export default DigitalEvents;
