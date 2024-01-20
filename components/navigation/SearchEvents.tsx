import { Combobox, Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';

import { BOOKING_BASE_URL } from '@constants/api-urls';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import React from 'react';
import useDebounce from '@hooks/useDebounce';
import { useRouter } from 'next/router';

export interface SearchEventsprops {
  id: string;
  name: string;
}

const SearchEvents = () => {
  const router = useRouter();
  const [searchBar, setSearchBar] = useState(false);
  const [query, setQuery] = useState('');
  const debouncedSearch = useDebounce(query, 500);
  const [events, setEvents] = useState<SearchEventsprops[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (query === '') {
        return;
      }
      const data = await fetch(
        `${BOOKING_BASE_URL}search-event/?q=${debouncedSearch}`
      ).then((res) => res.json());
      setEvents(data);
      setLoading(false);
    };
    if (debouncedSearch) {
      fetchData();
    }
  }, [debouncedSearch]);

  const keyDownEvent = (event: React.KeyboardEvent<HTMLDivElement>) => {
    // console.log("event.code");
  };

  return (
    <>
      <button
        type='button'
        onClick={() => setSearchBar(true)}
        className='flex cursor-pointer space-x-2 text-base font-medium text-white hover:text-neutral-300'
      >
        <span>
          <svg
            width='24'
            height='24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            aria-hidden='true'
          >
            <path d='m19 19-3.5-3.5' />
            <circle cx='11' cy='11' r='6' />
          </svg>
        </span>
        <span>Search events</span>
      </button>

      <Transition.Root
        show={searchBar}
        as={Fragment}
        afterLeave={() => setQuery('')}
      >
        <Dialog
          as='div'
          className='fixed inset-0 z-30 overflow-y-auto p-4 sm:p-6 md:p-20'
          onClose={setSearchBar}
        >
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-neutral-500/75 bg-opacity-25 transition-opacity' />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <Combobox
              as='div'
              className='mx-auto max-w-xl transform divide-y divide-neutral-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all'
              value={query}
              onChange={setQuery}
            >
              <div className='relative'>
                <MagnifyingGlassIcon
                  className='pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-neutral-400'
                  aria-hidden='true'
                />
                {loading && (
                  <svg
                    className='h-6 w-6 animate-spin text-blue-500 motion-reduce:hidden'
                    viewBox='0 0 24 24'
                  />
                )}

                <Combobox.Input
                  className='h-12 w-full border-0 bg-transparent pl-11 pr-4 text-sm text-neutral-800 placeholder-neutral-400 focus:ring-0'
                  placeholder='Search by event name'
                  onChange={(event) => setQuery(event.target.value)}
                />
              </div>

              {events.length > 0 && (
                <Combobox.Options
                  static
                  className='max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-neutral-800'
                >
                  {events.map((event) => (
                    <Combobox.Option key={event.id} value={event}>
                      {({ active }) => (
                        <div
                          onKeyDown={keyDownEvent}
                          onClick={() =>
                            router.push(`/event-detail/${event.id}`)
                          }
                          className={`cursor-pointer space-x-1 px-4 py-2 ${
                            active ? 'bg-indigo-600' : 'bg-white'
                          }`}
                        >
                          <span
                            className={`font-medium ${
                              active ? 'text-white' : 'text-neutral-900'
                            }`}
                          >
                            {event.name}
                          </span>
                          <span
                            className={
                              active ? 'text-indigo-200' : 'text-neutral-400'
                            }
                          >
                            {event.name}
                          </span>
                        </div>
                      )}
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              )}

              {events.length === 0 && (
                <p className='p-4 text-sm text-neutral-500'>No event found.</p>
              )}
            </Combobox>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default SearchEvents;
