import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Fragment, useEffect, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';

import { CROWDFUNDING_BASE_URL } from '@constants/api-urls';
import React from 'react';
import { RootUrlStore } from '@store/table-store';
import Link from 'next/link';

type FilterOptionType = {
  name: string;
  value: string;
};

interface FilterProp {
  linkPart: string;
  filterOptions: FilterOptionType[];
  getFilteredList: (url: string | null) => {};
}

const Filter = ({ linkPart, filterOptions, getFilteredList }: FilterProp) => {
  const [selected, setSelected] = useState(filterOptions[0]);
  const { rootUrl, setRootUrl, currentPage, setCurrentPage } = RootUrlStore();

  const getSelectedOptionData = (
    e: { name: string; value: string },
    option: string
  ) => {
    setSelected(e);
    setRootUrl(`${linkPart + e.value}?page=`);
    getFilteredList(linkPart + e.value);
    setCurrentPage(1);
  };

  return (
    <div className='top-16 w-72'>
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected;
          getSelectedOptionData(e, selected.value);
        }}
      >
        <div className='relative mt-1 rounded-md border border-neutral-300'>
          <Listbox.Button className='relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
            <span className='block truncate text-black'>{selected.name}</span>
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
              <ChevronUpDownIcon
                className='h-5 w-5 text-neutral-400'
                aria-hidden='true'
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {filterOptions.map((option, personIdx) => (
                <Listbox.Option
                  key={`person-list-${personIdx}`}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active
                        ? 'bg-amber-100 text-amber-900'
                        : 'text-neutral-900'
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <Link
                      href='#!'
                      // onChange={() => getSelectedOptionData(option.value)}
                    >
                      <span
                        className={`block truncate text-black ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {option.name}
                      </span>
                      {selected ? (
                        <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
                          <CheckIcon className='h-5 w-5' aria-hidden='true' />
                        </span>
                      ) : null}
                    </Link>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default Filter;
