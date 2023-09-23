import {
  CheckCircleIcon,
  ChevronRightIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

import { DonationProps } from "../../../pages/organiser/fundraiser-detail/[fundraiserId]";
import Link from "next/link";
import React from "react";

const applications = [
  {
    applicant: {
      name: "Ricardo Cooper",
      email: "ricardo.cooper@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    date: "2020-01-07",
    dateFull: "January 7, 2020",
    stage: "Completed phone screening",
    href: "#",
  },
  {
    applicant: {
      name: "Kristen Ramos",
      email: "kristen.ramos@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    date: "2020-01-07",
    dateFull: "January 7, 2020",
    stage: "Completed phone screening",
    href: "#",
  },
  {
    applicant: {
      name: "Ted Fox",
      email: "ted.fox@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    date: "2020-01-07",
    dateFull: "January 7, 2020",
    stage: "Completed phone screening",
    href: "#",
  },
];
const Donations = ({
  donor,
  donations,
}: {
  donor: string;
  donations: DonationProps[];
}) => {
  return (
    <>
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Donations by <span className="capitalize">{donor}</span>
        </h3>
      </div>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul role="list" className="divide-y divide-gray-200">
          {donations.map((item) => (
            <li key={item.id}>
              <span className="block hover:bg-gray-50">
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="min-w-0 flex-1 flex items-center">
                    {/* <div className="flex-shrink-0">
                    <img className="h-12 w-12 rounded-full" src={item.applicant.imageUrl} alt="" />
                  </div> */}
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <Link
                          href={`/admin/fundraiser-detail/${item.donated_to}`}
                        >
                          <p className="text-sm font-medium text-indigo-600 truncate capitalize">
                            {item.fundraiser_title}
                          </p>
                        </Link>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <EnvelopeIcon
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="truncate">
                            {item.organiser_email}
                          </span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-sm text-gray-900">
                            Donated on {item.created_at}
                            {/* <time dateTime={item.date}>
                              {item.dateFull}
                            </time> */}
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            <CheckCircleIcon
                              className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                              aria-hidden="true"
                            />
                            Donated {"₹" + item.amount}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ChevronRightIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Donations;
