import {
  FcBusinessman,
  FcConferenceCall,
  FcMultipleInputs,
  FcPlanner,
} from 'react-icons/fc';
import RecentList, { HuskbeeUserList } from '@components/admin/home/RecentList';

import { ApprovedStatus } from '@components/common/table/Others';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { FormatDate } from '@utils/index';
import { FundraiserEventProps } from '../organiser/fundraisers';
import { HuskbeeUserProp } from './users';
import Layout from '@components/admin/layout/Layout';
import Link from 'next/link';
import type { NextPageContext } from 'next';
import Overview from '@components/admin/home/overview';
import { USER_BASE_URL } from '@constants/api-urls';
import { getCookie } from 'cookies-next';

export type OrganiserListType = {
  id: string;
  name: string;
  organisation_name: string;
  logo: string;
  status: boolean;
  email: string;
  created_at: string;
};

type HomeTableDatasType = {
  fundraisers_list: FundraiserEventProps[];
  organisers_list: OrganiserListType[];
  huskbee_users_list: HuskbeeUserProp[];
};

type AdminOverview = {
  total_fundraiser: number;
  total_events: number;
  total_user: number;
  total_organiser: number;
};

export default function Home({
  overview,
  table_datas,
}: {
  overview: AdminOverview;
  table_datas: HomeTableDatasType;
}) {
  return (
    <Layout pageTitle='Home'>
      <div className='mx-auto max-w-7xl space-y-12 px-4 py-8'>
        {/* Overview */}
        <div className=''>
          <ul className='mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4'>
            <Overview
              icon={FcMultipleInputs}
              title='Fundraiser'
              total={overview.total_fundraiser}
              color='border-l-[#4e73df]'
              link='/admin/fundraiser-list'
            />
            <Overview
              icon={FcPlanner}
              title='Events'
              total={overview.total_events}
              color='border-l-[#1cc88a]'
              link='/admin/events-list'
            />
            <Overview
              icon={FcBusinessman}
              title='Users'
              total={overview.total_user}
              color='border-l-[#20c9a6]'
              link='/admin/users'
            />
            <Overview
              icon={FcConferenceCall}
              title='Organiser'
              total={overview.total_organiser}
              color='border-l-[#f6c23e]'
              link='/admin/organiser-list'
            />
          </ul>
        </div>

        <div className=''>
          <div className='max-w-lg md:grid md:max-w-none md:grid-cols-2 md:gap-8'>
            <RecentList organisers={table_datas.organisers_list} />
            <HuskbeeUserList huskbee_users={table_datas.huskbee_users_list} />
          </div>
        </div>

        {/* Organiser list (only on smallest breakpoint) */}
        <div className=' bg-white sm:hidden'>
          <div className='px-4 sm:px-6'>
            <h2 className='text-xs font-medium uppercase tracking-wide text-neutral-500'>
              Recently Crowdfunding events
            </h2>
          </div>
          <ul className='mt-3 divide-y divide-neutral-100 border-t border-neutral-200'>
            {table_datas.fundraisers_list.map((data) => (
              <li key={data.id}>
                <a
                  href='#!'
                  className='group flex items-center justify-between px-4 py-4 hover:bg-neutral-50 sm:px-6'
                >
                  <span className='flex items-center space-x-3 truncate'>
                    {/* <span
                    className={classNames(
                      data.bgColorClass,
                      "w-2.5 h-2.5 flex-shrink-0 rounded-full"
                    )}
                    aria-hidden="true"
                  /> */}
                    <span>
                      <div className='h-10 w-10 flex-shrink-0'>
                        {data.title}
                        {/* <img
                        className="h-10 w-10 rounded-full"
                        src={data.logo}
                        alt=""
                      /> */}
                      </div>
                    </span>
                    <span className='flex gap-x-4 truncate text-sm font-medium leading-6 text-neutral-800'>
                      {data.organiser_name}{' '}
                      <ApprovedStatus value={data.approved_status} />
                    </span>
                  </span>
                  <ChevronRightIcon
                    className='ml-4 h-5 w-5 text-neutral-400 group-hover:text-neutral-500'
                    aria-hidden='true'
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Organisers table (small breakpoint and up) */}
        <div className='hidden rounded-lg border bg-white p-6 shadow-md sm:block'>
          <div className='inline-block min-w-full border-b border-neutral-200 align-middle '>
            <div className='px-4 py-4 text-2xl font-bold text-neutral-900 sm:text-2xl'>
              Recent Crowdfunding events
            </div>
            <table className='min-w-full divide-y divide-neutral-200'>
              <thead className='bg-neutral-100'>
                <tr>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-bold uppercase tracking-wide text-black '
                  >
                    Title
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-bold uppercase tracking-wide text-black'
                  >
                    Organiser
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-bold uppercase tracking-wide text-black'
                  >
                    Approved Status
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-bold uppercase tracking-wide text-black'
                  >
                    Created at
                  </th>
                  <th scope='col' className='relative px-6 py-3'>
                    <span className='sr-only'>Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-neutral-200 bg-white'>
                {table_datas.fundraisers_list.map((data) => (
                  <tr key={data.id}>
                    <td className='whitespace-nowrap px-6 py-6'>
                      <Link href={`/admin/fundraiser-detail/${data.id}`}>
                        <span className='organisers-center flex'>
                          {/* <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={data.}
                            alt=""
                          />
                        </div> */}
                          <div className='ml-4'>
                            <div className=' whitespace-nowrap text-sm font-medium capitalize text-neutral-800'>
                              {data.title}
                            </div>
                            {/* <div className="text-sm text-neutral-500">
                            {data.email}
                          </div> */}
                          </div>
                        </span>
                      </Link>
                    </td>
                    <td className='whitespace-nowrap px-6 py-6'>
                      <div className='whitespace-nowrap text-sm text-neutral-800'>
                        {data.organiser_name}
                      </div>
                      {/* <div className="text-sm text-neutral-500">
                      {data.department}
                    </div> */}
                    </td>
                    <td className='whitespace-nowrap px-6 py-2'>
                      <ApprovedStatus value={data.approved_status} />
                    </td>
                    <td className='whitespace-nowrap px-6 py-6 text-sm text-neutral-800'>
                      {FormatDate(data.created_at)}
                    </td>
                    <td className='whitespace-nowrap px-6 py-6 text-right text-sm font-medium'>
                      <Link href={`/admin/fundraiser-detail/${data.id}`}>
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
    </Layout>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const req = context.req;
  const res = context.res;
  const token = getCookie('admin_token', { req, res });

  const login_status = getCookie('admin_login', { req, res });
  const login = login_status ? login_status === true : false;

  const overview_response = await fetch(`${USER_BASE_URL}admin-overview`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  const overview = await overview_response.json();

  const table_response = await fetch(`${USER_BASE_URL}admin-home-tables`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const table_datas = await table_response.json();

  return {
    props: { token, overview, login, table_datas },
  };
}
