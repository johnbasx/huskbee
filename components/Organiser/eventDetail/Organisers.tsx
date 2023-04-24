import AddEventPartner from "./AddEventPartner";
import { BASE_URL } from "@constants/api-urls";
import { EventPartnersProps } from "../../../pages/event-detail/[eventId]";
import React from "react";

const Organisers = ({
  eventPartners,
}: {
  eventPartners: EventPartnersProps[];
}) => {
  return (
    <section
      aria-labelledby="timeline-title"
      className="lg:col-start-3 lg:col-span-1"
    >
      <div className="bg-gray-800/50 px-4 py-5 shadow sm:rounded-lg sm:px-6">
        <div>
          <h3 className="font-medium text-gray-100">Event partners</h3>
          <ul role="list" className="mt-2 ">
            {eventPartners.map((detail) => (
              <li
                key={detail.id}
                className="cursor-pointer py-3 flex justify-between items-center border-b border-transparent hover:border-gray-400"
              >
                <div className="flex items-center">
                  <img
                    src={BASE_URL + detail.logo}
                    alt=""
                    className="w-8 h-8 rounded-full"
                  />
                  <p className="ml-4 text-sm font-medium text-gray-100">
                    {detail.name}
                  </p>
                </div>
                <button
                  type="button"
                  className="ml-6 bg-transparent rounded-md text-sm font-medium text-red-500 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Remove<span className="sr-only"> {detail.name}</span>
                </button>
              </li>
            ))}
            <li className="py-2 flex justify-between items-center">
              <AddEventPartner />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Organisers;
