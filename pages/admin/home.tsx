import { BanknotesIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import {
  FcApproval,
  FcBusinessman,
  FcConferenceCall,
  FcDataSheet,
  FcDisapprove,
  FcMultipleInputs,
  FcPlanner,
} from "react-icons/fc";

import Layout from "@components/Admin/Layout/Layout";
import Link from "next/link";
import type { NextPageContext } from "next";
import Overview from "@components/Admin/home/overview";
import { USER_BASE_URL } from "@constants/api-urls";
import { getCookie } from "cookies-next";

type OrganiserListType = {
  id: string;
  name: string;
  organisation_name: string;
  logo: string;
  status: boolean;
  email: string;
};

type AdminOverview = {
  total_fundraiser: number;
  total_events: number;
  total_user: number;
  total_organiser: number;
};
export default function Example({
  organiser_list,
  overview,
}: {
  organiser_list: OrganiserListType[];
  overview: AdminOverview;
}) {
  return (
    <Layout>
      {/* Overview */}
      <div className="px-4 mt-6 sm:px-6 lg:px-8 ">
        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
          Overview
        </h2>
        <ul
          role="list"
          className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4 mt-3"
        >
          <Overview
            icon={FcMultipleInputs}
            title="Fundraiser"
            total={overview.total_fundraiser}
            color="border-l-[#4e73df]"
          />
          <Overview
            icon={FcPlanner}
            title="Events"
            total={overview.total_events}
            color="border-l-[#1cc88a]"
          />
          <Overview
            icon={FcBusinessman}
            title="Users"
            total={overview.total_user}
            color="border-l-[#20c9a6]"
          />
          <Overview
            icon={FcConferenceCall}
            title="Organiser"
            total={overview.total_organiser}
            color="border-l-[#f6c23e]"
          />
        </ul>
      </div>

      {/* Organiser list (only on smallest breakpoint) */}
      <div className="mt-10 sm:hidden">
        <div className="px-4 sm:px-6">
          <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
            Projects
          </h2>
        </div>
        <ul
          role="list"
          className="mt-3 border-t border-gray-200 divide-y divide-gray-100"
        >
          {organiser_list.map((organiser) => (
            <li key={organiser.id}>
              <a
                href="#"
                className="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6"
              >
                <span className="flex items-center truncate space-x-3">
                  {/* <span
                    className={classNames(
                      organiser.bgColorClass,
                      "w-2.5 h-2.5 flex-shrink-0 rounded-full"
                    )}
                    aria-hidden="true"
                  /> */}
                  <span>
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={organiser.logo}
                        alt=""
                      />
                    </div>
                  </span>
                  <span className="flex gap-x-4 font-medium truncate text-sm leading-6 text-gray-800">
                    {organiser.organisation_name}{" "}
                    {organiser.status ? (
                      <span className="truncate font-normal text-gray-500">
                        <FcApproval className="h-6 w-6" />
                      </span>
                    ) : (
                      <span className="truncate font-normal text-gray-500">
                        <FcDisapprove className="h-6 w-6" />
                      </span>
                    )}
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
      <div className="hidden mt-8 sm:block mb-10">
        <div className="align-middle inline-block min-w-full border-b border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Organisation name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Role
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {organiser_list.map((organiser) => (
                <tr key={organiser.email}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link href={`/admin/organiser-detail/${organiser.id}`}>
                      <span className="flex organisers-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={organiser.logo}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {organiser.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {organiser.email}
                          </div>
                        </div>
                      </span>
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {organiser.organisation_name}
                    </div>
                    {/* <div className="text-sm text-gray-500">
                      {organiser.department}
                    </div> */}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {organiser.status ? (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    ) : (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-green-800">
                        Not Active
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Organiser
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link href={`/admin/organiser-detail/${123}`}>
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
  // console.log("overview: ", overview);

  const response = await fetch(USER_BASE_URL + "organiser-list", {
    headers: { Authorization: `Bearer ${token}` },
  });
  const list = await response.json();
  const organiser_list = list.results;

  return {
    props: { token, overview, login, organiser_list },
  };
}
