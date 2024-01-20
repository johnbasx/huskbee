import { Carousel } from 'flowbite-react';
import React from 'react';
import Image from 'next/image';
import { carouselPics } from '@constants/image-carousel';
import { HiOutlineTicket } from 'react-icons/hi';
import { TbArrowNarrowRight } from 'react-icons/tb';

const CarouselComponent = () => (
  <div className='h-[70vh] overflow-hidden rounded-3xl px-3 pt-3 xl:h-80 2xl:h-96'>
    <Carousel
      className='overflow-hidden rounded-3xl'
      rightControl={null}
      leftControl={null}
    >
      {carouselPics.map((item) => (
        <div
          className='relative flex h-full items-center justify-center bg-neutral-700 text-white'
          key={item.title + item.id}
        >
          <div className='absolute inset-0 h-full w-full bg-gradient-to-t from-black/90 to-purple-500/50 px-16'>
            <div className='flex h-full flex-1 flex-col items-center justify-center space-y-8 text-white'>
              <h1 className='text-4xl font-bold'>{item.title}</h1>
              <button
                type='button'
                className='mr-2 inline-flex items-center rounded-xl bg-purple-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-xl transition duration-200 hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-indigo-400'
              >
                <HiOutlineTicket className='mr-2 h-5 w-5' />
                Book tickets now!
                <TbArrowNarrowRight className='ml-2 h-5 w-5' />
              </button>
            </div>
          </div>
          <Image
            className='h-full w-full object-cover'
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
