import {
  CheckCircleIcon,
  ChevronRightIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

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
const RecentList = () => {
  return (
    <div className=" max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
        <div className="bg-white p-8">
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            Sales Support
          </h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul role="list" className="divide-y divide-gray-200">
              {applications.map((application) => (
                <li key={application.applicant.email}>
                  <a href={application.href} className="block hover:bg-gray-50">
                    <div className="flex items-center px-4 py-4 sm:px-6">
                      <div className="min-w-0 flex-1 flex items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="h-12 w-12 rounded-full"
                            src={application.applicant.imageUrl}
                            alt=""
                          />
                        </div>
                        <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                          <div>
                            <p className="text-sm font-medium text-indigo-600 truncate">
                              {application.applicant.name}
                            </p>
                            {/* <p className="mt-2 flex items-center text-sm text-gray-500">
                              <EnvelopeIcon
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                              <span className="truncate">
                                {application.applicant.email}
                              </span>
                            </p> */}
                          </div>
                          <div className="hidden md:block">
                            <div>
                              <p className="text-sm text-gray-900">
                                Applied on{" "}
                                <time dateTime={application.date}>
                                  {application.dateFull}
                                </time>
                              </p>
                              {/* <p className="mt-2 flex items-center text-sm text-gray-500">
                                <CheckCircleIcon
                                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                                  aria-hidden="true"
                                />
                                {application.stage}
                              </p> */}
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
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 md:mt-0 bg-white p-8">
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            Technical Support
          </h2>
          <div className="mt-3">
            <p className="text-lg text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
              repellat error corporis doloribus similique, voluptatibus numquam
              quam, quae officiis facilis.
            </p>
          </div>
          <div className="mt-9">
            <div className="flex">
              <div className="flex-shrink-0">
                <PhoneIcon
                  className="h-6 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-3 text-base text-gray-500">
                <p>+1 (555) 123 4567</p>
                <p className="mt-1">Mon-Fri 8am to 6pm PST</p>
              </div>
            </div>
            <div className="mt-6 flex">
              <div className="flex-shrink-0">
                <EnvelopeIcon
                  className="h-6 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-3 text-base text-gray-500">
                <p>support@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentList;
