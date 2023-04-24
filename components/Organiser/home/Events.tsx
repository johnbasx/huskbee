import { BASE_URL, BOOKING_BASE_URL } from "@constants/api-urls";

import { EventDetailProps } from "../../../pages/event-detail/[eventId]";
import Link from "next/link";
import Partners from "./Partners";
import React from "react";

// const events = [
//   {
//     id: 1,
//     title: "GraphQL API",
//     initials: "GA",
//     team: "Engineering",
//     members: [
//       {
//         name: "Dries Vincent",
//         handle: "driesvincent",
//         imageUrl:
//           "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//       },
//       {
//         name: "Lindsay Walton",
//         handle: "lindsaywalton",
//         imageUrl:
//           "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//       },
//       {
//         name: "Courtney Henry",
//         handle: "courtneyhenry",
//         imageUrl:
//           "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//       },
//       {
//         name: "Tom Cook",
//         handle: "tomcook",
//         imageUrl:
//           "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//       },
//     ],
//     totalMembers: 12,
//     lastUpdated: "March 31, 2023",
//     pinned: true,
//     bgColorClass: "bg-pink-600",
//   },
//   {
//     id: 2,
//     title: "Sample event",
//     initials: "GA",
//     team: "Team event",
//     members: [
//       {
//         name: "Dries Vincent",
//         handle: "driesvincent",
//         imageUrl:
//           "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//       },
//       {
//         name: "Lindsay Walton",
//         handle: "lindsaywalton",
//         imageUrl:
//           "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//       },
//       {
//         name: "Courtney Henry",
//         handle: "courtneyhenry",
//         imageUrl:
//           "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//       },
//       {
//         name: "Tom Cook",
//         handle: "tomcook",
//         imageUrl:
//           "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//       },
//     ],
//     totalMembers: 20,
//     lastUpdated: "April 17, 2023",
//     pinned: true,
//     bgColorClass: "bg-green-600",
//   },
//   {
//     id: 3,
//     title: "JS Conference",
//     initials: "GA",
//     team: "Frontend",
//     members: [
//       {
//         name: "Dries Vincent",
//         handle: "driesvincent",
//         imageUrl:
//           "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//       },
//       {
//         name: "Lindsay Walton",
//         handle: "lindsaywalton",
//         imageUrl:
//           "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//       },
//       {
//         name: "Courtney Henry",
//         handle: "courtneyhenry",
//         imageUrl:
//           "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//       },
//       {
//         name: "Tom Cook",
//         handle: "tomcook",
//         imageUrl:
//           "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//       },
//     ],
//     totalMembers: 15,
//     lastUpdated: "April 10, 2023",
//     pinned: true,
//     bgColorClass: "bg-yellow-600",
//   },
// ];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Events = ({ events }: { events: EventDetailProps[] }) => {
  return (
    <div className="hidden mt-8 sm:block max-w-7xl mx-auto px-8">
      <div className="align-middle inline-block min-w-full border-b border-gray-600">
        <table className="min-w-full">
          <thead>
            <tr className="">
              <th className="px-6 py-3 border-b  text-left text-xs font-medium text-gray-50 uppercase tracking-wider">
                <span className="lg:pl-2">Latest events</span>
              </th>
              <th className="px-6 py-3 border-b  text-left text-xs font-medium text-gray-50 uppercase tracking-wider">
                Partners
              </th>
              <th className="hidden md:table-cell px-6 py-3 border-b  text-right text-xs font-medium text-gray-50 uppercase tracking-wider">
                Starts on
              </th>
              <th className="pr-6 py-3 border-b  text-right text-xs font-medium text-gray-50 uppercase tracking-wider" />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-600">
            {events.map((event) => (
              <tr key={event.id}>
                <td className="px-6 py-3 max-w-0 w-full whitespace-nowrap text-sm font-medium text-gray-900">
                  <div className="flex items-center space-x-3 lg:pl-2">
                    <div
                      className={classNames(
                        event.name,
                        "flex-shrink-0 w-2.5 h-2.5 rounded-full"
                      )}
                      aria-hidden="true"
                    />
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
                      {event.partners.map((detail) => (
                        <Link href="#!">
                          <img
                            key={detail.id}
                            className="max-w-none h-6 w-6 rounded-full ring-2 hover:ring-1 ring-white cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-500"
                            src={BASE_URL + detail.logo}
                            alt={detail.name}
                          />
                        </Link>
                      ))}
                    </div>

                    {/* {event.totalMembers > event.members.length ? (
                      <Partners
                        morePartners={event.totalMembers - event.members.length}
                      />
                    ) : 
                     //     <a href="#!" onClick={}>
                    //   <span className="flex-shrink-0 text-xs leading-5 font-medium cursor-pointer">
                    //     +{event.totalMembers - event.members.length}
                    //   </span></a>
                    {/* null} */}
                  </div>
                </td>
                <td className="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-50 text-right">
                  {event.start_date}
                </td>
                <td className="px-6 py-3 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    Detail
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
