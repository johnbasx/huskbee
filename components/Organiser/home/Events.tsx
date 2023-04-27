import { BASE_URL } from "@constants/api-urls";
import { EventDetailProps } from "../../../pages/event-detail/[eventId]";
import Link from "next/link";
import MorePartners from "./MorePartners";
import React from "react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Events = ({ events }: { events: EventDetailProps[] }) => {
  return (
    <div className="hidden mt-8 sm:block max-w-7xl mx-auto px-8">
      <div className="align-middle inline-block min-w-full border-b border-gray-700">
        <table className="min-w-full">
          <thead>
            <tr className="">
              <th className="py-3 border-b  text-left text-xs font-medium text-gray-50 uppercase tracking-wider">
                <span className="">Latest events</span>
              </th>
              <th className=" py-3 border-b  text-left text-xs font-medium text-gray-50 uppercase tracking-wider">
                Partners
              </th>
              <th className="px-6 hidden md:table-cell py-3 border-b  text-right text-xs font-medium text-gray-50 uppercase tracking-wider">
                Starts on
              </th>
              <th className="pr-6 py-3 border-b  text-right text-xs font-medium text-gray-50 uppercase tracking-wider" />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {events.map((event) => (
              <tr key={event.id}>
                <td className="py-3  whitespace-nowrap text-sm font-medium text-gray-900">
                  <div className="flex items-center space-x-3 ">
                    {/* <div
                      className={classNames(
                        event.name,
                        "flex-shrink-0 w-2.5 h-2.5 rounded-full"
                      )}
                      aria-hidden="true"
                    /> */}
                    <Link
                      href={`/organiser/event-detail/${event.id}`}
                      className="truncate text-gray-50"
                    >
                      <span>
                        {event.name}{" "}
                        <span className="text-gray-200 font-normal">
                          in {event.start_date}
                        </span>
                      </span>
                    </Link>
                  </div>
                </td>
                <td className="px-6 py-3 text-sm text-gray-50 font-medium">
                  <div className="flex items-center space-x-2">
                    <div className="flex flex-shrink-0 -space-x-1">
                      {event.partners.map((detail, idx) => (
                        <>
                          {idx < 1 && (
                            <Link href="#!">
                              <img
                                key={detail.id}
                                className="max-w-none h-6 w-6 rounded-full ring-2 hover:ring-1 ring-white cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-500"
                                src={BASE_URL + detail.logo}
                                alt={detail.name}
                              />
                            </Link>
                          )}
                        </>
                      ))}
                    </div>

                    {event.partners.length > 1 ? (
                      <MorePartners morePartners={event.partners.length - 1} />
                    ) : (
                      <></>
                    )}
                  </div>
                </td>
                <td className="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-50 text-right">
                  {event.start_date}
                </td>
                <td className="pl-6 py-3 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" className="text-blue-300 hover:text-blue-400">
                    Quick view
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Events;
