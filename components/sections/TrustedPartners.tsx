import React from 'react';

const TrustedPartners = () => {
  return (
    <div className='py-16 sm:py-24'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <h2 className='text-left text-3xl font-bold leading-8 text-neutral-900'>
          Our trusted NGOs &{' '}
          <span className='font-serif italic text-blue-600'>
            Organizing partners
          </span>
        </h2>
        <div className='mx-auto mt-16 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
          <img
            className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
            src='https://tailwindui.com/img/logos/158x48/transistor-logo-neutral-900.svg'
            alt='Transistor'
            width={158}
            height={48}
          />
          <img
            className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
            src='https://tailwindui.com/img/logos/158x48/reform-logo-neutral-900.svg'
            alt='Reform'
            width={158}
            height={48}
          />
          <img
            className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
            src='https://tailwindui.com/img/logos/158x48/tuple-logo-neutral-900.svg'
            alt='Tuple'
            width={158}
            height={48}
          />
          <img
            className='col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1'
            src='https://tailwindui.com/img/logos/158x48/savvycal-logo-neutral-900.svg'
            alt='SavvyCal'
            width={158}
            height={48}
          />
          <img
            className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1'
            src='https://tailwindui.com/img/logos/158x48/statamic-logo-neutral-900.svg'
            alt='Statamic'
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  );
};

export default TrustedPartners;
