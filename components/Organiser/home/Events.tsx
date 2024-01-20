import { BASE_URL } from '@constants/api-urls';
import { EventDetailProps } from '../../../pages/event-detail/[eventId]';
import Link from 'next/link';
import MorePartners from './MorePartners';
import React from 'react';
import Image from 'next/image';

const Events = ({ events }: { events: EventDetailProps[] }) => {
  return (
    <div className='mx-auto mt-8 hidden max-w-7xl px-8 sm:block'>
      <div className='inline-block min-w-full border-b border-neutral-700 align-middle'>
        <table className='min-w-full'>
          <thead>
            <tr className=''>
              <th className='border-b py-3  text-left text-xs font-medium uppercase tracking-wider text-neutral-50'>
                <span className=''>Latest events</span>
              </th>
              <th className=' border-b py-3  text-left text-xs font-medium uppercase tracking-wider text-neutral-50'>
                Partners
              </th>
              <th className='hidden border-b px-6 py-3 text-right  text-xs font-medium uppercase tracking-wider text-neutral-50 md:table-cell'>
                Starts on
              </th>
              <th className='border-b py-3 pr-6  text-right text-xs font-medium uppercase tracking-wider text-neutral-50' />
            </tr>
          </thead>
          <tbody className='divide-y divide-neutral-700'>
            {events.map((event) => (
              <tr key={event.id}>
                <td className='whitespace-nowrap  py-3 text-sm font-medium text-neutral-900'>
                  <div className='flex items-center space-x-3 '>
                    {/* <div
                      className={classNames(
                        event.name,
                        "flex-shrink-0 w-2.5 h-2.5 rounded-full"
                      )}
                      aria-hidden="true"
                    /> */}
                    <Link
                      href={`/organiser/event-detail/${event.id}`}
                      className='truncate text-neutral-50'
                    >
                      <span>
                        {event.name}{' '}
                        <span className='font-normal text-neutral-200'>
                          in {event.start_date}
                        </span>
                      </span>
                    </Link>
                  </div>
                </td>
                <td className='px-6 py-3 text-sm font-medium text-neutral-50'>
                  <div className='flex items-center space-x-2'>
                    <div className='flex flex-shrink-0 -space-x-1'>
                      {event.partners.map((detail, idx) => (
                        <>
                          {idx < 5 && (
                            <Link href='#!'>
                              <Image
                                height={30}
                                width={30}
                                quality={30}
                                key={detail.id}
                                className='h-6 w-6 max-w-none cursor-pointer rounded-full object-cover ring-2 ring-white transition delay-150 duration-500 ease-in-out hover:-translate-y-1 hover:scale-150 hover:ring-1'
                                src={BASE_URL + detail.logo}
                                alt={detail.name}
                              />
                            </Link>
                          )}
                        </>
                      ))}
                    </div>

                    {event.partners.length > 1 ? (
                      <MorePartners
                        partners={event.partners}
                        morePartners={event.partners.length - 1}
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                </td>
                <td className='hidden whitespace-nowrap px-6 py-3 text-right text-sm text-neutral-50 md:table-cell'>
                  {event.start_date}
                </td>
                <td className='whitespace-nowrap py-3 pl-6 text-right text-sm font-medium'>
                  <a href='#!' className='text-blue-300 hover:text-blue-400'>
                    Quick view
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Events;
