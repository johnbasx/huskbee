import { BASE_URL } from "@constants/api-urls";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { FormatDate } from "@utils/index";
import { HuskbeeUserProp } from "../../../pages/admin/users";
import Link from "next/link";
import { OrganiserListType } from "../../../pages/admin/home";
import React from "react";

const RecentList = ({ organisers }: { organisers: OrganiserListType[] }) => {
  return (
    <Wrapper title="Recent organisers">
      <ul role="list" className="divide-y divide-gray-200">
        {organisers &&
          organisers.map((data) => (
            <li key={data.id}>
              <Link href={`/admin/organiser-detail/${data.id}`}>
                <span className="block hover:bg-gray-50">
                  <div className="flex items-center px-4 py-4 sm:px-6">
                    <div className="min-w-0 flex-1 flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="h-12 w-12 rounded-full"
                          src={BASE_URL + data.logo}
                          alt=""
                        />
                      </div>
                      <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p className="text-sm font-medium text-indigo-600 truncate capitalize">
                            {data.organisation_name}
                          </p>
                          {/* <p className="mt-2 flex items-center text-sm text-gray-500">
                              <EnvelopeIcon
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                              <span className="truncate">
                                {data.applicant.email}
                              </span>
                            </p> */}
                        </div>
                        <div className="hidden md:block">
                          <div>
                            <p className="text-sm text-gray-900">
                              Applied on {FormatDate(data.created_at)}
                              {/* <time dateTime={data.date}>
                                  {data.dateFull}
                                </time> */}
                            </p>
                            {/* <p className="mt-2 flex items-center text-sm text-gray-500">
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
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
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
    <Wrapper title="Recent created Users">
      <ul role="list" className="divide-y divide-gray-200">
        {huskbee_users &&
          huskbee_users.map((data) => (
            <li key={data.id}>
              <Link href={`/admin/organiser-detail/${data.id}`}>
                <span className="block hover:bg-gray-50">
                  <div className="flex items-center px-4 py-4 sm:px-6">
                    <div className="min-w-0 flex-1 flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="h-12 w-12 rounded-full"
                          src={BASE_URL + data.photo}
                          alt=""
                        />
                      </div>
                      <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p className="text-sm font-medium text-indigo-600 truncate">
                            {data.full_name}
                          </p>
                        </div>
                        <div className="hidden md:block">
                          <div>
                            <p className="text-sm text-gray-900">
                              created on {FormatDate(data.created_at)}
                              {/* <time dateTime={data.date}>
                                  {data.dateFull}
                                </time> */}
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
    <div className="bg-white p-8 rounded-lg shadow-lg border">
      <h2 className="text-2xl font-bold text-gray-900 sm:text-2xl">{title}</h2>
      <div className="bg-white overflow-hidden ">{children}</div>
    </div>
  );
};
