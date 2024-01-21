import Layout from '@components/exocrowd-client/Layout';
import Image from 'next/image';
import React from 'react';

const ContactPage = () => {
  return (
    <Layout title='Contact | Provide - Fundraiser Contact page'>
      <div className='relative isolate bg-white px-6 py-12 sm:py-24 lg:px-8'>
        <svg
          className='absolute inset-0 -z-10 h-full w-full stroke-neutral-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]'
          aria-hidden='true'
        >
          <defs>
            <pattern
              id='83fd4e5a-9d52-42fc-97b6-718e5d7ee527'
              width={200}
              height={200}
              x='50%'
              y={-64}
              patternUnits='userSpaceOnUse'
            >
              <path d='M100 200V.5M.5 .5H200' fill='none' />
            </pattern>
          </defs>
          <svg x='50%' y={-64} className='overflow-visible fill-blue-50'>
            <path
              d='M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z'
              strokeWidth={0}
            />
          </svg>
          <rect
            width='100%'
            height='100%'
            strokeWidth={0}
            fill='url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)'
          />
        </svg>
        <div className='mx-auto max-w-xl lg:max-w-4xl'>
          <h2 className='text-4xl font-bold tracking-tight text-neutral-900'>
            Let’s talk about your concerns
          </h2>
          <p className='mt-2 text-lg leading-8 text-neutral-600'>
            We help organisations & individuals build out their fundraiser
            campaigns
          </p>
          <div className='mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row'>
            <form action='#' method='POST' className='lg:flex-auto'>
              <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
                <div>
                  <label
                    htmlFor='first-name'
                    className='block text-sm font-semibold leading-6 text-neutral-900'
                  >
                    First name
                  </label>
                  <div className='mt-2.5'>
                    <input
                      type='text'
                      name='first-name'
                      id='first-name'
                      autoComplete='given-name'
                      className='block w-full rounded-md border-0 px-3.5 py-2 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='last-name'
                    className='block text-sm font-semibold leading-6 text-neutral-900'
                  >
                    Last name
                  </label>
                  <div className='mt-2.5'>
                    <input
                      type='text'
                      name='last-name'
                      id='last-name'
                      autoComplete='family-name'
                      className='block w-full rounded-md border-0 px-3.5 py-2 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='budget'
                    className='block text-sm font-semibold leading-6 text-neutral-900'
                  >
                    Budget
                  </label>
                  <div className='mt-2.5'>
                    <input
                      id='budget'
                      name='budget'
                      type='text'
                      className='block w-full rounded-md border-0 px-3.5 py-2 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='website'
                    className='block text-sm font-semibold leading-6 text-neutral-900'
                  >
                    Website
                  </label>
                  <div className='mt-2.5'>
                    <input
                      type='url'
                      name='website'
                      id='website'
                      className='block w-full rounded-md border-0 px-3.5 py-2 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='message'
                    className='block text-sm font-semibold leading-6 text-neutral-900'
                  >
                    Message
                  </label>
                  <div className='mt-2.5'>
                    <textarea
                      id='message'
                      name='message'
                      rows={4}
                      className='block w-full rounded-md border-0 px-3.5 py-2 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6'
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
              <div className='mt-10'>
                <button
                  type='submit'
                  className='focus-visible:outline-black-600 block w-max rounded-full bg-black px-8 py-3 text-center font-semibold text-white shadow-sm hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                >
                  Let’s talk
                </button>
              </div>
              <p className='mt-4 text-sm leading-6 text-neutral-500'>
                By submitting this form, I agree to the{' '}
                <a href='#' className='font-semibold text-black'>
                  privacy&nbsp;policy
                </a>
                .
              </p>
            </form>
            <div className='lg:mt-6 lg:w-80 lg:flex-none'>
              <Image
                src={'/exocrowd-logo.svg'}
                alt='Exocrowd Provide logo'
                height={50}
                width={200}
                className='h-10 object-contain object-left'
              />
              <figure className='mt-10'>
                <blockquote className='text-lg font-medium leading-6 text-neutral-900'>
                  <p>
                    “Let's build bridges to brighter futures, each contribution
                    a step toward a world where aspirations know no bounds.
                    Together, we craft a legacy of impact, transcending today's
                    boundaries into tomorrow's limitless horizons.”
                  </p>
                </blockquote>
                <figcaption className='mt-10 flex gap-x-6'>
                  <img
                    src='https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww'
                    alt='profile image'
                    className='h-12 w-12 flex-none rounded-full bg-neutral-50 object-cover object-top'
                  />
                  <div>
                    <div className='text-base font-semibold text-neutral-900'>
                      T. Kunjey Singh
                    </div>
                    <div className='text-sm leading-6 text-neutral-600'>
                      Managing Director, AAI Pvt ltd.
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
