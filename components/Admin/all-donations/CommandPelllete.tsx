import { useCallback, useEffect, useState } from 'react';

import { CROWDFUNDING_BASE_URL } from '@constants/api-urls';
import { Combobox } from '@headlessui/react';
import CommandPalleteWrapper from '@components/common/CommandPelleteWrapper';
import { DonationProps } from '../../../pages/organiser/fundraiser-detail/[fundraiserId]';
import { FolderIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { orgTokenStore } from '@store/index';
import useDebounce from '@hooks/useDebounce';
import { useRouter } from 'next/router';
import clsx from 'clsx';

const CommandPallete = () => {
  const { office_admin_token } = orgTokenStore();
  const [query, setQuery] = useState('');
  const [donations, setDonations] = useState<DonationProps[]>([]);
  const debouncedSearch = useDebounce(query, 500);
  const router = useRouter();

  const fetchData = useCallback(async () => {
    if (query === '') {
      return;
    }
    const data = await fetch(
      `${CROWDFUNDING_BASE_URL}search-donations/?q=${debouncedSearch}`,
      {
        headers: {
          Authorization: `Bearer ${office_admin_token}`,
        },
      }
    ).then((res) => res.json());
    setDonations(data);
    console.log(data);
  }, [debouncedSearch, office_admin_token, query]);

  useEffect(() => {
    if (debouncedSearch) {
      fetchData();
    }
  }, [debouncedSearch, fetchData]);

  return (
    <CommandPalleteWrapper
      buttonText='Search from all donations'
      placeholder='Serch by fundraiser title'
      query={query}
      setQuery={setQuery}
      length={donations.length}
    >
      {donations.length > 0 && (
        <Combobox.Options
          static
          className='max-h-80 scroll-py-2 divide-y divide-neutral-100 overflow-y-auto'
        >
          <li className='p-2'>
            <ul className='text-sm text-neutral-700'>
              {donations.map((donation) => (
                <Combobox.Option
                  key={donation.id}
                  value={donation}
                  className={({ active }) =>
                    clsx(
                      'flex cursor-default select-none items-center rounded-md px-3 py-2',
                      active && 'bg-indigo-600 text-white'
                    )
                  }
                >
                  {({ active }) => (
                    <>
                      <FolderIcon
                        className={clsx(
                          'h-6 w-6 flex-none ',
                          active ? 'text-white' : 'text-neutral-400'
                        )}
                        aria-hidden='true'
                      />
                      <Link
                        href={`/admin/fundraiser-detail/${donation.donated_to}`}
                      >
                        <span className='ml-3 flex-auto cursor-pointer truncate'>
                          {donation.fundraiser_title}
                        </span>
                      </Link>
                      {active && (
                        <span className='ml-3 flex-none cursor-pointer text-indigo-100'>
                          Jump to...
                        </span>
                      )}
                    </>
                  )}
                </Combobox.Option>
              ))}
            </ul>
          </li>
        </Combobox.Options>
      )}
    </CommandPalleteWrapper>
  );
};

export default CommandPallete;
