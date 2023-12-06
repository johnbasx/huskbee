import { BASE_URL } from "@constants/api-urls";
import { DonationProps } from "../../../pages/organiser/fundraiser-detail/[fundraiserId]";
import { FormatDate } from "@utils/index";
import React from "react";

const Donations = ({ donors }: { donors: DonationProps[] }) => {
  return (
    <section aria-labelledby="recent-hires-title">
      <div className="rounded-lg bg-white overflow-hidden shadow border">
        <div className="p-6">
          <div className="flex justify-between">
            <h2
              className="text-base font-medium text-gray-900"
              id="recent-hires-title"
            >
              Recent donations
            </h2>
            <a
              href="#donation-chart"
              className="cursor-pointer text-base text-blue-700"
            >
              View graph
            </a>
          </div>
          <div className="flow-root mt-6">
            <ul role="list" className="-my-5 divide-y divide-gray-200">
              {donors.length > 0 ? (
                donors.map((donor) => (
                  <li key={donor.id} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        {/* {donor.donor_photo_url} */}
                        <img
                          className="h-8 w-8 rounded-full"
                          src={BASE_URL + donor.donor_photo_url}
                          alt={donor.donor_name}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate capitalize">
                          {donor.donor_name}
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          {donor.donor_email}
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          {`Donated on ${FormatDate(donor.created_at)}`}
                        </p>
                      </div>
                      <div>
                        <span className="text-gray-800">{`₹ ${donor.amount}`}</span>
                        {/* <Link href={`/admin/user-detail/${donor.donor_id}`}>
                          <span className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50">
                            View
                          </span>
                        </Link> */}
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <li className="text-black font-medium text-xl text-center">
                  No donations
                </li>
              )}
            </ul>
          </div>

          {donors.length > 0 && (
            <div className="mt-6">
              <a
                href="#fund-donors"
                className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                View all
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Donations;
