import { Carousel } from "flowbite-react";
import React from "react";
import Image from "next/image";
import { carouselPics } from "@constants/image-carousel";
import { HiOutlineTicket } from "react-icons/hi";
import { TbArrowNarrowRight } from "react-icons/tb";

const CarouselComponent = () => (
  <div className="h-[70vh] xl:h-80 2xl:h-96 pt-3 rounded-3xl overflow-hidden px-3">
    <Carousel
      className="rounded-3xl overflow-hidden"
      rightControl={null}
      leftControl={null}
    >
      {carouselPics.map((item) => (
        <div
          className="flex h-full items-center justify-center bg-gray-700 text-white relative"
          key={item.title + item.id}
        >
          <div className="absolute bg-gradient-to-t from-black/90 to-purple-500/50 h-full w-full inset-0 px-16">
            <div className="flex flex-col space-y-8 justify-center items-center flex-1 h-full text-white">
              <h1 className="text-4xl font-bold">{item.title}</h1>
              <button
                type="button"
                className="text-white font-semibold bg-purple-600 hover:bg-purple-700 shadow-xl transition duration-200 focus:ring-4 focus:outline-none focus:ring-indigo-400 rounded-xl text-sm px-5 py-3 text-center inline-flex items-center mr-2"
              >
                <HiOutlineTicket className="h-5 w-5 mr-2" />
                Book tickets now!
                <TbArrowNarrowRight className="h-5 w-5 ml-2" />
              </button>
            </div>
          </div>
          <Image
            className="w-full h-full object-cover"
            src={item.src}
            alt={`carousel-image-${item.id}`}
            height={1000}
            width={1000}
          />
        </div>
      ))}
    </Carousel>
  </div>
);

export default CarouselComponent;
