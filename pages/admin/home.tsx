import {
  FcBusinessman,
  FcConferenceCall,
  FcMultipleInputs,
  FcPlanner,
} from "react-icons/fc";
import RecentList, { HuskbeeUserList } from "@components/Admin/home/RecentList";

import { ApprovedStatus } from "@components/common/Table/Others";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { FormatDate } from "@utils/index";
import { FundraiserEventProps } from "../organiser/fundraiser";
import { HuskbeeUserProp } from "./users";
import Layout from "@components/Admin/Layout/Layout";
import Link from "next/link";
import type { NextPageContext } from "next";
import Overview from "@components/Admin/home/overview";
import { USER_BASE_URL } from "@constants/api-urls";
import { getCookie } from "cookies-next";

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
    <Layout pageTitle="Home">
      <div className="space-y-12 py-8 max-w-7xl mx-auto px-4">
        {/* Overview */}
        <div className="">
          {/* <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
            Overview
          </h2> */}
          <ul
            role="list"
            className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4 mt-3"
          >
            <Overview
              icon={FcMultipleInputs}
              title="Fundraiser"
              total={overview.total_fundraiser}
              color="border-l-[#4e73df]"
              link="/admin/fundraiser-list"
            />
            <Overview
              icon={FcPlanner}
              title="Events"
              total={overview.total_events}
              color="border-l-[#1cc88a]"
              link="/admin/events-list"
            />
            <Overview
              icon={FcBusinessman}
              title="Users"
              total={overview.total_user}
              color="border-l-[#20c9a6]"
              link="/admin/users"
            />
            <Overview
              icon={FcConferenceCall}
              title="Organiser"
              total={overview.total_organiser}
              color="border-l-[#f6c23e]"
              link="/admin/organiser-list"
            />
          </ul>
        </div>

        <div className="">
          <div className="max-w-lg md:max-w-none md:grid md:grid-cols-2 md:gap-8">
            <RecentList organisers={table_datas.organisers_list} />
            <HuskbeeUserList huskbee_users={table_datas.huskbee_users_list} />
          </div>
        </div>

        {/* Organiser list (only on smallest breakpoint) */}
        <div className=" sm:hidden bg-white">
          <div className="px-4 sm:px-6">
            <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
              Recently Crowdfunding events
            </h2>
          </div>
          <ul
            role="list"
            className="mt-3 border-t border-gray-200 divide-y divide-gray-100"
          >
            {table_datas.fundraisers_list.map((data) => (
              <li key={data.id}>
                <a
                  href="#"
                  className="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6"
                >
                  <span className="flex items-center truncate space-x-3">
                    {/* <span
                    className={classNames(
                      data.bgColorClass,
                      "w-2.5 h-2.5 flex-shrink-0 rounded-full"
                    )}
                    aria-hidden="true"
                  /> */}
                    <span>
                      <div className="flex-shrink-0 h-10 w-10">
                        {data.title}
                        {/* <img
                        className="h-10 w-10 rounded-full"
                        src={data.logo}
                        alt=""
                      /> */}
                      </div>
                    </span>
                    <span className="flex gap-x-4 font-medium truncate text-sm leading-6 text-gray-800">
                      {data.organiser_name}{" "}
                      <ApprovedStatus value={data.approved_status} />
                    </span>
                  </span>
                  <ChevronRightIcon
                    className="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Organisers table (small breakpoint and up) */}
        <div className="hidden sm:block rounded-lg shadow-md border p-6 bg-white">
          <div className="align-middle inline-block min-w-full border-b border-gray-200 ">
            <div className="py-4 px-4 text-2xl font-bold text-gray-900 sm:text-2xl">
              Recent Crowdfunding events
            </div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wide "
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wide"
                  >
                    Organiser
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wide"
                  >
                    Approved Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wide"
                  >
                    Created at
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {table_datas.fundraisers_list.map((data) => (
                  <tr key={data.id}>
                    <td className="px-6 py-6 whitespace-nowrap">
                      <Link href={`/admin/fundraiser-detail/${data.id}`}>
                        <span className="flex organisers-center">
                          {/* <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={data.}
                            alt=""
                          />
                        </div> */}
                          <div className="ml-4">
                            <div className=" font-medium whitespace-nowrap text-sm text-gray-800 capitalize">
                              {data.title}
                            </div>
                            {/* <div className="text-sm text-gray-500">
                            {data.email}
                          </div> */}
                          </div>
                        </span>
                      </Link>
                    </td>
                    <td className="px-6 py-6 whitespace-nowrap">
                      <div className="text-sm whitespace-nowrap text-gray-800">
                        {data.organiser_name}
                      </div>
                      {/* <div className="text-sm text-gray-500">
                      {data.department}
                    </div> */}
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap">
                      <ApprovedStatus value={data.approved_status} />
                    </td>
                    <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-800">
                      {FormatDate(data.created_at)}
                    </td>
                    <td className="px-6 py-6 whitespace-nowrap text-right text-sm font-medium">
                      <Link href={`/admin/fundraiser-detail/${data.id}`}>
                        <span className="text-indigo-600 hover:text-indigo-900">
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
  const token = getCookie("admin_token", { req, res });

  const login_status = getCookie("admin_login", { req, res });
  const login = login_status ? login_status == true : false;

  const overview_response = await fetch(USER_BASE_URL + "admin-overview", {
    headers: { Authorization: `Bearer ${token}` },
  });

  const overview = await overview_response.json();

  const table_response = await fetch(USER_BASE_URL + "admin-home-tables", {
    headers: { Authorization: `Bearer ${token}` },
  });
  const table_datas = await table_response.json();

  return {
    props: { token, overview, login, table_datas },
  };
}
