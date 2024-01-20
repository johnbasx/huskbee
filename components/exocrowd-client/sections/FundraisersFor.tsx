import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TbButterfly, TbUserStar, TbUsersGroup } from 'react-icons/tb';

export const fundraisersForData = [
  {
    id: 1,
    title: 'Yourself',
    description:
      'Funds are delivered to your bank account directly for your own use.',
    link: '#!',
    image: '',
    Icon: TbUserStar,
  },
  {
    id: 2,
    title: 'Friends and family',
    description:
      "You'll invite a beneficiary to receive funds or distribute them yourself.",
    link: '#!',
    image: '',
    Icon: TbUsersGroup,
  },
  {
    id: 3,
    title: 'Charity',
    description: 'Funds are delivered to your chosen charity for you.',
    link: '#!',
    image: '',
    Icon: TbButterfly,
  },
];
const FundraisersFor = () => {
  return (
    <section>
      <div className='sm:py-18 mx-auto flex min-h-[60vh] max-w-screen-2xl flex-col items-center justify-center px-4 py-14 sm:px-6 lg:px-8 lg:py-40'>
        <div className='grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16'>
          <div className='mx-0 max-w-lg text-left lg:mx-0 lg:text-left'>
            <h2 className='text-4xl font-semibold sm:text-5xl lg:text-6xl'>
              Fundraisers for anyone
            </h2>

            <p className='mt-4 text-neutral-600'>
              Be it for a personal need, social cause or a creative idea - you
              can count on us for the project that you want to raise funds for.
            </p>
          </div>

          <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
            {fundraisersForData.map((item, index) => (
              <Link
                key={`causes-${item.title}`}
                href={item.link}
                className='relative overflow-hidden rounded-2xl border border-neutral-50 shadow transition-shadow duration-300 hover:shadow-lg'
              >
                {/* <Image
                  alt={item.title}
                  height={100}
                  width={100}
                  src={item.image}
                  className='absolute inset-0 h-full w-full object-cover'
                /> */}

                <div className='relative h-full bg-white text-black'>
                  <div className='p-4'>
                    <item.Icon className='h-8 w-8' />

                    <h3 className='mt-6 text-xl font-bold sm:mt-8 lg:mt-10'>
                      {item.title}
                    </h3>

                    <p className='mt-2 line-clamp-2 text-sm leading-relaxed'>
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundraisersFor;
