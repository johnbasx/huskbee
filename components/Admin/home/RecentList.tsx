import { BASE_URL } from '@constants/api-urls';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { FormatDate } from '@utils/index';
import { HuskbeeUserProp } from '../../../pages/admin/users';
import Link from 'next/link';
import { OrganiserListType } from '../../../pages/admin/home';
import React from 'react';
import Image from 'next/image';

const RecentList = ({ organisers }: { organisers: OrganiserListType[] }) => {
  return (
    <Wrapper title='Recent organisers'>
      <ul className='divide-y divide-neutral-200'>
        {organisers?.map((data) => (
          <li key={data.id}>
            <Link href={`/admin/organiser-detail/${data.id}`}>
              <span className='block hover:bg-neutral-50'>
                <div className='flex items-center px-4 py-4 sm:px-6'>
                  <div className='flex min-w-0 flex-1 items-center'>
                    <div className='flex-shrink-0'>
                      <Image
                        height={100}
                        width={100}
                        quality={10}
                        className='h-12 w-12 rounded-full object-cover'
                        src={BASE_URL + data.logo}
                        alt={data.name}
                      />
                    </div>
                    <div className='min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4'>
                      <div>
                        <p className='truncate text-sm font-medium capitalize text-indigo-600'>
                          {data.organisation_name}
                        </p>
                        {/* <p className="mt-2 flex items-center text-sm text-neutral-500">
                              <EnvelopeIcon
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-neutral-400"
                                aria-hidden="true"
                              />
                              <span className="truncate">
                                {data.applicant.email}
                              </span>
                            </p> */}
                      </div>
                      <div className='hidden md:block'>
                        <div>
                          <p className='text-sm text-neutral-900'>
                            Applied on {FormatDate(data.created_at)}
                            {/* <time dateTime={data.date}>
                                  {data.dateFull}
                                </time> */}
                          </p>
                          {/* <p className="mt-2 flex items-center text-sm text-neutral-500">
                                <CheckCircleIcon
                                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                                  aria-hidden="true"
                                />
                                {data.stage}
                              </p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ChevronRightIcon
                      className='h-5 w-5 text-neutral-400'
                      aria-hidden='true'
                    />
                  </div>
                </div>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default RecentList;

export const HuskbeeUserList = ({
  huskbee_users,
}: {
  huskbee_users: HuskbeeUserProp[];
}) => {
  return (
    <Wrapper title='Recent created Users'>
      <ul className='divide-y divide-neutral-200'>
        {huskbee_users?.map((data) => (
          <li key={data.id}>
            <Link href={`/admin/organiser-detail/${data.id}`}>
              <span className='block hover:bg-neutral-50'>
                <div className='flex items-center px-4 py-4 sm:px-6'>
                  <div className='flex min-w-0 flex-1 items-center'>
                    <div className='flex-shrink-0'>
                      <Image
                        height={100}
                        width={100}
                        quality={10}
                        className='h-12 w-12 rounded-full object-cover'
                        src={BASE_URL + data.photo}
                        alt={data.full_name}
                      />
                    </div>
                    <div className='min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4'>
                      <div>
                        <p className='truncate text-sm font-medium text-indigo-600'>
                          {data.full_name}
                        </p>
                      </div>
                      <div className='hidden md:block'>
                        <div>
                          <p className='text-sm text-neutral-900'>
                            created on {FormatDate(data.created_at)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ChevronRightIcon
                      className='h-5 w-5 text-neutral-400'
                      aria-hidden='true'
                    />
                  </div>
                </div>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

const Wrapper = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className='rounded-lg border bg-white p-8 shadow-lg'>
      <h2 className='text-2xl font-bold text-neutral-900 sm:text-2xl'>
        {title}
      </h2>
      <div className='overflow-hidden bg-white '>{children}</div>
    </div>
  );
};
