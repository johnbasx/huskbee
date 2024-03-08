import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { EventListStore, orgTokenStore } from '@store/index';
import React, { useEffect, useState } from 'react';

import { BOOKING_BASE_URL } from '@constants/api-urls';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { EventDetailProps } from '../event-detail/[eventId]';
import Layout from '@components/organiser/layout/Layout';
import Link from 'next/link';
import { NextPageContext } from 'next';
import { TableStore } from '@store/table-store';
import axios from 'axios';
import { getCookie } from 'cookies-next';

export interface EventsProps {
  count: number;
  next: string | null;
  previous: string | null;
  results: EventDetailProps[];
}

const Events = ({ token, events }: { token: string; events: EventsProps }) => {
  const { eventsObj, setEventObj } = EventListStore();
  const { setOrgToken } = orgTokenStore();
  const { pageNumberList, setPageNumberList } = TableStore();
  const [eventList, setEventList] = useState<EventDetailProps[]>();
  const [prev, setPrev] = useState<string | null>('');
  const [next, setNext] = useState<string | null>('');

  const [pageNumbers, setPageNumbers] = useState<number[]>([]);

  useEffect(() => {
    setOrgToken(token);
    setEventObj(events);
  }, []);

  useEffect(() => {
    setPageNumberList(pageNumbers);
  }, [pageNumbers, pageNumberList]);

  useEffect(() => {
    if (eventsObj != null) {
      setEventList(eventsObj.results);
      setPrev(eventsObj.previous);
      setNext(eventsObj.next);
    }
  }, [eventsObj]);

  const SearchPartner = (query: string) => {
    if (eventsObj != null) {
      const filteredList = query
        ? eventsObj.results &&
        eventsObj.results.filter((event) =>
          event.name.toLowerCase().includes(query.toLowerCase())
        )
        : events.results;
      setEventList(filteredList);
    }
  };

  return (
    <Layout pageTitle='Events'>
      <div className='w-5xl mx-auto'>
        <div className='mt-2 p-8 sm:ml-6'>
          <div className='bg-transparentfocus:border-transparent flex rounded-md border-transparent border-b-neutral-300 shadow-sm ring-1 ring-inset ring-neutral-400 focus:border-b-neutral-300 focus:ring-0 sm:max-w-md'>
            <span className='flex select-none items-center pl-3 text-neutral-500 sm:text-sm'>
              <MagnifyingGlassIcon className='h-6 w-6' />
            </span>
            <input
              onChange={(event) => {
                SearchPartner(event.target.value);
              }}
              type='text'
              name='username'
              id='username'
              autoComplete='username'
              className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-neutral-900 placeholder:text-neutral-400 focus:ring-0 sm:text-sm sm:leading-6'
              placeholder='Search in this page'
            />
          </div>
        </div>

        <div className=' overflow-x-auto pb-10 pt-2 sm:mx-6 sm:pt-10'>
          <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
            <div className='overflow-hidden border-b border-neutral-400 shadow '>
              <table className='min-w-full divide-y divide-neutral-400'>
                <thead className='bg-transparent'>
                  <tr>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-200'
                    >
                      Name
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-200'
                    >
                      Type
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-200'
                    >
                      Start date
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-200'
                    >
                      End date
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-200'
                    >
                      Start time
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-200'
                    >
                      End time
                    </th>
                    <th
                      scope='col'
                      className=' px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-200'
                    >
                      <span className='sr-only'>Edit</span>Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {eventList &&
                    eventList.map((event, Idx) => (
                      <tr
                        key={event.id}
                        className={
                          Idx % 2 === 0 ? 'bg-transparent' : 'bg-transparent'
                        }
                      >
                        <td className='whitespace-nowrap px-6 py-4 text-sm font-medium text-neutral-200'>
                          {event.name}
                        </td>
                        <td className='whitespace-nowrap px-6 py-4 text-sm text-neutral-200'>
                          {event.event_type}
                        </td>
                        <td className='whitespace-nowrap px-6 py-4 text-sm text-neutral-200'>
                          {event.start_date}
                        </td>
                        <td className='whitespace-nowrap px-6 py-4 text-sm text-neutral-200'>
                          {event.end_date}
                        </td>
                        <td className='whitespace-nowrap px-6 py-4 text-sm text-neutral-200'>
                          {event.start_time}
                        </td>
                        <td className='whitespace-nowrap px-6 py-4 text-sm text-neutral-200'>
                          {event.end_time}
                        </td>
                        <td className='whitespace-nowrap px-6 py-4 text-right text-sm font-medium'>
                          <Link href={`/organiser/event-detail/${event.id}`}>
                            <span className='text-indigo-600 hover:text-indigo-900'>
                              Detail
                            </span>
                          </Link>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Pagination prev={prev} next={next} />
      </div>
    </Layout>
  );
};

export default Events;

export async function getServerSideProps(context: NextPageContext) {
  const req = context.req;
  const res = context.res;
  const token = getCookie('org_token', { req, res });

  const login_status = getCookie('login', { req, res });
  const login = login_status ? login_status == true : false;

  const response = await fetch(BOOKING_BASE_URL + 'list-create-event', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const events = await response.json();

  return {
    props: { token, login, events },
  };
}

const Pagination = ({
  prev,
  next,
}: {
  prev: string | null;
  next: string | null;
}) => {
  const { eventsObj, setEventObj } = EventListStore();

  const { token } = orgTokenStore();
  const [gotoUrl, setGotoUrl] = useState('');
  const { pageNumberList, setPageNumberList } = TableStore();
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>();

  const getData = async (url: string | null) => {
    if (url != null) {
      try {
        const response = await axios(url, {
          headers: { Authorization: 'Bearer ' + token },
        });
        setEventObj(response.data);
      } catch (e: any) {
        console.log(e);
      }
    }
  };

  const PageClickHandler = (url: string, currentPageNumber: number) => {
    getData(url);
    setCurrentPage(currentPageNumber);
  };

  useEffect(() => {
    if (eventsObj?.count != undefined) {
      if (eventsObj?.count > 0 && eventsObj.count < 6) {
        let list: number[] = [];
        for (let i = 1; i <= eventsObj.count; i++) {
          list = list.concat(i);
        }
        // console.log("list", list);

        setPageNumbers(list);
        setPageNumberList(list);
      }
      // else {
      //   const new_list: number[] = pageNumbers.concat(1, 2, 3, 4, 5, 6);
      //   console.log("list", new_list);
      //   setPageNumbers(new_list);

      //   setPageNumberList(new_list);
      // }
    }
  }, [pageNumbers]);

  return (
    <nav
      className='mx-1 mt-2 grid grid-cols-6 gap-2 px-4 sm:mx-16 sm:px-0'
      aria-label='Pagination'
    >
      <div className='col-span-6 flex max-w-3xl items-center justify-between sm:col-span-4'>
        <div className='-mt-px flex w-0 flex-1'>
          <button
            disabled={prev == null ? true : false}
            onClick={() => getData(prev)}
            className={`inline-flex cursor-pointer items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-neutral-400 hover:text-neutral-300 disabled:cursor-not-allowed disabled:text-neutral-500 `}
          >
            <ArrowLongLeftIcon
              className='mr-3 h-5 w-5 text-neutral-400'
              aria-hidden='true'
            />
            Previous
          </button>
        </div>
        <div className='hidden md:-mt-px md:flex'>
          {pageNumberList &&
            pageNumberList.map((content) => (
              <a
                onClick={() => {
                  PageClickHandler(
                    BOOKING_BASE_URL + 'list-create-event?page=' + content,
                    content
                  );
                }}
                key={content}
                className={`inline-flex cursor-pointer items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-neutral-500 hover:border-neutral-200 hover:text-neutral-400 ${content == currentPage
                    ? 'border-t-1 border-t-purple-500 text-purple-600'
                    : ''
                  }`}
              >
                {content}
              </a>
            ))}
        </div>
        <div className='-mt-px flex w-0 flex-1 justify-end'>
          <button
            disabled={next == null ? true : false}
            onClick={() => getData(next)}
            className='inline-flex cursor-pointer items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-neutral-400 hover:text-neutral-300 disabled:cursor-not-allowed disabled:text-neutral-500 '
          >
            Next
            <ArrowLongRightIcon
              className='ml-3 h-5 w-5 text-neutral-400'
              aria-hidden='true'
            />
          </button>
        </div>
      </div>

      <div className='col-span-6 mt-4 sm:col-span-2 '>
        <div className='float-right flex gap-x-2'>
          <span className='mt-1 text-sm text-neutral-400 '>Go to page</span>
          <div className='bg-transparentfocus:border-transparent flex rounded-md border-transparent border-b-neutral-300 px-2 shadow-sm ring-1 ring-inset ring-neutral-400 focus:border-b-neutral-300 focus:ring-0 sm:max-w-md '>
            <input
              onChange={(e) =>
                setGotoUrl(
                  BOOKING_BASE_URL + 'list-create-event?page=' + e.target.value
                )
              }
              type='text'
              name='gotopage'
              id='gotopage'
              autoComplete='gotopage'
              className='block w-28 flex-1 border-0 bg-transparent py-1.5 pl-1 text-neutral-200 placeholder:text-neutral-500 focus:ring-0 sm:w-24 sm:text-sm sm:leading-6'
              placeholder='Pagenumber'
            />
          </div>

          <button
            onClick={() => getData(gotoUrl)}
            // type="submit"
            className='rounded-md bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            <ChevronRightIcon className='h-5 w-5' />
          </button>
        </div>
      </div>
    </nav>
  );
};
