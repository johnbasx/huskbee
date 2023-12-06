import { FormatDate } from "@utils/index";
import { FundraiserEventProps } from "../../../pages/organiser/fundraisers";
import Link from "next/link";
import React from "react";

const FundraiserTable = ({
  fundraisers,
}: {
  fundraisers: FundraiserEventProps[];
}) => {
  return (
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
                Donors
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wide"
              >
                Donations
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
            {fundraisers.map((data, i) => {
              return i < 5 ? (
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
                      {data.total_donors}
                    </div>
                    {/* <div className="text-sm text-gray-500">
                      {data.department}
                    </div> */}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-gray-800">
                    {"₹" + data.total_donation}
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
              ) : null;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FundraiserTable;
