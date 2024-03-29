import { OrgPartnersStore } from '@store/index';
import Image from 'next/image';
import React from 'react';

const partners = [
  {
    id: 1,
    name: 'asdad',
    img: 'https://tailwindui.com/img/logos/158x48/transistor-logo-neutral-900.svg',
    amount: '$30,659.45',
  },
  {
    id: 2,
    name: 'ada balance',
    img: 'https://tailwindui.com/img/logos/158x48/reform-logo-neutral-900.svg',
    amount: '$30,659.45',
  },
  {
    id: 3,
    name: 'Account',
    img: 'https://tailwindui.com/img/logos/158x48/tuple-logo-neutral-900.svg',
    amount: '$30,659.45',
  },
  {
    id: 4,
    name: 'balance',
    img: 'https://tailwindui.com/img/logos/158x48/savvycal-logo-neutral-900.svg',
    amount: '$30,659.45',
  },
  {
    id: 5,
    name: 'nce',
    img: 'https://tailwindui.com/img/logos/158x48/statamic-logo-neutral-900.svg',
    amount: '$30,659.45',
  },
];

const MyPartners = () => {
  const { orgPartners } = OrgPartnersStore();
  return (
    <div className='bg-transparent '>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <h2 className='text-center text-2xl font-semibold leading-8 text-neutral-50'>
          Partners added by me
        </h2>
        <div className='mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
          {orgPartners?.map((item) => (
            <Partner key={item.id} img={item.logo} name={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPartners;

const Partner = ({ img, name }: { img: string; name: string }) => {
  return (
    <div className='space-y-4'>
      <div className='rounded-lg bg-white p-6'>
        <Image
          className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1'
          src={img}
          alt={name}
          width={158}
          height={48}
        />{' '}
      </div>
      <span className='cursor-pointer pt-8 text-sm capitalize'>{name}</span>
    </div>
  );
};
