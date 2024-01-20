import React, { useEffect, useState } from 'react';

import { CROWDFUNDING_BASE_URL } from '@constants/api-urls';
import { FaSearch } from 'react-icons/fa';
import { FundraiserEventProps } from '../../../pages/organiser/fundraisers';
import Link from 'next/link';
import { Spinner } from 'flowbite-react';
import { orgTokenStore } from '@store/index';
import useDebounce from '@hooks/useDebounce';

const SearchFundraiser = ({
  setFundraisers,
}: {
  setFundraisers: (fundraiserEvents: FundraiserEventProps[]) => void;
}) => {
  const { token } = orgTokenStore();
  const [query, setQuery] = useState('');
  const debouncedSearch = useDebounce(query, 500);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const data = await fetch(
        `${CROWDFUNDING_BASE_URL}list-create-fundraiser-event/?q=${debouncedSearch}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ).then((res) => res.json());
      setFundraisers(data);

      setLoading(false);
    };
    if (debouncedSearch) {
      fetchData();
    }
  }, [debouncedSearch]);

  useEffect(() => {
    if (query === '') {
      setQuery('all');
    }
  }, [query]);

  return (
    <>
      <div className='mx-auto flex w-full max-w-5xl justify-between lg:mx-0'>
        <form className='flex w-1/2 lg:ml-0' action='#' method='GET'>
          <label htmlFor='search-field' className='sr-only'>
            Search
          </label>
          <div className='relative w-full border border-transparent border-b-neutral-700 text-neutral-400 focus-within:text-neutral-600'>
            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center'>
              <FaSearch className='h-5 w-5' aria-hidden='true' />
            </div>
            <input
              id='search-field'
              onChange={(event) => setQuery(event.target.value)}
              className='block h-full w-full border-transparent bg-white py-2 pl-8 pr-3  text-neutral-700 placeholder-neutral-400 focus:border-transparent focus:placeholder-neutral-900 focus:outline-none focus:ring-0 sm:text-sm'
              placeholder='Search fundraiser'
              type='search'
              name='search'
            />
          </div>
        </form>
        <Link href='/organiser/create-fundraiser'>
          <span className='inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-100'>
            Create Fundraiser
          </span>
        </Link>
      </div>
      <div className='mt-4 text-neutral-600'>
        {loading ? (
          <>
            <Spinner className='h-6 w-6 text-neutral-300' />{' '}
            <span className='ml-2'>Searching...</span>
          </>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default SearchFundraiser;
